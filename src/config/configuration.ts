
export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    type: process.env.PORT_BD,
    host: process.env.HOST,
    port: parseInt(process.env.PORT_BD, 10),
    name: process.env.USER_NAME_BD,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    /*  host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432*/
  },
  usernamelentecia: process.env.USERNAMELATENCIA,
  passwordlatencia: process.env.PASSWORDLATENCIA,
});