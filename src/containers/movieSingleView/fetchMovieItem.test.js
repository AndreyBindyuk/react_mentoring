import React from "react";
import { shallow } from "enzyme";
import { MovieSingleView } from "./MovieSingleView";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from 'fetch-mock';

import { fetchMovieItem } from './fetchMovieItem';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);
// const store = mockStore({});

// function setup() {
//   const props = {
//     movies: [],
//     error: "",
//     movie: {},
//     fetchMovie: jest.fn()
//   };
//   const enzymeWrapper = shallow(<MovieSingleView {...props} />);
//   return {
//     props,
//     enzymeWrapper
//   };
// }

// describe("async movie item actions", () => {
//     afterEach(() => {
//         fetchMock.restore()
//       })
// });


describe('async actions', () => {
    afterEach(() => {
      fetchMock.restore()
    })
  
    it('creates FETCH_MOVIE_ITEM_SUCCESS when fetching movie item has been done', () => {
    // const store = mockStore({ movie: {
    //     id:"320288",
    //     title:"X-Men: Dark Phoenix"

    // } })
    // fetchMock.mock('https://reactjs-cdp.herokuapp.com/movies', 200)
      fetchMock.getOnce("https://reactjs-cdp.herokuapp.com/movies"+"/"+"320288", {
        // data: {
            // movie: {}
        //   }
      })
  
      const expectedActions = [
        { type: "FETCH_MOVIE_ITEM_SUCCESS", 
        movie: {} }
      ]

      const store = mockStore({ 
        movies: [],
        error: "",
        movie: {}
       })
      
      console.log(store);
  
      return store.dispatch(fetchMovieItem()).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
