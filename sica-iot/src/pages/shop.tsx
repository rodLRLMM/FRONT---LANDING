import * as React from "react";
import * as Form from "@radix-ui/react-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Shop() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const values = Object.fromEntries(data.entries());
        console.log("Datos del formulario enviados:", values);
        alert("¡Solicitud enviada con éxito! Nos pondremos en contacto contigo pronto.");
    };

    return (
        <div className="min-h-screen bg-background p-6 md:p-12">
            <div className="mx-auto max-w-2xl">
                <div className="flex items-center justify-between pb-8">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">SICA-IoT · Cotizaciones</p>
                        <h1 className="text-3xl font-semibold tracking-tight">Solicita tu Sistema Industrial</h1>
                    </div>
                    <Button variant="outline" asChild><a href="/">← Volver al inicio</a></Button>
                </div>

                <Card className="shadow-none">
                    <CardHeader className="border-b">
                        <CardTitle className="text-lg">Formulario de Registro y Cotización</CardTitle>
                        <CardDescription>Completa los datos de tu planta o negocio para evaluar la implementación de nodos IoT y extractores.</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <Form.Root onSubmit={handleSubmit} className="space-y-5">
                            
                            {/* Nombre de la Empresa */}
                            <Form.Field className="space-y-2" name="empresa">
                                <div className="flex items-baseline justify-between">
                                    <Form.Label className="text-sm font-medium">Nombre de la Empresa o Negocio</Form.Label>
                                    <Form.Message className="text-xs text-destructive" match="valueMissing">
                                        Por favor ingresa el nombre de la empresa
                                    </Form.Message>
                                </div>
                                <Form.Control asChild>
                                    <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" placeholder="Ej. Manufacturas del Norte S.A. de C.V." required />
                                </Form.Control>
                            </Form.Field>

                            {/* Giro o Sector */}
                            <Form.Field className="space-y-2" name="giro">
                                <div className="flex items-baseline justify-between">
                                    <Form.Label className="text-sm font-medium">Giro o Sector Industrial</Form.Label>
                                    <Form.Message className="text-xs text-destructive" match="valueMissing">
                                        Indica el giro de tu empresa
                                    </Form.Message>
                                </div>
                                <Form.Control asChild>
                                    <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" placeholder="Ej. Metalmecánica / Maquiladora / Alimentos" required />
                                </Form.Control>
                            </Form.Field>

                            {/* Nombre del Contacto */}
                            <Form.Field className="space-y-2" name="contacto">
                                <div className="flex items-baseline justify-between">
                                    <Form.Label className="text-sm font-medium">Nombre del Responsable / Solicitante</Form.Label>
                                    <Form.Message className="text-xs text-destructive" match="valueMissing">
                                        Ingresa tu nombre completo
                                    </Form.Message>
                                </div>
                                <Form.Control asChild>
                                    <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" placeholder="Ej. Ing. Carlos Mendoza" required />
                                </Form.Control>
                            </Form.Field>

                            {/* Número de Contacto y Email (En dos columnas) */}
                            <div className="grid gap-4 md:grid-cols-2">
                                <Form.Field className="space-y-2" name="telefono">
                                    <div className="flex items-baseline justify-between">
                                        <Form.Label className="text-sm font-medium">Número de Contacto (Tel / Cel)</Form.Label>
                                        <Form.Message className="text-xs text-destructive" match="valueMissing">
                                            Requerido
                                        </Form.Message>
                                    </div>
                                    <Form.Control asChild>
                                        <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" type="tel" placeholder="Ej. 668 123 4567" required />
                                    </Form.Control>
                                </Form.Field>

                                <Form.Field className="space-y-2" name="email">
                                    <div className="flex items-baseline justify-between">
                                        <Form.Label className="text-sm font-medium">Correo Electrónico</Form.Label>
                                        <Form.Message className="text-xs text-destructive" match="valueMissing">
                                            Requerido
                                        </Form.Message>
                                        <Form.Message className="text-xs text-destructive" match="typeMismatch">
                                            Correo inválido
                                        </Form.Message>
                                    </div>
                                    <Form.Control asChild>
                                        <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" type="email" placeholder="correo@empresa.com" required />
                                    </Form.Control>
                                </Form.Field>
                            </div>

                            {/* Dimensiones aproximadas de la nave */}
                            <Form.Field className="space-y-2" name="dimensiones">
                                <div className="flex items-baseline justify-between">
                                    <Form.Label className="text-sm font-medium">Dimensiones Aproximadas de la Nave (Metros)</Form.Label>
                                </div>
                                <Form.Control asChild>
                                    <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" placeholder="Ej. 100 × 50 metros" />
                                </Form.Control>
                            </Form.Field>

                            {/* Requerimientos específicos / Pregunta */}
                            <Form.Field className="space-y-2" name="detalles">
                                <div className="flex items-baseline justify-between">
                                    <Form.Label className="text-sm font-medium">Requerimientos o Problemática Específica</Form.Label>
                                    <Form.Message className="text-xs text-destructive" match="valueMissing">
                                        Por favor describe brevemente tu necesidad
                                    </Form.Message>
                                </div>
                                <Form.Control asChild>
                                    <textarea className="flex min-h-[100px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" placeholder="Describe si necesitas control de CO2, temperatura, cantidad de extractores estimados, etc." required />
                                </Form.Control>
                            </Form.Field>

                            {/* Botón de envío */}
                            <Form.Submit asChild>
                                <Button className="w-full mt-4" size="lg">
                                    Enviar solicitud de cotización
                                </Button>
                            </Form.Submit>

                        </Form.Root>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}