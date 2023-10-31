import React from "react";
import "./Container.scss";

const Container = ({ children }) => {
    return <div className="containerHOC">{children}</div>;
};

export default Container;
