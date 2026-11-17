import AddHabits from '../../components/AddHabits/index'
import DailyQuote from '../../components/DailyQuote/index'
import HabitCalendar from '../../components/HabitCalendar/index'
import {
    Alignment,
    FirstTitle,
    LeftColumn,
    PageContent,
    RightColumn,
    TitleDetails,
} from './styles'

export default function Home() {
    return (
        <main>
            <Alignment>
                <FirstTitle>Bem-vindo ao Desafio 
                    <TitleDetails>Sparta!</TitleDetails>
                </FirstTitle>
            </Alignment>
            <PageContent>
                <LeftColumn>
                    <DailyQuote />
                    <HabitCalendar />
                </LeftColumn>

                <RightColumn>
                    <AddHabits />
                </RightColumn>
            </PageContent>
        </main>
    )
}
