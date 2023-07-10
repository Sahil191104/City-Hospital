import React from 'react';
import { Link } from 'react-router-dom';
import Htag from './H1toH6/Htag';
import Titel from './Title/Titel';

function Doctors(props) {

    const information = [
        {
            id: 1,
            url: '../assets/img/doctors/doctors-1.jpg',
            name: 'Atha Smith',
            designation: 'Chief Medical Officer',
            description: 'Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.',
        },
        {
            id: 2,
            url: '../assets/img/doctors/doctors-2.jpg',
            name: 'John White',
            designation: 'Anesthesiologist',
            description: 'Aenean ac turpis ante. Mauris velit sapien.',
        },
        {
            id: 3,
            url: '../assets/img/doctors/doctors-3.jpg',
            name: 'Umika Loha',
            designation: 'Cardiology',
            description: 'Curabitur luctus eleifend odio. Phasellus placerat mi.',
        },
        {
            id: 4,
            url: '../assets/img/doctors/doctors-4.jpg',
            name: 'Daimy Smith',
            designation: 'Neurosurgeon',
            description: 'Morbi vulputate, tortor nec pellentesque molestie, eros nisi ornare purus.',
        }
    ]

    return (
        <section id="doctors" className="doctors">
            <div className="container">
                <div className="section-title">
                    <Htag name="h2tag1">Doctors</Htag>
                    <Titel>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
                        tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis viverra
                        ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.</Titel>
                        <Link className="appointment-btn scrollto mt-4" to={'/doctor/visiting_doctor'}>Visiting Doctor</Link>
                </div>
                <div className="row">
                    {
                        information.map((value, i) => {
                            return (
                                <div className="col-lg-6 mt-4 mt-lg-0">
                                    <Link to={`/doctor/${value.id}`}>
                                        <div className="member d-flex align-items-start">
                                            <div className="pic"><img src={value.url} className="img-doctor" alt /></div>
                                            <div className="member-info">
                                                <h4>{value.name}</h4>
                                                <span>{value.designation}</span>
                                                <p>{value.description}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }

                    {/* <div className="col-lg-6 mt-4 mt-lg-0">
                        <div className="member d-flex align-items-start">
                            <div className="pic"><img src="../assets/img/doctors/doctors-2.jpg" className="img-doctor" alt /></div>
                            <div className="member-info">
                                <h4>John White</h4>
                                <span>Anesthesiologist</span>
                                <p>Aenean ac turpis ante. Mauris velit sapien.</p>
                                <div className="social">
                                    <a href><i className="ri-twitter-fill" /></a>
                                    <a href><i className="ri-facebook-fill" /></a>
                                    <a href><i className="ri-instagram-fill" /></a>
                                    <a href> <i className="ri-linkedin-box-fill" /> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-4">
                        <div className="member d-flex align-items-start">
                            <div className="pic"><img src="../assets/img/doctors/doctors-3.jpg" className="img-doctor" alt /></div>
                            <div className="member-info">
                                <h4>Umika Loha</h4>
                                <span>Cardiology</span>
                                <p>Curabitur luctus eleifend odio. Phasellus placerat mi.</p>
                                <div className="social">
                                    <a href><i className="ri-twitter-fill" /></a>
                                    <a href><i className="ri-facebook-fill" /></a>
                                    <a href><i className="ri-instagram-fill" /></a>
                                    <a href> <i className="ri-linkedin-box-fill" /> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-4">
                        <div className="member d-flex align-items-start">
                            <div className="pic"><img src="../assets/img/doctors/doctors-4.jpg" className="img-doctor" alt /></div>
                            <div className="member-info">
                                <h4>Daimy Smith</h4>
                                <span>Neurosurgeon</span>
                                <p>Morbi vulputate, tortor nec pellentesque molestie, eros nisi ornare purus.</p>
                                <div className="social">
                                    <a href><i className="ri-twitter-fill" /></a>
                                    <a href><i className="ri-facebook-fill" /></a>
                                    <a href><i className="ri-instagram-fill" /></a>
                                    <a href> <i className="ri-linkedin-box-fill" /> </a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>


    );
}

export default Doctors;