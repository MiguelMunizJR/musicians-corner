/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
	CLOUDINARY_SECRET: string | undefined
    readonly SUPABASE_URL: string
    readonly SUPABASE_ANON_KEY: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }