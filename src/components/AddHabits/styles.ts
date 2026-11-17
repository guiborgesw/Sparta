import styled from 'styled-components'

export const SectionTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  margin-top: ${({ theme }) => theme.space[3]};
  padding: ${({ theme }) => theme.space[3]};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-family: ${({ theme }) => theme.fonts.display};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`

export const HabitForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0 ${({ theme }) => theme.space[2]};
  color: ${({ theme }) => theme.colors.white};
`

export const HabitInput = styled.input`
  width: 100%;
  max-width: 23rem;
  min-width: 0;
  height: 2.5rem;
  margin: ${({ theme }) => theme.space[3]};
  padding: ${({ theme }) => theme.space[2]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;
  border-radius: ${({ theme }) => theme.radii.lg};
`

export const AddButton = styled.button`
  align-self: center;
  justify-items: center;
  appearance: none;
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.125em solid ${({ theme }) => theme.colors.black};
  border-radius: 0.8em;
  box-sizing: border-box;
  color: #3B3B3B;
  cursor: pointer;
  height: 2.5rem;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding: 0em 1.5em;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: #1A1A1A;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`

export const HabitList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.space[3]};
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[5]}
    ${({ theme }) => theme.space[5]} ${({ theme }) => theme.space[5]};
  color: ${({ theme }) => theme.colors.black};
`

export const HabitItem = styled.header`
  display: grid;
  grid-template-columns: 7% 70% 23%;
  align-items: center;
  padding: 0.4rem ${({ theme }) => theme.space[3]};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.xl};
  box-shadow: 5px 7px rgba(255, 255, 255, 0.185);

  input {
    width: 20px;
    height: 20px;
    border-radius: 80%;
  }

  p {
    display: flex;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }

  button {
    display: flex;
    padding: ${({ theme }) => theme.space[2]};
    color: ${({ theme }) => theme.colors.black};
    background-color: transparent;
    border: 0;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.danger};
    }
  }
`

export const ListLine = styled.div`
  display: flex;
  justify-content: flex-end;
`
