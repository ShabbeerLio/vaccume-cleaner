import React, { useEffect } from 'react'
import "./Contact.css"
import { IoMail, IoLocationSharp } from "react-icons/io5";
import { useLocation } from 'react-router-dom';
import Form from '../../Component/Form/Form';
import cban from "../../Assets/Contact/contact us.jpg"
import PageBanner from '../../Component/PageBanner/PageBanner';
import call from "../../Assets/Call/call.png"

const Contact = (props) => {

    /* global dataLayer */
    const location = useLocation();

    useEffect(() => {
        document.title = props.title;

        const canonicalUrl = `${window.location.origin}${location.pathname}`;
        let canonicalLink = document.querySelector("link[rel='canonical']");
        if (canonicalLink) {
            canonicalLink.setAttribute("href", canonicalUrl);
        } else {
            canonicalLink = document.createElement("link");
            canonicalLink.setAttribute("rel", "canonical");
            canonicalLink.setAttribute("href", canonicalUrl);
            document.head.appendChild(canonicalLink);
        }

        const description = props.descriptions;
        let metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        } else {
            metaDescription = document.createElement("meta");
            metaDescription.setAttribute("name", "description");
            metaDescription.setAttribute("content", description);
            document.head.appendChild(metaDescription);
        }

        // Ensure dataLayer is initialized before the GA script loads
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }

        // Load the Google Analytics script only once
        const gaScriptId = 'ga-gtag';
        if (!document.getElementById(gaScriptId)) {
            const script = document.createElement('script');
            script.id = gaScriptId;
            script.async = true;
            //   script.src = 'https://www.googletagmanager.com/gtag/js?id=G-3BK9F87D6E';
            document.head.appendChild(script);

            script.onload = () => {
                gtag('js', new Date());
                // gtag('config', 'G-3BK9F87D6E');
            };
        }
    }, [props.title, props.descriptions, location.pathname]);

    return (
        <div className='Contact'>
            <PageBanner banner={cban} title={"Contact Us"} />
            <div className='Contact-main'>
                {/* <h1>Contact Us</h1> */}
                <div className='Contact-box'>
                    <div className='Contactbox-left'>
                        <div className="contactdetail-box">
                            <img src={call} alt="" />
                            <div className="contact-detail-card">
                                <IoLocationSharp />
                                <div className="contactcard-detail">
                                    <h6>Address</h6>
                                    <p>B-78,  B Block, Sector-88, Noida, Uttar Pradesh 201305 India</p>
                                </div>
                            </div>
                            <div className="contact-detail-card">
                                <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
                                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                        <path strokeDasharray="64" strokeDashoffset="64" d="M8 3C8.5 3 10.5 7.5 10.5 8C10.5 9 9 10 8.5 11C8 12 9 13 10 14C10.3943 14.3943 12 16 13 15.5C14 15 15 13.5 16 13.5C16.5 13.5 21 15.5 21 16C21 18 19.5 19.5 18 20C16.5 20.5 15.5 20.5 13.5 20C11.5 19.5 10 19 7.5 16.5C5 14 4.5 12.5 4 10.5C3.5 8.5 3.5 7.5 4 6C4.5 4.5 6 3 8 3Z">
                                            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></animate>
                                            <animateTransform attributeName="transform" begin="0.6s;lineMdPhoneCallLoop0.begin+2.6s" dur="0.5s" type="rotate" values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"></animateTransform>
                                        </path>
                                        <path strokeDasharray="4" strokeDashoffset="4" d="M14 7.04404C14.6608 7.34734 15.2571 7.76718 15.7624 8.27723M16.956 10C16.6606 9.35636 16.2546 8.77401 15.7624 8.27723" opacity="0">
                                            <set id="lineMdPhoneCallLoop0" attributeName="opacity" begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s" to="1"></set>
                                            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s" dur="0.2s" values="4;8"></animate>
                                            <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s;lineMdPhoneCallLoop0.begin+3.3s" dur="0.3s" values="0;4"></animate>
                                            <set attributeName="opacity" begin="1.6s;lineMdPhoneCallLoop0.begin+3.6s" to="0"></set>
                                        </path>
                                        <path strokeDasharray="10" strokeDashoffset="10" d="M20.748 9C20.3874 7.59926 19.6571 6.347 18.6672 5.3535M15 3.25203C16.4105 3.61507 17.6704 4.3531 18.6672 5.3535" opacity="0">
                                            <set attributeName="opacity" begin="1s;lineMdPhoneCallLoop0.begin+3s" to="1"></set>
                                            <animate fill="freeze" attributeName="stroke-dashoffset" begin="1s;lineMdPhoneCallLoop0.begin+3s" dur="0.2s" values="10;20"></animate>
                                            <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s;lineMdPhoneCallLoop0.begin+3.5s" dur="0.3s" values="0;10"></animate>
                                            <set attributeName="opacity" begin="1.8s;lineMdPhoneCallLoop0.begin+3.8s" to="0"></set>
                                        </path>
                                    </g>
                                </svg>
                                <div className="contactcard-detail">
                                    <h6>Phone No</h6>
                                    <p>Mob  : +91-9810291946</p>
                                    <p>Mob : +91-7017024925</p>
                                </div>
                            </div>
                            <div className="contact-detail-card">
                                <IoMail />
                                <div className="contactcard-detail">
                                    <h6>Email Address</h6>
                                    <p>info@krugervac.com</p>
                                    <p>sales@kbequipment.com </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='Contactbox-right'>
                        <Form />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact
