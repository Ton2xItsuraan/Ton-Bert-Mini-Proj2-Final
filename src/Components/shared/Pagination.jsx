import { Button } from '@chakra-ui/react';
import React from 'react';

const Pagination = () => {
  // Hardcoded values for testing
  const pageNumber = 2; // Set the page number you want to test
  const isNext = true; // Set the isNext value you want to test

  const handleNavigation = () => {
    let nextPageNumber = pageNumber;

    if (type === "prev") {
      nextPageNumber = Math.max(1, pageNumber - 1);
    } else if (type === "next") {
      nextPageNumber = pageNumber + 1;
    }

    console.log(`Navigate to page ${nextPageNumber}`);
    // Replace the console.log with the logic you want to test
  };

  return (
    <div className='pagination'>
      <Button
        onClick={() => handleNavigation("prev")}
        disabled={pageNumber === 1}
        className='!text-small-regular text-light-2'
      >
        Prev
      </Button>
      <p className='text-small-semibold text-light-1'>{pageNumber}</p>
      <Button
        onClick={() => handleNavigation("next")}
        disabled={!isNext}
        className='!text-small-regular text-light-2'
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
