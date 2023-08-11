import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from './Context/ThemeContext';

function Doctor(props) {
    let theme = useContext(ThemeContext);

    let color9 = theme.theme === 'dark' ? 'color9' : '';

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

    const { id } = useParams();


    const doctorsdata = information.filter((value) => value.id === parseInt(id))
    console.log(doctorsdata);

    return (
        <div>
            <section className= {`about-area pt-120 pb-90 ${color9}`}>
                <div className="container">
                    <div className="row">
                        {
                            doctorsdata.map((value) => {
                                return (
                                    <>
                                        <div className="col-xl-6 col-lg-5 about_left" style={{ width: "50%", flex: "0 0 auto" }}>
                                            <div className="about-left-side pos-rel mb-30" style={{ marginBottom: "30px" }}>
                                                <div className="about-front-img" style={{ boxShadow: "0 16px 32px 0 hsl(0deg 0% 53% / 20%)" }}>
                                                    <img src={value.url} style={{ width: "100%", height: "85%" }} alt />
                                                </div>
                                                <div className="about-shape" style={{ position: "absolute", top: "60px", zIndex: "-9" }}>
                                                    <img src="/assets\img\about-shape.png" alt />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-7">
                                            <div className="about-right-side pt-55 mb-30" style={{ paddingLeft: "23px", paddingTop: "55px", paddingBottom: "55px", marginBottom: "30px" }}>
                                                <div className="about-title mb-20">
                                                    <h1 style={{ fontSize: "60px", letterSpacing: "-.3px", lineHeight: "1.22", color: "#223645", fontWeight: "600", lineHeight: "1.1", marginTop: "0", textTransform: "normal" }}>{value.name}</h1>
                                                    <h5 style={{ marginBottom: "27px", color: "#647589", fontSize: "18px", fontWeight: "500" }}>{value.designation}</h5>
                                                </div>
                                                <div className="about-text">
                                                    <p style={{ paddingRight: "46px", fontSize: "14px", color: "#647589", fontWeight: "400", lineHeight: "26px", marginBottom: "15px" }}>
                                                        {value.description}
                                                    </p>
                                                    <br />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Doctor;