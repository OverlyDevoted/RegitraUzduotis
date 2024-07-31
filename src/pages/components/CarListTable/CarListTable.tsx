import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { NamedBaseCars } from '@/pages/types/car.types';
import CarListTableEmpty from './components/CarListTableEmpty/CarListTableEmpty';
import CarListTableItem from './components/CarListTableItem/CarListTableItem';
import { getEmptyTableType } from './utils/getEmptyTableType';

interface CarListTableProps {
  cars: NamedBaseCars | undefined;
  isLoading: boolean;
}

const CarListTable = ({ cars, isLoading = true }: CarListTableProps) => {
  const emptyTableType = getEmptyTableType(cars?.length, isLoading);

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
            {cars ? (
              cars.map((car) => {
                return (
                  <CarListTableItem
                    key={car.id}
                    typeName={car.typeName}
                    registrationNumber={car.registrationNumber}
                    onDelete={() => {
                      console.log(`Delete ${car.id}`);
                    }}
                    onView={() => {
                      console.log(`view ${car.id}`);
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
