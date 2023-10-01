export const totalItems = (array:Data[]) =>{
   const result = array.reduce((acc:any, art:any) => acc + Number(art.quantity), 0);
  return result
}

export type Data = {
    id: number;
    img: string;
    title: string;
    star: JSX.Element;
    reviews: string;
    prevPrice: string;
    newPrice: string;
    company: string;
    color: string;
    category: string;
    quantity: number;
}
