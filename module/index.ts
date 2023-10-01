export const totalItems = (array:Data[]) =>{
   const result = array.reduce((acc:any, art:any) => acc + Number(art.quantity), 0);
  return result
}
// Delete of cart
export const deleteCart = (id:any) =>{
    let storageShoes: Data[] = []; 
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        storageShoes = JSON.parse(storedCart);
      } catch (error) {
        console.error('Error parsing cart data:', error);
      }
}
     const indexASupprimer = storageShoes.findIndex((element:any) => element.id === id);

    if (id !== -1) {
      storageShoes.splice(indexASupprimer, 1);
      localStorage.setItem('cart', JSON.stringify(storageShoes));
      console.log(`Élément avec l'ID ${id} supprimé du tableau.`);
      // Mettez à jour l'état de votre composant ou effectuez toute autre action nécessaire ici.
    } else {
      console.log(`L'élément avec l'ID ${id} n'a pas été trouvé dans le tableau.`);
    }

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
