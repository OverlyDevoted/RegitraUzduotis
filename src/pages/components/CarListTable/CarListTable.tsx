import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import CarListTableItem from './components/CarListTableItem';

const CarListTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Transporto priemonių lentelė">
        <TableHead>
          <TableRow>
            <TableCell>Valstybinis numeris</TableCell>
            <TableCell>Tipas</TableCell>
            <TableCell>Veiksmai</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <CarListTableItem
            typeName="Lengvasis automobilis"
            registrationNumber="AAA000"
            onDelete={() => console.log('id')}
            onView={() => console.log('open dialog')}
          />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CarListTable;
