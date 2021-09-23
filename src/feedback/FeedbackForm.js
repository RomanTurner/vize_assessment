import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import React, { useState, useReducer } from 'react';
import Button from '@mui/material/Button';
import DialogSubmit from './DialogSubmit';
import TopDecor from './top_decoration.png';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
const Image = styled('img')({
  height: '100px',
  width: '100%',
});

function FeedbackForm() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [section, setSection] = useState('');
  const [feedback, setFeedback] = useState('');

  //  const initialState = {
  //    status: 'idle',
  //    error: null,
  //    data: [],
  //  };

  //  const [state, dispatch] = useReducer((state, action) => {
  //    switch (action.type) {
  //      case 'PENDING':
  //        return { ...initialState, status: 'pending' };
  //      case 'FULFILLED':
  //        return { ...initialState, status: 'fulfilled', data: action.payload };
  //      case 'REJECTED':
  //        return { ...initialState, status: 'error', error: action.payload };
  //      default:
  //        return state;
  //    }
  //  }, initialState);

  // const { status, error, data } = state;

  const handleChange = (event, key) => {
    const config = {
      section: (el) => setSection(el),
      feedback: (el) => setFeedback(el),
    };
    config[event.target.id](event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setOpen(true);
    //*Mocking the behaviour of a loading state for the button.
    setTimeout(function () {
      setLoading(false);
    }, 4000);

    // const url = 'http://localhost:3000/feedback';
    // const bodyObj = {
    //   section,
    //   feedback,
    // };
    // const configObj = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(bodyObj),
    // };

    //  const postData = async () => {
    //    dispatch({ type: 'PENDING' });
    //    try {
    //      const response = await fetch(url, configObj);
    //      const data = await response.json();
    //      dispatch({ type: 'FULFILLED', payload: data });
    //    } catch (error) {
    //      dispatch({ type: 'REJECTED', payload: error.message });
    //      console.error('Error', error);
    //    }
    //  };

    //  postData();
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 1,
        mt: 3,
        borderRadius: '7px',
      }}>
      <Image src={TopDecor} />
      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{
          p: 1,
        }}>
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
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              variant='outlined'
              size='large'
              sx={{ borderRadius: '20px', width: '150px' }}>
              Back
            </Button>
            <LoadingButton
              sx={{ borderRadius: '20px', fontWeight: 600, width: '150px' }}
              type='submit'
              size='large'
              loading={loading}
              loadingPosition='start'
              variant='contained'>
              Submit
            </LoadingButton>
          </Stack>
        </Stack>
      </Box>
      <DialogSubmit open={open} setOpen={setOpen} />
    </Box>
  );
}

export default FeedbackForm;
