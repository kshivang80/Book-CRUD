import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postBooks, postBooksError, postBooksRequest, postBooksSucess } from '../Redux/action'
import { Button, Input, Select, Text, Box, FormLabel, Stack, FormControl } from "@chakra-ui/react"
import axios from "axios"
import { useState } from 'react'

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

  const style = {
    width: "50%",
    margin: "auto",
    padding: "5%",
  };


  const isLoading = useSelector((store) => store.isLoading)
  const dispatch = useDispatch()

  const [text, SetText] = useState(initialState)

  const handelChange = (e) => {
    const { name, value } = e.target;

    SetText({ ...text, [name]: value });
  };

  const handelSubmit = () => {
    SetText({ ...text, id: new Date().getTime() });


    dispatch(postBooks(text));
  };




  //const { title, publish, year, author, image, ISBN } = text

  return (
    <div>

      <Text fontSize="2xl"></Text>


      <Box mt='40px' >
        {/* <Text fontSize={"3xl"} as="b">
          {" "}
          Post here{" "}
        </Text> */}

        <form style={style} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">

          <Stack padding={"30px"} spacing={4} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" borderRadius={"20px"}>
            {/* <FormLabel>Title</FormLabel> */}
            <Text fontSize={"3xl"} as="b">
              {" "}
              Create-Books{" "}
            </Text>
            <FormControl isRequired>
              <Input
                size='lg'
                name="title"
                value={text.title}
                onChange={handelChange}
                placeholder="Enter Books Title"
                required
                
              />

            </FormControl>

            {/* <FormLabel>Author</FormLabel> */}
            <Input
              size='lg'
              placeholder="Enter Books author"
              name="author"
              value={text.author}
              onChange={handelChange}
              isRequired
            />
            <Input
              size='lg'
              placeholder="Enter Books  year"
              name="year"
              value={text.year}
              onChange={handelChange}
              isRequired
            />

            <Input
              size='lg'
              placeholder="Enter Books  publish"
              name="publish"
              value={text.publish}
              onChange={handelChange}
              isRequired
            />

            <Input
              size='lg'
              placeholder=" Enter Books  ISBN"
              name="ISBN"
              value={text.ISBN}
              onChange={handelChange}
              isRequired
            />


            <Input

              size='lg'
              placeholder="Enter Books Image"
              name="image"
              value={text.image}
              onChange={handelChange}
              isRequired
            />


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