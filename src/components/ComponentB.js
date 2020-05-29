import React, { Component } from "react";
import "../App.css";

function ComponentB({ name, age }) {
	return (
		<div className="App">
			<p>Child Component B</p>
			<p>{name}</p>
			<p>{age}</p>
		</div>
	);
}

// class ComponentB extends Component {
// 	constructor(props) {
// 		super(props);
// }

// render(){

// 	return(
// 	<div>{this.props.age}</div>
// 	)
// }


// }
export default ComponentB;
