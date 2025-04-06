module.exports = {
  development: {
    username: 'your_username',
    password: 'your_password',
    database: 'your_db_name',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    logging: console.log,
  },
  test: {
    // 测试环境配置
  },
  production: {
    // 生产环境配置
  }
};