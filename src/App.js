import React from "react";
import { connect } from "react-redux";

import { Button } from "./components/button";
import { changeGreen, changeRed, changeBlue } from "./actions/colors";
import "./App.css";

class App extends React.Component {
	render() {

		const { changeGreen, changeRed, changeBlue, color } = this.props;

		return (
			<div className="btn-block">
				<Button color={color ? color : "#00CC00"} text="Green" handleClick={changeGreen}/>
				<Button color={color ? color : "#FF0000"} text="Red" handleClick={changeRed}/>
				<Button color={color ? color : "#1240AB"} text="Blue" handleClick={changeBlue}/>
			</div>
		);
	}
}

console.log(<Button/>);

const mapStateToProps = (state) => ({ color: state.color });

const mapDispatchToProps = {
	changeGreen, 
	changeRed, 
	changeBlue
};

export const ColorContainer = connect(mapStateToProps, mapDispatchToProps)(App);