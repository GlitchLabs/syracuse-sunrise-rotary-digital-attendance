import React from "react";
import {Container, Row, Col, FormGroup, Button} from "reactstrap";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker
} from "@material-ui/pickers";
import {cpus} from "os";
import "../app.css";
import DatePicker from "./DatePicker";
import NameSelecter from "./NameSelecter";

export default class App extends React.Component {
	state = {
		name: ""
		//
	};

	componentDidMount() {
		fetch("http://localhost:5000/test", {
			method: "POST",
			headers: {"Content-type": "application/json"},
			body: JSON.stringify({from: "frontend"})
		})
			.then(rawJSON => {
				return rawJSON.json();
			})
			.then(data => {
				console.log(data.backend);
			});
	}
	handleSubmit(event) {
		event.preventDefault();
		console.log("form submitted");
	}

	render() {
		return (
			<div className="topbox">
				<h1> sign in </h1>
				<form>
					<FormGroup>
						<NameSelecter />
					</FormGroup>
					<FormGroup>
						{/* <label htmlFor="confirm-password">confirm password</label>
						<input
							type="password"
							className="form-control"
							id="confirm-password"
							value={this.state.confirmPassword}
							onChange={event => {
								console.log(event.target.value);
								this.setState({confirmPassword: event.target.value});
							}}
						/> */}
					</FormGroup>
					<div style={{displayFlex: "flex", flexDirection: "row"}}>
						<DatePicker />
						<Button color="success">Sign In</Button>
					</div>
				</form>
			</div>
		);
	}
}
