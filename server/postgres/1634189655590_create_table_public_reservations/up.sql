CREATE TABLE "public"."reservations" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "product_id" uuid NOT NULL, "amount" integer NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("product_id") REFERENCES "public"."product"("id") ON UPDATE restrict ON DELETE restrict);COMMENT ON TABLE "public"."reservations" IS E'予約テーブル';
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_reservations_updated_at"
BEFORE UPDATE ON "public"."reservations"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_reservations_updated_at" ON "public"."reservations" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
