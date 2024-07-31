import { EmptyCellType } from '../components/CarListTableEmpty/emptyCell.type';

export const getEmptyTableType = (
  dataLength: number | undefined,
  isDataLoading: boolean
): EmptyCellType => {
  if (isDataLoading) return 'loading';
  return typeof dataLength === 'number' ? 'empty' : 'error';
};
