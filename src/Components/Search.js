import React, { Component } from 'react'

class Search extends Component {

    state = {data:''}

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.search(this.state.data)
    }

    onInputChange = (event)=>{
        this.setState({
            data:event.target.value.toUpperCase()
        })
    }


    render() {
        return (
            <React.Fragment>
                <form onSubmit = {this.onFormSubmit} className="ui form">
                    <div className="field">
                    <input type="text" placeholder="Enter Text & 'ENTER' " value={this.state.data} onChange={this.onInputChange}></input>
                    </div>
                </form>
                <br/>
            </React.Fragment>
        )
    }
}

export default Search