// import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const [myStyle, setMyStyle] = useState({
    //     style: {
    //         backgroundColor: props.mode === 'dark' ? '#4B5D67' : 'white',
    //         color: props.mode === 'dark' ? 'white' : '#042743'
    //     }
    // })

    // const [btnText, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = () => {
    //     if (myStyle.color === 'white') {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border : '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    // }

    return (
        <div className='container' style={{ padding:'10px', backgroundColor: props.mode === 'dark' ? 'rgb(15,38,65)' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1 className='my-3'>About Us</h1>
            {/* <div className="accordion" id="accordionExample" style={myStyle}> */}
            <div className="accordion" id="accordionExample" style={{ backgroundColor: props.mode === 'dark' ? '#4B5D67' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        {/* <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> */}
                        <button className="accordion-button" style={{ backgroundColor: props.mode === 'dark' ? '#4B5D67' : 'white', color: props.mode === 'dark' ? 'white' : '#042743', border: '1px solid white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    {/* <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"> */}
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{ backgroundColor: props.mode === 'dark' ? '#4B5D67' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
                        {/* <div className="accordion-body" style={myStyle}> */}
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? '#4B5D67' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? '#4B5D67' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
                    <h2 className="accordion-header" id="headingTwo" style={{ backgroundColor: props.mode === 'dark' ? '#4B5D67' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: props.mode === 'dark' ? '#4B5D67' : 'white', color: props.mode === 'dark' ? 'white' : '#042743', border: '1px solid white' }} >
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? '#4B5D67' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree" style={{ backgroundColor: props.mode === 'dark' ? '#4B5D67' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
                        <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'dark' ? '#4B5D67' : 'white', color: props.mode === 'dark' ? 'white' : '#042743', border: '1px solid white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? '#4B5D67' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                {/* <button type="button" onClick={toggleStyle} className="btn btn-primary">{btnText}</button> */}
            </div>
        </div>
    )
}
