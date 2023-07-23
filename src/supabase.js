import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mtrufhieptjhdkivrqdw.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10cnVmaGllcHRqaGRraXZycWR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcyMzk2MDYsImV4cCI6MjAwMjgxNTYwNn0.HHW3dY5faz7uuZEgtOzezY1q8y4Qia9DZthKy9oNIOE";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;