import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Aux from '../../../hoc/auxiliary'
import withClass from '../../../hoc/withClass'
import Classes from './Person.css';
import AuthContext from '../../../context/auth-context'

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render () {
        return (
            <Aux > 
                { this.context.authenticated ? <p>LoggedIn</p> : <p>Plese log-In</p>}
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input
                 type="text"
                //  ref = {(inputEl) => {this.inputElement = inputEl}}
                 ref = {this.inputElementRef}
                 onChange={this.props.changed} 
                 value={this.props.name} 
                />
            </Aux>
        )
    };
};

Person.propTypes = {
    click : PropTypes.func,
    age : PropTypes.number,
    chnaged : PropTypes.func,
    name :  PropTypes.string
}

export default  withClass(Person, Classes.Person) // Radium(person);