import React from 'react';
import Htag from '../UI/H1toH6/Htag';
import { useSelector } from 'react-redux';

function Cart(props) {

    const cartData = useSelector(state => state.cart)
    const medicenData = useSelector(state => state.medicine)

    console.log(cartData, medicenData);

    let cartItems = cartData.item.map((v) => {
        let medicineItems = medicenData.medicine.find((m) => m.id === v.pid);

        let fdata = { ...medicineItems, ...v }

        return fdata
    })

    console.log(cartItems);

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
                                            <p><span class="text-muted">{v.desc.substring(0, 50)}</span></p> 
                                        </div>
                                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                            <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                <i className="fas fa-minus" />
                                            </button>
                                            <input id="form1" min={0} name="quantity" defaultValue={v.qyt} type="number" className="form-control form-control-sm" />
                                            <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                <i className="fas fa-plus" />
                                            </button>
                                        </div>
                                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                            <h5 className="mb-0">${v.price}</h5>
                                        </div>
                                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                            <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg" /></a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Cart;