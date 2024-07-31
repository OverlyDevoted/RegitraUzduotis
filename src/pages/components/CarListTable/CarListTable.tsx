import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { NamedBaseCar, NamedBaseCars } from '@/pages/types/car.types';
import CarListTableEmpty from './components/CarListTableEmpty/CarListTableEmpty';
import CarListTableItem from './components/CarListTableItem/CarListTableItem';
import { getEmptyTableType } from './utils/getEmptyTableType';
import axios from 'axios';
import { useMemo } from 'react';

interface CarListTableProps {
  cars: NamedBaseCars | undefined;
  isLoading: boolean;
  onCarInspect: (car: NamedBaseCar) => void;
  onCarRemove: (id: string) => void;
}

const CarListTable = ({ cars, isLoading = true, onCarInspect, onCarRemove }: CarListTableProps) => {
  const emptyTableType = useMemo(
    () => getEmptyTableType(cars?.length, isLoading),
    [cars, isLoading]
  );

  return (
    <Paper>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table aria-label="Transporto priemonių lentelė" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Valstybinis numeris</TableCell>
              <TableCell>Tipas</TableCell>
              <TableCell>Veiksmai</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cars?.length ? (
              cars.map((car) => {
                return (
                  <CarListTableItem
                    key={car.id}
                    typeName={car.typeName}
                    registrationNumber={car.registrationNumber}
                    onDelete={() => {
                      axios.delete(`http://localhost:3000/baseCars/${car.id}`);
                      axios.delete(`http://localhost:3000/detailedCars/${car.id}`);
                      onCarRemove(car.id);
                    }}
                    onView={() => {
                      onCarInspect(car);
                    }}
                  />
                );
              })
            ) : (
              <CarListTableEmpty emptyCellType={emptyTableType} />
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default CarListTable;
