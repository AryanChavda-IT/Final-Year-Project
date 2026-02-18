import "./Amenities.css";

const Amenities = () => {
  return (
    <div className="container page-section text-center">
      <h1>Our <em>Amenities</em></h1>
      <p>Enjoy luxury facilities at Hideaway.</p>

      <div className="row mt-5">
        <div className="col-md-4">Swimming Pool</div>
        <div className="col-md-4">Spa & Wellness</div>
        <div className="col-md-4">Free WiFi</div>
      </div>
    </div>
  );
};

export default Amenities;
