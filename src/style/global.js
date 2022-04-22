import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body{
        background-color: ${props => props.theme.colors};
        font-size: 16px;
        color: ${props => props.theme.colors.secundary};
        font-family: ${props => props.theme.fontStyle.Roboto};
        background: rgb(189,189,189);
        background: radial-gradient(circle, rgba(189,189,189,1) 0%, rgba(29,253,187,1) 50%, rgba(5,3,0,1) 100%);
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;


        button {
            background: #949494;
            background-image: -webkit-linear-gradient(top, #949494, #000000);
            background-image: -moz-linear-gradient(top, #949494, #000000);
            background-image: -ms-linear-gradient(top, #949494, #000000);
            background-image: -o-linear-gradient(top, #949494, #000000);
            background-image: linear-gradient(to bottom, #949494, #000000);
            -webkit-border-radius: 28;
            -moz-border-radius: 28;
            border-radius: 28px;
            text-shadow: 1px 1px 5px #000000;
            -webkit-box-shadow: 0px 6px 10px #666666;
            -moz-box-shadow: 0px 6px 10px #666666;
            box-shadow: 0px 6px 10px #666666;
            font-family: Arial;
            color: #ffffff;
            font-size: 20px;
            padding: 10px 20px 10px 20px;
            text-decoration: none;
            border: none; 

            :hover {
                background: #1dfdba;
                background-image: -webkit-linear-gradient(top, #1dfdba, #050300);
                background-image: -moz-linear-gradient(top, #1dfdba, #050300);
                background-image: -ms-linear-gradient(top, #1dfdba, #050300);
                background-image: -o-linear-gradient(top, #1dfdba, #050300);
                background-image: linear-gradient(to bottom, #1dfdba, #050300);
                text-decoration: none;
            }
        }

        input{
            background-repeat: repeat;
            background-color: #FFF;
            color: #000;
            border: 1px #1dfdba solid;
            height: 30px;
            width: 100%;
            border-radius: 5px;
            box-shadow: 0 0 8px -3px gray;
        }
    }
`;