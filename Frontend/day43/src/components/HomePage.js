import { Navigate } from "react-router-dom";

export default function HomePage(){
    const x = localStorage.getItem("x-Auth-token")
    if(x){
        return(
           <div>
            <h1>✨Welcome to Home page✨</h1>
           </div>
        )
    }
    else{
        <Navigate replace to='/'/>
    }
//    return(
//         <div>
//             if(x){
//                 <h1>✨Welcome to Home page✨</h1>
//             }
//            else{
//                 <Navigate replace to='/'/>
//            }
//         </div>
//     )
}