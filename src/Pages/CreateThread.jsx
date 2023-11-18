import React from 'react'
import ProtectedPage from './ProtectedPage'
import { Button, FormControl, Input, Text, Textarea, useColorModeValue } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useState } from 'react'



function CreateThread() {
  const [postText, setPostText] = useState('')
  const handleTextChange = () => {}
  // const { handleImageChange, imgUrl } = usePreviewImg();
  
  return (
    <ProtectedPage>
      <FormControl>
      <div className="flex-1">
          <textarea
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-gray-700 text-white"
            rows="4"
            onChange={handleTextChange}
            value={postText}
            placeholder="Type your message..."
          />
        </div>
          <Text fontSize="xs"
          fontWeight={"bold"}
          textAlign={'right'}
          m={"1"}
          color={"gray.800"}>
            500/500
          </Text>
          {/* <Input 
            type="file"
            hidden
            ref={fileref}
            onChange={handleImageChange}

          /> */}

      </FormControl>
      <Button
        position={"fixed"}
        bottom={5}
        right={80}
        leftIcon={<AddIcon/>}
        bg={useColorModeValue("gray.300","gray.dark")}
      >
        Post
      </Button>
    </ProtectedPage>
  )
}

export default CreateThread
