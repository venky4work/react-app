import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import StorageIcon from '@mui/icons-material/Storage';
import { Box } from '@mui/material';

export default function PhysicalSchemaCard() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/physical-schema');
      };
  return (
    <Card sx={{ display: 'flex', maxWidth: 400 }}>
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
  );
}