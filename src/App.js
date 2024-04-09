import React from "react";
import data from "./data.js";
import { Gallery } from "./Gallery.js";
import { Banner } from "./Banner.js";
import { ListGallery } from "./ListGallery.js";
import "./App.css";

function App() {
  // console.log(data)
  return (
    <div>
      <Banner info={"Food n Work"} />
      <div className="uk-child-width-expand uk-grid-small uk-text-center uk-flex">
        <Gallery data={data.food}></Gallery>
        <br></br>
        <Gallery data={data.teachers}></Gallery>
      </div>
      <div className="uk-margin-xlarge-left uk-margin-xlarge-right">
      <ListGallery data={data.randomlist}></ListGallery>
      </div>
    
    </div>
  );
}

export default App;
