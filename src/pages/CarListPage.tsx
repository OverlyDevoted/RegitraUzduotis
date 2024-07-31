import { Backdrop, Box, CircularProgress, Container } from '@mui/material';
import { CarListHeader } from './components/CarListHeader';
import CarListTable from './components/CarListTable/CarListTable';
import { useFetchData } from '@/hooks/useFetchData';
import { BaseCars, NamedBaseCar, NamedBaseCars } from './types/car.types';
import { useCategoryMap } from '@/hooks/useCategoryMap';
import { useMemo } from 'react';

const CarListPage = () => {
  const { data: baseCarData, isLoading: isCarDataLoading } = useFetchData<BaseCars>(
    'http://localhost:3000/baseCars'
  );
  const { isCategoryMapLoading, categoryMap } = useCategoryMap('http://localhost:3000/categories');

  const isLoading = isCarDataLoading || isCategoryMapLoading;
  const namedBaseCars = useMemo(() => {
    if (!(baseCarData || categoryMap)) return;
    return baseCarData?.map((baseCar) => {
      return {
        id: baseCar.id,
        registrationNumber: baseCar.registrationNumber,
        typeName: categoryMap?.get(baseCar.code),
      } as NamedBaseCar;
    }) as NamedBaseCars;
  }, [categoryMap, baseCarData]);

  return (
    <>
      <Container sx={{ py: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <CarListHeader />
          <CarListTable cars={namedBaseCars} isLoading={isCarDataLoading} />
        </Box>
      </Container>

      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default CarListPage;
