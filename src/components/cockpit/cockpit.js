import React, { useEffect, useRef, useContext } from 'react';
import Classes from './cockpit.css'
import AuthContext from '../../context/auth-context'

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    const authContext = useContext(AuthContext)
    useEffect(() => {
        console.log('CockPit useEffect');

        // setTimeout(() => {
        //     alert('data saved to cloud');
        // }, 1000);
        toggleBtnRef.current.click();

        return () => {
            console.log("cLEANUP WORK IN COCKPIT");
        }
    }, [])

    useEffect(() => {
        console.log('CockPit 2nd  useEffect');
        return () => {
            console.log("cLEANUP WORK IN 2nd COCKPIT");
        }
    })

    const assignedClasses = [];
    let buttonClass = '';

    if(props.showPersons) {
        buttonClass = Classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(Classes.red); // classes = ['red']
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(Classes.bold); // classes = ['red', 'bold']
    }

    return <div className = { Classes.Cockpit } >
        <h1> {props.appTitle}</h1> 
        <p className = { assignedClasses.join(' ') } > This is really working! </p>
        <button
            ref = {toggleBtnRef}
            className = { buttonClass }
            onClick = { props.clicked } > Toggle Persons 
        </button> 
        <button onClick = {authContext.login}>
            login
        </button>
    </div> 
};

export default React.memo(cockpit);