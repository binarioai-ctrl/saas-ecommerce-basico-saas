// Auto-generated TypeScript types from Supabase schema

export interface Profiles {
  id: string
  email?: string
  full_name: string
  avatar_url: string
  role?: string
  subscription_status?: string
  subscription_id: string
  customer_id: string
  trial_ends_at: string
  created_at?: string
  updated_at?: string
}

export interface ProfilesInsert {
  email?: string
  full_name: string
  avatar_url: string
  subscription_id: string
  customer_id: string
  trial_ends_at: string
}

export interface Organizations {
  id?: string
  name?: string
  slug?: string
  logo_url: string
  website: string
  description: string
  plan?: string
  max_users?: number
  owner_id?: string
  created_at?: string
  updated_at?: string
}

export interface OrganizationsInsert {
  name?: string
  slug?: string
  logo_url: string
  website: string
  description: string
  owner_id?: string
}

export interface OrgMembers {
  id?: string
  organization_id?: string
  user_id?: string
  role?: string
  permissions?: any
  invited_by: string
  invited_at?: string
  joined_at: string
  status?: string
}

export interface OrgMembersInsert {
  organization_id?: string
  user_id?: string
  invited_by: string
  joined_at: string
}

export interface Subscriptions {
  id?: string
  organization_id?: string
  stripe_subscription_id: string
  stripe_customer_id?: string
  status?: string
  price_id?: string
  plan_name?: string
  current_period_start?: string
  current_period_end?: string
  trial_start: string
  trial_end: string
  cancel_at_period_end?: boolean
  canceled_at: string
  created_at?: string
  updated_at?: string
}

export interface SubscriptionsInsert {
  organization_id?: string
  stripe_subscription_id: string
  stripe_customer_id?: string
  status?: string
  price_id?: string
  plan_name?: string
  current_period_start?: string
  current_period_end?: string
  trial_start: string
  trial_end: string
  canceled_at: string
}

export interface UsageMetrics {
  id?: string
  organization_id?: string
  metric_name?: string
  value?: number
  period_start?: string
  period_end?: string
  created_at?: string
}

export interface UsageMetricsInsert {
  organization_id?: string
  metric_name?: string
  period_start?: string
  period_end?: string
}

export interface AuditLogs {
  id?: string
  organization_id: string
  user_id?: string
  action?: string
  resource_type?: string
  resource_id: string
  details?: any
  ip_address: string
  user_agent: string
  created_at?: string
}

export interface AuditLogsInsert {
  organization_id: string
  user_id?: string
  action?: string
  resource_type?: string
  resource_id: string
  ip_address: string
  user_agent: string
}

export interface Products {
  id?: string
  organization_id?: string
  name?: string
  slug?: string
  description: string
  price?: number
  compare_at_price: number
  cost: number
  sku: string
  inventory_quantity?: number
  track_inventory?: boolean
  allow_backorder?: boolean
  status?: string
  images?: any
  variants?: any
  metadata?: any
  created_at?: string
  updated_at?: string
}

export interface ProductsInsert {
  organization_id?: string
  name?: string
  slug?: string
  description: string
  price?: number
  compare_at_price: number
  cost: number
  sku: string
}

export interface Orders {
  id?: string
  organization_id?: string
  customer_id?: string
  order_number?: string
  status?: string
  currency?: string
  subtotal?: number
  tax_amount?: number
  shipping_amount?: number
  discount_amount?: number
  total_amount?: number
  payment_status?: string
  fulfillment_status?: string
  shipping_address: any
  billing_address: any
  notes: string
  metadata?: any
  created_at?: string
  updated_at?: string
}

export interface OrdersInsert {
  organization_id?: string
  customer_id?: string
  order_number?: string
  shipping_address: any
  billing_address: any
  notes: string
}

export interface OrderItems {
  id?: string
  order_id?: string
  product_id?: string
  variant_id: string
  quantity?: number
  unit_price?: number
  total_price?: number
  metadata?: any
}

export interface OrderItemsInsert {
  order_id?: string
  product_id?: string
  variant_id: string
  quantity?: number
  unit_price?: number
  total_price?: number
}

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: Profiles
        Insert: ProfilesInsert
        Update: Partial<ProfilesInsert>
      }
      organizations: {
        Row: Organizations
        Insert: OrganizationsInsert
        Update: Partial<OrganizationsInsert>
      }
      org_members: {
        Row: OrgMembers
        Insert: OrgMembersInsert
        Update: Partial<OrgMembersInsert>
      }
      subscriptions: {
        Row: Subscriptions
        Insert: SubscriptionsInsert
        Update: Partial<SubscriptionsInsert>
      }
      usage_metrics: {
        Row: UsageMetrics
        Insert: UsageMetricsInsert
        Update: Partial<UsageMetricsInsert>
      }
      audit_logs: {
        Row: AuditLogs
        Insert: AuditLogsInsert
        Update: Partial<AuditLogsInsert>
      }
      products: {
        Row: Products
        Insert: ProductsInsert
        Update: Partial<ProductsInsert>
      }
      orders: {
        Row: Orders
        Insert: OrdersInsert
        Update: Partial<OrdersInsert>
      }
      order_items: {
        Row: OrderItems
        Insert: OrderItemsInsert
        Update: Partial<OrderItemsInsert>
      }
    }
  }
}