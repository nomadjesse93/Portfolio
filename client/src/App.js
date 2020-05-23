import React from 'react';
import Landing from '../src/views/LandingPage/Landing';
import Projects from '../src/views/Projects/Projects';
import Layout from '../src/views/Layout/Layout';
import Resume from '../src/views/Resume/Resume';
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {

    return(
        <BrowserRouter>
        <Layout>
        <Route exact path='/' component={Landing}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/resume' component={Resume}/>
        </Layout>
        </BrowserRouter>
    )
}

export default App;