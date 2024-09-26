import React from 'react'
import "./PageBanner.css"

const PageBanner = ({ banner ,title ,desc}) => {
    return (
        <div className='PageBanner'>
            <img src={banner} alt="" />
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    )
}

export default PageBanner
