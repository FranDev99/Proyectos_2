import { CustomPagination } from "@/components/custom/CustomPagination";
import { products } from "@/mocks/products.mocks";
import { CustomJumbotron } from "@/store/components/CustomJumbotron";
import { ProductsGrid } from "@/store/components/ProductsGrid";
import { useParams } from "react-router";

export const GenderPage = () => {
  const { gender } = useParams();
  const genderLabel =
    gender === "men" ? "Hombres" : gender === "women" ? "Mujeres" : "Niños";

  return (
    <>
      <CustomJumbotron tittle={`Productos para ${genderLabel}`} subTittle="" />
      <ProductsGrid products={products} />
      <CustomPagination totalPages={5} />
    </>
  );
};
