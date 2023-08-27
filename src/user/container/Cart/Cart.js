import React from 'react';
import Htag from '../UI/H1toH6/Htag';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, remove } from '../../../redux/slice/cartSlice'

function Cart(props) {
    const dispatch = useDispatch();
    const cartData = useSelector(state => state.cart)
    const medicenData = useSelector(state => state.medicine)

    console.log(cartData, medicenData);

    let cartItems = cartData.item.map((v) => {
        let medicineItems = medicenData.medicine.find((m) => m.id === v.pid);

        let fdata = { ...medicineItems, ...v }

        return fdata
    })

    console.log(cartItems);

    const handleInc = (id) => {
        dispatch(increment(id))
    }

    const handleDec = (id) => {
        dispatch(decrement(id))
    }

    const handleRemove = (id) => {
        dispatch(remove(id))
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
                                <div className="card-body p-4 mb-4 rounded-1">
                                    <div className="row d-flex justify-content-between align-items-center">
                                        <div className="col-md-3 col-lg-3 col-xl-3">
                                            <p className="lead fw-normal mb-2">{v.name}</p>
                                            <p>
                                                <span class="text-muted">
                                                    {v.desc.substring(0, 100)}
                                                    {v.desc.length > 50 ? '...' : ''}
                                                </span>
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                            <button disabled={v.qyt === 0 ? true : false} className="btn btn-link px-2" onClick={() => handleDec(v.pid)}>
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
                <div className="d-flex total-data justify-content-between p-2 mb-2 rounded-1">
                    <h5 className="fw-bold mb-0">Total:</h5>
                    <h5 className="fw-bold mb-0">${totalprice}</h5>
                </div>
            </div>
        </section>
    );
}

export default Cart;