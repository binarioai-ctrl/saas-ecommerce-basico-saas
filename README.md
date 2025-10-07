# ecommerce-basico-saas

Proyecto SaaS básico de ecommerce con autenticación y base de datos (Supabase) para catálogo, carrito y pedidos.

## 🚀 Stack Tecnológico

- **Frontend**: Next.js 14 (App Router)
- **Backend**: Supabase
- **Base de Datos**: PostgreSQL (Supabase)
- **Autenticación**: Supabase Auth
- **Estilos**: Tailwind CSS + shadcn/ui
- **Deploy**: Vercel

## 📋 Características

- ✅ Autenticación completa (Login/Register/Reset)
- ✅ Dashboard interactivo
- ✅ Base de datos con RLS
- ✅ Responsive design
- ✅ Dark/Light mode
- ✅ TypeScript
- ✅ Deploy automático

## 🛠️ Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <tu-repo>
   cd ecommerce-basico-saas
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar Supabase**
   - Crear proyecto en [Supabase](https://supabase.com)
   - Copiar las variables de entorno
   - Crear archivo `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=tu_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key
   ```

4. **Ejecutar migraciones**
   ```bash
   npx supabase db push
   ```

5. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

## 📦 Deploy en Vercel

1. **Conectar con GitHub**
   - Push tu código a GitHub
   - Importar proyecto en Vercel

2. **Configurar variables de entorno**
   - Añadir las mismas variables de `.env.local` en Vercel

3. **Deploy automático**
   - Cada push a main = deploy automático

## 🏗️ Estructura del Proyecto

```
ecommerce-basico-saas/
├── app/                 # Next.js App Router
│   ├── (auth)/         # Rutas de autenticación
│   ├── (dashboard)/    # Dashboard protegido
│   └── layout.tsx      # Layout raíz
├── components/         # Componentes reutilizables
│   ├── ui/            # shadcn/ui components
│   ├── auth/          # Componentes de auth
│   └── dashboard/     # Componentes de dashboard
├── lib/               # Utilidades
│   └── supabase/      # Configuración Supabase
├── supabase/          # Migraciones y tipos
└── public/            # Assets estáticos
```

## 🔒 Seguridad

- Row Level Security (RLS) habilitado
- Autenticación JWT con Supabase
- Variables de entorno seguras
- Validación de tipos con TypeScript

## 📈 Próximos Pasos

1. Personalizar el diseño
2. Añadir más funcionalidades
3. Configurar analytics
4. Implementar sistema de pagos
5. Optimizar SEO

---

**Generado con ❤️ por [Binario AI](https://binarioai.com)**