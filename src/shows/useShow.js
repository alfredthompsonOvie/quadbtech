import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getShow } from "../services/apiShows";


export function useShow() {
  const { id } = useParams();
  // console.log(id);

  const { isLoading, error, data: show } = useQuery({
    queryKey: ["show", id],
    queryFn: () => getShow(id),
    retry: false
  });

  // console.log(show)

  return {
    isLoading,
    error,
    show
  }
} 