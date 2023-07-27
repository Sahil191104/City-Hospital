import React from 'react';
import { Card, CardBody, CardSubtitle, CardTitle, CardText, Button } from 'reactstrap';

function UiMedicine1(props) {
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
                                    <CardTitle tag="h5">
                                        {
                                            v.name
                                        }
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

export default UiMedicine1;