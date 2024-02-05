
export async function getShows() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
  const data = await res.json();
  // console.log(data)
  return data
}
export async function getShow(id) {
  console.log(id)
  const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
  const data = await res.json();
  console.log("data", data)

  const showDetails = data.find(show => show.show.id === Number(id))
  // console.log("datafound",showDetails)
  return showDetails
}