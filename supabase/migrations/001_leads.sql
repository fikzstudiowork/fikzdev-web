create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  service text not null,
  message text not null,
  source_path text,
  user_agent text,
  ip_hash text,
  turnstile_ok boolean not null default false,
  status text not null default 'new' check (status in ('new', 'contacted', 'closed', 'spam'))
);

alter table public.leads enable row level security;

create policy "deny anon select on leads"
  on public.leads
  for select
  using (false);
