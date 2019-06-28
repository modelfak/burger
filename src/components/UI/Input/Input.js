import React, {Component} from 'react';

import classes from './Input.module.css';

const input = (props) => {

    let inputElement = null, validationError = null;
    let inputClasses = [classes.InputElement];

    if (props.invalid && props.souldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
        validationError = <p className={classes.ValidationError}>Please enter a valid value!</p>;
    }
    inputClasses = inputClasses.join(' ');

    switch (props.elementType) {
        case 'input':
            inputElement = <input
                onChange={props.changed}
                className={inputClasses}
                {...props.elementConfig}
                value={props.value}
            />;
            break;
        case 'textarea':
            inputElement = <textarea onChange={props.changed} className={inputClasses} {...props.elementConfig} value={props.value} />;
            break;
        case 'select':
            inputElement = <select onChange={props.changed} className={inputClasses} {...props.elementConfig} value={props.value}>
                {props.elementConfig.options.map((opt) => {
                    return <option key={opt.value} value={opt.value}>{opt.displayValue}</option>
                })}
            </select>;
            break;
        default:
            inputElement = <input
                onChange={props.changed}
                className={inputClasses}
                {...props.elementConfig}
                value={props.value}
            />;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label} >{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    );
};

export default input;