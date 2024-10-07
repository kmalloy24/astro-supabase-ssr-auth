import { createServerClient, parseCookieHeader } from "@supabase/ssr";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const supabase = createServerClient(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return parseCookieHeader(context.request.headers.get("Cookie") ?? "");
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            context.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const countries = await supabase.from("countries").select().limit(5);

  return new Response(
    JSON.stringify({
      countries: countries.data,
    })
  );
}
