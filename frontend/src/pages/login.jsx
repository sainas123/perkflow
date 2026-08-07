
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
      

      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('isAuthenticated', 'true');
        navigate("/dashboard");
      }, 2000)
      setError("");
      
    }
  }

  


  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 animate-fade-in">

      <div className="w-full max-w-md bg-white/40 backdrop-blur-3xl rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_32px_rgba(31,38,135,0.05)] border border-white/60 flex flex-col items-center relative overflow-hidden">
        
        {/* Decorative Background Gradients */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 -right-20 w-48 h-48 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-24 left-10 w-48 h-48 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '4s' }}></div>

        {/* Header */}
        <div className="z-10 flex flex-col items-center gap-2 w-full mb-8">
          <h1 className="text-4xl font-black bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent tracking-tight text-center drop-shadow-sm">
            PerkFlow
          </h1>
          <h3 className="text-slate-500 font-semibold text-sm">Welcome back! Please sign in.</h3>
        </div>

        {/* Form Inputs */}
        <div className="z-10 w-full flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest pl-2">Email Address</label>
            <input 
              className="w-full rounded-2xl border border-white/50 bg-white/70 px-5 py-3.5 text-slate-700 outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white transition-all shadow-sm placeholder-slate-300" 
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handlechange}
            />   
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest pl-2">Password</label>
            <input 
              className="w-full rounded-2xl border border-white/50 bg-white/70 px-5 py-3.5 text-slate-700 outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all shadow-sm placeholder-slate-300"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={handlepassword}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="z-10 w-full mt-8">
          {loading ? (
            <div className="flex justify-center py-3.5 border border-white/50 bg-white/50 rounded-2xl shadow-sm">
              <h3 className="text-purple-600 font-bold animate-pulse">Authenticating...</h3>
            </div>
          ) : (
            <button 
              className="w-full rounded-2xl bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold py-3.5 shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-[1.02] hover:-translate-y-0.5 transition-all active:scale-[0.98]"
              onClick={handlelogin}
            >
              Login
            </button>
          )}
        </div>
       
        {/* Messages */}
        <div className="z-10 w-full mt-4 flex flex-col items-center justify-center min-h-[28px]"> 
          {error === "" ? null : (
            <div className="bg-pink-50/80 border border-pink-200 px-4 py-2 rounded-xl w-full text-center shadow-sm">
              <h3 className="text-pink-600 font-bold text-xs">{error}</h3>
            </div>
          )}
          
          {success ? (
            <div className="bg-blue-50/80 border border-blue-200 px-4 py-2 rounded-xl w-full text-center shadow-sm">
              <h3 className="text-blue-600 font-bold text-xs">Login successful!</h3>
            </div>
          ) : null}
        </div>

      </div>
    </div>
  )
}

export default Login