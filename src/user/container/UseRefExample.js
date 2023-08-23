import React, { useEffect, useRef, useState } from 'react';
import Htag from './UI/H1toH6/Htag';

function UseRefExample(props) {

    const [rendering, setRendering] = useState('')
    const ref = useRef(0)
    const nameref = useRef('');

    useEffect(() => {
        ref.current = ref.current + 1;
        console.log(nameref.current.value);
    }, [rendering])

    const handleFocus = (Ref1) => {
        Ref1.current.style.backgroundColor = "#FFF4F3"
        Ref1.current.style.border = "1px solid #FF6337"
    }

    return (
        <section id="contact" className="contact">
            <div className="container">
                <center>
                    <div>
                        <div className="section-title">
                            <Htag name="h2tag1">UseRef</Htag>
                        </div>
                        <input type="text" ref={nameref} onFocus={() => handleFocus(nameref)} onChange={(e) => setRendering(e.target.value)} />

                        <p>Rendering Value is: {rendering}</p>
                        <p>Rendering Count Value is: {ref.current}</p>
                    </div>
                </center>
            </div>
        </section>
    );
}

export default UseRefExample;