import { RocketLaunch, Trash } from '@phosphor-icons/react'
import styles from '../Container/Container.module.css'
import { useState } from 'react'

export default function Container({ content }) {
    
    const [habits, setHabits] = useState([])

    const [newHabitText, setNewHabitText] = useState('')

    function handleCreateNewHabit(event) {
        event.preventDefault()
        if (!newHabitText.trim()) return
        setHabits([...habits, newHabitText]);
        setNewHabitText('');
    }

    function handleNewHabitChange(event) {
        setNewHabitText(event.target.value);
    }

    function handleDeleteHabit(index) {
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
                        text="Nome do hábito"
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
                    {habits.map((habits, index) => (
                        <div key={index}>
                            <header className={styles.listContent}>
                                <input type="checkbox"/>
                                <p>{habits}</p>
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
