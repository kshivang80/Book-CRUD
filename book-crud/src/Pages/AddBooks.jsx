import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks, postBooks, postBooksError, postBooksRequest, postBooksSucess } from '../Redux/action'
import { Button, Input, Select, Text, Box, FormLabel, Stack, FormControl, Spinner, useToast } from "@chakra-ui/react"
import axios from "axios"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./AddBooks.css"

// "id": 2,
// "title": "To Kill a Mockingbird",
// "author": "Harper Lee",
// "image": "https://m.media-amazon.com/images/I/81gepf1eMqL.jpg",
// "year": "1960",
// "publish": "J. B. Lippincott & Co",
// "ISBN": "9780061120084"

const initialState = {
  title: "",
  author: "",
  image: "",
  year: "",
  publish: "",
  ISBN: ""

}

const AddBooks = () => {

 
  const toast = useToast()
  const navigate = useNavigate();

  const isLoading = useSelector((store) => store.isLoading)
  const dispatch = useDispatch()

  const [text, setText] = useState(initialState)

  const { title, publish, year, author, image, ISBN } = text

  const handelChange = (e) => {
    const { name, value } = e.target;

    setText({ ...text, [name]: value });
  };

  const handelSubmit = () => {

    if (!title || !author || !image || !year || !publish || !ISBN) {
      alert("Please Fill All Input filled")
    } else {
      setText({ ...text, id: new Date().getTime() });
      dispatch(postBooks(text));
      toast({
        title: 'Book Details',
        description: "We've created Book Data is Created",
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: "top"
      })
      navigate("/")

      dispatch(getBooks())

    }

  };




  //const { title, publish, year, author, image, ISBN } = text

  return (
    <div>

      <Text fontSize="2xl"></Text>


      <Box mt='40px' >


        <form className='formData' boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">

          <Stack padding={"30px"} spacing={4} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" borderRadius={"20px"}>
            {/* <FormLabel>Title</FormLabel> */}
            <Text fontSize={"3xl"} ml="10px">
              {" "}
              Add-Books{" "}
            </Text>
            <Box >
              {/* <label style={{fontSize:"24px",fontFamily:"sans-serif",fontWeight:"bold"}}> Title</label> */}
              <FormLabel ml="10px" fontSize={"19px"} fontFamily={"sans-serif"} fontWeight={"bold"} color='blue' > Title</FormLabel>
              <Input

                size='lg'
                name="title"
                value={text.title}
                onChange={handelChange}
                placeholder="Enter Books Title"
                required

              />

            </Box>



            <Box>
              <FormLabel ml="10px" fontSize={"18px"} fontFamily={"sans-serif"} fontWeight={"bold"} color='blue' >Author</FormLabel>
              <Input
                size='lg'
                placeholder="Enter Books author"
                name="author"
                value={text.author}
                onChange={handelChange}
                isRequired
              />

            </Box>

            <Box>
              <FormLabel ml="10px" fontSize={"18px"} fontFamily={"sans-serif"} fontWeight={"bold"} color='blue'  >Year</FormLabel>
              <Input
                size='lg'
                placeholder="Enter Books  year"
                name="year"
                type='number'
                value={text.year}
                onChange={handelChange}
                isRequired
              />

            </Box>

            <Box>
              <FormLabel ml="10px" fontSize={"18px"} fontFamily={"sans-serif"} fontWeight={"bold"} color='blue' >Publish</FormLabel>

              <Input
                size='lg'
                placeholder="Enter Books  publish"
                name="publish"
                value={text.publish}
                onChange={handelChange}
                isRequired
              />

            </Box>


            <Box>
              <FormLabel ml="10px" fontSize={"18px"} fontFamily={"sans-serif"} fontWeight={"bold"} color='blue' >ISBN-Number</FormLabel>
              <Input
                size='lg'
                placeholder=" Enter Books  ISBN"
                name="ISBN"
                type='number'
                value={text.ISBN}
                onChange={handelChange}
                isRequired
              />

            </Box>

            <Box>
              <FormLabel ml="10px" fontSize={"18px"} fontFamily={"sans-serif"} fontWeight={"bold"} color='blue' >Image-Url</FormLabel>
              <Input

                size='lg'
                placeholder="Enter Books Image"
                name="image"
                value={text.image}
                onChange={handelChange}
                isRequired
              />
            </Box>


            <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              isLoading={isLoading}
              onClick={handelSubmit}
            >Submit</Button>

          </Stack>
        </form>
      </Box>




    </div>
  )
}

export default AddBooks