import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Checkbox, Divider, FormControlLabel, Grid, IconButton, Typography } from '@mui/material';
import PhysicalSchemaTable from './PhysicalSchemaTable';
import StorageIcon from '@mui/icons-material/Storage';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

export default function PhysicalSchemaDailog(props) {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef(null);

  let closeImg = { cursor: 'pointer', float: 'right', marginTop: '5px', width: '20px' };

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    // if (radioGroupRef.current != null) {
    //   radioGroupRef.current.focus();
    // }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleSelectAllClick = (event) => {
    // if (event.target.checked) {
    //   const newSelected = rows.map((n) => n.id);
    //   setSelected(newSelected);
    //   return;
    // }
    // setSelected([]);
  };

  const handleOk = () => {
    onClose(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '100%' }, backgroundColor: '#8080802e' }}
      maxWidth="lg"
      TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      <Box sx={
        {
          display: 'flex',
          justifyContent: 'end',
          padding: '10px',
          backgroundColor: '#8080802e'
        }
      }>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleCancel}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent sx={{ padding: '10px 30px 24px 40px', backgroundColor: '#8080802e' }}>
        <Box sx={
          {
            display: 'flex',
            justifyContent: 'flex-start',
            padding: '10px'
          }
        }>
          <StorageIcon></StorageIcon>
          <DialogTitle>
            <Typography>application ratings </Typography>
          </DialogTitle>
        </Box>

        <Divider></Divider>
        <Grid container 
                  direction= 'row'
                  justifyContent="space-between"
                  alignItems="center"
        sx={{
          // backgroundColor: '#ffffffb5',
          borderRadius: 2,
          width: '100%',
          margin: '0px',
        }}>
          <Grid item xs={3} lg={3} md={3} sx={
            {
              backgroundColor: '#ffffffb5',
              borderRadius: 2,
              margin: '10px 0px 0px 0px',
              padding: '25px'
            }
          }>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around'
            }}><StorageIcon></StorageIcon> <Typography>application ratings </Typography></div>
            
            <small style={{
              marginLeft: '4px'
            }}>wrrrr </small>
          </Grid>
          <Grid item xs={3} lg={3} md={3} sx={
            {
              backgroundColor: '#ffffffb5',
              borderRadius: 2,
              margin: '10px 0px 0px 0px',
              padding: '25px'
            }
          }>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around'
            }}><StorageIcon></StorageIcon> <Typography>application ratings </Typography></div>
            
            <small style={{
              marginLeft: '4px'
            }}>wrrrr </small>
          </Grid>
          <Grid item xs={3} lg={3} md={3} sx={
            {
              backgroundColor: '#ffffffb5',
              borderRadius: 2,
              margin: '10px 0px 0px 0px',
              padding: '25px'
            }
          }>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around'
            }}><StorageIcon></StorageIcon> <Typography>application ratings </Typography></div>
            
            <small style={{
              marginLeft: '4px'
            }}>wrrrr </small>
          </Grid>
          <Grid item xs={3} lg={2.5} md={3} sx={
            {
              backgroundColor: '#ffffffb5',
              borderRadius: 2,
              margin: '10px 0px 0px 0px',
              padding: '25px'
            }
          }>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around'
            }}><StorageIcon></StorageIcon> <Typography>application ratings </Typography></div>
            
            <small style={{
              marginLeft: '4px'
            }}>wrrrr </small>
          </Grid>
        </Grid>


        <PhysicalSchemaTable />
      </DialogContent>
      <DialogActions sx={{
        justifyContent: 'space-between',
        padding: '10px 30px 24px 40px',
        backgroundColor: '#8080802e'
      }}>
        <FormControlLabel control={<Checkbox color="primary"
          // indeterminate={numSelected > 0 && numSelected < rowCount}
          // checked={rowCount > 0 && numSelected === rowCount}
          checkedIcon={<CheckBoxOutlinedIcon />}
          onChange={handleSelectAllClick}
          inputProps={{
            'aria-label': 'Select all',
          }} />} label="Select All">
        </FormControlLabel>
        <Button onClick={handleOk} sx={{
          backgroundColor: 'red',
          borderRadius: '0px',
          color: 'white',
          '&:hover': {
            backgroundColor: '#fff',
            color: '#3c52b2',
          },
        }}>Add to cart</Button>
      </DialogActions>
    </Dialog>
  );
}

PhysicalSchemaDailog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};