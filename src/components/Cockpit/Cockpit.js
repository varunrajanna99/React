import React from 'react';
import cssclasses from './cockpit.css';

const cockpit = (props) => {


    let classes = [];
    let btnClass = '';

    btnClass = cssclasses.Button

    if(props.showPerson) {
        btnClass = cssclasses.Red;
    }


    if (props.persons.length <= 2) {
      classes.push(cssclasses.red);
    }
    if (props.persons.length <= 1) {
      classes.push(cssclasses.bold);
    }

    return (
    <div>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}>This is really working</p>
      <button
        className={btnClass}
        onClick={props.tglPerson}
      >
        Switch Name
      </button>
    </div>
    );
};

export default cockpit;