CREATE TABLE "activities" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"clerk_id" text NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"emoji" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "activities" ADD CONSTRAINT "activities_clerk_id_users_clerk_id_fk" FOREIGN KEY ("clerk_id") REFERENCES "public"."users"("clerk_id") ON DELETE cascade ON UPDATE no action;