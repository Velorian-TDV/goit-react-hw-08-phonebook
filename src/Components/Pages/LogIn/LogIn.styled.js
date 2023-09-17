import { styled } from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    width: 100%;
    height: 100%;

  .container {
    display: flex;

    .login-link{
        margin: 30px;
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
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    
    width: 300px;
    height: 350px;
    padding: 20px;

    border-radius: 10px;
    box-shadow: 1px 1px 3px 0 #c4ceda, 
                -4px 0 3px 0 hsla(0, 0%, 100%, 0.6), 
                0 -4px 3px 0 hsla(0, 0%, 100%, 0.6), 
                -2px -2px 14px 4px #fff, 
                3px 3px 8px 0 #b0c4db, 
                3px 3px 15px 0 #c4ceda;

    h2{
        display: inline-block;
        margin-bottom: 30px;
        text-align: center;
    } 

    .input-area{
        margin: 10px 0px;
        
        input{
            height: 35px;
            width: 100%;
            padding: 10px;

            outline: none;
            border: none;
            border-radius: 10px;
            background-color: #f1f2f6;
            box-shadow: inset -3px -2px 7px 0 #fff, 
                        inset 3px 3px 7px -2px #c4ceda;
            color: #446079;
        }
    }   

    .button-area{
        display: flex;
        justify-content: center;

        width: 100%;
        margin-top: auto;

        button{
            width: 150px;
            height: 35px;
            margin: 30px 0px;

            border: none;
            border-radius: 10px;
            transition: .3s box-shadow linear,
                        .2s color linear,
                        .3s opacity linear;
            background-color: #f1f2f6;
            box-shadow: -14px -14px 20px 0 #fff, 
                        inset 1px 1px 1px 0 #fff, 
                        3px 3px 6px 0 rgba(185, 202, 216, 0.64), 
                        -4px 0 3px 0 hsla(0, 0%, 100%, 0.6), 
                        0 -12px 20px 0 hsla(0, 0%, 100%, 0.6), 
                        -2px -2px 14px 4px #fff, 
                        3px 3px 20px 10px rgba(176, 196, 219, 0.52), 
                        3px 3px 15px 0 #c4ceda;

            &:hover{
                color: #f50;
            }

            &:active{
                color: #f50;
                box-shadow: inset 14px 14px 12px 0 rgba(196, 206, 218, 0.14), 
                            inset -3px -3px 5px 0 #fff, 
                            inset 2px 2px 5px 0 rgba(196, 206, 218, 0.78), 
                            inset 1px 1px 16px -13px #6f8197;
            }
        }
    }
`