import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

function NotificationCard({ message }) {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');

  return (
    <Box
      bg={bgColor}
      p={4}
      borderWidth="1px"
      borderRadius="md"
      mb={4}
      color={textColor}
      _hover={{ boxShadow: 'md' }}
    >
      <Text>{message}</Text>
    </Box>
  );
}

export default NotificationCard;
