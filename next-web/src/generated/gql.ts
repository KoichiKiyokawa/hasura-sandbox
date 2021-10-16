import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  date: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  created_at: Scalars['timestamptz'];
  id: Scalars['bigint'];
  name: Scalars['String'];
  /** An array relationship */
  product_categories: Array<Product_Category>;
  /** An aggregate relationship */
  product_categories_aggregate: Product_Category_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "categories" */
export type CategoriesProduct_CategoriesArgs = {
  distinct_on?: Maybe<Array<Product_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Category_Order_By>>;
  where?: Maybe<Product_Category_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesProduct_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Category_Order_By>>;
  where?: Maybe<Product_Category_Bool_Exp>;
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  avg?: Maybe<Categories_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
  stddev?: Maybe<Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Categories_Sum_Fields>;
  var_pop?: Maybe<Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Categories_Var_Samp_Fields>;
  variance?: Maybe<Categories_Variance_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Categories_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Categories_Avg_Fields = {
  __typename?: 'categories_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: Maybe<Array<Categories_Bool_Exp>>;
  _not?: Maybe<Categories_Bool_Exp>;
  _or?: Maybe<Array<Categories_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  product_categories?: Maybe<Product_Category_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint */
  CategoriesPkey = 'categories_pkey'
}

/** input type for incrementing numeric columns in table "categories" */
export type Categories_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  product_categories?: Maybe<Product_Category_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Categories_On_Conflict>;
};

/** on conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns?: Array<Categories_Update_Column>;
  where?: Maybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  product_categories_aggregate?: Maybe<Product_Category_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Categories_Stddev_Fields = {
  __typename?: 'categories_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Categories_Stddev_Pop_Fields = {
  __typename?: 'categories_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Categories_Stddev_Samp_Fields = {
  __typename?: 'categories_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Categories_Sum_Fields = {
  __typename?: 'categories_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Categories_Var_Pop_Fields = {
  __typename?: 'categories_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Categories_Var_Samp_Fields = {
  __typename?: 'categories_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Categories_Variance_Fields = {
  __typename?: 'categories_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "product_category" */
  delete_product_category?: Maybe<Product_Category_Mutation_Response>;
  /** delete single row from the table: "product_category" */
  delete_product_category_by_pk?: Maybe<Product_Category>;
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>;
  /** delete data from the table: "reservations" */
  delete_reservations?: Maybe<Reservations_Mutation_Response>;
  /** delete single row from the table: "reservations" */
  delete_reservations_by_pk?: Maybe<Reservations>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "product_category" */
  insert_product_category?: Maybe<Product_Category_Mutation_Response>;
  /** insert a single row into the table: "product_category" */
  insert_product_category_one?: Maybe<Product_Category>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** insert data into the table: "reservations" */
  insert_reservations?: Maybe<Reservations_Mutation_Response>;
  /** insert a single row into the table: "reservations" */
  insert_reservations_one?: Maybe<Reservations>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update data of the table: "product_category" */
  update_product_category?: Maybe<Product_Category_Mutation_Response>;
  /** update single row of the table: "product_category" */
  update_product_category_by_pk?: Maybe<Product_Category>;
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>;
  /** update data of the table: "reservations" */
  update_reservations?: Maybe<Reservations_Mutation_Response>;
  /** update single row of the table: "reservations" */
  update_reservations_by_pk?: Maybe<Reservations>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Product_CategoryArgs = {
  where: Product_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Category_By_PkArgs = {
  category_id: Scalars['bigint'];
  product_id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_ReservationsArgs = {
  where: Reservations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Reservations_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: Maybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: Maybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_CategoryArgs = {
  objects: Array<Product_Category_Insert_Input>;
  on_conflict?: Maybe<Product_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Category_OneArgs = {
  object: Product_Category_Insert_Input;
  on_conflict?: Maybe<Product_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: Maybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: Maybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ReservationsArgs = {
  objects: Array<Reservations_Insert_Input>;
  on_conflict?: Maybe<Reservations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Reservations_OneArgs = {
  object: Reservations_Insert_Input;
  on_conflict?: Maybe<Reservations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _inc?: Maybe<Categories_Inc_Input>;
  _set?: Maybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _inc?: Maybe<Categories_Inc_Input>;
  _set?: Maybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_CategoryArgs = {
  _inc?: Maybe<Product_Category_Inc_Input>;
  _set?: Maybe<Product_Category_Set_Input>;
  where: Product_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Category_By_PkArgs = {
  _inc?: Maybe<Product_Category_Inc_Input>;
  _set?: Maybe<Product_Category_Set_Input>;
  pk_columns: Product_Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _inc?: Maybe<Products_Inc_Input>;
  _set?: Maybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _inc?: Maybe<Products_Inc_Input>;
  _set?: Maybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ReservationsArgs = {
  _inc?: Maybe<Reservations_Inc_Input>;
  _set?: Maybe<Reservations_Set_Input>;
  where: Reservations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Reservations_By_PkArgs = {
  _inc?: Maybe<Reservations_Inc_Input>;
  _set?: Maybe<Reservations_Set_Input>;
  pk_columns: Reservations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/**
 * 中間テーブル
 *
 *
 * columns and relationships of "product_category"
 *
 */
export type Product_Category = {
  __typename?: 'product_category';
  /** An object relationship */
  category: Categories;
  category_id: Scalars['bigint'];
  /** An object relationship */
  product: Products;
  product_id: Scalars['bigint'];
};

/** aggregated selection of "product_category" */
export type Product_Category_Aggregate = {
  __typename?: 'product_category_aggregate';
  aggregate?: Maybe<Product_Category_Aggregate_Fields>;
  nodes: Array<Product_Category>;
};

/** aggregate fields of "product_category" */
export type Product_Category_Aggregate_Fields = {
  __typename?: 'product_category_aggregate_fields';
  avg?: Maybe<Product_Category_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Product_Category_Max_Fields>;
  min?: Maybe<Product_Category_Min_Fields>;
  stddev?: Maybe<Product_Category_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Category_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Category_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Category_Sum_Fields>;
  var_pop?: Maybe<Product_Category_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Category_Var_Samp_Fields>;
  variance?: Maybe<Product_Category_Variance_Fields>;
};


/** aggregate fields of "product_category" */
export type Product_Category_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_Category_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "product_category" */
export type Product_Category_Aggregate_Order_By = {
  avg?: Maybe<Product_Category_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Product_Category_Max_Order_By>;
  min?: Maybe<Product_Category_Min_Order_By>;
  stddev?: Maybe<Product_Category_Stddev_Order_By>;
  stddev_pop?: Maybe<Product_Category_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Product_Category_Stddev_Samp_Order_By>;
  sum?: Maybe<Product_Category_Sum_Order_By>;
  var_pop?: Maybe<Product_Category_Var_Pop_Order_By>;
  var_samp?: Maybe<Product_Category_Var_Samp_Order_By>;
  variance?: Maybe<Product_Category_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "product_category" */
export type Product_Category_Arr_Rel_Insert_Input = {
  data: Array<Product_Category_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Product_Category_On_Conflict>;
};

/** aggregate avg on columns */
export type Product_Category_Avg_Fields = {
  __typename?: 'product_category_avg_fields';
  category_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "product_category" */
export type Product_Category_Avg_Order_By = {
  category_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product_category". All fields are combined with a logical 'AND'. */
export type Product_Category_Bool_Exp = {
  _and?: Maybe<Array<Product_Category_Bool_Exp>>;
  _not?: Maybe<Product_Category_Bool_Exp>;
  _or?: Maybe<Array<Product_Category_Bool_Exp>>;
  category?: Maybe<Categories_Bool_Exp>;
  category_id?: Maybe<Bigint_Comparison_Exp>;
  product?: Maybe<Products_Bool_Exp>;
  product_id?: Maybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_category" */
export enum Product_Category_Constraint {
  /** unique or primary key constraint */
  ProductCategoryPkey = 'product_category_pkey'
}

/** input type for incrementing numeric columns in table "product_category" */
export type Product_Category_Inc_Input = {
  category_id?: Maybe<Scalars['bigint']>;
  product_id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "product_category" */
export type Product_Category_Insert_Input = {
  category?: Maybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: Maybe<Scalars['bigint']>;
  product?: Maybe<Products_Obj_Rel_Insert_Input>;
  product_id?: Maybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Product_Category_Max_Fields = {
  __typename?: 'product_category_max_fields';
  category_id?: Maybe<Scalars['bigint']>;
  product_id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "product_category" */
export type Product_Category_Max_Order_By = {
  category_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Category_Min_Fields = {
  __typename?: 'product_category_min_fields';
  category_id?: Maybe<Scalars['bigint']>;
  product_id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "product_category" */
export type Product_Category_Min_Order_By = {
  category_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "product_category" */
export type Product_Category_Mutation_Response = {
  __typename?: 'product_category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Category>;
};

/** on conflict condition type for table "product_category" */
export type Product_Category_On_Conflict = {
  constraint: Product_Category_Constraint;
  update_columns?: Array<Product_Category_Update_Column>;
  where?: Maybe<Product_Category_Bool_Exp>;
};

/** Ordering options when selecting data from "product_category". */
export type Product_Category_Order_By = {
  category?: Maybe<Categories_Order_By>;
  category_id?: Maybe<Order_By>;
  product?: Maybe<Products_Order_By>;
  product_id?: Maybe<Order_By>;
};

/** primary key columns input for table: product_category */
export type Product_Category_Pk_Columns_Input = {
  category_id: Scalars['bigint'];
  product_id: Scalars['bigint'];
};

/** select columns of table "product_category" */
export enum Product_Category_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  ProductId = 'product_id'
}

/** input type for updating data in table "product_category" */
export type Product_Category_Set_Input = {
  category_id?: Maybe<Scalars['bigint']>;
  product_id?: Maybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Product_Category_Stddev_Fields = {
  __typename?: 'product_category_stddev_fields';
  category_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "product_category" */
export type Product_Category_Stddev_Order_By = {
  category_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Product_Category_Stddev_Pop_Fields = {
  __typename?: 'product_category_stddev_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "product_category" */
export type Product_Category_Stddev_Pop_Order_By = {
  category_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Product_Category_Stddev_Samp_Fields = {
  __typename?: 'product_category_stddev_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "product_category" */
export type Product_Category_Stddev_Samp_Order_By = {
  category_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Product_Category_Sum_Fields = {
  __typename?: 'product_category_sum_fields';
  category_id?: Maybe<Scalars['bigint']>;
  product_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "product_category" */
export type Product_Category_Sum_Order_By = {
  category_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
};

/** update columns of table "product_category" */
export enum Product_Category_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  ProductId = 'product_id'
}

/** aggregate var_pop on columns */
export type Product_Category_Var_Pop_Fields = {
  __typename?: 'product_category_var_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "product_category" */
export type Product_Category_Var_Pop_Order_By = {
  category_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Product_Category_Var_Samp_Fields = {
  __typename?: 'product_category_var_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "product_category" */
export type Product_Category_Var_Samp_Order_By = {
  category_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Product_Category_Variance_Fields = {
  __typename?: 'product_category_variance_fields';
  category_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "product_category" */
export type Product_Category_Variance_Order_By = {
  category_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
};

/** columns and relationships of "products" */
export type Products = {
  __typename?: 'products';
  created_at: Scalars['timestamptz'];
  id: Scalars['bigint'];
  name: Scalars['String'];
  price: Scalars['Int'];
  /** An array relationship */
  product_categories: Array<Product_Category>;
  /** An aggregate relationship */
  product_categories_aggregate: Product_Category_Aggregate;
  /** 在庫数 */
  quantity?: Maybe<Scalars['Int']>;
  /** An array relationship */
  reservations: Array<Reservations>;
  /** An aggregate relationship */
  reservations_aggregate: Reservations_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "products" */
export type ProductsProduct_CategoriesArgs = {
  distinct_on?: Maybe<Array<Product_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Category_Order_By>>;
  where?: Maybe<Product_Category_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsProduct_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Category_Order_By>>;
  where?: Maybe<Product_Category_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsReservationsArgs = {
  distinct_on?: Maybe<Array<Reservations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reservations_Order_By>>;
  where?: Maybe<Reservations_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsReservations_AggregateArgs = {
  distinct_on?: Maybe<Array<Reservations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reservations_Order_By>>;
  where?: Maybe<Reservations_Bool_Exp>;
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: 'products_aggregate';
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: 'products_aggregate_fields';
  avg?: Maybe<Products_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};


/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Products_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'products_avg_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: Maybe<Array<Products_Bool_Exp>>;
  _not?: Maybe<Products_Bool_Exp>;
  _or?: Maybe<Array<Products_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  price?: Maybe<Int_Comparison_Exp>;
  product_categories?: Maybe<Product_Category_Bool_Exp>;
  quantity?: Maybe<Int_Comparison_Exp>;
  reservations?: Maybe<Reservations_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint */
  ProductsPkey = 'products_pkey'
}

/** input type for incrementing numeric columns in table "products" */
export type Products_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['Int']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  product_categories?: Maybe<Product_Category_Arr_Rel_Insert_Input>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['Int']>;
  reservations?: Maybe<Reservations_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'products_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Products>;
};

/** input type for inserting object relation for remote table "products" */
export type Products_Obj_Rel_Insert_Input = {
  data: Products_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Products_On_Conflict>;
};

/** on conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns?: Array<Products_Update_Column>;
  where?: Maybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  product_categories_aggregate?: Maybe<Product_Category_Aggregate_Order_By>;
  quantity?: Maybe<Order_By>;
  reservations_aggregate?: Maybe<Reservations_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: products */
export type Products_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['Int']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['Int']>;
};

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: 'products_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  /** 在庫数 */
  quantity?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "product_category" */
  product_category: Array<Product_Category>;
  /** fetch aggregated fields from the table: "product_category" */
  product_category_aggregate: Product_Category_Aggregate;
  /** fetch data from the table: "product_category" using primary key columns */
  product_category_by_pk?: Maybe<Product_Category>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** An array relationship */
  reservations: Array<Reservations>;
  /** An aggregate relationship */
  reservations_aggregate: Reservations_Aggregate;
  /** fetch data from the table: "reservations" using primary key columns */
  reservations_by_pk?: Maybe<Reservations>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootProduct_CategoryArgs = {
  distinct_on?: Maybe<Array<Product_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Category_Order_By>>;
  where?: Maybe<Product_Category_Bool_Exp>;
};


export type Query_RootProduct_Category_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Category_Order_By>>;
  where?: Maybe<Product_Category_Bool_Exp>;
};


export type Query_RootProduct_Category_By_PkArgs = {
  category_id: Scalars['bigint'];
  product_id: Scalars['bigint'];
};


export type Query_RootProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


export type Query_RootProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


export type Query_RootProducts_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootReservationsArgs = {
  distinct_on?: Maybe<Array<Reservations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reservations_Order_By>>;
  where?: Maybe<Reservations_Bool_Exp>;
};


export type Query_RootReservations_AggregateArgs = {
  distinct_on?: Maybe<Array<Reservations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reservations_Order_By>>;
  where?: Maybe<Reservations_Bool_Exp>;
};


export type Query_RootReservations_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "reservations" */
export type Reservations = {
  __typename?: 'reservations';
  amount: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  id: Scalars['bigint'];
  /** An object relationship */
  product: Products;
  product_id: Scalars['bigint'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "reservations" */
export type Reservations_Aggregate = {
  __typename?: 'reservations_aggregate';
  aggregate?: Maybe<Reservations_Aggregate_Fields>;
  nodes: Array<Reservations>;
};

/** aggregate fields of "reservations" */
export type Reservations_Aggregate_Fields = {
  __typename?: 'reservations_aggregate_fields';
  avg?: Maybe<Reservations_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Reservations_Max_Fields>;
  min?: Maybe<Reservations_Min_Fields>;
  stddev?: Maybe<Reservations_Stddev_Fields>;
  stddev_pop?: Maybe<Reservations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Reservations_Stddev_Samp_Fields>;
  sum?: Maybe<Reservations_Sum_Fields>;
  var_pop?: Maybe<Reservations_Var_Pop_Fields>;
  var_samp?: Maybe<Reservations_Var_Samp_Fields>;
  variance?: Maybe<Reservations_Variance_Fields>;
};


/** aggregate fields of "reservations" */
export type Reservations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Reservations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "reservations" */
export type Reservations_Aggregate_Order_By = {
  avg?: Maybe<Reservations_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Reservations_Max_Order_By>;
  min?: Maybe<Reservations_Min_Order_By>;
  stddev?: Maybe<Reservations_Stddev_Order_By>;
  stddev_pop?: Maybe<Reservations_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Reservations_Stddev_Samp_Order_By>;
  sum?: Maybe<Reservations_Sum_Order_By>;
  var_pop?: Maybe<Reservations_Var_Pop_Order_By>;
  var_samp?: Maybe<Reservations_Var_Samp_Order_By>;
  variance?: Maybe<Reservations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "reservations" */
export type Reservations_Arr_Rel_Insert_Input = {
  data: Array<Reservations_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Reservations_On_Conflict>;
};

/** aggregate avg on columns */
export type Reservations_Avg_Fields = {
  __typename?: 'reservations_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "reservations" */
export type Reservations_Avg_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "reservations". All fields are combined with a logical 'AND'. */
export type Reservations_Bool_Exp = {
  _and?: Maybe<Array<Reservations_Bool_Exp>>;
  _not?: Maybe<Reservations_Bool_Exp>;
  _or?: Maybe<Array<Reservations_Bool_Exp>>;
  amount?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  product?: Maybe<Products_Bool_Exp>;
  product_id?: Maybe<Bigint_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "reservations" */
export enum Reservations_Constraint {
  /** unique or primary key constraint */
  ReservationsPkey = 'reservations_pkey'
}

/** input type for incrementing numeric columns in table "reservations" */
export type Reservations_Inc_Input = {
  amount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  product_id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "reservations" */
export type Reservations_Insert_Input = {
  amount?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  product?: Maybe<Products_Obj_Rel_Insert_Input>;
  product_id?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Reservations_Max_Fields = {
  __typename?: 'reservations_max_fields';
  amount?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  product_id?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "reservations" */
export type Reservations_Max_Order_By = {
  amount?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Reservations_Min_Fields = {
  __typename?: 'reservations_min_fields';
  amount?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  product_id?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "reservations" */
export type Reservations_Min_Order_By = {
  amount?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "reservations" */
export type Reservations_Mutation_Response = {
  __typename?: 'reservations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Reservations>;
};

/** on conflict condition type for table "reservations" */
export type Reservations_On_Conflict = {
  constraint: Reservations_Constraint;
  update_columns?: Array<Reservations_Update_Column>;
  where?: Maybe<Reservations_Bool_Exp>;
};

/** Ordering options when selecting data from "reservations". */
export type Reservations_Order_By = {
  amount?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product?: Maybe<Products_Order_By>;
  product_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: reservations */
export type Reservations_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "reservations" */
export enum Reservations_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "reservations" */
export type Reservations_Set_Input = {
  amount?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  product_id?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Reservations_Stddev_Fields = {
  __typename?: 'reservations_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "reservations" */
export type Reservations_Stddev_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Reservations_Stddev_Pop_Fields = {
  __typename?: 'reservations_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "reservations" */
export type Reservations_Stddev_Pop_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Reservations_Stddev_Samp_Fields = {
  __typename?: 'reservations_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "reservations" */
export type Reservations_Stddev_Samp_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Reservations_Sum_Fields = {
  __typename?: 'reservations_sum_fields';
  amount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  product_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "reservations" */
export type Reservations_Sum_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
};

/** update columns of table "reservations" */
export enum Reservations_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Reservations_Var_Pop_Fields = {
  __typename?: 'reservations_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "reservations" */
export type Reservations_Var_Pop_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Reservations_Var_Samp_Fields = {
  __typename?: 'reservations_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "reservations" */
export type Reservations_Var_Samp_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Reservations_Variance_Fields = {
  __typename?: 'reservations_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "reservations" */
export type Reservations_Variance_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "product_category" */
  product_category: Array<Product_Category>;
  /** fetch aggregated fields from the table: "product_category" */
  product_category_aggregate: Product_Category_Aggregate;
  /** fetch data from the table: "product_category" using primary key columns */
  product_category_by_pk?: Maybe<Product_Category>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** An array relationship */
  reservations: Array<Reservations>;
  /** An aggregate relationship */
  reservations_aggregate: Reservations_Aggregate;
  /** fetch data from the table: "reservations" using primary key columns */
  reservations_by_pk?: Maybe<Reservations>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootProduct_CategoryArgs = {
  distinct_on?: Maybe<Array<Product_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Category_Order_By>>;
  where?: Maybe<Product_Category_Bool_Exp>;
};


export type Subscription_RootProduct_Category_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Category_Order_By>>;
  where?: Maybe<Product_Category_Bool_Exp>;
};


export type Subscription_RootProduct_Category_By_PkArgs = {
  category_id: Scalars['bigint'];
  product_id: Scalars['bigint'];
};


export type Subscription_RootProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootReservationsArgs = {
  distinct_on?: Maybe<Array<Reservations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reservations_Order_By>>;
  where?: Maybe<Reservations_Bool_Exp>;
};


export type Subscription_RootReservations_AggregateArgs = {
  distinct_on?: Maybe<Array<Reservations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reservations_Order_By>>;
  where?: Maybe<Reservations_Bool_Exp>;
};


export type Subscription_RootReservations_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  birthday: Scalars['date'];
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  password: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  birthday?: Maybe<Date_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  birthday?: Maybe<Scalars['date']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  birthday?: Maybe<Scalars['date']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  birthday?: Maybe<Scalars['date']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  birthday?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Birthday = 'birthday',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  birthday?: Maybe<Scalars['date']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Birthday = 'birthday',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type CreateCategoryMutationVariables = Exact<{
  object?: Maybe<Categories_Insert_Input>;
}>;


export type CreateCategoryMutation = { __typename?: 'mutation_root', insert_categories_one?: { __typename?: 'categories', id: any, name: string } | null | undefined };

export type GetCategoriesWithProductQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesWithProductQuery = { __typename?: 'query_root', categories: Array<{ __typename?: 'categories', id: any, name: string, product_categories: Array<{ __typename?: 'product_category', product: { __typename?: 'products', name: string, price: number, id: any } }> }> };

export type GetCategoryByIdQueryVariables = Exact<{
  id: Scalars['bigint'];
}>;


export type GetCategoryByIdQuery = { __typename?: 'query_root', categories: Array<{ __typename?: 'categories', id: any, name: string, created_at: any, updated_at: any }> };

export type UpdateCategoryMutationVariables = Exact<{
  id?: Maybe<Scalars['bigint']>;
  object?: Maybe<Categories_Set_Input>;
}>;


export type UpdateCategoryMutation = { __typename?: 'mutation_root', update_categories?: { __typename?: 'categories_mutation_response', returning: Array<{ __typename?: 'categories', id: any, name: string }> } | null | undefined };


export const CreateCategoryDocument = gql`
    mutation CreateCategory($object: categories_insert_input = {}) {
  insert_categories_one(object: $object) {
    id
    name
  }
}
    `;
export type CreateCategoryMutationFn = Apollo.MutationFunction<CreateCategoryMutation, CreateCategoryMutationVariables>;

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useCreateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateCategoryMutation, CreateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument, options);
      }
export type CreateCategoryMutationHookResult = ReturnType<typeof useCreateCategoryMutation>;
export type CreateCategoryMutationResult = Apollo.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<CreateCategoryMutation, CreateCategoryMutationVariables>;
export const GetCategoriesWithProductDocument = gql`
    query GetCategoriesWithProduct {
  categories(order_by: {id: asc}) {
    id
    name
    product_categories {
      product {
        name
        price
        id
      }
    }
  }
}
    `;

/**
 * __useGetCategoriesWithProductQuery__
 *
 * To run a query within a React component, call `useGetCategoriesWithProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesWithProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesWithProductQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesWithProductQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesWithProductQuery, GetCategoriesWithProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriesWithProductQuery, GetCategoriesWithProductQueryVariables>(GetCategoriesWithProductDocument, options);
      }
export function useGetCategoriesWithProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesWithProductQuery, GetCategoriesWithProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriesWithProductQuery, GetCategoriesWithProductQueryVariables>(GetCategoriesWithProductDocument, options);
        }
export type GetCategoriesWithProductQueryHookResult = ReturnType<typeof useGetCategoriesWithProductQuery>;
export type GetCategoriesWithProductLazyQueryHookResult = ReturnType<typeof useGetCategoriesWithProductLazyQuery>;
export type GetCategoriesWithProductQueryResult = Apollo.QueryResult<GetCategoriesWithProductQuery, GetCategoriesWithProductQueryVariables>;
export const GetCategoryByIdDocument = gql`
    query GetCategoryById($id: bigint!) {
  categories(where: {id: {_eq: $id}}, limit: 1) {
    id
    name
    created_at
    updated_at
  }
}
    `;

/**
 * __useGetCategoryByIdQuery__
 *
 * To run a query within a React component, call `useGetCategoryByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCategoryByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>(GetCategoryByIdDocument, options);
      }
export function useGetCategoryByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>(GetCategoryByIdDocument, options);
        }
export type GetCategoryByIdQueryHookResult = ReturnType<typeof useGetCategoryByIdQuery>;
export type GetCategoryByIdLazyQueryHookResult = ReturnType<typeof useGetCategoryByIdLazyQuery>;
export type GetCategoryByIdQueryResult = Apollo.QueryResult<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>;
export const UpdateCategoryDocument = gql`
    mutation UpdateCategory($id: bigint = "", $object: categories_set_input = {}) {
  update_categories(where: {id: {_eq: $id}}, _set: $object) {
    returning {
      id
      name
    }
  }
}
    `;
export type UpdateCategoryMutationFn = Apollo.MutationFunction<UpdateCategoryMutation, UpdateCategoryMutationVariables>;

/**
 * __useUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryMutation, { data, loading, error }] = useUpdateCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      object: // value for 'object'
 *   },
 * });
 */
export function useUpdateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCategoryMutation, UpdateCategoryMutationVariables>(UpdateCategoryDocument, options);
      }
export type UpdateCategoryMutationHookResult = ReturnType<typeof useUpdateCategoryMutation>;
export type UpdateCategoryMutationResult = Apollo.MutationResult<UpdateCategoryMutation>;
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>;