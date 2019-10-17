import React, {Component} from 'react';
import Person from './Person/Person.js'
import Radium, {StyleRoot} from 'radium';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { id: 'abc1', name: newName, age: 28 },
        { id: 'pqr2', name: 'Manu', age: 29 },
        { id: 'xyz3', name: 'Stephanie', age: 27 }
      ]
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person =  {...this.state.persons[personIndex]}

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person

    this.setState({
      persons : persons
    });
  }

  togglePersonHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })

  }

  render() {

    const buttonStyle = {
      backgroundColor :  'Green',
      font: 'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor : 'lightgreen',
        color : 'black'
      }
    }
    
    let persons = null;
    
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (<Person 
              key = {person.id}
              click = {() => this.deletePersonHandler(index)}
              name = {person.name}
              age = {person.age}
              changed = {(event) => {this.nameChangedHandler(event, person.index)}}
            />)
          })}
        </div>
      )
      
      buttonStyle.backgroundColor = 'Red';
      buttonStyle[':hover'] =  {
        backgroundColor : 'salmon',
        color : 'black'
      }
    }

    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push("red")
    }

    if(this.state.persons.length <= 1) { classes.push("bold") }
    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className = {classes.join(' ')}>This is really working!</p>
          <button
            style = {buttonStyle} 
            onClick={this.togglePersonHandler}>Toggle display
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}
export default Radium(App);
