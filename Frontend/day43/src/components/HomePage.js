import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export default function HomePage(){
    const navigate = useNavigate();

    const handleLogOut=()=>{
        localStorage.clear();
        navigate('/');
        }
    const x = localStorage.getItem("x-Auth-token")
    if(x){
        return(
           <div>
            <h1>✨Welcome to Home page✨</h1>
            <br/>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>handleLogOut()}
            >
              Log out
            </Button>
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