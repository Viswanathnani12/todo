import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
// import Button from '@mui/material/Button';
import { Typography,TextField,FormControl,InputLabel,Select, MenuItem } from '@mui/material';

// Separate form components
const InfoForm = () => {
  return (
    <>
      <form>
      <Typography variant="body2" fontSize="xs">
        Project Name:
      </Typography>
      <div className='h-2 '></div>
      <TextField
        label="Enter Project Name"
        variant="outlined"
        size="small"
        fullWidth
      />
    </form>
    </>
    
  );
};

const ConfirmationForm = () => {
  return (
    <form >
      <p>Name of the Task</p>
      <div className='h-1'></div>
      <TextField
        label="Enter Task Name"
        variant="outlined"
        size="small"
        fullWidth
      />
      <div className='h-8'></div>
      <div className='flex justify-between'>
      <p className='text-sm'>Start Date</p>
      <p className='text-sm mr-48'>Deadline</p>
      </div>
      <div className='h-2'></div>
      <div className='flex justify-between'>
      <TextField
        variant="outlined"
        size="small"
        type='date'
        sx={{width:"250px"}}
      />
      <TextField
        variant="outlined"
        size="small"
        type='date'
        sx={{width:"250px"}}
      />
      </div>
      
      <div className='h-8'></div>
      <p className='text-sm'>Status</p>
      <div className='h-2'></div>
      <FormControl fullWidth>
        <InputLabel id="demo-multiple-name-label">To Do</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
        >
          <MenuItem>To Do</MenuItem>
          <MenuItem>In Progress</MenuItem>
          <MenuItem>In Review</MenuItem>
          <MenuItem>Completion</MenuItem>
        </Select>
      </FormControl>
      </form>
  );
};

// eslint-disable-next-line react/prop-types
const Modal = ({ dialogType, onClose }) => {
  const getTitle = () => {
    switch (dialogType) {
      case 'info':
        return <p className='text-md border-b-2 w-full'>Add Project</p>;
      case 'confirmation':
        return <p className='text-md border-b-2 w-full font-thin'>Add new Task</p>;
      default:
        return 'Default Dialog';
    }
  };

  const getForm = () => {
    switch (dialogType) {
      case 'info':
        return <InfoForm />;
      case 'confirmation':
        return <ConfirmationForm />;
      default:
        return null;
    }
  };

  const handleConfirm = () => {
    // Add your logic here for confirmation action
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth BackdropProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0.1)' } }} sx={{}} PaperProps={{ elevation: 0 }}>
      <DialogTitle>{getTitle()}</DialogTitle>
      <DialogContent>
        {getForm()}
      </DialogContent>
      <DialogActions>
        {dialogType === 'confirmation' && (
          <button className='w-16 rounded-lg bg-[#EBEEFC] text-center h-8' onClick={onClose}>
            <p className='text-[#1B72C2]'>Cancel</p>
          </button>
        )}
        <button className='w-16 rounded-lg bg-[#3659E2] text-center h-8' onClick={handleConfirm}>
            <p className='text-white'>Add</p>
          </button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
