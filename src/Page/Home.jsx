import SearchBanner from "../Components/SearchBanner";
import Navbar from "../Components/Navbar";
import VideoBanner from "../Components/VideoBanner";
import CourseBox from "../Components/CourseBox";
import Scrollable from "../Components/Scrollable";
import MiddleBanner from "../Components/MiddleBanner";
import Rating from "../Components/Rating";
import SecondMiddleBanner from "../Components/SecondMiddleBanner";
import Slider from "../Components/Slide";
import "../Styles/Home.css";

export default function Home() {
  return (
    <div className="homeTab">
      <SearchBanner />
      <Navbar />
      <VideoBanner />

      {/* ------------------- */}

      <div className="introLine">
        <div className="tag"></div>
        <h1>Experience Exceptional Training with our Certified Fitness Pros</h1>
        <h3>
          Transform your fitness with our certified and experienced trainers.
        </h3>
      </div>

      <div className="Images">
        <div className="img-check img-a"></div>
        <div className="img-check img-b"></div>
        <div className="img-check img-c"></div>
        <div className="img-check img-d"></div>
      </div>

      <div className="Expand_Course">
        <div className="info">
          <h1>Choose the Program</h1>
          <p>Are you want to change your life?</p>
        </div>
        <div className="Button sign-in ExCour">
          Expand all Course<div id="arrow-1"></div>
        </div>
      </div>

      {/* ------------------- */}

      <CourseBox />
      <MiddleBanner />

      {/* ------------------- */}

      <div className="Expand_Course jump">
        <div className="info new_text">
          <h1>Course Content</h1>
          <p>
            <b>32 Sections</b>
            <b>376 lectures</b>
            <b>27h 8m total length</b>
          </p>
        </div>
        <div className="Button sign-in ExCour">
          Expand all Course<div id="arrow-1"></div>
        </div>
      </div>

      <Scrollable />

      <div className="banner-divider">
        <div className="partners">
          <h1>The Best Trusted Client in this Fitness world</h1>
          <div className="logos-partner">
            <div className="logos logo-img-a"></div>
            <div className="logos logo-img-b"></div>
            <div className="logos logo-img-c"></div>
            <div className="logos logo-img-d"></div>
            <div className="logos logo-img-e"></div>
            <div className="logos logo-img-f"></div>
          </div>
        </div>
      </div>

      <div className="Expand_Course">
        <div className="info post2">
          <div className="img-Tag"></div>
          <p>Most Popular Courses</p>
        </div>
        <div className="Button sign-in ExCour">
          Expand all Course<div id="arrow-1"></div>
        </div>
      </div>

      {/* --------------------- */}


      <Rating />
      <SecondMiddleBanner />
      <Slider />
    </div>
  );
}
