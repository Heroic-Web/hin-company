// src/lib/supabase.ts

import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceRoleKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl) {
  throw new Error(
    "NEXT_PUBLIC_SUPABASE_URL is missing in .env.local"
  )
}

if (!supabaseAnonKey) {
  throw new Error(
    "NEXT_PUBLIC_SUPABASE_ANON_KEY is missing in .env.local"
  )
}

/**
 * Client-side Supabase
 *
 * Gunakan untuk:
 * - Client Component
 * - Server Component (read only)
 * - Dashboard internal
 * - Fetch data umum
 */
export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  }
)

/**
 * Server-side Supabase (Admin)
 *
 * Gunakan HANYA untuk:
 * - API Route
 * - Server Actions
 * - Cron Job
 * - Operasi admin
 *
 * Jangan pernah import ini
 * ke file client component.
 */
export const supabaseAdmin =
  supabaseServiceRoleKey
    ? createClient(
        supabaseUrl,
        supabaseServiceRoleKey,
        {
          auth: {
            persistSession: false,
            autoRefreshToken: false,
          },
        }
      )
    : null