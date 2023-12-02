import React from 'react';
import { VStack, Heading } from '@chakra-ui/react'; // Import NotificationCard component
import ProtectedPage from './ProtectedPage';
import NotificationCard from './NotificationCard';

function Activity() {
  const notifications = [
    { id: 1, message: 'You have a new friend request!' },
    { id: 2, message: 'Your post was liked by John Doe.' },
    // Add more notifications as needed
  ];

  return (
    <ProtectedPage>
      <VStack spacing={4} align="stretch" p={4}>
        <Heading mb={4}>Notifications</Heading>
        {notifications.map((notification) => (
          <NotificationCard key={notification.id} message={notification.message} />
        ))}
      </VStack>
    </ProtectedPage>
  );
}

export default Activity;
