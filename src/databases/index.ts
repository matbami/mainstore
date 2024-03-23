import { DB_HOST, DB_PORT, DB_DATABASE, DB_URL } from '@config';

console.log(DB_URL)
export const dbConnection = {
  
  url: DB_URL,
  // url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
