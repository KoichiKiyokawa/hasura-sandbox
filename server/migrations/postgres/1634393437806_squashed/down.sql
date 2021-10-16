
DROP INDEX IF EXISTS "user_id_index";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."reservations" add column "user_id" uuid
--  not null;

DROP INDEX IF EXISTS "product_id_index";


comment on TABLE "public"."product_category" is E'NULL';

DROP TABLE "public"."product_category";

comment on column "public"."products"."quantity" is NULL;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."products" add column "quantity" integer
--  null;

DROP TABLE "public"."reservations";

DROP TABLE "public"."products";

DROP TABLE "public"."users";

DROP TABLE "public"."categories";
