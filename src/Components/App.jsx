import { Wrapper } from './App.styled';
import MainBlock from './MainBlock/MainBlock';
import NavBar from './NavBar/NavBar';

export default function App() {
    return (
        <Wrapper>
            <NavBar />
            <MainBlock />
        </Wrapper>
    );
}