import { Backdrop, Box, CircularProgress, Container } from '@mui/material';
import { CarListHeader } from './components/CarListHeader';
import CarListTable from './components/CarListTable/CarListTable';
import { useFetchData } from '@/hooks/useFetchData';
import { Cars } from './types/carType';

const CarListPage = () => {
  const { data: carData, isLoading } = useFetchData<Cars>('http://localhost:3000/cars');

  return (
    <>
      <Container sx={{ py: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <CarListHeader />
          <CarListTable cars={carData} />
        </Box>
      </Container>

      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default CarListPage;
