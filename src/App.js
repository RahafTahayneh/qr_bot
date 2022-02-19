import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Layout } from "./layout";
import { Home, QRGenerator, QRScanner } from "./pages";
import './styles/App.css';

const App = () => {
  return (
    <div>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" >
                        <Home />
                    </Route>
                    <Route exact path="/qr-scanner" component={QRScanner}/>
                    <Route exact path="/qr-generator" component={QRGenerator}/>
                </Switch>
            </Layout>
        </Router>
    </div>
  );
}

export default App;
