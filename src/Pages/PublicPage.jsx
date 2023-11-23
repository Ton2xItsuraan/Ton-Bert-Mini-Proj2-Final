import { AspectRatio, Box, Button, Heading, Text } from '@chakra-ui/react';
import '../index.css'

function PublicPage() {
    return (
      <Box
      bg="gray.800"
      bgImage="./assets/backgroundimg.jpg"
      height="100vh"
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      boxShadow="inset 0 0 0 1000px rgba(0, 0, 0, 0.2)"
      objectFit="contain"
    >
      <Heading 
      color="#fff"
      fontSize="100px"
      marginTop="-100px">THREADS CLONE</Heading>
      <Text mt="8px"
   color="#fff"
   fontSize="32px"
   fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
        What are you waiting for?
      </Text>
      <div className='hero-btns'>
        <Button m={2} p={4}>
          <a href="/protected">Sign-In</a>
        </Button>
        <Button m={2} p={4}>
          <a href="/sign-up">Sign-Up</a> 
        </Button >
      </div>
      </Box>
    );
  }

  export default PublicPage