import Link from "next/link";
import styles from "../styles/Card.module.css"

export default function Card({ pokemon }) {
    const getImage = (id) => {
        let str = "" + id;
		let pad = "000";
		return pad.substring(0, pad.length - str.length) + str;
    }
    return (
        <div className={styles.card}>
            <img
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${getImage(pokemon.id)}.png`}
            width="120"
            height="120"
            alt={pokemon.name}
            />
            <p className={styles.id}>#{pokemon.id}</p>
            <h3 className={styles.title}>{pokemon.name}</h3>
            <Link href={`/pokemon.id`}>  
              <span className={styles.btn}>Detalhes</span>
            </Link>
        </div>
    )
}