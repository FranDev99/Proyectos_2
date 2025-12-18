import { CustomPagination } from "@/components/custom/CustomPagination";
import { products } from "@/mocks/products.mocks";
import { CustomJumbotron } from "@/store/components/CustomJumbotron";
import { ProductsGrid } from "@/store/components/ProductsGrid";

export const HomePage = () => {
  return (
    <>
      <CustomJumbotron tittle="Todos los productos" subTittle="" />
      <ProductsGrid products={products} />
      <CustomPagination totalPages={5} />
    </>
  );
};
