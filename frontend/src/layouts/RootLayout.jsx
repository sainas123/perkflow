import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function RootLayout() {
    return (
        <div className="min-h-screen bg-slate-950 flex flex-col font-sans relative text-slate-100">
            
            {/* The Cool Print/UI Background (Grid Overlay) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#475569_1px,transparent_1px),linear-gradient(to_bottom,#475569_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none z-0"></div>
            
            <div className="relative z-10 flex flex-col min-h-screen">
                <Header />
                <main className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-6 lg:p-8">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default RootLayout;