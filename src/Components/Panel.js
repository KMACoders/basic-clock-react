import React from 'react';
import '../Style/Panel.css';

class Panel extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.triggleShowOrHide}>
                    {this.props.isShowDate ? "Hide Date" : "Show Date"}
                </button>
            </div>
        );
    }
}

export default Panel;