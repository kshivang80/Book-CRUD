import * as types from "./actionTypes"
import axios from "axios"

const getBooksRequest=()=>{

    return {
        type:types.GET_BOOKS_REQUEST
    }

}

const getBooksSucess=(payload)=>{

    return {
        type:types.GET_BOOKS_SUCCESS,
        payload
    }

}


const getBooksError=()=>{

    return {
        type:types.GET_BOOKS_ERROR
    }

}


//////////  POST REQUEST  //////////////////

const postBooksRequest=()=>{

    return {
        type:types.POST_BOOKS_REQUEST
    }

}

const postBooksSucess=(payload)=>{

    return {
        type:types.POST_BOOKS_SUCCESS,
        payload
    }

}


const postBooksError=()=>{

    return {
        type:types.POST_BOOKS_ERROR
    }

}

/////////////////   patch request /////////////

const editBooksRequest=()=>{

    return {
        type:types.EDIT_BOOKS_REQUEST
    }

}

const editBooksSucess=(payload)=>{

    return {
        type:types.EDIT_BOOKS_SUCCESS,
        payload
    }

}


const editBooksError=()=>{

    return {
        type:types.EDIT_BOOKS_ERROR
    }

}


//////////////// delete Request  //////////////////

const deleteBooksRequest=()=>{

    return {
        type:types.DELETE_BOOKS_REQUEST
    }

}

const deleteBooksSucess=(payload)=>{

    return {
        type:types.DELETE_BOOKS_SUCCESS,
        payload
    }

}


const deleteBooksError=()=>{

    return {
        type:types.DELETE_BOOKS_ERROR
    }

}


/////////////////   Calling api /////////////////////


const getBooks=()=>(dispatch)=>{
   dispatch(getBooksRequest)

   return axios.get("http://localhost:8080/books")
     .then((r)=>{
        dispatch(getBooksSucess(r.data))
        console.log(r.data)
     })
     .catch((err)=>{
        dispatch(getBooksError)
        console.log(err)
     })


}


const postBooks=(payload)=>(dispatch)=>{
    dispatch(postBooksRequest)
 
    return axios.post("http://localhost:8080/books",payload)
      .then((r)=>{
         dispatch(postBooksSucess(r.data))
         console.log(r.data)
      })
      .catch((err)=>{
         dispatch(postBooksError)
         console.log(err)
      })
 
 
 }




export {getBooks ,postBooks ,postBooksError,postBooksRequest,postBooksSucess}