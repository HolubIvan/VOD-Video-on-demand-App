import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Wrapper from './Wrapper/Wrapper';
import './App.scss';
import NavBar from './NavBar/NavBar'
import Home from './Home/Home'
import Popular from './Popular/Popular'
import Categories from './Categories/Categories'
import NotFound from './NotFound/NotFound';


class App extends React.Component{


    render(){
        
        return(
            <Wrapper>

                <Router>
                    
                    <NavBar />

                    <Switch>
                        <Route exact path='/' component={Home} /> 
                        <Route path='/categories' component={Categories} /> 
                        <Route path='/popular' component={Popular} /> 
                        <Route path='*' component={NotFound} /> 
                    </Switch>
                </Router>

            </Wrapper>
        );
    }
}

export default App;