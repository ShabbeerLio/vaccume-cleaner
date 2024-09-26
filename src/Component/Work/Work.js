import React from 'react'
import "./Work.css"
import box1 from "../../Assets/Work/ROAD SWEEPING MACHINES 1.png"
import box2 from "../../Assets/Work/indutrialclean.png"
import FAQs from './FAQs'
// import box2 from "../../Assets/Work/work2.jpg"
// import box3 from "../../Assets/Work/work3.jpeg"

const Work = () => {
    return (
        <div className='Work'>
            <div className='Work-main'>
                <div className='Work-box'>
                    <div className='Work-box-left'>
                        <img src={box1} alt="" />
                        <img src={box2} alt="" />
                    </div>
                    <div className='Work-box-right'>
                        <FAQs/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
