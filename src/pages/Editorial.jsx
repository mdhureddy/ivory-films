import React, { useState } from "react";
import "../styles/Editorial.css";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Editorial() {
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const images = [
    "https://images.pexels.com/photos/1779491/pexels-photo-1779491.jpeg",
    "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg",
    "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    "https://images.pexels.com/photos/2959193/pexels-photo-2959193.jpeg",
    "https://images.pexels.com/photos/2987769/pexels-photo-2987769.jpeg",
    "https://images.pexels.com/photos/2959195/pexels-photo-2959195.jpeg",
    "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
    "https://ivoryfilms.in/assets/img/settings/editorial/thumb-1739605505_819182d51eec4a210eab.jpg",
    "https://ivoryfilms.in/assets/img/settings/editorial/thumb-1739605505_400e37d179590d9f56e8.jpg",
    "https://images.pexels.com/photos/168092/pexels-photo-168092.jpeg",
    "https://images.pexels.com/photos/2959191/pexels-photo-2959191.jpeg",
    "https://images.pexels.com/photos/3014842/pexels-photo-3014842.jpeg",
    "https://images.pexels.com/photos/3014855/pexels-photo-3014855.jpeg",
    "https://images.pexels.com/photos/2959196/pexels-photo-2959196.jpeg",
    "https://images.pexels.com/photos/2959198/pexels-photo-2959198.jpeg",
    "https://ivoryfilms.in/assets/img/settings/editorial/thumb-1744261735_5749fcf91cfe62981186.jpg",
    "https://ivoryfilms.in/assets/img/settings/editorial/thumb-1739613152_d73986f08e7a794c64e1.jpg",
    "https://ivoryfilms.in/assets/img/settings/editorial/thumb-1739613152_5439aa3e90ae0faf44f9.jpg",
    "https://ivoryfilms.in/assets/img/settings/editorial/thumb-1739606099_182f10f7a0f5ad50da7a.jpg",
    "https://ivoryfilms.in/assets/img/settings/editorial/thumb-1739606099_09580d86d8be78c1cc98.jpg",
  ];

  // ====== Lightbox Controls ======
  const handleZoom = (index) => setZoomedIndex(index);
  const closeZoom = () => setZoomedIndex(null);
  const showNext = () =>
    setZoomedIndex((prev) => (prev + 1) % images.length);
  const showPrev = () =>
    setZoomedIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="editorial-container">
      {/* ===== Top Section ===== */}
      <section className="editorial-hero">
        <h1>
          Capturing the Madness and Chaos,
          <br /> we call Weddings
        </h1>
        <p>
          Here, we present a meticulously curated collection of weddings from
          recent years showcasing the authentic union of two souls in the most
          genuine and heartfelt manner imaginable.
        </p>
      </section>

      {/* ===== Image Gallery ===== */}
      <section className="editorial-gallery">
        {images.map((src, index) => (
          <div
            key={index}
            className="editorial-image"
            onClick={() => handleZoom(index)}
          >
            <img src={src} alt={`Wedding ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </section>

      {/* ===== Lightbox / Carousel ===== */}
      {zoomedIndex !== null && (
        <div className="lightbox">
          <button className="close-btn" onClick={closeZoom}>
            <FaTimes />
          </button>
          <button className="prev-btn" onClick={showPrev}>
            <FaArrowLeft />
          </button>
          <img
            src={images[zoomedIndex]}
            alt="Zoomed"
            className="lightbox-image"
          />
          <button className="next-btn" onClick={showNext}>
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
}

export default Editorial;
