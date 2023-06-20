import React from 'react';
import { useParams } from 'react-router-dom';

function Doctor(props) {

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

    const {id} = useParams();


    const doctorsdata = information.filter((value) => value.id === parseInt(id))
    console.log(doctorsdata);

    return (
        <div>
            <h1>Hello {id}</h1>
        </div>
    );
}

export default Doctor;