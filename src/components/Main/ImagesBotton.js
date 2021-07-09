import React, { Component } from 'react';
import './style.css';

class ImagesBotton extends Component{

  render () {
    return (
        <>  
            <div className="img-main-botton w-full md:w-1/3 p-2 md:p-8">                                
                <img className="imagesShadow" src={this.props.myImage.imgSrc} title={this.props.myImage.name} />
            </div>
        </>
    )
  }
}

export default ImagesBotton;
