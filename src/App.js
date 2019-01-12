import React, { Component, Fragment } from 'react';
import { GlobalStyle } from './style.js';
import Header from './common/header/index'

class App extends Component {
    render() {
        return (
            
            <Fragment>
                <GlobalStyle />
                <Header />
                <div className="App">
                    hello
                </div>
            </Fragment>
            
        );
    }
}

export default App;
