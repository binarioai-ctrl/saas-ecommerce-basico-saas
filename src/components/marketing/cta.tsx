"use client"

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export function CTA() {
  const router = useRouter()

  return (
    <div className="bg-blue-600 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          ¿Listo para comenzar?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Únete a miles de empresas que ya están creciendo con nuestra plataforma
        </p>
        <Button 
          size="lg"
          onClick={() => router.push('/register')}
          className="bg-white text-blue-600 hover:bg-gray-100"
        >
          Comenzar Ahora
        </Button>
      </div>
    </div>
  )
}