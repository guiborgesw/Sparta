import styles from './Home.module.css'
import habitsStyles from './HabitsList.module.css'

export default function Home() {
    return (
        <main>
            <h1>Bem vindo ao Desafio Sparta!</h1>
            <section>
                <h2>Meus Hábitos Diários</h2>
                <input
                    type="text"
                    text="Nome do hábito"
                    name="habitos"
                    placeholder="Insira seu hábito novo aqui"
                />
                <input type="submit" value="Adicionar"/>
            </section>
            <section className={habitsStyles.habitsList}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </section>
            <footer>
                
            </footer>
        </main>
    )
}