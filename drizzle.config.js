/** @type {import{"drizzle-kit"}.config } */

export default {
    schema:"./utils/schema.tsx",
    dialect:"postgresql",
    dbCredentials:{
        url:"postgresql://neondb_owner:igflPyJqS1u9@ep-flat-frost-a8yifwc3.eastus2.azure.neon.tech/AI-Content-Generator?sslmode=require"
    }
}
