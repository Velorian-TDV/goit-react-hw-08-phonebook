import { styled } from 'styled-components';

export const Navigator = styled.nav`
    display: flex;
    flex-direction: column;

    width: 220px;
    height: 100%;

    background-color: #f1f2f6;
    box-shadow: 0px 0px 50px 0 rgba(196, 206, 218, 0.43), 
                4px 4px 10px 0 rgba(196, 206, 218, 0.57);

    h2{
        display: block;

        padding: 30px 0px;

        text-align: center;
        color: #162946;
        user-select: none;
        
        span{
            color: #f50;
        }
    }

    .linkGroup{
        display: flex;
        flex-direction: column;
        
        width: 100%;
        min-height: 200px;
        padding: 20px 0px;

        &[data-visibility = true]{
            display: flex;
            visibility: visible;
        }

        &[data-visibility = false]{
            display: none;
            visibility: hidden;
        }

        .navigator_link{
            margin: 15px;
            padding: 10px 20px;
            
            border-radius: 6px;
                        
            opacity: 0.7;
            color: #162946;
            font-weight: 600;
            text-decoration: none;
            text-align: center;
            
            transition: .3s box-shadow linear,
                        .2s color linear,
                        .3s opacity linear;

            &:hover{
                opacity: 1;
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

            &.active{
                color: #f50;
                opacity: 1;
                box-shadow: inset 14px 14px 12px 0 rgba(196, 206, 218, 0.14), 
                            inset -3px -3px 5px 0 #fff, 
                            inset 2px 2px 5px 0 rgba(196, 206, 218, 0.78), 
                            inset 1px 1px 16px -13px #6f8197;
            }
        }
    }

    .login{
        display: flex;
        flex-direction: column;
        
        width: 100%;
        padding: 10px 0px;
        margin-top: auto;

        .login_link{
            margin: 15px;
            padding: 10px 20px;
            
            border-radius: 6px;
            border: none;
                        
            opacity: 0.7;
            color: #162946;
            font-weight: 600;
            text-decoration: none;
            text-align: center;
            
            transition: .3s box-shadow linear,
                        .2s color linear,
                        .3s opacity linear;

            &:hover{
                opacity: 1;
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

            &.active{
                color: #f50;
                opacity: 1;
                box-shadow: inset 14px 14px 12px 0 rgba(196, 206, 218, 0.14), 
                            inset -3px -3px 5px 0 #fff, 
                            inset 2px 2px 5px 0 rgba(196, 206, 218, 0.78), 
                            inset 1px 1px 16px -13px #6f8197;
            }
        }
    }
`