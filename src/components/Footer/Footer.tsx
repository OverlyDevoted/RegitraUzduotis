import { Container, Paper, Typography } from '@mui/material';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Container component={'footer'} maxWidth={false} disableGutters>
      <Paper sx={{ textAlign: 'center', padding: 1 }} elevation={4}>
        <Typography>© {year} Robert Dulko - All Rights Reserved 🚀</Typography>
      </Paper>
    </Container>
  );
};

export default Footer;
