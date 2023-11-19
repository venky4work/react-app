import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import StorageIcon from '@mui/icons-material/Storage';
import { Box, Grid } from '@mui/material';
import PhysicalSchemaDailog from './PhysicalSchemaDailog';
import styled from '@emotion/styled';

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

  const CardFontWrapper = styled('p')(({ theme }) => ({
    fontWeight: 100,
    fontSize: 12,
    lineHeight: 1,
    padding: '0px 0px 0px 10px',
    // letterSpacing: 1,
  }));

  const CardTitleFontWrapper = styled('p')(({ theme }) => ({
    fontWeight: 200,
    fontSize: 14,
    lineHeight: 1.5,
    // letterSpacing: 1,
  }));

  const ContentWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(1, 1, 1, 1),
    height: '100%',
    // position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }));

  const FontButtontWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(1, 1, 1, 1),
    height: '100%',
    // width: 10,
    // position: 'absolute',
    backgroundColor: 'grey',
    borderRadius: 3,
    pointerEvents: 'none',
  }));


  return (
    <>
      <PhysicalSchemaDailog
        id="ringtone-menu"
        keepMounted
        open={open}
        onClose={handleClose}
        value={value}
      />
      <Card sx={{ display: 'flex', maxWidth: 400, overflow: 'unset', height: 300 }} onClick={handleClickListItem}>
        {/* <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
        </Box> */}
        <Grid container spacing={1}>
          <Grid item xs={3} lg={3} md={3}>
            <StorageIcon></StorageIcon>
          </Grid>
          <Grid item xs={9} lg={9} md={9}>
            <Grid container spacing={1}>
              <Grid item xs={12} lg={12} md={12}>
                <CardTitleFontWrapper>application-ratings</CardTitleFontWrapper>
              </Grid>
              <Grid item xs={6} lg={6} md={6}>
                <ContentWrapper>
                  <StorageIcon></StorageIcon>
                  <CardFontWrapper>WholeSale</CardFontWrapper>
                </ContentWrapper>

              </Grid>
              <Grid item xs={6} lg={6} md={6}>
                <ContentWrapper>
                  <StorageIcon></StorageIcon>
                  <CardFontWrapper>Data-visualisation</CardFontWrapper>
                </ContentWrapper>
              </Grid>
              <Grid item xs={12} lg={12} md={12}>
                <ContentWrapper>
                  <StorageIcon></StorageIcon>
                  <CardFontWrapper>HDP | gid_gsid_0122</CardFontWrapper>
                </ContentWrapper>
              </Grid>
              <Grid item xs={6} lg={6} md={6}>
                <FontButtontWrapper>
                    PII
                </FontButtontWrapper>

              </Grid>
              <Grid item xs={6} lg={6} md={6}>
              <FontButtontWrapper>
                    SourceSystem
                </FontButtontWrapper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}