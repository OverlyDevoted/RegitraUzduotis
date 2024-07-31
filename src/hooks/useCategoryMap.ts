import { Categories } from '@/pages/types/category.types';
import { useFetchData } from './useFetchData';
import { createCategoryMap } from '@/utils/createCategoryMap';
import { useMemo } from 'react';

export const useCategoryMap = (url: string) => {
  const { data, isLoading: isCategoryMapLoading } = useFetchData<Categories>(url);

  const categoryMap = useMemo(() => {
    return data ? createCategoryMap(data) : null;
  }, [data]);

  return { isCategoryMapLoading, categoryMap };
};