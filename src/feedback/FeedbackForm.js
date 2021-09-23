import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import React, { useState, useReducer } from 'react';
import DialogSubmit from './DialogSubmit';
import TopDecor from './top_decoration.png';
import Inputs from './Inputs';

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
        mt: 2,
        borderRadius: '7px',
      }}>
      <Image src={TopDecor} />
      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{
          p: 1,
        }}>
        <Inputs
          section={section}
          setSection={setSection}
          feedback={feedback}
          setFeedback={setFeedback}
          loading={loading}
          setLoading={setLoading}
        />
      </Box>
      <DialogSubmit open={open} setOpen={setOpen} />
    </Box>
  );
}

export default FeedbackForm;
