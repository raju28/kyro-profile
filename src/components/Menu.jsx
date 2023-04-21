import React from 'react';
import '../Menu.css'
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import FolderIcon from '@mui/icons-material/Folder';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

function Menu() {
  const menuItems = [
    { id: 1, title: 'Home', link: '/', icon: <HomeIcon/> },
    { id: 2, title: 'Projects', link: '/projects', icon: <ListAltIcon/> },
    { id: 3, title: 'Dashboard', link: '/dashboard', icon: <SpaceDashboardIcon/> },
    { id: 4, title: 'Messages', link: '/messages', icon: <ForumRoundedIcon/> },
    { id: 5, title: 'Documents', link: '/documents', icon: <FolderIcon/> },
    { id: 6, title: 'Organizations', link: '/organizations', icon: <ApartmentIcon/>},
    { id: 7, title: 'settings', link: '/settings', icon: <SettingsIcon/> }
  ];

  return (
		<>
    <ul className="menu-list">
      {menuItems.map((item) => (
        <li key={item.id}>
          <a href={item.link}>
						<span className='menu-icon'>
							{item.icon}
						</span>
            <span className='menu-name'>
							{item.title}
						</span>
        	</a>
        </li>
      ))}
    </ul>
		<div className='app-logout'>
				<span className='menu-icon'>
					<LogoutIcon/>
				</span>
				<span className='menu-name'>
					Logout
				</span>
		</div>
		</>
  );
}

export default Menu;
