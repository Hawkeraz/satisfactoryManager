import { createClient } from "@supabase/supabase-js";

const clientURL = import.meta.env.VITE_SUPABASE_URL;
const clientID = import.meta.env.VITE_SUPABASE_CLIENTID;

export const supabase = createClient(
  clientURL,
  clientID
);
