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

interface UpdateCategoryDto {
  id?: string,
  slug?: string;
  name?: string;
  description?:string;
  active?: boolean;
}


export const getAll = async ():Promise<Category[]> => {
  const result = await db.query('SELECT * from categories');
  return result?.rows; 
}


export const getOne = async (id: string):Promise<Category[]> => {
  const selectOneQuery = 'SELECT * from categories WHERE id = $1';
  const result = await db.query(selectOneQuery, [id]);
  return result?.rows; 
}


export const create = async (params: CreateCategoryDto):Promise<any> => {
  const insertQuery = 'INSERT INTO categories(slug, name, description, active) VALUES($1, $2, $3, $4) RETURNING id'
  const result = await db.query(insertQuery, Object.values(params));
  return result?.rows; 
}


export const update = async (id: string, params: UpdateCategoryDto):Promise<any> => {
  const dKeys = Object.keys(params);
  const dataTuples = dKeys.map((k, index) => `${k} = $${index + 1}`);
  const updates = dataTuples.join(", ");
  const len = Object.keys(params).length;

  let updateQuery = `UPDATE categories SET ${updates} WHERE id = $${len + 1} RETURNING id`;

  let paramsArray = Object.values(params)
  paramsArray.push(id);
  const result = await db.query(updateQuery, paramsArray);
  return result?.rows; 
}


export const destroy = async (id: string):Promise<any> => {
  const deleteQuery = 'DELETE FROM categories WHERE id=($1) RETURNING id'
  const result = await db.query(deleteQuery, [id]);
  return result?.rows; 
}
