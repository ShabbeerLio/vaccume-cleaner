import React, { useEffect } from 'react'
import "./About.css"
import abbanner from "../../Assets/About/about banner.jpg"
import PageBanner from '../../Component/PageBanner/PageBanner'
import PresClients from '../../Component/PresClients/PresClients'
import CallAction from '../../Component/CallAction/CallAction'
import AboutPage from '../../Component/AboutPage/AboutPage'
import { useLocation } from 'react-router-dom'

const About = (props) => {
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
      // script.src = 'https://www.googletagmanager.com/gtag/js?id=G-S2XS9C6S8C';
      document.head.appendChild(script);

      script.onload = () => {
        gtag('js', new Date());
        // gtag('config', 'G-S2XS9C6S8C');
      };
    }
  }, [props.title, props.descriptions, location.pathname]);

  return (
    <div className='About'>
      <PageBanner banner={abbanner} title={"About Us"} />
      <AboutPage />
      <PresClients />
      <CallAction />
    </div>
  )
}

export default About
