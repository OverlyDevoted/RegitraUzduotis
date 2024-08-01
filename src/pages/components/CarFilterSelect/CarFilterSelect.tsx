import { Categories } from '@/pages/types/category.types';
// eslint-disable-next-line import/named
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface CarFilterSelectProps {
  categories: Categories;
  id: string;
  labelId: string;
  label: string;
  value: string;
  onChange: (e: SelectChangeEvent<unknown>) => void;
}

const CarFilterSelect = ({
  categories,
  id,
  labelId,
  label,
  value,
  onChange,
}: CarFilterSelectProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select labelId={labelId} id={id} label={label} value={value} onChange={onChange}>
        <MenuItem value="">Tusčia</MenuItem>
        {categories.map((category) => {
          return (
            <MenuItem key={category.code} value={category.code}>
              {category.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default CarFilterSelect;
