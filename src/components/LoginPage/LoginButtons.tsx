import style from './LoginButtons.module.css';

export default function LoginButtons() {
  //
  return (
    <div>
        <input placeholder='Email' type="email" name="email" id="" className={style.Input}/>
        <input placeholder='Senha' type="password" name="password" id="" className={style.Input}/>
    </div>
  )
}
