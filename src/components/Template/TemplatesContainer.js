import React,{Component} from "react";
import Template from "./Template";
import { connect } from 'react-redux';
import InstagramEmbed from 'react-instagram-embed';


class TemplatesContainer extends Component{
    componentDidMount () {
        const script = document.createElement("script");

        script.src = "https://cdn.jsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0rc1/src/instafeed.min.js";
        script.async = true;

        document.body.appendChild(script);


    }

    dress = () => {
        this.props.dispatch({ type: 'DRESS' });
    };

    render() {
        const full = this.props.display_arr.map((x,index)=>
        {
            return (
                <td key={index}>
                    {/* <Template image={x.img_url} text={x.caption} my_key={x.key} key={index} /> */}
                    
                    <Template image={require(`../../res/img${index%3}.jpg`)}/>
                </td>
            );
        });
        
        let new_arr = [];
        var i,j,temparray,chunk = 3;
        for (i=0,j=full.length; i<j-4; i+=chunk) {
            temparray = full.slice(i,i+chunk);
            new_arr.push(
                <tr key={i}>
                    {
                        temparray.map( x =>{
                            return x;
                        } )
                    }
                </tr>
            )
        }

        return (
            <div>
                {new_arr};
            </div>
        )
        // return(
        // <div>New <InstagramEmbed
        //     url='https://instagr.am/p/Zw9o4/'
        //     maxWidth={520}
        //     hideCaption={false}
        //     containerTagName='div'
        //     protocol=''
        //     injectScript
        //     onLoading={() => {}}
        //     onSuccess={() => {}}
        //     onAfterRender={() => {}}
        //     onFailure={() => {}}/></div>)
    }
}
function mapStateToProps(state) {
    return( {
        count: state.count,
        display_arr:state.display_arr
    });
}



export default  connect(mapStateToProps)(TemplatesContainer);