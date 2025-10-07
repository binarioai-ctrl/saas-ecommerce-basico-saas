# Configuración de Supabase

Este proyecto usa Supabase como backend completo con autenticación, base de datos y storage.

## 🚀 Configuración Rápida

### 1. Crear Proyecto en Supabase

1. Ve a [Supabase](https://app.supabase.com)
2. Crea nuevo proyecto
3. Anota la URL y las API keys

### 2. Configurar Variables de Entorno

```bash
cp .env.local.example .env.local
```

Completa las variables en `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
SUPABASE_SERVICE_ROLE_KEY=tu-service-role-key
```

### 3. Ejecutar Migraciones

```bash
# Instalar Supabase CLI
npm install -g supabase

# Inicializar
supabase init

# Linkear con tu proyecto
supabase link --project-ref tu-project-ref

# Ejecutar migraciones
supabase db push
```

### 4. Configurar Autenticación

1. Ve a Authentication > Settings en tu dashboard
2. Configura providers (Google, GitHub, etc.)
3. Añade URLs de redirect:
   - `http://localhost:3000/auth/callback`
   - `https://tu-dominio.com/auth/callback`

## 📊 Esquema de Base de Datos

### Tipo de Proyecto: Ecommerce

Este proyecto incluye las siguientes tablas:

- **profiles**: Perfiles de usuario
- **organizations**: Organizaciones/equipos
- **org_members**: Miembros de organizaciones
- **subscriptions**: Suscripciones y pagos
- **usage_metrics**: Métricas de uso
- **audit_logs**: Logs de auditoría

### Row Level Security (RLS)

Todas las tablas tienen RLS habilitado con políticas que aseguran:

- Los usuarios solo ven sus propios datos
- Los miembros de org solo ven datos de su organización
- Los admins tienen permisos elevados

## 🛡️ Seguridad

- ✅ Row Level Security habilitado
- ✅ Políticas granulares por tabla
- ✅ Funciones de seguridad
- ✅ Triggers automáticos
- ✅ Auditoría completa

## 🔄 Tipos TypeScript

Los tipos se generan automáticamente desde la DB:

```bash
npx supabase gen types typescript --project-id tu-project-ref > lib/supabase/database.types.ts
```

## 📈 Monitoreo

1. Dashboard de Supabase para métricas
2. Logs en tiempo real
3. Usage tracking automático
4. Alertas de performance

## 🚀 Deploy en Vercel

1. Configura variables de entorno en Vercel
2. Deploy automático desde main branch
3. URLs de production en auth settings

---

¿Problemas? Revisa la [documentación de Supabase](https://supabase.com/docs) o contacta soporte.
