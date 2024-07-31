import { NamedBaseCar } from '@/pages/types/car.types';
import { Dialog } from '@mui/material';

interface DialogProps {
  car: NamedBaseCar | undefined;
  onClose: () => void;
}

const DetailedCarDialog = ({ car, onClose }: DialogProps) => {
  const isDialogOpen = !!car;
  return (
    <Dialog open={isDialogOpen} onClose={onClose}>
      DetailedCarDialog
    </Dialog>
  );
};

export default DetailedCarDialog;
