import styled from 'styled-components'

export const QuoteBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 24rem;
  padding: ${({ theme }) => theme.space[4]};
  gap: ${({ theme }) => theme.space[2]};
  background-color: ${({ theme }) => theme.colors.brand};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.xl};
  font-family: ${({ theme }) => theme.fonts.display};
  line-height: ${({ theme }) => theme.lineHeights.normal};
`
