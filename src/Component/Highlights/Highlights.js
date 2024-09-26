import React from 'react'
import "./Highlights.css"
import high from "../../Assets/Highlights/highlights.png"
import walkimg from "../../Assets/Walkthrough/walkthrough.png"


const Highlights = () => {

    return (
        <div className='Highlights'>
            <div className='Highlights-main'>
                <div className="highlights-item">
                    <div className="highlights-right">
                        <img src={walkimg} alt="DLF Andheri Mumbai" />
                    </div>
                    <div className="highlights-left">
                        <h2>Our Auto Scrubber dryers</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolores voluptate expedita molestiae numquam? In quam beatae eligendi nam doloremque quasi ipsum distinctio ea dicta quisquam aliquid aliquam, dolores sapiente doloribus iusto veniam! Cumque quia voluptatum blanditiis distinctio illum, aut ducimus porro velit harum? Corrupti unde ea iure at quia?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolores voluptate expedita molestiae numquam? In quam beatae eligendi nam doloremque quasi ipsum distinctio ea dicta quisquam aliquid aliquam, dolores sapiente doloribus iusto veniam! </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Highlights
