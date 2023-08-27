import Carousel from '../components/HomePage/Carousel';
import styles from './HomePage.module.css';
import ButtonsCategories from '../components/HomePage/ButtonsCategories';
import SearchAppBar from '../components/HomePage/SearchAppBar';
import CardAnimals from '../components/HomePage/CardAnimals';
import CardList from '../components/HomePage/CardList';
import Footer from '../components/Footer/Footer'

export default function HomePage() {
  //Código de estruturas da HomePage
  return (
    <div className={styles.HomePage}>
        <SearchAppBar />
      <div className={styles.Main}>
        <Carousel/>
        <ButtonsCategories/>
        <h2>Top Adoçoes</h2>
        <CardAnimals/>
        <CardList/>
      </div>
        <Footer/>
    </div>
  )
}
