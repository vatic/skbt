import { db } from '../../db';

interface Category {
  id: string;
  slug: string; // Уникальное название на англ. в системе
  name: string; // Название категории. Англ., кириллица
  description?:string; // Описание категории. Англ., кириллица
  createdDate?: Date; // Не управляется клиентом. Создается автом.
  active: boolean; // Вкл, выкл
}

interface CreateCategoryDto {
  slug: string;
  name: string;
  description?:string;
  active: boolean;
}

// export const testCategory: Category = {
//   id: 'dec41101-66e7-4597-b82d-d3bc474704d5',
//   slug: 'testslug',
//   name: 'hello',
//   description: 'a hello test',
//   createdDate: new Date((new Date(Date.now()).getTime())),
//   active: true
// }

export const getAll = async ():Promise<Category[]> => {
  const result = await db.query('SELECT * from categories');
  return result?.rows; 
}

export const create = async (params: CreateCategoryDto):Promise<any> => {
  const insertQuery = 'INSERT INTO categories(slug, name, description, active) VALUES($1, $2, $3, $4)'
  const result = await db.query(insertQuery, Object.values(params));
  return result?.rows; 
}
