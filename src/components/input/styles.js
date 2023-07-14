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

        input{
            padding: .7em;
            border-radius:0;
            border: none;
            font-size:20px;
        }
        
        input::placeholder{
            color:#7b7b7b;
        }

`