import React, { useEffect, useState } from 'react';
import './Products.css';
import Table from '../../Component/Table/Table';
import CallAction from '../../Component/CallAction/CallAction';
import FAQs from '../../Component/Work/FAQs';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = ({ title, descriptions, item }) => {
    /* global dataLayer */
    const location = useLocation();

    useEffect(() => {
        document.title = title;

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

        const description = descriptions;
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
    }, [title, descriptions, location.pathname]);

    const [data, setData] = useState(null);

    useEffect(() => {
        setData(null);

        if (item) {
            setData(item);
        }
    }, [item]);

    return (
        <>
            {data && (
                <>
                    {/* <PageBanner banner={data.cover} title={data.title} desc={data.description} /> */}
                    <div className="product-page" key={data.id}>
                        <div className='Products'>
                            <div className='Products-main'>
                                {data.products?.map((i) => (
                                    <ProductCard data={i}/>
                                ))}
                            </div>
                        </div>
                        {data.details.map((j) => (
                            <>
                                <div className='Products' key={j.id}>
                                    <div className='Products-main'>
                                        <div className='Products-box'>
                                            <div className='Products-item'>
                                                <div className="product-detail">
                                                    <div >
                                                        <Table item={j} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </>
            )}
            <div className='Products'>
                <div className='Products-main'>
                    <div className='Products-box'>
                        <div className="product-faq">
                            <FAQs />
                        </div>
                    </div>
                </div>
            </div>
            <CallAction />
        </>
    );
}

export default Products;
