import React from "react";

import "./Card.css";

const NavButton = ({nav}) => {
    const onClick = () => {
        console.log(nav)
    }
    
    return(
        <a onClick={() => onClick()} className="nav-button-div" href={nav}/>
    )
}

const Card = () => {
    return (
        <div className="card">
            <div className="btn-container">
                <a href="https://www.instagram.com/fiji_islandsss/">
                    <i className="fa fa-instagram animated" />
                </a>
                <a href="https://vk.com/public202313284">
                    <i className="fa fa-vk animated" />
                </a>
                <a href="https://web.telegram.org/#/im?p=@RECstudio6996">
                    <i className="fa fa-telegram animated" />
                </a>
                <p className="phone-number">+7-(707)-20-55-688</p>
            </div>
            <div className="navigation-container">
                <div>
                    <NavButton nav={"#works"} />
                    <h4>Работы</h4>
                </div>
                <div>
                    <NavButton nav={"#equip"} />
                    <h4>Оборудование</h4>
                </div>
                <div>
                    <NavButton nav={"#price"} />
                    <h4>Услуги</h4>
                </div>
            </div>
        </div>
    );
};

export default Card;
