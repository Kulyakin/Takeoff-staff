import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CONTACTS_ROUTE } from '../utils/constants';

const Authorization = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isAuth, setIsAuth] = useState(false);
  const [valid, setValid] = useState(true);

  let navigate = useNavigate();

  const isLogin = () => {
    axios
      .get('http://localhost:3001/authorization')
      .then((r) => {
        const { data } = r;
        data.forEach((u: any) => {
          if (u.email === email && u.password === password) {
            setIsAuth(true);
            navigate(CONTACTS_ROUTE);
          } else {
            setIsAuth(false);
            setValid(false);
          }
        });
      })
      .catch((e) => console.log(e));

    // if(isAuth === true) {
    //     navigate(CONTACTS_ROUTE)
    // }
  };

  const onClick = () => {
    console.log('rabotet');
  };

  console.log(isAuth);

  return (
    <div className="form">
      <h2 className="form__title">Вход</h2>
      <input
        className="input input-email"
        placeholder="Введите логин или email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        className="input"
        placeholder="Введите пароль"
        type="password"
        value={password}
        onChange={(p) => setPassword(p.target.value)}
      ></input>
      <div className="">
        <div>
          <span className={!valid ? 'error' : 'error-hidden'}>Неправильный логин или пароль</span>
        </div>
        <button className="btn" onClick={() => isLogin()}>
          Войти
        </button>
      </div>
    </div>
  );
};

export default Authorization;
