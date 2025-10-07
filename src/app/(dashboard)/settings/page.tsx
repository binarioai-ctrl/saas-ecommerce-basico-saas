import { DashboardHeader } from '@/components/dashboard/header'
import { DashboardShell } from '@/components/dashboard/shell'
import { UserSettings } from '@/components/settings/user-settings'

export default function SettingsPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Configuración"
        text="Administra la configuración de tu cuenta"
      />
      <div className="grid gap-6">
        <UserSettings />
      </div>
    </DashboardShell>
  )
}