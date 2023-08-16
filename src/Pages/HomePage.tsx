import Carousel from '../components/Carousel';
import styles from './HomePage.module.css';
import ButtonsCategories from '../components/ButtonsCategories';
import SearchAppBar from '../components/SearchAppBar';
import CardAnimals from '../components/CardAnimals';

export default function HomePage() {
  return (
    <div className={styles.HomePage}>
      <SearchAppBar/>
      <Carousel/>
      <ButtonsCategories/>
      <CardAnimals/>
    </div>
  )
}
