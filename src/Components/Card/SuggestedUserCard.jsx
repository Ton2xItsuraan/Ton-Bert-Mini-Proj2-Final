import { Avatar, Box, Button, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

function SuggestedUserCard({ avatarSrc, name }) {

  const [isFriend, setIsFriend] = useState(false);

  const handleAddFriend = () => {
    // Toggle the friend status
    setIsFriend(!isFriend);
  };
  return (
    <VStack spacing={4} align="stretch"> {/* Wrap both cards in a VStack with spacing */}
      <Box
        borderWidth="1px"
        borderRadius="md"
        p={4}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center">
          <Avatar src={'https://bit.ly/dan-abramov'} alt={`${name}'s avatar`} size="md" mr={4} />
          <VStack align="left">
            <Text fontWeight="bold">{name}</Text>
            <Text color="gray.500">Suggested User</Text>
            <Button onClick={handleAddFriend}>
              {isFriend ? 'Remove Friend' : 'Add As Friend'}
            </Button>
          </VStack>
        </Box>
      </Box>
    </VStack>
  );
}

export default SuggestedUserCard;
