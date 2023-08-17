import styles from './CardList.module.css'
import CardAnimals from './CardAnimals';

export default function CardList() {
  return (
    <div className={styles.CardList}>
        
        <div>
            <CardAnimals/>
        </div>
    </div>
  )
}
