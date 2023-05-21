import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks, getSingleBooks, postBooks, postBooksError, postBooksRequest, postBooksSucess, updateBooks } from '../Redux/action'
import { Button, Input, Select, Text, Box, FormLabel, Stack, FormControl, useToast } from "@chakra-ui/react"
import axios from "axios"
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./EditBook.css"


const initialState = {
    title: "",
    author: "",
    image: "",
    year: "",
    publish: "",
    ISBN: ""

}

const style = {
    width: "60%",
    margin: "auto",
    padding: "5%",
   
};


const EditBooks = () => {
    const { id } = useParams()
    // console.log(id)'
    const toast = useToast()

    const navigate = useNavigate();
    const isLoading = useSelector((store) => store.isLoading)
    const singlebook = useSelector((store) => store.singlebook)

    const dispatch = useDispatch()

    const [text, setText] = useState(initialState)

    const { title, author, image, year, publish, ISBN } = text

    console.log(text, "bhai")

    useEffect(() => {
        dispatch(getSingleBooks(id))
    }, [])


    useEffect(() => {
        if (singlebook) {
            setText({ ...singlebook })
        }
    }, [singlebook])




    const handelChange = (e) => {
        const { name, value } = e.target;

        setText({ ...text, [name]: value });
    };

    const handelSubmit = () => {

        if (!title || !author || !image || !year || !publish || !ISBN) {
            alert("Please Fill All Input filled")
        } else {
            dispatch(updateBooks(text, id))
            toast({
                title: 'Book Details Updated',
                description: "Updating Book Data Succesfully",
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: "top"
            })
            navigate("/")

            setTimeout(()=>{
                dispatch(getBooks())
            },1000)
          

        }

    };




    return (

        <div>

            <Text fontSize="2xl"></Text>


            <Box mt='40px' >
      

                <form  className='formData' boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">

                    <Stack padding={"30px"} spacing={4} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" borderRadius={"20px"}>
                        {/* <FormLabel>Title</FormLabel> */}
                        <Text fontSize={"3xl"} ml="10px">
                            {" "}
                            Edit-Books{" "}
                        </Text>
                        <Box >
                            {/* <label style={{fontSize:"24px",fontFamily:"sans-serif",fontWeight:"bold"}}> Title</label> */}
                            <FormLabel ml="10px" fontSize={"19px"} fontFamily={"sans-serif"} fontWeight={"bold"} color='blue' > Title</FormLabel>
                            <Input

                                size='lg'
                                name="title"
                                value={title}
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
                                value={author}
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
                                value={year}
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
                                value={publish}
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
                                value={ISBN}
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
                                value={image}
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

export default EditBooks