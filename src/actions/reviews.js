import React from 'react'
import axios from 'axios'


// action types
export const NEW_REVIEW_FETCH = 'NEW_REVIEW_FETCH';
export const NEW_REVIEW_SUCCESS = 'ADD_REVIEW_SUCCESS';
export const NEW_REVIEW_FAILURE = 'ADD_REVIEW_FAILURE';


//imports to NewReview.js
export const new_review = (review) => (dispatch) => {
	dispatch({ type: NEW_REVIEW_FETCH });

	return axios
		.post(`http://localhost:3333/`, review)
		.then((res) => dispatch({ type: NEW_REVIEW_SUCCESS, payload: res.data }))
		.catch((err) => dispatch({ type: NEW_REVIEW_FAILURE, payload: err }));
};