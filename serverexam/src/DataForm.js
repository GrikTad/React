import React from 'react';
import './DataForm.css'

export const DataForm = ({ data }) => {
    return (
       
        <div className="grid-container"> 
        
            {data.map(element=>
                <div key={element.email} className="grid-item">
                    <img className="logo" src="https://i7.pngguru.com/preview/831/88/865/user-profile-computer-icons-user-interface-mystique.jpg" alt="logo"/>
                    
                    <p>
                    
                        Full Name: <font color="red"> {element.name} </font>
                    </p>
                    <p>
                        UserName: <font color="green">{element.username} </font>
                    </p>
                    <p>
                        Address: <font color="blue">{element.address.street}></font>
                    </p>
                    <p>
                     gmail: <a href={`mailto:${element.email}`}>{element.email} <img src="https://cdn.glitch.com/ee4fc72d-c4ac-4e9c-8fc2-0f5915855545%2Fgmail.png?v=1583910272873"/></a>

                    </p>
                    <p>
                        Company: <font color="yellow">{element.company.name}</font>
                    </p>
                    <p>
                       Phone: <font color="black">{element.phone} </font>
                    </p>
                    <p>
                        Website: <a href={`https://${element.website}`}><font> {element.website} </font></a>
                    </p>
                    </div>)}
        </div>
       
    );
};

export default DataForm;