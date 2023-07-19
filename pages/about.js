import Image from "next/image"
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus sed eius consectetur sit inventore, illo nisi temporibus commodi accusantium earum sint sunt, cum soluta praesentium unde magni tempore? Enim!</p>
            <Image 
            src="/images/charizard.png" 
            width="300"
            height="300"
            alt="Charizard"
            />
        </div>
    )
}