import Sparta from '../../assets/Logo_Sparta.png';
import { IconImage, Item, ItemList, Nav, NavLink } from './styles';


export default function Navbar() {
    return (
        <Nav>
            <IconImage src={Sparta} alt="Website Icon" />

            <ItemList>
                <Item>
                    <NavLink to="/">
                       Home
                    </NavLink>
                </Item>
                <Item>
                    <NavLink to="/evolution">
                        Evolução
                    </NavLink>
                </Item>
                <Item>
                    <NavLink to="/ranking">
                        Ranking
                    </NavLink>
                </Item>
            </ItemList>
        </Nav>
    )
}
