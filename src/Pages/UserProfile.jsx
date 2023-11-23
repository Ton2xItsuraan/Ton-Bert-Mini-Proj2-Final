import React from 'react';
import { useParams } from 'react-router-dom';
import { wordsWithAvatars } from '../../lib/data';
import { Avatar } from '@chakra-ui/react';

const UserProfile = () => {
 const { name } = useParams();
 const profile = wordsWithAvatars.find((word) => word.word.toLowerCase() === name);

 if (!profile) {
   return <div>Profile not found</div>;
 }

 return (
   <div>
     Hello
     <h1>{profile.word}'s Profile</h1>
     <Avatar src={profile.avatar} alt={`${profile.word} avatar`} />
     {/* Additional profile details can be added here */}
   </div>   
 );
};

export default UserProfile;
