import React from 'react';
import Titel from './Title/Titel';
import Htag from './H1toH6/Htag';

function UiDepartment({ Udata }) {
    console.log(Udata);

    return (
        <>
            <section id="departments" className="departments">
                <div className="container">
                    <div className="section-title">
                        <Htag name="h2tag1" >Departments</Htag>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <ul className="nav nav-tabs flex-column">
                                {
                                    Udata.map((v) => {
                                        return (
                                            <li className="nav-item">
                                                {
                                                    v.id === 1 ?
                                                        <a className="nav-link active show" data-bs-toggle="tab" href={`#tab-${v.id}`}>{v.name}</a>
                                                        :
                                                        <a className="nav-link" data-bs-toggle="tab" href={`#tab-${v.id}`}>{v.name}</a>
                                                }
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="col-lg-9 mt-4 mt-lg-0">
                            <div className="tab-content">
                                {
                                    Udata.map((v) => {
                                        return (
                                            v.id === 1 ?
                                                <div className="tab-pane active show" id={`tab-${v.id}`} key={v.id}>
                                                    <div className="row">
                                                        <div className="col-lg-8 details order-2 order-lg-1">
                                                            <h3>{v.name}</h3>
                                                            <Titel className="fst-italic">{v.desc}</Titel>
                                                        </div>
                                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                                            <img src={v.image} alt className="img-fluid" />
                                                        </div>
                                                        {/* <div className="col-lg-4 text-center order-1 order-lg-2">
                                                        <img src="../assets/img/departments-1.jpg" alt className="img-fluid" />
                                                    </div> */}
                                                    </div>
                                                </div>
                                                :
                                                <div className="tab-pane" id={`tab-${v.id}`} key={v.id}>
                                                    <div className="row">
                                                        <div className="col-lg-8 details order-2 order-lg-1">
                                                            <h3>{v.name}</h3>
                                                            <Titel className="fst-italic">{v.desc}</Titel>
                                                        </div>
                                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                                            <img src={v.image} alt className="img-fluid" />
                                                        </div>
                                                        {/* <div className="col-lg-4 text-center order-1 order-lg-2">
                                                        <img src="../assets/img/departments-1.jpg" alt className="img-fluid" />
                                                    </div> */}
                                                    </div>
                                                </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default UiDepartment;