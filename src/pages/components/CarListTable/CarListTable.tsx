import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Cars } from '@/pages/types/carType';
import CarListTableEmpty from './components/CarListTableEmpty/CarListTableEmpty';
import CarListTableItem from './components/CarListTableItem/CarListTableItem';

interface CarListTableProps {
  cars: Cars | null;
}

const CarListTable = ({ cars }: CarListTableProps) => {
  return (
    <Paper>
      <TableContainer>
        <Table aria-label="Transporto priemonių lentelė">
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
                    typeName={car.code}
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
              <CarListTableEmpty emptyCellType="loading" />
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default CarListTable;
