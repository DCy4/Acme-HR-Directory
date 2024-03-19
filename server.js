//require pg

//create client

//add db URL
process.env.DATABASE_URL || "postgres://localhost/acme_notes_categories_db";
//create init aysnc funct
//connect to pg client using await

let SQL = /*SQL*/ `
  DROP TABLE IF EXISTS employees;
  DROP TABLE IF EXISTS departments;

  CREATE TABLE categories(

  );
  CREATE TABLE employees()
`;

//invoke init
