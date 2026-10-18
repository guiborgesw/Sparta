import styles from './Home.module.css'
import AddHabits from '../../components/AddHabits/index'
import DailyQuote from '../../components/DailyQuotes/index'
import CalendarTracker from '../../components/CalendarTracker/index'

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
                    <AddHabits />
                </div>
            </div>
        </main>
    )
}