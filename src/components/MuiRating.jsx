import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const MuiRating = () => {
  const [value, setValue] = useState(null);
  const [count, setCount] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue !== null) {
      // Update the count when the rating value changes (not null)
      setCount((prevCount) => prevCount + 1);
    }
  };

  console.log(value);
  console.log(count);

  return (
    <Stack spacing={1}>
      <Rating value={value} onChange={handleChange} />
      
    </Stack>
  );
};

export default MuiRating;
