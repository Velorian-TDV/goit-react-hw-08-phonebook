import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Navigator } from './NavBar.styled';
import { useAuth } from '../../hooks/useAuth';
import { logOut } from '../../redux/auth/operations';

export default function NavBar() {
    const dispatch = useDispatch();
    const user = useAuth();

    const handleOut = () => {
        dispatch(logOut())
    }

    return (
        <Navigator>
            <h2>Phone<span>Book</span></h2>
            {
                user.isLoggedIn ?
                    <>
                        <div className='linkGroup' data-visibility={true}>
                            <NavLink className='navigator_link' to='/'>Homepage</NavLink>
                            <NavLink className='navigator_link' to='/contacts'>Contacts</NavLink>
                        </div>
                        <div className='login' data-visibility={false}>
                            <button className='login_link' onClick={handleOut}>Log Out</button>
                        </div>
                    </>
                    :
                    <>
                        <div className='login' data-visibility={false}>
                            <NavLink className='login_link' to='/authorization'>Log In</NavLink>
                            <NavLink className='login_link' to='/registration'>Registration</NavLink>
                        </div>
                    </>
            }
        </Navigator>
    )
}