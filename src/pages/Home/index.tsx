import styles from './Home.module.css'
import AddHabits from '../../components/AddHabits/index'
import DailyQuote from '../../components/DailyQuote/index'
import HabitCalendar from '../../components/HabitCalendar/index'

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
                    <HabitCalendar />
                </div>

                <div className={styles.rightColumn}>
                    <AddHabits />
                </div>
            </div>
        </main>
    )
}