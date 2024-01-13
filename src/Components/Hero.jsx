import { TypeAnimation } from "react-type-animation";
import CityViewTemp from "../assets/CityViewTemp.jpg";

export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${CityViewTemp})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md lg:max-w-3xl">
          <h1 className="mb-5 text-5xl font-bold">
            By Weebs, For{" "}
            <span
              className="bg-gradient-to-r bg-clip-text  text-transparent 
            from-accent to-secondary
            animate-text"
            >
              Weebs
            </span>
          </h1>
          <p className="mb-5 lg:text-2xl">
            Weeb Trash: Downriver&apos;s anime haven since 2022! Unearth a
            treasure trove of figures, wall scrolls, keychains, posters, towels,
            and more. Embrace your inner weeb and indulge in the world of
            Japanese animation with us!
          </p>
          <a
            href="https://weebtrash.limitedrun.com"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn btn-primary">
              Find Your
              <TypeAnimation
                sequence={["Waifu", 10000, "Husbando", 10000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-r bg-clip-text  text-transparent 
            from-accent to-secondary
            animate-text"
                cursor={false}
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
