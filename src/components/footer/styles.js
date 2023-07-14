import styled from "styled-components"


export const Footeer=styled.footer`
    background:#222;
    color:#fff;
    padding:3em;
    text-align:center;
    

    ul{
        display:flex;
        justify-content:center;
       
    }

    li{
        font-size:8px;
        list-style:none;
        margin: 0 1em;
        margin-top:20px; ;
        cursor:pointer;
       font-size:30px;
        &:hover{
            color:#ffbb33;
        }
        
    }
      

`