import React from 'react';
import Panel from './Panel';
import Display from './Display';
import '../Style/Clock.css';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isShowDate: true
        }
        this.showOrHide = this.showOrHide.bind(this)
    }
    showOrHide(){
        this.setState(
            (prevState, props) => ({
                isShowDate: !prevState.isShowDate
            })
        );
    }
    render(){
        return(
            <div className="clock">
                <Panel triggleShowOrHide={this.showOrHide} isShowDate={this.state.isShowDate}/>
                <Display isShowDate={this.state.isShowDate}/>
            </div>
        );
    }
}

export default Clock;