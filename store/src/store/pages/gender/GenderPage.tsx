import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomJumbotron } from "@/store/components/CustomJumbotron";
import { ProductsGrid } from "@/store/components/ProductsGrid";
import { useProducts } from "@/store/hooks/useProducts";
import { useParams } from "react-router";

export const GenderPage = () => {
  const { data } = useProducts();
  const { gender } = useParams();
  const genderLabel =
    gender === "men" ? "Hombres" : gender === "women" ? "Mujeres" : "Niños";

  return (
    <>
      <CustomJumbotron tittle={`Productos para ${genderLabel}`} subTittle="" />
      <ProductsGrid products={data?.products || []} />
      <CustomPagination totalPages={5} />
    </>
  );
};
