import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadCrumbs } from "@/components/custom/CustomBreadCrumbs";

export const SearchPage = () => {
  return (
    <>
      {/* Header */}
      <CustomJumbotron
        tittle="Búsqueda de SuperHéroes"
        description="Descubre, explora y administra tus héroes y villanos favoritos"
      />

      <CustomBreadCrumbs
        currentPage="Buscador de héroes"
        breadCrumbs={[{ label: "Inicio", to: "/" }]}
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Controls */}
      <SearchControls />

      <HeroGrid />

      <CustomPagination totalPages={5} />
    </>
  );
};
