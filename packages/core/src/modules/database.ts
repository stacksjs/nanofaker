import type { Random } from '../random'

export class DatabaseModule {
  constructor(private random: Random) {}

  /**
   * Generate a database engine/type name
   * @example faker.database.engine() // 'PostgreSQL'
   */
  engine(): string {
    const engines = [
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'SQLite',
      'Redis',
      'Oracle',
      'Microsoft SQL Server',
      'MariaDB',
      'Cassandra',
      'Elasticsearch',
      'DynamoDB',
      'CouchDB',
      'Neo4j',
      'Firebase',
      'Firestore',
      'InfluxDB',
      'TimescaleDB',
      'RethinkDB',
      'ArangoDB',
      'CockroachDB',
    ]
    return this.random.arrayElement(engines)
  }

  /**
   * Generate a database column type
   * @example faker.database.type() // 'VARCHAR'
   */
  type(): string {
    const types = [
      'VARCHAR',
      'INTEGER',
      'BIGINT',
      'SMALLINT',
      'DECIMAL',
      'NUMERIC',
      'FLOAT',
      'DOUBLE',
      'BOOLEAN',
      'DATE',
      'TIME',
      'TIMESTAMP',
      'DATETIME',
      'TEXT',
      'BLOB',
      'JSON',
      'JSONB',
      'UUID',
      'ENUM',
      'ARRAY',
      'SERIAL',
      'BIGSERIAL',
    ]
    return this.random.arrayElement(types)
  }

  /**
   * Generate a database collation
   * @example faker.database.collation() // 'utf8_unicode_ci'
   */
  collation(): string {
    const collations = [
      'utf8_general_ci',
      'utf8_unicode_ci',
      'utf8mb4_general_ci',
      'utf8mb4_unicode_ci',
      'latin1_swedish_ci',
      'latin1_general_ci',
      'utf8_bin',
      'utf8mb4_bin',
    ]
    return this.random.arrayElement(collations)
  }

  /**
   * Generate a database column name
   * @example faker.database.column() // 'user_id'
   */
  column(): string {
    const columns = [
      'id',
      'user_id',
      'name',
      'email',
      'password',
      'created_at',
      'updated_at',
      'deleted_at',
      'first_name',
      'last_name',
      'phone',
      'address',
      'city',
      'state',
      'country',
      'zip_code',
      'status',
      'role',
      'permissions',
      'description',
      'price',
      'quantity',
      'total',
      'subtotal',
      'tax',
      'discount',
      'shipping',
      'notes',
      'metadata',
      'settings',
      'preferences',
      'avatar',
    ]
    return this.random.arrayElement(columns)
  }

  /**
   * Generate a database table name
   * @example faker.database.table() // 'users'
   */
  table(): string {
    const tables = [
      'users',
      'posts',
      'comments',
      'products',
      'orders',
      'customers',
      'invoices',
      'payments',
      'categories',
      'tags',
      'roles',
      'permissions',
      'sessions',
      'settings',
      'notifications',
      'messages',
      'attachments',
      'logs',
      'analytics',
      'reports',
      'subscriptions',
      'transactions',
    ]
    return this.random.arrayElement(tables)
  }

  /**
   * Generate a MongoDB ObjectId
   * @example faker.database.mongodbObjectId() // '507f1f77bcf86cd799439011'
   */
  mongodbObjectId(): string {
    const chars = '0123456789abcdef'
    let id = ''
    for (let i = 0; i < 24; i++) {
      id += chars[this.random.int(0, chars.length - 1)]
    }
    return id
  }

  /**
   * Generate a database constraint type
   * @example faker.database.constraint() // 'PRIMARY KEY'
   */
  constraint(): string {
    const constraints = [
      'PRIMARY KEY',
      'FOREIGN KEY',
      'UNIQUE',
      'NOT NULL',
      'CHECK',
      'DEFAULT',
      'INDEX',
    ]
    return this.random.arrayElement(constraints)
  }

  /**
   * Generate a SQL query type
   * @example faker.database.queryType() // 'SELECT'
   */
  queryType(): string {
    const types = [
      'SELECT',
      'INSERT',
      'UPDATE',
      'DELETE',
      'CREATE',
      'ALTER',
      'DROP',
      'TRUNCATE',
      'JOIN',
      'LEFT JOIN',
      'RIGHT JOIN',
      'INNER JOIN',
      'OUTER JOIN',
      'UNION',
      'WHERE',
    ]
    return this.random.arrayElement(types)
  }

  /**
   * Generate a database connection string
   * @example faker.database.connectionString() // 'postgresql://user:pass@localhost:5432/dbname'
   */
  connectionString(options?: { engine?: string }): string {
    const engine = options?.engine ?? this.engine().toLowerCase().replace(/ /g, '')
    const user = 'user'
    const pass = 'password'
    const host = 'localhost'
    const port = this.random.int(3000, 9999)
    const dbname = this.table()

    const protocols: Record<string, string> = {
      mysql: 'mysql',
      postgresql: 'postgresql',
      mongodb: 'mongodb',
      redis: 'redis',
    }

    const protocol = protocols[engine] || 'jdbc'

    if (engine === 'mongodb') {
      return `${protocol}://${user}:${pass}@${host}:${port}/${dbname}`
    }

    return `${protocol}://${user}:${pass}@${host}:${port}/${dbname}`
  }
}
