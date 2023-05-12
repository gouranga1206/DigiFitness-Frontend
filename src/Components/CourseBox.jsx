import '../Styles/CourseBox.css'

export default function CourseBox() {
    return (
        <>
        <div className="Images-box">
        <div className="box">
          <div className="img-check-box img-ab-1"></div>
          <div className="text">
            <h2>Strength Training</h2>
            <p>
              Courses that focus on building muscle strength and power, such as
              weightlifting and bodyweight exercises.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="img-check-box img-ab-2"></div>
          <div className="text">
            <h2>Cardiovascular Training</h2>
            <p>
              Courses that improve cardiovascular endurance and help burn fat,
              such as running, cycling, and high-intensity interval training.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="img-check-box img-ab-3"></div>
          <div className="text">
            <h2>Yoga</h2>
            <p>
              Courses that focus on flexibility, balance, and mindfulness, using
              a combination of physical postures, breathing exercises, and
              meditation.
            </p>
          </div>
        </div>
      </div>

      <div className="Images-box">
        <div className="box">
          <div className="img-check-box img-ab-4"></div>
          <div className="text">
            <h2>Boxing bag workout</h2>
            <p>
            Courses that focus on building strength, flexibility, and balance, using controlled movements and focused breathing.            </p>
          </div>
        </div>
        <div className="box">
          <div className="img-check-box img-ab-5"></div>
          <div className="text">
            <h2>Dance fitness</h2>
            <p>
            Dance your way to fitness with our high-energy Zumba courses, led by certified instructors            </p>
          </div>
        </div>
        <div className="box">
          <div className="img-check-box img-ab-6"></div>
          <div className="text">
            <h2>Mindfulness and Meditation</h2>
            <p>
            Courses that focus on developing mindfulness and reducing stress and anxiety, through techniques such as deep breathing, visualization, and guided meditation.            </p>
          </div>
        </div>
      </div>

        </>
    )
}