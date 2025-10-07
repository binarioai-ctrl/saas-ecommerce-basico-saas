"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const plans = [
  {
    name: "Gratuito",
    price: "$0",
    features: ["Hasta 100 usuarios", "1GB almacenamiento", "Soporte básico"]
  },
  {
    name: "Pro",
    price: "$29",
    features: ["Usuarios ilimitados", "100GB almacenamiento", "Soporte prioritario", "Analytics avanzados"]
  },
  {
    name: "Enterprise",
    price: "$99",
    features: ["Todo de Pro", "Almacenamiento ilimitado", "Soporte 24/7", "Integraciones personalizadas"]
  }
]

export function Pricing() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Precios Simples y Transparentes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Elige el plan perfecto para tu negocio
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`text-center ${index === 1 ? 'border-blue-500 shadow-lg' : ''}`}>
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-blue-600">
                  {plan.price}<span className="text-sm text-gray-500">/mes</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-600 dark:text-gray-300">
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                  {index === 0 ? "Comenzar Gratis" : "Elegir Plan"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}