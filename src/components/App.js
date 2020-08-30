import React from 'react';
import { ThemeProvider } from 'styled-components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './NavBar/NavBar'
import Home from './Home/Home'
import Popular from './Popular/Popular'
import Categories from './Categories/Categories'
import NotFound from './NotFound/NotFound';
import theme from './../styles/theme';
import {Wrapper, Header1, Nav, Ul, List} from './../styles/StyledComponents';
                   
const urlExample = 'http://online.smartsoft.ro:3333/';

const menu = `${urlExample}api/static/menu`;
const categories = `${urlExample}api/vod/category`;
const filmsByCategory = `${urlExample}/api/vod/category/{CATEGORY_ID}/assets`;
const filmDetail = `${urlExample}api/vod/asset/{ASSET_ID}`;
const videosOfFilmYoutube = `${urlExample}api/vod/asset/577922/videos`;
const popular = `${urlExample}api/vod/popular`;
const search = `${urlExample}api/vod/search?q={QUERY_STRING}`;
const discover = `${urlExample}api/vod/discover`;

export {popular};



class App extends React.Component{

    state = {
        menu: null
    }

    async componentDidMount(){

        const menuRequest = await fetch(menu);
        const menuData = await menuRequest.json()
        console.log(menuData)
    }

    


    render(){
        
        return(
            <ThemeProvider theme={theme}>

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

            </ThemeProvider>
        );
    }
}

export default App;