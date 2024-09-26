import React, { useEffect, useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import "./Navbar.css"
import { Link } from 'react-router-dom';
import Logo from "../../Assets/logo.png"
import { IoLogoWhatsapp } from "react-icons/io5";
import FormFloat from './FormFloat';
import celimg from "../../Assets/celebrate.png"

const Navbar = (props) => {

    const [activeLink, setActiveLink] = useState('/');
    const [isCollapseOpen, setIsCollapseOpen] = useState(false);
    const [formopen, setFormopen] = useState(false);
    const [showEnquiry, setShowEnquiry] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 100; // Adjust this value based on your requirement
            setShowEnquiry(show);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    const handleLinkClick = (path) => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
        setActiveLink(path);
        closeMenu();
    };

    const closeMenu = () => {

        const navbarCollapse = document.getElementById('navbarSupportedContent');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
        const togglerIcon = document.querySelectorAll('.toggler-icon');
        togglerIcon.forEach(icon => {
            icon.classList.toggle('active');
        });
        setIsCollapseOpen(!isCollapseOpen);
    };

    const formIsOpen = () => {
        setFormopen(!formopen);
    };

    const formIsClose = () => {
        setFormopen(false);
    };


    return (
        <>
            <div className="navBar">
                <div id="myNavMenu" className="nav-menu">
                    <nav className="row navbar navbar-expand-lg navbar-light align-items-lg-end">
                        <div className="container-fluid">
                            <div className="company-logo">
                                <div className="company-logo-box">
                                    <Link
                                        className={`nav-link ${activeLink === '/' ? 'active' : ''}`}
                                        to="/krugervac"
                                    // onClick={() => handleLinkClick('/')}
                                    >
                                        {/* <h5>DLF Andheri Mumbai</h5> */}
                                        <img src={Logo} alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="nav-button">
                                <button className={`navbar-toggler ${isCollapseOpen ? '' : 'collapsed'} d-flex d-lg-none flex-column justify-content-around`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                    onClick={closeMenu}>
                                    <span className="toggler-icon top-bar"></span>
                                    <span className="toggler-icon middle-bar"></span>
                                    <span className="toggler-icon bottom-bar"></span>
                                </button>
                            </div>
                            <div className="navbar-items">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link
                                                className={`nav-link ${activeLink === '/' ? 'active' : ''}`}
                                                to="/krugervac"
                                                onClick={() => handleLinkClick('/')}
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                className={`nav-link ${activeLink === '/about' ? 'active' : ''}`}
                                                to="/krugervac/about"
                                                onClick={() => handleLinkClick('/about')}
                                            >
                                                About
                                            </Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle"
                                                to="#" id="navbarDropdown"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                Products
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><Link className={`dropdown-item ${activeLink === '/walk-behind-automatic-scrubber-driers' ? 'active' : ''}`} to="/krugervac/industrial-sweeping-machines" onClick={() => handleLinkClick('/walk-behind-automatic-scrubber-driers')}> <RiArrowDropDownLine />Industrial Sweeping Machines</Link></li>
                                                <li><Link className={`dropdown-item ${activeLink === '/ride-on-automatic-scrubber-driers' ? 'active' : ''}`} to="/krugervac/road-sweeping-machines" onClick={() => handleLinkClick('/ride-on-automatic-scrubber-driers')}> <RiArrowDropDownLine />Road Sweeping Machines</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                className={`nav-link ${activeLink === '/contact-us' ? 'active' : ''}`}
                                                to="/krugervac/contact-us"
                                                onClick={() => handleLinkClick('/contact-us')}
                                            >Contact Us</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                className={`nav-link ${activeLink === '/contact-us2' ? 'active' : ''}`}
                                                to="/krugervac/contact-us"
                                                onClick={() => handleLinkClick('/contact-us2')}
                                            >Send Enquery</Link>
                                        </li>
                                        <div className="nav-action">
                                            <div className="call-button">
                                                <p>
                                                    <Link to='tel: +919810291946'>
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
                                                        9810291946
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div className="celebrate">
                                <img src={celimg} alt="" />
                            </div>
                            <div className="fix-icon-call">
                                <span className='shine'></span>
                                <Link to='tel: +919810291946'>
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
                                </Link>
                            </div>
                            <div className="fix-icon">
                                <span className='shine'></span>
                                <Link to="https://wa.me/+919810291946">
                                    <IoLogoWhatsapp />
                                </Link>
                            </div>
                            {showEnquiry && (
                                <div className="fix-icon-enquery">
                                    <p onClick={formIsOpen}>ENQUIRE NOW</p>
                                </div>
                            )}
                            {formopen && (
                                <>
                                    <FormFloat formIsClose={formIsClose} />
                                </>
                            )}
                        </div>
                    </nav>

                </div>

            </div>
        </>
    )
}

export default Navbar
