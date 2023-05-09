import Link from 'next/link';
import styles from '@styles/navbar.module.css'

export default function NavBar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.dropdown}>
                <button className={styles.dropbtn}>Large Targets</button>
                <div className={styles.dropdown_content}>
                    <Link href="/" passHref>BCell Surface IgG</Link>
                    <Link href="/test" passHref>test</Link>
                </div>
            </div>
        </div>
    )
}

export { NavBar }