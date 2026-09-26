import styles from './Home.module.css'
import Container from '../../layout/Container/index'
import DailyQuote from '../../layout/DailyQuotes/index'
import CalendarTracker from '../../layout/CalendaryTracker'

export default function Home() {
    return (
        <main>
            <div className={styles.alignment}>
                <h1 className={styles.firstTitle}>Bem-vindo ao Desafio 
                    <div className={styles.titleDetails}>Sparta!</div>
                </h1>
            </div>
            <div className={styles.pageContent}>
                <div className={styles.leftColumn}>
                    <DailyQuote />
                    <CalendarTracker />
                </div>

                <div className={styles.rightColumn}>
                    <Container />
                </div>
            </div>
        </main>
    )
}