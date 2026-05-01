import styles from './DailyQuote.module.css'
import { quotes } from './Quotes'

function getDailyQuote() {

  const today = new Date();

  const dayOfYear = Math.floor(
    (today - new Date(today.getFullYear(), 0, 0)) / 86400000
  );
  return quotes[dayOfYear % quotes.length];
}

export default function DailyQuote() {
    const quote = getDailyQuote();

    return (
        <div className={styles.dailyQuote}>
            <span>Inspiração do Dia</span>
            <blockquote>
                <p><strong>"{quote.text}"</strong></p>
                <cite>— {quote.author}</cite>
            </blockquote>
        </div>
    )
}