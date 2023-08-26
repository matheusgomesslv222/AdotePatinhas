import styles from './LoginPage.module.css';
import LoginButtons from '../components/LoginPage/LoginButtons';
export default function LoginPage() {
  return (
    <>
      <div className={styles.Main}>
          <img src="/img/LogoPatinha.png" alt="" />
          <LoginButtons/>
      </div>
    </>
  )
}
