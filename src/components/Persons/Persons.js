import Person from './Person/Person'
import React, {PureComponent} from 'react'

class Persons extends PureComponent {
    // static getDerivedStateFromProps() {
    //     console.log('getDerivedStateFromProps from persons')
    //     return null;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("shouldComponentUpdate from persons");
    //     return nextProps.persons !== this.props.persons;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate from persons");
        return {message: 'SnapShot'};
    }

    componentDidMount() {
        console.log('componennt did mound persons');
    }

    componentDidUpdate(prevProp, prevState, snapshot) {
        console.log('Component Did update persons')
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