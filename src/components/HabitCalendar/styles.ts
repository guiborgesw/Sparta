import styled from 'styled-components'

export const CalendarWrapper = styled.div<{ $disabled?: boolean }>`
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};

  .react-calendar {
    width: 100%;
    max-width: 350px;
    background: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 12px;
    overflow: hidden;
  }

  .react-calendar__navigation {
    background: ${({ theme }) => theme.colors.brand};
    border-radius: 12px 12px 0 0;
    padding: 8px;
  }

  .react-calendar__navigation button {
    background: transparent;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
  }

  .react-calendar__navigation button:disabled {
    background: transparent;
  }

  .react-calendar__navigation button:enabled:hover {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 8px;
  }

  .react-calendar__navigation__label {
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
  }

  .react-calendar__month-view {
    padding: 0 ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[3]}
      ${({ theme }) => theme.space[3]};
  }

  .react-calendar__month-view__weekdays {
    display: grid !important;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
  }

  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none;
  }

  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
  }

  .react-calendar__tile {
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
    background: transparent;
    border-radius: 50%;
    aspect-ratio: 1;
  }

  .react-calendar__tile:enabled:hover {
    background: ${({ theme }) => theme.colors.info};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
  }

  .react-calendar__tile:disabled {
    color: ${({ theme }) => theme.colors.border};
  }

  .react-calendar__tile.highlightDay {
    background: ${({ theme }) => theme.colors.success};
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    border-radius: 50%;
  }
`
