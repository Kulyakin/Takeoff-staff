import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CONTACTS_ROUTE } from "../utils/constants";

interface CreateNewUserProps {
    
}
 
const CreateNewUser: React.FC<CreateNewUserProps> = () => {

    const [email, setEmail] = useState('')
    const [firstname, setFirstname] = useState('')
    const [surname, setSurname] = useState('')
    const [avatar, setAvatar] = useState('')
    let navigate = useNavigate()

    const createUser = () => {

        if (avatar && email && firstname && surname) {
            axios.post('http://localhost:3001/users', {
            avatar: avatar,
            email: email,
            first_name: firstname,
            id: Math.random(),
            last_name: surname
        })
        .then((r) => console.log(r))
        .catch((e) => console.log(e))
        }
        
    }

    console.log(email, firstname, surname)

    return ( 
        <div className="form">
            <form>
            <h2 className="form__title">Новый контакт</h2>

                <div className="input-form">
                    <input 
                        className="input" 
                        type="email"
                        placeholder="example@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                         />
                </div>
                <div className="input-form">
                    <input 
                        className="input" 
                        type="text"
                        placeholder="Иван"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        />
                </div>
                <div className="input-form">
                    <input 
                        className="input" 
                        type="text"
                        placeholder="Иванов" 
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        />
                </div>
                <div className="input-form">
                    <input 
                        className="input" 
                        type="url"
                        placeholder="ссылка" 
                        value={avatar}
                        onChange={(e) => setAvatar(e.target.value)}
                        />
                </div>
                <div className="form-btn">
                    <button className="btn" onClick={() => {
                        createUser()
                        navigate(CONTACTS_ROUTE)
                        }}>Создать контакт</button>
                </div>


            </form>
        </div>
     );
}
 
export default CreateNewUser;