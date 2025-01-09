import './Navigation.modules.css';
import ActiveNavLink from "./ActiveNavLink.tsx";

interface NavigationProps {
    testProp: string;
}

const Navigation: React.FC<NavigationProps> = () => {
    return (
        <nav className="nav-bar">
            <ul>
                <li><ActiveNavLink to="/">Challenge System</ActiveNavLink></li>
                <li><ActiveNavLink to="/dashboard">Dashboard</ActiveNavLink></li>
                <li><ActiveNavLink to="/leaderboard">Leaderboard</ActiveNavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;