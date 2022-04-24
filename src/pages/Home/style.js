import styled from 'styled-components';

export const Container = styled.div`
align-self: flex-start;
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
h2{
    font-size: ${props => props.theme.fontizes.medium};
    font-weight: bold;
    margin: 0 auto;
    }
`;

export const SubContainer = styled.div`
    display: grid;
    grid-template-columns: .5fr 2fr;
    margin-top: 20px;
    @media (max-width: 375px) {
      display: flex;
      flex-direction: column;
    }
`;

export const SideHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div{
      display: flex;
      flex-direction: column;
      align-items: center;
      :hover{
        cursor: pointer;
        color: ${props => props.theme.colors.backgoround};
        background-color: ${props => props.theme.colors.secundary};
        padding: 5px;
        border-radius: 5px;
      }
      @media (max-width: 375px) {
        margin-bottom: 10px;
        :hover{
        padding: 0px;
        }
      }
    }
`;

export const List = styled.div`
width: 100%;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
overflow-y: scroll;
height: 400px;

::-webkit-scrollbar {
  width: 12px;               
}

::-webkit-scrollbar-track {
  background: #107555;       
}

::-webkit-scrollbar-thumb {
  background-color: #18C490;
  border-radius: 20px;       
  border: 3px solid #fff;
}
@media (max-width: 375px) {
  height: 350px;
    }

`;

export const Empty = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: ${props => props.theme.fontizes.small};
    `;