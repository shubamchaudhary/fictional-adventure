import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Card, Header } from "../components";

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);

  useTitle(`Search result for ${queryTerm}`);

  return (
    <div>
    <Header/>
      <main>
      
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">       
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }          
        </div>
      </section>
    </main>
    </div>
   
  )
}