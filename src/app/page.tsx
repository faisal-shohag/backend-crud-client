import AddProductForm from "@/components/addProductForm";
import Products from "@/components/Products";

export default async function Home() {
   const  res = await fetch('http://localhost:8000/products')
   const products = await res.json()

  return <div>
    
    <AddProductForm/>

    <Products products={products}/>



  </div>;
}
