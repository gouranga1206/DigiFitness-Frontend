import SearchBanner from "../Components/SearchBanner"
import Navbar  from "../Components/Navbar"
import VideoBanner from "../Components/VideoBanner"
import './Home.css'

export default function Home() {
    return(
        <div className="homeTab">
          <SearchBanner />
          <Navbar />
          <VideoBanner />
          {/* ------------------- */}
          <div className="introLine">
            <div className="tag"></div>
            <h1>Experience Exceptional Training with our Certified Fitness Pros</h1>
            <h3>Transform your fitness with our certified and experienced trainers.</h3>
          </div>
          {/* ------------------- */}

          <div className="Images">
            <div className="img-check img-a"></div>
            <div className="img-check img-b"></div>
            <div className="img-check img-c"></div>
            <div className="img-check img-d"></div>
          </div>

          {/* ------------------- */}

          <div className="Expand_Course">
            <div className="info">
              <h1>Choose the Program</h1>
              <p>Are you want to change your life?</p>
            </div>
            <div className="Button sign-in ExCour">Expand Course<div id='arrow-1'></div></div>
          </div>

          {/* ------------------- */}

          <div className="Images">
            <div className="img-check img-a"></div>
            <div className="img-check img-b"></div>
            <div className="img-check img-c"></div>
            <div className="img-check img-d"></div>
          </div>
          <div className="Images">
            <div className="img-check img-a"></div>
            <div className="img-check img-b"></div>
            <div className="img-check img-c"></div>
            <div className="img-check img-d"></div>
          </div>

        </div>
    )
}
