import styles from './Navbar.module.css';
import Sparta from '../../assets/Icon_Sparta.png'
import { Link } from 'react-router';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <img className={styles.iconImage} src={Sparta} alt="Website Icon"/>

                <div className={styles.itemList}>
                    <li className={styles.item}>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/ranking">
                            Ranking
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/evolução">
                             Evolução
                        </Link>
                    </li>
                </div>
            </ul>
        </nav>
    )
}