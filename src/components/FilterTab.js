import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
const Filters = styled('div')(({ theme }) => ({
    // position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#ffffffb5',
    display: "flex",
    alignItems: "center",
    justifyContent: 'start',
    '&:hover': {
        backgroundColor: '#ffffffb5',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: '100%',
    },
}));

const FiltersWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(1, 1, 1, 1),
    height: '100%',
    // position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}));


const FontWrapper = styled('p')(({ theme }) => ({
    fontWeight: 100,
    fontSize: 10,
    lineHeight: 1,
    // letterSpacing: 1,
}));

export default function FilterTab() {
    return (
        <Filters>
            <FiltersWrapper>
                <SearchIcon />
                <FontWrapper>Business Line</FontWrapper>
            </FiltersWrapper>
            <FiltersWrapper>
                <SearchIcon />
                <Typography>Source Platform</Typography>
            </FiltersWrapper>
            <FiltersWrapper>
                <SearchIcon />
                <Typography>Source Platform</Typography>
            </FiltersWrapper>
            <FiltersWrapper>
                <SearchIcon />
                <Typography>Source Platform</Typography>
            </FiltersWrapper>

        </Filters>
    );
}