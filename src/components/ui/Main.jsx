import styled, { css } from "styled-components";

const Main = styled.main`
  
  ${props => props.$details && css`
    padding: 1em;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);
    gap: 1em;
    /* grid-template-columns: 1fr 10fr 1fr; */
    /* grid-template-rows: repeat(2, auto); */
  `}
`

export default Main;