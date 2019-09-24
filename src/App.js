import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Helmet from 'react-helmet';
import Header from './components/Header';
import Oprec from './components/Oprec';
import SOP from './components/Sop';
import Error404 from './components/errors/Error404';
import Footer from "./components/Footer";

export default class App extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <body className="d-flex flex-column h-100" />
                    <style type="text/css">{`footer{width: auto;}`}</style>
                </Helmet>
                <div className="flex-shrink-0">
                    <Header />
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" component={SOP} exact />
                            <Route path="/tentang/sop" component={SOP} />
                            <Route path="/oprec/2019/1/pengumuman" component={Oprec} />
                            <Route component={Error404} />
                        </Switch>
                    </BrowserRouter>
                </div>
                <Footer />
            </div>
        );
    }
}
