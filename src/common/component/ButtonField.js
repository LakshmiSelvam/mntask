import React from "react";
import "../style/style.css";
function ButtonField(props) {
    const { onClick, label, type,dataTestid,id } = props;
    const className = `button ${type ? type : "primary"}`;
    return (
        <React.Fragment>
            <button className={className} onClick={onClick} type={type?type:"submit"} id={id} data-testid={dataTestid}>
                {label ? label : "Submit"}
            </button>
        </React.Fragment>
    );
}

export default ButtonField;
