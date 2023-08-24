import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux';
import { Box, CircularProgress } from '@mui/material';

function UiMedicine({ Udata, OnClick, Onicon }) {
    console.log(Udata);
    const carts = useSelector(state => state.cart)

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

    let localDataIcon = JSON.parse(localStorage.getItem("CartDetails"))

    let popupViews = document.querySelectorAll('.popup-view');
    let popupBtns = document.querySelectorAll('.popup-btn');
    let closeBtns = document.querySelectorAll('.close-btn');

    //javascript for quick view button
    let popup = function (popupClick) {
        popupViews[popupClick].classList.add('active');
    }
    popupBtns.forEach((popupBtn, i) => {
        popupBtn.addEventListener("click", () => {
            popup(i);
        });
    });

    //javascript for close button
    closeBtns.forEach((closeBtn) => {
        closeBtn.addEventListener("click", () => {
            popupViews.forEach((popupView) => {
                popupView.classList.remove('active');
            });
        });
    });

    return (
        <>
            {
                Udata.map((v) => {
                    return (
                        <>
                            {
                                carts.loading ?
                                    <Box className="d-flex justify-content-center" >
                                        <CircularProgress backdrop sx={{ color: '#FF6337', margin: "300px auto", backgroundColor: "rgba(255,255,255,0.7)", zIndex: "9999" }} />
                                    </Box> :
                                    <div className="product">
                                        <div className="product-card">
                                            <h2 className="name">{v.name}</h2>
                                            <span className="price">${v.price}.00</span>
                                            <a className="popup-btn">Quick View</a>
                                            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRueydgLsFumxg1LVnm0-zKEUgnbvHNSO8TGQ&usqp=CAU" className="product-img" alt /> */}
                                        </div>
                                        <div className="popup-view">
                                            <div className="popup-card">
                                                <a><i className="fas fa-times close-btn" /></a>
                                                <div className="product-img">
                                                    {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRueydgLsFumxg1LVnm0-zKEUgnbvHNSO8TGQ&usqp=CAU" alt /> */}
                                                </div>
                                                <div className="info">
                                                    <h2>{v.name}
                                                        {
                                                            v.id === localDataIcon ?
                                                                <FavoriteIcon style={{ color: "#FF6337", cursor: 'pointer' }} onClick={handleRemoveicon} />
                                                                :
                                                                <FavoriteBorderIcon style={{ color: "#FF6337", cursor: 'pointer' }} onClick={() => Onicon(v.id)} />
                                                        }
                                                    </h2>
                                                    <p>{v.desc}</p>
                                                    <span className="price">$ {v.price}.00</span>
                                                    <a href="#" onClick={() => OnClick(v.id)} className="add-cart-btn">Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            }
                        </>
                    )
                })
            }
        </>
    );
}

export default UiMedicine;