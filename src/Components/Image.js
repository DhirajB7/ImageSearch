import React, { Component } from 'react'

class Image extends Component {

    constructor(props) {
        super(props)

        this.state ={
            spans:0
        }
    
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load',() => {
            this.setState({
                spans: Math.ceil(this.imageRef.current.clientHeight/10)
            })
           

        })
    }

    

    render() {        
        return (
            <div style={{gridRowEnd:"span "+this.state.spans}}>
                <img ref ={this.imageRef} src={this.props.url} alt = {this.props.alt}/>
            </div>
            
        )
    }
}

export default Image