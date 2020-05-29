import React, { Component } from "react";
import "../App.css";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import { connect } from "react-redux";
import { setName, setAge } from "../actions/appActions";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			age: '',
		};
	}

	changeName = (event) => {
		// this.setState({
		// 	firstName: event.target.value,
		// });

		this.props.setName(event.target.value); 
	};

	changeAge = (event) => {
		// this.setState({
		// 	age: event.target.value,
		// });

		this.props.setAge(event.target.value);
	};

	apiCall = () => {
		fetch("data.json")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.props.setName(data.firstName);
				this.props.setAge(data.age);
			})
			.catch((err) => {
				// Do something for an error here
			});
	};

	render() {
		return (
			<div className="App">
				<div className="App-header">
					<p>Parent Component</p>
					<input
						type="text"
						value={this.props.firstName}
						//value={this.state.firstName}
						onChange={this.changeName}
					></input>
					<input
						type="number"
						//value={this.state.age}
						value={this.props.age}
						onChange={this.changeAge}
					></input>

					<ComponentA	
					// name={this.state.firstName}
					// age={this.state.age}
					// changeAge={this.changeAge}
					// changeFirstName = {this.changeName}

					// name={this.props.firstName}
					// age={this.props.age} 
/>
					

					<ComponentB
						// name={this.state.firstName}
						// age={this.state.age}

						name={this.props.firstName}
						age={this.props.age}
					/>

					<button onClick={this.apiCall}>Click here !</button>
				</div>
			</div>
		);
	}
}
//export default App;

const mapStateToProps = (state) => { //incoing
	return {
		firstName: state.appRed.firstName, //state.reducername.objectvalue
		age: state.appRed.age,
	};
};

const mapDispatchToProps = (dispatch) => { //outgoing
	return {
		setName: (firstName) => dispatch(setName(firstName)),
		setAge: (age) => dispatch(setAge(age)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
