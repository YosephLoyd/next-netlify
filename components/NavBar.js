import Link from 'next/link';
import styles from '@styles/navbar.module.css'

export default function NavBar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.dropdown}>
                <button className={styles.dropbtn}>Mouse Red Cells</button>
                <div className={styles.dropdown_content}>
                    <Link href="/" passHref>BCell Surface IgG</Link>
                    <Link href="/cd47ko" passHref>CD47KO mRBC</Link>
                </div>
            </div>
        </div>
    )
}

export { NavBar }