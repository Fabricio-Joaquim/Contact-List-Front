import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormWarpper = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

    h2 {
        margin-bottom: 20px;
        font-size: ${props => props.theme.fontizes.large};
        color: ${props => props.theme.colors.background};
    }

    label{
        text-align: left;
        margin-top: 10px;
        margin-bottom: 6px;
    }
    input{
        width: 220px;
    }
    button{
        min-width: 100px;
        margin-top: 10px;
        align-self: center;
    }
    span{
        color:${props => props.theme.colors.error};
        text-align: left;
    }
    p{
        margin-top: 20px;
        cursor: pointer;
    }
`;
export const MainWarpper = styled.div`
    margin: 0 auto;
    align-self: center;
`;

export const Password = styled.div`
    display: flex;
    flex-direction: row;
    svg{
        align-self: center;  
        margin-left: 6px;
  }
`;

export const LinkWarpper = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.colors.secundary};
    font-size: ${props => props.theme.fontizes.small};
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
`;