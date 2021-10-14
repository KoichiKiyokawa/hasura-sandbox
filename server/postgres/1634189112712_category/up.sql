
CREATE TABLE "public"."category" ("id" bigserial NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "name" text NOT NULL, PRIMARY KEY ("id") );COMMENT ON TABLE "public"."category" IS E'商品カテゴリー';
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
CREATE TRIGGER "set_public_category_updated_at"
BEFORE UPDATE ON "public"."category"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_category_updated_at" ON "public"."category" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TABLE "public"."product_category" ("product_id" uuid NOT NULL, "category_id" bigint NOT NULL, PRIMARY KEY ("product_id","category_id") , FOREIGN KEY ("product_id") REFERENCES "public"."product"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("category_id") REFERENCES "public"."category"("id") ON UPDATE restrict ON DELETE restrict);COMMENT ON TABLE "public"."product_category" IS E'中間テーブル';

alter table "public"."category" add constraint "category_name_key" unique ("name");
