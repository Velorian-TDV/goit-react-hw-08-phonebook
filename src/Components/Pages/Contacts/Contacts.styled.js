import { styled } from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    position: relative;

    width: 100%;
    height: 100%;

    .empty{
        text-align: center;
    }

    .form{
        display: flex;
        flex-direction: column;
        align-items: center;

        color: #162946;
        width: 250px;
        height: 220px;
        margin: 30px;
        padding: 15px;
        border-radius: 10px;
        background-color: #f1f2f6;
        box-shadow: -14px -14px 20px 0 #fff, 
                    inset 1px 1px 1px 0 #fff, 
                    3px 3px 6px 0 rgba(185, 202, 216, 0.64), 
                    -4px 0 3px 0 hsla(0, 0%, 100%, 0.6), 
                    0 -12px 20px 0 hsla(0, 0%, 100%, 0.6), 
                    -2px -2px 14px 4px #fff, 
                    3px 3px 20px 13px rgba(176, 196, 219, 0.52), 
                    3px 3px 15px 0 #c4ceda;
        input{
            height: 35px;
            width: 100%;
            padding: 10px;
            margin-top: 10px;

            outline: none;
            border: none;
            border-radius: 10px;
            background-color: #f1f2f6;
            box-shadow: inset -3px -2px 7px 0 #fff, 
                        inset 3px 3px 7px -2px #c4ceda;
            color: #446079;
        }

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

    .search{
        display: flex;
        flex-direction: column;
        align-items: center;

        height: 85px;

        color: #162946;
        margin: 30px;
        padding: 15px;
        border-radius: 10px;
        background-color: #f1f2f6;
        box-shadow: -14px -14px 20px 0 #fff, 
                    inset 1px 1px 1px 0 #fff, 
                    3px 3px 6px 0 rgba(185, 202, 216, 0.64), 
                    -4px 0 3px 0 hsla(0, 0%, 100%, 0.6), 
                    0 -12px 20px 0 hsla(0, 0%, 100%, 0.6), 
                    -2px -2px 14px 4px #fff, 
                    3px 3px 20px 13px rgba(176, 196, 219, 0.52), 
                    3px 3px 15px 0 #c4ceda;
        input{
            height: 35px;
            width: 100%;
            padding: 10px;
            margin-top: 10px;

            outline: none;
            border: none;
            border-radius: 10px;
            background-color: #f1f2f6;
            box-shadow: inset -3px -2px 7px 0 #fff, 
                        inset 3px 3px 7px -2px #c4ceda;
            color: #446079;
        }
    }

    .contacts{
        width: 350px;

        overflow-y: scroll;
        &::-webkit-scrollbar {
            width: 5px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: lightgray;
            border-radius: 15px;
        }
        
        color: #162946;
        margin: 30px;
        padding: 15px;
        border-radius: 10px;
        background-color: #f1f2f6;
        box-shadow: -14px -14px 20px 0 #fff, 
                    inset 1px 1px 1px 0 #fff, 
                    3px 3px 6px 0 rgba(185, 202, 216, 0.64), 
                    -4px 0 3px 0 hsla(0, 0%, 100%, 0.6), 
                    0 -12px 20px 0 hsla(0, 0%, 100%, 0.6), 
                    -2px -2px 14px 4px #fff, 
                    3px 3px 20px 13px rgba(176, 196, 219, 0.52), 
                    3px 3px 15px 0 #c4ceda;
        ul{
            padding: 10px;

            li{
                display: flex;
                align-items: center;

                width: 100%;
                height: 40px;
                padding: 0px 10px;
                margin: 15px 0px;

                border-radius: 10px;
                box-shadow: 
                            -10px -10px 20px 0 #fff, 
                            inset 1px 1px 1px 0 #fff, 
                            3px 3px 6px 0 rgba(185, 202, 216, 0.64), 
                            -4px 0 3px 0 hsla(0, 0%, 100%, 0.6), 
                            0 -10px 20px 0 hsla(0, 0%, 100%, 0.6), 
                            3px 3px 15px 0 #c4ceda
                            ;
                button{
                    margin-left: auto;
                    padding: 5px 10px;
                    border: none;
                    border-radius: 5px;
                    transition: .3s box-shadow linear,
                                .2s color linear,
                                .3s opacity linear;
                    background-color: #f1f2f6;
                    box-shadow: 
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
        }
    }

`