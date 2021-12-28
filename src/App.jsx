import React from "react";
import styles from "./App.module.css";
import FeaturedMovie from "./components/FeaturedMovie";

import MovieRow from "./components/MovieRow";
import Tmdb from "./Tmdb";

// Para acessar um filme -> movieList[0].items.results[0]

function App() {
  const [movieList, setMovieList] = React.useState([]); // Lista com todos os generos
  const [featuredData, setFeaturedData] = React.useState(null);

  React.useEffect(() => {
    async function loadAll() {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pegando Featured (destaque)
      let originals = list.filter((item) => item.slug === "originals");

      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];

      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);
    }
    loadAll();
  }, []);

  return (
    <div className="page">
      <header></header>
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className={styles.sectionList}>
        {movieList.map((section, key) => (
          <MovieRow key={key} title={section.title} items={section.items} />
        ))}
      </section>
    </div>
  );
}

export default App;
