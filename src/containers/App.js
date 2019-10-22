import React, { Component } from 'react';
import Classes from './App.css';
// import Radium, { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/cockpit/cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/auxiliary';
import AuthContext from '../context/auth-context'

class App extends Component {
    constructor(props) {
        super(props);
        console.log('Constructor');
    }
    state = {
        persons: [
            { id: 'asfa1', name: 'Max', age: 28 },
            { id: 'vasdf1', name: 'Manu', age: 29 },
            { id: 'asdf11', name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false,
        showCockpit: true,
        changeCounter: 0,
        authentication: false
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps appjs')
        return state;
    }   

    componentDidMount() {
        console.log('ComponentDid mounts app.js')
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };
        

        // const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState( (prevState, props) => {
            return  {
                persons: persons,
                changeCounter : prevState.changeCounter + 1,
            } 
        });
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    }

    loginHandler = () => {
        this.setState({ authentication: true });
    }

    render() {
        let persons = null;
        console.log('app.js render');
        if (this.state.showPersons) {
            persons = (
                <Persons persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                    isAuthenticated = {this.state.authentication}
                /> 
            );
        }
        return ( 
            <Aux>
                <button onClick = {() => {this.setState({showCockpit: false})}}> 
                    Remove Cockpit
                </button>
                <AuthContext.Provider value = {{
                    authenticated: this.state.authentication,
                    login: this.loginHandler
                }}>
                    {this.state.showCockpit ? <Cockpit
                        appTitle = {this.props.appTitle}
                        showPersons = {this.state.showPersons}
                        personsLength = {this.state.persons.length}
                        clicked = {this.togglePersonsHandler}
                        login = {this.loginHandler}
                    /> : null}
                    {persons} 
                </AuthContext.Provider>
            </Aux>
            );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}
                                                                                                    
export default withClass(App, Classes.App)  //Radium( App );