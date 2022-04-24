import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const Warrpper = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1{
        font-size: ${props => props.theme.fontizes.large};
        text-align: center;
        color: ${props => props.theme.colors.error};
    }
    `;

export const MyLink = styled(Link)`
        font-size: ${props => props.theme.fontizes.medium};
        text-align: center;
        text-decoration: none;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: ${props => props.theme.colors.error};
        `;