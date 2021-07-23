
import Link from 'next/link'
import styles from '/styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p><i class="fa fa-copyright" aria-hidden="true">Copyright &copy; DJ Events 2021</i></p>
            <p>
                <Link href='/about'>About This Project</Link>
            </p>
        </footer>
    )
}
