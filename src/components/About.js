export default function About(props) {

    return (
        <div className='container' style={{ padding: '10px', backgroundColor: props.mode === 'dark' ? 'rgb(15,38,65)' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample" style={{ backgroundColor: props.mode === 'dark' ? '#4B5D67' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={{ backgroundColor: props.mode === 'dark' ? '#4B5D67' : 'white', color: props.mode === 'dark' ? 'white' : '#042743', border: '1px solid white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>About this Web-App</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{ backgroundColor: props.mode === 'dark' ? '#4B5D67' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? '#4B5D67' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
                            <p>TextUtils is a text-utility single page Web-Application built using React js. This has some operations as features that can be implemented to the given text such as converting to lower/upper case, removing extra spaces etc.</p>
                            <p>It also provides the user with an analysis of his text that gives the number of words and characters present in the text.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? '#4B5D67' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
                    <h2 className="accordion-header" id="headingTwo" style={{ backgroundColor: props.mode === 'dark' ? '#4B5D67' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: props.mode === 'dark' ? '#4B5D67' : 'white', color: props.mode === 'dark' ? 'white' : '#042743', border: '1px solid white' }} >
                            <strong>Concepts used in building this project</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? '#4B5D67' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
                            <p>This Web-App is built using React js. It involves concepts such as
                                File structure, JSX, Props and Proptypes, State and Handling events, React router
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree" style={{ backgroundColor: props.mode === 'dark' ? '#4B5D67' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
                        <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'dark' ? '#4B5D67' : 'white', color: props.mode === 'dark' ? 'white' : '#042743', border: '1px solid white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Source code of the Web-App</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? '#4B5D67' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
                            <p><a href="https://github.com/rv602/textutils" target="_blank">Github Repository</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
