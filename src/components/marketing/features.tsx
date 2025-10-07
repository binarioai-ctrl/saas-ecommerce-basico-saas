"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    title: "🚀 Rápido y Eficiente",
    description: "Configuración inicial en minutos, no en días"
  },
  {
    title: "🔒 Seguro por Defecto",
    description: "Autenticación y seguridad integradas desde el inicio"
  },
  {
    title: "📱 Totalmente Responsive",
    description: "Funciona perfectamente en cualquier dispositivo"
  },
  {
    title: "⚡ Optimizado para Performance",
    description: "Velocidad de carga ultra rápida y SEO optimizado"
  }
]

export function Features() {
  return (
    <div className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Características Principales
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Todo lo que necesitas para lanzar tu SaaS exitoso
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}