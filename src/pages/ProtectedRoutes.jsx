import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router"
import store from "../store"


const ProtectedRoutes = () => {
    
    const trainerName = useSelector(store => store.trainerName)


    if (trainerName.length > 2){
        return <Outlet/>
    } else {
        return <Navigate to='/' />
    }
}
export default ProtectedRoutes