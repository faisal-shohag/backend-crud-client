import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { EditProductsDialog } from "./EditProductsDialog";
import { DeleteProductDialog } from "./DeleteProductsDialog";

const Products = ({ products }) => {
 
  return (
    <div className="grid grid-cols-4 gap-5 mt-10">
      {products.map((product) => (
        <Card key={product._id}>
          <CardContent>
            <Image height={400} width={400} src={product.image} alt="" />
            <h1>{product.name}</h1>
            <p>{product.price}</p>

            <EditProductsDialog product={product}/>
            <DeleteProductDialog id={product._id}/>

          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Products;
