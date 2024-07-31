import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import CarListTableItem from './components/CarListTableItem';
import { useState } from 'react';
import { rowPerPageOptions } from './constants/tablePagination.constants';
import React from 'react';

const CarListTable = () => {
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(rowPerPageOptions[0]);
  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(Number(e.target.value));
  };

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
            <CarListTableItem
              typeName="Lengvasis automobilis"
              registrationNumber="AAA000"
              onDelete={() => console.log('id')}
              onView={() => console.log('open dialog')}
            />
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={rowPerPageOptions}
        component={'div'}
        rowsPerPage={rowsPerPage}
        count={100}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default CarListTable;
