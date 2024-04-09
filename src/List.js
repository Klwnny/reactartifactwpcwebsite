import React from 'react';

export const List = (props) => {
  //console.log(props)
  let info = props.data
  return (
        <li className="uk-open">
        <a className="uk-accordion-title uk-heading-large uk-light" href>{info.title}</a>
            <div className="uk-accordion-content">
                <img className="uk-height-medium" src={info.image} alt=""/>
            </div>
        </li>
  );
} 