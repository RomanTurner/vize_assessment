import Stack from '@mui/material/Stack';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Buttons from './Buttons'

function Inputs({loading, section, setSection, setFeedback, feedback }) {


  const handleChange = (event, key) => {
    const config = {
      section: (el) => setSection(el),
      feedback: (el) => setFeedback(el),
    };
    config[event.target.id](event.target.value);
  };

  return (
    <Stack
      spacing={2}
      justifyContent='center'
      alignItems='center'
      sx={{ ml: 4, mr: 4, mb: 4 }}>
      <Typography
        component='h1'
        sx={{ fontWeight: 700, fontSize: '30px', color: '#575F6C' }}>
        Feedback
      </Typography>
      <Typography
        component='h1'
        align='left'
        sx={{ fontWeight: 700, fontSize: '18px', color: '#3F4957' }}>
        We're always looking for ways to make VIZE better!
      </Typography>
      <Typography
        component='h1'
        align='left'
        sx={{ fontWeight: 500, fontSize: '18px', color: '#3F4957' }}>
        What Section of VIZE do you have a suggestion for?
      </Typography>
      <TextField
        fullWidth
        defaultValue='Small'
        variant='filled'
        id='section'
        label='Section'
        value={section}
        required
        onChange={(e) => handleChange(e)}
        InputProps={{ disableUnderline: true }}
      />
      <Typography
        align='left'
        component='p'
        sx={{ fontWeight: 500, fontSize: '18px' }}>
        What Can we do better?
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={8}
        defaultValue='feedback'
        variant='filled'
        id='feedback'
        label='Feedback'
        required
        value={feedback}
        onChange={(e) => handleChange(e)}
        InputProps={{ disableUnderline: true }}
      />
      <Buttons loading={loading} />
    </Stack>
  );
}

export default Inputs;
