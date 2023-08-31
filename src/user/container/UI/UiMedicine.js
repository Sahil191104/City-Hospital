import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux';
import { Box, CircularProgress } from '@mui/material';

function UiMedicine({ values, OnClick, favouriteTrue, onclick2, fav, removefav }) {
    const carts = useSelector(state => state.cart);
    const favs = useSelector(state => state.fav);
    console.log(favs.fav);

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
            <>
                {
                    carts.loading ?
                        <Box className="d-flex justify-content-center" >
                            <CircularProgress backdrop sx={{ color: '#FF6337', margin: "300px auto", backgroundColor: "rgba(255,255,255,0.7)", zIndex: "9999" }} />
                        </Box> :
                        <div className="product">
                            <div className="product-card">
                                <h2 className="name">{values.name}</h2>
                                <span className="price">${values.price}.00</span>
                                <a className="popup-btn">see more</a>
                                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRueydgLsFumxg1LVnm0-zKEUgnbvHNSO8TGQ&usqp=CAU" className="product-img" alt /> */}
                            </div>
                            <div className="popup-view">
                                <div className="popup-card">
                                    <a><i className="fas fa-times close-btn" /></a>
                                    <div className="info">
                                        <h2>{values.name}
                                            {/* {
                                                            favs.fav ?
                                                                <FavoriteIcon style={{ color: "#FF6337", cursor: 'pointer' }} />
                                                                :
                                                                <FavoriteBorderIcon style={{ color: "#FF6337", cursor: 'pointer' }} onClick={() => Onicon(values.id)} />
                                                        } */}
                                            {
                                                favouriteTrue ?
                                                    fav ?
                                                        // favData 
                                                        <FavoriteIcon style={{ color: "#FF6337", cursor: 'pointer' }} onClick={() => removefav(values.id)} /> :
                                                        <FavoriteBorderIcon style={{ color: "#FF6337", cursor: 'pointer' }} onClick={() => onclick2(values.id)} /> :
                                                    null
                                            }
                                        </h2>
                                        <p>{values.desc}</p>
                                        <span className="price">$ {values.price}.00</span>
                                        <a href="#" onClick={() => OnClick(values.id)} className="add-cart-btn">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </>
        </>
    );
}

export default UiMedicine;