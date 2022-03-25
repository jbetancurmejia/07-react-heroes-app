import React,{useMemo} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";
import { useForm } from "../hooks/useForm";
import queryString from 'query-string'

export const SearchSceen = () => {

  
  const navigate = useNavigate();
  const location = useLocation();

  const {q=""}= queryString.parse(location.search);

  console.log(q);

  const initialForm = {
    textSearch: q,
  };

  const [formValues, handleInputChange, reset] = useForm(initialForm);

  const { textSearch } = formValues;

  const heroesFiltered =   useMemo(() =>  getHeroesByName(q), [q]);

  const handleSearch = () => {
    console.log(textSearch);
    navigate(`?q=${textSearch}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />
          <form>
            <input
              type="text"
              placeholder="Buscar héroe"
              className="form-control"
              name="textSearch"
              autoComplete="off"
              value={textSearch}
              onChange={handleInputChange}
            />

            <button
              type="button"
              className="btn btn-outline-primary mt-1 col-12"
              onClick={handleSearch}
            >
              Buscar....
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {
            (q==='')
? <div className="alert alert-info">
              Buscar un héroe
            </div>: (heroesFiltered.length==0)
            && <div className="alert alert-info"> No se encontraron resultados:{q} </div>
          }

          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
