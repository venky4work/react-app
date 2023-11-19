import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
const Search = styled('div')(({ theme }) => ({
    // position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#ffffffb5',
    display: "flex",
    alignItems: "center",
    justifyContent:'space-between',
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

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    // position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(2)})`,
        transition: theme.transitions.create('width'),
        width: '70%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchBar() {
    return (
        <Search>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>

        </Search>
    );
}
