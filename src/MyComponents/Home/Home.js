import "./Home.css";
import headerImg1 from "../../Data/main-header-3.jpg";
import headerImg2 from "../../Data/main-header-1.jpg";
import headerImg3 from "../../Data/main-header-2.jpg";
import gallery from "../../Data/thumb-gallery.jpg";
import amenities from "../../Data/thumb-amneities.jpg";
import packages from "../../Data/thumb-packages.jpg";
import page4 from "../../Data/cta.jpg";
import img1 from "../../Data/features/1.jpg";
import img2 from "../../Data/features/2.jpg";
import img3 from "../../Data/features/3.jpg";
import img4 from "../../Data/features/4.jpg";
import img5 from "../../Data/features/5.jpg";
import img6 from "../../Data/features/6.jpg";
import bgImg from "../../Data/6.jpg";

function Home() {
  return (
    <>
      <main>
        <div
          id="carouselExampleFade"
          className="col-md-12 carousel slide carousel-fade position-relative"
          data-bs-ride="carousel"
        >
          {/* Fixed Navbar Overlay */}
          <nav className="custom-navbar d-flex justify-content-between align-items-center px-4">
            <h2 className="logo">Hideaway Resort</h2>
            <ul className="nav-links d-flex gap-4 m-0">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Pages</a>
              </li>
              <li>
                <a href="#">Gallary</a>
              </li>
              <li>
                <a href="#">Amenities</a>
              </li>
              <li>
                <a href="#">Packages</a>
              </li>
              <li>
                <a href="#">Our History</a>
              </li>
            </ul>
          </nav>

          <div className="carousel-inner">
            {/* First Slide */}
            <div className="carousel-item active">
              <img src={headerImg1} className="d-block w-100" alt="slide1" />
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                <h4>WEST VIRGINIA / UNITED STATES</h4>
                <h1>
                  The <em>Hideaway</em> Inn
                </h1>
              </div>
            </div>

            {/* Second Slide */}
            <div className="carousel-item">
              <img src={headerImg2} className="d-block w-100" alt="slide2" />
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                <h4>WEST VIRGINIA / UNITED STATES</h4>
                <h1>
                  Perfect <em>Vacation</em> Place
                </h1>
              </div>
            </div>

            {/* Third Slide */}
            <div className="carousel-item">
              <img src={headerImg3} className="d-block w-100" alt="slide3" />
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                <h4>WEST VIRGINIA / UNITED STATES</h4>
                <h1>
                  Perfect <em>Vacation</em> Place
                </h1>
              </div>
            </div>
          </div>

          {/* Prev/Next Buttons */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="page2 row">
          <div className="col-md-4">
            <img className="img-fluid" src={gallery} alt="Gallery" />
            <div className="text-center">Gallery</div>
          </div>
          <div className="col-md-4">
            <img className="img-fluid" src={amenities} alt="Amenities" />
            <div className="text-center">Amenities</div>
          </div>
          <div className="col-md-4">
            <img className="img-fluid" src={packages} alt="Packages" />
            <div className="text-center">Packages</div>
          </div>
        </div>

        <div className="row page3 mt-4">
          <div className="col-md-4">
            <h3 className="color-primary ls ms-3">
              An
              <em> inviting </em>
              escape
            </h3>
          </div>
          <div className="col-md-8">
            <p>
              Crafted with Bootstrap 4, Hideaway is perfectly responsive to
              every devices available. Thousands of CSS helper classes let you
              customize this template in any way you want, without writing any
              code. This is a dummy text that you can change customize as you
              like with your description.
            </p>
            <button className="btn1 mt-3">Our History</button>
          </div>
        </div>
        <div className="col-md-12">
          <div className="page4">
            <img className="page4img" src={page4}></img>
            <div className="col">
              <h1 class="text-center">
                Eagerly <em>waiting </em>to welcome you.
              </h1>
              <button className="page4btn mt-5">Book Your Stay</button>
            </div>
          </div>
        </div>

        <div className="page5 p-5 row mt-5">
          <div className="col-md-6 page5left">
            <h6 class="fs-0 mb-4 color-primary text-center">
              123 Fake Street, Stone Ridge, NY 12345
            </h6>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27228.31301290907!2d72.5796329!3d23.05191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1756983407823!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
          <div className="col-md-6 page5right">
            <div className="text-center mb-4">
              <a class="mx-1 mx-lg-2 mb-lg-4" href="#">
                Instagram
              </a>
              <span>/</span>
              <a class="mx-1 mx-lg-2 mb-lg-4" href="#">
                Facebook
              </a>
              <span>/</span>
              <a class="mx-1 mx-lg-2 mb-lg-4" href="#">
                Twitter
              </a>
            </div>
            <div className="row mb-4">
              <div className="col-md-4">
                <img src={img1}></img>
              </div>
              <div className="col-md-4">
                <img src={img2}></img>
              </div>
              <div className="col-md-4">
                <img src={img3}></img>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <img src={img4}></img>
              </div>
              <div className="col-md-4">
                <img src={img5}></img>
              </div>
              <div className="col-md-4">
                <img src={img6}></img>
              </div>
            </div>
          </div>
        </div>
        <div
          className="page6 m-5 d-flex flex-column justify-content-center align-items-center text-center"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "500px",
            position: "relative",
          }}
        >
          <div className="page6-overlay"></div>

          <div className="page6-content">
            <h2>
              Join the <em>Hideaway</em> Newsletters
            </h2>
            <p>
              Subscribe to our mailing list to receive updates and promotional
              offers.
            </p>

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
                <a href="#">Home</a>
                <a href="#">Book Now</a>
                <a href="#">Contact</a>
                <a href="#">Events</a>
                <a href="#">Policies</a>
                <a href="#">Term + Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
