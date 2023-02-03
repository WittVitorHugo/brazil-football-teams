import './Navbar.css'
import Search from './search/Search'
import useAuth from '../../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setSearch }) => {

    const { signout } = useAuth();
    const navigate = useNavigate();

    const handleSignout = () => {
        signout();
        navigate('/signin');
    }

    return (
        <div className="navbar" >
            <Search setSearch={setSearch} />
            <button
                className="btn-signout"
                onClick={handleSignout}
            >
                <i className='fa fa-sign-out fa-3x' title='Sign out'></i>
            </button>
        </div>
    )
}

export default Navbar