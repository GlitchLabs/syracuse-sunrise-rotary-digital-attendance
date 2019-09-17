import React, {Component} from "react";

const NameSelecter = () => {
	return (
		<div className="input-group mb-3">
			<div className="input-group-prepend">
				<button className="btn btn-outline-success" type="button">
					Select
				</button>
			</div>
			<select
				className="custom-select"
				id="inputGroupSelect03"
				aria-label="Example select with button addon">
				<option value="0">Select Your Name</option>
				<option value="1">Bob Anderson</option>
				<option value="2">Mark Bentz</option>
				<option value="3">Ron Bildstein</option>
				<option value="4">Bill Boyd</option>
				<option value="5">Sand Bufis</option>
				<option value="6">Mary Louise Dopyera</option>
				<option value="7">Fred Gilbeaux</option>
				<option value="8">Greg Hoover</option>
				<option value="9">Raul Huerta</option>
				<option value="10">Nicole Hurley</option>
				<option value="11">David Kennedy</option>
				<option value="12">Dan Meyers</option>
				<option value="13">Akech Malual</option>
				<option value="14">Chris Powers</option>
				<option value="15">Christian Samara</option>
				<option value="16">Frank Scibilia</option>
				<option value="17">Pam Stern</option>
				<option value="18">Dakir Thompson</option>
				<option value="19">Linda Zimmerman</option>
			</select>
		</div>
	);
};

export default NameSelecter;
