import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import StorageIcon from '@mui/icons-material/Storage';
import { Box } from '@mui/material';
import PhysicalSchemaDailog from './PhysicalSchemaDailog';

export default function PhysicalSchemaCard() {

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('Dione');

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = (newValue) => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/physical-schema');
  };
  return (
    <>
      <PhysicalSchemaDailog
        id="ringtone-menu"
        keepMounted
        open={open}
        onClose={handleClose}
        value={value}
      />
      <Card sx={{ display: 'flex', maxWidth: 400 }} onClick={handleClickListItem}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent>
            <StorageIcon></StorageIcon>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              application-ratings
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleClick}>PII</Button>
            <Button size="small" onClick={handleClick}>SourceSystem</Button>
          </CardActions>
        </Box>
      </Card>
    </>
  );
}