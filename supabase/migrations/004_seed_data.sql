-- Seed data for development
INSERT INTO profiles (id, email, full_name, role) VALUES
  ('550e8400-e29b-41d4-a716-446655440000', 'admin@example.com', 'Admin User', 'admin'),
  ('550e8400-e29b-41d4-a716-446655440001', 'user@example.com', 'Regular User', 'user')
ON CONFLICT (id) DO NOTHING;

INSERT INTO organizations (id, name, slug, owner_id) VALUES
  ('550e8400-e29b-41d4-a716-446655440010', 'Example Corp', 'example-corp', '550e8400-e29b-41d4-a716-446655440000')
ON CONFLICT (id) DO NOTHING;

INSERT INTO org_members (organization_id, user_id, role, status) VALUES
  ('550e8400-e29b-41d4-a716-446655440010', '550e8400-e29b-41d4-a716-446655440000', 'owner', 'active'),
  ('550e8400-e29b-41d4-a716-446655440010', '550e8400-e29b-41d4-a716-446655440001', 'member', 'active')
ON CONFLICT (organization_id, user_id) DO NOTHING;