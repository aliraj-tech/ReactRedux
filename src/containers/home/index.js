import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import { set_data , facebook_login } from "../../store/action";

class Home extends React.Component {
static getDrivedStateFromProps(props,state){
    console.log (
"props===>",props
    )
}
    render() {
let user = {name :"ali22" }
        console.log("props", this.props)
        return (
            <div >
                <h1> Home </h1>
<button onClick={()=> this.props.facebook_login()}>facebook_login</button>
                {/* <button onClick={() => this.props.set_data(user)} > SETDATA </button> */}
            </div>
        );
    }
}


const mapStateToProps = (state) => (
    {
        users: state.users

    }
)
const mapDispatchToProp = (dispatch) => ({
        set_data: (data) => dispatch(set_data(data)),
        facebook_login: () => dispatch(facebook_login())

    })


export default connect(mapStateToProps, mapDispatchToProp)(Home);
