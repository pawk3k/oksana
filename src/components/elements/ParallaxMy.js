import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import React from 'react'
import './nef.svg'
import './sumka.svg'
import {FaBars} from 'react-icons/fa';
import {FaArrowRight} from 'react-icons/fa';

import { Switch, Route ,Link} from 'react-router-dom';
import MenuButton from "../MenuButton/MenuButton";
import "./styles.css"
import svg from "../MenuButton/MenuCont"
import News from "../Template/News";
import MBtton from "./MButton";
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;
// const url = (name, wrap = false) => `${wrap ? 'url(' : ''}${name}.svg${wrap ? ')' : ''}`;
class ParallaxMy extends React.Component {
    state ={
        visible_a:false
    };
    toggle_v = () =>{
        this.setState({
            visible_a: !this.visible_a
        })
    };

    render() {
        return (
            <Parallax pages={2} scrolling={true} vertical ref={ref => (this.parallax = ref)}>
                <div>
                <ParallaxLayer offset={1} speed={0} style={{ backgroundColor: '#ffffff' }} />
                <ParallaxLayer offset={2} speed={0} style={{ backgroundColor: '#adc59d' }} />
                <ParallaxLayer
                    offset={0}
                    speed={0}
                    onClick={() => this.parallax.scrollTo(1)}
                    style={{backgroundImage: 'url(' + require('./nef.svg') + ')', backgroundSize: 'cover' ,display: 'flex', alignItems: 'center', justifyContent: 'top' }}>
                        <div style={{ display: 'block', width: '20%', marginLeft: '50%' ,marginTop:"10%"}}>
                            <Link to="/signup">
                                <MBtton/>
                            </Link>
                        </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1}
                    speed={0}
                    onClick={() => this.parallax.scrollTo(0)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                </ParallaxLayer>
                    <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                        <img src={require("./sumka.svg")} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                        <img src={require("./sumka.svg")} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                        <img src={require("./sumka.svg")} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />

                    </ParallaxLayer>
                    <ParallaxLayer offset={1.3} speed={0.4} style={{ opacity: 0.6 }}>

                        <img src={require("./sumka.svg")} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                        <img src={require("./sumka.svg")} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={1}
                        speed={0}
                        style={{ display: 'block', alignItems: 'center', justifyContent: 'center' }}
                        onClick={() => this.parallax.scrollTo(0)}>
                        <div className="container-fluid" style={{display:'block',marginTop:"15%",marginLeft:"15%"}}>
                            <News   />
                        </div>
                    </ParallaxLayer>
                </div>
            </Parallax>

        )
    }
}
export  default ParallaxMy;
