import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    margin: 10px 0;
    grid-template-columns: 1fr 1fr 1fr .5fr;
    gap: 4px;
    padding: 20px;
    width: 90%;
    border-radius: 26px;
    background: linear-gradient(145deg, #f0f0f0, #cacaca);
    box-shadow:  11px 11px 22px #676767,
                -11px -11px 22px #ffffff;

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        max-width: 220px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      :last-child{
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        svg{
          cursor: pointer;
          border: 2px solid #677;
          border-radius: 6px;
          background-color: #fff;
          :hover{
            background-color: #677;
            color: #000;
            path{
              color:#fff;
            }
          }   
        }
      }
    span{
      font-size: ${props => props.theme.fontizes.small};
      font-weight: bold;
      color: ${props => props.theme.colors.secundary};
    }
    @media (max-width: 375px) {
      border-bottom: #676767 solid 1px;
      border-radius: 10px;
      margin-bottom: 20px;
    }
  }
@media (max-width: 375px) {
  display: flex;
  flex-direction: column;
}
`;