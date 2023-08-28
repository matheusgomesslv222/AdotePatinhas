import styles from "./AboutPage.module.css";
import SearchAppBar from '../components/HomePage/SearchAppBar';
export default function AboutPage() {
  return (
    <div className={styles.About}> 
        <SearchAppBar/>
        <div className={styles.main}>
       
        <h1>Quem Somos Nós?</h1>

        <div className={styles.texto}>
          <p>A adoção de animais de estimação é um ato de amor e responsabilidade, com a ideia central de adotar um animal virtual, possibilitando essa criação de uma conexão real. Adote Patinhas é um programa que será realizado através de uma adoção 100% virtual, funcionando assim: os animais da ONG animal, precisam de ajuda para possam ajudar mais e mais vidas, a ideia é que cada pessoa adote virtualmente um ou mais animais da ONG, assim ajudando no custo da alimentação e da saúde. No nosso portal será disponibilizado um espaço dedicado a adoção, assim a pessoa irá conhecer todos os animaizinhos que precisam de ajuda, no cadastro você poderá adquirir um nome para o animal escolhido + o direito de receber fotos do animal semanalmente, por intermédio de pessoas qualificadas nos cuidados de cada um dos bichinhos da ONG. Todo o dinheiro arrecadado irá ser transferido para a ONG animal, através de cada adoção de um animal virtual. Outra forma de ajuda é doando itens avulsos (como alimentos e acessórios). Caso ocorra um interesse da adoção verdadeira do animal doméstico, iniciaremos um novo processo de avaliação de adoção, por meio de um formulário disponibilizado no site. Somos uma ponte entre um animalzinho que necessita ser bem cuidado e o humano que precisar amar. Adote-o seu.</p></div>

        </div>
    </div>
    
  )
}

