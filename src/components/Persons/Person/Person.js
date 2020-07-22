import React from 'react';
// import Radium from 'radium';
// import './Person.css';
import Styled from 'styled-components';

const person = (props) => {
// console.log(props)

// const style = {
//   '@media(min-width:500px)':{
//     width: '450px',
//   }
// }

const StyledDiv = Styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid rgb(31, 30, 30);
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media(min-width: 500px) {
      width: 450px;
    }
  `

return (
  // <div className="Person" style={style}>
  <StyledDiv>
    <p className={props.className} onClick={props.click}>
      I'm a {props.name} an I'm {props.age} old
    </p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name} />
  </StyledDiv>
  // </div>
);
    // return <button>I'm a person</button>
}

export default person;