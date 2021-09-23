import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';

function Buttons({ loading }) {
  return (
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
  );
}

export default Buttons;
