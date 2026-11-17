import { RocketLaunch, Trash } from '@phosphor-icons/react'
import { useState, type FormEvent, type ChangeEvent } from 'react'

import { useHabits } from '../../context/HabitsContext'
import { toKey } from '../../utils/date'
import {
    AddButton,
    HabitForm,
    HabitInput,
    HabitItem,
    HabitList,
    ListLine,
    SectionTitle,
} from './styles'

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
                <SectionTitle>Meus Hábitos Pessoais <RocketLaunch /></SectionTitle>
                <HabitForm onSubmit={handleCreateNewHabit}>
                    <HabitInput
                        type="text"
                        title="Nome do hábito"
                        name="habitos"
                        placeholder="Adicione um novo hábito"
                        value={newHabitText}
                        onChange={handleNewHabitChange}
                    />
                
                    <AddButton type="submit">Adicionar</AddButton>
                </HabitForm>
            </section>


            <section>
                <HabitList>
                    {habits.map((habit) => (
                        <div key={habit.id}>
                            <HabitItem>
                                <input type="checkbox"
                                    checked={isDone(habit.id, today)}
                                    onChange={() => toggleMark(habit.id, today)}
                                />
                                <p>{habit.name}</p>
                                <ListLine>
                                    <button 
                                        title="Deletar Hábito"
                                        onClick={() => removeHabit(habit.id)}
                                    >
                                        <Trash size={24} />
                                    </button>
                                </ListLine>
                            </HabitItem>
                        </div>
                    ))}
                </HabitList>
            </section>
        </article>
    )
}
