import React, { useCallback, useState } from 'react';
import Htag from './UI/H1toH6/Htag';
import ListData from './ListData';

function Other(props) {

    const [theme, setTheme] = useState("dark");
    const [listOut, setListOut] = useState(1);

    const handellist = useCallback((n) => {
        return [listOut, listOut+n,listOut+n+1];
    }, [listOut])

    return (
        <section id="contact" className={`contact ${theme}`}>
            <div className="container">

                <center>
                    <div>
                        <div className="section-title">
                            <Htag name="h2tag1">Theme</Htag>
                        </div>
                        <button className='pt-2 ps-3 pb-2 pe-3' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Toggle</button>
                    </div>

                    <div>
                        <div className="section-title">
                            <Htag name="h2tag1">List Out</Htag>
                        </div>
                        <input type="number" onChange={(e) => setListOut(parseInt(e.target.value))} />

                        <ListData list={handellist} />
                    </div>
                </center>
            </div>
        </section>
    );
}

export default Other;