import React from 'react';
import { useParams } from 'react-router-dom';
import { wordsWithAvatars } from '../../lib/data';
import { Avatar, Box, Button, Heading, Stack, Text } from '@chakra-ui/react';

const UserProfile = () => {
 const { name } = useParams();
 const profile = wordsWithAvatars.find((word) => word.name.toLowerCase() === name);

 if (!profile) {
   return <div>Profile not found</div>;
 }

 return (
   <div>
     <Box p={4} borderWidth="1px" borderRadius="lg">
        <Stack spacing={4} align="center">
          <Avatar size="xl" name={profile.name} src={profile.avatar} />
          <Heading size="lg" color="white">{profile.name}</Heading>
          <Text fontSize="md" color="gray.500">
            Former Kid
          </Text>
          <Text mb={8} fontSize="xl" fontWeight="bold" color="white">
            Welcome to your awesome profile page!
          </Text>
          <Text mb={3} color="white">Nickname    :  {profile.nickname}</Text>
          <Text mb={3} color="white">Age         :  {profile.age}</Text>
          <Text mb={3} color="white">Birthplace  :  {profile.birthplace}</Text>
          <Text mb={3} color="white">Occupation  :  {profile.occupation}</Text>
          <Text mb={3} color="white">{profile.quote}</Text>

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
   </div>   
 );
};

export default UserProfile;
