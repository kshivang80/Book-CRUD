import React, { useEffect } from 'react'
//import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteProducts, getBooks } from "../Redux/action"
import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const HomePage = () => {
  //const [data,setData] =useState([])
  const dispatch = useDispatch()
  const books = useSelector((store) => store.books)
  console.log(books)


  useEffect(() => {
    if (books.length === 0) {
      dispatch(getBooks())
    }
  }, [dispatch, books])


  const deleteHandler = (id) => {
    dispatch(deleteProducts(id)).then(() => dispatch(getBooks()));

}




  return (
    <div>

      <Box mt="30px">
      <Text  fontSize={"4xl"} as="b" color="teal">
         Books-Section
       </Text>

      </Box>

      
      <Box  mt="50px" h="auto">

        <SimpleGrid mt="30px" columns={{ base: 1, sm: 1, md: 2, lg: 4 }} gap="20px">
          {
            books.length > 0 &&
            books.map((ele, i) => {
              return (
                <Box key={ele.id} h="550px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" borderRadius={"20px"} >
                  <Box h="60%" >
                    <Image src={ele.image} w="90%" h="100%" m="auto" borderRadius={"10px"} />
                  </Box>
                  <Box h="28%" w="90%" m="auto" textAlign={"left"}  >
                    <Text mt="10px" fontSize="xl" noOfLines='1' as="b">Title : {ele.title}</Text>

                    <Text fontWeight={"500"} fontSize="lg" noOfLines='1'>Author : {ele.author}</Text>
                    <Text fontWeight={"500"} fontSize="lg">Year : {ele.year}</Text>
                    <Text fontWeight={"500"} fontSize="lg" noOfLines='1'>Publish : {ele.publish}</Text>
                    <Text fontWeight={"500"} fontSize="lg">ISBN : {ele.ISBN}</Text>

                  </Box>
                  <Box w="90%" m='auto' h="10%"  >
                    <Box w="80%" m="auto" h="100%" display="flex">
                      <Box w="50%" h="auto" >
                        <button
                        onClick={()=>deleteHandler(ele.id)}
                        >
                        <DeleteIcon w="30px" h="40px" color="red" />
                        </button>
                       
                      </Box>
                      <Box w="50%" h="auto" >
                        <Link to={`/editbook/${ele.id}`} >
                        <EditIcon w="30px" h="40px" color="blue" />
                        </Link>
                        
                      </Box>

                    </Box>

                  </Box>





                </Box>
              )
            })
          }
        </SimpleGrid>

      </Box>
    </div>
  )
}

export default HomePage