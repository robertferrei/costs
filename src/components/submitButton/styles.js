import styled from 'styled-components'



export const Container=styled.div`
        display: flex;
        flex-direction:column;
        margin-bottom:1em;
       

      button{
        background:#000;
        color:#fff;
        padding: 0.7em 1.2em;
        text-decoration:none;
        transition:0.5s;
        cursor:pointer;
        border:none;
        font-size:20px;

        &:hover{
            color:#f77f00 ;
        }
      }

`