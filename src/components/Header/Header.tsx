import { AppBar, Box, Toolbar } from '@mui/material';
import RegitraLogo from '@assets/images/regitra.png';

const Header = () => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Box
          component={'img'}
          alt="Regitros logotipas ant kurio užrašyta - Regitra"
          src={RegitraLogo}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
