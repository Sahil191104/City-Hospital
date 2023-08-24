import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CustButton from '../container/UI/Button/CustButton';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ThemeContext } from '../container/Context/ThemeContext';
import { ToggleButtonGroup } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logoutrequest } from '../../redux/action/auth.action';
// import { useSelector } from 'react-redux';
import { Drawer, Button, Placeholder } from 'rsuite';

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

    const auth = useSelector(state => state.auth)
    let dispatch = useDispatch()

    // let localStatus = localStorage.getItem("Loginredirecting")

    const handleLogout = () => {
        dispatch(logoutrequest())
        setOpen(false)
    }

    const cartData = useSelector(state => state.cart)
    let cartCounter = 0;

    if (cartData.item) {
        cartCounter = cartData.item.reduce((acc, v, i) => acc + v.qyt, 0);
    }

    // let localdataCart = JSON.parse(localStorage.getItem("CartData"));
    // let cartCounter = 0;

    // if (localdataCart) {
    //     cartCounter = localdataCart.reduce((acc, v, i) => acc + v.qyt, 0);
    // }

    let localdataheart = JSON.parse(localStorage.getItem("CartDetails"));
    console.log(localdataheart);
    let heartCounter = 0;

    if (localdataheart) {
        heartCounter = localdataheart.reduce((acc, v, i) => acc + v.qyt, 0);
        console.log(heartCounter);
    }

    // const [backdrop, setBackdrop] = useState('static');
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* <div class="top">
                <KeyboardDoubleArrowDownIcon />
            </div> */}
            <div className="main-header header">
                <div id="topbar" className="d-flex align-items-center fixed-top">
                    <div className="container top-styled">
                        <div className="contact-info p-1 justify-content-between">
                            <a href="mailto:contact@example.com"><i className="bi bi-envelope" />cityhospital@example.com</a>
                            <a href=''><i className="bi bi-phone" />+91 9988776655</a>
                        </div>
                        <div className="d-flex social-links align-items-center justify-content-end">
                            <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                            <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                            <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                            <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                            <div className="cl-toggle-switch">
                                <label className="cl-switch" >
                                    <input type="checkbox" onClick={() => theme.togletheme(theme.theme)} />
                                    <span />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <header id="header" className="fixed-top">
                    <div className="container d-flex align-items-center display-just">
                        <div className="logo">
                            <a href="index.html">
                                <h1 className="logo me-auto">City</h1><br />
                                <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
                            </a>
                        </div>
                        <nav id="navbar" className="navbar order-last order-lg-0" >
                            <ul>
                                <li><Link to="/" className="nav-link scrollto" >Home</Link></li>
                                <li><Link to="/department" className="nav-link scrollto">Departments</Link></li>
                                <li><Link to="/doctors" className="nav-link scrollto">Doctors</Link></li>
                                <li><Link to="/about" className="nav-link scrollto">About</Link></li>
                                <li><Link to="/contact" className="nav-link scrollto">Contact</Link></li>
                                <li><Link to="/medicine" className="nav-link scrollto">Medicine</Link></li>
                            </ul>
                            <div className='icon-style'>
                                <Link to="/Cart">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={cartCounter} sx={{ color: '#FF6337' }}>
                                            <ShoppingCartIcon />
                                        </StyledBadge>
                                    </IconButton>
                                </Link>
                                <Link state={{ border: "none" }} to="/medicindetails">
                                    <IconButton aria-label="heart">
                                        <StyledBadge badgeContent={heartCounter} sx={{ color: '#FF6337' }}>
                                            <FavoriteIcon />
                                        </StyledBadge>
                                    </IconButton>
                                </Link>
                                <i onClick={() => setOpen(true)} className="bi bi-list mobile-nav-toggle" />
                            </div>
                        </nav>
                        <Link to="/appointment" className="appointment-btn nono-Proprti scrollto"><CustButton className="d-none d-md-inline">Make an Appointment</CustButton>
                        </Link>
                        {/* <Link to="/appointment" className="nav-link scrollto">Appointment</Link> */}
                        {
                            auth.user ?
                                <Link to="/Auth" className="btnLogout" onClick={handleLogout}><CustButton >Logout</CustButton></Link>
                                : <Link to="/Auth" className="btnLoginSignup" ><CustButton >Login/Signup</CustButton></Link>
                        }
                        <div className='drawer'>
                            <Drawer className='drawerstyle' style={{ width: "364px" }} backdrop={"static"} open={open} onClose={() => setOpen(false)}>
                                <Drawer.Header>
                                    <Drawer.Title>Navbar List</Drawer.Title>
                                </Drawer.Header>
                                <Drawer.Body style={{ padding: "30px 15px" }}>
                                    <nav>
                                        <ul>
                                            <li><Link to="/" onClick={() => setOpen(false)} >Home</Link></li>
                                            <li><Link to="/department" onClick={() => setOpen(false)}>Departments</Link></li>
                                            <li><Link to="/doctors" onClick={() => setOpen(false)}>Doctors</Link></li>
                                            <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
                                            <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
                                            <li><Link to="/medicine" onClick={() => setOpen(false)}>Medicine</Link></li>
                                            <div className='data-display'>
                                                <Link to="/appointment" onClick={() => setOpen(false)} className="appointment-btn scrollto"><CustButton className="d-none d-md-inline">Make an Appointment</CustButton></Link>
                                                {/* <Link to="/appointment" className="nav-link scrollto">Appointment</Link> */}
                                                {
                                                    auth.user ?
                                                        <li><Link to="/Auth" onClick={handleLogout}><CustButton className="" >Logout</CustButton></Link></li>
                                                        : <li><Link to="/Auth" onClick={() => setOpen(false)} ><CustButton >Login/Signup</CustButton></Link></li>
                                                }
                                            </div>
                                        </ul>
                                    </nav>
                                </Drawer.Body>
                            </Drawer>
                        </div>
                    </div>

                </header >

            </div >
        </>
    );
}

export default Header;