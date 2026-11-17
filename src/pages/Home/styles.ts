import styled from 'styled-components'
import { down } from '../../styles/breakpoints'

export const Alignment = styled.div`
  display: flex;
  justify-content: center;
  line-height: ${({ theme }) => theme.lineHeights.normal};
  padding-top: ${({ theme }) => theme.space[6]};
`

export const FirstTitle = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  font-size: ${({ theme }) => theme.fontSizes.hero};
  font-family: ${({ theme }) => theme.fonts.display};
`

export const TitleDetails = styled.span`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.hero};
  font-family: ${({ theme }) => theme.fonts.display};
  color: ${({ theme }) => theme.colors.accentMuted};
`

export const PageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space[5]};
  padding: ${({ theme }) => theme.space[5]} ${({ theme }) => theme.space[3]};

  ${down('xl')} {
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;
  }

  ${down('sm')} {
    padding: ${({ theme }) => theme.space[4]} ${({ theme }) => theme.space[3]};
  }
`

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[4]};
  flex-shrink: 0;

  ${down('xl')} {
    width: 100%;
    max-width: 24rem;
    min-width: 0;
  }
`

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  margin-right: 5rem;
  background-color: ${({ theme }) => theme.colors.brand};
  border-radius: ${({ theme }) => theme.radii.md};

  ${down('xl')} {
    width: 100%;
    max-width: 40rem;
    margin-left: 0;
    margin-right: 0;
  }
`
