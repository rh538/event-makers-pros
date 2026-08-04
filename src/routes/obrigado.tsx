import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import logoAsset from "@/assets/logo.png";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Pedido enviado — Eventualidades" },
      {
        name: "description",
        content:
          "Recebemos o seu pedido de orçamento. A equipa Eventualidades responde no prazo máximo de 48 horas.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Pedido enviado — Eventualidades" },
      {
        property: "og:description",
        content: "Recebemos o seu pedido. Entramos em contacto em 48 horas.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ObrigadoPage,
});

function ObrigadoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="container-x flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoAsset}
              alt="Eventualidades"
              width={40}
              height={40}
              className="h-9 w-9 md:h-10 md:w-10 object-contain invert"
            />
            <span className="font-display font-black tracking-widest text-sm md:text-base hidden sm:inline">
              EVENTUALIDADES
            </span>
          </Link>
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar
          </Link>
        </div>
      </header>

      <main className="container-x py-24 md:py-32 max-w-3xl">
        <div className="border border-primary/40 bg-primary/5 p-8 md:p-12 text-center">
          <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="font-display font-black text-3xl md:text-4xl mb-4">Pedido enviado!</h1>
          <p className="text-muted-foreground text-lg">
            Obrigado pela preferência.
            <br />
            Entraremos em contacto consigo no prazo máximo de 48 horas.
          </p>
          <Link to="/" className="btn-primary mt-8 inline-flex">
            Voltar ao início
          </Link>
        </div>
      </main>
    </div>
  );
}
