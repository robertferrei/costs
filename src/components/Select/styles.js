import styled from 'styled-components'



export const Container=styled.div`
        display: flex;
        flex-direction:column;
        margin-bottom:1em;
       

        label{
            margin-bottom:6em;
            font-weight:bold;
            font-size:20px;
        

        }

        select{
            padding: .7em;
            border-radius:0;
            border: none;
            font-size:20px;
           
        }
        
        select::placeholder{
            color:#7b7b7b;
        }

`