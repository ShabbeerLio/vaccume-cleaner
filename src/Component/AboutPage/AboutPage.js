import React from 'react'
import "./AboutPage.css"
import Aboutimg from "../../Assets/About/about.jpg"
import Aboutimg1 from "../../Assets/About/about2.jpg"

const AboutPage = () => {

    return (
        <div className="aboutUs">
            <div className="about-main">
                <div className="about-items">
                    <div className="about-left">
                        <div className="about-detail">
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
                    </div>
                    <div className="aboutPage-right">
                        <img src={Aboutimg} alt="DLF Andheri Mumbai" />
                    </div>
                </div>
                <div className="about-items">
                    <div className="aboutPage-right">
                        <img src={Aboutimg1} alt="DLF Andheri Mumbai" />
                    </div>
                    <div className="about-left">
                        <div className="about-detail">
                            <h3>Our Aim Is To Provide Best In Quality <span>CLEANING MACHINES</span></h3>
                            <p> At Kruger Vac, we take pride in offering a wide range of innovative cleaning solutions that cater to various industries, ensuring that every client's unique requirements are met with precision and reliability. Our product line includes high-performance vacuum cleaners, sweepers, scrubbers, and other specialized cleaning equipment, all designed with cutting-edge technology to deliver unmatched cleaning efficiency.  </p>
                            <p>We are committed to providing not only the latest in cleaning technology but also ensuring that our solutions are sustainable, reducing environmental impact while enhancing productivity. With a customer-centric approach, Kruger Vac focuses on building long-term relationships by offering customized cleaning solutions that prioritize ease of use, durability, and cost-effectiveness.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutPage
