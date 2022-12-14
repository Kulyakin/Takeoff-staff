import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CREATECONTACT_ROUTE } from '../utils/constants';
import { Skeleton } from '../components/Skeleton';
import Contact from '../components/Contact';
import { useAppDispatch, useAppSelector } from '../store/store';
import { fetchUsers } from '../store/slices/userSlice';

export interface QuoteResponse {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const Contacts: React.FC<QuoteResponse> = (props) => {
  const [searchValue, setSearchValue] = useState<string>('');
  let navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const { users, isLoading } = useAppSelector((state) => state.user);
  console.log(users);

  // useEffect(() => {
  //     fetch('https://reqres.in/api/users')
  //         .then((r) => r.json())
  //         .then((r) => {
  //             setUsers(r.data)
  //         })
  //         .catch((e) => console.log(e))
  // }, [])

  // useEffect(() => {
  //     axios.get<QuoteResponse>('http://localhost:3001/users')
  //     .then((r) => {
  //         const { data } = r
  //         setTimeout(() => {
  //             setUsers(data)
  //         setIsLoading(false)
  //         }, 3000)
  //     })
  //     .catch((e) => console.log(e))
  // }, [])

  // const addNewUser = () => {
  //     axios.post('http://localhost:3001/users', {
  //         avatar: "https://reqres.in/img/faces/1-image.jpg",
  //         email: "kulyakinv@gmail.com",
  //         first_name: "Vlad",
  //         id: 1995,
  //         last_name: "Kulyakin"
  //     }).then((r) => console.log(r))
  //     .catch((e) => console.log(e))
  // }

  // const handleDelete = (id) => {
  //     const usersAfterDelete = users.filter((u) => u.id !== id)
  //     console.log('Новый', usersAfterDelete)
  //     console.log('Исходный',users)
  //     setUsers(usersAfterDelete)
  // }

  // const serverDelete = (id) => {
  //     axios.delete(`http://localhost:3001/users/${id}`)
  //         .then(resp => {
  //             console.log(resp.data)
  //         }).catch(error => {
  //             console.log(error);
  //         });
  // }
  // console.log(window.location.pathname)
  // console.log(window)
  return (
    <div className="contact__wrapper">
      <div className="container">
        <input
          className="input"
          placeholder="Поиск контактов"
          value={searchValue}
          type={'text'}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        <div className="contacts__wrap">
          {isLoading
            ? [...new Array(5)].map((_, index) => <Skeleton key={index} />)
            : users
                .filter((user: any) => {
                  const fullname = (user.first_name + user.last_name).toLowerCase();
                  if (fullname.includes(searchValue.toLowerCase()) || user.email.includes(searchValue.toLowerCase())) {
                    return true;
                  }
                })
                .map((user: any) => {
                  return <Contact key={user.id} {...user} />;
                })}
        </div>
        <div className="btn-block">
          <button
            className="btn"
            onClick={() => {
              navigate(CREATECONTACT_ROUTE);
            }}
          >
            Добавить
          </button>
        </div>
        {/* <button onClick={handleClick}>fff</button> */}
      </div>
    </div>
  );
};

export default Contacts;
