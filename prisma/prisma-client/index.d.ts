
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Challenge
 * 
 */
export type Challenge = $Result.DefaultSelection<Prisma.$ChallengePayload>
/**
 * Model UserChallenge
 * 
 */
export type UserChallenge = $Result.DefaultSelection<Prisma.$UserChallengePayload>
/**
 * Model TaskSubmission
 * 
 */
export type TaskSubmission = $Result.DefaultSelection<Prisma.$TaskSubmissionPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.challenge`: Exposes CRUD operations for the **Challenge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Challenges
    * const challenges = await prisma.challenge.findMany()
    * ```
    */
  get challenge(): Prisma.ChallengeDelegate<ExtArgs>;

  /**
   * `prisma.userChallenge`: Exposes CRUD operations for the **UserChallenge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserChallenges
    * const userChallenges = await prisma.userChallenge.findMany()
    * ```
    */
  get userChallenge(): Prisma.UserChallengeDelegate<ExtArgs>;

  /**
   * `prisma.taskSubmission`: Exposes CRUD operations for the **TaskSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskSubmissions
    * const taskSubmissions = await prisma.taskSubmission.findMany()
    * ```
    */
  get taskSubmission(): Prisma.TaskSubmissionDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.18.0
   * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Challenge: 'Challenge',
    UserChallenge: 'UserChallenge',
    TaskSubmission: 'TaskSubmission'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "challenge" | "userChallenge" | "taskSubmission"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Challenge: {
        payload: Prisma.$ChallengePayload<ExtArgs>
        fields: Prisma.ChallengeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChallengeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChallengeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          findFirst: {
            args: Prisma.ChallengeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChallengeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          findMany: {
            args: Prisma.ChallengeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          create: {
            args: Prisma.ChallengeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          createMany: {
            args: Prisma.ChallengeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChallengeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          delete: {
            args: Prisma.ChallengeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          update: {
            args: Prisma.ChallengeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          deleteMany: {
            args: Prisma.ChallengeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChallengeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChallengeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          aggregate: {
            args: Prisma.ChallengeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallenge>
          }
          groupBy: {
            args: Prisma.ChallengeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallengeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChallengeCountArgs<ExtArgs>
            result: $Utils.Optional<ChallengeCountAggregateOutputType> | number
          }
        }
      }
      UserChallenge: {
        payload: Prisma.$UserChallengePayload<ExtArgs>
        fields: Prisma.UserChallengeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserChallengeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserChallengeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>
          }
          findFirst: {
            args: Prisma.UserChallengeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserChallengeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>
          }
          findMany: {
            args: Prisma.UserChallengeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>[]
          }
          create: {
            args: Prisma.UserChallengeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>
          }
          createMany: {
            args: Prisma.UserChallengeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserChallengeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>[]
          }
          delete: {
            args: Prisma.UserChallengeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>
          }
          update: {
            args: Prisma.UserChallengeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>
          }
          deleteMany: {
            args: Prisma.UserChallengeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserChallengeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserChallengeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>
          }
          aggregate: {
            args: Prisma.UserChallengeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserChallenge>
          }
          groupBy: {
            args: Prisma.UserChallengeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserChallengeGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserChallengeCountArgs<ExtArgs>
            result: $Utils.Optional<UserChallengeCountAggregateOutputType> | number
          }
        }
      }
      TaskSubmission: {
        payload: Prisma.$TaskSubmissionPayload<ExtArgs>
        fields: Prisma.TaskSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload>
          }
          findFirst: {
            args: Prisma.TaskSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload>
          }
          findMany: {
            args: Prisma.TaskSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload>[]
          }
          create: {
            args: Prisma.TaskSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload>
          }
          createMany: {
            args: Prisma.TaskSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload>[]
          }
          delete: {
            args: Prisma.TaskSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload>
          }
          update: {
            args: Prisma.TaskSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.TaskSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload>
          }
          aggregate: {
            args: Prisma.TaskSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskSubmission>
          }
          groupBy: {
            args: Prisma.TaskSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<TaskSubmissionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    UserChallenge: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserChallenge?: boolean | UserCountOutputTypeCountUserChallengeArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserChallengeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserChallengeWhereInput
  }


  /**
   * Count Type ChallengeCountOutputType
   */

  export type ChallengeCountOutputType = {
    UserChallenge: number
  }

  export type ChallengeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserChallenge?: boolean | ChallengeCountOutputTypeCountUserChallengeArgs
  }

  // Custom InputTypes
  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeCountOutputType
     */
    select?: ChallengeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeCountUserChallengeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserChallengeWhereInput
  }


  /**
   * Count Type UserChallengeCountOutputType
   */

  export type UserChallengeCountOutputType = {
    TaskSubmission: number
  }

  export type UserChallengeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TaskSubmission?: boolean | UserChallengeCountOutputTypeCountTaskSubmissionArgs
  }

  // Custom InputTypes
  /**
   * UserChallengeCountOutputType without action
   */
  export type UserChallengeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallengeCountOutputType
     */
    select?: UserChallengeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserChallengeCountOutputType without action
   */
  export type UserChallengeCountOutputTypeCountTaskSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskSubmissionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    uniqueCode: string | null
    firstName: string | null
    lastName: string | null
    password: string | null
    linkedInLink: string | null
    upworkLink: string | null
    facebookLink: string | null
    twitterLink: string | null
    funnelLink: string | null
    mediumLink: string | null
    goHighLevelAccountName: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    uniqueCode: string | null
    firstName: string | null
    lastName: string | null
    password: string | null
    linkedInLink: string | null
    upworkLink: string | null
    facebookLink: string | null
    twitterLink: string | null
    funnelLink: string | null
    mediumLink: string | null
    goHighLevelAccountName: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    uniqueCode: number
    firstName: number
    lastName: number
    password: number
    linkedInLink: number
    upworkLink: number
    facebookLink: number
    twitterLink: number
    funnelLink: number
    mediumLink: number
    goHighLevelAccountName: number
    phoneNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    uniqueCode?: true
    firstName?: true
    lastName?: true
    password?: true
    linkedInLink?: true
    upworkLink?: true
    facebookLink?: true
    twitterLink?: true
    funnelLink?: true
    mediumLink?: true
    goHighLevelAccountName?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    uniqueCode?: true
    firstName?: true
    lastName?: true
    password?: true
    linkedInLink?: true
    upworkLink?: true
    facebookLink?: true
    twitterLink?: true
    funnelLink?: true
    mediumLink?: true
    goHighLevelAccountName?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    uniqueCode?: true
    firstName?: true
    lastName?: true
    password?: true
    linkedInLink?: true
    upworkLink?: true
    facebookLink?: true
    twitterLink?: true
    funnelLink?: true
    mediumLink?: true
    goHighLevelAccountName?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    uniqueCode: string
    firstName: string
    lastName: string
    password: string
    linkedInLink: string | null
    upworkLink: string | null
    facebookLink: string | null
    twitterLink: string | null
    funnelLink: string | null
    mediumLink: string | null
    goHighLevelAccountName: string | null
    phoneNumber: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    uniqueCode?: boolean
    firstName?: boolean
    lastName?: boolean
    password?: boolean
    linkedInLink?: boolean
    upworkLink?: boolean
    facebookLink?: boolean
    twitterLink?: boolean
    funnelLink?: boolean
    mediumLink?: boolean
    goHighLevelAccountName?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    UserChallenge?: boolean | User$UserChallengeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    uniqueCode?: boolean
    firstName?: boolean
    lastName?: boolean
    password?: boolean
    linkedInLink?: boolean
    upworkLink?: boolean
    facebookLink?: boolean
    twitterLink?: boolean
    funnelLink?: boolean
    mediumLink?: boolean
    goHighLevelAccountName?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    uniqueCode?: boolean
    firstName?: boolean
    lastName?: boolean
    password?: boolean
    linkedInLink?: boolean
    upworkLink?: boolean
    facebookLink?: boolean
    twitterLink?: boolean
    funnelLink?: boolean
    mediumLink?: boolean
    goHighLevelAccountName?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserChallenge?: boolean | User$UserChallengeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      UserChallenge: Prisma.$UserChallengePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      uniqueCode: string
      firstName: string
      lastName: string
      password: string
      linkedInLink: string | null
      upworkLink: string | null
      facebookLink: string | null
      twitterLink: string | null
      funnelLink: string | null
      mediumLink: string | null
      goHighLevelAccountName: string | null
      phoneNumber: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserChallenge<T extends User$UserChallengeArgs<ExtArgs> = {}>(args?: Subset<T, User$UserChallengeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly uniqueCode: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly linkedInLink: FieldRef<"User", 'String'>
    readonly upworkLink: FieldRef<"User", 'String'>
    readonly facebookLink: FieldRef<"User", 'String'>
    readonly twitterLink: FieldRef<"User", 'String'>
    readonly funnelLink: FieldRef<"User", 'String'>
    readonly mediumLink: FieldRef<"User", 'String'>
    readonly goHighLevelAccountName: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.UserChallenge
   */
  export type User$UserChallengeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    where?: UserChallengeWhereInput
    orderBy?: UserChallengeOrderByWithRelationInput | UserChallengeOrderByWithRelationInput[]
    cursor?: UserChallengeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserChallengeScalarFieldEnum | UserChallengeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Challenge
   */

  export type AggregateChallenge = {
    _count: ChallengeCountAggregateOutputType | null
    _avg: ChallengeAvgAggregateOutputType | null
    _sum: ChallengeSumAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  export type ChallengeAvgAggregateOutputType = {
    year: number | null
  }

  export type ChallengeSumAggregateOutputType = {
    year: number | null
  }

  export type ChallengeMinAggregateOutputType = {
    id: string | null
    month: string | null
    year: number | null
    current: boolean | null
    acceptSubmission: boolean | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChallengeMaxAggregateOutputType = {
    id: string | null
    month: string | null
    year: number | null
    current: boolean | null
    acceptSubmission: boolean | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChallengeCountAggregateOutputType = {
    id: number
    month: number
    year: number
    current: number
    acceptSubmission: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChallengeAvgAggregateInputType = {
    year?: true
  }

  export type ChallengeSumAggregateInputType = {
    year?: true
  }

  export type ChallengeMinAggregateInputType = {
    id?: true
    month?: true
    year?: true
    current?: true
    acceptSubmission?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChallengeMaxAggregateInputType = {
    id?: true
    month?: true
    year?: true
    current?: true
    acceptSubmission?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChallengeCountAggregateInputType = {
    id?: true
    month?: true
    year?: true
    current?: true
    acceptSubmission?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChallengeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challenge to aggregate.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Challenges
    **/
    _count?: true | ChallengeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChallengeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChallengeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengeMaxAggregateInputType
  }

  export type GetChallengeAggregateType<T extends ChallengeAggregateArgs> = {
        [P in keyof T & keyof AggregateChallenge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallenge[P]>
      : GetScalarType<T[P], AggregateChallenge[P]>
  }




  export type ChallengeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeWhereInput
    orderBy?: ChallengeOrderByWithAggregationInput | ChallengeOrderByWithAggregationInput[]
    by: ChallengeScalarFieldEnum[] | ChallengeScalarFieldEnum
    having?: ChallengeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengeCountAggregateInputType | true
    _avg?: ChallengeAvgAggregateInputType
    _sum?: ChallengeSumAggregateInputType
    _min?: ChallengeMinAggregateInputType
    _max?: ChallengeMaxAggregateInputType
  }

  export type ChallengeGroupByOutputType = {
    id: string
    month: string
    year: number
    current: boolean
    acceptSubmission: boolean
    startDate: Date
    endDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ChallengeCountAggregateOutputType | null
    _avg: ChallengeAvgAggregateOutputType | null
    _sum: ChallengeSumAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  type GetChallengeGroupByPayload<T extends ChallengeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
        }
      >
    >


  export type ChallengeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    month?: boolean
    year?: boolean
    current?: boolean
    acceptSubmission?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    UserChallenge?: boolean | Challenge$UserChallengeArgs<ExtArgs>
    _count?: boolean | ChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    month?: boolean
    year?: boolean
    current?: boolean
    acceptSubmission?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectScalar = {
    id?: boolean
    month?: boolean
    year?: boolean
    current?: boolean
    acceptSubmission?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChallengeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserChallenge?: boolean | Challenge$UserChallengeArgs<ExtArgs>
    _count?: boolean | ChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChallengeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChallengePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Challenge"
    objects: {
      UserChallenge: Prisma.$UserChallengePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      month: string
      year: number
      current: boolean
      acceptSubmission: boolean
      startDate: Date
      endDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["challenge"]>
    composites: {}
  }

  type ChallengeGetPayload<S extends boolean | null | undefined | ChallengeDefaultArgs> = $Result.GetResult<Prisma.$ChallengePayload, S>

  type ChallengeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChallengeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChallengeCountAggregateInputType | true
    }

  export interface ChallengeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Challenge'], meta: { name: 'Challenge' } }
    /**
     * Find zero or one Challenge that matches the filter.
     * @param {ChallengeFindUniqueArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChallengeFindUniqueArgs>(args: SelectSubset<T, ChallengeFindUniqueArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Challenge that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ChallengeFindUniqueOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChallengeFindUniqueOrThrowArgs>(args: SelectSubset<T, ChallengeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Challenge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindFirstArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChallengeFindFirstArgs>(args?: SelectSubset<T, ChallengeFindFirstArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Challenge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindFirstOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChallengeFindFirstOrThrowArgs>(args?: SelectSubset<T, ChallengeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Challenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Challenges
     * const challenges = await prisma.challenge.findMany()
     * 
     * // Get first 10 Challenges
     * const challenges = await prisma.challenge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengeWithIdOnly = await prisma.challenge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChallengeFindManyArgs>(args?: SelectSubset<T, ChallengeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Challenge.
     * @param {ChallengeCreateArgs} args - Arguments to create a Challenge.
     * @example
     * // Create one Challenge
     * const Challenge = await prisma.challenge.create({
     *   data: {
     *     // ... data to create a Challenge
     *   }
     * })
     * 
     */
    create<T extends ChallengeCreateArgs>(args: SelectSubset<T, ChallengeCreateArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Challenges.
     * @param {ChallengeCreateManyArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenge = await prisma.challenge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChallengeCreateManyArgs>(args?: SelectSubset<T, ChallengeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Challenges and returns the data saved in the database.
     * @param {ChallengeCreateManyAndReturnArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenge = await prisma.challenge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Challenges and only return the `id`
     * const challengeWithIdOnly = await prisma.challenge.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChallengeCreateManyAndReturnArgs>(args?: SelectSubset<T, ChallengeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Challenge.
     * @param {ChallengeDeleteArgs} args - Arguments to delete one Challenge.
     * @example
     * // Delete one Challenge
     * const Challenge = await prisma.challenge.delete({
     *   where: {
     *     // ... filter to delete one Challenge
     *   }
     * })
     * 
     */
    delete<T extends ChallengeDeleteArgs>(args: SelectSubset<T, ChallengeDeleteArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Challenge.
     * @param {ChallengeUpdateArgs} args - Arguments to update one Challenge.
     * @example
     * // Update one Challenge
     * const challenge = await prisma.challenge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChallengeUpdateArgs>(args: SelectSubset<T, ChallengeUpdateArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Challenges.
     * @param {ChallengeDeleteManyArgs} args - Arguments to filter Challenges to delete.
     * @example
     * // Delete a few Challenges
     * const { count } = await prisma.challenge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChallengeDeleteManyArgs>(args?: SelectSubset<T, ChallengeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Challenges
     * const challenge = await prisma.challenge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChallengeUpdateManyArgs>(args: SelectSubset<T, ChallengeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Challenge.
     * @param {ChallengeUpsertArgs} args - Arguments to update or create a Challenge.
     * @example
     * // Update or create a Challenge
     * const challenge = await prisma.challenge.upsert({
     *   create: {
     *     // ... data to create a Challenge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Challenge we want to update
     *   }
     * })
     */
    upsert<T extends ChallengeUpsertArgs>(args: SelectSubset<T, ChallengeUpsertArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeCountArgs} args - Arguments to filter Challenges to count.
     * @example
     * // Count the number of Challenges
     * const count = await prisma.challenge.count({
     *   where: {
     *     // ... the filter for the Challenges we want to count
     *   }
     * })
    **/
    count<T extends ChallengeCountArgs>(
      args?: Subset<T, ChallengeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChallengeAggregateArgs>(args: Subset<T, ChallengeAggregateArgs>): Prisma.PrismaPromise<GetChallengeAggregateType<T>>

    /**
     * Group by Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChallengeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChallengeGroupByArgs['orderBy'] }
        : { orderBy?: ChallengeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChallengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Challenge model
   */
  readonly fields: ChallengeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Challenge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChallengeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserChallenge<T extends Challenge$UserChallengeArgs<ExtArgs> = {}>(args?: Subset<T, Challenge$UserChallengeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Challenge model
   */ 
  interface ChallengeFieldRefs {
    readonly id: FieldRef<"Challenge", 'String'>
    readonly month: FieldRef<"Challenge", 'String'>
    readonly year: FieldRef<"Challenge", 'Int'>
    readonly current: FieldRef<"Challenge", 'Boolean'>
    readonly acceptSubmission: FieldRef<"Challenge", 'Boolean'>
    readonly startDate: FieldRef<"Challenge", 'DateTime'>
    readonly endDate: FieldRef<"Challenge", 'DateTime'>
    readonly createdAt: FieldRef<"Challenge", 'DateTime'>
    readonly updatedAt: FieldRef<"Challenge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Challenge findUnique
   */
  export type ChallengeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge findUniqueOrThrow
   */
  export type ChallengeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge findFirst
   */
  export type ChallengeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge findFirstOrThrow
   */
  export type ChallengeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge findMany
   */
  export type ChallengeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenges to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge create
   */
  export type ChallengeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The data needed to create a Challenge.
     */
    data: XOR<ChallengeCreateInput, ChallengeUncheckedCreateInput>
  }

  /**
   * Challenge createMany
   */
  export type ChallengeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Challenges.
     */
    data: ChallengeCreateManyInput | ChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Challenge createManyAndReturn
   */
  export type ChallengeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Challenges.
     */
    data: ChallengeCreateManyInput | ChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Challenge update
   */
  export type ChallengeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The data needed to update a Challenge.
     */
    data: XOR<ChallengeUpdateInput, ChallengeUncheckedUpdateInput>
    /**
     * Choose, which Challenge to update.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge updateMany
   */
  export type ChallengeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Challenges.
     */
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyInput>
    /**
     * Filter which Challenges to update
     */
    where?: ChallengeWhereInput
  }

  /**
   * Challenge upsert
   */
  export type ChallengeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The filter to search for the Challenge to update in case it exists.
     */
    where: ChallengeWhereUniqueInput
    /**
     * In case the Challenge found by the `where` argument doesn't exist, create a new Challenge with this data.
     */
    create: XOR<ChallengeCreateInput, ChallengeUncheckedCreateInput>
    /**
     * In case the Challenge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChallengeUpdateInput, ChallengeUncheckedUpdateInput>
  }

  /**
   * Challenge delete
   */
  export type ChallengeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter which Challenge to delete.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge deleteMany
   */
  export type ChallengeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challenges to delete
     */
    where?: ChallengeWhereInput
  }

  /**
   * Challenge.UserChallenge
   */
  export type Challenge$UserChallengeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    where?: UserChallengeWhereInput
    orderBy?: UserChallengeOrderByWithRelationInput | UserChallengeOrderByWithRelationInput[]
    cursor?: UserChallengeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserChallengeScalarFieldEnum | UserChallengeScalarFieldEnum[]
  }

  /**
   * Challenge without action
   */
  export type ChallengeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
  }


  /**
   * Model UserChallenge
   */

  export type AggregateUserChallenge = {
    _count: UserChallengeCountAggregateOutputType | null
    _avg: UserChallengeAvgAggregateOutputType | null
    _sum: UserChallengeSumAggregateOutputType | null
    _min: UserChallengeMinAggregateOutputType | null
    _max: UserChallengeMaxAggregateOutputType | null
  }

  export type UserChallengeAvgAggregateOutputType = {
    totalPoints: number | null
  }

  export type UserChallengeSumAggregateOutputType = {
    totalPoints: number | null
  }

  export type UserChallengeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    challengeId: string | null
    totalPoints: number | null
  }

  export type UserChallengeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    challengeId: string | null
    totalPoints: number | null
  }

  export type UserChallengeCountAggregateOutputType = {
    id: number
    userId: number
    challengeId: number
    totalPoints: number
    _all: number
  }


  export type UserChallengeAvgAggregateInputType = {
    totalPoints?: true
  }

  export type UserChallengeSumAggregateInputType = {
    totalPoints?: true
  }

  export type UserChallengeMinAggregateInputType = {
    id?: true
    userId?: true
    challengeId?: true
    totalPoints?: true
  }

  export type UserChallengeMaxAggregateInputType = {
    id?: true
    userId?: true
    challengeId?: true
    totalPoints?: true
  }

  export type UserChallengeCountAggregateInputType = {
    id?: true
    userId?: true
    challengeId?: true
    totalPoints?: true
    _all?: true
  }

  export type UserChallengeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserChallenge to aggregate.
     */
    where?: UserChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserChallenges to fetch.
     */
    orderBy?: UserChallengeOrderByWithRelationInput | UserChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserChallenges
    **/
    _count?: true | UserChallengeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserChallengeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserChallengeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserChallengeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserChallengeMaxAggregateInputType
  }

  export type GetUserChallengeAggregateType<T extends UserChallengeAggregateArgs> = {
        [P in keyof T & keyof AggregateUserChallenge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserChallenge[P]>
      : GetScalarType<T[P], AggregateUserChallenge[P]>
  }




  export type UserChallengeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserChallengeWhereInput
    orderBy?: UserChallengeOrderByWithAggregationInput | UserChallengeOrderByWithAggregationInput[]
    by: UserChallengeScalarFieldEnum[] | UserChallengeScalarFieldEnum
    having?: UserChallengeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserChallengeCountAggregateInputType | true
    _avg?: UserChallengeAvgAggregateInputType
    _sum?: UserChallengeSumAggregateInputType
    _min?: UserChallengeMinAggregateInputType
    _max?: UserChallengeMaxAggregateInputType
  }

  export type UserChallengeGroupByOutputType = {
    id: string
    userId: string
    challengeId: string
    totalPoints: number
    _count: UserChallengeCountAggregateOutputType | null
    _avg: UserChallengeAvgAggregateOutputType | null
    _sum: UserChallengeSumAggregateOutputType | null
    _min: UserChallengeMinAggregateOutputType | null
    _max: UserChallengeMaxAggregateOutputType | null
  }

  type GetUserChallengeGroupByPayload<T extends UserChallengeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserChallengeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserChallengeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserChallengeGroupByOutputType[P]>
            : GetScalarType<T[P], UserChallengeGroupByOutputType[P]>
        }
      >
    >


  export type UserChallengeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    challengeId?: boolean
    totalPoints?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    TaskSubmission?: boolean | UserChallenge$TaskSubmissionArgs<ExtArgs>
    _count?: boolean | UserChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userChallenge"]>

  export type UserChallengeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    challengeId?: boolean
    totalPoints?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userChallenge"]>

  export type UserChallengeSelectScalar = {
    id?: boolean
    userId?: boolean
    challengeId?: boolean
    totalPoints?: boolean
  }

  export type UserChallengeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    TaskSubmission?: boolean | UserChallenge$TaskSubmissionArgs<ExtArgs>
    _count?: boolean | UserChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserChallengeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }

  export type $UserChallengePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserChallenge"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      challenge: Prisma.$ChallengePayload<ExtArgs>
      TaskSubmission: Prisma.$TaskSubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      challengeId: string
      totalPoints: number
    }, ExtArgs["result"]["userChallenge"]>
    composites: {}
  }

  type UserChallengeGetPayload<S extends boolean | null | undefined | UserChallengeDefaultArgs> = $Result.GetResult<Prisma.$UserChallengePayload, S>

  type UserChallengeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserChallengeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserChallengeCountAggregateInputType | true
    }

  export interface UserChallengeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserChallenge'], meta: { name: 'UserChallenge' } }
    /**
     * Find zero or one UserChallenge that matches the filter.
     * @param {UserChallengeFindUniqueArgs} args - Arguments to find a UserChallenge
     * @example
     * // Get one UserChallenge
     * const userChallenge = await prisma.userChallenge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserChallengeFindUniqueArgs>(args: SelectSubset<T, UserChallengeFindUniqueArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserChallenge that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserChallengeFindUniqueOrThrowArgs} args - Arguments to find a UserChallenge
     * @example
     * // Get one UserChallenge
     * const userChallenge = await prisma.userChallenge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserChallengeFindUniqueOrThrowArgs>(args: SelectSubset<T, UserChallengeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserChallenge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeFindFirstArgs} args - Arguments to find a UserChallenge
     * @example
     * // Get one UserChallenge
     * const userChallenge = await prisma.userChallenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserChallengeFindFirstArgs>(args?: SelectSubset<T, UserChallengeFindFirstArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserChallenge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeFindFirstOrThrowArgs} args - Arguments to find a UserChallenge
     * @example
     * // Get one UserChallenge
     * const userChallenge = await prisma.userChallenge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserChallengeFindFirstOrThrowArgs>(args?: SelectSubset<T, UserChallengeFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserChallenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserChallenges
     * const userChallenges = await prisma.userChallenge.findMany()
     * 
     * // Get first 10 UserChallenges
     * const userChallenges = await prisma.userChallenge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userChallengeWithIdOnly = await prisma.userChallenge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserChallengeFindManyArgs>(args?: SelectSubset<T, UserChallengeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserChallenge.
     * @param {UserChallengeCreateArgs} args - Arguments to create a UserChallenge.
     * @example
     * // Create one UserChallenge
     * const UserChallenge = await prisma.userChallenge.create({
     *   data: {
     *     // ... data to create a UserChallenge
     *   }
     * })
     * 
     */
    create<T extends UserChallengeCreateArgs>(args: SelectSubset<T, UserChallengeCreateArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserChallenges.
     * @param {UserChallengeCreateManyArgs} args - Arguments to create many UserChallenges.
     * @example
     * // Create many UserChallenges
     * const userChallenge = await prisma.userChallenge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserChallengeCreateManyArgs>(args?: SelectSubset<T, UserChallengeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserChallenges and returns the data saved in the database.
     * @param {UserChallengeCreateManyAndReturnArgs} args - Arguments to create many UserChallenges.
     * @example
     * // Create many UserChallenges
     * const userChallenge = await prisma.userChallenge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserChallenges and only return the `id`
     * const userChallengeWithIdOnly = await prisma.userChallenge.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserChallengeCreateManyAndReturnArgs>(args?: SelectSubset<T, UserChallengeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserChallenge.
     * @param {UserChallengeDeleteArgs} args - Arguments to delete one UserChallenge.
     * @example
     * // Delete one UserChallenge
     * const UserChallenge = await prisma.userChallenge.delete({
     *   where: {
     *     // ... filter to delete one UserChallenge
     *   }
     * })
     * 
     */
    delete<T extends UserChallengeDeleteArgs>(args: SelectSubset<T, UserChallengeDeleteArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserChallenge.
     * @param {UserChallengeUpdateArgs} args - Arguments to update one UserChallenge.
     * @example
     * // Update one UserChallenge
     * const userChallenge = await prisma.userChallenge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserChallengeUpdateArgs>(args: SelectSubset<T, UserChallengeUpdateArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserChallenges.
     * @param {UserChallengeDeleteManyArgs} args - Arguments to filter UserChallenges to delete.
     * @example
     * // Delete a few UserChallenges
     * const { count } = await prisma.userChallenge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserChallengeDeleteManyArgs>(args?: SelectSubset<T, UserChallengeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserChallenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserChallenges
     * const userChallenge = await prisma.userChallenge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserChallengeUpdateManyArgs>(args: SelectSubset<T, UserChallengeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserChallenge.
     * @param {UserChallengeUpsertArgs} args - Arguments to update or create a UserChallenge.
     * @example
     * // Update or create a UserChallenge
     * const userChallenge = await prisma.userChallenge.upsert({
     *   create: {
     *     // ... data to create a UserChallenge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserChallenge we want to update
     *   }
     * })
     */
    upsert<T extends UserChallengeUpsertArgs>(args: SelectSubset<T, UserChallengeUpsertArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserChallenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeCountArgs} args - Arguments to filter UserChallenges to count.
     * @example
     * // Count the number of UserChallenges
     * const count = await prisma.userChallenge.count({
     *   where: {
     *     // ... the filter for the UserChallenges we want to count
     *   }
     * })
    **/
    count<T extends UserChallengeCountArgs>(
      args?: Subset<T, UserChallengeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserChallengeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserChallenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserChallengeAggregateArgs>(args: Subset<T, UserChallengeAggregateArgs>): Prisma.PrismaPromise<GetUserChallengeAggregateType<T>>

    /**
     * Group by UserChallenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserChallengeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserChallengeGroupByArgs['orderBy'] }
        : { orderBy?: UserChallengeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserChallengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserChallenge model
   */
  readonly fields: UserChallengeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserChallenge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserChallengeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    challenge<T extends ChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeDefaultArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    TaskSubmission<T extends UserChallenge$TaskSubmissionArgs<ExtArgs> = {}>(args?: Subset<T, UserChallenge$TaskSubmissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserChallenge model
   */ 
  interface UserChallengeFieldRefs {
    readonly id: FieldRef<"UserChallenge", 'String'>
    readonly userId: FieldRef<"UserChallenge", 'String'>
    readonly challengeId: FieldRef<"UserChallenge", 'String'>
    readonly totalPoints: FieldRef<"UserChallenge", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserChallenge findUnique
   */
  export type UserChallengeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * Filter, which UserChallenge to fetch.
     */
    where: UserChallengeWhereUniqueInput
  }

  /**
   * UserChallenge findUniqueOrThrow
   */
  export type UserChallengeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * Filter, which UserChallenge to fetch.
     */
    where: UserChallengeWhereUniqueInput
  }

  /**
   * UserChallenge findFirst
   */
  export type UserChallengeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * Filter, which UserChallenge to fetch.
     */
    where?: UserChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserChallenges to fetch.
     */
    orderBy?: UserChallengeOrderByWithRelationInput | UserChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserChallenges.
     */
    cursor?: UserChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserChallenges.
     */
    distinct?: UserChallengeScalarFieldEnum | UserChallengeScalarFieldEnum[]
  }

  /**
   * UserChallenge findFirstOrThrow
   */
  export type UserChallengeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * Filter, which UserChallenge to fetch.
     */
    where?: UserChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserChallenges to fetch.
     */
    orderBy?: UserChallengeOrderByWithRelationInput | UserChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserChallenges.
     */
    cursor?: UserChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserChallenges.
     */
    distinct?: UserChallengeScalarFieldEnum | UserChallengeScalarFieldEnum[]
  }

  /**
   * UserChallenge findMany
   */
  export type UserChallengeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * Filter, which UserChallenges to fetch.
     */
    where?: UserChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserChallenges to fetch.
     */
    orderBy?: UserChallengeOrderByWithRelationInput | UserChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserChallenges.
     */
    cursor?: UserChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserChallenges.
     */
    skip?: number
    distinct?: UserChallengeScalarFieldEnum | UserChallengeScalarFieldEnum[]
  }

  /**
   * UserChallenge create
   */
  export type UserChallengeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * The data needed to create a UserChallenge.
     */
    data: XOR<UserChallengeCreateInput, UserChallengeUncheckedCreateInput>
  }

  /**
   * UserChallenge createMany
   */
  export type UserChallengeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserChallenges.
     */
    data: UserChallengeCreateManyInput | UserChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserChallenge createManyAndReturn
   */
  export type UserChallengeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserChallenges.
     */
    data: UserChallengeCreateManyInput | UserChallengeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserChallenge update
   */
  export type UserChallengeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * The data needed to update a UserChallenge.
     */
    data: XOR<UserChallengeUpdateInput, UserChallengeUncheckedUpdateInput>
    /**
     * Choose, which UserChallenge to update.
     */
    where: UserChallengeWhereUniqueInput
  }

  /**
   * UserChallenge updateMany
   */
  export type UserChallengeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserChallenges.
     */
    data: XOR<UserChallengeUpdateManyMutationInput, UserChallengeUncheckedUpdateManyInput>
    /**
     * Filter which UserChallenges to update
     */
    where?: UserChallengeWhereInput
  }

  /**
   * UserChallenge upsert
   */
  export type UserChallengeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * The filter to search for the UserChallenge to update in case it exists.
     */
    where: UserChallengeWhereUniqueInput
    /**
     * In case the UserChallenge found by the `where` argument doesn't exist, create a new UserChallenge with this data.
     */
    create: XOR<UserChallengeCreateInput, UserChallengeUncheckedCreateInput>
    /**
     * In case the UserChallenge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserChallengeUpdateInput, UserChallengeUncheckedUpdateInput>
  }

  /**
   * UserChallenge delete
   */
  export type UserChallengeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * Filter which UserChallenge to delete.
     */
    where: UserChallengeWhereUniqueInput
  }

  /**
   * UserChallenge deleteMany
   */
  export type UserChallengeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserChallenges to delete
     */
    where?: UserChallengeWhereInput
  }

  /**
   * UserChallenge.TaskSubmission
   */
  export type UserChallenge$TaskSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    where?: TaskSubmissionWhereInput
    orderBy?: TaskSubmissionOrderByWithRelationInput | TaskSubmissionOrderByWithRelationInput[]
    cursor?: TaskSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskSubmissionScalarFieldEnum | TaskSubmissionScalarFieldEnum[]
  }

  /**
   * UserChallenge without action
   */
  export type UserChallengeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
  }


  /**
   * Model TaskSubmission
   */

  export type AggregateTaskSubmission = {
    _count: TaskSubmissionCountAggregateOutputType | null
    _avg: TaskSubmissionAvgAggregateOutputType | null
    _sum: TaskSubmissionSumAggregateOutputType | null
    _min: TaskSubmissionMinAggregateOutputType | null
    _max: TaskSubmissionMaxAggregateOutputType | null
  }

  export type TaskSubmissionAvgAggregateOutputType = {
    upworkOutreach: number | null
    socialMediaPosts: number | null
    socialMediaEngagements: number | null
    jobApplications: number | null
    localOutreach: number | null
    intlOutreach: number | null
    ecommerceDeliveredOrders: number | null
    noOfClients: number | null
    earningsInDollars: number | null
    opportunities: number | null
    jobSecured: number | null
    earningsInNaira: number | null
    socialGroupPost: number | null
  }

  export type TaskSubmissionSumAggregateOutputType = {
    upworkOutreach: number | null
    socialMediaPosts: number | null
    socialMediaEngagements: number | null
    jobApplications: number | null
    localOutreach: number | null
    intlOutreach: number | null
    ecommerceDeliveredOrders: number | null
    noOfClients: number | null
    earningsInDollars: number | null
    opportunities: number | null
    jobSecured: number | null
    earningsInNaira: number | null
    socialGroupPost: number | null
  }

  export type TaskSubmissionMinAggregateOutputType = {
    id: string | null
    userChallengeId: string | null
    date: Date | null
    upworkOutreach: number | null
    socialMediaPosts: number | null
    socialMediaEngagements: number | null
    jobApplications: number | null
    localOutreach: number | null
    intlOutreach: number | null
    ecommerceDeliveredOrders: number | null
    noOfClients: number | null
    earningsInDollars: number | null
    opportunities: number | null
    jobSecured: number | null
    earningsInNaira: number | null
    socialGroupPost: number | null
  }

  export type TaskSubmissionMaxAggregateOutputType = {
    id: string | null
    userChallengeId: string | null
    date: Date | null
    upworkOutreach: number | null
    socialMediaPosts: number | null
    socialMediaEngagements: number | null
    jobApplications: number | null
    localOutreach: number | null
    intlOutreach: number | null
    ecommerceDeliveredOrders: number | null
    noOfClients: number | null
    earningsInDollars: number | null
    opportunities: number | null
    jobSecured: number | null
    earningsInNaira: number | null
    socialGroupPost: number | null
  }

  export type TaskSubmissionCountAggregateOutputType = {
    id: number
    userChallengeId: number
    date: number
    upworkOutreach: number
    socialMediaPosts: number
    socialMediaEngagements: number
    jobApplications: number
    localOutreach: number
    intlOutreach: number
    ecommerceDeliveredOrders: number
    noOfClients: number
    earningsInDollars: number
    opportunities: number
    jobSecured: number
    earningsInNaira: number
    socialGroupPost: number
    _all: number
  }


  export type TaskSubmissionAvgAggregateInputType = {
    upworkOutreach?: true
    socialMediaPosts?: true
    socialMediaEngagements?: true
    jobApplications?: true
    localOutreach?: true
    intlOutreach?: true
    ecommerceDeliveredOrders?: true
    noOfClients?: true
    earningsInDollars?: true
    opportunities?: true
    jobSecured?: true
    earningsInNaira?: true
    socialGroupPost?: true
  }

  export type TaskSubmissionSumAggregateInputType = {
    upworkOutreach?: true
    socialMediaPosts?: true
    socialMediaEngagements?: true
    jobApplications?: true
    localOutreach?: true
    intlOutreach?: true
    ecommerceDeliveredOrders?: true
    noOfClients?: true
    earningsInDollars?: true
    opportunities?: true
    jobSecured?: true
    earningsInNaira?: true
    socialGroupPost?: true
  }

  export type TaskSubmissionMinAggregateInputType = {
    id?: true
    userChallengeId?: true
    date?: true
    upworkOutreach?: true
    socialMediaPosts?: true
    socialMediaEngagements?: true
    jobApplications?: true
    localOutreach?: true
    intlOutreach?: true
    ecommerceDeliveredOrders?: true
    noOfClients?: true
    earningsInDollars?: true
    opportunities?: true
    jobSecured?: true
    earningsInNaira?: true
    socialGroupPost?: true
  }

  export type TaskSubmissionMaxAggregateInputType = {
    id?: true
    userChallengeId?: true
    date?: true
    upworkOutreach?: true
    socialMediaPosts?: true
    socialMediaEngagements?: true
    jobApplications?: true
    localOutreach?: true
    intlOutreach?: true
    ecommerceDeliveredOrders?: true
    noOfClients?: true
    earningsInDollars?: true
    opportunities?: true
    jobSecured?: true
    earningsInNaira?: true
    socialGroupPost?: true
  }

  export type TaskSubmissionCountAggregateInputType = {
    id?: true
    userChallengeId?: true
    date?: true
    upworkOutreach?: true
    socialMediaPosts?: true
    socialMediaEngagements?: true
    jobApplications?: true
    localOutreach?: true
    intlOutreach?: true
    ecommerceDeliveredOrders?: true
    noOfClients?: true
    earningsInDollars?: true
    opportunities?: true
    jobSecured?: true
    earningsInNaira?: true
    socialGroupPost?: true
    _all?: true
  }

  export type TaskSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskSubmission to aggregate.
     */
    where?: TaskSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskSubmissions to fetch.
     */
    orderBy?: TaskSubmissionOrderByWithRelationInput | TaskSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskSubmissions
    **/
    _count?: true | TaskSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskSubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskSubmissionMaxAggregateInputType
  }

  export type GetTaskSubmissionAggregateType<T extends TaskSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskSubmission[P]>
      : GetScalarType<T[P], AggregateTaskSubmission[P]>
  }




  export type TaskSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskSubmissionWhereInput
    orderBy?: TaskSubmissionOrderByWithAggregationInput | TaskSubmissionOrderByWithAggregationInput[]
    by: TaskSubmissionScalarFieldEnum[] | TaskSubmissionScalarFieldEnum
    having?: TaskSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskSubmissionCountAggregateInputType | true
    _avg?: TaskSubmissionAvgAggregateInputType
    _sum?: TaskSubmissionSumAggregateInputType
    _min?: TaskSubmissionMinAggregateInputType
    _max?: TaskSubmissionMaxAggregateInputType
  }

  export type TaskSubmissionGroupByOutputType = {
    id: string
    userChallengeId: string
    date: Date
    upworkOutreach: number
    socialMediaPosts: number
    socialMediaEngagements: number
    jobApplications: number
    localOutreach: number
    intlOutreach: number
    ecommerceDeliveredOrders: number
    noOfClients: number
    earningsInDollars: number
    opportunities: number
    jobSecured: number
    earningsInNaira: number
    socialGroupPost: number
    _count: TaskSubmissionCountAggregateOutputType | null
    _avg: TaskSubmissionAvgAggregateOutputType | null
    _sum: TaskSubmissionSumAggregateOutputType | null
    _min: TaskSubmissionMinAggregateOutputType | null
    _max: TaskSubmissionMaxAggregateOutputType | null
  }

  type GetTaskSubmissionGroupByPayload<T extends TaskSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], TaskSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type TaskSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userChallengeId?: boolean
    date?: boolean
    upworkOutreach?: boolean
    socialMediaPosts?: boolean
    socialMediaEngagements?: boolean
    jobApplications?: boolean
    localOutreach?: boolean
    intlOutreach?: boolean
    ecommerceDeliveredOrders?: boolean
    noOfClients?: boolean
    earningsInDollars?: boolean
    opportunities?: boolean
    jobSecured?: boolean
    earningsInNaira?: boolean
    socialGroupPost?: boolean
    userChallenge?: boolean | UserChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskSubmission"]>

  export type TaskSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userChallengeId?: boolean
    date?: boolean
    upworkOutreach?: boolean
    socialMediaPosts?: boolean
    socialMediaEngagements?: boolean
    jobApplications?: boolean
    localOutreach?: boolean
    intlOutreach?: boolean
    ecommerceDeliveredOrders?: boolean
    noOfClients?: boolean
    earningsInDollars?: boolean
    opportunities?: boolean
    jobSecured?: boolean
    earningsInNaira?: boolean
    socialGroupPost?: boolean
    userChallenge?: boolean | UserChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskSubmission"]>

  export type TaskSubmissionSelectScalar = {
    id?: boolean
    userChallengeId?: boolean
    date?: boolean
    upworkOutreach?: boolean
    socialMediaPosts?: boolean
    socialMediaEngagements?: boolean
    jobApplications?: boolean
    localOutreach?: boolean
    intlOutreach?: boolean
    ecommerceDeliveredOrders?: boolean
    noOfClients?: boolean
    earningsInDollars?: boolean
    opportunities?: boolean
    jobSecured?: boolean
    earningsInNaira?: boolean
    socialGroupPost?: boolean
  }

  export type TaskSubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userChallenge?: boolean | UserChallengeDefaultArgs<ExtArgs>
  }
  export type TaskSubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userChallenge?: boolean | UserChallengeDefaultArgs<ExtArgs>
  }

  export type $TaskSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskSubmission"
    objects: {
      userChallenge: Prisma.$UserChallengePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userChallengeId: string
      date: Date
      upworkOutreach: number
      socialMediaPosts: number
      socialMediaEngagements: number
      jobApplications: number
      localOutreach: number
      intlOutreach: number
      ecommerceDeliveredOrders: number
      noOfClients: number
      earningsInDollars: number
      opportunities: number
      jobSecured: number
      earningsInNaira: number
      socialGroupPost: number
    }, ExtArgs["result"]["taskSubmission"]>
    composites: {}
  }

  type TaskSubmissionGetPayload<S extends boolean | null | undefined | TaskSubmissionDefaultArgs> = $Result.GetResult<Prisma.$TaskSubmissionPayload, S>

  type TaskSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskSubmissionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaskSubmissionCountAggregateInputType | true
    }

  export interface TaskSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskSubmission'], meta: { name: 'TaskSubmission' } }
    /**
     * Find zero or one TaskSubmission that matches the filter.
     * @param {TaskSubmissionFindUniqueArgs} args - Arguments to find a TaskSubmission
     * @example
     * // Get one TaskSubmission
     * const taskSubmission = await prisma.taskSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskSubmissionFindUniqueArgs>(args: SelectSubset<T, TaskSubmissionFindUniqueArgs<ExtArgs>>): Prisma__TaskSubmissionClient<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TaskSubmission that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TaskSubmissionFindUniqueOrThrowArgs} args - Arguments to find a TaskSubmission
     * @example
     * // Get one TaskSubmission
     * const taskSubmission = await prisma.taskSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskSubmissionClient<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TaskSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSubmissionFindFirstArgs} args - Arguments to find a TaskSubmission
     * @example
     * // Get one TaskSubmission
     * const taskSubmission = await prisma.taskSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskSubmissionFindFirstArgs>(args?: SelectSubset<T, TaskSubmissionFindFirstArgs<ExtArgs>>): Prisma__TaskSubmissionClient<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TaskSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSubmissionFindFirstOrThrowArgs} args - Arguments to find a TaskSubmission
     * @example
     * // Get one TaskSubmission
     * const taskSubmission = await prisma.taskSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskSubmissionClient<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TaskSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskSubmissions
     * const taskSubmissions = await prisma.taskSubmission.findMany()
     * 
     * // Get first 10 TaskSubmissions
     * const taskSubmissions = await prisma.taskSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskSubmissionWithIdOnly = await prisma.taskSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskSubmissionFindManyArgs>(args?: SelectSubset<T, TaskSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TaskSubmission.
     * @param {TaskSubmissionCreateArgs} args - Arguments to create a TaskSubmission.
     * @example
     * // Create one TaskSubmission
     * const TaskSubmission = await prisma.taskSubmission.create({
     *   data: {
     *     // ... data to create a TaskSubmission
     *   }
     * })
     * 
     */
    create<T extends TaskSubmissionCreateArgs>(args: SelectSubset<T, TaskSubmissionCreateArgs<ExtArgs>>): Prisma__TaskSubmissionClient<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TaskSubmissions.
     * @param {TaskSubmissionCreateManyArgs} args - Arguments to create many TaskSubmissions.
     * @example
     * // Create many TaskSubmissions
     * const taskSubmission = await prisma.taskSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskSubmissionCreateManyArgs>(args?: SelectSubset<T, TaskSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskSubmissions and returns the data saved in the database.
     * @param {TaskSubmissionCreateManyAndReturnArgs} args - Arguments to create many TaskSubmissions.
     * @example
     * // Create many TaskSubmissions
     * const taskSubmission = await prisma.taskSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskSubmissions and only return the `id`
     * const taskSubmissionWithIdOnly = await prisma.taskSubmission.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TaskSubmission.
     * @param {TaskSubmissionDeleteArgs} args - Arguments to delete one TaskSubmission.
     * @example
     * // Delete one TaskSubmission
     * const TaskSubmission = await prisma.taskSubmission.delete({
     *   where: {
     *     // ... filter to delete one TaskSubmission
     *   }
     * })
     * 
     */
    delete<T extends TaskSubmissionDeleteArgs>(args: SelectSubset<T, TaskSubmissionDeleteArgs<ExtArgs>>): Prisma__TaskSubmissionClient<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TaskSubmission.
     * @param {TaskSubmissionUpdateArgs} args - Arguments to update one TaskSubmission.
     * @example
     * // Update one TaskSubmission
     * const taskSubmission = await prisma.taskSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskSubmissionUpdateArgs>(args: SelectSubset<T, TaskSubmissionUpdateArgs<ExtArgs>>): Prisma__TaskSubmissionClient<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TaskSubmissions.
     * @param {TaskSubmissionDeleteManyArgs} args - Arguments to filter TaskSubmissions to delete.
     * @example
     * // Delete a few TaskSubmissions
     * const { count } = await prisma.taskSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskSubmissionDeleteManyArgs>(args?: SelectSubset<T, TaskSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskSubmissions
     * const taskSubmission = await prisma.taskSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskSubmissionUpdateManyArgs>(args: SelectSubset<T, TaskSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TaskSubmission.
     * @param {TaskSubmissionUpsertArgs} args - Arguments to update or create a TaskSubmission.
     * @example
     * // Update or create a TaskSubmission
     * const taskSubmission = await prisma.taskSubmission.upsert({
     *   create: {
     *     // ... data to create a TaskSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskSubmission we want to update
     *   }
     * })
     */
    upsert<T extends TaskSubmissionUpsertArgs>(args: SelectSubset<T, TaskSubmissionUpsertArgs<ExtArgs>>): Prisma__TaskSubmissionClient<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TaskSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSubmissionCountArgs} args - Arguments to filter TaskSubmissions to count.
     * @example
     * // Count the number of TaskSubmissions
     * const count = await prisma.taskSubmission.count({
     *   where: {
     *     // ... the filter for the TaskSubmissions we want to count
     *   }
     * })
    **/
    count<T extends TaskSubmissionCountArgs>(
      args?: Subset<T, TaskSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskSubmissionAggregateArgs>(args: Subset<T, TaskSubmissionAggregateArgs>): Prisma.PrismaPromise<GetTaskSubmissionAggregateType<T>>

    /**
     * Group by TaskSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: TaskSubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskSubmission model
   */
  readonly fields: TaskSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userChallenge<T extends UserChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserChallengeDefaultArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskSubmission model
   */ 
  interface TaskSubmissionFieldRefs {
    readonly id: FieldRef<"TaskSubmission", 'String'>
    readonly userChallengeId: FieldRef<"TaskSubmission", 'String'>
    readonly date: FieldRef<"TaskSubmission", 'DateTime'>
    readonly upworkOutreach: FieldRef<"TaskSubmission", 'Int'>
    readonly socialMediaPosts: FieldRef<"TaskSubmission", 'Int'>
    readonly socialMediaEngagements: FieldRef<"TaskSubmission", 'Int'>
    readonly jobApplications: FieldRef<"TaskSubmission", 'Int'>
    readonly localOutreach: FieldRef<"TaskSubmission", 'Int'>
    readonly intlOutreach: FieldRef<"TaskSubmission", 'Int'>
    readonly ecommerceDeliveredOrders: FieldRef<"TaskSubmission", 'Int'>
    readonly noOfClients: FieldRef<"TaskSubmission", 'Int'>
    readonly earningsInDollars: FieldRef<"TaskSubmission", 'Int'>
    readonly opportunities: FieldRef<"TaskSubmission", 'Int'>
    readonly jobSecured: FieldRef<"TaskSubmission", 'Int'>
    readonly earningsInNaira: FieldRef<"TaskSubmission", 'Int'>
    readonly socialGroupPost: FieldRef<"TaskSubmission", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TaskSubmission findUnique
   */
  export type TaskSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which TaskSubmission to fetch.
     */
    where: TaskSubmissionWhereUniqueInput
  }

  /**
   * TaskSubmission findUniqueOrThrow
   */
  export type TaskSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which TaskSubmission to fetch.
     */
    where: TaskSubmissionWhereUniqueInput
  }

  /**
   * TaskSubmission findFirst
   */
  export type TaskSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which TaskSubmission to fetch.
     */
    where?: TaskSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskSubmissions to fetch.
     */
    orderBy?: TaskSubmissionOrderByWithRelationInput | TaskSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskSubmissions.
     */
    cursor?: TaskSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskSubmissions.
     */
    distinct?: TaskSubmissionScalarFieldEnum | TaskSubmissionScalarFieldEnum[]
  }

  /**
   * TaskSubmission findFirstOrThrow
   */
  export type TaskSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which TaskSubmission to fetch.
     */
    where?: TaskSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskSubmissions to fetch.
     */
    orderBy?: TaskSubmissionOrderByWithRelationInput | TaskSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskSubmissions.
     */
    cursor?: TaskSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskSubmissions.
     */
    distinct?: TaskSubmissionScalarFieldEnum | TaskSubmissionScalarFieldEnum[]
  }

  /**
   * TaskSubmission findMany
   */
  export type TaskSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which TaskSubmissions to fetch.
     */
    where?: TaskSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskSubmissions to fetch.
     */
    orderBy?: TaskSubmissionOrderByWithRelationInput | TaskSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskSubmissions.
     */
    cursor?: TaskSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskSubmissions.
     */
    skip?: number
    distinct?: TaskSubmissionScalarFieldEnum | TaskSubmissionScalarFieldEnum[]
  }

  /**
   * TaskSubmission create
   */
  export type TaskSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskSubmission.
     */
    data: XOR<TaskSubmissionCreateInput, TaskSubmissionUncheckedCreateInput>
  }

  /**
   * TaskSubmission createMany
   */
  export type TaskSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskSubmissions.
     */
    data: TaskSubmissionCreateManyInput | TaskSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskSubmission createManyAndReturn
   */
  export type TaskSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TaskSubmissions.
     */
    data: TaskSubmissionCreateManyInput | TaskSubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskSubmission update
   */
  export type TaskSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskSubmission.
     */
    data: XOR<TaskSubmissionUpdateInput, TaskSubmissionUncheckedUpdateInput>
    /**
     * Choose, which TaskSubmission to update.
     */
    where: TaskSubmissionWhereUniqueInput
  }

  /**
   * TaskSubmission updateMany
   */
  export type TaskSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskSubmissions.
     */
    data: XOR<TaskSubmissionUpdateManyMutationInput, TaskSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which TaskSubmissions to update
     */
    where?: TaskSubmissionWhereInput
  }

  /**
   * TaskSubmission upsert
   */
  export type TaskSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskSubmission to update in case it exists.
     */
    where: TaskSubmissionWhereUniqueInput
    /**
     * In case the TaskSubmission found by the `where` argument doesn't exist, create a new TaskSubmission with this data.
     */
    create: XOR<TaskSubmissionCreateInput, TaskSubmissionUncheckedCreateInput>
    /**
     * In case the TaskSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskSubmissionUpdateInput, TaskSubmissionUncheckedUpdateInput>
  }

  /**
   * TaskSubmission delete
   */
  export type TaskSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    /**
     * Filter which TaskSubmission to delete.
     */
    where: TaskSubmissionWhereUniqueInput
  }

  /**
   * TaskSubmission deleteMany
   */
  export type TaskSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskSubmissions to delete
     */
    where?: TaskSubmissionWhereInput
  }

  /**
   * TaskSubmission without action
   */
  export type TaskSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    uniqueCode: 'uniqueCode',
    firstName: 'firstName',
    lastName: 'lastName',
    password: 'password',
    linkedInLink: 'linkedInLink',
    upworkLink: 'upworkLink',
    facebookLink: 'facebookLink',
    twitterLink: 'twitterLink',
    funnelLink: 'funnelLink',
    mediumLink: 'mediumLink',
    goHighLevelAccountName: 'goHighLevelAccountName',
    phoneNumber: 'phoneNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChallengeScalarFieldEnum: {
    id: 'id',
    month: 'month',
    year: 'year',
    current: 'current',
    acceptSubmission: 'acceptSubmission',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChallengeScalarFieldEnum = (typeof ChallengeScalarFieldEnum)[keyof typeof ChallengeScalarFieldEnum]


  export const UserChallengeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    challengeId: 'challengeId',
    totalPoints: 'totalPoints'
  };

  export type UserChallengeScalarFieldEnum = (typeof UserChallengeScalarFieldEnum)[keyof typeof UserChallengeScalarFieldEnum]


  export const TaskSubmissionScalarFieldEnum: {
    id: 'id',
    userChallengeId: 'userChallengeId',
    date: 'date',
    upworkOutreach: 'upworkOutreach',
    socialMediaPosts: 'socialMediaPosts',
    socialMediaEngagements: 'socialMediaEngagements',
    jobApplications: 'jobApplications',
    localOutreach: 'localOutreach',
    intlOutreach: 'intlOutreach',
    ecommerceDeliveredOrders: 'ecommerceDeliveredOrders',
    noOfClients: 'noOfClients',
    earningsInDollars: 'earningsInDollars',
    opportunities: 'opportunities',
    jobSecured: 'jobSecured',
    earningsInNaira: 'earningsInNaira',
    socialGroupPost: 'socialGroupPost'
  };

  export type TaskSubmissionScalarFieldEnum = (typeof TaskSubmissionScalarFieldEnum)[keyof typeof TaskSubmissionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    uniqueCode?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    linkedInLink?: StringNullableFilter<"User"> | string | null
    upworkLink?: StringNullableFilter<"User"> | string | null
    facebookLink?: StringNullableFilter<"User"> | string | null
    twitterLink?: StringNullableFilter<"User"> | string | null
    funnelLink?: StringNullableFilter<"User"> | string | null
    mediumLink?: StringNullableFilter<"User"> | string | null
    goHighLevelAccountName?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    UserChallenge?: UserChallengeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    uniqueCode?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    linkedInLink?: SortOrderInput | SortOrder
    upworkLink?: SortOrderInput | SortOrder
    facebookLink?: SortOrderInput | SortOrder
    twitterLink?: SortOrderInput | SortOrder
    funnelLink?: SortOrderInput | SortOrder
    mediumLink?: SortOrderInput | SortOrder
    goHighLevelAccountName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    UserChallenge?: UserChallengeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    uniqueCode?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    linkedInLink?: StringNullableFilter<"User"> | string | null
    upworkLink?: StringNullableFilter<"User"> | string | null
    facebookLink?: StringNullableFilter<"User"> | string | null
    twitterLink?: StringNullableFilter<"User"> | string | null
    funnelLink?: StringNullableFilter<"User"> | string | null
    mediumLink?: StringNullableFilter<"User"> | string | null
    goHighLevelAccountName?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    UserChallenge?: UserChallengeListRelationFilter
  }, "id" | "email" | "uniqueCode">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    uniqueCode?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    linkedInLink?: SortOrderInput | SortOrder
    upworkLink?: SortOrderInput | SortOrder
    facebookLink?: SortOrderInput | SortOrder
    twitterLink?: SortOrderInput | SortOrder
    funnelLink?: SortOrderInput | SortOrder
    mediumLink?: SortOrderInput | SortOrder
    goHighLevelAccountName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    uniqueCode?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    linkedInLink?: StringNullableWithAggregatesFilter<"User"> | string | null
    upworkLink?: StringNullableWithAggregatesFilter<"User"> | string | null
    facebookLink?: StringNullableWithAggregatesFilter<"User"> | string | null
    twitterLink?: StringNullableWithAggregatesFilter<"User"> | string | null
    funnelLink?: StringNullableWithAggregatesFilter<"User"> | string | null
    mediumLink?: StringNullableWithAggregatesFilter<"User"> | string | null
    goHighLevelAccountName?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ChallengeWhereInput = {
    AND?: ChallengeWhereInput | ChallengeWhereInput[]
    OR?: ChallengeWhereInput[]
    NOT?: ChallengeWhereInput | ChallengeWhereInput[]
    id?: StringFilter<"Challenge"> | string
    month?: StringFilter<"Challenge"> | string
    year?: IntFilter<"Challenge"> | number
    current?: BoolFilter<"Challenge"> | boolean
    acceptSubmission?: BoolFilter<"Challenge"> | boolean
    startDate?: DateTimeFilter<"Challenge"> | Date | string
    endDate?: DateTimeNullableFilter<"Challenge"> | Date | string | null
    createdAt?: DateTimeFilter<"Challenge"> | Date | string
    updatedAt?: DateTimeFilter<"Challenge"> | Date | string
    UserChallenge?: UserChallengeListRelationFilter
  }

  export type ChallengeOrderByWithRelationInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    current?: SortOrder
    acceptSubmission?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    UserChallenge?: UserChallengeOrderByRelationAggregateInput
  }

  export type ChallengeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChallengeWhereInput | ChallengeWhereInput[]
    OR?: ChallengeWhereInput[]
    NOT?: ChallengeWhereInput | ChallengeWhereInput[]
    month?: StringFilter<"Challenge"> | string
    year?: IntFilter<"Challenge"> | number
    current?: BoolFilter<"Challenge"> | boolean
    acceptSubmission?: BoolFilter<"Challenge"> | boolean
    startDate?: DateTimeFilter<"Challenge"> | Date | string
    endDate?: DateTimeNullableFilter<"Challenge"> | Date | string | null
    createdAt?: DateTimeFilter<"Challenge"> | Date | string
    updatedAt?: DateTimeFilter<"Challenge"> | Date | string
    UserChallenge?: UserChallengeListRelationFilter
  }, "id">

  export type ChallengeOrderByWithAggregationInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    current?: SortOrder
    acceptSubmission?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChallengeCountOrderByAggregateInput
    _avg?: ChallengeAvgOrderByAggregateInput
    _max?: ChallengeMaxOrderByAggregateInput
    _min?: ChallengeMinOrderByAggregateInput
    _sum?: ChallengeSumOrderByAggregateInput
  }

  export type ChallengeScalarWhereWithAggregatesInput = {
    AND?: ChallengeScalarWhereWithAggregatesInput | ChallengeScalarWhereWithAggregatesInput[]
    OR?: ChallengeScalarWhereWithAggregatesInput[]
    NOT?: ChallengeScalarWhereWithAggregatesInput | ChallengeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Challenge"> | string
    month?: StringWithAggregatesFilter<"Challenge"> | string
    year?: IntWithAggregatesFilter<"Challenge"> | number
    current?: BoolWithAggregatesFilter<"Challenge"> | boolean
    acceptSubmission?: BoolWithAggregatesFilter<"Challenge"> | boolean
    startDate?: DateTimeWithAggregatesFilter<"Challenge"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Challenge"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Challenge"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Challenge"> | Date | string
  }

  export type UserChallengeWhereInput = {
    AND?: UserChallengeWhereInput | UserChallengeWhereInput[]
    OR?: UserChallengeWhereInput[]
    NOT?: UserChallengeWhereInput | UserChallengeWhereInput[]
    id?: StringFilter<"UserChallenge"> | string
    userId?: StringFilter<"UserChallenge"> | string
    challengeId?: StringFilter<"UserChallenge"> | string
    totalPoints?: IntFilter<"UserChallenge"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    challenge?: XOR<ChallengeRelationFilter, ChallengeWhereInput>
    TaskSubmission?: TaskSubmissionListRelationFilter
  }

  export type UserChallengeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    totalPoints?: SortOrder
    user?: UserOrderByWithRelationInput
    challenge?: ChallengeOrderByWithRelationInput
    TaskSubmission?: TaskSubmissionOrderByRelationAggregateInput
  }

  export type UserChallengeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_challengeId?: UserChallengeUserIdChallengeIdCompoundUniqueInput
    AND?: UserChallengeWhereInput | UserChallengeWhereInput[]
    OR?: UserChallengeWhereInput[]
    NOT?: UserChallengeWhereInput | UserChallengeWhereInput[]
    userId?: StringFilter<"UserChallenge"> | string
    challengeId?: StringFilter<"UserChallenge"> | string
    totalPoints?: IntFilter<"UserChallenge"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    challenge?: XOR<ChallengeRelationFilter, ChallengeWhereInput>
    TaskSubmission?: TaskSubmissionListRelationFilter
  }, "id" | "userId_challengeId">

  export type UserChallengeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    totalPoints?: SortOrder
    _count?: UserChallengeCountOrderByAggregateInput
    _avg?: UserChallengeAvgOrderByAggregateInput
    _max?: UserChallengeMaxOrderByAggregateInput
    _min?: UserChallengeMinOrderByAggregateInput
    _sum?: UserChallengeSumOrderByAggregateInput
  }

  export type UserChallengeScalarWhereWithAggregatesInput = {
    AND?: UserChallengeScalarWhereWithAggregatesInput | UserChallengeScalarWhereWithAggregatesInput[]
    OR?: UserChallengeScalarWhereWithAggregatesInput[]
    NOT?: UserChallengeScalarWhereWithAggregatesInput | UserChallengeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserChallenge"> | string
    userId?: StringWithAggregatesFilter<"UserChallenge"> | string
    challengeId?: StringWithAggregatesFilter<"UserChallenge"> | string
    totalPoints?: IntWithAggregatesFilter<"UserChallenge"> | number
  }

  export type TaskSubmissionWhereInput = {
    AND?: TaskSubmissionWhereInput | TaskSubmissionWhereInput[]
    OR?: TaskSubmissionWhereInput[]
    NOT?: TaskSubmissionWhereInput | TaskSubmissionWhereInput[]
    id?: StringFilter<"TaskSubmission"> | string
    userChallengeId?: StringFilter<"TaskSubmission"> | string
    date?: DateTimeFilter<"TaskSubmission"> | Date | string
    upworkOutreach?: IntFilter<"TaskSubmission"> | number
    socialMediaPosts?: IntFilter<"TaskSubmission"> | number
    socialMediaEngagements?: IntFilter<"TaskSubmission"> | number
    jobApplications?: IntFilter<"TaskSubmission"> | number
    localOutreach?: IntFilter<"TaskSubmission"> | number
    intlOutreach?: IntFilter<"TaskSubmission"> | number
    ecommerceDeliveredOrders?: IntFilter<"TaskSubmission"> | number
    noOfClients?: IntFilter<"TaskSubmission"> | number
    earningsInDollars?: IntFilter<"TaskSubmission"> | number
    opportunities?: IntFilter<"TaskSubmission"> | number
    jobSecured?: IntFilter<"TaskSubmission"> | number
    earningsInNaira?: IntFilter<"TaskSubmission"> | number
    socialGroupPost?: IntFilter<"TaskSubmission"> | number
    userChallenge?: XOR<UserChallengeRelationFilter, UserChallengeWhereInput>
  }

  export type TaskSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    userChallengeId?: SortOrder
    date?: SortOrder
    upworkOutreach?: SortOrder
    socialMediaPosts?: SortOrder
    socialMediaEngagements?: SortOrder
    jobApplications?: SortOrder
    localOutreach?: SortOrder
    intlOutreach?: SortOrder
    ecommerceDeliveredOrders?: SortOrder
    noOfClients?: SortOrder
    earningsInDollars?: SortOrder
    opportunities?: SortOrder
    jobSecured?: SortOrder
    earningsInNaira?: SortOrder
    socialGroupPost?: SortOrder
    userChallenge?: UserChallengeOrderByWithRelationInput
  }

  export type TaskSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskSubmissionWhereInput | TaskSubmissionWhereInput[]
    OR?: TaskSubmissionWhereInput[]
    NOT?: TaskSubmissionWhereInput | TaskSubmissionWhereInput[]
    userChallengeId?: StringFilter<"TaskSubmission"> | string
    date?: DateTimeFilter<"TaskSubmission"> | Date | string
    upworkOutreach?: IntFilter<"TaskSubmission"> | number
    socialMediaPosts?: IntFilter<"TaskSubmission"> | number
    socialMediaEngagements?: IntFilter<"TaskSubmission"> | number
    jobApplications?: IntFilter<"TaskSubmission"> | number
    localOutreach?: IntFilter<"TaskSubmission"> | number
    intlOutreach?: IntFilter<"TaskSubmission"> | number
    ecommerceDeliveredOrders?: IntFilter<"TaskSubmission"> | number
    noOfClients?: IntFilter<"TaskSubmission"> | number
    earningsInDollars?: IntFilter<"TaskSubmission"> | number
    opportunities?: IntFilter<"TaskSubmission"> | number
    jobSecured?: IntFilter<"TaskSubmission"> | number
    earningsInNaira?: IntFilter<"TaskSubmission"> | number
    socialGroupPost?: IntFilter<"TaskSubmission"> | number
    userChallenge?: XOR<UserChallengeRelationFilter, UserChallengeWhereInput>
  }, "id">

  export type TaskSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    userChallengeId?: SortOrder
    date?: SortOrder
    upworkOutreach?: SortOrder
    socialMediaPosts?: SortOrder
    socialMediaEngagements?: SortOrder
    jobApplications?: SortOrder
    localOutreach?: SortOrder
    intlOutreach?: SortOrder
    ecommerceDeliveredOrders?: SortOrder
    noOfClients?: SortOrder
    earningsInDollars?: SortOrder
    opportunities?: SortOrder
    jobSecured?: SortOrder
    earningsInNaira?: SortOrder
    socialGroupPost?: SortOrder
    _count?: TaskSubmissionCountOrderByAggregateInput
    _avg?: TaskSubmissionAvgOrderByAggregateInput
    _max?: TaskSubmissionMaxOrderByAggregateInput
    _min?: TaskSubmissionMinOrderByAggregateInput
    _sum?: TaskSubmissionSumOrderByAggregateInput
  }

  export type TaskSubmissionScalarWhereWithAggregatesInput = {
    AND?: TaskSubmissionScalarWhereWithAggregatesInput | TaskSubmissionScalarWhereWithAggregatesInput[]
    OR?: TaskSubmissionScalarWhereWithAggregatesInput[]
    NOT?: TaskSubmissionScalarWhereWithAggregatesInput | TaskSubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskSubmission"> | string
    userChallengeId?: StringWithAggregatesFilter<"TaskSubmission"> | string
    date?: DateTimeWithAggregatesFilter<"TaskSubmission"> | Date | string
    upworkOutreach?: IntWithAggregatesFilter<"TaskSubmission"> | number
    socialMediaPosts?: IntWithAggregatesFilter<"TaskSubmission"> | number
    socialMediaEngagements?: IntWithAggregatesFilter<"TaskSubmission"> | number
    jobApplications?: IntWithAggregatesFilter<"TaskSubmission"> | number
    localOutreach?: IntWithAggregatesFilter<"TaskSubmission"> | number
    intlOutreach?: IntWithAggregatesFilter<"TaskSubmission"> | number
    ecommerceDeliveredOrders?: IntWithAggregatesFilter<"TaskSubmission"> | number
    noOfClients?: IntWithAggregatesFilter<"TaskSubmission"> | number
    earningsInDollars?: IntWithAggregatesFilter<"TaskSubmission"> | number
    opportunities?: IntWithAggregatesFilter<"TaskSubmission"> | number
    jobSecured?: IntWithAggregatesFilter<"TaskSubmission"> | number
    earningsInNaira?: IntWithAggregatesFilter<"TaskSubmission"> | number
    socialGroupPost?: IntWithAggregatesFilter<"TaskSubmission"> | number
  }

  export type UserCreateInput = {
    id?: string
    email: string
    uniqueCode: string
    firstName: string
    lastName: string
    password: string
    linkedInLink?: string | null
    upworkLink?: string | null
    facebookLink?: string | null
    twitterLink?: string | null
    funnelLink?: string | null
    mediumLink?: string | null
    goHighLevelAccountName?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    UserChallenge?: UserChallengeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    uniqueCode: string
    firstName: string
    lastName: string
    password: string
    linkedInLink?: string | null
    upworkLink?: string | null
    facebookLink?: string | null
    twitterLink?: string | null
    funnelLink?: string | null
    mediumLink?: string | null
    goHighLevelAccountName?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    UserChallenge?: UserChallengeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    uniqueCode?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    linkedInLink?: NullableStringFieldUpdateOperationsInput | string | null
    upworkLink?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    twitterLink?: NullableStringFieldUpdateOperationsInput | string | null
    funnelLink?: NullableStringFieldUpdateOperationsInput | string | null
    mediumLink?: NullableStringFieldUpdateOperationsInput | string | null
    goHighLevelAccountName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserChallenge?: UserChallengeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    uniqueCode?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    linkedInLink?: NullableStringFieldUpdateOperationsInput | string | null
    upworkLink?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    twitterLink?: NullableStringFieldUpdateOperationsInput | string | null
    funnelLink?: NullableStringFieldUpdateOperationsInput | string | null
    mediumLink?: NullableStringFieldUpdateOperationsInput | string | null
    goHighLevelAccountName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserChallenge?: UserChallengeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    uniqueCode: string
    firstName: string
    lastName: string
    password: string
    linkedInLink?: string | null
    upworkLink?: string | null
    facebookLink?: string | null
    twitterLink?: string | null
    funnelLink?: string | null
    mediumLink?: string | null
    goHighLevelAccountName?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    uniqueCode?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    linkedInLink?: NullableStringFieldUpdateOperationsInput | string | null
    upworkLink?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    twitterLink?: NullableStringFieldUpdateOperationsInput | string | null
    funnelLink?: NullableStringFieldUpdateOperationsInput | string | null
    mediumLink?: NullableStringFieldUpdateOperationsInput | string | null
    goHighLevelAccountName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    uniqueCode?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    linkedInLink?: NullableStringFieldUpdateOperationsInput | string | null
    upworkLink?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    twitterLink?: NullableStringFieldUpdateOperationsInput | string | null
    funnelLink?: NullableStringFieldUpdateOperationsInput | string | null
    mediumLink?: NullableStringFieldUpdateOperationsInput | string | null
    goHighLevelAccountName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeCreateInput = {
    id?: string
    month: string
    year: number
    current?: boolean
    acceptSubmission?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    UserChallenge?: UserChallengeCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateInput = {
    id?: string
    month: string
    year: number
    current?: boolean
    acceptSubmission?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    UserChallenge?: UserChallengeUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    current?: BoolFieldUpdateOperationsInput | boolean
    acceptSubmission?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserChallenge?: UserChallengeUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    current?: BoolFieldUpdateOperationsInput | boolean
    acceptSubmission?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserChallenge?: UserChallengeUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeCreateManyInput = {
    id?: string
    month: string
    year: number
    current?: boolean
    acceptSubmission?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    current?: BoolFieldUpdateOperationsInput | boolean
    acceptSubmission?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    current?: BoolFieldUpdateOperationsInput | boolean
    acceptSubmission?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserChallengeCreateInput = {
    id?: string
    totalPoints?: number
    user: UserCreateNestedOneWithoutUserChallengeInput
    challenge: ChallengeCreateNestedOneWithoutUserChallengeInput
    TaskSubmission?: TaskSubmissionCreateNestedManyWithoutUserChallengeInput
  }

  export type UserChallengeUncheckedCreateInput = {
    id?: string
    userId: string
    challengeId: string
    totalPoints?: number
    TaskSubmission?: TaskSubmissionUncheckedCreateNestedManyWithoutUserChallengeInput
  }

  export type UserChallengeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutUserChallengeNestedInput
    challenge?: ChallengeUpdateOneRequiredWithoutUserChallengeNestedInput
    TaskSubmission?: TaskSubmissionUpdateManyWithoutUserChallengeNestedInput
  }

  export type UserChallengeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    TaskSubmission?: TaskSubmissionUncheckedUpdateManyWithoutUserChallengeNestedInput
  }

  export type UserChallengeCreateManyInput = {
    id?: string
    userId: string
    challengeId: string
    totalPoints?: number
  }

  export type UserChallengeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
  }

  export type UserChallengeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
  }

  export type TaskSubmissionCreateInput = {
    id?: string
    date?: Date | string
    upworkOutreach?: number
    socialMediaPosts?: number
    socialMediaEngagements?: number
    jobApplications?: number
    localOutreach?: number
    intlOutreach?: number
    ecommerceDeliveredOrders?: number
    noOfClients?: number
    earningsInDollars?: number
    opportunities?: number
    jobSecured?: number
    earningsInNaira?: number
    socialGroupPost?: number
    userChallenge: UserChallengeCreateNestedOneWithoutTaskSubmissionInput
  }

  export type TaskSubmissionUncheckedCreateInput = {
    id?: string
    userChallengeId: string
    date?: Date | string
    upworkOutreach?: number
    socialMediaPosts?: number
    socialMediaEngagements?: number
    jobApplications?: number
    localOutreach?: number
    intlOutreach?: number
    ecommerceDeliveredOrders?: number
    noOfClients?: number
    earningsInDollars?: number
    opportunities?: number
    jobSecured?: number
    earningsInNaira?: number
    socialGroupPost?: number
  }

  export type TaskSubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    upworkOutreach?: IntFieldUpdateOperationsInput | number
    socialMediaPosts?: IntFieldUpdateOperationsInput | number
    socialMediaEngagements?: IntFieldUpdateOperationsInput | number
    jobApplications?: IntFieldUpdateOperationsInput | number
    localOutreach?: IntFieldUpdateOperationsInput | number
    intlOutreach?: IntFieldUpdateOperationsInput | number
    ecommerceDeliveredOrders?: IntFieldUpdateOperationsInput | number
    noOfClients?: IntFieldUpdateOperationsInput | number
    earningsInDollars?: IntFieldUpdateOperationsInput | number
    opportunities?: IntFieldUpdateOperationsInput | number
    jobSecured?: IntFieldUpdateOperationsInput | number
    earningsInNaira?: IntFieldUpdateOperationsInput | number
    socialGroupPost?: IntFieldUpdateOperationsInput | number
    userChallenge?: UserChallengeUpdateOneRequiredWithoutTaskSubmissionNestedInput
  }

  export type TaskSubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userChallengeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    upworkOutreach?: IntFieldUpdateOperationsInput | number
    socialMediaPosts?: IntFieldUpdateOperationsInput | number
    socialMediaEngagements?: IntFieldUpdateOperationsInput | number
    jobApplications?: IntFieldUpdateOperationsInput | number
    localOutreach?: IntFieldUpdateOperationsInput | number
    intlOutreach?: IntFieldUpdateOperationsInput | number
    ecommerceDeliveredOrders?: IntFieldUpdateOperationsInput | number
    noOfClients?: IntFieldUpdateOperationsInput | number
    earningsInDollars?: IntFieldUpdateOperationsInput | number
    opportunities?: IntFieldUpdateOperationsInput | number
    jobSecured?: IntFieldUpdateOperationsInput | number
    earningsInNaira?: IntFieldUpdateOperationsInput | number
    socialGroupPost?: IntFieldUpdateOperationsInput | number
  }

  export type TaskSubmissionCreateManyInput = {
    id?: string
    userChallengeId: string
    date?: Date | string
    upworkOutreach?: number
    socialMediaPosts?: number
    socialMediaEngagements?: number
    jobApplications?: number
    localOutreach?: number
    intlOutreach?: number
    ecommerceDeliveredOrders?: number
    noOfClients?: number
    earningsInDollars?: number
    opportunities?: number
    jobSecured?: number
    earningsInNaira?: number
    socialGroupPost?: number
  }

  export type TaskSubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    upworkOutreach?: IntFieldUpdateOperationsInput | number
    socialMediaPosts?: IntFieldUpdateOperationsInput | number
    socialMediaEngagements?: IntFieldUpdateOperationsInput | number
    jobApplications?: IntFieldUpdateOperationsInput | number
    localOutreach?: IntFieldUpdateOperationsInput | number
    intlOutreach?: IntFieldUpdateOperationsInput | number
    ecommerceDeliveredOrders?: IntFieldUpdateOperationsInput | number
    noOfClients?: IntFieldUpdateOperationsInput | number
    earningsInDollars?: IntFieldUpdateOperationsInput | number
    opportunities?: IntFieldUpdateOperationsInput | number
    jobSecured?: IntFieldUpdateOperationsInput | number
    earningsInNaira?: IntFieldUpdateOperationsInput | number
    socialGroupPost?: IntFieldUpdateOperationsInput | number
  }

  export type TaskSubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userChallengeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    upworkOutreach?: IntFieldUpdateOperationsInput | number
    socialMediaPosts?: IntFieldUpdateOperationsInput | number
    socialMediaEngagements?: IntFieldUpdateOperationsInput | number
    jobApplications?: IntFieldUpdateOperationsInput | number
    localOutreach?: IntFieldUpdateOperationsInput | number
    intlOutreach?: IntFieldUpdateOperationsInput | number
    ecommerceDeliveredOrders?: IntFieldUpdateOperationsInput | number
    noOfClients?: IntFieldUpdateOperationsInput | number
    earningsInDollars?: IntFieldUpdateOperationsInput | number
    opportunities?: IntFieldUpdateOperationsInput | number
    jobSecured?: IntFieldUpdateOperationsInput | number
    earningsInNaira?: IntFieldUpdateOperationsInput | number
    socialGroupPost?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserChallengeListRelationFilter = {
    every?: UserChallengeWhereInput
    some?: UserChallengeWhereInput
    none?: UserChallengeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserChallengeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    uniqueCode?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    linkedInLink?: SortOrder
    upworkLink?: SortOrder
    facebookLink?: SortOrder
    twitterLink?: SortOrder
    funnelLink?: SortOrder
    mediumLink?: SortOrder
    goHighLevelAccountName?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    uniqueCode?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    linkedInLink?: SortOrder
    upworkLink?: SortOrder
    facebookLink?: SortOrder
    twitterLink?: SortOrder
    funnelLink?: SortOrder
    mediumLink?: SortOrder
    goHighLevelAccountName?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    uniqueCode?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    linkedInLink?: SortOrder
    upworkLink?: SortOrder
    facebookLink?: SortOrder
    twitterLink?: SortOrder
    funnelLink?: SortOrder
    mediumLink?: SortOrder
    goHighLevelAccountName?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ChallengeCountOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    current?: SortOrder
    acceptSubmission?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengeAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type ChallengeMaxOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    current?: SortOrder
    acceptSubmission?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengeMinOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    current?: SortOrder
    acceptSubmission?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengeSumOrderByAggregateInput = {
    year?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChallengeRelationFilter = {
    is?: ChallengeWhereInput
    isNot?: ChallengeWhereInput
  }

  export type TaskSubmissionListRelationFilter = {
    every?: TaskSubmissionWhereInput
    some?: TaskSubmissionWhereInput
    none?: TaskSubmissionWhereInput
  }

  export type TaskSubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserChallengeUserIdChallengeIdCompoundUniqueInput = {
    userId: string
    challengeId: string
  }

  export type UserChallengeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    totalPoints?: SortOrder
  }

  export type UserChallengeAvgOrderByAggregateInput = {
    totalPoints?: SortOrder
  }

  export type UserChallengeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    totalPoints?: SortOrder
  }

  export type UserChallengeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    totalPoints?: SortOrder
  }

  export type UserChallengeSumOrderByAggregateInput = {
    totalPoints?: SortOrder
  }

  export type UserChallengeRelationFilter = {
    is?: UserChallengeWhereInput
    isNot?: UserChallengeWhereInput
  }

  export type TaskSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    userChallengeId?: SortOrder
    date?: SortOrder
    upworkOutreach?: SortOrder
    socialMediaPosts?: SortOrder
    socialMediaEngagements?: SortOrder
    jobApplications?: SortOrder
    localOutreach?: SortOrder
    intlOutreach?: SortOrder
    ecommerceDeliveredOrders?: SortOrder
    noOfClients?: SortOrder
    earningsInDollars?: SortOrder
    opportunities?: SortOrder
    jobSecured?: SortOrder
    earningsInNaira?: SortOrder
    socialGroupPost?: SortOrder
  }

  export type TaskSubmissionAvgOrderByAggregateInput = {
    upworkOutreach?: SortOrder
    socialMediaPosts?: SortOrder
    socialMediaEngagements?: SortOrder
    jobApplications?: SortOrder
    localOutreach?: SortOrder
    intlOutreach?: SortOrder
    ecommerceDeliveredOrders?: SortOrder
    noOfClients?: SortOrder
    earningsInDollars?: SortOrder
    opportunities?: SortOrder
    jobSecured?: SortOrder
    earningsInNaira?: SortOrder
    socialGroupPost?: SortOrder
  }

  export type TaskSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    userChallengeId?: SortOrder
    date?: SortOrder
    upworkOutreach?: SortOrder
    socialMediaPosts?: SortOrder
    socialMediaEngagements?: SortOrder
    jobApplications?: SortOrder
    localOutreach?: SortOrder
    intlOutreach?: SortOrder
    ecommerceDeliveredOrders?: SortOrder
    noOfClients?: SortOrder
    earningsInDollars?: SortOrder
    opportunities?: SortOrder
    jobSecured?: SortOrder
    earningsInNaira?: SortOrder
    socialGroupPost?: SortOrder
  }

  export type TaskSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    userChallengeId?: SortOrder
    date?: SortOrder
    upworkOutreach?: SortOrder
    socialMediaPosts?: SortOrder
    socialMediaEngagements?: SortOrder
    jobApplications?: SortOrder
    localOutreach?: SortOrder
    intlOutreach?: SortOrder
    ecommerceDeliveredOrders?: SortOrder
    noOfClients?: SortOrder
    earningsInDollars?: SortOrder
    opportunities?: SortOrder
    jobSecured?: SortOrder
    earningsInNaira?: SortOrder
    socialGroupPost?: SortOrder
  }

  export type TaskSubmissionSumOrderByAggregateInput = {
    upworkOutreach?: SortOrder
    socialMediaPosts?: SortOrder
    socialMediaEngagements?: SortOrder
    jobApplications?: SortOrder
    localOutreach?: SortOrder
    intlOutreach?: SortOrder
    ecommerceDeliveredOrders?: SortOrder
    noOfClients?: SortOrder
    earningsInDollars?: SortOrder
    opportunities?: SortOrder
    jobSecured?: SortOrder
    earningsInNaira?: SortOrder
    socialGroupPost?: SortOrder
  }

  export type UserChallengeCreateNestedManyWithoutUserInput = {
    create?: XOR<UserChallengeCreateWithoutUserInput, UserChallengeUncheckedCreateWithoutUserInput> | UserChallengeCreateWithoutUserInput[] | UserChallengeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutUserInput | UserChallengeCreateOrConnectWithoutUserInput[]
    createMany?: UserChallengeCreateManyUserInputEnvelope
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
  }

  export type UserChallengeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserChallengeCreateWithoutUserInput, UserChallengeUncheckedCreateWithoutUserInput> | UserChallengeCreateWithoutUserInput[] | UserChallengeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutUserInput | UserChallengeCreateOrConnectWithoutUserInput[]
    createMany?: UserChallengeCreateManyUserInputEnvelope
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserChallengeUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserChallengeCreateWithoutUserInput, UserChallengeUncheckedCreateWithoutUserInput> | UserChallengeCreateWithoutUserInput[] | UserChallengeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutUserInput | UserChallengeCreateOrConnectWithoutUserInput[]
    upsert?: UserChallengeUpsertWithWhereUniqueWithoutUserInput | UserChallengeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserChallengeCreateManyUserInputEnvelope
    set?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    disconnect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    delete?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    update?: UserChallengeUpdateWithWhereUniqueWithoutUserInput | UserChallengeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserChallengeUpdateManyWithWhereWithoutUserInput | UserChallengeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserChallengeScalarWhereInput | UserChallengeScalarWhereInput[]
  }

  export type UserChallengeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserChallengeCreateWithoutUserInput, UserChallengeUncheckedCreateWithoutUserInput> | UserChallengeCreateWithoutUserInput[] | UserChallengeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutUserInput | UserChallengeCreateOrConnectWithoutUserInput[]
    upsert?: UserChallengeUpsertWithWhereUniqueWithoutUserInput | UserChallengeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserChallengeCreateManyUserInputEnvelope
    set?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    disconnect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    delete?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    update?: UserChallengeUpdateWithWhereUniqueWithoutUserInput | UserChallengeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserChallengeUpdateManyWithWhereWithoutUserInput | UserChallengeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserChallengeScalarWhereInput | UserChallengeScalarWhereInput[]
  }

  export type UserChallengeCreateNestedManyWithoutChallengeInput = {
    create?: XOR<UserChallengeCreateWithoutChallengeInput, UserChallengeUncheckedCreateWithoutChallengeInput> | UserChallengeCreateWithoutChallengeInput[] | UserChallengeUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutChallengeInput | UserChallengeCreateOrConnectWithoutChallengeInput[]
    createMany?: UserChallengeCreateManyChallengeInputEnvelope
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
  }

  export type UserChallengeUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<UserChallengeCreateWithoutChallengeInput, UserChallengeUncheckedCreateWithoutChallengeInput> | UserChallengeCreateWithoutChallengeInput[] | UserChallengeUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutChallengeInput | UserChallengeCreateOrConnectWithoutChallengeInput[]
    createMany?: UserChallengeCreateManyChallengeInputEnvelope
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserChallengeUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<UserChallengeCreateWithoutChallengeInput, UserChallengeUncheckedCreateWithoutChallengeInput> | UserChallengeCreateWithoutChallengeInput[] | UserChallengeUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutChallengeInput | UserChallengeCreateOrConnectWithoutChallengeInput[]
    upsert?: UserChallengeUpsertWithWhereUniqueWithoutChallengeInput | UserChallengeUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: UserChallengeCreateManyChallengeInputEnvelope
    set?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    disconnect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    delete?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    update?: UserChallengeUpdateWithWhereUniqueWithoutChallengeInput | UserChallengeUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: UserChallengeUpdateManyWithWhereWithoutChallengeInput | UserChallengeUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: UserChallengeScalarWhereInput | UserChallengeScalarWhereInput[]
  }

  export type UserChallengeUncheckedUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<UserChallengeCreateWithoutChallengeInput, UserChallengeUncheckedCreateWithoutChallengeInput> | UserChallengeCreateWithoutChallengeInput[] | UserChallengeUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutChallengeInput | UserChallengeCreateOrConnectWithoutChallengeInput[]
    upsert?: UserChallengeUpsertWithWhereUniqueWithoutChallengeInput | UserChallengeUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: UserChallengeCreateManyChallengeInputEnvelope
    set?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    disconnect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    delete?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    update?: UserChallengeUpdateWithWhereUniqueWithoutChallengeInput | UserChallengeUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: UserChallengeUpdateManyWithWhereWithoutChallengeInput | UserChallengeUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: UserChallengeScalarWhereInput | UserChallengeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserChallengeInput = {
    create?: XOR<UserCreateWithoutUserChallengeInput, UserUncheckedCreateWithoutUserChallengeInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserChallengeInput
    connect?: UserWhereUniqueInput
  }

  export type ChallengeCreateNestedOneWithoutUserChallengeInput = {
    create?: XOR<ChallengeCreateWithoutUserChallengeInput, ChallengeUncheckedCreateWithoutUserChallengeInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutUserChallengeInput
    connect?: ChallengeWhereUniqueInput
  }

  export type TaskSubmissionCreateNestedManyWithoutUserChallengeInput = {
    create?: XOR<TaskSubmissionCreateWithoutUserChallengeInput, TaskSubmissionUncheckedCreateWithoutUserChallengeInput> | TaskSubmissionCreateWithoutUserChallengeInput[] | TaskSubmissionUncheckedCreateWithoutUserChallengeInput[]
    connectOrCreate?: TaskSubmissionCreateOrConnectWithoutUserChallengeInput | TaskSubmissionCreateOrConnectWithoutUserChallengeInput[]
    createMany?: TaskSubmissionCreateManyUserChallengeInputEnvelope
    connect?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
  }

  export type TaskSubmissionUncheckedCreateNestedManyWithoutUserChallengeInput = {
    create?: XOR<TaskSubmissionCreateWithoutUserChallengeInput, TaskSubmissionUncheckedCreateWithoutUserChallengeInput> | TaskSubmissionCreateWithoutUserChallengeInput[] | TaskSubmissionUncheckedCreateWithoutUserChallengeInput[]
    connectOrCreate?: TaskSubmissionCreateOrConnectWithoutUserChallengeInput | TaskSubmissionCreateOrConnectWithoutUserChallengeInput[]
    createMany?: TaskSubmissionCreateManyUserChallengeInputEnvelope
    connect?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutUserChallengeNestedInput = {
    create?: XOR<UserCreateWithoutUserChallengeInput, UserUncheckedCreateWithoutUserChallengeInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserChallengeInput
    upsert?: UserUpsertWithoutUserChallengeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserChallengeInput, UserUpdateWithoutUserChallengeInput>, UserUncheckedUpdateWithoutUserChallengeInput>
  }

  export type ChallengeUpdateOneRequiredWithoutUserChallengeNestedInput = {
    create?: XOR<ChallengeCreateWithoutUserChallengeInput, ChallengeUncheckedCreateWithoutUserChallengeInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutUserChallengeInput
    upsert?: ChallengeUpsertWithoutUserChallengeInput
    connect?: ChallengeWhereUniqueInput
    update?: XOR<XOR<ChallengeUpdateToOneWithWhereWithoutUserChallengeInput, ChallengeUpdateWithoutUserChallengeInput>, ChallengeUncheckedUpdateWithoutUserChallengeInput>
  }

  export type TaskSubmissionUpdateManyWithoutUserChallengeNestedInput = {
    create?: XOR<TaskSubmissionCreateWithoutUserChallengeInput, TaskSubmissionUncheckedCreateWithoutUserChallengeInput> | TaskSubmissionCreateWithoutUserChallengeInput[] | TaskSubmissionUncheckedCreateWithoutUserChallengeInput[]
    connectOrCreate?: TaskSubmissionCreateOrConnectWithoutUserChallengeInput | TaskSubmissionCreateOrConnectWithoutUserChallengeInput[]
    upsert?: TaskSubmissionUpsertWithWhereUniqueWithoutUserChallengeInput | TaskSubmissionUpsertWithWhereUniqueWithoutUserChallengeInput[]
    createMany?: TaskSubmissionCreateManyUserChallengeInputEnvelope
    set?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    disconnect?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    delete?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    connect?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    update?: TaskSubmissionUpdateWithWhereUniqueWithoutUserChallengeInput | TaskSubmissionUpdateWithWhereUniqueWithoutUserChallengeInput[]
    updateMany?: TaskSubmissionUpdateManyWithWhereWithoutUserChallengeInput | TaskSubmissionUpdateManyWithWhereWithoutUserChallengeInput[]
    deleteMany?: TaskSubmissionScalarWhereInput | TaskSubmissionScalarWhereInput[]
  }

  export type TaskSubmissionUncheckedUpdateManyWithoutUserChallengeNestedInput = {
    create?: XOR<TaskSubmissionCreateWithoutUserChallengeInput, TaskSubmissionUncheckedCreateWithoutUserChallengeInput> | TaskSubmissionCreateWithoutUserChallengeInput[] | TaskSubmissionUncheckedCreateWithoutUserChallengeInput[]
    connectOrCreate?: TaskSubmissionCreateOrConnectWithoutUserChallengeInput | TaskSubmissionCreateOrConnectWithoutUserChallengeInput[]
    upsert?: TaskSubmissionUpsertWithWhereUniqueWithoutUserChallengeInput | TaskSubmissionUpsertWithWhereUniqueWithoutUserChallengeInput[]
    createMany?: TaskSubmissionCreateManyUserChallengeInputEnvelope
    set?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    disconnect?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    delete?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    connect?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    update?: TaskSubmissionUpdateWithWhereUniqueWithoutUserChallengeInput | TaskSubmissionUpdateWithWhereUniqueWithoutUserChallengeInput[]
    updateMany?: TaskSubmissionUpdateManyWithWhereWithoutUserChallengeInput | TaskSubmissionUpdateManyWithWhereWithoutUserChallengeInput[]
    deleteMany?: TaskSubmissionScalarWhereInput | TaskSubmissionScalarWhereInput[]
  }

  export type UserChallengeCreateNestedOneWithoutTaskSubmissionInput = {
    create?: XOR<UserChallengeCreateWithoutTaskSubmissionInput, UserChallengeUncheckedCreateWithoutTaskSubmissionInput>
    connectOrCreate?: UserChallengeCreateOrConnectWithoutTaskSubmissionInput
    connect?: UserChallengeWhereUniqueInput
  }

  export type UserChallengeUpdateOneRequiredWithoutTaskSubmissionNestedInput = {
    create?: XOR<UserChallengeCreateWithoutTaskSubmissionInput, UserChallengeUncheckedCreateWithoutTaskSubmissionInput>
    connectOrCreate?: UserChallengeCreateOrConnectWithoutTaskSubmissionInput
    upsert?: UserChallengeUpsertWithoutTaskSubmissionInput
    connect?: UserChallengeWhereUniqueInput
    update?: XOR<XOR<UserChallengeUpdateToOneWithWhereWithoutTaskSubmissionInput, UserChallengeUpdateWithoutTaskSubmissionInput>, UserChallengeUncheckedUpdateWithoutTaskSubmissionInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserChallengeCreateWithoutUserInput = {
    id?: string
    totalPoints?: number
    challenge: ChallengeCreateNestedOneWithoutUserChallengeInput
    TaskSubmission?: TaskSubmissionCreateNestedManyWithoutUserChallengeInput
  }

  export type UserChallengeUncheckedCreateWithoutUserInput = {
    id?: string
    challengeId: string
    totalPoints?: number
    TaskSubmission?: TaskSubmissionUncheckedCreateNestedManyWithoutUserChallengeInput
  }

  export type UserChallengeCreateOrConnectWithoutUserInput = {
    where: UserChallengeWhereUniqueInput
    create: XOR<UserChallengeCreateWithoutUserInput, UserChallengeUncheckedCreateWithoutUserInput>
  }

  export type UserChallengeCreateManyUserInputEnvelope = {
    data: UserChallengeCreateManyUserInput | UserChallengeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserChallengeUpsertWithWhereUniqueWithoutUserInput = {
    where: UserChallengeWhereUniqueInput
    update: XOR<UserChallengeUpdateWithoutUserInput, UserChallengeUncheckedUpdateWithoutUserInput>
    create: XOR<UserChallengeCreateWithoutUserInput, UserChallengeUncheckedCreateWithoutUserInput>
  }

  export type UserChallengeUpdateWithWhereUniqueWithoutUserInput = {
    where: UserChallengeWhereUniqueInput
    data: XOR<UserChallengeUpdateWithoutUserInput, UserChallengeUncheckedUpdateWithoutUserInput>
  }

  export type UserChallengeUpdateManyWithWhereWithoutUserInput = {
    where: UserChallengeScalarWhereInput
    data: XOR<UserChallengeUpdateManyMutationInput, UserChallengeUncheckedUpdateManyWithoutUserInput>
  }

  export type UserChallengeScalarWhereInput = {
    AND?: UserChallengeScalarWhereInput | UserChallengeScalarWhereInput[]
    OR?: UserChallengeScalarWhereInput[]
    NOT?: UserChallengeScalarWhereInput | UserChallengeScalarWhereInput[]
    id?: StringFilter<"UserChallenge"> | string
    userId?: StringFilter<"UserChallenge"> | string
    challengeId?: StringFilter<"UserChallenge"> | string
    totalPoints?: IntFilter<"UserChallenge"> | number
  }

  export type UserChallengeCreateWithoutChallengeInput = {
    id?: string
    totalPoints?: number
    user: UserCreateNestedOneWithoutUserChallengeInput
    TaskSubmission?: TaskSubmissionCreateNestedManyWithoutUserChallengeInput
  }

  export type UserChallengeUncheckedCreateWithoutChallengeInput = {
    id?: string
    userId: string
    totalPoints?: number
    TaskSubmission?: TaskSubmissionUncheckedCreateNestedManyWithoutUserChallengeInput
  }

  export type UserChallengeCreateOrConnectWithoutChallengeInput = {
    where: UserChallengeWhereUniqueInput
    create: XOR<UserChallengeCreateWithoutChallengeInput, UserChallengeUncheckedCreateWithoutChallengeInput>
  }

  export type UserChallengeCreateManyChallengeInputEnvelope = {
    data: UserChallengeCreateManyChallengeInput | UserChallengeCreateManyChallengeInput[]
    skipDuplicates?: boolean
  }

  export type UserChallengeUpsertWithWhereUniqueWithoutChallengeInput = {
    where: UserChallengeWhereUniqueInput
    update: XOR<UserChallengeUpdateWithoutChallengeInput, UserChallengeUncheckedUpdateWithoutChallengeInput>
    create: XOR<UserChallengeCreateWithoutChallengeInput, UserChallengeUncheckedCreateWithoutChallengeInput>
  }

  export type UserChallengeUpdateWithWhereUniqueWithoutChallengeInput = {
    where: UserChallengeWhereUniqueInput
    data: XOR<UserChallengeUpdateWithoutChallengeInput, UserChallengeUncheckedUpdateWithoutChallengeInput>
  }

  export type UserChallengeUpdateManyWithWhereWithoutChallengeInput = {
    where: UserChallengeScalarWhereInput
    data: XOR<UserChallengeUpdateManyMutationInput, UserChallengeUncheckedUpdateManyWithoutChallengeInput>
  }

  export type UserCreateWithoutUserChallengeInput = {
    id?: string
    email: string
    uniqueCode: string
    firstName: string
    lastName: string
    password: string
    linkedInLink?: string | null
    upworkLink?: string | null
    facebookLink?: string | null
    twitterLink?: string | null
    funnelLink?: string | null
    mediumLink?: string | null
    goHighLevelAccountName?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutUserChallengeInput = {
    id?: string
    email: string
    uniqueCode: string
    firstName: string
    lastName: string
    password: string
    linkedInLink?: string | null
    upworkLink?: string | null
    facebookLink?: string | null
    twitterLink?: string | null
    funnelLink?: string | null
    mediumLink?: string | null
    goHighLevelAccountName?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutUserChallengeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserChallengeInput, UserUncheckedCreateWithoutUserChallengeInput>
  }

  export type ChallengeCreateWithoutUserChallengeInput = {
    id?: string
    month: string
    year: number
    current?: boolean
    acceptSubmission?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengeUncheckedCreateWithoutUserChallengeInput = {
    id?: string
    month: string
    year: number
    current?: boolean
    acceptSubmission?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengeCreateOrConnectWithoutUserChallengeInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutUserChallengeInput, ChallengeUncheckedCreateWithoutUserChallengeInput>
  }

  export type TaskSubmissionCreateWithoutUserChallengeInput = {
    id?: string
    date?: Date | string
    upworkOutreach?: number
    socialMediaPosts?: number
    socialMediaEngagements?: number
    jobApplications?: number
    localOutreach?: number
    intlOutreach?: number
    ecommerceDeliveredOrders?: number
    noOfClients?: number
    earningsInDollars?: number
    opportunities?: number
    jobSecured?: number
    earningsInNaira?: number
    socialGroupPost?: number
  }

  export type TaskSubmissionUncheckedCreateWithoutUserChallengeInput = {
    id?: string
    date?: Date | string
    upworkOutreach?: number
    socialMediaPosts?: number
    socialMediaEngagements?: number
    jobApplications?: number
    localOutreach?: number
    intlOutreach?: number
    ecommerceDeliveredOrders?: number
    noOfClients?: number
    earningsInDollars?: number
    opportunities?: number
    jobSecured?: number
    earningsInNaira?: number
    socialGroupPost?: number
  }

  export type TaskSubmissionCreateOrConnectWithoutUserChallengeInput = {
    where: TaskSubmissionWhereUniqueInput
    create: XOR<TaskSubmissionCreateWithoutUserChallengeInput, TaskSubmissionUncheckedCreateWithoutUserChallengeInput>
  }

  export type TaskSubmissionCreateManyUserChallengeInputEnvelope = {
    data: TaskSubmissionCreateManyUserChallengeInput | TaskSubmissionCreateManyUserChallengeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutUserChallengeInput = {
    update: XOR<UserUpdateWithoutUserChallengeInput, UserUncheckedUpdateWithoutUserChallengeInput>
    create: XOR<UserCreateWithoutUserChallengeInput, UserUncheckedCreateWithoutUserChallengeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserChallengeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserChallengeInput, UserUncheckedUpdateWithoutUserChallengeInput>
  }

  export type UserUpdateWithoutUserChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    uniqueCode?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    linkedInLink?: NullableStringFieldUpdateOperationsInput | string | null
    upworkLink?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    twitterLink?: NullableStringFieldUpdateOperationsInput | string | null
    funnelLink?: NullableStringFieldUpdateOperationsInput | string | null
    mediumLink?: NullableStringFieldUpdateOperationsInput | string | null
    goHighLevelAccountName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutUserChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    uniqueCode?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    linkedInLink?: NullableStringFieldUpdateOperationsInput | string | null
    upworkLink?: NullableStringFieldUpdateOperationsInput | string | null
    facebookLink?: NullableStringFieldUpdateOperationsInput | string | null
    twitterLink?: NullableStringFieldUpdateOperationsInput | string | null
    funnelLink?: NullableStringFieldUpdateOperationsInput | string | null
    mediumLink?: NullableStringFieldUpdateOperationsInput | string | null
    goHighLevelAccountName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeUpsertWithoutUserChallengeInput = {
    update: XOR<ChallengeUpdateWithoutUserChallengeInput, ChallengeUncheckedUpdateWithoutUserChallengeInput>
    create: XOR<ChallengeCreateWithoutUserChallengeInput, ChallengeUncheckedCreateWithoutUserChallengeInput>
    where?: ChallengeWhereInput
  }

  export type ChallengeUpdateToOneWithWhereWithoutUserChallengeInput = {
    where?: ChallengeWhereInput
    data: XOR<ChallengeUpdateWithoutUserChallengeInput, ChallengeUncheckedUpdateWithoutUserChallengeInput>
  }

  export type ChallengeUpdateWithoutUserChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    current?: BoolFieldUpdateOperationsInput | boolean
    acceptSubmission?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeUncheckedUpdateWithoutUserChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    current?: BoolFieldUpdateOperationsInput | boolean
    acceptSubmission?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskSubmissionUpsertWithWhereUniqueWithoutUserChallengeInput = {
    where: TaskSubmissionWhereUniqueInput
    update: XOR<TaskSubmissionUpdateWithoutUserChallengeInput, TaskSubmissionUncheckedUpdateWithoutUserChallengeInput>
    create: XOR<TaskSubmissionCreateWithoutUserChallengeInput, TaskSubmissionUncheckedCreateWithoutUserChallengeInput>
  }

  export type TaskSubmissionUpdateWithWhereUniqueWithoutUserChallengeInput = {
    where: TaskSubmissionWhereUniqueInput
    data: XOR<TaskSubmissionUpdateWithoutUserChallengeInput, TaskSubmissionUncheckedUpdateWithoutUserChallengeInput>
  }

  export type TaskSubmissionUpdateManyWithWhereWithoutUserChallengeInput = {
    where: TaskSubmissionScalarWhereInput
    data: XOR<TaskSubmissionUpdateManyMutationInput, TaskSubmissionUncheckedUpdateManyWithoutUserChallengeInput>
  }

  export type TaskSubmissionScalarWhereInput = {
    AND?: TaskSubmissionScalarWhereInput | TaskSubmissionScalarWhereInput[]
    OR?: TaskSubmissionScalarWhereInput[]
    NOT?: TaskSubmissionScalarWhereInput | TaskSubmissionScalarWhereInput[]
    id?: StringFilter<"TaskSubmission"> | string
    userChallengeId?: StringFilter<"TaskSubmission"> | string
    date?: DateTimeFilter<"TaskSubmission"> | Date | string
    upworkOutreach?: IntFilter<"TaskSubmission"> | number
    socialMediaPosts?: IntFilter<"TaskSubmission"> | number
    socialMediaEngagements?: IntFilter<"TaskSubmission"> | number
    jobApplications?: IntFilter<"TaskSubmission"> | number
    localOutreach?: IntFilter<"TaskSubmission"> | number
    intlOutreach?: IntFilter<"TaskSubmission"> | number
    ecommerceDeliveredOrders?: IntFilter<"TaskSubmission"> | number
    noOfClients?: IntFilter<"TaskSubmission"> | number
    earningsInDollars?: IntFilter<"TaskSubmission"> | number
    opportunities?: IntFilter<"TaskSubmission"> | number
    jobSecured?: IntFilter<"TaskSubmission"> | number
    earningsInNaira?: IntFilter<"TaskSubmission"> | number
    socialGroupPost?: IntFilter<"TaskSubmission"> | number
  }

  export type UserChallengeCreateWithoutTaskSubmissionInput = {
    id?: string
    totalPoints?: number
    user: UserCreateNestedOneWithoutUserChallengeInput
    challenge: ChallengeCreateNestedOneWithoutUserChallengeInput
  }

  export type UserChallengeUncheckedCreateWithoutTaskSubmissionInput = {
    id?: string
    userId: string
    challengeId: string
    totalPoints?: number
  }

  export type UserChallengeCreateOrConnectWithoutTaskSubmissionInput = {
    where: UserChallengeWhereUniqueInput
    create: XOR<UserChallengeCreateWithoutTaskSubmissionInput, UserChallengeUncheckedCreateWithoutTaskSubmissionInput>
  }

  export type UserChallengeUpsertWithoutTaskSubmissionInput = {
    update: XOR<UserChallengeUpdateWithoutTaskSubmissionInput, UserChallengeUncheckedUpdateWithoutTaskSubmissionInput>
    create: XOR<UserChallengeCreateWithoutTaskSubmissionInput, UserChallengeUncheckedCreateWithoutTaskSubmissionInput>
    where?: UserChallengeWhereInput
  }

  export type UserChallengeUpdateToOneWithWhereWithoutTaskSubmissionInput = {
    where?: UserChallengeWhereInput
    data: XOR<UserChallengeUpdateWithoutTaskSubmissionInput, UserChallengeUncheckedUpdateWithoutTaskSubmissionInput>
  }

  export type UserChallengeUpdateWithoutTaskSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutUserChallengeNestedInput
    challenge?: ChallengeUpdateOneRequiredWithoutUserChallengeNestedInput
  }

  export type UserChallengeUncheckedUpdateWithoutTaskSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
  }

  export type UserChallengeCreateManyUserInput = {
    id?: string
    challengeId: string
    totalPoints?: number
  }

  export type UserChallengeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    challenge?: ChallengeUpdateOneRequiredWithoutUserChallengeNestedInput
    TaskSubmission?: TaskSubmissionUpdateManyWithoutUserChallengeNestedInput
  }

  export type UserChallengeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    TaskSubmission?: TaskSubmissionUncheckedUpdateManyWithoutUserChallengeNestedInput
  }

  export type UserChallengeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
  }

  export type UserChallengeCreateManyChallengeInput = {
    id?: string
    userId: string
    totalPoints?: number
  }

  export type UserChallengeUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutUserChallengeNestedInput
    TaskSubmission?: TaskSubmissionUpdateManyWithoutUserChallengeNestedInput
  }

  export type UserChallengeUncheckedUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    TaskSubmission?: TaskSubmissionUncheckedUpdateManyWithoutUserChallengeNestedInput
  }

  export type UserChallengeUncheckedUpdateManyWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
  }

  export type TaskSubmissionCreateManyUserChallengeInput = {
    id?: string
    date?: Date | string
    upworkOutreach?: number
    socialMediaPosts?: number
    socialMediaEngagements?: number
    jobApplications?: number
    localOutreach?: number
    intlOutreach?: number
    ecommerceDeliveredOrders?: number
    noOfClients?: number
    earningsInDollars?: number
    opportunities?: number
    jobSecured?: number
    earningsInNaira?: number
    socialGroupPost?: number
  }

  export type TaskSubmissionUpdateWithoutUserChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    upworkOutreach?: IntFieldUpdateOperationsInput | number
    socialMediaPosts?: IntFieldUpdateOperationsInput | number
    socialMediaEngagements?: IntFieldUpdateOperationsInput | number
    jobApplications?: IntFieldUpdateOperationsInput | number
    localOutreach?: IntFieldUpdateOperationsInput | number
    intlOutreach?: IntFieldUpdateOperationsInput | number
    ecommerceDeliveredOrders?: IntFieldUpdateOperationsInput | number
    noOfClients?: IntFieldUpdateOperationsInput | number
    earningsInDollars?: IntFieldUpdateOperationsInput | number
    opportunities?: IntFieldUpdateOperationsInput | number
    jobSecured?: IntFieldUpdateOperationsInput | number
    earningsInNaira?: IntFieldUpdateOperationsInput | number
    socialGroupPost?: IntFieldUpdateOperationsInput | number
  }

  export type TaskSubmissionUncheckedUpdateWithoutUserChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    upworkOutreach?: IntFieldUpdateOperationsInput | number
    socialMediaPosts?: IntFieldUpdateOperationsInput | number
    socialMediaEngagements?: IntFieldUpdateOperationsInput | number
    jobApplications?: IntFieldUpdateOperationsInput | number
    localOutreach?: IntFieldUpdateOperationsInput | number
    intlOutreach?: IntFieldUpdateOperationsInput | number
    ecommerceDeliveredOrders?: IntFieldUpdateOperationsInput | number
    noOfClients?: IntFieldUpdateOperationsInput | number
    earningsInDollars?: IntFieldUpdateOperationsInput | number
    opportunities?: IntFieldUpdateOperationsInput | number
    jobSecured?: IntFieldUpdateOperationsInput | number
    earningsInNaira?: IntFieldUpdateOperationsInput | number
    socialGroupPost?: IntFieldUpdateOperationsInput | number
  }

  export type TaskSubmissionUncheckedUpdateManyWithoutUserChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    upworkOutreach?: IntFieldUpdateOperationsInput | number
    socialMediaPosts?: IntFieldUpdateOperationsInput | number
    socialMediaEngagements?: IntFieldUpdateOperationsInput | number
    jobApplications?: IntFieldUpdateOperationsInput | number
    localOutreach?: IntFieldUpdateOperationsInput | number
    intlOutreach?: IntFieldUpdateOperationsInput | number
    ecommerceDeliveredOrders?: IntFieldUpdateOperationsInput | number
    noOfClients?: IntFieldUpdateOperationsInput | number
    earningsInDollars?: IntFieldUpdateOperationsInput | number
    opportunities?: IntFieldUpdateOperationsInput | number
    jobSecured?: IntFieldUpdateOperationsInput | number
    earningsInNaira?: IntFieldUpdateOperationsInput | number
    socialGroupPost?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChallengeCountOutputTypeDefaultArgs instead
     */
    export type ChallengeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChallengeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserChallengeCountOutputTypeDefaultArgs instead
     */
    export type UserChallengeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserChallengeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChallengeDefaultArgs instead
     */
    export type ChallengeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChallengeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserChallengeDefaultArgs instead
     */
    export type UserChallengeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserChallengeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskSubmissionDefaultArgs instead
     */
    export type TaskSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskSubmissionDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}