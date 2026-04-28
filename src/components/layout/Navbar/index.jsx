import styles from './Navbar.module.css';
import Sparta from '../../../assets/Logo_Sparta.png'
import { Link } from 'react-router';
import { ChartBarIcon, HouseLineIcon, TrophyIcon } from '@phosphor-icons/react';


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
                        <Link to="/evolution">
                            Evolução
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/ranking">
                            Ranking
                        </Link>
                    </li>
                </div>
            </ul>
        </nav>
    )
}