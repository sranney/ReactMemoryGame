import React from "react";
import CharacterCard from "./characterCard";

export default class Row extends React.Component{
	constructor(props){
		super(props);
	}
	render = ()=>{
		return (
			[<div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",flexBasis:30+"%",marginTop:15+"px"}}>,
				<CharacterCard />,
				<CharacterCard />,
				<CharacterCard />,
				<CharacterCard />,
				<CharacterCard />,
				<CharacterCard />,
				<CharacterCard />,
				<CharacterCard />,
				<CharacterCard />,
				<CharacterCard />,
				<CharacterCard />,
			</div>]
		);
	}
}

