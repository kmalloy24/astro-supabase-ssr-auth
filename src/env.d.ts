/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly SUPABASE_URL: string;
  readonly SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace App {
  interface Locals {
    supabase: SupabaseClient;
    safeGetSession: () => Promise<{
      session: Session | null;
      user: User | null;
    }>;
    session: Session | null;
    user: User | null;
  }
}
