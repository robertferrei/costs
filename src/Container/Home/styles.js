import styled from "styled-components"


export const Container = styled.div`

       width:1200px;
       display:flex;
       justify-content:space-between;
       margin:0 auto;
       min-height:75%;  


section{
       width: 100%;
       display: flex;
       flex-direction:column;
       align-items:center;
       padding: 4em;
       
       h1{
              font-size:2.5em;
              margin-bottom:.5em;
       }

       span{
              color: #ffbb33;
              padding:0 .2em;
              background: #222;
       }
       p{
              margin-bottom: 1.5em;
              color: #7b7b7b;
              font-size:20px;
       }
       img{
              width: 350px;
              margin: 2em 0 ;
       }
}
`