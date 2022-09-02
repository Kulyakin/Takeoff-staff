import Authorization from "../pages/Authorization";
import Contacts from "../pages/Contacts";
import CreateNewUser from "../pages/CreateNewUser";
import Registration from "../pages/Registration";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, CONTACTS_ROUTE, CREATECONTACT_ROUTE} from '../utils/constants'



export const allRoutes = [
    {
        path: LOGIN_ROUTE,
        component: <Authorization/>
    },
    {
        path: REGISTRATION_ROUTE,
        component: <Registration/>
    },
    {
        path: CONTACTS_ROUTE,
        component: <Contacts/>
    },
    {
        path: CREATECONTACT_ROUTE,
        component: <CreateNewUser/>
    }
]