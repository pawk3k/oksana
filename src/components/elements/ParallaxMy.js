import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import React from 'react'
import ReactDOM from 'react-dom'
import MenuCont from "../MenuButton/MenuCont";
import './nef.svg'
import TemplatesContainer from "./TemplatesContainer";
// import { Parallax, ParallaxLayer } from 'react-spring/addons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;
// const url = (name, wrap = false) => `${wrap ? 'url(' : ''}${name}.svg${wrap ? ')' : ''}`;


const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>
// const url = document.location.href;

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

class ParallaxMy extends React.Component {
    render() {
        return (
            // <Parallax ref={ref => (this.parallax = ref)} pages={4}>
            //
            //     <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
            //     <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
            // //
            //     <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
            //
            //     <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
            //         <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
            //         <TemplatesContainer />
            //
            //     </ParallaxLayer>
            //
            //     <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            //         <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
            //         <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
            //     </ParallaxLayer>
            //
            //     <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
            //         <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
            //         <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
            //     </ParallaxLayer>
            //
            //     <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
            //         <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
            //         <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
            //
            //     </ParallaxLayer>
            //
            //     <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
            //         <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
            //         <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
            //         <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
            //
            //     </ParallaxLayer>
            //
            //     <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
            //
            //         <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
            //         <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
            //     </ParallaxLayer>
            //
            //     <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>\
            //         <img src={url('nef',true)} style={{ width: '60%' }} />
            //     </ParallaxLayer>
            //
            //     <ParallaxLayer
            //         offset={2}
            //         speed={-0.3}
            //         style={{
            //             backgroundSize: '80%',
            //             backgroundPosition: 'center',
            //             backgroundImage: url("nef.svg")
            //         }}
            //     />
            //
            //     <ParallaxLayer
            //         offset={0}
            //         speed={0.1}
            //         onClick={() => this.parallax.scrollTo(1)}
            //         style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            //         <img src={url('server')} style={{ width: '20%' }} />
            //     </ParallaxLayer>
            //
            //     <ParallaxLayer
            //         offset={1}
            //         speed={0.1}
            //         onClick={() => this.parallax.scrollTo(2)}
            //         style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            //
            //
            //
            //
            //         <img src={url('bash')} style={{ width: '40%' }} />
            //
            //     </ParallaxLayer>
            //
            //     <ParallaxLayer
            //         offset={2}
            //         speed={-0}
            //         style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            //         onClick={() => this.parallax.scrollTo(0)}>
            //         <img src={url('clients-main')} style={{ width: '40%' }} />
            //
            //     </ParallaxLayer>
            //
            // </Parallax>






            <Parallax pages={7} scrolling={true} vertical ref={ref => (this.parallax = ref)}>
                <div>
                <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
                <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

                <ParallaxLayer
                    offset={0}
                    speed={0.1}
                    onClick={() => this.parallax.scrollTo(1)}
                    style={{backgroundImage: 'url(' + require('./nef.svg') + ')', backgroundSize: 'cover' ,display: 'flex', alignItems: 'center', justifyContent: 'top' }}>
                    <Router>
                        <Link to="/l/kek">Home</Link>
                    </Router>

                    {/*<img src={url('bash')} style={{ width: '40%' }} />*/}
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1}
                    speed={0.1}
                    onClick={() => this.parallax.scrollTo(0)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/*<img src={url('clients-main')} style={{ width: '40%' }} />*/}
                </ParallaxLayer>

                    <ParallaxLayer
                        offset={1}
                        speed={1.2}
                        style={{ display: 'block', alignItems: 'center', justifyContent: 'center' }}
                        onClick={() => this.parallax.scrollTo(0)}>
                        {/*<img src={url('server')} style={{ width: '20%' }} />*/}

                        {/*<img src={url('clients-main')} style={{ width: '40%' }} />*/}
                        <TemplatesContainer style={{width:'100%'}}/>
                    </ParallaxLayer>




                </div>
            </Parallax>

        )
    }
}
export  default ParallaxMy;
