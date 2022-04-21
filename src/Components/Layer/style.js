import styled from "styled-components";

export const Global = styled.div`
min-height: 500px;
width: 1000px;
border-radius: 20px;
padding: 20px;
display: flex;

@media (max-width: 414px){
        width: 300px;
    }
@media (min-width: 415px) and (max-width: 768px){
        width: 700px;
    }


background: rgba( 255, 255, 255, 0.75 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

`;