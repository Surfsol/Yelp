import React from 'react'
import ProfileCard from "./ProfileCard";
import { Link } from "react-router-dom";

//create an individual link on each item,
// uses /movies/fact.id 
function YDetail({ fact }) {
    return (
      <>
      <Link to={`/movies/${fact.id}`}>
        <ProfileCard fact={fact} />
      </Link>
      </>
    );
  }

export default YDetail