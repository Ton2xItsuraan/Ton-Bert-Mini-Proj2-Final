import { Avatar, Box, Button, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Actions from './Actions'
import Profile from '../Pages/Profile'

function UserPost({ postImg, postTitle, likes, replies }) {
    const [liked, setLiked] = useState(() => {
      // Retrieve the liked state from localStorage on component mount
      const storedLiked = localStorage.getItem(`liked-${postTitle}`);
      return storedLiked ? JSON.parse(storedLiked) : false;
    });
  
    const handleMenuClick = (event) => {
      // Prevent the click event from propagating to the parent Link element
      event.stopPropagation();
    };
  
    // Save the liked state to localStorage whenever it changes
    useEffect(() => {
      localStorage.setItem(`liked-${postTitle}`, JSON.stringify(liked));
    }, [liked, postTitle]);

  return (
    
        <Flex gap={3} mb={4} py={5}>
            <Flex flexDirection={'column'} alignItems={'center'}>
                <Avatar size={'md'} name='Mark Zuckerberg' src='/zuck-avatar.png'/>
                <Box w={'1px'} h={'full'} bg={'gray.light'} my={2}></Box>
                <Box position={'relative'} w={'full'} >
                    <Avatar
                        size={'xs'}
                        name='John Doe'
                        src='https://bit.ly/dan-abramov'
                        position={'absolute'}
                        top={0}
                        left={'15px'}
                        padding={'2px'}
                    />
                    <Avatar
                        size={'xs'}
                        name='John Doe'
                        src='https://bit.ly/tioluwani-kolawole'
                        position={'absolute'}
                        bottom={0}
                        right={'-5px'}
                        padding={'2px'}
                    />
                    <Avatar
                        size={'xs'}
                        name='John Doe'
                        src='https://bit.ly/kent-c-dodds'
                        position={'absolute'}
                        bottom={0}
                        left={'4px'}
                        padding={'2px'}
                    />
                </Box>
            </Flex>
            <Flex flex={1} flexDirection={'column'} gap={2}>
                <Flex justifyContent={'space-between'} width={'full'}>
                    <Link to={'/profile'}>
                        <Flex w={'full'} alignItems={'center'}>
                            <Text fontSize={'sm'} fontWeight={'bold'}>markzuckerberg</Text>
                            <Image src='/verified.png' w={4} ml={1}/>
                        </Flex>
                    </Link>
                        <div>
                        <Flex gap={4} alignItems={'center'}>
                            <Text fontStyle={'sm'} color={'gray.light'}>1d</Text>
                         <Menu>
                         <MenuButton as={Button} onClick={handleMenuClick}>
                            <BsThreeDots/>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                        </Menu> 
                          
                            
                        </Flex>
                        </div>
                </Flex>
                <Link to={'/markzuckerberg/post/1'}>
                <Text fontSize={'sm'}>{postTitle}</Text>
                {postImg && (
                <Box borderRadius={6}
                    overflow={'hidden'}
                    border={'1px solid'}
                    borderColor={'gray.light'}
                >
                    <Image src={postImg} w={'full'} ></Image>
                </Box>
                )}
                <Flex gap={3} my={1}>
                    <Actions liked={liked} setLiked={setLiked}/>
                </Flex>
                <Flex gap={2} alignItems={'center'}>
                    <Text color={'gray.light'} fontSize={'sm'}>{replies} replies</Text>
                    <Box w={0.5} h={0.5} borderRadius={'full'} bg={'gray.light'}></Box>
                    <Text color={'gray.light'} fontSize={'sm'}>{likes + (liked? 1:0)} likes</Text>
                </Flex>
                </Link>
            </Flex>
        </Flex>
        
  )
}

export default UserPost;