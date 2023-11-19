import { Grid, Typography } from "@mui/material";
import Header from "../components/Header";
import qr from "../assets/qr.jpg";
import "./Home.css";
import SearchBar from "../components/SearchBar";
import CustomTabs from "../components/CustomTabs";
import HomeCard from "./HomeCard";
import React from "react";

export default function Home() {
    const tabsData= ["Party", "Accounts"];
    return (
        <React.Fragment>
            <Header></Header>
            <Grid container spacing={2} sx={{
                backgroundColor: '#ffffffb5',
                borderRadius: 3,
                marginTop: 0.5,
                marginLeft: 8,
                width: '90%',
            }}>
                <Grid item xs={12} lg={6} md={6}>
                    <div className="css1">
                        <Typography variant="h2" sx={{
                            width: '100%',
                            color: 'red',
                            fontWeight: 300,
                            fontSize: '1.75rem',
                        }}>
                            Welcome back Winnie Wong
                        </Typography>
                    </div>
                    <div className="css2">
                        <Typography variant="h6" className="cssFont2">
                            testdata featues
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} lg={6} md={6}>
                    <img src={qr} className="imgCss1" alt="dashboard"></img>
                </Grid>

            </Grid>
            <Grid container spacing={2} sx={{
                marginTop: 0.5,
                marginLeft: 8,
                width: '90%',
            }}>
                <Grid item xs={12} lg={6} md={6}>
                    <Typography variant="h6" className="cssFont2">
                        WholeSale Data Asset Domains
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={6} md={6}>
                    <SearchBar></SearchBar>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{
                marginTop: 0.5,
                marginLeft: 8,
                width: '90%',
            }}>
                <Grid item xs={12} lg={12} md={12} sx={{
                    backgroundColor: '#ffffffb5',
                    borderRadius: '5px',
                }}>
                    <CustomTabs data={tabsData}></CustomTabs>
                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{
                marginTop: 1,
                marginLeft: 8,
                width: '90%',
            }}>
                <Grid item xs={12} lg={12} md={12} sx={{
                    borderRadius: '5px',
                }}>
                    <HomeCard></HomeCard>
                </Grid>
            </Grid>
        </React.Fragment>

    );
}