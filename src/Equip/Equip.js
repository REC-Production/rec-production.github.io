import React from "react";

import { equipData } from "../data";

import "./Equip.css";

const EquipmentItem = (item) => (
    <li className='equip-item'><a href={item.url} target="_blank">{item.name}</a></li>
)

const Equip = () => {
    return (
        <div className = "equip-block">
            <ul className = "equip-list">{equipData.map((item) => EquipmentItem(item))}</ul>
        </div>
    );
};

export default Equip;
