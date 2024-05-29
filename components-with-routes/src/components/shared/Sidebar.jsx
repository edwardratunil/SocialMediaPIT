import classNames from 'classnames'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/navigation'
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/consts/navigation'
import { HiOutlineLogout } from 'react-icons/hi'
import axios from 'axios';

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-cyan-300 hover:no-underline active:bg-cyan-500 rounded-sm text-base'


export default function Sidebar() {
    
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [editing, setEditing] = useState(false);
    const [currentUserId, setCurrentUserId] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
        const response = await axios.get('http://localhost/my-backend/api.php');
        setUsers(response.data);
        } catch (error) {
        console.error('Error fetching users', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editing) {
        await handleUpdateUser();
        } else {
        await handleCreateUser();
        }
        fetchUsers();
    };

    const handleCreateUser = async () => {
        try {
        const response = await axios.post('http://localhost/my-backend/api.php', {
            username,
            password
        });
        setMessage(response.data.message);
        } catch (error) {
        setMessage('There was an error saving the user.');
        console.error('There was an error making the request!', error);
        }
    };

    const handleUpdateUser = async () => {
        try {
        const response = await axios.put('http://localhost/my-backend/api.php', {
            id: currentUserId,
            username,
            password
        });
        setMessage(response.data.message);
        setEditing(false);
        setCurrentUserId(null);
        } catch (error) {
        setMessage('There was an error updating the user.');
        console.error('There was an error making the request!', error);
        }
    };

    const handleDeleteUser = async (id) => {
        try {
        const response = await axios.delete('http://localhost/my-backend/api.php', {
            data: { id }
        });
        setMessage(response.data.message);
        fetchUsers();
        } catch (error) {
        setMessage('There was an error deleting the user.');
        console.error('There was an error making the request!', error);
        }
    };

    const handleEditUser = (user) => {
        setEditing(true);
        setCurrentUserId(user.id);
        setUsername(user.username);
        setPassword(user.password);
    };



  return (
    

        <div className='bg-slate-100 w-60 p-3 flex flex-col text-white'>
            <div className='flex flex-col items-center gap-2 px-1 py-3'>
                <div 
                    className="h-24 w-24 rounded-full bg-cyan-500 bg-cover bg-no-repeat bg-center"
                    style={{backgroundImage: 'url(https://source.unsplash.com/80x80?face)'}}>
                    <span className='sr-only'>Evan Huggins</span>
                </div>
            </div>
            <div className='flex flex-col items-center gap-2 px-1 py-3'>
                
                <span className='text-black text-lg'>Evan Huggins</span>
            </div>
            <div className='flex-1 py-8 flex flex-col gap-0.5'>
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item}/>
                ))}
            </div>
            <div className='flex flex-col gap-0.5 pt-2 border-t border-black-700'>
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item}/>
                ))}
            </div>
        </div>
    
  )
}

function SidebarLink({item}){
    const {pathname} = useLocation()

    return(
        
        <Link to={item.path} className={classNames(pathname === item.path ? 'bg-cyan-500 text-white' : 'text-black' ,linkClasses)}>
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    )
}
