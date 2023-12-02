import React from 'react';
import ProtectedPage from './ProtectedPage';
import { Box, Heading, Text, Button, Stack } from '@chakra-ui/react';

function Communities() {
  return (
    <ProtectedPage>
      <Box p={4} borderWidth="1px" borderRadius="lg">
        <Heading size="xl" mb={4}>
          Welcome to Our Communities!
        </Heading>

        <Stack spacing={4}>
          <CommunityLink
            name="CodeRunners"
            description="The goal of this page is to unite communities on certain topics."
            link="https://your-community-link-1"
          />
          <CommunityLink
            name="WD88P Open Forum Group"
            description="Be Inform and updated."
            link="https://your-community-link-2"
          />
          {/* Add more communities as needed */}
        </Stack>
      </Box>
    </ProtectedPage>
  );
}

// Custom component for each community link
function CommunityLink({ name, description, link }) {
  return (
    <Box borderWidth="1px" p={4} borderRadius="md">
      <Heading size="md">{name}</Heading>
      <Text color="gray.500" mb={2}>
        {description}
      </Text>
      <Button as="a" href={link} target="_blank" rel="noopener noreferrer" colorScheme="blue">
        Join Community
      </Button>
    </Box>
  );
}

export default Communities;