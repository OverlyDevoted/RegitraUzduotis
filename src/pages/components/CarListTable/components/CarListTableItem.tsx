import { Button, TableCell, TableRow } from '@mui/material';
import React from 'react';

interface CarListTableProps {
  registrationNumber: string;
  typeName: string;
  onView: () => void;
  onDelete: () => void;
}

const CarListTableItem = ({
  registrationNumber,
  typeName,
  onView,
  onDelete,
}: CarListTableProps) => {
  return (
    <TableRow>
      <TableCell>{registrationNumber}</TableCell>
      <TableCell>{typeName}</TableCell>
      <TableCell>
        <Button onClick={onView}>Peržiūrėti</Button>
        <Button color={'error'} onClick={onDelete}>
          Ištrinti
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default CarListTableItem;
