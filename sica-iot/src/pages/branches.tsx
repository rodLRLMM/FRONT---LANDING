// src/pages/branches.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const sucursalesData = [
  {
    id: "planta-norte",
    nombre: "Planta Industrial Norte (Los Mochis)",
    dimension: "120 × 80 m",
    estado: "Operativa",
    sensoresActivos: 14,
    extractores: 3,
  },
  {
    id: "planta-sur",
    nombre: "Planta de Ensamble Sur (Culiacán)",
    dimension: "90 × 60 m",
    estado: "Mantenimiento preventivo",
    sensoresActivos: 10,
    extractores: 2,
  },
]

export default function Sucursales() {
  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between pb-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">Red de Plantas</p>
            <h1 className="text-3xl font-semibold tracking-tight">Sucursales Físicas</h1>
          </div>
          <Button variant="outline" asChild><a href="/">← Volver al inicio</a></Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {sucursalesData.map((suc) => (
            <Card key={suc.id} className="shadow-none">
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{suc.nombre}</CardTitle>
                  <Badge variant={suc.estado === "Operativa" ? "default" : "secondary"}>
                    {suc.estado}
                  </Badge>
                </div>
                <CardDescription className="font-mono text-xs">Dimensión: {suc.dimension}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-6 text-sm text-muted-foreground">
                <div className="flex justify-between border-b pb-2">
                  <span>Nodos IoT instalados:</span>
                  <span className="font-mono font-medium text-foreground">{suc.sensoresActivos} unidades</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Sistemas de extracción:</span>
                  <span className="font-mono font-medium text-foreground">{suc.extractores} extractores</span>
                </div>
                <Button className="w-full mt-2" size="sm">Ver telemetría en tiempo real</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}