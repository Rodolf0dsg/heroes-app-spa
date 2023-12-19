import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate } from "react-router-dom"


export const PublicRoute = ({children}) => {

    const { logged } = useContext( AuthContext );

    // console.log(children)

    return ( !logged )
        ? (children)
        : <Navigate to="/marvel"/>
}
