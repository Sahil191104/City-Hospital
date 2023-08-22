import React, { useEffect, useState } from 'react';

function ListData({list}) {

    const [data, setData] = useState([]);

    useEffect(()=> {
        console.log("listOut");
        setData(list(5))
    },[list])

    return (
        <div>
            <ul>
                {
                    data.map((v,i) => {
                        return (
                            <li key={i}>{v}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default ListData;