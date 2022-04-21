import styled from "styled-components";

export const MainWarpper = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
width: 100%;
h2{
        font-size: ${props => props.theme.fontizes.medium};
        align-self: center;
        font-weight: 900;
        color: ${props => props.theme.colors.secundary};
    }
    
    svg{
        cursor: pointer;
        :hover{
            color: #fff;
        }
    }
    @media (max-width: 375px) {
        justify-content: center;
        font-size: .8rem;
    }
`;