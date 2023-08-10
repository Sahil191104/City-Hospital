import React, { useContext } from 'react';
import { Card, CardBody, CardSubtitle, CardTitle, CardText, Button } from 'reactstrap';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Titel from './Title/Titel';
import Htag from './H1toH6/Htag';
import { ThemeContext } from '../Context/ThemeContext';

function UiDepartment({ Udata }) {

    let theme = useContext(ThemeContext);

    let color9 = theme.theme === 'dark' ? 'color9' : '';
    let color10 = theme.theme === 'dark' ? 'color10' : '';

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
                                                        <a className= {`nav-link active show ${color9}`} data-bs-toggle="tab" href={`#tab-${v.id}`}>{v.name}</a>
                                                        :
                                                        <a className={`nav-link ${color9}`} data-bs-toggle="tab"  href={`#tab-${v.id}`}>{v.name}</a>
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
                                                            <h3 className= {`${color10}`} >{v.name}</h3>
                                                            <Titel className="fst-italic">{v.desc}</Titel>
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
                                                            <h3 className= {`${color10}`} >{v.name}</h3>
                                                            <Titel className="fst-italic">{v.desc}</Titel>
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