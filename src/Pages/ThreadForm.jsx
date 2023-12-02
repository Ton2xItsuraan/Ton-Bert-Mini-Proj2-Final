import React, { useState, useRef } from 'react';
import {
  FormControl,
  Textarea,
  Text,
  Input,
  Flex,
  Image,
  CloseButton,
  Button,
} from '@chakra-ui/react';
import { BsFillImageFill } from 'react-icons/bs';

const ThreadForm = ({ onPost }) => {
  const [inputText, setInputText] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const imageRef = useRef(null);
  const MAX_CHAR = 280; // Assuming a maximum character limit

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleImageChange = (e) => {
    // Handle image change logic here
    // Update the state or perform other actions
  };

  const remainingChar = MAX_CHAR - inputText.length;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming onPost takes an object with text and imgUrl properties
    onPost({ text: inputText, imgUrl });
    setInputText('');
    setImgUrl('');
  };

  return (
    <div>
      <FormControl>
        <Textarea
          placeholder='Post content goes here..'
          onChange={handleTextChange}
          value={inputText}
        />
        <Text fontSize='xs' fontWeight='bold' textAlign='right' m='1' color='gray.800'>
          {remainingChar}/{MAX_CHAR}
        </Text>

        <Input type='file' hidden ref={imageRef} onChange={handleImageChange} />

        <BsFillImageFill
          style={{ marginLeft: '5px', cursor: 'pointer' }}
          size={16}
          onClick={() => imageRef.current.click()}
        />
      </FormControl>

      {imgUrl && (
        <Flex mt={5} w='full' position='relative'>
          <Image src={imgUrl} alt='Selected img' />
          <CloseButton
            onClick={() => {
              setImgUrl('');
            }}
            bg='gray.800'
            position='absolute'
            top={2}
            right={2}
          />
        </Flex>
      )}

<Button
        mt={4}
        colorScheme='teal'
        onClick={handleSubmit}
        _hover={{ bg: 'teal.400' }}
        _active={{ bg: 'teal.600' }}
      >
        Submit
      </Button>
    </div>
  );
};

export default ThreadForm;
