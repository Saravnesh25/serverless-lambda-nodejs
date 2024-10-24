'use strict';

module.exports.hello = async (event) => {
  const dbHost = process.env.DB_HOST;
  const dbUser = process.env.DB_USER;
  const dbPassword = process.env.DB_PASSWORD;

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Database credentials fetched successfully!',
      dbHost: dbHost,   
      dbUser: dbUser,   
    }),
  };
};

