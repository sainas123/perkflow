import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function RootLayout() {
    return (
        <div className="min-h-screen bg-purple-50 flex flex-col font-sans">
            <Header />
            <main className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-6 lg:p-8">
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;