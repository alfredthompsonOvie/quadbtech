/* eslint-disable react/prop-types */
import styled from "styled-components";
import Header from "./ui/Header";
import Title from "./ui/Title";
import Section from "./ui/Section";
import { Link } from "react-router-dom";

const StyledCard = styled.section`
	padding: 1em;
	/* border: 1px solid rgba(0, 0, 0, 0.8); */
  border-radius: 8px;
  background-color: var(--cardbBackground);
  background-color: var(--secondary);
`;
function Card({ show }) {
	const showData = { ...show.show };
	// console.log(showData);
	return (
		<StyledCard>

			<img src={`${showData.image?.medium}`} alt={`${showData.name}`} />

			<section>
				<Header>
					<Title className="name">{showData.name}</Title>
          <p className="status">{showData.status }</p>
        </Header>

        <Section $schedule>
          <ul>
            {showData.schedule.days.map(day => <li key={day }> {day }</li>)}
          </ul>
          
          <p>
            <span>@</span>
            {showData.schedule.time }
          </p>
        </Section>

        <p className="rating">rating: {showData.rating.average ? showData.rating.average : "--"}
        </p>
				{/* genres */}
        <ul>
          {showData.genres.map(genre=> <li key={genre}>{genre}</li>)}
				</ul>
        {/* view details */}
        <Link to={`/show/${showData.id}`}>View Details</Link>
			</section>
		</StyledCard>
	);
}

export default Card;
