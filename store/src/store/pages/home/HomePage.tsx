import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomJumbotron } from "@/store/components/CustomJumbotron";
import { ProductsGrid } from "@/store/components/ProductsGrid";
import { useProducts } from "@/store/hooks/useProducts";

export const HomePage = () => {
  const { data } = useProducts();

  return (
    <>
      <CustomJumbotron tittle="Todos los productos" subTittle="" />
      <ProductsGrid products={data?.products || []} />
      <CustomPagination totalPages={data?.pages || 0} />
    </>
  );
};
