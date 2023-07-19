import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return(
        <nav>
            <Image 
            src="/images/pokeball.png" 
            width="30"
            height="30"
            alt="PokeNext"
            />
            <div>
                <h1>PokeNext</h1>
            </div>
            <ul>
                <li>
                    <Link href="/">
                        <p>Home</p>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <p>Sobre</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}