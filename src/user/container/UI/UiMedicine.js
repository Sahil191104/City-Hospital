import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardTitle, CardText } from 'reactstrap';

function UiMedicine({ Udata }) {
    return (
        <>
            {
                Udata.map((v) => {
                    return (
                        <div className='col-md-3'>
                            <Card
                                style={{
                                    width: '18rem'
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
                                        {
                                            v.price
                                        }
                                    </CardText>
                                    <CardText>
                                        {
                                            v.desc
                                        }
                                    </CardText>
                                    {
                                        v.url ? <Button>
                                            Button
                                        </Button> : null
                                    }
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