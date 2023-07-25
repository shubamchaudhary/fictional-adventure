import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Card, Header } from "../components";


export const MovieList = ({apiPath, title}) => {
  const { data: movies } = useFetch(apiPath);
  useTitle(title);

  return (
    <div className="ml-[7%]">
       
       <main className="justify-center flex">
      <section className="max-w-[100%] mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">       
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }          
        </div>
      </section>
    </main>
    </div>
   
  )
}