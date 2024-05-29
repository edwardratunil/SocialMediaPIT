import {
	HiMenu,
	HiUser,
    HiUserGroup,
    HiOutlineCog,
    HiOutlineQuestionMarkCircle,
	HiBell,
	HiLogout
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiMenu />
	},
	{
		key: 'profile',
		label: 'Profile',
		path: '/profile',
		icon: <HiUser />
	},
	{
		key: 'friends',
		label: 'Friends',
		path: '/friendsection',
		icon: <HiUserGroup />
	},
	
	{
		key: 'notification',
		label: 'Notification',
		path: '/notification',
		icon: <HiBell />
	},

	{
		key: 'temporary',
		label: 'Temporary',
		path: '/temporary',
		icon: <HiUserGroup />
	},
	
	/*{
		key: 'transactions',
		label: 'Transactions',
		path: '/transactions',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'student',
		label: 'Student',
		path: '/student',
		icon: <HiUserGroup />
	},
	{
		key: 'messages',
		label: 'Messages',
		path: '/messages',
		icon: <HiOutlineAnnotation />
	}*/
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '',
		icon: <HiOutlineQuestionMarkCircle />
	},
	{
		key: 'Logout',
		label: 'Logout',
		path: '/Login',
		icon: <HiLogout />
	}
]