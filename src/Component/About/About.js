import React from 'react'
import "./About.css"
import Aboutimg from "../../Assets/About/about.png"

const AboutUs = () => {

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }

    return (
        <div className="aboutUs">
            <div className="about-main">
                <div className="about-title">
                    {/* <h1>About</h1> */}

                    <span></span>
                </div>
                <div className="about-items">
                    <div className="about-left">
                        <div className="about-detail">
                            <h2>About Us</h2>
                            <h3>PROVIDING CLEANING SOLUTIONS</h3>
                            <p>Kruger Vac is one of the leading suppliers of commercial and industrial vacuum cleaners and other cleaning equipment. Kruger Vac is established with and idea to provide most advanced and latest technological products and concepts in commercial and industrial cleaning. Kruger Vac strives to become most preferred company with customised and user-friendly solutions in the market. </p>
                            <p>Our vision aspire us to provide an intelligent system that chooses the best source of environmental mechanize and manual cleaning equipment which provide resolution for abundant, efficient, and eco-friendly cleaning to help from tiny sensors to homes and businesses. We are a team of professionals attempts to keep the quality and merit intact with happy customers.</p>
                        </div>
                        <div className="about-experience">
                            <div className="about-degit">
                                <h3>20+<span>Years</span></h3>
                            </div>
                            <div className="about-degit-title">
                                <p>Combined Experiences</p>
                            </div>
                        </div>
                        {/* <div className="about-button">
                            <Link to="/site-visit" onClick={toTop}>
                                <p>Interested in Site Visit ?</p>
                            </Link>
                        </div> */}
                    </div>
                    <div className="about-right">
                        <img className="image2" src={Aboutimg} alt="DLF Andheri Mumbai" />
                        {/* <div className="about-best">
                            <img src={best} alt="" />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
