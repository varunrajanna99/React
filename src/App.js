import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
// import Styled from 'styled-components';
// import Radium, {StyleRoot} from 'radium';

class App extends Component {
  state = {
    persons: [
      {
        name: "Varun",
        age: 22,
        id: 'snjd'
      },
      {
        name: "Appa",
        age: 54,
        id: 'sdcs'
      },
      {
        name: "Amma",
        age: 44,
        id: 'sfdv'
      },
    ],
    otherstate: "Some other state",
    showPerson: false
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(psn => {
      return psn.id === id;
    })

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson
    this.setState({
      showPerson: !doesShow
    })
  }

  render() {

  //   const Styledbutton = Styled.button`
  //     background-color: ${(props) => (props.alt ? "red" : "green")};
  //     color:white;
  //     font: inherit;
  //     border: 1px solid black;
  //     padding: 8px;
  //     cursor: pointer;
  //     border-radius: 5px;

  //     &:hover {
  //       background-color:${(props) =>
  //         props.alt ? "rgb(241, 81, 113)" : "lightgreen"};
  //       color:black;
  //     }
  // `;

    const style = {
    };

    let persons = null;

    if(this.state.showPerson){
      persons = (<div>
        {this.state.persons.map((person, index) => {
          return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}
            />
        })}
      </div>);
      // style.backgroundColor = "red"
      // style[":hover"] = {
      //   backgroundColor: "rgb(241, 81, 113)",
      //   color: "black",
      // };
    };

    let classes = []

    if(this.state.persons.length <= 2){
      classes.push("red");
    }
    if(this.state.persons.length <= 1){
      classes.push("bold");
    }

    return (
    
        <div className="App">
          <h1>Hi I'm a react app developer</h1>
          <p className={classes.join(" ")}>This is really working</p>
          <button className="button" onClick={this.togglePersonsHandler}>
            Switch Name
          </button>
          {persons}
        </div>
      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null , 'Does This work now ?'))
  }
}

// const App =() => {

//   const [personState, setPersonsState] = useState({
//     persons:[
//     {
//           name: "Varun",
//           age: 22,
//         },
//         {
//           name: "Appa",
//           age: 54,
//         },
//         {
//           name: "Amma",
//           age: 44,
//         },
//       ],
//     otherState: 'some other value'
//     })

//   console.log(personState);

//   const switchNameHandler = () => {
//     // console.log("Was clicked")

//     setPersonsState({
//       persons: [
//         {
//           name: "Varun Rajanna",
//           age: 22,
//         },
//         {
//           name: "Appa",
//           age: 54,
//         },
//         {
//           name: "Amma",
//           age: 44,
//         },
//       ],
//     });

//   }

//     return (
//       <div className="App">
//         <h1>Hi I'm a react app developer</h1>
//         <p>This is really working</p>
//         <button onClick={switchNameHandler} >Switch Name</button>
//         <Person
//           className="Test"
//           name={personState.persons[0].name}
//           age={personState.persons[0].age}
//         >
//           My Hobbies: Racing
//         </Person>
//         <Person
//           name={personState.persons[1].name}
//           age={personState.persons[1].age}
//           click={switchNameHandler}
//         />
//         <Person
//           name={personState.persons[2].name}
//           age={personState.persons[2].age}
//         />
//       </div>
//     );
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null , 'Does This work now ?'))
//   }

export default App;
