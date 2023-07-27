import React, { useEffect, useState } from 'react';
import Htag from '../UI/H1toH6/Htag';
// import { useDispatch, useSelector } from 'react-redux';
// import { decrecart, incretcart, removecart } from '../../../redux/action/cart.action';

function Cart1(props) {
    // const dispatch = useDispatch();
    // const cartData = useSelector(state => state.cart)
    // const medicenData = useSelector(state => state.medicine)

    const [cartData, setCartData] = useState([]);
    const [medicenData, setMedicenData] = useState([]);

    console.log(cartData, medicenData);

    let cartItems = cartData.map((v) => {
        let medicineItems = medicenData.find((m) => m.id === v.pid);

        let fdata = { ...medicineItems, ...v }

        return fdata
    })

    useEffect(() => {
        let cartData = JSON.parse(localStorage.getItem("CartData"));
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

    console.log(cartItems);

    const handleInc = (id) => {
        // dispatch(incretcart(id))
        console.log(id);
    }

    const handleDec = (id) => {
        // dispatch(decrecart(id))
        console.log(id);    }

    const handleRemove = (id) => {
        // dispatch(removecart(id))
        console.log(id);
    }

    let totalprice = cartItems.reduce((acc, v, i) => acc + v.price * v.qyt, 0)

    return (
        <section id="medicine" className="medicine">
            <div className="container">
                <div className="section-title">
                    <Htag name="h2tag1">Cart</Htag>
                </div>
                {
                    cartItems.map((v, i) => {
                        return (
                            <>
                                <div className="card-body p-4">
                                    <div className="row d-flex justify-content-between align-items-center">
                                        <div className="col-md-3 col-lg-3 col-xl-3">
                                            <p className="lead fw-normal mb-2">{v.name}</p>
                                            <p><span class="text-muted">{v.desc}</span></p>
                                        </div>
                                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                            <button disabled={v.qyt === 1 ? true : false} className="btn btn-link px-2" onClick={() => handleDec(v.pid)}>
                                                <i className="fas fa-minus" />
                                            </button>
                                            <span class="border rounded ps-4 pe-4 pt-1">{v.qyt}</span>
                                            <h5></h5>
                                            <button className="btn btn-link px-2" onClick={() => handleInc(v.pid)}>
                                                <i className="fas fa-plus" />
                                            </button>
                                        </div>
                                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                            <h5 className="mb-0">${v.price * v.qyt}</h5>
                                        </div>
                                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                            <a onClick={() => handleRemove(v.pid)} href="#!" className="text-danger"><i className="fas fa-trash fa-lg" /></a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
                <div className="d-flex justify-content-between p-2 mb-2" style={{ backgroundColor: '#FFF4F3' }}>
                    <h5 className="fw-bold mb-0">Total:</h5>
                    <h5 className="fw-bold mb-0">${totalprice}</h5>
                </div>
            </div>
        </section>
    );
}

export default Cart1;