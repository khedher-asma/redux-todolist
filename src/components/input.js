import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {

    render() {
        return (
            <div>
                <input onChange={(e) => { this.props.handleChange(e.target.value) }} />
                <button onClick={() => { if(this.props.input.trim() !== '') {this.props.add(this.props.input)} }}>Add todo</button>

            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (target) => {
            dispatch({ type: 'SET_INPUT', value: target })
        },
        add: (input) => {
            let inputValue = input
            let id = Math.floor(Math.random() * 1000)
            let obj = { inputValue, id }
            dispatch({ type: 'ADD_INPUT', value: obj })
        }
    }
}
const mapStateToProps = (state) => {
    return {
        input: state.input
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Input)
//connect permet a ce component d'acceder au store
//mapStateToProps: apporte le state du store a notre component
//mapDispatchToProps: permet d'envoyer le changement de notre component au store