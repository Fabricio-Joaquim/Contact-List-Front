import styled from 'styled-components';

export const MainWarpper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    width: 400px;

    @media (max-width: 375px) {
        width: 200px;
    }
`;

export const Message = styled.span`
    color: ${props => props.theme.colors.error};
    font-size: 12px;    
    margin-top: 5px;    
`; 