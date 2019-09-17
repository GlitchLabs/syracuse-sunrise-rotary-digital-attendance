import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker
} from "@material-ui/pickers";

export default function DatePicker() {
	// The first commit of Material-UI
	// var today = new Date();
	// var dd = String(today.getDate()).padStart(2, "0");
	// var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
	// var yyyy = today.getFullYear();

	// today = mm + "/" + dd + "/" + yyyy;
	// document.write(today);

	const [selectedDate, setSelectedDate] = React.useState(new Date());

	function handleDateChange(date) {
		setSelectedDate(date);
		console.log(selectedDate, " is the date");
	}

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Grid container justify="space-around">
				<KeyboardDatePicker
					margin="normal"
					id="date-picker-dialog"
					label="Date picker dialog"
					format="MM/dd/yyyy"
					value={selectedDate}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						"aria-label": "change date"
					}}
				/>
			</Grid>
		</MuiPickersUtilsProvider>
	);
}
