import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MainBlockWrapper } from './MainBlock.styled';
import SharedLayout from '../SharedLayout/SharedLayout';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { RestrictedRote } from '../RestrictedRote/RestrictedRote';
import { useAuth } from '../../hooks/useAuth';
import { refreshUser } from '../../redux/auth/operations'

const Homepage = lazy(() => import('../Pages/Homepage/Homepage'))
const Contacts = lazy(() => import('../Pages/Contacts/Contacts'))
const Authorization = lazy(() => import('../Pages/LogIn/Authorization/Authorization'))
const Registration = lazy(() => import('../Pages/LogIn/Registration/Registration'))
const NotFound = lazy(() => import('../Pages/NotFound/NotFound'))


export default function MainBlock() {
    const dispatch = useDispatch();
    const { isRefreshing } = useAuth();

    useEffect(() => {
        dispatch(refreshUser())
    }, [dispatch])

    return (
        isRefreshing ? <p>Refreshing user ... </p> :
            <MainBlockWrapper>
                <Routes>
                    <Route path='/' element={<SharedLayout />}>
                        <Route index element={<PrivateRoute component={<Homepage />} redirectTo='/authorization' />} />
                        <Route path='contacts' element={<PrivateRoute component={<Contacts />} redirectTo='/authorization' />} />
                        <Route path='authorization' element={<RestrictedRote component={<Authorization />} redirectTo='/' />} />
                        <Route path='registration' element={<RestrictedRote component={<Registration />} redirectTo='/' />} />
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>
            </MainBlockWrapper>
    )
}