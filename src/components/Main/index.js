import React, { Component } from 'react';
import ImagesBotton from './ImagesBotton';
import './style.css';

class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
            imagesBotton: [
                {
                    imgSrc: "http://shanereact.ibthemespro.com/img/portfolio/13.jpg",
                    name: 'foto1'
                },
                {
                    imgSrc: "http://shanereact.ibthemespro.com/img/portfolio/14.jpg",
                    name: 'foto2'
                },
                {
                    imgSrc: "http://shanereact.ibthemespro.com/img/portfolio/15.jpg",
                    name: 'foto3'
                }
            ]
        }
    }

  render () {
    return (
        <>  
            <section id="main" className={this.props.mainClass}>
                <div className="flex flex-wrap">
                    {/* IMAGEN TEXTO */}
                    <div className="w-full md:w-1/2 md:p-8 items-center flex">
                            <img src="http://shanereact.ibthemespro.com/img/about/1.jpg" className="imagesShadow" />                     
                    </div>
                    <div className="w-full mt-10 md:mt-0  md:w-1/2 md:p-8">
                            <h1 className="font-bold mb-10 text-2xl"> Creative Independent Web  </h1>                     
                            <p> 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Cras id quam interdum ligula gravida condimentum in sit amet orci. 
                                Pellentesque interdum, mi et ultrices sodales, enim magna luctus
                            </p>
                    </div>
                </div>      
                <div className="flex flex-1 flex-wrap items-center justify-around mt-4">                    
                    {this.state.imagesBotton.map((myImg)=>{                        
                        return <ImagesBotton  myImage={myImg}  />                        
                    })}                 
                </div>
            </section>

        </>
    )
  }
}

export default Main;
