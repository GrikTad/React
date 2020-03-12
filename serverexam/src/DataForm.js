import React from 'react';
import './DataForm.css'

export const DataForm = ({ data }) => {
    return (
        <div className="grid-container">
            {data.map(element=>
                <div key={element.email} className="grid-item">
                    <p>
                        Full Name: {element.name}
                    </p>
                    <p>
                        UserName:
                        {element.username}
                    </p>
                    <p>
                        Address:  
                        {element.address.street}
                    </p>
                    <p>
                        gmail:
                        {element.email}
                     <a href={`mailto:${element.email}`}> <img src="https://cdn.glitch.com/ee4fc72d-c4ac-4e9c-8fc2-0f5915855545%2Fgmail.png?v=1583910272873"/></a>

                    </p>
                    <p>
                        Company:{element.company.name}
                    </p>
                    <p>
                        Phone:
                        {element.phone}
                    </p>
                    <p>
                        Website:
                        {element.website}
                    </p>
                    </div>)}
        </div>
    );
};

export default DataForm;