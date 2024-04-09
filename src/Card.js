import React from 'react';

function Item({ name, isPacked }) {
	if (isPacked) {
	  return null;
	}
	return <div className="uk-card-badge uk-label">{name}</div>;

}

export const Card = (props) => {
  //console.log(props)
  let info = props.data
  return (
	<div>
		<div className="uk-margin-xlarge-left uk-margin-xlarge-right uk-card uk-card-secondary uk-card-body uk-card-hover ">
			<Item isPacked={info.showprice} name={info.price}></Item>
			<h4>{info.title}</h4>
			<img className="uk-height-small" src={info.image} alt=""/>
		</div>
		<br></br>
	</div>
  );
} 