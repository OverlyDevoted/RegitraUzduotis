import { Categories } from '@/pages/types/category.types';

export const createCategoryMap = (categories: Categories) => {
  const categoryMap = new Map();
  categories.forEach((category) => {
    categoryMap.set(category.code, category.name);
  });
  return categoryMap;
};
