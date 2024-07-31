import { useFetchData } from '@/hooks/useFetchData';
import { DetailedCar, NamedBaseCar } from '@/pages/types/car.types';
import {
  Box,
  Container,
  Dialog,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface DialogProps {
  car: NamedBaseCar | undefined;
  onClose: () => void;
}

const DetailedCarDialog = ({ car, onClose }: DialogProps) => {
  const { data: detailedCarData, invalidate } = useFetchData<DetailedCar>(
    `http://localhost:3000/detailedCars/${car?.id}`,
    0
  );

  const isDialogOpen = !!car;
  const handleClose = () => {
    onClose();
    invalidate();
  };

  return (
    <Dialog open={isDialogOpen} onClose={handleClose}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          paddingRight: 2,
          justifyContent: 'space-between',
        }}>
        <DialogTitle component={'h2'}>Detalus transporto priemonės aprašymas</DialogTitle>
        <IconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <Container sx={{ py: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography>Registracijos numeris:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography component={'strong'}>{car?.registrationNumber}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Transporto priemonės tipas:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography component={'strong'}>{car?.typeName}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Markė:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography component={'strong'}>{detailedCarData?.brand}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Modelis:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography component={'strong'}>{detailedCarData?.model}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Pagaminimo metai:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography component={'strong'}>{detailedCarData?.manufactureYear}</Typography>
          </Grid>
        </Grid>
      </Container>
    </Dialog>
  );
};

export default DetailedCarDialog;
