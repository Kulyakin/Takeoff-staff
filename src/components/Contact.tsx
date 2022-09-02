interface ContactProps {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}
 
const Contact: React.FC<ContactProps> = (props) => {
    return ( 
        <div key={props.id} className="contact">
            <div className="contact-left">
                <img className="contact__img" src={props.avatar} alt="" />
                <div className="info-block">
                    <div className="fullname">
                        <span className="fullname__span">{props.first_name}</span>
                        <span className="fullname__span">{props.last_name}</span>
                    </div>
                    <span className="nick">{`@${props.email}`}</span>
                </div>
            </div>
            <div className="contact-right">
                <button className="btn-edit"><svg className="contact__edit" width="22" height="22" viewBox="0 0 38 38" fill="#8C7F68" xmlns="http://www.w3.org/2000/svg">
                <rect x="7.77818" y="22.6274" width="25" height="10" rx="1" transform="rotate(-45 7.77818 22.6274)" fill="#8C7F68"/>
                <path d="M5.91568 32.7857C5.17211 32.985 4.4917 32.3046 4.69094 31.561L6.48409 24.8689C6.68333 24.1253 7.61279 23.8762 8.15712 24.4206L13.0561 29.3195C13.6004 29.8639 13.3514 30.7933 12.6078 30.9926L5.91568 32.7857Z" fill="#8C7F68"/>
                <rect x="33.234" y="11.3137" width="10" height="5" rx="1" transform="rotate(-135 33.234 11.3137)" fill="#8C7F68"/>
                </svg></button>
                <button onClick={() => {
                
                    }} className="btn-delete"></button>
            </div>
        </div>
);
}
 
export default Contact;