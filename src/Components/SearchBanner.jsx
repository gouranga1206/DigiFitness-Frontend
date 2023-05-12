import '../Styles/SearchBanner.css'

export default function SearchBanner() {
    return(
        <div id="SearchBanner">
            <div className="SearchMenus">
                <div className="logo">
                </div>
                <div className="Search">
                    <div className="butt"><div className="butt1"></div></div>
                    <input type="search" name="search-bar" id="search-bar" placeholder='Search your Fitness Course' />
                    <div className="butt"><div className="butt2"></div></div>
                </div>
                <div className="Log-Sign">
                    <div className="Button sign-in"><div id='user-1'></div>Sign in</div>
                    <div className="Button sign-up"><div id='user-2'></div>Sign up</div>
                </div>
            </div>
        </div>
    )
}
