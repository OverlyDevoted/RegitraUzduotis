import { Box, Container } from '@mui/material';
import { CarListHeader } from './components/CarListHeader';
import CarListTable from './components/CarListTable/CarListTable';

const CarListPage = () => {
  return (
    <>
      <Container sx={{ py: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <CarListHeader />
          <CarListTable />
        </Box>
      </Container>
    </>
  );
};

export default CarListPage;
