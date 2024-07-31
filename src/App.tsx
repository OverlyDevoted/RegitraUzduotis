import CarListPage from '@pages/CarListPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Header />
      <CarListPage />
      <Footer />
    </Box>
  );
}

export default App;
