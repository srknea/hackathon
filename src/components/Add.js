import React, { useState } from "react";
import ResultCart from "./ResultCart";
import noResult from './img/no-results.png';

const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function onChange(e) {
    setQuery(e.target.value);

    fetch(`
    https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  }

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          
          <div className="titles">
            <h3>What do you want to watch ?</h3>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              value={query}
              onChange={onChange}
              placeholder="Search"
            />
          </div>
          
          {results.length > 0 ? (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCart movie={movie} />
                </li>
              ))}
            </ul>
          ) : ( query.length > 0 &&
              <ul className="results results-error">
                <li>
                  <img src={noResult} alt="sad"/>
                  <h3>We Are Sorry, We Can Not Find The Movie !</h3>
                </li> 
              </ul>
          )}

        </div>
      </div>
    </div>
  );
};

export default Add;