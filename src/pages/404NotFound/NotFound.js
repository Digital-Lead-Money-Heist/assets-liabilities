import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const NotFound = () => {
  return (
    <div>
      <h1>Error 404 </h1>
      <h2> YOUR PAGE IS NOT FOUND</h2>
      <h4> CLICK ON ANY BUTTONS TO GET TO YOUR DESTINATION</h4>

      <Stack direction="row" spacing={2}>
        <Button variant="contained" href="admin">
          Admin
        </Button>
        <Button variant="contained" href="declarant">
          Declarant
        </Button>
        <Button variant="contained" href="witness">
          Witness
        </Button>
      </Stack>
    </div>
  );
};

export default NotFound;
