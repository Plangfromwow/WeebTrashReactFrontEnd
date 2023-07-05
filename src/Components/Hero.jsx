import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
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
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
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
        </div>
      </div>
    </div>
  );
}
