/* eslint-disable react/prop-types */

import styled from "styled-components";
import Section from "./Section";
import Button from "./Button";
import { useState } from "react";

const StyledForm = styled.form`
	background-color: rgba(0, 0, 0, 0.5);

	text-align: center;
	padding: 1em;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;
	h1 {
		margin-bottom: 1em;
	}
`;

function Form({ movieTitle, onToggle }) {
	const [name, setName] = useState("");
	const [tel, setTel] = useState("");
	const [numbTickets, setNumbTickets] = useState("");
	function handleSubmit(e) {
    e.preventDefault();
    
    console.log(name)
    console.log(tel)
    console.log(numbTickets)

    onToggle();
	}
	return (
		<StyledForm onSubmit={handleSubmit}>
			<Section $formContents>
				<h1>Book my Ticket Now</h1>
				<Section $formControl>
					<label htmlFor="name">Full Name:</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="your name"
						onChange={(e) => setName(e.target.value)}
					/>
				</Section>
				<Section $formControl>
					<label htmlFor="tel">Tel:</label>
					<input
						type="tel"
						id="tel"
						name="tel"
            placeholder="your phone number"
            onChange={(e)=> setTel(e.target.value)} 
					/>
				</Section>
				<Section $formControl>
					<label htmlFor="showName">Movie:</label>
					<input
						type="text"
						id="showName"
						name="showName"
						value={movieTitle}
						disabled
					/>
				</Section>

				<Section $formControl>
					<label htmlFor="seat">No. of Tickets:</label>
					<input type="number" id="numbTickets" name="numbTickets" onChange={(e)=> setNumbTickets(e.target.value)} />
				</Section>
				<Section $formControl>
					<label htmlFor="seat">Price:</label>
					<input type="number" id="price" name="price" disabled />
				</Section>
				<Button $cta>Book</Button>
			</Section>
		</StyledForm>
	);
}

export default Form;
