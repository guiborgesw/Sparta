import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { down } from '../../styles/breakpoints'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.brand};

  ${down('xl')} {
    padding: 0 ${({ theme }) => theme.space[5]};
    flex-wrap: wrap;
    justify-content: space-between;
    gap: ${({ theme }) => theme.space[3]};
  }
`

export const IconImage = styled.img`
  width: 15rem;
  margin-left: 20rem;

  ${down('xl')} {
    margin-left: 0;
  }
`

export const ItemList = styled.ul`
  display: flex;
  margin-left: 55rem;
  padding: 0;
  list-style: none;

  ${down('xl')} {
    margin-left: auto;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
`

export const Item = styled.li`
  margin: ${({ theme }) => theme.space[3]};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`
