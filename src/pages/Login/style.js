import styled from 'styled-components';

export const FormWarpper = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    label{
        text-align: left;
        margin-top: 10px;
        margin-bottom: 6px;
    }
    input{
        width: 200px;
    }
    button{
        width: 100px;
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
