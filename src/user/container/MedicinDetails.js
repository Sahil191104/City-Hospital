import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardSubtitle, CardTitle, CardText, Button } from 'reactstrap';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Htag from './UI/H1toH6/Htag';
import { useDispatch, useSelector } from 'react-redux';
import { removeToFav } from '../../redux/action/favorite.action';

function MedicinDetails() {
    const dispatch = useDispatch();
    let medData = useSelector(state => state.medicine);
    const myfavouritedata = useSelector(state => state.fav)
    console.log(myfavouritedata, medData);
    console.log(myfavouritedata);


    let cartitems = myfavouritedata.fav.map((v) => {
        let medicinceData = medData.medicine.find((m) => m.id === v.fid);

        let fData = { ...medicinceData, ...v };

        return fData
    })

    const handleRemoveicon = (id) => {
        dispatch(removeToFav(id))
    }

    return (
        <>
            <section id="medicine" className="medicine">
                <div className="container">
                    <div className="section-title">
                        <Htag name="h2tag1">Favorite</Htag>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-between">
                        {
                            cartitems.map((v) => {
                                return (
                                    <div className='col-md-3'>
                                        <Card
                                            style={{
                                                width: '18rem',
                                                margin: "15px"
                                            }}
                                        >
                                            <CardBody>
                                                <CardTitle className="d-flex" tag="h5">
                                                    {
                                                        v.name
                                                    }
                                                    <FavoriteIcon style={{ color: "#FF6337", cursor: 'pointer' }} onClick={handleRemoveicon} />
                                                </CardTitle>
                                                <CardSubtitle
                                                    className="mb-2 text-muted"
                                                    tag="h6"
                                                >
                                                    {
                                                        v.date
                                                    }
                                                </CardSubtitle>
                                                <CardText>
                                                    $
                                                    {
                                                        v.price
                                                    }
                                                </CardText>
                                                <CardText className='custom-desc'>
                                                    {
                                                        v.desc
                                                    }
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

        </>
    );
}

export default MedicinDetails;