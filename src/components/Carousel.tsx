import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css'

const images = [
    '/img/BannerPet.png',
    '/img/BannerBrinquedos.png',
    '/img/BannerPet.png',
    // Adicione mais URLs de imagens aqui
  ];


export default function Carousel() {
    const settings = {
        dots: true, // Mostrar pontos indicadores
        infinite: true, // Navegação infinita
        autoplay: true, // Reprodução automática
        speed: 2000, // Velocidade de transição (ms)
        slidesToShow: 1, // Quantidade de imagens visíveis por vez
        slidesToScroll: 1, // Quantidade de imagens a avançar/retroceder
        nextArrow: <></>,
        prevArrow: <></>,
      };
  return (
    <div className={styles.Container}>
      <div className={styles.Carousel}>
        <Slider {...settings}>
            {images.map((image, index)=>(
                <div className={styles.Slider} key={index}>
                    <img src={image} alt={`Imagem ${index + 1}`} />
                </div>
            ))}
        </Slider>
    </div>
    </div>
  )
}
