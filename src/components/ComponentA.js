import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";

function ComponentA({age, name, changeFirstName, changeAge}) {
	return (
		<div className="App">
			<p>Child Component A</p>
			<input
				type="text"
				value={name}
				onChange={changeFirstName}  
			></input>
			<input
				type="number"
				value={age}
				onChange={changeAge}
			></input>		
		</div>
	);
}
//export default ComponentA;

const mapStateToProps = (state) => { //incoing
	return {
		name: state.appRed.firstName, //state.reducername.objectvalue
		age: state.appRed.age,
	};
};

export default connect(mapStateToProps )(ComponentA);
