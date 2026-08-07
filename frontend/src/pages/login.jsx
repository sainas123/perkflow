
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {

  const navigate=useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error,setError]=useState("");
  const [success,setsuccess]=useState(false);

  const handlechange=(e)=>{
    setEmail(e.target.value)
  }

  const handlepassword=(e)=>{
    setPassword(e.target.value)

  }

  const handlelogin=()=>{
    if(email.trim()==="" || password.trim()===""){
      setsuccess(false);
      setError("Please fill in all fields");
      return;
    }
    else if(!email.includes("@")||!email.includes(".")){
      setsuccess(false);
      setError("Please enter a valid email address");
      return;
    }else{

      setsuccess(false);
      setError("");
      setLoading(true);
      

      setTimeout(()=>{
        setLoading(false);
        navigate("/dashboard");
      },2000)
      setError("");
      
    }
  }

  


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 gap-2">

      <h1 className="text-4xl font-bold text-white font-display">PerkFlow</h1>
      <h3 className="text-white ">welcome back!</h3>

      

      <div className="w-full max-w-md rounded-2xl bg-white p-4 shadow-xl mb-4 flex flex-col gap-2  items-center">

        <input 
        className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:ring-2 focus:ring-slate-700" 
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handlechange}
        />   

        <input className="w-full  rounded-lg border border-slate-300 px-2 py-2 outline-none focus:ring-2 focus:ring-slate-900"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={handlepassword}
        />

        <div>
        {loading ? <h3 className="text-yellow-900">Loading...</h3> :  <button className="w-40 rounded-lg bg-blue-950  text-white font-medium py-2 hover:bg-slate-800 "
        onClick={handlelogin}
        >Login</button>}
        </div>

       
        <div> {
          error==="" ? "" : <h3 className="text-red-500">{error}</h3>
        }
        </div>

        <div>
          {success ? <h3 className="text-green-500">Login successful!</h3> : ""}
        </div>




         


        
         
      </div>

    </div>
  )
}

export default Login