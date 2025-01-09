import { NavLink, NavLinkProps } from 'react-router-dom';

const ActiveNavLink: React.FC<NavLinkProps> = (props) => {
    return (
        <NavLink
            {...props}
            className={({ isActive }) => (isActive ? 'active' : '')}
        />
    );
};

export default ActiveNavLink;
