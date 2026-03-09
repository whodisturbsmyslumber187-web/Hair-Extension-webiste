-- Remove overly permissive RLS policies
DROP POLICY IF EXISTS "Anyone can look up orders by confirmation number" ON public.orders;
DROP POLICY IF EXISTS "Anyone can view order updates" ON public.order_updates;