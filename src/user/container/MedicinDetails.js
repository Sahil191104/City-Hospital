import React, { useContext, useEffect, useState } from 'react';
import { Card, CardBody, CardSubtitle, CardTitle, CardText, Button } from 'reactstrap';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Htag from './UI/H1toH6/Htag';
import { ThemeContext } from './Context/ThemeContext';

function MedicinDetails() {

    let theme = useContext(ThemeContext);

    let color9 = theme.theme === 'dark' ? 'color9' : '';

    const [cartData, setCartData] = useState([]);
    const [medicenData, setMedicenData] = useState([]);

    console.log(cartData, medicenData);

    let cartItems = cartData.map((v) => {

        let medicineItems = medicenData.find((m) => m.id === v.pid);

        let fdata = { ...medicineItems, ...v }

        return fdata
    })

    useEffect(() => {
        let cartData = JSON.parse(localStorage.getItem("CartDetails"));
        setCartData(cartData);

        try {
            fetch("http://localhost:3004/medicines")
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Something went wrong');
                })
                .then((data) =>
                    setMedicenData(data)
                )
                .catch((error) =>
                    console.log(error)
                )
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <>
            <section id="medicine" className={`medicine ${color9}`}>
                <div className="container">
                    <div className="section-title">
                        <Htag name="h2tag1">Favorite</Htag>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-5 justify-content-between">
                        {
                            cartItems.map((v) => {
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
                                                    <FavoriteBorderIcon />
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