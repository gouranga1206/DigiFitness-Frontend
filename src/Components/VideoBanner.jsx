import '../Styles/VideoBanner.css'
import {Link} from "react-router-dom";

export default function VideoBanner() {
    return (
        <div className="videoBanner">
            <div className="videoBanner__content_one">
                    <p>Discover a Better Way to Get Fit with</p>
                    <div className="style_text"></div>
                    <div className="Redirect_Buttons">
                    <div className="Button sign-in VC_course"><Link to='/course'>View Course<div id='arrow-1'></div></Link></div>
                    <div className="Button sign-up VC_1">About Us<div id='arrow-1'></div></div>
                </div>
            </div>
            <div className="videoBanner__content_two">
            </div>

        </div>
    )
}