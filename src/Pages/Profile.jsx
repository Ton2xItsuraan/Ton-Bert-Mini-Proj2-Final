import React, { useState } from 'react';
import ProtectedPage from './ProtectedPage';
import { Box, Heading, Text, Button, Avatar, Stack, Editable, EditablePreview, EditableInput, Input, Link } from '@chakra-ui/react';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [avatarFile, setAvatarFile] = useState(null);

  const [profileData, setProfileData] = useState({
    name: 'Joebert Lazano',
    bio: 'Former Kid',
    motto: 'Someone who cannot abandon everything cannot achieve anything',
    nickname: 'Jon-Jon',
    age: 30,
    birthplace: 'Metro Manila',
    occupation: 'Metro Aid',
    avatar: 'url-to-your-profile-image', // Default avatar URL
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    setAvatarFile(file);
  };

  const handleFieldChange = (field, value) => {
    setProfileData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSaveChanges = () => {
    // Handle saving changes, including avatar upload, to your backend
    // For now, just log the changes to the console
    console.log('Saving changes:', profileData, 'Avatar File:', avatarFile);
    // Reset avatar file state after saving changes
    setAvatarFile(null);
    setIsEditing(false);
  };

  return (
    <ProtectedPage>
      <Box p={4} borderWidth="1px" borderRadius="lg">
        <Stack spacing={4} align="center">
        <Link
    onClick={() => isEditing && document.getElementById('avatar-input').click()} // Trigger file input click
  >
    <Avatar
      size="xl"
      name={profileData.name}
      src={avatarFile ? URL.createObjectURL(avatarFile) : profileData.avatar}
      cursor={isEditing ? 'pointer' : 'default'} // Add cursor pointer for better UX when editing
    />
  </Link>
  {isEditing && (
    <Input
      type="file"
      id="avatar-input"
      style={{ display: 'none' }}
      onChange={handleAvatarChange}
      accept="image/*"
    />
  )}
          
          <Heading size="lg" color="white">
            <Editable
              defaultValue={profileData.name}
              isPreviewFocusable={!isEditing}
              onSubmit={(value) => handleFieldChange('name', value)}
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Heading>
          <Text fontSize="md" color="gray.500">
            <Editable
              defaultValue={profileData.bio}
              isPreviewFocusable={!isEditing}
              onSubmit={(value) => handleFieldChange('bio', value)}
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Text>
          <Text mb={8} fontSize="xl" fontWeight="bold" color="white">
            <Editable
              defaultValue={profileData.motto}
              isPreviewFocusable={!isEditing}
              onSubmit={(value) => handleFieldChange('motto', value)}
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Text>

          <Text mb={3} color="white">
            Nickname:
            <Editable
              defaultValue={profileData.nickname}
              isPreviewFocusable={!isEditing}
              onSubmit={(value) => handleFieldChange('nickname', value)}
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Text>
          <Text mb={3} color="white">
            Age:
            <Editable
              defaultValue={profileData.age.toString()}
              isPreviewFocusable={!isEditing}
              onSubmit={(value) => handleFieldChange('age', parseInt(value, 10))}
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Text>
          <Text mb={3} color="white">
            Birthplace:
            <Editable
              defaultValue={profileData.birthplace}
              isPreviewFocusable={!isEditing}
              onSubmit={(value) => handleFieldChange('birthplace', value)}
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Text>
          <Text mb={3} color="white">
            Occupation:
            <Editable
              defaultValue={profileData.occupation}
              isPreviewFocusable={!isEditing}
              onSubmit={(value) => handleFieldChange('occupation', value)}
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Text>

          <Button colorScheme="purple" onClick={isEditing ? handleSaveChanges : handleEditClick}>
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </Button>

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
