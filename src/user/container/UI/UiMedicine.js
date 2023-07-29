import React from 'react';
import { Card, CardBody, CardSubtitle, CardTitle, CardText, Button } from 'reactstrap';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';

function UiMedicine({ Udata, OnClick, Onicon }) {
    console.log(Udata);

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
                                    <CardTitle className="d-flex" tag="h5">
                                        {
                                            v.name
                                        }
                                        <Link to="/medicindetails" >
                                            <Button class="bg-white border-0 text-dark" onClick={() => Onicon(v.id)} >
                                                <FavoriteBorderIcon />
                                            </Button>
                                        </Link>
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