import React from "react";

import "./Contacts.css";

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="contact">
                <i className="fa fa-envelope" />
                <p>recreating.ecpecial.concept@gmail.com</p>
            </div>
            <div className="contact">
                <i className="fa fa-instagram" />
                <p>https://www.instagram.com/fiji_islandsss</p>
            </div>
            <div className="contact">
                <i className="fa fa-vk" />
                <p>https://vk.com/public202313284</p>
            </div>
            <div className="contact">
                <i className="fa fa-telegram" />
                <p>@RECstudio6996</p>
            </div>
            <div className="contact">
                <i className="fa fa-phone" />
                <p>+77072055688</p>
            </div>
        </div>
    );
};

export default Contacts;
