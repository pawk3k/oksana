import { Switch, Route ,Link} from 'react-router-dom';
import ParalaxMy from "../elements/ParallaxMy";
import Counter from "../Counter";
import MenuCont from "../MenuButton/MenuCont";
import React from "react";
import Menu from "../MenuButton/Menu";
import News from "../Template/News";
import Head from "../Head/Head";
import CartList from "../Cart/CartList";
const Main = () => {
    return (
        <Switch>
            <Route exact path='/News' component={Head}/>
            <Route exact path='/cart' component={CartList}/>
            <Route exact path='/oksana' component={ParalaxMy}/>
            <Route exact path='/' component={ParalaxMy}/>
            <Route exact path='/about2' component={Counter}/>
            <Route exact path='/signup' component={MenuCont}/>
            <Route exact path='/menu' component={Menu}/>

        </Switch>
    );
};

export default Main;