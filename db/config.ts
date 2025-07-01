import { column, defineDb, defineTable } from 'astro:db';

const User = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    password: column.text()
  }
})

const Log = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    logs: column.text(),
    timestamp: column.date()
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: { User, Log }
});
