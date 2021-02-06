import React from "react";

import "./Works.css";

const Works = () => {
    return (
        <div className="gallery">
            <a
                href="https://www.youtube.com/watch?v=495ZtMWeblM"
                target="_blank"
                className="gallery__item gallery__item--1"
            />
            <a
                href="https://www.youtube.com/watch?v=MM-iUH_Z9FA"
                target="_blank"
                className="gallery__item gallery__item--2"
            />
            <a
                href="https://www.youtube.com/watch?v=1G50Y58MGxQ"
                target="_blank"
                className="gallery__item gallery__item--3"
            />
            <a
                href="https://www.youtube.com/watch?v=IZI3r7EvgH8"
                target="_blank"
                className="gallery__item gallery__item--4"
            />
        </div>
    );
};

export default Works;
