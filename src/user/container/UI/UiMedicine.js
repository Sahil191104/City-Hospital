import React from 'react';
import { Card, CardBody, CardSubtitle, CardTitle, CardText, Button } from 'reactstrap';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function UiMedicine({ Udata, OnClick, Onicon }) {
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

    let heartdata;

    const onicondata = (id) => {
        heartdata = localdataheart.find((v) => v.pid === id)
    }

    return (
        <>
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
                                        {
                                            heartdata ?
                                                <Button className='bg-white border-0' style={{ color: "#FF6337" }} onClick={handleRemoveicon} >
                                                    <FavoriteIcon />
                                                </Button>
                                                :
                                                <Button className='bg-white border-0' style={{ color: "#FF6337" }} onClick={() =>  Onicon(v.id)} >
                                                    <FavoriteBorderIcon />
                                                </Button>
                                        }
                                    </div>
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
                                    {
                                        v.url ? <Button>
                                            Button
                                        </Button> : null
                                    }
                                    <Button outline color="secondary" onClick={() => OnClick(v.id)} >Add Cart</Button>
                                </CardBody>
                            </Card>
                        </div>
                    )
                })
            }
        </>
    );
}

export default UiMedicine;