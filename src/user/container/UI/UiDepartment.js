import React from 'react';
import { Card, CardBody, CardSubtitle, CardTitle, CardText, Button } from 'reactstrap';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Titel from './Title/Titel';
import Htag from './H1toH6/Htag';

function UiDepartment({ Udata, OnClick, Onicon }) {
    console.log(Udata);

    const handleRemoveicon = () => {
        localStorage.removeItem("CartDetails")
    }

    let localdataheart = JSON.parse(localStorage.getItem("CartDetails"));
    console.log(localdataheart);
    let heartCounter = 0;

    if (localdataheart) {
        heartCounter = localdataheart.reduce((acc, v, i) => acc + v.qyt, 0);
        console.log(heartCounter);
    }

    return (
        <>
            <section id="departments" className="departments">
                <div className="container">
                    <div className="section-title">
                        <Htag name="h2tag1">Departments</Htag>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <ul className="nav nav-tabs flex-column">
                                {
                                    Udata.map((v) => {
                                        return (
                                            <li className="nav-item">
                                                <a className="nav-link active show" data-bs-toggle="tab" href={v.pid}>{v.name}</a>
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
                                            <div className="tab-pane active show" id={v.pid}>
                                                <div className="row">
                                                    <div className="col-lg-8 details order-2 order-lg-1">
                                                        <h3>{v.name}</h3>
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
            {
                Udata.map((v) => {
                    return (
                        <div className='col-md-3'>
                            <Card
                                style={{
                                    width: '18rem',
                                    margin: "15px"
                                }}
                            >
                                {
                                    v.url ? <img
                                        alt="Sample"
                                        src="https://picsum.photos/300/200"
                                    /> : null
                                }

                                <CardBody>
                                    <div className='d-flex justify-content-between'>
                                        <CardTitle className="d-flex" tag="h5">
                                            {
                                                v.name
                                            }
                                        </CardTitle>
                                    </div>
                                    <CardText className='custom-desc'>
                                        {
                                            v.desc
                                        }
                                    </CardText>
                                    {
                                        v.url ? <Button>
                                            Button
                                        </Button> : null
                                    }
                                    {/* <Button outline color="secondary" onClick={() => OnClick(v.id)} >Add Cart</Button> */}
                                </CardBody>
                            </Card>
                        </div>
                    )
                })
            }
        </>
    );
}

export default UiDepartment;