CREATE TABLE "test" (
	"id" serial PRIMARY KEY NOT NULL,
	"some_number" integer DEFAULT 1337 NOT NULL,
	"created_at" timestamp DEFAULT now()
);
