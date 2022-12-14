import React from 'react'
import CountUp from "react-countup";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Divider,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import OrderTable from "../Components/OrderTable";
export default function DistributorList() {
  return (
    <Paper sx={{minHeight:"100vh",width:"100vw"}}>
        <Navbar/>
        <Grid container> 
          <Grid item xs={2}>
            <Sidebar active={3}/>
          </Grid>
          <Divider />
          <Grid item xs={10} md={7}>
          <Box>
            <Typography
              variant="h3"
              color="primary"
              sx={{
                marginTop: "1rem",
                fontSize: { xs: "36px", md: "56px" },
                textAlign: "left",
              }}
            >
              Distributors
            </Typography>
            <Box sx={{display:"flex",flexWrap:"wrap",width:"100%",alignItems:"flex-start",justifyContent:"flex-start"}}>
            <Paper elevation={5} sx={{display:"flex",flexDirection:"column",width:{xs:"90%",md:"25%"},minHeight:"15vh",marginTop:"2vh",marginRight:"2vw",alignItems:"flex-start",justifyContent:"center",backgroundColor:"success.light"}}>
              <Box sx={{marginLeft:"20px"}}>
              
              <Typography variant="h6" >	&#128176; Total Orders</Typography>
              <Typography variant="h2" ><CountUp start={0} duration={1} end={6546345} ></CountUp></Typography>
              </Box>
            </Paper>
            <Paper elevation={5} sx={{display:"flex",flexDirection:"column",width:{xs:"90%",md:"25%"},minHeight:"15vh",marginTop:"2vh",marginRight:"2vw",alignItems:"flex-start",justifyContent:"center",backgroundColor:"secondary.light"}}>
              <Box sx={{marginLeft:"20px"}}>
              
              <Typography variant="h6" >&#128197; Orders Today</Typography>
              <Typography variant="h2" ><CountUp start={0} duration={1} end={76343} ></CountUp></Typography>
              </Box>
            </Paper>
              <Paper elevation={5} sx={{display:"flex",flexDirection:"column",width:{xs:"90%",md:"25%"},minHeight:"15vh",marginTop:"2vh",marginRight:"2vw",alignItems:"flex-start",justifyContent:"center",backgroundColor:"primary.light"}}>
              <Box sx={{marginLeft:"20px"}}>
              
              <Typography variant="h6" >&#10004; Orders Fulfilled</Typography>
              <Typography variant="h2" ><CountUp start={0} duration={1} end={176} ></CountUp></Typography>
              </Box>
            </Paper>
           
            </Box>
              <Box sx={{marginTop:"2vh",width:{xs:"90%",md:"82%"}}}>
                <OrderTable/>
              </Box>

            
          </Box>
        </Grid>
        <Grid item xs={0} md={3}>
              <Paper elevation={2} sx={{height:"100vh",display:{xs:"none",md:"flex"},position:"sticky",top:"0",right:"0",paddingLeft:"1rem",flexDirection:"column",justifyContent:"flex-start"}}>
                <Typography variant="h4" sx={{margin:"1rem 0"}}>&#127760; Filters</Typography>
                <Box sx={{display:"flex",width:"80%",alignItems:"center",justifyContent:"space-between"}}>
                  <Typography>Sort By</Typography>
                  <Select label="Sort By" value="ascending" onChange={()=>console.log("Hello")} sx={{width:"60%",marginBottom:"1rem"}}>
                    <MenuItem value={10}>Price</MenuItem>
                    <MenuItem value={20}>Quantity</MenuItem>
                    <MenuItem value={20}>Total Cost</MenuItem>
                  </Select>

                </Box>
                <Box sx={{display:"flex",width:"80%",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem"}}>
                  <Typography>Sort Direction</Typography>
                  <Select label="Sort Direction" value="ascending" onChange={()=>console.log("Hello")} sx={{width:"60%"}}>
                    <MenuItem value={10}>Ascending</MenuItem>
                    <MenuItem value={20}>Descending</MenuItem>
                  </Select>
                </Box>
                <Box sx={{display:"flex",flexDirection:"column",width:"80%",alignItems:"flex-start",justifyContent:"space-between",marginBottom:"1rem"}}>
                  <Typography>Price range</Typography>
                  <Box sx={{display:"flex"}}>
                    <TextField label="Lower Bound"  onChange={()=>console.log("Hello")} sx={{width:"60%",margin:"0 1rem"}}/>
                    <TextField label="Upper Bound"  onChange={()=>console.log("Hello")} sx={{width:"60%"}}/>
                  </Box>
                </Box>

                <Box sx={{display:"flex",width:"80%",alignItems:"flex-start",justifyContent:"space-between",marginBottom:"1rem"}}>
                  <Typography>Search by distributor</Typography>
                
                    <TextField label="Distributor Name"  onChange={()=>console.log("Hello")} sx={{width:"60%",margin:"0 1rem"}}/>
               
                </Box>

                <Box sx={{display:"flex",width:"80%",alignItems:"flex-start",justifyContent:"space-between",marginBottom:"1rem"}}>
                  <Typography>Search by wholesaler</Typography>
                 
                    <TextField label="Wholesaler Name"  onChange={()=>console.log("Hello")} sx={{width:"60%",margin:"0 1rem"}}/>
                
                </Box>

                <Box sx={{display:"flex",width:"80%",alignItems:"flex-start",justifyContent:"space-between",marginBottom:"1rem"}}>
                  <Typography>Search by date</Typography>
                  
                    <TextField type="date"  onChange={()=>console.log("Hello")} sx={{width:"60%",margin:"0 1rem"}}/>
                
                </Box>

                <Button variant="contained" sx={{width:"80%"}}><Typography>Apply Filters</Typography></Button>
                
              </Paper>
        </Grid>
        </Grid>
       
    </Paper>
  )
}
