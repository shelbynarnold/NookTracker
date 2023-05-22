import React, { useState } from "react"
import Header from "./containers/Header";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ItemDetail from "./containers/ItemDetail";
import ItemListing from "./containers/ItemListing";

function Items() {
    return (
        <div className="Items">
            <Router>
                <Header />
                <Switch>
                <Route path="/" exact component={ItemListing} />
                <Route path="/item/:itemId" exact component={ItemDetail} />
                <Route>404 Not Found</Route>
                </Switch>
            </Router>
        
        </div>
    )
}

export default Items;