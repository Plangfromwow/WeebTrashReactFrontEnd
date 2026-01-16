import { useEffect, useRef, useState, useCallback } from "react";
import reviews from "../reviewData";
import Card from "./Card";

/**
 * Reviews
 * Auto-scrolling, infinitely looping, horizontally draggable (with inertia) review carousel.
 * Behaviour (per requirements):
 *  - Slow continuous leftward scroll.
 *  - Pauses on hover and while user is dragging / inertia running.
 *  - Seamless loop via duplicating content.
 *  - Click / touch drag with momentum; after momentum finishes, auto-scroll resumes.
 *  - Touch friendly.
 *  - Resize + visibility aware; pauses when tab hidden; recalculates widths.
 *
 * Adjust constants below (SPEED_PX_PER_SEC, INERTIA_DECEL) to tune feel.
 */

// CONFIG CONSTANTS (tweak as needed)
const SPEED_PX_PER_SEC = 30; // slow marquee-like speed
const INERTIA_DECEL = 0.0022; // px/ms^2 - larger -> stops sooner
const MAX_INERTIA_DURATION = 3000; // ms safety cap

export default function Reviews() {
  const outerRef = useRef(null); // wrapper
  const trackRef = useRef(null); // moving flex track (duplicated content)
  const contentWidthRef = useRef(0); // width of one sequence
  const rawXRef = useRef(0); // unwrapped translation value (negative grows)
  const lastTsRef = useRef(null); // timestamp of last RAF frame
  const rafRef = useRef(null);
  const isHoveringRef = useRef(false);
  const isUserInteractingRef = useRef(false); // dragging or inertia
  const velocityRef = useRef(0); // px/ms (negative when moving left)
  const inertiaStartRef = useRef(null);

  const [ready, setReady] = useState(false);

  // Derived wrapped X for rendering (state-less to avoid re-renders every frame)
  const applyTransform = useCallback(() => {
    if (!trackRef.current) return;
    const w = contentWidthRef.current || 1;
    // Wrap rawX into [-w, 0)
    let raw = rawXRef.current;
    if (w > 0) {
      // Keep raw within [-w*2, 0] to prevent float drift
      if (raw <= -w * 2) raw += w;
      if (raw >= 0) raw -= w;
      const wrapped = ((raw % w) + w) % w; // 0..w
      const x = -wrapped; // negative translateX
      trackRef.current.style.transform = `translate3d(${x}px,0,0)`;
    }
  }, []);

  const measure = useCallback(() => {
    if (!trackRef.current) return;
    // Each sequence length is half the children since we duplicate exactly twice
    const children = trackRef.current.children;
    if (!children.length) return;
    let firstSeqWidth = 0;
    const half = children.length / 2;
    for (let i = 0; i < half; i++) {
      const el = children[i];
      firstSeqWidth += el.getBoundingClientRect().width;
      // Add gap (Tailwind gap-4 -> 1rem = 16px). Simpler: compute margin-right diff
      // We'll inspect computed style for margin-right to be robust
      const style = window.getComputedStyle(el);
      const mr = parseFloat(style.marginRight) || 0;
      firstSeqWidth += mr;
    }
    contentWidthRef.current = firstSeqWidth;
    applyTransform();
    setReady(true);
  }, [applyTransform]);

  // Animation loop
  const loop = useCallback((ts) => {
    if (lastTsRef.current == null) lastTsRef.current = ts;
    const dt = ts - lastTsRef.current; // ms
    lastTsRef.current = ts;

    const paused = isHoveringRef.current && !isUserInteractingRef.current;
    const w = contentWidthRef.current;
    if (w > 0 && !paused) {
      // Determine base auto speed (negative for leftward)
      let autoV = -SPEED_PX_PER_SEC / 1000; // px/ms
      let v = autoV;

      // If user inertia is active, we add that velocity (dominant) until it decays
      if (isUserInteractingRef.current && velocityRef.current !== 0) {
        v = velocityRef.current; // might be positive or negative depending drag direction
        // Apply deceleration toward 0 (friction)
        const sign = Math.sign(v);
        let newSpeed = Math.abs(v) - INERTIA_DECEL * dt;
        if (newSpeed <= 0.01) {
          velocityRef.current = 0;
          isUserInteractingRef.current = false; // inertia done
        } else if (inertiaStartRef.current && ts - inertiaStartRef.current > MAX_INERTIA_DURATION) {
          velocityRef.current = 0;
          isUserInteractingRef.current = false;
        } else {
          velocityRef.current = newSpeed * sign;
        }
      }

      rawXRef.current += v * dt; // accumulate
      applyTransform();
    }

    rafRef.current = requestAnimationFrame(loop);
  }, [applyTransform]);

  // Start RAF
  useEffect(() => {
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [loop]);

  // Measure after mount & on resize
  useEffect(() => {
    measure();
    const resize = () => measure();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [measure]);

  // Pause when page hidden
  useEffect(() => {
    const onVis = () => {
      if (document.hidden) {
        // treat as hover pause w/out state changes; skip frames naturally
        isHoveringRef.current = true;
      } else {
        isHoveringRef.current = false;
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // Pointer / drag logic
  useEffect(() => {
    const outer = outerRef.current;
    if (!outer) return;
    let pointerDown = false;
    let lastClientX = 0;
    let lastMoveTs = 0;
    let recentVelSamples = []; // [{v, t}]

    const onPointerDown = (e) => {
      pointerDown = true;
      isUserInteractingRef.current = true;
      velocityRef.current = 0; // cancel any prior inertia
      inertiaStartRef.current = null;
      lastClientX = e.clientX;
      lastMoveTs = performance.now();
      recentVelSamples = [];
      outer.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e) => {
      if (!pointerDown) return;
      const now = performance.now();
      const dx = e.clientX - lastClientX; // pointer delta
      // Invert direction so dragging left moves content right (typical grab-scroll feel)
      rawXRef.current -= dx;
      applyTransform();
      const dt = now - lastMoveTs;
      if (dt > 0) {
        const instV = -dx / dt; // velocity aligned with content movement
        recentVelSamples.push({ v: instV, t: now });
        recentVelSamples = recentVelSamples.filter((s) => now - s.t < 120);
      }
      lastClientX = e.clientX;
      lastMoveTs = now;
    };

    const onPointerUp = () => {
      if (!pointerDown) return;
      pointerDown = false;
      // Compute average velocity
      if (recentVelSamples.length) {
        const avg =
          recentVelSamples.reduce((acc, s) => acc + s.v, 0) / recentVelSamples.length;
        if (Math.abs(avg) > 0.01) {
          velocityRef.current = avg * 0.9; // slightly damp initial
          inertiaStartRef.current = performance.now();
        } else {
          // No meaningful velocity; end interaction so auto scroll resumes
          isUserInteractingRef.current = false;
        }
      } else {
        isUserInteractingRef.current = false;
      }
    };

    outer.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    return () => {
      outer.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
  }, [applyTransform]);

  const handleMouseEnter = () => {
    isHoveringRef.current = true;
  };
  const handleMouseLeave = () => {
    isHoveringRef.current = false;
  };

  // Build duplicated list once (stable reference)
  const items = reviews.map((rev) => (
    <div
      id={"review" + rev.id}
      key={rev.id}
      className="shrink-0 select-none carousel-item"
      style={{ WebkitUserSelect: "none", userSelect: "none" }}
    >
      <Card {...rev} />
    </div>
  ));
  return (
    <section
      aria-label="Customer reviews carousel"
      className="w-full bg-neutral py-4"
    >
      <div
        ref={outerRef}
        className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="group"
      >
        {/* Track: we duplicate items for seamless loop */}
        <div
          ref={trackRef}
          className="flex gap-4 will-change-transform"
          style={{ transform: "translate3d(0,0,0)" }}
        >
          {items}
          {items /* duplicate */}
        </div>
        {!ready && (
          <div className="absolute inset-0 flex items-center justify-center text-sm opacity-60">
            Loading…
          </div>
        )}
      </div>
    </section>
  );
}
