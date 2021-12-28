import React from "react";
import styles from "./FeaturedMovie.module.css";

export default function FeaturedMovie({ item }) {
  //console.log(item);

  let firstDate = new Date(item.first_air_date);
  let genres = [];

  item.genres.map((gen) => genres.push(gen.name));

  return (
    <section
      className={styles.featured}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className={styles.featuredVertical}>
        <div className={styles.featuredHorizontal}>
          <div className={styles.featuredName}>{item.original_name}</div>
          <div className={styles.featuredInfo}>
            <div className={styles.featuredPoints}>
              {item.vote_average} pontos
            </div>
            <div className={styles.featuredYear}>{firstDate.getFullYear()}</div>
            <div className={styles.featuredSeasons}>
              {item.number_of_seasons} temporada
              {item.number_of_seasons > 1 && "s"}{" "}
            </div>
          </div>
          <div className={styles.featuredDescription}>{item.overview}</div>
          <div className={styles.featuredButtons}>
            <a className={styles.featuredWatchButton} href={`/watch/${item.id}`}> {">"} Assistir</a>
            <a className={styles.featuredMyListButton} href={`/list/add/${item.id}`}>+ Minha Lista</a>
          </div>
          <div className={styles.featuredGenres}>
            <strong>Gêneros: </strong>
            {genres.join(", ")}
          </div>
        </div>
      </div>
    </section>
  );
}
