import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Mic2,
  Tent,
  Beer,
  Music2,
  Wrench,
  Building2,
  Speaker,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Calendar,
  Users,
  Zap,
  Award,
  ChevronRight,
} from "lucide-react";

import heroFestival from "@/assets/hero-festival.jpg";
import stageEquipment from "@/assets/stage-equipment.jpg";
import bars from "@/assets/bars.jpg";
import artist from "@/assets/artist.jpg";
import production from "@/assets/production.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import logoAsset from "@/assets/logo.png.asset.json";
import project6 from "@/assets/project-6.jpg";

const heroImageUrl = `https://id-preview--c27d3510-e21e-4bf5-a619-57914eae6833.lovable.app${heroFestival}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eventualidades — Produção de Eventos, Equipamentos e Gestão de Bares" },
      {
        name: "description",
        content:
          "Há mais de 30 anos a transformar ideias em festivais, concertos e grandes produções. Equipamentos, produção, gestão de bares e agenciamento artístico.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Eventualidades — Eventos que ficam na memória" },
      {
        property: "og:description",
        content:
          "Produção integral de eventos, aluguer de equipamentos, gestão de bares e representação artística. 30+ anos de experiência.",
      },
      { property: "og:image", content: heroImageUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Eventualidades — Eventos que ficam na memória" },
      {
        name: "twitter:description",
        content:
          "Produção integral de eventos, aluguer de equipamentos, gestão de bares e representação artística.",
      },
      { name: "twitter:image", content: heroImageUrl },
    ],
  }),
  component: Home,
});

const needs = [
  { icon: "🎤", title: "Vou organizar um concerto", desc: "Do palco à sonorização, tratamos de tudo." },
  { icon: "🎪", title: "Vou produzir um festival", desc: "Produção integral chave-na-mão." },
  { icon: "🍺", title: "Preciso de gestão de bares", desc: "Operação completa, RH, stock e POS." },
  { icon: "🎭", title: "Procuro artistas para contratar", desc: "Booking nacional e internacional." },
  { icon: "🔊", title: "Só preciso de equipamentos", desc: "Som, luz, vídeo LED, estruturas." },
  { icon: "🏛️", title: "Represento um município", desc: "Festas populares, celebrações, cerimónias." },
  { icon: "🏢", title: "Estou a organizar um evento empresarial", desc: "Galas, congressos, lançamentos." },
];

const services = [
  {
    id: "producao",
    kicker: "01",
    title: "Produção de Eventos",
    lede: "Organizamos eventos chave-na-mão, do conceito à desmontagem.",
    image: production,
    items: ["Festivais", "Concertos", "Eventos Corporativos", "Feiras", "Congressos", "Galas", "Festas Municipais", "Eventos Privados"],
    icon: Tent,
  },
  {
    id: "equipamentos",
    kicker: "02",
    title: "Aluguer de Equipamentos",
    lede: "Disponibilizamos equipamento profissional para qualquer dimensão de evento.",
    image: stageEquipment,
    items: ["Som", "Iluminação", "Vídeo LED", "Estruturas Truss", "Palcos", "Backline", "Torres de Delay", "Geradores", "Cablagem", "Distribuição elétrica", "Mesas e cadeiras"],
    icon: Speaker,
    cta: "Ver Catálogo",
  },
  {
    id: "bares",
    kicker: "03",
    title: "Gestão de Bares",
    lede: "Gerimos bares em festivais e grandes eventos, assegurando toda a operação.",
    image: bars,
    items: ["Recursos Humanos", "Stock", "Logística", "POS", "Copos reutilizáveis", "Equipamentos", "Coordenação", "Licenciamento"],
    icon: Beer,
  },
  {
    id: "agenciamento",
    kicker: "04",
    title: "Agenciamento Artístico",
    lede: "Representamos artistas e ligamos promotores, municípios e agentes internacionais.",
    image: artist,
    items: ["Booking", "Management", "Digressões", "Contratação", "Produção técnica"],
    icon: Music2,
  },
];

const projects = [
  { name: "Amadora Beer Fest", year: "2024", img: project1, tag: "Festival" },
  { name: "Festival Paredes de Coura", year: "2024", img: project2, tag: "Festival" },
  { name: "Rock in Rio Lisboa", year: "2024", img: project3, tag: "Grande Produção" },
  { name: "Funchal Jazz Festival", year: "2023", img: project4, tag: "Festival" },
  { name: "Eventos Corporativos", year: "2024", img: project5, tag: "Corporate" },
  { name: "Festas Municipais", year: "2024", img: project6, tag: "Município" },
];

const clients = ["Município de Lisboa", "Câmara do Porto", "Super Bock", "Sagres", "MEO", "NOS", "RTP", "SIC", "TVI", "Everything is New", "Música no Coração", "Live Nation"];

const testimonials = [
  {
    quote: "Uma equipa que compreende a exigência de um festival. Executam tudo com precisão milimétrica.",
    author: "João Ferreira",
    role: "Diretor, Festival XYZ",
  },
  {
    quote: "Trabalham como se o evento fosse deles. É o parceiro técnico que qualquer produtor procura.",
    author: "Marta Sousa",
    role: "Câmara Municipal",
  },
  {
    quote: "Do palco ao bar, tudo funcionou sem falhas. Voltámos a contratar no ano seguinte.",
    author: "Ricardo Nunes",
    role: "Head of Events, Marca Nacional",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Needs />
      <Services />
      <Projects />
      <WhyUs />
      <Clients />
      <Testimonials />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Eventualidades" width={40} height={40} className="h-9 w-9 md:h-10 md:w-10 object-contain invert" />
          <span className="font-display font-black tracking-widest text-sm md:text-base hidden sm:inline">EVENTUALIDADES</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
          <a href="#projetos" className="hover:text-primary transition-colors">Projetos</a>
          <a href="#sobre" className="hover:text-primary transition-colors">Empresa</a>
          <a href="#contactos" className="hover:text-primary transition-colors">Contactos</a>
        </nav>
        <a href="#contactos" className="hidden md:inline-flex btn-primary !py-2.5 !px-4 !text-xs">
          Pedir Orçamento <ArrowRight className="h-3.5 w-3.5" />
        </a>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-foreground" />
            <span className="block w-6 h-0.5 bg-foreground" />
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-x py-4 flex flex-col gap-4 text-sm">
            <a href="#servicos" onClick={() => setOpen(false)}>Serviços</a>
            <a href="#projetos" onClick={() => setOpen(false)}>Projetos</a>
            <a href="#sobre" onClick={() => setOpen(false)}>Empresa</a>
            <a href="#contactos" onClick={() => setOpen(false)}>Contactos</a>
            <a href="#contactos" onClick={() => setOpen(false)} className="btn-primary w-full justify-center">
              Pedir Orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-end overflow-hidden pt-20">
      <img
        src={heroFestival}
        alt="Palco de festival ao vivo com iluminação laranja e multidão"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

      <div className="relative container-x pb-16 md:pb-28 pt-32 w-full">
        <div className="max-w-4xl">
          <div className="eyebrow mb-6">Since 1993 · Portugal</div>
          <h1 className="heading-xl">
            Produzimos eventos<br />
            que ficam na <span className="text-primary">memória</span>.
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm md:text-base text-muted-foreground font-medium">
            <span>Equipamentos</span>
            <span className="text-primary">/</span>
            <span>Produção</span>
            <span className="text-primary">/</span>
            <span>Gestão de Bares</span>
            <span className="text-primary">/</span>
            <span>Agenciamento Artístico</span>
          </div>

          <p className="mt-6 text-base md:text-lg max-w-2xl text-muted-foreground leading-relaxed">
            Há mais de 30 anos a transformar ideias em festivais, concertos, eventos corporativos e grandes produções.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#contactos" className="btn-primary">
              Pedir Orçamento <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#servicos" className="btn-ghost">Ver Serviços</a>
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 max-w-3xl border-t border-border/60 pt-8">
          {[
            { n: "30+", l: "Anos" },
            { n: "500+", l: "Eventos/ano" },
            { n: "20M+", l: "Público" },
            { n: "100%", l: "Cobertura nacional" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display font-black text-3xl md:text-4xl text-primary">{s.n}</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Festivais", "Concertos", "Eventos Corporativos", "Feiras", "Congressos", "Galas", "Festas Municipais", "Eventos Privados"];
  return (
    <div className="border-y border-border bg-surface overflow-hidden">
      <div className="flex gap-12 py-5 whitespace-nowrap animate-[marquee_40s_linear_infinite]">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="font-display font-bold uppercase tracking-widest text-sm text-muted-foreground flex items-center gap-12">
            {it}
            <span className="text-primary">◆</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }`}</style>
    </div>
  );
}

function About() {
  return (
    <section id="sobre" className="py-24 md:py-36">
      <div className="container-x grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-4">
          <div className="eyebrow mb-6">Quem Somos</div>
          <h2 className="heading-lg">
            Três décadas<br />
            <span className="text-primary">a montar palco.</span>
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Uma empresa especializada na <span className="text-foreground font-medium">produção integral de eventos</span>, aluguer de equipamentos audiovisuais, gestão de bares e representação artística.
          </p>
          <p>
            Ao longo de mais de três décadas participámos na produção de alguns dos maiores eventos nacionais, desenvolvendo soluções técnicas e logísticas adaptadas a cada projeto.
          </p>
          <div className="hair mt-10" />
          <div className="grid grid-cols-2 gap-6 pt-4">
            <Stat icon={Calendar} label="Anos de operação" value="30+" />
            <Stat icon={Users} label="Profissionais" value="120+" />
            <Stat icon={Award} label="Grandes festivais" value="80+" />
            <Stat icon={Zap} label="Equipamentos próprios" value="Sim" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon: Icon, label, value }: { icon: typeof Calendar; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="h-5 w-5 text-primary mt-1 shrink-0" />
      <div>
        <div className="font-display font-bold text-xl text-foreground">{value}</div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}

function Needs() {
  return (
    <section className="py-24 md:py-32 bg-surface border-y border-border">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-6">O que conseguimos fazer pelo seu evento</div>
          <h2 className="heading-lg">
            Diga-nos o que precisa.<br />
            <span className="text-primary">Nós tratamos do resto.</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {needs.map((n) => (
            <a
              key={n.title}
              href="#contactos"
              className="group bg-surface p-8 md:p-10 hover:bg-background transition-colors relative"
            >
              <div className="text-4xl mb-6">{n.icon}</div>
              <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                {n.title}
              </h3>
              <p className="text-sm text-muted-foreground">{n.desc}</p>
              <ChevronRight className="absolute top-8 right-8 h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="py-24 md:py-36">
      <div className="container-x">
        <div className="max-w-3xl mb-20">
          <div className="eyebrow mb-6">Serviços</div>
          <h2 className="heading-lg">
            Uma capacidade completa,<br />
            <span className="text-primary">um único interlocutor.</span>
          </h2>
        </div>

        <div className="space-y-24 md:space-y-32">
          {services.map((s, i) => {
            const Icon = s.icon;
            const reversed = i % 2 === 1;
            return (
              <article key={s.id} id={s.id} className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
                <div className={`md:col-span-7 ${reversed ? "md:order-2" : ""}`}>
                  <div className="relative overflow-hidden group aspect-[4/3] bg-surface">
                    <img
                      src={s.image}
                      alt={s.title}
                      width={1400}
                      height={1000}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                      <Icon className="h-5 w-5 text-primary" />
                      <span className="text-xs font-display font-bold tracking-widest uppercase text-foreground">
                        {s.title}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={`md:col-span-5 ${reversed ? "md:order-1" : ""}`}>
                  <div className="font-display font-black text-primary text-sm tracking-widest mb-4">
                    — {s.kicker}
                  </div>
                  <h3 className="heading-lg !text-3xl md:!text-4xl mb-6">{s.title}</h3>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{s.lede}</p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-sm">
                        <span className="h-1 w-1 bg-primary" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  {s.cta && (
                    <a href="#contactos" className="btn-ghost !py-3 !px-5 !text-xs">
                      {s.cta} <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </article>
            );
          })}

          {/* Produção Técnica */}
          <article className="grid md:grid-cols-12 gap-8 items-start border-t border-border pt-16">
            <div className="md:col-span-5">
              <div className="font-display font-black text-primary text-sm tracking-widest mb-4">— 05</div>
              <h3 className="heading-lg !text-3xl md:!text-4xl mb-6 flex items-center gap-3">
                <Wrench className="h-8 w-8 text-primary" />
                Produção Técnica
              </h3>
              <p className="text-muted-foreground text-lg">Planeamento integral, do rider à coordenação em campo.</p>
            </div>
            <div className="md:col-span-7 md:pt-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border">
                {["Riders", "Implantações", "Stage Management", "Produção Executiva", "Coordenação Técnica", "Health & Safety"].map((t) => (
                  <div key={t} className="bg-background p-6 hover:bg-surface transition-colors">
                    <div className="font-display font-bold text-sm">{t}</div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projetos" className="py-24 md:py-36 bg-surface border-y border-border">
      <div className="container-x">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div className="max-w-2xl">
            <div className="eyebrow mb-6">Projetos</div>
            <h2 className="heading-lg">
              Os palcos onde<br />
              <span className="text-primary">deixámos marca.</span>
            </h2>
          </div>
          <a href="#contactos" className="btn-ghost !py-3 !px-5 !text-xs">
            Ver Portfólio <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((p) => (
            <a key={p.name} href="#contactos" className="group relative aspect-[4/5] overflow-hidden bg-background">
              <img
                src={p.img}
                alt={p.name}
                width={1200}
                height={900}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="text-xs eyebrow mb-2">{p.tag} · {p.year}</div>
                <h3 className="font-display font-black text-xl md:text-2xl leading-tight group-hover:text-primary transition-colors">
                  {p.name}
                </h3>
              </div>
              <div className="absolute top-6 right-6 h-10 w-10 border border-border rounded-full flex items-center justify-center bg-background/40 backdrop-blur-sm group-hover:bg-primary group-hover:border-primary transition-all">
                <ArrowRight className="h-4 w-4 -rotate-45 group-hover:rotate-0 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const reasons = [
    { n: "01", t: "30+ anos de experiência", d: "Três décadas a montar e desmontar palcos por Portugal e Europa." },
    { n: "02", t: "Equipa especializada", d: "Técnicos, produtores e gestores com pedigree em grandes festivais." },
    { n: "03", t: "Equipamentos próprios", d: "Parque técnico atualizado, som, luz, vídeo e estruturas." },
    { n: "04", t: "Cobertura nacional", d: "Do Algarve ao Minho, Açores e Madeira incluídos." },
    { n: "05", t: "Produção chave-na-mão", d: "Um único interlocutor. Um único orçamento. Zero surpresas." },
    { n: "06", t: "Resposta rápida", d: "Emergências, réplicas, alterações de última hora. Resolvemos." },
  ];
  return (
    <section className="py-24 md:py-36">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-6">Porque escolher-nos</div>
          <h2 className="heading-lg">
            O que faz de nós<br />
            <span className="text-primary">a escolha certa.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {reasons.map((r) => (
            <div key={r.n} className="bg-background p-8 md:p-10 relative">
              <div className="font-display font-black text-6xl text-primary/20 mb-4">{r.n}</div>
              <h3 className="font-display font-bold text-xl mb-3">{r.t}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section className="py-20 border-y border-border bg-surface">
      <div className="container-x">
        <div className="text-center mb-10">
          <div className="eyebrow">Clientes · Municípios · Marcas · Festivais</div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {clients.map((c) => (
            <span key={c} className="font-display font-bold text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-6">Testemunhos</div>
          <h2 className="heading-lg">
            A palavra fica<br /><span className="text-primary">para quem confia.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote key={t.author} className="border border-border p-8 md:p-10 bg-surface flex flex-col">
              <div className="text-primary text-4xl font-display font-black mb-4 leading-none">"</div>
              <p className="text-foreground leading-relaxed flex-1">{t.quote}</p>
              <footer className="mt-6 pt-6 border-t border-border">
                <div className="font-display font-bold text-sm">{t.author}</div>
                <div className="text-xs text-muted-foreground mt-1">{t.role}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function News() {
  const items = [
    { date: "Setembro 2025", title: "Amadora Beer Fest — nova edição, novo palco principal", tag: "Festival" },
    { date: "Agosto 2025", title: "Digressão Nacional — 12 municípios, 40 dias de produção", tag: "Digressão" },
    { date: "Julho 2025", title: "Investimento em novo parque de LED de última geração", tag: "Equipamento" },
  ];
  return (
    <section className="py-24 md:py-32 border-y border-border bg-surface">
      <div className="container-x">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <div className="eyebrow mb-4">Notícias</div>
            <h2 className="heading-lg !text-3xl md:!text-4xl">Últimos eventos</h2>
          </div>
          <a href="#contactos" className="text-sm font-display font-bold uppercase tracking-widest text-primary hover:underline">
            Ver todos →
          </a>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {items.map((n) => (
            <a key={n.title} href="#" className="group grid md:grid-cols-12 gap-4 py-8 items-center">
              <div className="md:col-span-2 text-xs uppercase tracking-widest text-muted-foreground">{n.date}</div>
              <div className="md:col-span-2 text-xs eyebrow">{n.tag}</div>
              <div className="md:col-span-7 font-display font-bold text-lg md:text-xl group-hover:text-primary transition-colors">
                {n.title}
              </div>
              <div className="md:col-span-1 md:text-right">
                <ArrowRight className="h-5 w-5 inline-block text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contactos" className="py-24 md:py-36">
      <div className="container-x grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="eyebrow mb-6">Contactos</div>
          <h2 className="heading-lg mb-8">
            Vamos montar<br />
            <span className="text-primary">o próximo palco.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Responda em algumas linhas ao que precisa. Voltamos com um orçamento em 48 horas.
          </p>
          <div className="space-y-5">
            <ContactRow icon={Phone} label="Telefone" value="+351 210 000 000" href="tel:+351210000000" />
            <ContactRow icon={Mail} label="Email" value="geral@palco.pt" href="mailto:geral@palco.pt" />
            <ContactRow icon={MessageCircle} label="WhatsApp" value="+351 910 000 000" href="https://wa.me/351910000000" />
            <ContactRow icon={MapPin} label="Sede" value="Estrada Nacional 1, Lisboa · Portugal" />
          </div>
        </div>

        <form className="md:col-span-7 bg-surface p-8 md:p-12 border border-border">
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="Nome" name="name" />
            <Field label="Empresa / Município" name="company" />
            <Field label="Email" name="email" type="email" />
            <Field label="Telefone" name="phone" type="tel" />
            <div className="md:col-span-2">
              <label className="block text-xs eyebrow mb-2">Tipo de projeto</label>
              <select className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary">
                <option>Festival</option>
                <option>Concerto</option>
                <option>Evento corporativo</option>
                <option>Festa municipal</option>
                <option>Aluguer de equipamentos</option>
                <option>Gestão de bares</option>
                <option>Booking de artistas</option>
                <option>Outro</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs eyebrow mb-2">Descreva o seu evento</label>
              <textarea
                rows={5}
                className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none"
                placeholder="Datas, localização, público estimado, serviços necessários..."
              />
            </div>
          </div>
          <button type="button" className="btn-primary mt-8 w-full md:w-auto justify-center">
            Enviar Pedido <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: typeof Phone; label: string; value: string; href?: string }) {
  const content = (
    <>
      <div className="h-12 w-12 border border-border flex items-center justify-center shrink-0 group-hover:border-primary group-hover:text-primary transition-colors">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs eyebrow mb-1">{label}</div>
        <div className="font-display font-bold text-base group-hover:text-primary transition-colors">{value}</div>
      </div>
    </>
  );
  return href ? (
    <a href={href} className="flex items-center gap-4 group">{content}</a>
  ) : (
    <div className="flex items-center gap-4 group">{content}</div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs eyebrow mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-x py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 mb-6">
            <img src={logoAsset.url} alt="Eventualidades" width={40} height={40} className="h-10 w-10 object-contain invert" />
            <span className="font-display font-black tracking-widest">EVENTUALIDADES</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Produção integral de eventos. Há mais de 30 anos a montar palco em Portugal.
          </p>
        </div>
        <FooterCol title="Serviços" links={["Produção", "Equipamentos", "Gestão de Bares", "Agenciamento", "Produção Técnica"]} />
        <FooterCol title="Empresa" links={["Sobre", "Equipa", "Notícias", "Carreiras"]} />
        <FooterCol title="Portfólio" links={["Festivais", "Concertos", "Corporate", "Municipal"]} />
        <FooterCol title="Contactos" links={["+351 210 000 000", "geral@palco.pt", "Lisboa · Portugal"]} />
      </div>
      <div className="border-t border-border">
        <div className="container-x py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Eventualidades. Todos os direitos reservados.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary">Instagram</a>
            <a href="#" className="hover:text-primary">LinkedIn</a>
            <a href="#" className="hover:text-primary">Facebook</a>
            <a href="#" className="hover:text-primary">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="md:col-span-2">
      <div className="eyebrow mb-4">{title}</div>
      <ul className="space-y-2 text-sm">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
