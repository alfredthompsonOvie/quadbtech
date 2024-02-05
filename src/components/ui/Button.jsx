import styled, { css } from "styled-components";

const Button = styled.button`
    padding: 0.8em 2em;
    border: none;
    background-color: var(--text);
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;

    ${(props) =>
      props.$back &&
		css`
    display: flex;
			align-items: center;
			gap: 0.4em;
			justify-self: start;
      color: var(--background)
		`}

    ${props => props.$cta && css`
    
    background-color: var(--primary);
    margin-top: 1em;
    `}
`;
export default Button;
