import { TableCell, TableRow, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { EmptyCellType } from './emptyCell.type';

interface CarListTableEmptyProps {
  emptyCellType: EmptyCellType;
  colSpan?: number;
}

const getEmptyCellText = (emptyCellType: EmptyCellType) => {
  switch (emptyCellType) {
    case 'error':
      return 'Įvyko klaida gaunant duomenis, bandykite iš naujo';
    case 'loading':
      return 'Luktelkite, kraunami duomenys';
    case 'empty':
      return 'Duomenų bazėje nėra duomenų';
    default:
      return 'Įvyko klaida gaunant duomenis, bandykite iš naujo';
  }
};

const CarListTableEmpty = ({ emptyCellType, colSpan = 3 }: CarListTableEmptyProps) => {
  const message = useMemo(() => getEmptyCellText(emptyCellType), [emptyCellType]);
  return (
    <TableRow>
      <TableCell sx={{ textAlign: 'center' }} colSpan={colSpan}>
        <Typography>{message}</Typography>
      </TableCell>
    </TableRow>
  );
};

export default CarListTableEmpty;
