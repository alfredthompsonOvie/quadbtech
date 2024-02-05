import styled, { css } from "styled-components";

const Section = styled.section`
	${(props) =>
		props.$container &&
		css`
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
			justify-content: center;
			gap: 1em;
			padding: 1em;
		`}

	${(props) =>
		props.$schedule &&
		css`
			display: flex;
			align-items: center;
			gap: 0.5em;
		`}

  ${(props) =>
		props.$detailsPage &&
		css`
			max-width: 800px;
			margin-inline: auto;

			@media (min-width: 700px) {
				display: grid;
				grid-template-columns: 1fr 1fr;
			}
		`}
  ${(props) =>
		props.$showDetails &&
		css`
			display: flex;
			gap: 1em;
			flex-direction: column;
			@media (min-width: 700px) {
			}
		`}

  ${(props) =>
		props.$img &&
		css`
			max-width: 400px;
			margin-inline: auto;
		`}
  ${(props) =>
		props.$formContents &&
		css`
			max-width: 600px;
			width: 100%;
			margin-inline: auto;
      background-color: var(--background);
      padding: 2em;
		`}

  ${(props) =>
		props.$formControl &&
		css`
			display: flex;
			justify-content: center;
			gap: 1em;
      
			& + & {
				margin-top: 1em;
			}
			input {
				padding: 0.5em 1em;
			}
			label {
				max-width: 150px;
				width: 100%;
        text-align: right;
			}
		`}
`;

export default Section;
