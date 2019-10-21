import React from "react";
import axios from "axios";
import ComplexGrid from './ComplexGrid';




export default class Ad extends React.Component {
  
  constructor(props) {
    console.log(`ad`, props)
    super(props);
    this.state = {
      ad: null
    };
  }

  // const Ad = (props) => {
  //   const [ad, setAd] = ([])
  // }
  
  //recieve from props id of ad that was clicked on, coming from ComplexGrid
  componentDidMount() {
    console.log(this.props.match.params.id)
    this.fetchMovie(this.props.match.params.id);
  }

  //if id is not = to 
  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }

  // useEffect(() => {
  //   props.fetchAd()
  // }, [])

  fetchMovie = id => {
    axios
      .get(`https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts/movies/${id}`)
      .then(res => this.setState({ ad: res.data }))
      .catch(err => console.log(err.response));
  };

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.ad);
  };

  deleteItem = e => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/api/movies/${this.state.ad.id}`)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err.response));
  };

  render() {
    if (!this.state.ad) {
      return <div>Loading movie information...</div>;
    }

    return (
      <div className="save-wrapper">
        <ComplexGrid movie={this.state.ad} />
        <div className="save-button" onClick={this.saveMovie}>
          Save
        </div>
        <button
        onClick={() => this.props.history.push(`/update-movie/${this.state.ad.id}`)}
      >
        Edit Movie
      </button>
      <button onClick={this.deleteItem} className="md-button">
        Delete Item
      </button>
      </div>
    );
  }
}

  // const mapStateToProps = state => {
  //   return {
  //     catFacts: state.catFacts,
  //     isFetching: state.isFetching,
  //     error: state.error
  //   };
  // };
  
  // export default connect(
  //   mapStateToProps,
  //   { fetchId }
  // )(Ad);





 

  

  //if state is null, loading movie
//   render() {
   
//     );
//   }
// }


// if (!this.state.movie) {
//   return <div>Loading movie information...</div>;
// }

// return (
//   <div className="save-wrapper">
//     <MovieCard movie={this.state.movie} />
//     <div className="save-button" onClick={this.saveMovie}>
//       Save
//     </div>
//     <button
//     onClick={() => this.props.history.push(`/update-movie/${this.state.movie.id}`)}
//   >
//     Edit Movie
//   </button>
//   <button onClick={this.deleteItem} className="md-button">
//     Delete Item
//   </button>
//   </div>