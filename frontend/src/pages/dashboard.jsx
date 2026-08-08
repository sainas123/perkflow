import { Link, useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';

function Dashboard() {
  const navigate = useNavigate();

  const [offers,setOffers]=useState([]);

  const fetchOffers=async()=>{
    const response=await fetch('http://localhost:3000/offers');
    const data=await response.json();;
    setOffers(data);
  }

  useEffect(() => {
    const isAuth = sessionStorage.getItem('isAuthenticated');
    if (!isAuth) {
      navigate('/');
    }
  }, [navigate]);

  useEffect(()=>{
    fetchOffers();
  },[])

  const completeOffer=async (id)=>{
    await fetch(`http://localhost:3000/offers/${id}`,{
      method:"DELETE"
    });
    // setOffers(prevOffers=>prevOffers.filter(offer=>offer.id!==id))
    fetchOffers();
  };

  const stats = [
    { label: 'Balance', value: '₹0', icon: '💰', color: 'from-purple-100 to-pink-100' },
    { label: 'Completed', value: '4', icon: '✅', color: 'from-pink-100 to-pink-200' },
    { label: 'Total Earned', value: '₹550', icon: '💵', color: 'from-pink-50 to-purple-100' },
    { label: 'Pending', value: '2', icon: '⏳', color: 'from-purple-50 to-pink-50' }
  ];

  // const offers = [
  //   { id: 1, title: 'Survey', reward: '₹50', time: '5 mins' },
  //   { id: 2, title: 'Game', reward: '₹100', time: '10 mins' },
  //   { id: 3, title: 'Install App', reward: '₹150', time: '2 mins' }
  // ];

  return (
    <div className="flex flex-col gap-8 pb-10">
      
      {/* Greeting Section */}
      <section className="bg-white/50 backdrop-blur-lg border border-pink-100 p-8 rounded-[2rem] shadow-sm">
        <h1 className="text-3xl font-black text-purple-900 tracking-tight mb-2 flex items-center gap-2">
          <span className="text-4xl hover:animate-pulse cursor-default">👋</span> Good Evening, Saina
        </h1>
        <p className="text-lg text-purple-700/80 font-medium">Welcome back! Here's your rewards overview.</p>
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className={`bg-gradient-to-br ${stat.color} p-6 rounded-3xl border border-white/60 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300`}>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl drop-shadow-sm">{stat.icon}</span>
              <span className="text-xs font-bold text-purple-800/70 uppercase tracking-widest">{stat.label}</span>
            </div>
            <p className="text-3xl font-black text-purple-950/90 ml-1 mt-1">{stat.value}</p>
          </div>
        ))}
      </section>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Offers Section */}
        <section className="bg-white/60 backdrop-blur-xl border border-pink-200/60 rounded-[2rem] p-6 shadow-sm flex flex-col h-full hover:shadow-lg transition-shadow duration-500">
          <div className="flex justify-between items-center mb-6 px-2">
            <h2 className="text-xl font-bold text-purple-950 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              Available Offers
            </h2>
            <Link to="/offers" className="text-sm font-bold text-pink-600 hover:text-white transition-colors bg-pink-100 hover:bg-pink-500 px-4 py-1.5 rounded-full">View All</Link>
          </div>
          
          <div className="flex-1 grid gap-4">
            {offers.map(offer => (
              <div key={offer.id} className="group border border-pink-50 hover:border-pink-200 bg-gradient-to-r from-purple-50/20 to-pink-50/30 rounded-2xl p-4 flex items-center justify-between transition-all hover:bg-white/80">
                <div className="flex flex-col">
                  <span className="font-bold text-purple-900 text-lg group-hover:text-pink-600 transition-colors">{offer.title}</span>
                  <span className="text-xs font-semibold text-purple-500/70 uppercase tracking-widest mt-1 flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {offer.time}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-black text-xl text-pink-600 bg-pink-100/80 px-3 py-1 rounded-full">₹{offer.reward}</span>
                  <button 
                  onClick={()=>completeOffer(offer.id)}
                  className="bg-purple-900 shadow-md shadow-purple-900/20 hover:bg-pink-500 text-white font-bold py-2 px-5 rounded-full transition-all hover:shadow-lg transform active:scale-95 text-sm cursor-pointer">
                    Complete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Transactions Section */}
        <section className="bg-white/60 backdrop-blur-xl border border-pink-200/60 rounded-[2rem] p-6 shadow-sm flex flex-col h-full hover:shadow-lg transition-shadow duration-500">
          <div className="flex justify-between items-center mb-6 px-2">
            <h2 className="text-xl font-bold text-purple-950 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              Recent Transactions
            </h2>
            <Link to="/transactions" className="text-sm font-bold text-purple-600 hover:text-white transition-colors bg-purple-100 hover:bg-purple-500 px-4 py-1.5 rounded-full">View All</Link>
          </div>

          <div className="flex flex-col gap-3 flex-1">
            {/* Tx 1 */}
            <div className="bg-gradient-to-r from-white/90 to-pink-50/50 p-4 rounded-2xl border border-pink-100/50 flex justify-between items-center hover:bg-pink-50/80 transition-colors">
              <div className="flex items-center gap-4">
                <div className="bg-pink-100 text-pink-600 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div>
                  <p className="font-bold text-purple-950">Survey completion</p>
                  <p className="text-xs font-semibold text-purple-400 mt-0.5">Today, 2:30 PM</p>
                </div>
              </div>
              <span className="font-black text-pink-600 bg-pink-100/50 px-2 py-0.5 rounded-md">+₹50</span>
            </div>
            
            {/* Tx 2 */}
            <div className="bg-gradient-to-r from-white/90 to-pink-50/50 p-4 rounded-2xl border border-pink-100/50 flex justify-between items-center hover:bg-pink-50/80 transition-colors">
              <div className="flex items-center gap-4">
                <div className="bg-pink-100 text-pink-600 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div>
                  <p className="font-bold text-purple-950">Install App</p>
                  <p className="text-xs font-semibold text-purple-400 mt-0.5">Yesterday</p>
                </div>
              </div>
              <span className="font-black text-pink-600 bg-pink-100/50 px-2 py-0.5 rounded-md">+₹100</span>
            </div>

            {/* Tx 3 */}
            <div className="bg-gradient-to-r from-white/90 to-purple-50/50 p-4 rounded-2xl border border-purple-100/50 flex justify-between items-center hover:bg-purple-50/80 transition-colors">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 text-purple-600 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
                <div>
                  <p className="font-bold text-purple-950">Withdrawal to Bank</p>
                  <p className="text-xs font-semibold text-purple-400 mt-0.5">2 days ago</p>
                </div>
              </div>
              <span className="font-black text-purple-600 bg-purple-100/50 px-2 py-0.5 rounded-md">-₹500</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Dashboard;