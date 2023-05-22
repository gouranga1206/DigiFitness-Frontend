import '../Styles/PurchasePlan.css';

export default function PurchasePlan() {
    return (
        <>
           <div className="Planing-block">
            <h1>Choose the program</h1>
            <h3>Choose the Payment Option that Works Best for You and Start Your Fitness Journey Today</h3>
            <div className="plan-box">
                <div className="block" >Yearly Plan</div>
                <div className="block active_box" >Monthly Plan</div>
                <div className="block" >Weekly Plan</div>
            </div>

            <div className="payment-box">
                <div className="charges-box">
                <div className="Plan_text_box">
                        Basic Plan
                        <button className='colorless'>Free for a month</button>
                        <h2>$8.00 <span>/ Monthly</span></h2>
                    </div>
                    <div className="benefit_box">
                        <div className="benefit">
                            <div className="check"></div>
                            <div className="benefits_text">Unlimited Access Courses</div>
                        </div>
                        <div className="benefit">
                            <div className="check"></div>
                            <div className="benefits_text">Certificate After Completion</div>
                        </div>
                        <div className="benefit">
                            <div className="check"></div>
                            <div className="benefits_text">High Resolution Videos</div>
                        </div>
                        <div className="benefit">
                            <div className="check"></div>
                            <div className="benefits_text">24/7 Dedicated Support</div>
                        </div>
                    </div>
                    <div className="benefit_button_box no-style-box">
                        <span>Join Course Plan</span>
                        <div className="straight_Arrow black_arrow"></div>
                    </div>

                </div>
                <div className="charges-box active_plan">
                    <div className="Plan_text_box">
                        Standard Plan
                        <button className='green_box'>Most Popular</button>
                        <h2>$20.00 <span>/ Monthly</span></h2>
                    </div>
                    <div className="benefit_box">
                        <div className="benefit">
                            <div className="check"></div>
                            <div className="benefits_text">Unlimited Access Courses</div>
                        </div>
                        <div className="benefit">
                            <div className="check"></div>
                            <div className="benefits_text">Certificate After Completion</div>
                        </div>
                        <div className="benefit">
                            <div className="check"></div>
                            <div className="benefits_text">High Resolution Videos</div>
                        </div>
                        <div className="benefit">
                            <div className="check"></div>
                            <div className="benefits_text">24/7 Dedicated Support</div>
                        </div>
                    </div>
                    <div className="benefit_button_box">
                        <span>Join Course Plan</span>
                        <div className="straight_Arrow"></div>
                    </div>
                </div>
                <div className="charges-box ">
                <div className="Plan_text_box">
                        Exclusive Plan
                        <button className='colorless'>Free for a month</button>
                        <h2>$39.00 <span>/ Monthly</span></h2>
                    </div>
                    <div className="benefit_box">
                        <div className="benefit">
                            <div className="check"></div>
                            <div className="benefits_text">Unlimited Access Courses</div>
                        </div>
                        <div className="benefit">
                            <div className="check"></div>
                            <div className="benefits_text">Certificate After Completion</div>
                        </div>
                        <div className="benefit">
                            <div className="check"></div>
                            <div className="benefits_text">High Resolution Videos</div>
                        </div>
                        <div className="benefit">
                            <div className="check"></div>
                            <div className="benefits_text">24/7 Dedicated Support</div>
                        </div>
                    </div>
                    <div className="benefit_button_box no-style-box">
                        <span>Join Course Plan</span>
                        <div className="straight_Arrow black_arrow"></div>
                    </div>

                </div>
            </div>
           </div>
        </>
    )
}

// change color on clic
    
