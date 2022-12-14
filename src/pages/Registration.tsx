import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isAuth, setIsAuth] = useState(false);
  const [valid, setValid] = useState(true);

  let navigate = useNavigate();

  const registration = () => {
    try {
      if (email.length > 3 && email.includes('@')) {
        axios.post('http://localhost:3001/authorization', {
          id: Math.random(),
          email: email,
          password: password,
        });
      } else {
        setValid(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const isLogin = () => {
    // axios.get('http://localhost:3001/authorization')
    // .then((r) => {
    //     const { data } = r
    //     if(data.email === email && data.password === password) {
    //         setIsAuth(true)
    //         navigate(CONTACTS_ROUTE)
    //     } else {
    //         setIsAuth(false)
    //         setValid(false)
    //     }
    // })
    // .catch((e) => console.log(e))
    // if(isAuth === true) {
    //     navigate(CONTACTS_ROUTE)
    // }
  };

  console.log(isAuth);

  return (
    <div className="form">
      <h2 className="form__title">Регистрация</h2>
      <input
        className="input input-email"
        placeholder="Введите email"
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
          <span className={!valid ? 'error' : 'error-hidden'}>Email содержит недопустимые символы</span>
        </div>
        <button className="btn" onClick={registration}>
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
};

export default Registration;
