import { Link, NavLink, Outlet } from 'react-router';
import Overview from './Overview';
import { LayoutDashboard, List, PlusCircle, User } from 'lucide-react';

const Dashboard = () => {
  return (
    <div>
        <Overview></Overview>
    </div>
  );
};

export default Dashboard;
