import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 1440px;
    height: 100vh;
    margin: 0 auto;
    background-color: ${({theme}) => theme.colorBlueLight || '#000'};
`;

const Header1 = styled.h1`
    color: ${({theme})=> theme.colorWhite || '#000'};
    font-size: 5rem;
    font-weight: 300;
    text-align: center;
    margin-top: 5rem;
    transition: all .3s;

    &:hover{
        color: ${({theme}) => theme.colorOrange || '#fff'};
    }
    &:active{
        transform: scale(1.1)
    }
`;

const  Nav = styled.nav`
    width: 100%;
    height: 60px;
    background-color: ${({theme})=> theme.colorGreyLight || 'coral'};
    box-shadow: 0 4px 10px ${({theme})=> theme.colorGreyLight || 'coral'};
`;

const Ul = styled.ul`
    display: flex;
    justify-content: flex-end;
    align-content: center;
`;

const List = styled.li`
    list-style: none;
    margin: 0 3rem;
    margin-top: 1.8rem;
`;


export {Wrapper, Header1, Nav, Ul, List};