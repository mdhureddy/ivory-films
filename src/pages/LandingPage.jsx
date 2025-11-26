import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/LandingPage.css";
import img from '../Assets/10images/main-cover-01.png'
function LandingPage() {
  const logos = [
    "https://ivoryfilms.in/public/assets/img/Award-Logo-12.svg",
    "https://ivoryfilms.in/public/assets/img/Award-Logo-11.svg",
    "https://ivoryfilms.in/public/assets/img/Award-Logo-06.svg",
    "https://ivoryfilms.in/public/assets/img/Award-Logo-03.svg",
    "https://ivoryfilms.in/public/assets/img/Award-Logo-10.svg",
    "https://ivoryfilms.in/public/assets/img/Award-Logo-09.svg",
    "https://ivoryfilms.in/public/assets/img/Award-Logo-08.svg",
    "https://ivoryfilms.in/public/assets/img/Award-Logo-07.svg",
    "https://ivoryfilms.in/public/assets/img/Award-Logo-01.svg",
    "https://ivoryfilms.in/public/assets/img/Award-Logo-05.png",
    "https://ivoryfilms.in/public/assets/img/Award-Logo-04.svg",
    "https://ivoryfilms.in/public/assets/img/Award-Logo-02.svg",
  ];

  const testimonials = [
    {
      name: "Manan Rathi",
      message: `We are completely speechless after watching the wedding video. You didn’t just capture moments—you captured feelings, laughter, and the pure joy of our special day...`,
    },
    {
      name: "Oorja Shah",
      message: `Dear Milan & the entire Ivory Films team, It’s been a month since the wedding & we still can’t thank you enough...`,
    },
    {
      name: "Shrish Nov Thailand Wedding",
      message: `Hi Ivory team!!! We finally had a sit-down with all our family yesterday and watched the full film <3 It was absolutely magical...`,
    },
  ];

  const carouselImages = [
    "https://ivoryfilms.in/public/assets/img/home-img-slider-09.png",
    "https://ivoryfilms.in/public/assets/img/home-img-slider-08.png",
    "https://ivoryfilms.in/public/assets/img/home-img-slider-10.png",
    "https://ivoryfilms.in/assets/img/settings/editorial/thumb-1739606035_33390648fd83041be34e.jpg",
    "https://ivoryfilms.in/assets/img/portfolios/66829495c32c3/thumb-1719833749_163cff692101fab88e34.jpg",
    "https://ivoryfilms.in/public/assets/img/home-img-slider-12.png"
  ];

  return (
    <>
      {/* Photography Section */}
      <div>
        <img src={img} alt="" width={"100%"}/>
      </div>
      <section className="photography-section">
        <div className="photography-content">
          <h1 className="photography-title">
            DECODING NEW TRENDS <br /> FOR AGE-OLD TRADITIONS
          </h1>

          <div className="photography-layout">
            <div className="photography-image-left">
              <img
                src="https://ivoryfilms.in/assets/img/portfolios/67c96d01b649b/thumb-1741253889_bc4176c03834cd52e5f4.jpg"
                alt="Couple celebration"
              />
            </div>

            <div className="photography-text">
              <p>
                Specializing in contemporary photography and filmmaking, Ivory
                Films has been capturing the love and wedding stories of couples
                with unparalleled artistry. Our dedication lies in capturing
                your love story with elegance and precision.
              </p>

              <p>
                Each moment from your "once in a lifetime" event is meticulously
                selected and transformed into films and photographs you will
                treasure forever.
              </p>

              <p>
                Ivory Films emerged from a profound passion for photography and
                an exceptional aptitude for managing clients and orchestrating
                grand events.
              </p>
            </div>

            <div className="photography-image-right">
              <img
                src="https://ivoryfilms.in/assets/img/portfolios/66829495c32c3/thumb-1719833749_163cff692101fab88e34.jpg"
                alt="Couple with vintage car"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Wedding Showcase Section */}
      <section className="wedding-showcase">
        <h2>Capturing the Madness and Chaos, we call Weddings</h2>
        <p>
          Here, we present a meticulously curated collection of weddings from
          recent years, showcasing the authentic union of two souls.
        </p>

        <div className="wedding-gallery">
          <img
            src="https://ivoryfilms.in/assets/img/portfolios/66829495c32c3/thumb-1719833749_163cff692101fab88e34.jpg"
            alt="Wedding 1"
          />
          <img
            src="https://ivoryfilms.in/assets/img/portfolios/67c985c420d86/thumb-1741260228_1222ff94f9ce7b24c422.jpg"
            alt="Wedding 2"
          />
          <img
            src="https://ivoryfilms.in/assets/img/settings/editorial/thumb-1739606035_33390648fd83041be34e.jpg"
            alt="Wedding 3"
          />
          <img
            src="https://ivoryfilms.in/assets/img/portfolios/67c98177ca2cc/thumb-1741259127_5e3a8707562faea0064a.jpg"
            alt="Wedding 4"
          />
        </div>
      </section>
         <div className="explore-btn-container">
    <Link to="/editorial" className="explore-btn">
      Explore More
    </Link>
  </div>
      
      {/* Wedding Carousel Section */}
      <section className="carousel-section">
        <div id="weddingCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#weddingCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#weddingCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Featured In Section */}
      <section className="featured-section">
        <h2 className="featured-heading">Featured In</h2>
        <div className="logo-grid">
          {logos.map((logo, index) => (
            <div className="logo-item" key={index}>
              <img src={logo} alt={`Logo ${index}`} />
            </div>
          ))}
        </div>

        <h3 className="featured-subtitle">
          Unforgettable Moments, Timeless Films
        </h3>
      </section>
      {/* Wedding Showcase Section */}
<section className="wedding-showcase">
  <h2>Capturing the Madness and Chaos, we call Weddings</h2>
  <p>
    A glimpse into some of our most beautiful wedding moments — emotions,
    laughter, and timeless memories captured with love.
  </p>

 <div className="wedding-video-grid">
  <iframe
    src="https://player.vimeo.com/video/1063206034?h=46cfe321c0&title=0&byline=0&portrait=0"
    frameBorder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
    className="wedding-video-item"
    title="Wedding Video 1"
  ></iframe>

  <iframe
    src="https://player.vimeo.com/video/961997149?h=b52278688b&title=0&byline=0&portrait=0"
    frameBorder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
    className="wedding-video-item"
    title="Wedding Video 2"
  ></iframe>

  <iframe
    src="https://player.vimeo.com/video/1055838687?h=b52278688b&title=0&byline=0&portrait=0"
    frameBorder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
    className="wedding-video-item"
    title="Wedding Video 3"
  ></iframe>

  <iframe
    src="https://player.vimeo.com/video/953036587?h=b52278688b&title=0&byline=0&portrait=0"
    frameBorder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
    className="wedding-video-item"
    title="Wedding Video 4"
  ></iframe>
</div>

</section>
  {/* 🎯 Centered Explore Films Button */}
  <div className="explore-btn-container">
    <Link to="/editorial" className="explore-btn">
      Explore Films
    </Link>
  </div>


      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="testimonials-title">Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-name">{t.name}</div>
              <p className="testimonial-message">{t.message}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Banner Section */}
      <section className="contact-banner">
        <div className="overlay">
          <div className="contact-content">
            <h1>We would love to hear from you</h1>
            <p>
              We try to get to know our clients and build a genuine connection
              with them before the big day.
            </p>
            <Link to="/contact" className="contact-btn">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
