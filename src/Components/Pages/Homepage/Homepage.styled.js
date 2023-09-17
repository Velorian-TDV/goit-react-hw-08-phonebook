import { styled } from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    width: 100%;
    height: 100%;

    .userBar {
        margin-left: auto;
        margin-top: 20px;
        margin-right: 30px;
        padding: 20px;
        border-radius: 10px;
        color: #162946;
        background-color: #f1f2f6;
        box-shadow: -14px -14px 20px 0 #fff, 
                    inset 1px 1px 1px 0 #fff, 
                    3px 3px 6px 0 rgba(185, 202, 216, 0.64), 
                    -4px 0 3px 0 hsla(0, 0%, 100%, 0.6), 
                    0 -12px 20px 0 hsla(0, 0%, 100%, 0.6), 
                    -2px -2px 14px 4px #fff, 
                    3px 3px 20px 13px rgba(176, 196, 219, 0.52), 
                    3px 3px 15px 0 #c4ceda;
    }

`