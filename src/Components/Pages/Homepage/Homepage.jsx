import { useAuth } from '../../../hooks/useAuth'
import { Wrapper } from './Homepage.styled'

export default function Homepage() {

    const { user } = useAuth();

    return (
        <Wrapper>
            <div className='userBar'>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
        </Wrapper>
    )
}