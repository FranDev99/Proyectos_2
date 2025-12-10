import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadCrumbs } from "@/components/custom/CustomBreadCrumbs";
import { useQuery } from "@tanstack/react-query";
import { searchHeroesAction } from "@/heroes/actions/search-hero.action";
import { useSearchParams } from "react-router";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name") ?? undefined;
  const strength = searchParams.get("strength") ?? undefined;

  const { data = [] } = useQuery({
    queryKey: ["search", { name, strength }],
    queryFn: () => searchHeroesAction({ name, strength }),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      {/* Header */}
      <CustomJumbotron
        tittle="Búsqueda de SuperHéroes"
        description="Descubre, explora y administra tus héroes y villanos favoritos"
      />

      <CustomBreadCrumbs
        currentPage="Buscador de héroes"
        // breadCrumbs={[{ label: "Inicio", to: "/" }]}
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Controls */}
      <SearchControls />

      {/* Heroes */}
      <HeroGrid heroes={data} />

      <CustomPagination totalPages={5} />
    </>
  );
};
