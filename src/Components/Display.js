import React from 'react';
import '../Style/Display.css'

class Display extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString(),
        }
        this.updateTime = this.updateTime.bind(this);
    }
    updateTime(){
        this.setState({
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString()
        })
    }
    componentWillMount(){
        setInterval(this.updateTime, 1000);
    }
    render(){
        if (this.props.isShowDate){
            return(
                <div className="display">
                    <p className="time">{this.state.time}</p>
                    <p className="date">{this.state.date}</p>
                </div>
            )
        } else {
            return(
                <div className="display">
                    <p className="time">{this.state.time}</p>
                </div>
            )
        }
        
    }
}

export default Display;