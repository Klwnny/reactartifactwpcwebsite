import React from "react";

export const Banner = (props) => {
  //console.log(props)
  let info = props.info;
  return (
    <div>
      <h1 className="uk-heading-divider uk-margin-xlarge-left uk-margin-xlarge-right uk-light">
        {info}
      </h1>
    </div>
  );
};
