import { Grid, Typography } from "@mui/material";
import qr from "../assets/qr.jpg";
import "./PhysicalSchema.css"
import SearchBar from "../components/SearchBar";
import CustomTabs from "../components/CustomTabs";
import HomeCard from "./HomeCard";
import SubHeader from "../components/SubHeader";

export default function PhysicalSchema() {
    const tabsData= ["Party", "Accounts"];
    return (
        <>
            <SubHeader></SubHeader>
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
                            Welcome to Phyiscal Schema
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
                    <SearchBar></SearchBar>
                </Grid>
                <Grid item xs={12} lg={6} md={6}>
                    <Typography variant="h6" className="cssFont2">
                        Data
                    </Typography>
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
        </>

    );
}