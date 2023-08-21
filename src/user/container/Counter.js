import React, { useMemo, useState } from 'react';
import Htag from './UI/H1toH6/Htag';

function Counter(props) {

    const [value, setValue] = useState(0);
    const [factorial, setFactorial] = useState(0);


    const handleFactorial = () => {
        console.log("Factorial");
        let fact = 1;
        if (factorial > 1) {
            for (let i = factorial; i >= 1; i--) {
                fact = fact * i;
            }
        }

        return fact;
    }

    const result = useMemo(() => {
        return handleFactorial();
    }, [factorial])

    return (
        <section id="contact" className="contact">
            <div className="container">

                <center>
                    <div>
                        <div className="section-title">
                            <Htag name="h2tag1">Counter</Htag>
                        </div>
                        <button className='pt-2 ps-3 pb-2 pe-3' onClick={() => setValue(value + 1)}>+</button>
                        <span className='m-3'>{value}</span>
                        <button className='pt-2 ps-3 pb-2 pe-3' onClick={() => setValue(value - 1)}>-</button>
                    </div>

                    <div>
                        <div className="section-title">
                            <Htag name="h2tag1">Factorial</Htag>
                        </div>
                        <input type="number" onChange={(e) => setFactorial(parseInt(e.target.value))} />
                        <div>Factorial is: {result}</div>
                    </div>
                </center>
            </div>
        </section>
    );
}

export default Counter;