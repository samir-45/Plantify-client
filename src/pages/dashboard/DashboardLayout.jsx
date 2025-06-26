import React from 'react';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import { NavLink, Outlet } from 'react-router';
import { LayoutDashboard, List, PlusCircle, User } from 'lucide-react';

const DashboardLayout = () => {
    return (
        <div>
            <header className='px-3 py-3 sticky top-0 z-50 '>
                <NavBar></NavBar>
                <div className="Hero"></div>
            </header>
            <main>
                    <div className="flex min-h-screen max-w-7xl px-3">
      {/* Sidebar */}
      <aside className="w-64 bg-green-100 min-h-screen p-6 rounded-r-3xl shadow-md">
      <h2 className="text-2xl font-bold text-green-700 mb-8 flex items-center gap-2">
        🌿 Dashboard
      </h2>
      <ul className="space-y-4">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-green-700 font-semibold flex items-center gap-2" : "text-gray-700 flex items-center gap-2"
            }
          >
            <LayoutDashboard size={20} /> Overview
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/allPlants"
            className={({ isActive }) =>
              isActive ? "text-green-700 font-semibold flex items-center gap-2" : "text-gray-700 flex items-center gap-2"
            }
          >
            <List size={20} /> All Plants
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/addPlants"
            className={({ isActive }) =>
              isActive ? "text-green-700 font-semibold flex items-center gap-2" : "text-gray-700 flex items-center gap-2"
            }
          >
            <PlusCircle size={20} /> Add Plant
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/myPlants"
            className={({ isActive }) =>
              isActive ? "text-green-700 font-semibold flex items-center gap-2" : "text-gray-700 flex items-center gap-2"
            }
          >
            <User size={20} /> My Plants
          </NavLink>
        </li>
      </ul>
    </aside>

      {/* Content */}
      <main className="flex-1 p-6 bg-base-100">
        <Outlet></Outlet>
      </main>
    </div>
            </main>
            <footer className='mt-20'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default DashboardLayout;