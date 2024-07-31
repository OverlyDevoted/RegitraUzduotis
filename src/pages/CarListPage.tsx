import { Container } from '@mui/material';
import { CarListHeader } from './components/CarListHeader';

const CarListPage = () => {
  return (
    <>
      <Container sx={{ py: 1 }}>
        <CarListHeader />
      </Container>
    </>
  );
};

export default CarListPage;
