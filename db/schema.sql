DROP DATABASE IF EXISTS tutor_hub;
CREATE DATABASE tutor_hub;

CREATE TABLE IF NOT EXISTS "instrument" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(255) NOT NULL,
  "category" VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS "tutor" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER REFERENCES "user" ("id") ON DELETE CASCADE,
  "instrument_id" INTEGER REFERENCES "instrument" ("id") ON DELETE CASCADE,
  "profile_image" VARCHAR(255),
  "zipcode" INTEGER NOT NULL,
  "phone" VARCHAR(255),
  "lesson_setting" VARCHAR(255),
  "price" DECIMAL(10, 2) NOT NULL
);

CREATE TABLE IF NOT EXISTS "certifications" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL

)