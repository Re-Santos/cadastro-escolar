import styled from "styled-components";

export const HeaderStyle = styled.div`
    height:25vh;
    background:lightblue; 
    display:grid;
    grid-template-columns:1fr 1fr;
    justify-content:space-between;
    align-items:center;
 h1{
    color:#4169E1;
    font-size: 4em;
}
 img{
    width:20%;
    margin-left: 6%;
    animation-name: logo;
    animation-duration: 2s;
}
@keyframes logo{
    0% {opacity:0;transform:translate(0px,-20px)}
    100%{opacity:1;transform:translate(0px,0px)}
}
`