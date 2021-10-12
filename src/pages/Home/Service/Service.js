import React from 'react';
import './Service.css';


const Service = ({service}) => {

	//const {service} = props

	const {name,price,img} = service


	return (
		<div className="service">
			<h2>This is a service</h2>
			<h2>Service Name: {name}</h2>
			<img src={img} alt="" />
			<h5>Price:{price}</h5>
		</div>
	);
};

export default Service;