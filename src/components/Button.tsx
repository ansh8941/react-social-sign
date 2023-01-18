import React, { useState, useEffect, FC, ReactElement } from 'react';

const Button: FC = (): ReactElement => {
  const [state, setState] = useState('hiii');
  useEffect(() => {
    setState('bye');
  }, []);
  return <button id='button'>Button--{state}</button>;
};

// import React, { Component } from 'react';
// //props object
// type Numbers = {
//   counter: number;
// };
// //state object
// type Result = {
//   number: number;
// };
// class Button extends Component<Numbers, Result> {
//   state: Result = {
//     number: 0,
//   };
//   componentDidMount() {
//     this.setState((state) => ({
//       number: state.number + this.props.counter,
//     }));
//   }
//   render() {
//     return (
//       <button id='button'>
//         Hello World{this.props.counter} - {this.state.number}
//       </button>
//     );
//   }
// }

export default Button;
