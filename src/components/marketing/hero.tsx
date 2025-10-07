"use client"

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export function Hero() {
  const router = useRouter()

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bienvenido a {name}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {description}
          </p>
          <div className="space-x-4">
            <Button 
              size="lg" 
              onClick={() => router.push('/register')}
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Comenzar Gratis
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => router.push('/login')}
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Iniciar Sesión
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}