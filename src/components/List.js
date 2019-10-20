import React from 'react';

const List = props => {
    console.log(props)
  return <p>{props.fact.text}</p>;
};

export default List;
