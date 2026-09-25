import { RocketLaunch, Trash } from '@phosphor-icons/react'
import styles from '../Container/Container.module.css'
import { useState, type FormEvent, type ChangeEvent } from 'react'

import type { Habit } from '../../../types/habits'

export default function Container() {
    
    const [habits, setHabits] = useState<Habit[]>([])

    const [newHabitText, setNewHabitText] = useState('')

    function handleCreateNewHabit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (!newHabitText.trim()) return

        const newHabit: Habit = {
            id: crypto.randomUUID(),
            name: newHabitText,
            done: false
        }

        setHabits([...habits, newHabit]);
        setNewHabitText('');
    }

    function handleNewHabitChange(event: ChangeEvent<HTMLInputElement>) {
        setNewHabitText(event.target.value);
    }

    function handleDeleteHabit(index: number) {
        setHabits(habits.filter((_, i) => i !== index));
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
                    {habits.map((habit, index) => (
                        <div key={index}>
                            <header className={styles.listContent}>
                                <input type="checkbox"/>
                                <p>{habit.name}</p>
                                <div className={styles.listLine}>
                                    <button 
                                        title="Deletar Hábito"
                                        onClick={() => handleDeleteHabit(index)}
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
