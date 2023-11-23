import React from 'react';
import ProtectedPage from './ProtectedPage';
import { Box, Heading, Text, Button, Avatar, Stack } from '@chakra-ui/react';

function Profile() {
  return (
    <ProtectedPage>
      <Box p={4} borderWidth="1px" borderRadius="lg">
        <Stack spacing={4} align="center">
          <Avatar size="xl" name="Joebert Lazano" src="url-to-your-profile-image" />
          <Heading size="lg" color="white">Joebert Lazano</Heading>
          <Text fontSize="md" color="gray.500">
            Former Kid
          </Text>
          <Text mb={8} fontSize="xl" fontWeight="bold" color="white">
            Welcome to your awesome profile page!
          </Text>
          <Text mb={3} color="white">Nickname     :   Jon-Jon</Text>
          <Text mb={3} color="white">Age          :   30</Text>
          <Text mb={3} color="white">Birthplace   :   Metro Manila</Text>
          <Text mb={3} color="white">Occupation   :   Metro Aid</Text>
          <Text mb={3} color="white">"Someone who cannot abandon everything cannot achieve anything"</Text>

          {/* Add your profile content here */}
          <Button colorScheme="purple">Edit Profile</Button>

          {/* Social Media Links */}
          <Stack direction="row" spacing={4} mt={4}>
            <Button as="a" href="your-link-to-facebook" target="_blank" rel="noopener noreferrer" colorScheme="facebook">
              Facebook
            </Button>
            <Button as="a" href="your-link-to-twitter" target="_blank" rel="noopener noreferrer" colorScheme="twitter">
              Twitter
            </Button>
            {/* Add more social media links as needed */}
          </Stack>
        </Stack>
      </Box>
    </ProtectedPage>
  );
}

export default Profile;
