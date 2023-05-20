
import * as types from "./actionTypes"


const initalState = {
    books: [],
    isLoading: false,
    isError: false,
}


export const reducer = (state = initalState, action) => {

    const { type, payload } = action;

    switch (type) {

        case types.GET_BOOKS_REQUEST:
            return { ...state, isLoading: true }

        case types.GET_BOOKS_SUCCESS:
            return { ...state, isLoading: false, books: payload }

        case types.GET_BOOKS_ERROR:
            return { ...state, isLoading: false, isError: true }


        case types.POST_BOOKS_REQUEST:
            return { ...state, isLoading: true }

        case types.POST_BOOKS_SUCCESS:
            return { ...state, isLoading: false, books: [...state.books, payload] }

        case types.POST_BOOKS_ERROR:
            return { ...state, isLoading: false, isError: true }


        default:
            return state
    }

}

