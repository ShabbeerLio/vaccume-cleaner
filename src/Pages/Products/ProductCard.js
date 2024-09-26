import React, { useEffect } from 'react'
import "./ProductCard.css"
// import ScrollReveal from 'scrollreveal'

const ProductCard = ({ data }) => {
    var index = (data.id);

    // scroll animation
    // useEffect(() => {
    //     const sr = ScrollReveal({
    //         origin: 'right',
    //         distance: '100px',
    //         duration: 2000,
    //         reset: true,
    //     });

    //     sr.reveal('.Productcard-box-left', {})
    //     return () => sr.destroy();
    // }, []);

    // useEffect(() => {
    //     const sr = ScrollReveal({
    //         origin: 'right',
    //         distance: '100px',
    //         duration: 2000,
    //         reset: true,
    //     });

    //     sr.reveal('.Productcard-box-right-odd', {})
    //     return () => sr.destroy();
    // }, []);

    // useEffect(() => {
    //     const sr = ScrollReveal({
    //         origin: 'left',
    //         distance: '100px',
    //         duration: 2000,
    //         reset: true,
    //     });

    //     sr.reveal('.Productcard-box-right', {})
    //     return () => sr.destroy();
    // }, []);

    // useEffect(() => {
    //     const sr = ScrollReveal({
    //         origin: 'left',
    //         distance: '100px',
    //         duration: 2000,
    //         reset: true,
    //     });

    //     sr.reveal('.Productcard-box-left-odd', {})
    //     return () => sr.destroy();
    // }, []);

    return (
        <div className='ProductCard-box'>
            {index % 2 != 0 ? (
                <>
                    <div className="Productcard-box-right">
                        <h2>{data.name}</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium enim quis ratione, adipisci, odio aliquam eum quia a corporis blanditiis unde. Mollitia atque natus perspiciatis officiis rerum commodi quibusdam incidunt aperiam a. Cumque dolores itaque, veniam provident fugiat magni! Earum, ipsam voluptatem illo cum expedita, impedit, provident fugit dolorum molestias laborum pariatur. Reiciendis nihil, quod, quam in delectus cum ipsam tempora quae dolores voluptates quas! </p>
                    </div>
                    <div className="Productcard-box-left">
                        <img src={data.cover} alt="" />
                    </div>
                </>
            ) : (
                <>
                    <div className="Productcard-box-left-odd">
                        <img src={data.cover} alt="" />
                    </div>
                    <div className="Productcard-box-right-odd">
                        <h2>{data.name}</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium enim quis ratione, adipisci, odio aliquam eum quia a corporis blanditiis unde. Mollitia atque natus perspiciatis officiis rerum commodi quibusdam incidunt aperiam a. Cumque dolores itaque, veniam provident fugiat magni! Earum, ipsam voluptatem illo cum expedita, impedit, provident fugit dolorum molestias laborum pariatur. Reiciendis nihil, quod, quam in delectus cum ipsam tempora quae dolores voluptates quas! </p>
                    </div>
                </>
            )}
        </div>
    )
}

export default ProductCard
