import { Backdrop, Box, CircularProgress, Container } from '@mui/material';
import { CarListHeader } from './components/CarListHeader';
import CarListTable from './components/CarListTable/CarListTable';
import { useFetchData } from '@/hooks/useFetchData';
import { BaseCars, NamedBaseCar, NamedBaseCars } from './types/car.types';
import { useCategoryMap } from '@/hooks/useCategoryMap';
import { useMemo, useState } from 'react';
import DetailedCarDialog from './components/DetailedCarDialog/DetailedCarDialog';
import CarFilterSelect from './components/CarFilterSelect/CarFilterSelect';

const CarListPage = () => {
  const [inspectedCar, setInspectedCar] = useState<NamedBaseCar>();
  const [selectedType, setSelectedType] = useState<string>('');
  const {
    data: baseCarData,
    isLoading: isCarDataLoading,
    setData: setBaseCarData,
  } = useFetchData<BaseCars>('http://localhost:3000/baseCars');

  const { isCategoryMapLoading, categoryMap, categories } = useCategoryMap(
    'http://localhost:3000/categories'
  );

  const isLoading = isCarDataLoading || isCategoryMapLoading;

  const namedBaseCars = useMemo(() => {
    if (!(baseCarData || categoryMap)) return;
    const filteredCarData = selectedType
      ? baseCarData?.filter((car) => car.code === selectedType)
      : baseCarData;
    return filteredCarData?.map((baseCar) => {
      return {
        id: baseCar.id,
        registrationNumber: baseCar.registrationNumber,
        typeName: categoryMap?.get(baseCar.code),
      } as NamedBaseCar;
    }) as NamedBaseCars;
  }, [categoryMap, baseCarData, selectedType]);

  return (
    <>
      <Container sx={{ py: 2, flex: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <CarListHeader />
          <CarFilterSelect
            label="Tipas"
            categories={categories ? categories : []}
            id="car-type-select"
            labelId="car-type-select-label"
            value={selectedType}
            onChange={(e) => {
              setSelectedType(e.target.value as string);
            }}
          />
          <CarListTable
            cars={namedBaseCars}
            isLoading={isCarDataLoading}
            onCarInspect={(car) => setInspectedCar(car)}
            onCarRemove={(id: string) => {
              setBaseCarData(baseCarData?.filter((baseCar) => baseCar.id !== id) as BaseCars);
            }}
          />
        </Box>
      </Container>

      {inspectedCar && (
        <DetailedCarDialog
          car={inspectedCar}
          onClose={() => {
            setInspectedCar(undefined);
          }}
        />
      )}

      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default CarListPage;
