import React, {Component} from 'react';
import {Link} from "react-router-dom";
import MiniPalette from "./MiniPalette";
import {withStyles} from '@material-ui/styles';

const styles= {
	root:{
		backgroundColor:"pink",
		height:"100vh",
		display:"flex",
		alignItems:"flex-start",
		justifyContent:"center"
	},
	container:{
		width:"50%",
		display: "flex",
		alignItems:"flex-start",
		flexDirection:"column",
		flexWrap:"wrap",
	},
	palettes:{
		boxSizing:"border-box",
		width:"100%",
		display:"grid",
		gridTemplateColumns: "repeat(3,30%)",
		gridGap:"5%"
		
	},
	nav:{
		display:"flex",
		width:"100%",
		justifyContent:"space-between",
		color:"white",
		alignItems:"center",
		"& a":{
			color:"white"
		}
	}
};

class PaletteList extends Component{
	goToPalette(id){
		this.props.history.push(`/palette/${id}`);
	}
	render(){
		const {palettes, classes, deletePalette} = this.props;
		return (
			<div className= {classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1>Color Palette Collection</h1>
						<Link to="/palette/new">Create New Palette</Link>
					</nav>
					<div className={classes.palettes}>
						{palettes.map(palette => (
						<MiniPalette 
							{...palette} 
							handleClick={() => this.goToPalette(palette.id)}
							handleDelete={deletePalette}
							key={palette.id}
							id={palette.id}
						/>
						))}
					</div>
				</div>
			</div>
		
		)
	}
}

export default withStyles(styles)(PaletteList);