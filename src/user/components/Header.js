import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../container/UI/Button/Button';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ThemeContext } from '../container/Context/ThemeContext';
import { ToggleButtonGroup } from '@mui/material';
// import { useSelector } from 'react-redux';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

function Header(props) {

    let theme = useContext(ThemeContext);

    let localStatus = localStorage.getItem("Loginredirecting")

    const handleLogout = () => {
        localStorage.removeItem("Loginredirecting")
    }

    // const cartData = useSelector(state => state.cart)
    // console.log(cartData);
    // let cartCounter = 0;

    // if (cartData.item) {
    //     cartCounter = cartData.item.reduce((acc, v, i) => acc + v.qyt, 0);
    // }

    let localdataCart = JSON.parse(localStorage.getItem("CartData"));
    let cartCounter = 0;

    if (localdataCart) {
        cartCounter = localdataCart.reduce((acc, v, i) => acc + v.qyt, 0);
    }

    let localdataheart = JSON.parse(localStorage.getItem("CartDetails"));
    console.log(localdataheart);
    let heartCounter = 0;

    if (localdataheart) {
        heartCounter = localdataheart.reduce((acc, v, i) => acc + v.qyt, 0);
        console.log(heartCounter);
    }

    return (
        <div className="main-header">
            <div id="topbar" className={`d-flex align-items-center fixed-top ${theme.theme}`}>
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className={`bi bi-envelope ${theme.theme}`} /> <a href="mailto:contact@example.com" className={`${theme.theme}`}>cityhospital@example.com</a>
                        <i className={`bi bi-phone ${theme.theme}`} /> +91 9988776655
                    </div>
                    <div className={`d-none d-lg-flex social-links align-items-center ${theme.theme}`}>
                        <a href="#" className="twitter"><i className= {`bi bi-twitter ${theme.theme}`} /></a>
                        <a href="#" className="facebook"><i className= {`bi bi-facebook ${theme.theme}`} /></a>
                        <a href="#" className="instagram"><i className= {`bi bi-instagram ${theme.theme}`} /></a>
                        <a href="#" className="linkedin"><i className= {`bi bi-linkedin ${theme.theme}`} /></a>
                        <div className="form-check form-switch">
                            <input onClick={() => theme.togletheme(theme.theme)} className="form-check-input ms-1 bg-info" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
                        </div>
                    </div>
                </div>
            </div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <div className="logo">
                        <a href="index.html">
                            <h1 className="logo me-auto">City</h1><br />
                            <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
                        </a>
                    </div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><Link to="/" className="nav-link scrollto" >Home</Link></li>
                            <li><Link to="/department" className="nav-link scrollto">Departments</Link></li>
                            <li><Link to="/doctors" className="nav-link scrollto">Doctors</Link></li>
                            <li><Link to="/about" className="nav-link scrollto">About</Link></li>
                            <li><Link to="/contact" className="nav-link scrollto">Contact</Link></li>
                            <li><Link to="/medicine" className="nav-link scrollto">Medicine</Link></li>
                            <li><Link to="/counter" className="nav-link scrollto">Counter</Link></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    <Link to="/appointment" className="appointment-btn scrollto"><Button className="d-none d-md-inline">Make an Appointment</Button>
                    </Link>
                    {/* <Link to="/appointment" className="nav-link scrollto">Appointment</Link> */}
                    {
                        localStatus ?
                            <Link to="/Auth" onClick={handleLogout}><Button>Logout</Button></Link>
                            : <Link to="/Auth"><Button>Login/Signup</Button></Link>
                    }
                    <Link to="/Cart">
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={cartCounter} sx={{ color: '#FF6337' }}>
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>
                    </Link>
                    <Link to="/medicindetails">
                        <IconButton aria-label="heart">
                            <StyledBadge badgeContent={heartCounter} sx={{ color: '#FF6337' }}>
                                <FavoriteIcon />
                            </StyledBadge>
                        </IconButton>
                    </Link>
                </div>
            </header >
        </div >
    );
}

export default Header;