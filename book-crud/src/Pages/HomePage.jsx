import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {getBooks} from "../Redux/action"
import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react'

const HomePage = () => {
  //const [data,setData] =useState([])
  const dispatch=useDispatch()
  const books=useSelector((store)=>store.books)
console.log(books)


  useEffect(()=>{
       if(books.length===0){
        dispatch(getBooks())
       }
  },[dispatch,books])





  return (
    <div>
        <Box border="1px solid red" mt="50px" h="1000px">

        <SimpleGrid mt="30px" columns={{ base: 1, sm: 1, md: 2, lg: 4 }} gap="20px">
        {
          books.length > 0 &&
          books.map((ele,i )=> {
            return (
              <Box  key={ele.id} h="550px" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" borderRadius={"20px"} border="1px solid teal">
                <Box h="60%" >
                  <Image src={ele.image} w="90%" h="100%" m="auto"  borderRadius={"10px"}/>
                </Box>
                 <Box h="30%"  w="90%" m="auto" textAlign={"left"} border="1px solid teal">
                 <Text mt="10px" fontSize="xl" noOfLines='1' as="b">Title : {ele.title}</Text>

                  <Text fontWeight={"500"} fontSize="lg" noOfLines='1'>Author : {ele.author}</Text>
                  <Text fontWeight={"500"} fontSize="lg">Year : {ele.year}</Text>
                  <Text fontWeight={"500"} fontSize="lg" noOfLines='1'>Publish : {ele.publish}</Text>
                  <Text fontWeight={"500"} fontSize="lg">ISBN : {ele.ISBN}</Text>

                </Box> 
                <Box h="10%" border="1px solid teal" >
                  

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