// import "./Home.css";
// import Navbar from "../Navbar/Navbar";

// import headerImg1 from "../../Data/main-header-3.jpg";
// import headerImg2 from "../../Data/main-header-1.jpg";
// import headerImg3 from "../../Data/main-header-2.jpg";
// import gallery from "../../Data/thumb-gallery.jpg";
// import amenities from "../../Data/thumb-amneities.jpg";
// import packages from "../../Data/thumb-packages.jpg";
// import page4 from "../../Data/cta.jpg";
// import img1 from "../../Data/features/1.jpg";
// import img2 from "../../Data/features/2.jpg";
// import img3 from "../../Data/features/3.jpg";
// import img4 from "../../Data/features/4.jpg";
// import img5 from "../../Data/features/5.jpg";
// import img6 from "../../Data/features/6.jpg";
// import bgImg from "../../Data/6.jpg";

// function Home() {
//   return (
//     <>
//       <main>
//         <div
//           id="carouselExampleFade"
//           className="col-md-12 carousel slide carousel-fade position-relative"
//           data-bs-ride="carousel"
//         >
//           {/* ✅ Navbar Component (same overlay position) */}
//           <Navbar />

//           <div className="carousel-inner">
//             {/* First Slide */}
//             <div className="carousel-item active">
//               <img src={headerImg1} className="d-block w-100" alt="slide1" />
//               <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
//                 <h4>WEST VIRGINIA / UNITED STATES</h4>
//                 <h1>
//                   The <em>Hideaway</em> Inn
//                 </h1>
//               </div>
//             </div>

//             {/* Second Slide */}
//             <div className="carousel-item">
//               <img src={headerImg2} className="d-block w-100" alt="slide2" />
//               <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
//                 <h4>WEST VIRGINIA / UNITED STATES</h4>
//                 <h1>
//                   Perfect <em>Vacation</em> Place
//                 </h1>
//               </div>
//             </div>

//             {/* Third Slide */}
//             <div className="carousel-item">
//               <img src={headerImg3} className="d-block w-100" alt="slide3" />
//               <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
//                 <h4>WEST VIRGINIA / UNITED STATES</h4>
//                 <h1>
//                   Perfect <em>Vacation</em> Place
//                 </h1>
//               </div>
//             </div>
//           </div>

//           {/* Prev Button */}
//           <button
//             className="carousel-control-prev"
//             type="button"
//             data-bs-target="#carouselExampleFade"
//             data-bs-slide="prev"
//           >
//             <span className="carousel-control-prev-icon"></span>
//             <span className="visually-hidden">Previous</span>
//           </button>

//           {/* Next Button */}
//           <button
//             className="carousel-control-next"
//             type="button"
//             data-bs-target="#carouselExampleFade"
//             data-bs-slide="next"
//           >
//             <span className="carousel-control-next-icon"></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>

//         <div className="page2 row">
//           <div className="col-md-4">
//             <img className="img-fluid" src={gallery} alt="Gallery" />
//             <div className="text-center">Gallery</div>
//           </div>
//           <div className="col-md-4">
//             <img className="img-fluid" src={amenities} alt="Amenities" />
//             <div className="text-center">Amenities</div>
//           </div>
//           <div className="col-md-4">
//             <img className="img-fluid" src={packages} alt="Packages" />
//             <div className="text-center">Packages</div>
//           </div>
//         </div>

//         <div className="row page3 mt-4">
//           <div className="col-md-4">
//             <h3 className="color-primary ls ms-3">
//               An <em> inviting </em> escape
//             </h3>
//           </div>
//           <div className="col-md-8">
//             <p>
//               Crafted with Bootstrap 4, Hideaway is perfectly responsive to
//               every devices available. Thousands of CSS helper classes let you
//               customize this template in any way you want.
//             </p>
//             <button className="btn1 mt-3">Our History</button>
//           </div>
//         </div>

//         <div className="col-md-12">
//           <div className="page4">
//             <img className="page4img" src={page4} alt="cta" />
//             <div className="col">
//               <h1 className="text-center">
//                 Eagerly <em>waiting </em>to welcome you.
//               </h1>
//               <button className="page4btn mt-5">Book Your Stay</button>
//             </div>
//           </div>
//         </div>

//         <div className="page5 p-5 row mt-5">
//           <div className="col-md-6 page5left">
//             <h6 className="fs-0 mb-4 color-primary text-center">
//               123 Fake Street, Stone Ridge, NY 12345
//             </h6>
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27228.31301290907!2d72.5796329!3d23.05191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1756983407823!5m2!1sen!2sin"
//               width="600"
//               height="450"
//               style={{ border: 0 }}
//               loading="lazy"
//               title="Google Map"
//             ></iframe>
//           </div>

//           <div className="col-md-6 page5right">
//             <div className="text-center mb-4">
//               <span>Instagram / Facebook / Twitter</span>
//             </div>

//             <div className="row mb-4">
//               <div className="col-md-4"><img src={img1} alt="img1" /></div>
//               <div className="col-md-4"><img src={img2} alt="img2" /></div>
//               <div className="col-md-4"><img src={img3} alt="img3" /></div>
//             </div>

//             <div className="row">
//               <div className="col-md-4"><img src={img4} alt="img4" /></div>
//               <div className="col-md-4"><img src={img5} alt="img5" /></div>
//               <div className="col-md-4"><img src={img6} alt="img6" /></div>
//             </div>
//           </div>
//         </div>

//         <div
//           className="page6 m-5 d-flex flex-column justify-content-center align-items-center text-center"
//           style={{
//             backgroundImage: `url(${bgImg})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             minHeight: "500px",
//             position: "relative",
//           }}
//         >
//           <div className="page6-overlay"></div>

//           <div className="page6-content">
//             <h2>Join the <em>Hideaway</em> Newsletters</h2>
//             <p>
//               Subscribe to our mailing list to receive updates and promotional
//               offers.
//             </p>

//             <form className="newsletter-form d-flex justify-content-center mt-4">
//               <input
//                 type="email"
//                 placeholder="Enter Email Here"
//                 className="form-control email-input"
//               />
//               <button type="submit" className="submit-btn">
//                 Submit
//               </button>
//             </form>

//             <div className="footer-bottom mt-5">
//               <p>© Hideaway 2018 | Template crafted by Themewagon</p>
//               <div className="footer-links">
//                 <span>Home | Book Now | Contact | Events | Policies | Terms</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

// export default Home;



import "./Home.css";
// import Navbar from "../Navbar/Navbar.jsx";
import { Link } from "react-router-dom";


import headerImg1 from "../../Data/main-header-1.jpg";
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

const Home = () => {
  return (
    <main>
      <div
        id="carouselExampleFade"
        className="col-md-12 carousel slide carousel-fade position-relative"
        data-bs-ride="carousel"
      >
        {/* <Navbar /> */}

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={headerImg1} className="d-block w-100" alt="slide1" />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
              <h4>WEST VIRGINIA / UNITED STATES</h4>
              <h1>The <em>Hideaway</em> Inn</h1>
            </div>
          </div>

          <div className="carousel-item">
            <img src={headerImg2} className="d-block w-100" alt="slide2" />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
              <h4>WEST VIRGINIA / UNITED STATES</h4>
              <h1>Perfect <em>Vacation</em> Place</h1>
            </div>
          </div>

          <div className="carousel-item">
            <img src={headerImg3} className="d-block w-100" alt="slide3" />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
              <h4>WEST VIRGINIA / UNITED STATES</h4>
              <h1>Perfect <em>Vacation</em> Place</h1>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* PAGE 2 */}
<div className="page2 row text-center">

  <div className="col-md-4">
    <Link to="/gallery" className="page2-link">
      <img className="img-fluid" src={gallery} alt="Gallery" />
      <div>Gallery</div>
    </Link>
  </div>

  <div className="col-md-4">
    <Link to="/amenities" className="page2-link">
      <img className="img-fluid" src={amenities} alt="Amenities" />
      <div>Amenities</div>
    </Link>
  </div>

  <div className="col-md-4">
    <Link to="/packages" className="page2-link">
      <img className="img-fluid" src={packages} alt="Packages" />
      <div>Packages</div>
    </Link>
  </div>

</div>


      {/* PAGE 3 */}
      <div className="row page3 mt-4">
        <div className="col-md-4">
          <h3 className="color-primary ls ms-3">
            An <em> inviting </em> escape
          </h3>
        </div>
        <div className="col-md-8">
          <p>
            Crafted with Bootstrap 4, Hideaway is perfectly responsive to every devices available.
          </p>
          <button className="btn1 mt-3">Our History</button>
        </div>
      </div>

      {/* PAGE 4 */}
      <div className="col-md-12">
        <div className="page4">
          <img className="page4img" src={page4} alt="cta" />
          <div className="col">
            <h1 className="text-center">
              Eagerly <em>waiting </em>to welcome you.
            </h1>
            <button className="page4btn mt-5">Book Your Stay</button>
          </div>
        </div>
      </div>

      {/* PAGE 5 */}
      <div className="page5 p-5 row mt-5">
        <div className="col-md-6 page5left">
          <h6 className="fs-0 mb-4 color-primary text-center">
            123 Fake Street, Stone Ridge, NY 12345
          </h6>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27228.31301290907!2d72.5796329!3d23.05191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1756983407823!5m2!1sen!2sin"
            style={{ border: 0 }}
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>

        <div className="col-md-6 page5right">
          <div className="text-center mb-4">
            <span>Instagram / Facebook / Twitter</span>
          </div>

          <div className="row mb-4">
            <div className="col-md-4"><img src={img1} alt="img1" /></div>
            <div className="col-md-4"><img src={img2} alt="img2" /></div>
            <div className="col-md-4"><img src={img3} alt="img3" /></div>
          </div>

          <div className="row">
            <div className="col-md-4"><img src={img4} alt="img4" /></div>
            <div className="col-md-4"><img src={img5} alt="img5" /></div>
            <div className="col-md-4"><img src={img6} alt="img6" /></div>
          </div>
        </div>
      </div>

      {/* PAGE 6 */}
      <div
        className="page6 m-5 d-flex flex-column justify-content-center align-items-center text-center"
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
            <input type="email" placeholder="Enter Email Here" className="form-control email-input"/>
            <button type="submit" className="submit-btn">Submit</button>
          </form>

          <div className="footer-bottom mt-5">
            <p>© Hideaway 2018 | Template crafted by Themewagon</p>
            <div className="footer-links">
              <span>Home | Book Now | Contact | Events | Policies | Terms</span>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
};

export default Home;
