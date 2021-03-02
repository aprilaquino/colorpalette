import React, {Component} from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import "./Navbar.css"

export default class Navbar extends Component{
	render(){
		return (
			<header className="Navbar">
				<div className="logo">
					<a href="/">Color Palette</a>
				</div>
				
				<div className="slider-container">
					<span>Level : {this.props.level} </span>
				</div>
				
				<div className="slider">
					<Slider 
						defaultValue={this.props.level} 
						min={100} 
						max={900} 
						step={100}
						onAfterChange={this.props.changeLevel}
						/>
				</div>
			</header>
		
		)
	}
}