import styled from 'styled-components';


const Wrapper = styled.div`
    width: 300px;
    margin: 0 auto;
    text-align: center;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : 'red'}
`;

export default Wrapper;