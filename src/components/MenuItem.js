import React from "react";
import { useHistory} from "react-router-dom";

function MenuItem({ image, name}) {
  let history = useHistory();
  function handleClick() {
    if (name === "Corporate Event"){
      history.push('/corporate-event');
    }
    else if(name === "Social Event"){
      history.push('/social-event');
    }
    else if(name === "Festive Event"){
      history.push('/festive-event');
    }
    else if(name === "Community Event"){
      history.push('/community-event');
    }
    else if(name === "Wedding Event"){
      history.push('/wedding-event');
    }
    else if(name === "Party Event"){
      history.push('/party-event');
    }
  }
  return (
    <div className="menuItem" to='/'>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <button onClick={handleClick}>Know more..</button>
    </div>
  );
}

export default MenuItem;
