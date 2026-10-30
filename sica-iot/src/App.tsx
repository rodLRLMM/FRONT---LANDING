import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"

const lecturas = [
  { label: "CO₂", valor: "1,180", unidad: "ppm", limite: "1,000", alerta: true },
  { label: "Temperatura", valor: "31.4", unidad: "°C", limite: "28.0", alerta: true },
  { label: "Humedad", valor: "54", unidad: "%", limite: "70", alerta: false },
] 

const flujo = [
  { n: "01", t: "Nodo IoT", d: "ESP32 con sensores de CO₂, temperatura y humedad por zona." },
  { n: "02", t: "API REST", d: "FastAPI recibe la lectura y la envía a la base de datos." },
  { n: "03", t: "sp_registrar_lectura_industrial", d: "Valida y guarda dentro de una transacción." },
  { n: "04", t: "trg_verificar_umbral_critico", d: "Si se rebasa el límite, crea la alerta y activa el extractor." },
  { n: "05", t: "Panel web", d: "El supervisor ve la alerta en vw_alertas_activas_zona." },
]

const sprints = [
  { s: "Sprint 1", t: "Fundamentos", i: ["Prototipo IoT industrial", "Modelo ER y 3FN"] },
  { s: "Sprint 2", t: "Diseño", i: ["Arquitectura y mockups", "Procedimientos y disparadores"] },
  { s: "Sprint 3", t: "Construcción", i: ["API REST y frontend", "Pruebas unitarias e índices"] },
  { s: "Sprint 4", t: "Entrega", i: ["Integración en planta", "Pruebas de estrés", "Documentación y despliegue"] },
]

const entregables = [
  ["Documento técnico", "Proyecto completo con modelos UML y diccionario de datos."],
  ["Script SQL", "Creación de tablas, datos de prueba, vistas, procedimientos, disparadores e índices."],
  ["Reporte de optimización", "Tiempos de consulta antes y después de aplicar índices."],
  ["Código fuente", "Repositorio Git con política de ramas y estándares de codificación."],
  ["Reporte de pruebas", "Pruebas de software y de hardware."],
  ["Demostración final", "Simulación operativa de la nave industrial."],
]

const equipo = [
  "Rodrigo López Ramírez",
  "Joel Morales Acosta",
  "Raul Francisco Leyson Vergara",
  "Rafael Rodrigo Espinoza Norzagaray",
]

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">{children}</p>
)

export default function App() {
  return (
    <div className="min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <a href="#inicio" className="font-mono text-sm font-medium tracking-tight">SICA-IoT<span className="text-primary">/</span>industrial</a>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            <a href="#problema" className="hover:text-foreground">Problema</a>
            <a href="#sistema" className="hover:text-foreground">Sistema</a>
            <a href="#plano" className="hover:text-foreground">Plano</a>
            <a href="#plan" className="hover:text-foreground">Plan</a>
            <a href="#equipo" className="hover:text-foreground">Equipo</a>
          </nav>
          <Button size="sm" asChild><a href="#sistema">Ver sistema</a></Button>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:py-28">
        <div>
          <Label>Proyecto integrador · UAIM</Label>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            Control ambiental para naves industriales, en tiempo real.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Sensores IoT miden CO₂, temperatura y humedad en cada zona de la planta. Cuando algo se sale de norma,
            la base de datos genera la alerta y activa los extractores sin esperar a nadie.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild><a href="#sistema">Cómo funciona</a></Button>
            <Button size="lg" variant="outline" asChild><a href="#plano">Ver plano de la nave</a></Button>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t pt-6">
            {[["120 × 80 m", "Nave"], ["3", "Extractores"], ["4", "Sprints"]].map(([v, l]) => (
              <div key={l}>
                <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{l}</dt>
                <dd className="mt-1 text-2xl font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Card>
          <CardHeader className="border-b">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Zona de producción principal</CardTitle>
              <Badge variant="destructive">Alerta activa</Badge>
            </div>
            <CardDescription className="font-mono text-xs">Ejemplo de lectura · turno matutino</CardDescription>
          </CardHeader>
          <CardContent className="divide-y p-0">
            {lecturas.map((l) => (
              <div key={l.label} className="flex items-center justify-between px-6 py-4">
                <div>
                  <p className="text-sm font-medium">{l.label}</p>
                  <p className="font-mono text-xs text-muted-foreground">límite {l.limite} {l.unidad}</p>
                </div>
                <p className={`font-mono text-2xl ${l.alerta ? "text-destructive" : ""}`}>
                  {l.valor}<span className="ml-1 text-sm text-muted-foreground">{l.unidad}</span>
                </p>
              </div>
            ))}
            <div className="bg-muted px-6 py-3 font-mono text-xs">
              Extractor E-01 → <span className="font-semibold text-primary">ENCENDIDO</span>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* PROBLEMA */}
      <section id="problema" className="border-y bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Label>El problema</Label>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Techos altos, pero el aire no circula.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            La maquinaria pesada restringe la ventilación natural. El calor y el CO₂ se acumulan en las líneas
            de ensamble y los operadores terminan con fatiga térmica y dolores de cabeza.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Fatiga térmica", "El calor de equipos y personal queda atrapado y baja el rendimiento."],
              ["CO₂ acumulado", "La mala ventilación eleva la concentración de gases en las zonas de trabajo."],
              ["Normatividad", "Se deben cumplir las NOM-015-STPS, NOM-010-STPS y NOM-001-STPS."],
            ].map(([t, d]) => (
              <Card key={t} className="shadow-none">
                <CardHeader><CardTitle className="text-lg">{t}</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground">{d}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SISTEMA */}
      <section id="sistema" className="mx-auto max-w-6xl px-6 py-20">
        <Label>El sistema</Label>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">Del sensor al extractor, sin intervención humana.</h2>
        <ol className="mt-10 grid border md:grid-cols-5">
          {flujo.map((f, i) => (
            <li key={f.n} className={`p-5 ${i > 0 ? "border-t md:border-l md:border-t-0" : ""}`}>
              <p className="font-mono text-xs text-primary">{f.n}</p>
              <p className="mt-2 break-words font-mono text-sm font-medium">{f.t}</p>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </li>
          ))}
        </ol>

        <Tabs defaultValue="sw" className="mt-14">
          <TabsList>
            <TabsTrigger value="sw">Software</TabsTrigger>
            <TabsTrigger value="db">Base de datos</TabsTrigger>
            <TabsTrigger value="hw">Hardware</TabsTrigger>
          </TabsList>
          {[
            ["sw", "Ingeniería de Software II", ["Metodología Scrum con entregas iterativas", "Casos de uso, clases, secuencia, actividades y despliegue en UML", "API REST con patrón MVC (FastAPI + React)", "Pruebas unitarias, de integración y de aceptación", "Perfiles: Gerencia, Supervisor y Mantenimiento"]],
            ["db", "Bases de Datos Avanzadas", ["PostgreSQL normalizado a 3FN", "Transacciones ACID con rollback, aislamiento Read Committed", "Disparadores, procedimientos almacenados y vistas", "Bloqueo optimista para ajustes simultáneos de umbrales", "Índices B-Tree y roles db_admin, db_iot_writer, db_supervisor"]],
            ["hw", "Hardware", ["Microcontroladores ESP32 o PLC básicos programados en C++", "Sensores de CO₂, temperatura y humedad", "Relevadores y contactores para extractores", "Fuente 24 VDC y circuito de fuerza trifásico 400 VAC", "Servidor local en planta o nube (AWS/Azure)"]],
          ].map(([v, t, items]) => (
            <TabsContent key={v as string} value={v as string}>
              <Card className="shadow-none">
                <CardHeader><CardTitle>{t as string}</CardTitle></CardHeader>
                <CardContent>
                  <ul className="grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
                    {(items as string[]).map((x) => (
                      <li key={x} className="flex gap-2"><span className="text-primary">▪</span>{x}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* PLANO */}
      <section id="plano" className="border-y bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Label>Plano de la nave</Label>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Nodos y extractores por zona</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Producción principal, materias primas, producto terminado, carga y descarga, y oficinas de control.
          </p>
          <div className="mt-8 border bg-white p-2">
            <img src="/plano-nave.png" alt="Plano de la nave industrial con nodos IoT y extractores" className="w-full" />
          </div>
        </div>
      </section>

      {/* PLAN */}
      <section id="plan" className="mx-auto max-w-6xl px-6 py-20">
        <Label>Plan de trabajo</Label>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Cuatro sprints</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {sprints.map((s) => (
            <Card key={s.s} className="shadow-none">
              <CardHeader>
                <Badge variant="secondary" className="w-fit font-mono">{s.s}</Badge>
                <CardTitle className="pt-2">{s.t}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {s.i.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <h3 className="mt-16 text-xl font-semibold">Entregables</h3>
        <Accordion type="single" collapsible className="mt-4 max-w-3xl">
          {entregables.map(([t, d], i) => (
            <AccordionItem key={t} value={`e${i}`}>
              <AccordionTrigger>{t}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{d}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* EQUIPO */}
      <section id="equipo" className="bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Label>Equipo</Label>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Quiénes lo construimos</h2>
          <div className="mt-10 grid gap-px bg-background/20 md:grid-cols-4">
            {equipo.map((n) => (
              <div key={n} className="bg-foreground p-6">
                <p className="font-medium">{n}</p>
                <p className="mt-1 font-mono text-xs text-background/60">Ing. Sistemas Computacionales</p>
              </div>
            ))}
          </div>
          <Separator className="my-10 bg-background/20" />
          <p className="text-sm text-background/70">
            Asesor: M. en C. José Torres Medina · Bases de Datos Avanzadas e Ingeniería de Software II · Universidad Autónoma Indígena de México · Octubre 2026
          </p>
        </div>
      </section>
    </div>
  )
}