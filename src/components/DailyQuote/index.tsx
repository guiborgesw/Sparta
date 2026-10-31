import styles from './DailyQuote.module.css'
import { Quote } from '../../@types/quotes'

function getDailyQuote() {

  const today = new Date();

  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
  );
  return Quote[dayOfYear % Quote.length];
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