import React from 'react';
import styles from "@/app/styles/common.module.css";
import Image from "next/image";

const Page = async ({ params }) => {
    const id = params.id;

    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

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
        console.log("Fetched data:", data); // Debug log the entire data

        const main_data = data[0]?.details;
        console.log("Main data:", main_data); // Debug log the main data

        if (!main_data) {
            throw new Error('Details not found in the response');
        }

        return (
            <div className={styles.container}>
                <h2 className={styles.movie_title}>
                    Netflix \ <span>{main_data.type}</span>
                </h2>
                <div className={styles.card_section}>
                    <div>
                        {main_data.backgroundImage?.url && (
                            <Image
                                src={main_data.backgroundImage.url}
                                alt={main_data.title}
                                width={600}
                                height={300}
                            />
                        )}
                    </div>
                    <div>
                        <h1>{main_data.title}</h1>
                        <p>{main_data.synopsis}</p>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Error fetching data:', error);
        return (
            <div className={styles.container}>
                <h2>Error</h2>
                <p>Failed to load data. Please try again later.</p>
            </div>
        );
    }
};

export default Page;
