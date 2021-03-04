import React from 'react';
import { withStyles } from "@material-ui/core/styles";

const style ={
	root:{
		width: "20%",
		height: "25%",
		margin: "0 auto",
		display: "inline-block",
		position: "relative",
		cursor: "pointer",
		marginBottom: "-5.5px"
	}
};

function DragabbleColorBox(props){
	
		return (
			<div className={props.classes.root} style={{backgroundColor: props.color}}>
				{props.color}
			</div>
		)
}

export default withStyles(styles)(DragabbleColorBox);