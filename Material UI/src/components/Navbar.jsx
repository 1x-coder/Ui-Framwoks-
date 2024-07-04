import { AppBar, Typography, Button, Toolbar,  } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
 import LogoutIcon from '@mui/icons-material/Logout';


const Navbar = () => {
  return (
    <>
       <AppBar  sx={{backgroundColor:"black"}} >
        <Toolbar>
          <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
            Abdullah
          </Typography>
          <Button variant="outlined" color="inherit" startIcon= {<LoginIcon/>} sx={{ margin:'10px'}}>
            Login
          </Button>
          <Button variant="outlined" color="inherit" endIcon={<LogoutIcon/>}>
            Log out
          </Button>
        </Toolbar>
      </AppBar> 

    </>

  );
};

export default Navbar;
