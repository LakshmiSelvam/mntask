import React from "react";
import "../style/style.css";
function InputField(props) {
    const {
        label,
        type,
        value,
        name,
        onChange,
        autoFocus,
        placeholder,
        dataTestid,
        required,
        className,
        fieldType,
        placeHolderType,
        defaultValue,
        disabled,
        maxlength,
        autocomplete,
        id
    } = props;
    const classList = `common-input ${fieldType?fieldType:""} ${className?className:""} ${placeHolderType?placeHolderType:""}`;
    
    return (
        <React.Fragment>
            {label && (
                <label
                    data-testid="label-element"
                    htmlFor={label}
                    className="input-label"
                >
                    {label}{required&&<span>Span</span>}
                </label>
            )}
            <input
                data-testid={dataTestid ? dataTestid : "input-element"}
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                autoFocus={autoFocus}
                className={classList}
                defaultValue={defaultValue}
                disabled={disabled}
                maxLength={maxlength}
                autocomplete={autocomplete}
                id={id}
            ></input>
        </React.Fragment>
    );
}

export default InputField;
