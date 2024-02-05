import { useQuery } from "@tanstack/react-query";
import { getShows } from "../services/apiShows";


export function useShows() {
  const {
		isLoading,
		error,
		data: shows,
	} = useQuery({
		queryKey: ["shows"],
		queryFn: getShows,
	});
	
	// console.log(shows)
  
  return {
		isLoading,
		error,
    shows,
	};
}

