import React from 'react';
import { Link } from 'react-router-dom';
import Htag from './UI/H1toH6/Htag';
import Titel from './UI/Title/Titel';

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
                </div>
                <div className="row">
                    {
                        information.map((value, i) => {
                            return (
                                <div className="col-lg-6 mt-4">
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
                </div>
            </div>
        </section>


    );
}

export default Doctors;