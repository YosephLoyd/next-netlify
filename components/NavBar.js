import Link from 'next/link';
import styles from '@styles/navbar.module.css'

export default function NavBar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.dropdown}>
                <button className={styles.dropbtn}>Large Targets</button>
                <div className={styles.dropdown_content}>
                    <Link href="/" passHref>BCell</Link>
                    <Link href="/eat_d3HL60" passHref>d3HL60</Link>
                    <Link href="/eat_Wil2S" passHref>Wil2s</Link>
                </div>
            </div>
        </div>
    )
}

export { NavBar }