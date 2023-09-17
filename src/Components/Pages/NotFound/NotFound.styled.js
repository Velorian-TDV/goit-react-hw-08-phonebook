import { styled } from 'styled-components';

export const NotFoundPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    h1{
        padding: 10px;
        border-radius: 5px;
        font-size: 50px;

        text-transform: uppercase;
        -webkit-text-fill-color: #f1f2f6;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: transparent;
        text-shadow: 
                        3px 3px 5px #6f8197,
                        -3px -3px 5px #fff;
    
    }
`