import { TiArrowBack } from "react-icons/ti";
import Button from "../components/ui/Button";
import Section from "../components/ui/Section";
import { useShow } from "../shows/useShow";
import { useState } from "react";
import Main from "../components/ui/Main";
import Span from "../components/ui/Span";
import Form from "../components/ui/Form";
import { useNavigate } from "react-router-dom";

function Details() {
	const [showForm, setShowForm] = useState(false);
	const { show, isLoading } = useShow();
	const navigate = useNavigate()
	const showDetails = show?.show;

	function handleToggle() {
		setShowForm((showForm) => !showForm);
	}
	function goBack() {
		navigate(-1)
	}

	if (isLoading) return <p>Loading...</p>;
	return (
		<Main $details>
			<Button $back onClick={goBack}>
				<TiArrowBack />
				<span>Back</span>
			</Button>

			<Section $detailsPage>
				<Section $img>
					<img
						src={`${showDetails.image?.medium}`}
						alt={`${showDetails.name}`}
					/>
				</Section>

				{/* details */}
				<Section $showDetails>
					<Section $showDescription>
						<h1>{showDetails.name}</h1>
						<section>{showDetails.summary}</section>
					</Section>

					<Section $showInfo>
						<section>
							<ul>
								<li>
									<Span>Language:</Span> {showDetails.language}
								</li>
								<li>
									<Span>Status:</Span> {showDetails.status}
								</li>
								<li>
									<Span>Rating:</Span> {showDetails.rating.average}
								</li>
								<li>
									<Span>Genres:</Span>{" "}
									{showDetails.genres.map((item) => (
										<span key={item}>{item} </span>
									))}
								</li>
								<li>
									<Span>Runtime:</Span> {showDetails.runtime}
								</li>
								<li>
									<Span>Schedule:</Span>{" "}
									{showDetails.schedule.days.map((day) => (
										<span key={day}>{day}</span>
									))}{" "}
									<span>@{showDetails.schedule.time}</span>
								</li>
							</ul>
						</section>

						<Button $cta onClick={handleToggle}>
							Book Movie
						</Button>
					</Section>
				</Section>
			</Section>

			{/* form modal */}
			{showForm && (
				<Form movieTitle={showDetails.name} onToggle={handleToggle} />
			)}


		</Main>
	);
}

export default Details;
