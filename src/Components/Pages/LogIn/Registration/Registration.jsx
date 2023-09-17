import { useDispatch } from 'react-redux';
import { register } from '../../../../redux/auth/operations';
import { Form } from "../LogIn.styled";
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth';
import { Wrapper } from '../LogIn.styled';

export default function Registration() {
    const dispatch = useDispatch();
    const user = useAuth();

    const handleSubmit = event => {
        event.preventDefault();
        const { name, email, password } = event.target;

        dispatch(
            register({
                name: name.value,
                email: email.value,
                password: password.value
            })
        )
    }

    return (
        <Wrapper>
            {
                user.isLoggedIn ? <Navigate to='/' /> :
                    <Form onSubmit={handleSubmit}>
                        <h2>Registration</h2>
                        <div className="input-area">
                            <input type="text" name="name" id="nickname" placeholder="Name" autoComplete='off' />
                        </div>

                        <div className="input-area">
                            <input type="email" name="email" id="email" placeholder="Email" autoComplete='off' />
                        </div>

                        <div className="input-area">
                            <input type="password" name="password" id="password" placeholder="Password" autoComplete='off' />
                        </div>

                        <div className="button-area">
                            <button type="submit">Sign In</button>
                        </div>
                    </Form>
            }
        </Wrapper>



    )
}