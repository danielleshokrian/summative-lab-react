import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* Background video */}
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/coffee-pour.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="overlay">
        <h1>Welcome to Java Coffee Shop</h1>
        <p>
          We serve the finest coffees from around the world, roasted fresh
          and brewed to perfection. Come taste the difference!
        </p>
        <div className="buttons">
          <a href="/shop" className="btn">Shop Now</a>
        </div>
      </div>
    </div>
  );
}