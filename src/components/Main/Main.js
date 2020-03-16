import { Switch, Route ,Link} from 'react-router-dom';
import ParalaxMy from "../elements/ParallaxMy";
import Counter from "../Counter";
import MenuCont from "../MenuButton/MenuCont";
import React from "react";
const Main = () => {
    return (
        <Switch>
            <Route exact path='/oksana' component={ParalaxMy}/>
            <Route exact path='/' component={ParalaxMy}/>
            <Route exact path='/about2' component={Counter}/>
            <Route exact path='/signup' component={MenuCont}/>
        </Switch>
    );
};

export default Main;