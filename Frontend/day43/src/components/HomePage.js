import { Navigate } from "react-router-dom";

export default function HomePage(){
   return(
        <div>
            const x = localStorage.getItem("x-Auth-token")
            if(x){
                <h1>✨Welcome to Home page✨</h1>
            }
           else{
                <Navigate replace to='/'/>
           }
        </div>
    )
}