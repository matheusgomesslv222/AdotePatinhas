import Carousel from '../components/Carousel';
import styles from './HomePage.module.css';
import ButtonsCategories from '../components/ButtonsCategories';
import SearchAppBar from '../components/SearchAppBar';
import CardAnimals from '../components/CardAnimals';
import CardList from '../components/CardList';

export default function HomePage() {
  return (
    <div className={styles.HomePage}>
      <SearchAppBar/>
      <Carousel/>
      <img src="" alt="" />
      <ButtonsCategories/>
      <h2>Top Adoçoes</h2>
      <CardAnimals/>
      <CardList/>

    </div>
  )
}
