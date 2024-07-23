import React from 'react';
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css";

const Movie = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    const url = process.env.RAPID_KEY;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c02fbc68bcmshbcf86db29a2c655p12007cjsn9adea8d51505',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    try {
        const res = await fetch(url, options);
        if (!res.ok) {
            throw new Error(`Error fetching data: ${res.statusText}`);
        }

        const data = await res.json();
        console.log("Fetched data: ", data);

        // Extract episodes from the first season
        const episodes = data[0]?.episodes ?? [];
        console.log("Episodes: ", episodes);

        return (
            <>
                <section className={styles.movieSection}>
                    <div className={styles.container}>
                        <h1>Series & Movie</h1>
                        <div className={styles.card_section}>
                            {episodes.length > 0 ? (
                                episodes.map((episode) => (
                                    <MovieCard key={episode.episodeId} {...episode} />
                                ))
                            ) : (
                                <p>No data available</p>
                            )}
                        </div>
                    </div>
                </section>
            </>
        );
    } catch (error) {
        console.error("Error fetching data:", error);
        return (
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        <p>Error loading data</p>
                    </div>
                </div>
            </section>
        );
    }
};

export default Movie;
