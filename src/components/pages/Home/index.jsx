import styles from './Home.module.css'
import Container from '../../layout/Container/index'
import DailyQuote from '../../layout/DailyQuotes/index'
import { RocketLaunch } from '@phosphor-icons/react'

export default function Home() {
    return (
        <main>
            <div className={styles.alignment}>
                <h1 className={styles.firstTitle}>Bem-vindo ao Desafio 
                    <div className={styles.titleDetails}>Sparta!</div>
                </h1>
            </div>

                <div>
                    <div className={styles.quoteWrapper}>
                        <DailyQuote />
                    </div>
                    <div>

                    </div>
                    <div className={styles.containerList}>
                        <Container />
                    </div>
                </div>
            <footer>
                
            </footer>
        </main>
    )
}