
interface Category {
  id: string;
  slug: string; // Уникальное название на англ. в системе
  name: string; // Название категории. Англ., кириллица
  description?:string; // Описание категории. Англ., кириллица
  createdDate?: Date; // Не управляется клиентом. Создается автом.
  active: boolean; // Вкл, выкл
}


export const testCategory: Category = {
  id: 'dec41101-66e7-4597-b82d-d3bc474704d5',
  slug: 'testslug',
  name: 'hello',
  description: 'a hello test',
  createdDate: new Date((new Date(Date.now()).getTime())),
  active: true
}
