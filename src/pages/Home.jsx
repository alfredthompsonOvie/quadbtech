import Card from "../components/Card";
import Section from "../components/ui/Section";
import { useShows } from "../shows/useShows";

function Home() {
  const { shows, isLoading, error } = useShows();

  // console.log(shows)
  // console.log(isLoading)
  // console.log("error", error)
  
  if (isLoading) return <p>Loading...</p>
  if(error) return <p>Something went wrong</p>
  return (
    <Section $container>
      {shows.map(show=> <Card show={show} key={show.show.id}/>)}
    </Section>
  )
}

export default Home
