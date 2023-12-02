import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import SuggestedUserCard from '../Card/SuggestedUserCard';

function CommunityLink({ name, link }) {
  return (
    <Box borderWidth="1px" p={2} borderRadius="md">
      <Heading size="sm" mb={1}>
        {name}
      </Heading>
      <Button
        as="a"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        size="sm"
        colorScheme="blue"
      >
        Join
      </Button>
    </Box>
  );
}

function RightSideBar() {
  return (
    <div className="custom-scrollbar rightsidebar">
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1">Suggested Communities</h3>
        <Box p={2} borderWidth="1px" borderRadius="md">

          <Stack spacing={2}>
            <CommunityLink
              name="CodeRunners"
              link="https://your-community-link-1"
            />
            <CommunityLink
              name="WD88P Open Forum Group"
              link="https://your-community-link-2"
            />
            {/* Add more communities as needed */}
          </Stack>
        </Box>
      </div>
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1">Suggested Users</h3>
        <SuggestedUserCard/>
      </div>
    </div>
  );
}

export default RightSideBar;
