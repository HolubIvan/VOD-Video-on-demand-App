import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';
import Wrapper from './Wrapper';




class App extends React.Component{


    render(){
        const color = 'blue';
        return(
            <Wrapper backgroundColor={color}>
                <h1>Hello World</h1>
                <h2>Hello Code</h2>
            </Wrapper>
        );
    }
}

export default App;