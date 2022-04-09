import { db } from "../../db";

interface Category {
  id: string;
  slug: string; // Уникальное название на англ. в системе
  name: string; // Название категории. Англ., кириллица
  description?: string; // Описание категории. Англ., кириллица
  createdDate?: Date; // Не управляется клиентом. Создается автом.
  active: boolean; // Вкл, выкл
}

interface CreateCategoryDto {
  slug: string;
  name: string;
  description?: string;
  active: boolean;
}

interface UpdateCategoryDto {
  id?: string;
  slug?: string;
  name?: string;
  description?: string;
  active?: boolean;
}

type sqlFn = (tableName: string) => string;

export const baseQuery = async <ArrayType>(
  tableName: string,
  sql: sqlFn,
  paramsArray?: Array<ArrayType>
): Promise<Category[]> => {
  const result = await db.query(sql(tableName), paramsArray);
  return result?.rows;
};

export const baseQueryCategories = async <ArrayType>(
  sql: sqlFn,
  paramsArray?: Array<ArrayType>
): Promise<Category[]> => {
  const result = await db.query(sql('categories'), paramsArray);
  return result?.rows;
};

export const baseDinamicQuery = async <ArrayType>(
  sql: string,
  paramsArray?: Array<ArrayType>
): Promise<Category[]> => {
  const result = await db.query(sql, paramsArray);
  return result?.rows;
};

export const getAll = async (): Promise<Category[]> => {
  const sql = (tableName: string) => `SELECT * from ${tableName} ORDER BY created_date DESC`;
  return baseQueryCategories(sql);
};

export const getOne = async (id: string): Promise<Category[]> => {
  const sql = (tableName: string) => `SELECT * from ${tableName} WHERE id = $1`;
  return baseQueryCategories(sql, [id]);
};

export const getOneSlug = async (slug: string): Promise<Category[]> => {
  const sql = (tableName: string) => `SELECT * from ${tableName} WHERE slug = $1`;
  console.log(slug);
  return baseQueryCategories(sql, [slug]);
};

export const create = async (params: CreateCategoryDto): Promise<any> => {
  const sql = (tableName: string) => params.description
    ? `INSERT INTO ${tableName}(slug, name, description, active) VALUES($1, $2, $3, $4) RETURNING id`
    : `INSERT INTO ${tableName}(slug, name, active) VALUES($1, $2, $3) RETURNING id`;
  return baseQueryCategories(sql, Object.values(params));
};

export const update = async (
  id: string,
  params: UpdateCategoryDto
): Promise<any> => {
  const dKeys = Object.keys(params);
  const dataTuples = dKeys.map((k, index) => `${k} = $${index + 1}`);
  const updates = dataTuples.join(", ");
  const len = Object.keys(params).length;

  const sql = (tableName: string) => (
    `UPDATE ${tableName} SET ${updates} WHERE id = $${ len + 1 } RETURNING id`
  );

  let paramsArray = Object.values(params);
  paramsArray.push(id);

  return baseQueryCategories(sql, paramsArray);
};

export const destroy = async (id: string): Promise<any> => {
  const sql = (tableName: string) => `DELETE FROM ${tableName} WHERE id=($1) RETURNING id`;
  return baseQueryCategories(sql, [id]);
};
