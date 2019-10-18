import Person from './Person/Person'
import React, {Component} from 'react'

class Persons extends Component {
    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps from persons')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate from persons");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate from persons");
        return {message: 'SnapShot'};
    }

    componentDidMount() {
        console.log('componennt did mound persons');
    }

    componentDidUpdate(prevProp, prevState, snapshot) {
        console.log('Component Did update')
        console.log(snapshot);
    }

    render () {
        return this.props.persons.map( ( person, index ) => {
            return (<Person
                    click={() => this.props.clicked( index )}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={( event ) => this.props.changed( event, person.id )} 
                />
            )
                
        })
    }
    
}
export default Persons;