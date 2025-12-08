import React, { useEffect, useRef } from "react";
import "./GallerySection.scss";

const galleryImages = [
  {
    src: "images/GalleryImages/Image1.png",
    alt: "Legal Documentation Process",
  },
  { src: "images/GalleryImages/Image2.png", alt: "Client Meeting Session" },
  {
    src: "images/GalleryImages/image3.png",
    alt: "Professional Legal Services",
  },
  { src: "images/GalleryImages/image4.png", alt: "Courtroom Consultation" },
  { src: "images/GalleryImages/image5.png", alt: "Legal Paperwork Assistance" },
  { src: "images/GalleryImages/image6.png", alt: "Team Discussion at Office" },
];

const GallerySection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 1; // adjust this for speed
    let direction = 1;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed * direction;

        // Reverse direction at ends
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          direction = -1;
        } else if (scrollContainer.scrollLeft <= 0) {
          direction = 1;
        }
      }
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
  }, []);

  return (
    <section className="gallery-section">
      <div className="container">
        <h2 className="title">Our Office &amp; Services Gallery</h2>

        <div className="gallery-scroll auto-scroll" ref={scrollRef}>
          {galleryImages.concat(galleryImages).map(
            (
              img,
              i // duplicate images for seamless loop
            ) => (
              <div className="image-card" key={i}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="gallery-img"
                  onError={(e) => {
                    console.error(`Failed to load image: ${img.src}`);
                    e.currentTarget.style.backgroundColor = "#eee";
                  }}
                  onLoad={() => console.log(`Successfully loaded: ${img.src}`)}
                />
                <div className="caption">{img.alt}</div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
