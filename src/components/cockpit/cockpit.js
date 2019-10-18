import React, { useState, useEffect } from 'react';
import Classes from './cockpit.css'

const cockpit = (props) => {

    const assignedClasses = [];
    let buttonClass = '';

    if(props.showPersons) {
        buttonClass = Classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(Classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(Classes.bold); // classes = ['red', 'bold']
    }

    return <div className = { Classes.Cockpit } >
        <h1> {props.appTitle}</h1> 
        <p className = { assignedClasses.join(' ') } > This is really working! </p>
        <button
        className = { buttonClass }
        onClick = { props.clicked } > Toggle Persons </button> 
    </div> 
};

export default cockpit;