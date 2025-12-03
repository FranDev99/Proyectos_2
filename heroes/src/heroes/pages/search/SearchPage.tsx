import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";

export const SearchPage = () => {
  return (
    <>
      {/* Header */}
      <CustomJumbotron
        tittle="Búsqueda de SuperHéroes"
        description="Descubre, explora y administra tus héroes y villanos favoritos"
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Controls */}
      <SearchControls />
    </>
  );
};
