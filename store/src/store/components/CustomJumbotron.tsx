interface Props {
  tittle: string;
  subTittle: string;
}

export const CustomJumbotron = ({ tittle, subTittle }: Props) => {
  const defaultSubTittle =
    "Ropa minimalista y elegante inspirada en el diseño futurista de Tesla. Calidad premium para un estilo atemporal.";

  return (
    <section className="py-10 px-4 lg:px-8 bg-muted/30">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl lg:text-5xl font-montserrat tracking-tight mb-6">
          {tittle}
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {subTittle || defaultSubTittle}
        </p>
      </div>
    </section>
  );
};
