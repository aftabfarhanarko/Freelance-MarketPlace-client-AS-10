import { use } from "react"
import { AuthContext } from "../Context/AuthContext"


export const  useAuth = () => {
    const data = use(AuthContext);
    return data;
}