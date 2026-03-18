import { createClient } from "@supabase/supabase-js"

// Client-side Supabase client
export const supabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

// Server-side Supabase client (uses service role key for admin operations)
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

// Helper functions for CRUD operations
export async function getProducts() {
  const { data, error } = await supabaseClient
    .from("products")
    .select("*")
    .order("sort_order", { ascending: true })

  if (error) throw error
  return data
}

export async function getCertifications() {
  const { data, error } = await supabaseClient
    .from("certifications")
    .select("*")
    .eq("status", "active")
    .order("sort_order", { ascending: true })

  if (error) throw error
  return data
}

export async function getBlogPosts() {
  const { data, error } = await supabaseClient
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .order("published_at", { ascending: false })

  if (error) throw error
  return data
}

export async function getClientReviews() {
  const { data, error } = await supabaseClient
    .from("client_reviews")
    .select("*")
    .eq("published", true)
    .order("sort_order", { ascending: true })

  if (error) throw error
  return data
}
