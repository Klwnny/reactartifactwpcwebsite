import React from 'react';
import {List} from './List.js'

export const ListGallery = (props) => {
  // console.log(props)
  return (
        <ul uk-accordion>
          {props.data.map((item,key) => <List key={key} data={item} />)} 
        </ul>
  );
}