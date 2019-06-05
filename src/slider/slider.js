import React, {Component} from 'react'
import './slider.css'

export default class Slider extends Component{
    state={
      slide: 'slide1',
    };

   Prev = () => {
       if(this.state.slide==='slide3'){
           this.setState({slide: 'slide2'})
       }else if(this.state.slide==='slide2'){
           this.setState({slide: 'slide1'})
       }else{
           this.setState({slide: 'slide3'})
       }
    };
    Next = () => {
        if(this.state.slide==='slide1'){
            this.setState({slide: 'slide2'})
        }else if(this.state.slide==='slide2'){
            this.setState({slide: 'slide3'})
        }else {
            this.setState({slide: 'slide1'})
        }
    };
    render() {
        return(
            <div className={`${this.state.slide} slider`}>
                <div className="btn-prev" onClick={this.Prev}/>
                <div className="btn-next" onClick={this.Next}/>
            </div>
        )
    }
}