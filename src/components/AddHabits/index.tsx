import { RocketLaunch, Trash } from '@phosphor-icons/react'
import styles from './AddHabits.module.css'
import { useState, type FormEvent, type ChangeEvent } from 'react'

import { useHabits } from '../../context/HabitsContext'
import { toKey } from '../../utils/date'

export default function AddHabits() {
    const { habits, addHabit, removeHabit, toggleMark, isDone } = useHabits()
    const [newHabitText, setNewHabitText] = useState('')

    const now = new Date()
    const today = toKey(now.getFullYear(), now.getMonth(), now.getDate())

    function handleCreateNewHabit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        addHabit(newHabitText)
        setNewHabitText('');
    }

    function handleNewHabitChange(event: ChangeEvent<HTMLInputElement>) {
        setNewHabitText(event.target.value);
    }

    return (
        <article>
            <section>
                <h2 className={styles.secondTitle}>Meus Hábitos Pessoais <RocketLaunch /></h2>
                <form onSubmit={handleCreateNewHabit} className={styles.viewHabit}>
                    <input
                        className={styles.writeYourHabit}
                        type="text"
                        title="Nome do hábito"
                        name="habitos"
                        placeholder="Adicione um novo hábito"
                        value={newHabitText}
                        onChange={handleNewHabitChange}
                    />
                
                    <button className={styles.addYourHabit} type="submit">Adicionar</button>
                </form>
            </section>


            <section>
                <div className={styles.listToDo}>
                    {habits.map((habit) => (
                        <div key={habit.id}>
                            <header className={styles.listContent}>
                                <input type="checkbox"
                                    checked={isDone(habit.id, today)}
                                    onChange={() => toggleMark(habit.id, today)}
                                />
                                <p>{habit.name}</p>
                                <div className={styles.listLine}>
                                    <button 
                                        title="Deletar Hábito"
                                        onClick={() => removeHabit(habit.id)}
                                    >
                                        <Trash size={24} />
                                    </button>
                                </div>
                            </header>
                        </div>
                    ))}
                </div>
            </section>
        </article>
    )
}
