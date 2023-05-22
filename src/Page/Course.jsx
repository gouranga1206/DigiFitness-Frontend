import SearchBanner from "../Components/SearchBanner";
import Navbar from "../Components/Navbar";
import CourseBox from "../Components/CourseBox";
import Footer from "../Components/Footer";
import "../Styles/Course.css";
let Course = () => {
  return (
    <div className="Course">
      <SearchBanner />
      <Navbar />
      {/* ----------------------- */}
      <div className="course">
          <p className="course_punchtext">"Believe in yourself, <br></br>You will achieve the Milestone."</p>
          <h3 className="course_headingText">
          Transform your fitness with our certified and experienced trainers.
        </h3>

        <div className="filter">

        </div>
        <CourseBox />
        <Footer />
      </div>

    </div>
  );
};

export default Course;
