import  React,{Component} from "react"
import { connect } from 'react-redux';

class Counter extends Component {

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    };

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    };

    render() {
        return (
            <div>
                <p>{this.props.count}</p>
                <button type="button" className="btn btn-primary" onClick={this.increment}>+</button>
                <button type="button" className="btn btn-danger" onClick={this.decrement}>-</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return( {
        count: state.count,
        display_arr:state.display_arr
    });
}


export default connect(mapStateToProps)(Counter);
