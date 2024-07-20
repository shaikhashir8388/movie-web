import styles from '@/app/styles/common.module.css';
import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ episodeId, title, contextualSynopsis, interestingMoment }) => {
    const synopsis = contextualSynopsis?.text;
    const backgroundImage = interestingMoment?._342x192?.webp?.value?.url;

    return (
        <>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    {backgroundImage && (
                        <Image src={backgroundImage} alt={title} width={260} height={200} />
                    )}
                </div>
                <div className={styles.card_data}>
                    <h2>{title?.substring(0, 18)}</h2>
                    <p>
                        {`${synopsis?.substring(0, 66)} ...`}
                    </p>

                    <Link href={`/movie/${episodeId}`}>
                        <button>
                            Read More
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default MovieCard;
