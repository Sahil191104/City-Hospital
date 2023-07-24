import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardTitle, CardText } from 'reactstrap';
import { useDispatch } from 'react-redux';

function UiMedicine({ Udata }) {

    const dispatch = useDispatch();

    return (
        <>
            {
                dispatch.map((v) => {
                    return (
                        <div className='col-md-3'>
                            <Card
                                style={{
                                    width: '18rem'
                                }}
                            >
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
                                            v.expiry
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