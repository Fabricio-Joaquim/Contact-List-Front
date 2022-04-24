import styled from 'styled-components';

export const MainWarpper = styled.div`
    /* display: flex;
    flex-direction: column; */
    //align-items: flex-start;
    //flex:1 1 auto;
    //justify-content: flex-start;
    //height: 100%;
    `;

export const FormWarpper = styled.form`
  padding: 30px;
  min-width: 95%;
  display: flex;
  flex-direction: column;
  
  button{
    max-width: 150px;
    margin-top: 10px;
    align-self: center;
  }

  @media (max-width: 375px) {
    padding: 0;
  }
  `;

export const InputWarpper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    `;