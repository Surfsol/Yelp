import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchId } from '../actions';

import YDetail from "./YDetail"
//import UpdateForm from "./UpdateForm";


const Ad = props => {
    console.log(props.fetchRest)
  useEffect(() => {
    props.fetchId();
    
  }, []);

  if (props.isFetching) {
    // usually a spinner (react-loader-spinner)
    return <h2>Loading Resturant...</h2>;
  }

  if (this.props.match.params.id !== newProps.match.params.id) {
    fetchId(newProps.match.params.id);
  }

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  };

  //should go to actions
  deleteItem = e => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/api/movies/${this.state.movie.id}`)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err.response));
  };


    return (
      <div className="save-wrapper">
        <ProfileCard fact={props.fact} />
        <div className="save-button" onClick={props.saveMovie}>
          Save to Favorites
        </div>
        <button
        onClick={() => this.props.history.push(`/update-movie/${this.state.movie.id}`)}
      >
        Edit Review
      </button>
      <button onClick={this.deleteItem} className="md-button">
        Delete Item
      </button>
      </div>
      </div>
    );
  }

  const mapStateToProps = state => {
    return {
      catFacts: state.catFacts,
      isFetching: state.isFetching,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { fetchId }
  )(Ad);





 

  

  //if state is null, loading movie
  render() {
   
    );
  }
}


if (!this.state.movie) {
  return <div>Loading movie information...</div>;
}

return (
  <div className="save-wrapper">
    <MovieCard movie={this.state.movie} />
    <div className="save-button" onClick={this.saveMovie}>
      Save
    </div>
    <button
    onClick={() => this.props.history.push(`/update-movie/${this.state.movie.id}`)}
  >
    Edit Movie
  </button>
  <button onClick={this.deleteItem} className="md-button">
    Delete Item
  </button>
  </div>