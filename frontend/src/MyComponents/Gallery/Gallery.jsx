import "./Gallery.css";
import Navbar from "../Navbar/Navbar.jsx";

// Import your gallery images
import img1 from "../../Data/features/1.jpg";
import img2 from "../../Data/features/2.jpg";
import img3 from "../../Data/features/3.jpg";
import img4 from "../../Data/features/4.jpg";
import img5 from "../../Data/features/5.jpg";
import img6 from "../../Data/features/6.jpg";
import bgImg from "../../Data/6.jpg";

const Gallery = () => {
  return (
    <main>

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE 1 - GALLERY SECTION */}
      <section className="gallery-section container py-5">
        <div className="text-center mb-5">
          <h2>Our <em>Gallery</em></h2>
          <p>Explore moments from Hideaway</p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <img src={img1} className="img-fluid gallery-img" alt="gallery1" />
          </div>
          <div className="col-md-4">
            <img src={img2} className="img-fluid gallery-img" alt="gallery2" />
          </div>
          <div className="col-md-4">
            <img src={img3} className="img-fluid gallery-img" alt="gallery3" />
          </div>
          <div className="col-md-4">
            <img src={img4} className="img-fluid gallery-img" alt="gallery4" />
          </div>
          <div className="col-md-4">
            <img src={img5} className="img-fluid gallery-img" alt="gallery5" />
          </div>
          <div className="col-md-4">
            <img src={img6} className="img-fluid gallery-img" alt="gallery6" />
          </div>
        </div>
      </section>

      {/* PAGE 6 - NEWSLETTER SECTION */}
      <section
        className="page6 d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "500px",
          position: "relative",
        }}
      >
        <div className="page6-overlay"></div>

        <div className="page6-content">
          <h2>Join the <em>Hideaway</em> Newsletters</h2>
          <p>Subscribe to our mailing list to receive updates and promotional offers.</p>

          <form className="newsletter-form d-flex justify-content-center mt-4">
            <input
              type="email"
              placeholder="Enter Email Here"
              className="form-control email-input"
            />
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>

          <div className="footer-bottom mt-5">
            <p>© Hideaway 2018 | Template crafted by Themewagon</p>
            <div className="footer-links">
              <span>Home | Book Now | Contact | Events | Policies | Terms</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Gallery;
