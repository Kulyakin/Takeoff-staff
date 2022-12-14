import { EditIcon } from '../assets';
import { userDelete } from '../store/slices/userSlice';
import { useAppDispatch } from '../store/store';

interface ContactProps {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const Contact: React.FC<ContactProps> = (props) => {
  const dispatch = useAppDispatch();

  return (
    <div key={props.id} className="contact">
      <div className="contact-left">
        <img className="contact-left__img" src={props.avatar} alt="" />
        <div className="info-block">
          <div className="info-block__fullname">
            <span className="info-block__fullname-span">{props.first_name}</span>
            <span className="info-block__fullname-span">{props.last_name}</span>
          </div>
          <span className="info-block__nick">{`@${props.email}`}</span>
        </div>
      </div>
      <div className="contact-right">
        <button className="btn-edit">
          <EditIcon className="btn-edit__icon" />
        </button>
        <button onClick={() => dispatch(userDelete(props.id))} className="btn-delete"></button>
      </div>
    </div>
  );
};

export default Contact;
