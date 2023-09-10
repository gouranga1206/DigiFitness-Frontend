import "../Styles/SecondMiddleBanner.css";
export default function SecondMiddleBanner() {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  return (
    <>
      <div className="poster-mid-2">
        <div className="banner_mid_one"></div>
        <div className="banner_internal">
          <div className="banner_content">
            <div className="content_lines">
              <h2>Our Customers Testimonials</h2>
              <p>
                Hear from Our Satisfied Customers and Discover the
                Transformative Power of <span>Digifitness</span>
              </p>
            </div>
          </div>
        </div>
        <div className="banner_mid_three">
          <div className="poster_mid"></div>
        </div>
      </div>
    </>
  );
}
