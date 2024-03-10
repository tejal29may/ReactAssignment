// import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function RatingSize(props) {
  return (
    <Stack spacing={1}>
     
      <Rating name="size-medium" defaultValue={props.rating}  precision={0.5} />
   
    </Stack>
  );
}