import styles from './Card.module.css'

interface UICard {
  modalidade: string;
  descricao: string;
}

export default function Card({ modalidade, descricao }: UICard ) {
  return(
    <div className={styles.card}>
      
      <div className={styles.cardTitle}>
        <h3>{modalidade}</h3>
      </div>

      <div className={styles.cardDescription}>
        <p>
          {descricao}
        </p>
      </div>

    </div>
  )
}