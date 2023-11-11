import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import AccountProfile from '../Components/forms/AccountProfile';

function Onboarding() {
  const { user } = useUser();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Simulate an async data fetch (replace with actual data fetching)
    const fetchData = async () => {
      try {
        const response = await fetch('your-api-endpoint-here');
        if (response.ok) {
          const data = await response.useUser();
          setUserInfo(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the async function when the component mounts
  }, []);

  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || userInfo?.firstname || "",
    bio: userInfo?.bio || '',
    image: userInfo?.image || user?.imageUrl || '',
  };

  return (
    <main className='mx-auto flex max-w-3xl flex-col justify-start px-10 py-20'>
      <h1 className='head-text'>Onboarding</h1>
      <p className='my-3 text-base-regular text-light-2'>
        Complete your profile now to use Threads
      </p>
      <section className='mt-9 bg-dark-2 p-10'>
        <AccountProfile 
          user={userData}
          btnTitle='Continue'
        />
      </section>
    </main>
  );
}

export default Onboarding;
