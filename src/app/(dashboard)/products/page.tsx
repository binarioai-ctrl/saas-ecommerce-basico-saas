import { DashboardHeader } from '@/components/dashboard/header'
import { DashboardShell } from '@/components/dashboard/shell'
import { ProductList } from '@/components/ecommerce/product-list'

export default function ProductsPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Productos"
        text="Gestiona tu catálogo de productos"
      />
      <ProductList />
    </DashboardShell>
  )
}