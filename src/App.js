import React from "react";
import PropTypes from "prop-types";



const foodILike = [
	{
		key:1,
		name: "Kimchi",
		rating: 3.5
	},
	{	
		key:2,
		name: "Egg",
		rating: 4.6
	
	},
	{
		key:3,
		name: "Americano",
		rating: 5.0
	}
];

function Food({ name, rating }){
	return (
		<div>
			<h1>I like {name}</h1>
			<h4>{rating}/5.0</h4>
		</div>
	);
}

Food.propTypes = {
	name: PropTypes.string.isRequired,
	rating: PropTypes.string.isRequired
}


function App() {
  return (
	<div>
		{foodILike.map(dish => <Food 
			id={dish.key}
			name={dish.name}
			rating={dish.rating}			
		/>)}
	</div>
  );
}

export default App;
