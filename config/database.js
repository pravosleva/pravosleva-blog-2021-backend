const {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_AUTHENTICATION_DATABASE,
  DATABASE_SRV,
  DATABASE_SSL,
} = process.env

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', DATABASE_HOST),
        srv: env.bool('DATABASE_SRV', DATABASE_SRV),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', DATABASE_NAME),
        username: env('DATABASE_USERNAME', DATABASE_USERNAME),
        password: env('DATABASE_PASSWORD', DATABASE_PASSWORD),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', DATABASE_AUTHENTICATION_DATABASE),
        ssl: env.bool('DATABASE_SSL', DATABASE_SSL),
      },
    },
  },
});
