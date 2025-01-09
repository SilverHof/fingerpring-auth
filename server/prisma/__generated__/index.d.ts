
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
 * Model UserVerifyTokens
 * 
 */
export type UserVerifyTokens = $Result.DefaultSelection<Prisma.$UserVerifyTokensPayload>
/**
 * Model SettingsFingerprint
 * 
 */
export type SettingsFingerprint = $Result.DefaultSelection<Prisma.$SettingsFingerprintPayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  REGULAR: 'REGULAR',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const TokenType: {
  VERIFICATION: 'VERIFICATION',
  TWO_FACTOR: 'TWO_FACTOR',
  PASSWORD_RESET: 'PASSWORD_RESET'
};

export type TokenType = (typeof TokenType)[keyof typeof TokenType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type TokenType = $Enums.TokenType

export const TokenType: typeof $Enums.TokenType

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
   * `prisma.userVerifyTokens`: Exposes CRUD operations for the **UserVerifyTokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserVerifyTokens
    * const userVerifyTokens = await prisma.userVerifyTokens.findMany()
    * ```
    */
  get userVerifyTokens(): Prisma.UserVerifyTokensDelegate<ExtArgs>;

  /**
   * `prisma.settingsFingerprint`: Exposes CRUD operations for the **SettingsFingerprint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SettingsFingerprints
    * const settingsFingerprints = await prisma.settingsFingerprint.findMany()
    * ```
    */
  get settingsFingerprint(): Prisma.SettingsFingerprintDelegate<ExtArgs>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
    UserVerifyTokens: 'UserVerifyTokens',
    SettingsFingerprint: 'SettingsFingerprint',
    Token: 'Token'
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
      modelProps: "user" | "userVerifyTokens" | "settingsFingerprint" | "token"
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
      UserVerifyTokens: {
        payload: Prisma.$UserVerifyTokensPayload<ExtArgs>
        fields: Prisma.UserVerifyTokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserVerifyTokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVerifyTokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserVerifyTokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVerifyTokensPayload>
          }
          findFirst: {
            args: Prisma.UserVerifyTokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVerifyTokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserVerifyTokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVerifyTokensPayload>
          }
          findMany: {
            args: Prisma.UserVerifyTokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVerifyTokensPayload>[]
          }
          create: {
            args: Prisma.UserVerifyTokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVerifyTokensPayload>
          }
          createMany: {
            args: Prisma.UserVerifyTokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserVerifyTokensCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVerifyTokensPayload>[]
          }
          delete: {
            args: Prisma.UserVerifyTokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVerifyTokensPayload>
          }
          update: {
            args: Prisma.UserVerifyTokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVerifyTokensPayload>
          }
          deleteMany: {
            args: Prisma.UserVerifyTokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserVerifyTokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserVerifyTokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVerifyTokensPayload>
          }
          aggregate: {
            args: Prisma.UserVerifyTokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserVerifyTokens>
          }
          groupBy: {
            args: Prisma.UserVerifyTokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserVerifyTokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserVerifyTokensCountArgs<ExtArgs>
            result: $Utils.Optional<UserVerifyTokensCountAggregateOutputType> | number
          }
        }
      }
      SettingsFingerprint: {
        payload: Prisma.$SettingsFingerprintPayload<ExtArgs>
        fields: Prisma.SettingsFingerprintFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingsFingerprintFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsFingerprintPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingsFingerprintFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsFingerprintPayload>
          }
          findFirst: {
            args: Prisma.SettingsFingerprintFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsFingerprintPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingsFingerprintFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsFingerprintPayload>
          }
          findMany: {
            args: Prisma.SettingsFingerprintFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsFingerprintPayload>[]
          }
          create: {
            args: Prisma.SettingsFingerprintCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsFingerprintPayload>
          }
          createMany: {
            args: Prisma.SettingsFingerprintCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingsFingerprintCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsFingerprintPayload>[]
          }
          delete: {
            args: Prisma.SettingsFingerprintDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsFingerprintPayload>
          }
          update: {
            args: Prisma.SettingsFingerprintUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsFingerprintPayload>
          }
          deleteMany: {
            args: Prisma.SettingsFingerprintDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingsFingerprintUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SettingsFingerprintUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsFingerprintPayload>
          }
          aggregate: {
            args: Prisma.SettingsFingerprintAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettingsFingerprint>
          }
          groupBy: {
            args: Prisma.SettingsFingerprintGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsFingerprintGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingsFingerprintCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsFingerprintCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
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
    password: string | null
    role: $Enums.UserRole | null
    isVerified: boolean | null
    firstFingerprint: string | null
    lastFingerprint: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    isVerified: boolean | null
    firstFingerprint: string | null
    lastFingerprint: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    isVerified: number
    firstFingerprint: number
    fingerprints: number
    lastFingerprint: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    isVerified?: true
    firstFingerprint?: true
    lastFingerprint?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    isVerified?: true
    firstFingerprint?: true
    lastFingerprint?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    isVerified?: true
    firstFingerprint?: true
    fingerprints?: true
    lastFingerprint?: true
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
    password: string
    role: $Enums.UserRole
    isVerified: boolean
    firstFingerprint: string | null
    fingerprints: string[]
    lastFingerprint: string | null
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
    password?: boolean
    role?: boolean
    isVerified?: boolean
    firstFingerprint?: boolean
    fingerprints?: boolean
    lastFingerprint?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isVerified?: boolean
    firstFingerprint?: boolean
    fingerprints?: boolean
    lastFingerprint?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isVerified?: boolean
    firstFingerprint?: boolean
    fingerprints?: boolean
    lastFingerprint?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: $Enums.UserRole
      isVerified: boolean
      firstFingerprint: string | null
      fingerprints: string[]
      lastFingerprint: string | null
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
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly firstFingerprint: FieldRef<"User", 'String'>
    readonly fingerprints: FieldRef<"User", 'String[]'>
    readonly lastFingerprint: FieldRef<"User", 'String'>
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
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }


  /**
   * Model UserVerifyTokens
   */

  export type AggregateUserVerifyTokens = {
    _count: UserVerifyTokensCountAggregateOutputType | null
    _min: UserVerifyTokensMinAggregateOutputType | null
    _max: UserVerifyTokensMaxAggregateOutputType | null
  }

  export type UserVerifyTokensMinAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserVerifyTokensMaxAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserVerifyTokensCountAggregateOutputType = {
    id: number
    email: number
    token: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserVerifyTokensMinAggregateInputType = {
    id?: true
    email?: true
    token?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserVerifyTokensMaxAggregateInputType = {
    id?: true
    email?: true
    token?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserVerifyTokensCountAggregateInputType = {
    id?: true
    email?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserVerifyTokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserVerifyTokens to aggregate.
     */
    where?: UserVerifyTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVerifyTokens to fetch.
     */
    orderBy?: UserVerifyTokensOrderByWithRelationInput | UserVerifyTokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserVerifyTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVerifyTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVerifyTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserVerifyTokens
    **/
    _count?: true | UserVerifyTokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserVerifyTokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserVerifyTokensMaxAggregateInputType
  }

  export type GetUserVerifyTokensAggregateType<T extends UserVerifyTokensAggregateArgs> = {
        [P in keyof T & keyof AggregateUserVerifyTokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserVerifyTokens[P]>
      : GetScalarType<T[P], AggregateUserVerifyTokens[P]>
  }




  export type UserVerifyTokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserVerifyTokensWhereInput
    orderBy?: UserVerifyTokensOrderByWithAggregationInput | UserVerifyTokensOrderByWithAggregationInput[]
    by: UserVerifyTokensScalarFieldEnum[] | UserVerifyTokensScalarFieldEnum
    having?: UserVerifyTokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserVerifyTokensCountAggregateInputType | true
    _min?: UserVerifyTokensMinAggregateInputType
    _max?: UserVerifyTokensMaxAggregateInputType
  }

  export type UserVerifyTokensGroupByOutputType = {
    id: string
    email: string
    token: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserVerifyTokensCountAggregateOutputType | null
    _min: UserVerifyTokensMinAggregateOutputType | null
    _max: UserVerifyTokensMaxAggregateOutputType | null
  }

  type GetUserVerifyTokensGroupByPayload<T extends UserVerifyTokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserVerifyTokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserVerifyTokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserVerifyTokensGroupByOutputType[P]>
            : GetScalarType<T[P], UserVerifyTokensGroupByOutputType[P]>
        }
      >
    >


  export type UserVerifyTokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userVerifyTokens"]>

  export type UserVerifyTokensSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userVerifyTokens"]>

  export type UserVerifyTokensSelectScalar = {
    id?: boolean
    email?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $UserVerifyTokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserVerifyTokens"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      token: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userVerifyTokens"]>
    composites: {}
  }

  type UserVerifyTokensGetPayload<S extends boolean | null | undefined | UserVerifyTokensDefaultArgs> = $Result.GetResult<Prisma.$UserVerifyTokensPayload, S>

  type UserVerifyTokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserVerifyTokensFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserVerifyTokensCountAggregateInputType | true
    }

  export interface UserVerifyTokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserVerifyTokens'], meta: { name: 'UserVerifyTokens' } }
    /**
     * Find zero or one UserVerifyTokens that matches the filter.
     * @param {UserVerifyTokensFindUniqueArgs} args - Arguments to find a UserVerifyTokens
     * @example
     * // Get one UserVerifyTokens
     * const userVerifyTokens = await prisma.userVerifyTokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserVerifyTokensFindUniqueArgs>(args: SelectSubset<T, UserVerifyTokensFindUniqueArgs<ExtArgs>>): Prisma__UserVerifyTokensClient<$Result.GetResult<Prisma.$UserVerifyTokensPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserVerifyTokens that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserVerifyTokensFindUniqueOrThrowArgs} args - Arguments to find a UserVerifyTokens
     * @example
     * // Get one UserVerifyTokens
     * const userVerifyTokens = await prisma.userVerifyTokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserVerifyTokensFindUniqueOrThrowArgs>(args: SelectSubset<T, UserVerifyTokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserVerifyTokensClient<$Result.GetResult<Prisma.$UserVerifyTokensPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserVerifyTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVerifyTokensFindFirstArgs} args - Arguments to find a UserVerifyTokens
     * @example
     * // Get one UserVerifyTokens
     * const userVerifyTokens = await prisma.userVerifyTokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserVerifyTokensFindFirstArgs>(args?: SelectSubset<T, UserVerifyTokensFindFirstArgs<ExtArgs>>): Prisma__UserVerifyTokensClient<$Result.GetResult<Prisma.$UserVerifyTokensPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserVerifyTokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVerifyTokensFindFirstOrThrowArgs} args - Arguments to find a UserVerifyTokens
     * @example
     * // Get one UserVerifyTokens
     * const userVerifyTokens = await prisma.userVerifyTokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserVerifyTokensFindFirstOrThrowArgs>(args?: SelectSubset<T, UserVerifyTokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserVerifyTokensClient<$Result.GetResult<Prisma.$UserVerifyTokensPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserVerifyTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVerifyTokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserVerifyTokens
     * const userVerifyTokens = await prisma.userVerifyTokens.findMany()
     * 
     * // Get first 10 UserVerifyTokens
     * const userVerifyTokens = await prisma.userVerifyTokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userVerifyTokensWithIdOnly = await prisma.userVerifyTokens.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserVerifyTokensFindManyArgs>(args?: SelectSubset<T, UserVerifyTokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVerifyTokensPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserVerifyTokens.
     * @param {UserVerifyTokensCreateArgs} args - Arguments to create a UserVerifyTokens.
     * @example
     * // Create one UserVerifyTokens
     * const UserVerifyTokens = await prisma.userVerifyTokens.create({
     *   data: {
     *     // ... data to create a UserVerifyTokens
     *   }
     * })
     * 
     */
    create<T extends UserVerifyTokensCreateArgs>(args: SelectSubset<T, UserVerifyTokensCreateArgs<ExtArgs>>): Prisma__UserVerifyTokensClient<$Result.GetResult<Prisma.$UserVerifyTokensPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserVerifyTokens.
     * @param {UserVerifyTokensCreateManyArgs} args - Arguments to create many UserVerifyTokens.
     * @example
     * // Create many UserVerifyTokens
     * const userVerifyTokens = await prisma.userVerifyTokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserVerifyTokensCreateManyArgs>(args?: SelectSubset<T, UserVerifyTokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserVerifyTokens and returns the data saved in the database.
     * @param {UserVerifyTokensCreateManyAndReturnArgs} args - Arguments to create many UserVerifyTokens.
     * @example
     * // Create many UserVerifyTokens
     * const userVerifyTokens = await prisma.userVerifyTokens.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserVerifyTokens and only return the `id`
     * const userVerifyTokensWithIdOnly = await prisma.userVerifyTokens.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserVerifyTokensCreateManyAndReturnArgs>(args?: SelectSubset<T, UserVerifyTokensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVerifyTokensPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserVerifyTokens.
     * @param {UserVerifyTokensDeleteArgs} args - Arguments to delete one UserVerifyTokens.
     * @example
     * // Delete one UserVerifyTokens
     * const UserVerifyTokens = await prisma.userVerifyTokens.delete({
     *   where: {
     *     // ... filter to delete one UserVerifyTokens
     *   }
     * })
     * 
     */
    delete<T extends UserVerifyTokensDeleteArgs>(args: SelectSubset<T, UserVerifyTokensDeleteArgs<ExtArgs>>): Prisma__UserVerifyTokensClient<$Result.GetResult<Prisma.$UserVerifyTokensPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserVerifyTokens.
     * @param {UserVerifyTokensUpdateArgs} args - Arguments to update one UserVerifyTokens.
     * @example
     * // Update one UserVerifyTokens
     * const userVerifyTokens = await prisma.userVerifyTokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserVerifyTokensUpdateArgs>(args: SelectSubset<T, UserVerifyTokensUpdateArgs<ExtArgs>>): Prisma__UserVerifyTokensClient<$Result.GetResult<Prisma.$UserVerifyTokensPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserVerifyTokens.
     * @param {UserVerifyTokensDeleteManyArgs} args - Arguments to filter UserVerifyTokens to delete.
     * @example
     * // Delete a few UserVerifyTokens
     * const { count } = await prisma.userVerifyTokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserVerifyTokensDeleteManyArgs>(args?: SelectSubset<T, UserVerifyTokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserVerifyTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVerifyTokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserVerifyTokens
     * const userVerifyTokens = await prisma.userVerifyTokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserVerifyTokensUpdateManyArgs>(args: SelectSubset<T, UserVerifyTokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserVerifyTokens.
     * @param {UserVerifyTokensUpsertArgs} args - Arguments to update or create a UserVerifyTokens.
     * @example
     * // Update or create a UserVerifyTokens
     * const userVerifyTokens = await prisma.userVerifyTokens.upsert({
     *   create: {
     *     // ... data to create a UserVerifyTokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserVerifyTokens we want to update
     *   }
     * })
     */
    upsert<T extends UserVerifyTokensUpsertArgs>(args: SelectSubset<T, UserVerifyTokensUpsertArgs<ExtArgs>>): Prisma__UserVerifyTokensClient<$Result.GetResult<Prisma.$UserVerifyTokensPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserVerifyTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVerifyTokensCountArgs} args - Arguments to filter UserVerifyTokens to count.
     * @example
     * // Count the number of UserVerifyTokens
     * const count = await prisma.userVerifyTokens.count({
     *   where: {
     *     // ... the filter for the UserVerifyTokens we want to count
     *   }
     * })
    **/
    count<T extends UserVerifyTokensCountArgs>(
      args?: Subset<T, UserVerifyTokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserVerifyTokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserVerifyTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVerifyTokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserVerifyTokensAggregateArgs>(args: Subset<T, UserVerifyTokensAggregateArgs>): Prisma.PrismaPromise<GetUserVerifyTokensAggregateType<T>>

    /**
     * Group by UserVerifyTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVerifyTokensGroupByArgs} args - Group by arguments.
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
      T extends UserVerifyTokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserVerifyTokensGroupByArgs['orderBy'] }
        : { orderBy?: UserVerifyTokensGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserVerifyTokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserVerifyTokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserVerifyTokens model
   */
  readonly fields: UserVerifyTokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserVerifyTokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserVerifyTokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the UserVerifyTokens model
   */ 
  interface UserVerifyTokensFieldRefs {
    readonly id: FieldRef<"UserVerifyTokens", 'String'>
    readonly email: FieldRef<"UserVerifyTokens", 'String'>
    readonly token: FieldRef<"UserVerifyTokens", 'String'>
    readonly createdAt: FieldRef<"UserVerifyTokens", 'DateTime'>
    readonly updatedAt: FieldRef<"UserVerifyTokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserVerifyTokens findUnique
   */
  export type UserVerifyTokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVerifyTokens
     */
    select?: UserVerifyTokensSelect<ExtArgs> | null
    /**
     * Filter, which UserVerifyTokens to fetch.
     */
    where: UserVerifyTokensWhereUniqueInput
  }

  /**
   * UserVerifyTokens findUniqueOrThrow
   */
  export type UserVerifyTokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVerifyTokens
     */
    select?: UserVerifyTokensSelect<ExtArgs> | null
    /**
     * Filter, which UserVerifyTokens to fetch.
     */
    where: UserVerifyTokensWhereUniqueInput
  }

  /**
   * UserVerifyTokens findFirst
   */
  export type UserVerifyTokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVerifyTokens
     */
    select?: UserVerifyTokensSelect<ExtArgs> | null
    /**
     * Filter, which UserVerifyTokens to fetch.
     */
    where?: UserVerifyTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVerifyTokens to fetch.
     */
    orderBy?: UserVerifyTokensOrderByWithRelationInput | UserVerifyTokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserVerifyTokens.
     */
    cursor?: UserVerifyTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVerifyTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVerifyTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserVerifyTokens.
     */
    distinct?: UserVerifyTokensScalarFieldEnum | UserVerifyTokensScalarFieldEnum[]
  }

  /**
   * UserVerifyTokens findFirstOrThrow
   */
  export type UserVerifyTokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVerifyTokens
     */
    select?: UserVerifyTokensSelect<ExtArgs> | null
    /**
     * Filter, which UserVerifyTokens to fetch.
     */
    where?: UserVerifyTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVerifyTokens to fetch.
     */
    orderBy?: UserVerifyTokensOrderByWithRelationInput | UserVerifyTokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserVerifyTokens.
     */
    cursor?: UserVerifyTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVerifyTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVerifyTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserVerifyTokens.
     */
    distinct?: UserVerifyTokensScalarFieldEnum | UserVerifyTokensScalarFieldEnum[]
  }

  /**
   * UserVerifyTokens findMany
   */
  export type UserVerifyTokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVerifyTokens
     */
    select?: UserVerifyTokensSelect<ExtArgs> | null
    /**
     * Filter, which UserVerifyTokens to fetch.
     */
    where?: UserVerifyTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVerifyTokens to fetch.
     */
    orderBy?: UserVerifyTokensOrderByWithRelationInput | UserVerifyTokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserVerifyTokens.
     */
    cursor?: UserVerifyTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVerifyTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVerifyTokens.
     */
    skip?: number
    distinct?: UserVerifyTokensScalarFieldEnum | UserVerifyTokensScalarFieldEnum[]
  }

  /**
   * UserVerifyTokens create
   */
  export type UserVerifyTokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVerifyTokens
     */
    select?: UserVerifyTokensSelect<ExtArgs> | null
    /**
     * The data needed to create a UserVerifyTokens.
     */
    data: XOR<UserVerifyTokensCreateInput, UserVerifyTokensUncheckedCreateInput>
  }

  /**
   * UserVerifyTokens createMany
   */
  export type UserVerifyTokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserVerifyTokens.
     */
    data: UserVerifyTokensCreateManyInput | UserVerifyTokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserVerifyTokens createManyAndReturn
   */
  export type UserVerifyTokensCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVerifyTokens
     */
    select?: UserVerifyTokensSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserVerifyTokens.
     */
    data: UserVerifyTokensCreateManyInput | UserVerifyTokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserVerifyTokens update
   */
  export type UserVerifyTokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVerifyTokens
     */
    select?: UserVerifyTokensSelect<ExtArgs> | null
    /**
     * The data needed to update a UserVerifyTokens.
     */
    data: XOR<UserVerifyTokensUpdateInput, UserVerifyTokensUncheckedUpdateInput>
    /**
     * Choose, which UserVerifyTokens to update.
     */
    where: UserVerifyTokensWhereUniqueInput
  }

  /**
   * UserVerifyTokens updateMany
   */
  export type UserVerifyTokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserVerifyTokens.
     */
    data: XOR<UserVerifyTokensUpdateManyMutationInput, UserVerifyTokensUncheckedUpdateManyInput>
    /**
     * Filter which UserVerifyTokens to update
     */
    where?: UserVerifyTokensWhereInput
  }

  /**
   * UserVerifyTokens upsert
   */
  export type UserVerifyTokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVerifyTokens
     */
    select?: UserVerifyTokensSelect<ExtArgs> | null
    /**
     * The filter to search for the UserVerifyTokens to update in case it exists.
     */
    where: UserVerifyTokensWhereUniqueInput
    /**
     * In case the UserVerifyTokens found by the `where` argument doesn't exist, create a new UserVerifyTokens with this data.
     */
    create: XOR<UserVerifyTokensCreateInput, UserVerifyTokensUncheckedCreateInput>
    /**
     * In case the UserVerifyTokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserVerifyTokensUpdateInput, UserVerifyTokensUncheckedUpdateInput>
  }

  /**
   * UserVerifyTokens delete
   */
  export type UserVerifyTokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVerifyTokens
     */
    select?: UserVerifyTokensSelect<ExtArgs> | null
    /**
     * Filter which UserVerifyTokens to delete.
     */
    where: UserVerifyTokensWhereUniqueInput
  }

  /**
   * UserVerifyTokens deleteMany
   */
  export type UserVerifyTokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserVerifyTokens to delete
     */
    where?: UserVerifyTokensWhereInput
  }

  /**
   * UserVerifyTokens without action
   */
  export type UserVerifyTokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVerifyTokens
     */
    select?: UserVerifyTokensSelect<ExtArgs> | null
  }


  /**
   * Model SettingsFingerprint
   */

  export type AggregateSettingsFingerprint = {
    _count: SettingsFingerprintCountAggregateOutputType | null
    _min: SettingsFingerprintMinAggregateOutputType | null
    _max: SettingsFingerprintMaxAggregateOutputType | null
  }

  export type SettingsFingerprintMinAggregateOutputType = {
    id: string | null
    browserName: boolean | null
    browserMajorVersion: boolean | null
    browserFullVersion: boolean | null
    os: boolean | null
    osVersion: boolean | null
    device: boolean | null
    userAgent: boolean | null
    screenWidth: boolean | null
    screenHeight: boolean | null
    pixelRatio: boolean | null
    colorDepth: boolean | null
    orientation: boolean | null
    availWidth: boolean | null
    availHeight: boolean | null
    innerWidth: boolean | null
    innerHeight: boolean | null
    deviceXDPI: boolean | null
    deviceYDPI: boolean | null
    isLandscape: boolean | null
    isTouchDevice: boolean | null
    maxTouchPoints: boolean | null
    deviceMemory: boolean | null
    hardwareConcurrency: boolean | null
    isMobile: boolean | null
    isDesktop: boolean | null
    isTablet: boolean | null
    isVirtualMachine: boolean | null
    isOnline: boolean | null
    platform: boolean | null
    language: boolean | null
    screenReader: boolean | null
    cpu: boolean | null
    isHeadless: boolean | null
    batteryStatus: boolean | null
    vendor: boolean | null
    timezone: boolean | null
    utcOffset: boolean | null
    utcOffsetFormatted: boolean | null
    currentTime: boolean | null
    localeTime: boolean | null
    isDST: boolean | null
    localeDateFormat: boolean | null
    ip: boolean | null
    type: boolean | null
    continent_code: boolean | null
    continent_name: boolean | null
    country_code: boolean | null
    country_name: boolean | null
    region_code: boolean | null
    region_name: boolean | null
    city: boolean | null
    zip: boolean | null
    latitude: boolean | null
    longitude: boolean | null
    location: boolean | null
    connection_type: boolean | null
    ip_routing_type: boolean | null
    msa: boolean | null
    dma: boolean | null
    radius: boolean | null
    plugins: boolean | null
    localStorageEnabled: boolean | null
    sessionStorageEnabled: boolean | null
    indexedDBEnabled: boolean | null
    cookiesEnabled: boolean | null
    mediaDevices: boolean | null
    serviceWorkerEnabled: boolean | null
    languages: boolean | null
    doNotTrack: boolean | null
    pixelDepth: boolean | null
    canvasActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SettingsFingerprintMaxAggregateOutputType = {
    id: string | null
    browserName: boolean | null
    browserMajorVersion: boolean | null
    browserFullVersion: boolean | null
    os: boolean | null
    osVersion: boolean | null
    device: boolean | null
    userAgent: boolean | null
    screenWidth: boolean | null
    screenHeight: boolean | null
    pixelRatio: boolean | null
    colorDepth: boolean | null
    orientation: boolean | null
    availWidth: boolean | null
    availHeight: boolean | null
    innerWidth: boolean | null
    innerHeight: boolean | null
    deviceXDPI: boolean | null
    deviceYDPI: boolean | null
    isLandscape: boolean | null
    isTouchDevice: boolean | null
    maxTouchPoints: boolean | null
    deviceMemory: boolean | null
    hardwareConcurrency: boolean | null
    isMobile: boolean | null
    isDesktop: boolean | null
    isTablet: boolean | null
    isVirtualMachine: boolean | null
    isOnline: boolean | null
    platform: boolean | null
    language: boolean | null
    screenReader: boolean | null
    cpu: boolean | null
    isHeadless: boolean | null
    batteryStatus: boolean | null
    vendor: boolean | null
    timezone: boolean | null
    utcOffset: boolean | null
    utcOffsetFormatted: boolean | null
    currentTime: boolean | null
    localeTime: boolean | null
    isDST: boolean | null
    localeDateFormat: boolean | null
    ip: boolean | null
    type: boolean | null
    continent_code: boolean | null
    continent_name: boolean | null
    country_code: boolean | null
    country_name: boolean | null
    region_code: boolean | null
    region_name: boolean | null
    city: boolean | null
    zip: boolean | null
    latitude: boolean | null
    longitude: boolean | null
    location: boolean | null
    connection_type: boolean | null
    ip_routing_type: boolean | null
    msa: boolean | null
    dma: boolean | null
    radius: boolean | null
    plugins: boolean | null
    localStorageEnabled: boolean | null
    sessionStorageEnabled: boolean | null
    indexedDBEnabled: boolean | null
    cookiesEnabled: boolean | null
    mediaDevices: boolean | null
    serviceWorkerEnabled: boolean | null
    languages: boolean | null
    doNotTrack: boolean | null
    pixelDepth: boolean | null
    canvasActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SettingsFingerprintCountAggregateOutputType = {
    id: number
    browserName: number
    browserMajorVersion: number
    browserFullVersion: number
    os: number
    osVersion: number
    device: number
    userAgent: number
    screenWidth: number
    screenHeight: number
    pixelRatio: number
    colorDepth: number
    orientation: number
    availWidth: number
    availHeight: number
    innerWidth: number
    innerHeight: number
    deviceXDPI: number
    deviceYDPI: number
    isLandscape: number
    isTouchDevice: number
    maxTouchPoints: number
    deviceMemory: number
    hardwareConcurrency: number
    isMobile: number
    isDesktop: number
    isTablet: number
    isVirtualMachine: number
    isOnline: number
    platform: number
    language: number
    screenReader: number
    cpu: number
    isHeadless: number
    batteryStatus: number
    vendor: number
    timezone: number
    utcOffset: number
    utcOffsetFormatted: number
    currentTime: number
    localeTime: number
    isDST: number
    localeDateFormat: number
    ip: number
    type: number
    continent_code: number
    continent_name: number
    country_code: number
    country_name: number
    region_code: number
    region_name: number
    city: number
    zip: number
    latitude: number
    longitude: number
    location: number
    connection_type: number
    ip_routing_type: number
    msa: number
    dma: number
    radius: number
    plugins: number
    localStorageEnabled: number
    sessionStorageEnabled: number
    indexedDBEnabled: number
    cookiesEnabled: number
    mediaDevices: number
    serviceWorkerEnabled: number
    languages: number
    doNotTrack: number
    pixelDepth: number
    canvasActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SettingsFingerprintMinAggregateInputType = {
    id?: true
    browserName?: true
    browserMajorVersion?: true
    browserFullVersion?: true
    os?: true
    osVersion?: true
    device?: true
    userAgent?: true
    screenWidth?: true
    screenHeight?: true
    pixelRatio?: true
    colorDepth?: true
    orientation?: true
    availWidth?: true
    availHeight?: true
    innerWidth?: true
    innerHeight?: true
    deviceXDPI?: true
    deviceYDPI?: true
    isLandscape?: true
    isTouchDevice?: true
    maxTouchPoints?: true
    deviceMemory?: true
    hardwareConcurrency?: true
    isMobile?: true
    isDesktop?: true
    isTablet?: true
    isVirtualMachine?: true
    isOnline?: true
    platform?: true
    language?: true
    screenReader?: true
    cpu?: true
    isHeadless?: true
    batteryStatus?: true
    vendor?: true
    timezone?: true
    utcOffset?: true
    utcOffsetFormatted?: true
    currentTime?: true
    localeTime?: true
    isDST?: true
    localeDateFormat?: true
    ip?: true
    type?: true
    continent_code?: true
    continent_name?: true
    country_code?: true
    country_name?: true
    region_code?: true
    region_name?: true
    city?: true
    zip?: true
    latitude?: true
    longitude?: true
    location?: true
    connection_type?: true
    ip_routing_type?: true
    msa?: true
    dma?: true
    radius?: true
    plugins?: true
    localStorageEnabled?: true
    sessionStorageEnabled?: true
    indexedDBEnabled?: true
    cookiesEnabled?: true
    mediaDevices?: true
    serviceWorkerEnabled?: true
    languages?: true
    doNotTrack?: true
    pixelDepth?: true
    canvasActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SettingsFingerprintMaxAggregateInputType = {
    id?: true
    browserName?: true
    browserMajorVersion?: true
    browserFullVersion?: true
    os?: true
    osVersion?: true
    device?: true
    userAgent?: true
    screenWidth?: true
    screenHeight?: true
    pixelRatio?: true
    colorDepth?: true
    orientation?: true
    availWidth?: true
    availHeight?: true
    innerWidth?: true
    innerHeight?: true
    deviceXDPI?: true
    deviceYDPI?: true
    isLandscape?: true
    isTouchDevice?: true
    maxTouchPoints?: true
    deviceMemory?: true
    hardwareConcurrency?: true
    isMobile?: true
    isDesktop?: true
    isTablet?: true
    isVirtualMachine?: true
    isOnline?: true
    platform?: true
    language?: true
    screenReader?: true
    cpu?: true
    isHeadless?: true
    batteryStatus?: true
    vendor?: true
    timezone?: true
    utcOffset?: true
    utcOffsetFormatted?: true
    currentTime?: true
    localeTime?: true
    isDST?: true
    localeDateFormat?: true
    ip?: true
    type?: true
    continent_code?: true
    continent_name?: true
    country_code?: true
    country_name?: true
    region_code?: true
    region_name?: true
    city?: true
    zip?: true
    latitude?: true
    longitude?: true
    location?: true
    connection_type?: true
    ip_routing_type?: true
    msa?: true
    dma?: true
    radius?: true
    plugins?: true
    localStorageEnabled?: true
    sessionStorageEnabled?: true
    indexedDBEnabled?: true
    cookiesEnabled?: true
    mediaDevices?: true
    serviceWorkerEnabled?: true
    languages?: true
    doNotTrack?: true
    pixelDepth?: true
    canvasActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SettingsFingerprintCountAggregateInputType = {
    id?: true
    browserName?: true
    browserMajorVersion?: true
    browserFullVersion?: true
    os?: true
    osVersion?: true
    device?: true
    userAgent?: true
    screenWidth?: true
    screenHeight?: true
    pixelRatio?: true
    colorDepth?: true
    orientation?: true
    availWidth?: true
    availHeight?: true
    innerWidth?: true
    innerHeight?: true
    deviceXDPI?: true
    deviceYDPI?: true
    isLandscape?: true
    isTouchDevice?: true
    maxTouchPoints?: true
    deviceMemory?: true
    hardwareConcurrency?: true
    isMobile?: true
    isDesktop?: true
    isTablet?: true
    isVirtualMachine?: true
    isOnline?: true
    platform?: true
    language?: true
    screenReader?: true
    cpu?: true
    isHeadless?: true
    batteryStatus?: true
    vendor?: true
    timezone?: true
    utcOffset?: true
    utcOffsetFormatted?: true
    currentTime?: true
    localeTime?: true
    isDST?: true
    localeDateFormat?: true
    ip?: true
    type?: true
    continent_code?: true
    continent_name?: true
    country_code?: true
    country_name?: true
    region_code?: true
    region_name?: true
    city?: true
    zip?: true
    latitude?: true
    longitude?: true
    location?: true
    connection_type?: true
    ip_routing_type?: true
    msa?: true
    dma?: true
    radius?: true
    plugins?: true
    localStorageEnabled?: true
    sessionStorageEnabled?: true
    indexedDBEnabled?: true
    cookiesEnabled?: true
    mediaDevices?: true
    serviceWorkerEnabled?: true
    languages?: true
    doNotTrack?: true
    pixelDepth?: true
    canvasActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SettingsFingerprintAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SettingsFingerprint to aggregate.
     */
    where?: SettingsFingerprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SettingsFingerprints to fetch.
     */
    orderBy?: SettingsFingerprintOrderByWithRelationInput | SettingsFingerprintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingsFingerprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SettingsFingerprints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SettingsFingerprints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SettingsFingerprints
    **/
    _count?: true | SettingsFingerprintCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsFingerprintMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsFingerprintMaxAggregateInputType
  }

  export type GetSettingsFingerprintAggregateType<T extends SettingsFingerprintAggregateArgs> = {
        [P in keyof T & keyof AggregateSettingsFingerprint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettingsFingerprint[P]>
      : GetScalarType<T[P], AggregateSettingsFingerprint[P]>
  }




  export type SettingsFingerprintGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingsFingerprintWhereInput
    orderBy?: SettingsFingerprintOrderByWithAggregationInput | SettingsFingerprintOrderByWithAggregationInput[]
    by: SettingsFingerprintScalarFieldEnum[] | SettingsFingerprintScalarFieldEnum
    having?: SettingsFingerprintScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsFingerprintCountAggregateInputType | true
    _min?: SettingsFingerprintMinAggregateInputType
    _max?: SettingsFingerprintMaxAggregateInputType
  }

  export type SettingsFingerprintGroupByOutputType = {
    id: string
    browserName: boolean
    browserMajorVersion: boolean
    browserFullVersion: boolean
    os: boolean
    osVersion: boolean
    device: boolean
    userAgent: boolean
    screenWidth: boolean
    screenHeight: boolean
    pixelRatio: boolean
    colorDepth: boolean
    orientation: boolean
    availWidth: boolean
    availHeight: boolean
    innerWidth: boolean
    innerHeight: boolean
    deviceXDPI: boolean
    deviceYDPI: boolean
    isLandscape: boolean
    isTouchDevice: boolean
    maxTouchPoints: boolean
    deviceMemory: boolean
    hardwareConcurrency: boolean
    isMobile: boolean
    isDesktop: boolean
    isTablet: boolean
    isVirtualMachine: boolean
    isOnline: boolean
    platform: boolean
    language: boolean
    screenReader: boolean
    cpu: boolean
    isHeadless: boolean
    batteryStatus: boolean
    vendor: boolean
    timezone: boolean
    utcOffset: boolean
    utcOffsetFormatted: boolean
    currentTime: boolean
    localeTime: boolean
    isDST: boolean
    localeDateFormat: boolean
    ip: boolean
    type: boolean
    continent_code: boolean
    continent_name: boolean
    country_code: boolean
    country_name: boolean
    region_code: boolean
    region_name: boolean
    city: boolean
    zip: boolean
    latitude: boolean
    longitude: boolean
    location: boolean
    connection_type: boolean
    ip_routing_type: boolean
    msa: boolean
    dma: boolean
    radius: boolean
    plugins: boolean
    localStorageEnabled: boolean
    sessionStorageEnabled: boolean
    indexedDBEnabled: boolean
    cookiesEnabled: boolean
    mediaDevices: boolean
    serviceWorkerEnabled: boolean
    languages: boolean
    doNotTrack: boolean
    pixelDepth: boolean
    canvasActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: SettingsFingerprintCountAggregateOutputType | null
    _min: SettingsFingerprintMinAggregateOutputType | null
    _max: SettingsFingerprintMaxAggregateOutputType | null
  }

  type GetSettingsFingerprintGroupByPayload<T extends SettingsFingerprintGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsFingerprintGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsFingerprintGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsFingerprintGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsFingerprintGroupByOutputType[P]>
        }
      >
    >


  export type SettingsFingerprintSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    browserName?: boolean
    browserMajorVersion?: boolean
    browserFullVersion?: boolean
    os?: boolean
    osVersion?: boolean
    device?: boolean
    userAgent?: boolean
    screenWidth?: boolean
    screenHeight?: boolean
    pixelRatio?: boolean
    colorDepth?: boolean
    orientation?: boolean
    availWidth?: boolean
    availHeight?: boolean
    innerWidth?: boolean
    innerHeight?: boolean
    deviceXDPI?: boolean
    deviceYDPI?: boolean
    isLandscape?: boolean
    isTouchDevice?: boolean
    maxTouchPoints?: boolean
    deviceMemory?: boolean
    hardwareConcurrency?: boolean
    isMobile?: boolean
    isDesktop?: boolean
    isTablet?: boolean
    isVirtualMachine?: boolean
    isOnline?: boolean
    platform?: boolean
    language?: boolean
    screenReader?: boolean
    cpu?: boolean
    isHeadless?: boolean
    batteryStatus?: boolean
    vendor?: boolean
    timezone?: boolean
    utcOffset?: boolean
    utcOffsetFormatted?: boolean
    currentTime?: boolean
    localeTime?: boolean
    isDST?: boolean
    localeDateFormat?: boolean
    ip?: boolean
    type?: boolean
    continent_code?: boolean
    continent_name?: boolean
    country_code?: boolean
    country_name?: boolean
    region_code?: boolean
    region_name?: boolean
    city?: boolean
    zip?: boolean
    latitude?: boolean
    longitude?: boolean
    location?: boolean
    connection_type?: boolean
    ip_routing_type?: boolean
    msa?: boolean
    dma?: boolean
    radius?: boolean
    plugins?: boolean
    localStorageEnabled?: boolean
    sessionStorageEnabled?: boolean
    indexedDBEnabled?: boolean
    cookiesEnabled?: boolean
    mediaDevices?: boolean
    serviceWorkerEnabled?: boolean
    languages?: boolean
    doNotTrack?: boolean
    pixelDepth?: boolean
    canvasActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["settingsFingerprint"]>

  export type SettingsFingerprintSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    browserName?: boolean
    browserMajorVersion?: boolean
    browserFullVersion?: boolean
    os?: boolean
    osVersion?: boolean
    device?: boolean
    userAgent?: boolean
    screenWidth?: boolean
    screenHeight?: boolean
    pixelRatio?: boolean
    colorDepth?: boolean
    orientation?: boolean
    availWidth?: boolean
    availHeight?: boolean
    innerWidth?: boolean
    innerHeight?: boolean
    deviceXDPI?: boolean
    deviceYDPI?: boolean
    isLandscape?: boolean
    isTouchDevice?: boolean
    maxTouchPoints?: boolean
    deviceMemory?: boolean
    hardwareConcurrency?: boolean
    isMobile?: boolean
    isDesktop?: boolean
    isTablet?: boolean
    isVirtualMachine?: boolean
    isOnline?: boolean
    platform?: boolean
    language?: boolean
    screenReader?: boolean
    cpu?: boolean
    isHeadless?: boolean
    batteryStatus?: boolean
    vendor?: boolean
    timezone?: boolean
    utcOffset?: boolean
    utcOffsetFormatted?: boolean
    currentTime?: boolean
    localeTime?: boolean
    isDST?: boolean
    localeDateFormat?: boolean
    ip?: boolean
    type?: boolean
    continent_code?: boolean
    continent_name?: boolean
    country_code?: boolean
    country_name?: boolean
    region_code?: boolean
    region_name?: boolean
    city?: boolean
    zip?: boolean
    latitude?: boolean
    longitude?: boolean
    location?: boolean
    connection_type?: boolean
    ip_routing_type?: boolean
    msa?: boolean
    dma?: boolean
    radius?: boolean
    plugins?: boolean
    localStorageEnabled?: boolean
    sessionStorageEnabled?: boolean
    indexedDBEnabled?: boolean
    cookiesEnabled?: boolean
    mediaDevices?: boolean
    serviceWorkerEnabled?: boolean
    languages?: boolean
    doNotTrack?: boolean
    pixelDepth?: boolean
    canvasActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["settingsFingerprint"]>

  export type SettingsFingerprintSelectScalar = {
    id?: boolean
    browserName?: boolean
    browserMajorVersion?: boolean
    browserFullVersion?: boolean
    os?: boolean
    osVersion?: boolean
    device?: boolean
    userAgent?: boolean
    screenWidth?: boolean
    screenHeight?: boolean
    pixelRatio?: boolean
    colorDepth?: boolean
    orientation?: boolean
    availWidth?: boolean
    availHeight?: boolean
    innerWidth?: boolean
    innerHeight?: boolean
    deviceXDPI?: boolean
    deviceYDPI?: boolean
    isLandscape?: boolean
    isTouchDevice?: boolean
    maxTouchPoints?: boolean
    deviceMemory?: boolean
    hardwareConcurrency?: boolean
    isMobile?: boolean
    isDesktop?: boolean
    isTablet?: boolean
    isVirtualMachine?: boolean
    isOnline?: boolean
    platform?: boolean
    language?: boolean
    screenReader?: boolean
    cpu?: boolean
    isHeadless?: boolean
    batteryStatus?: boolean
    vendor?: boolean
    timezone?: boolean
    utcOffset?: boolean
    utcOffsetFormatted?: boolean
    currentTime?: boolean
    localeTime?: boolean
    isDST?: boolean
    localeDateFormat?: boolean
    ip?: boolean
    type?: boolean
    continent_code?: boolean
    continent_name?: boolean
    country_code?: boolean
    country_name?: boolean
    region_code?: boolean
    region_name?: boolean
    city?: boolean
    zip?: boolean
    latitude?: boolean
    longitude?: boolean
    location?: boolean
    connection_type?: boolean
    ip_routing_type?: boolean
    msa?: boolean
    dma?: boolean
    radius?: boolean
    plugins?: boolean
    localStorageEnabled?: boolean
    sessionStorageEnabled?: boolean
    indexedDBEnabled?: boolean
    cookiesEnabled?: boolean
    mediaDevices?: boolean
    serviceWorkerEnabled?: boolean
    languages?: boolean
    doNotTrack?: boolean
    pixelDepth?: boolean
    canvasActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $SettingsFingerprintPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SettingsFingerprint"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      browserName: boolean
      browserMajorVersion: boolean
      browserFullVersion: boolean
      os: boolean
      osVersion: boolean
      device: boolean
      userAgent: boolean
      screenWidth: boolean
      screenHeight: boolean
      pixelRatio: boolean
      colorDepth: boolean
      orientation: boolean
      availWidth: boolean
      availHeight: boolean
      innerWidth: boolean
      innerHeight: boolean
      deviceXDPI: boolean
      deviceYDPI: boolean
      isLandscape: boolean
      isTouchDevice: boolean
      maxTouchPoints: boolean
      deviceMemory: boolean
      hardwareConcurrency: boolean
      isMobile: boolean
      isDesktop: boolean
      isTablet: boolean
      isVirtualMachine: boolean
      isOnline: boolean
      platform: boolean
      language: boolean
      screenReader: boolean
      cpu: boolean
      isHeadless: boolean
      batteryStatus: boolean
      vendor: boolean
      timezone: boolean
      utcOffset: boolean
      utcOffsetFormatted: boolean
      currentTime: boolean
      localeTime: boolean
      isDST: boolean
      localeDateFormat: boolean
      ip: boolean
      type: boolean
      continent_code: boolean
      continent_name: boolean
      country_code: boolean
      country_name: boolean
      region_code: boolean
      region_name: boolean
      city: boolean
      zip: boolean
      latitude: boolean
      longitude: boolean
      location: boolean
      connection_type: boolean
      ip_routing_type: boolean
      msa: boolean
      dma: boolean
      radius: boolean
      plugins: boolean
      localStorageEnabled: boolean
      sessionStorageEnabled: boolean
      indexedDBEnabled: boolean
      cookiesEnabled: boolean
      mediaDevices: boolean
      serviceWorkerEnabled: boolean
      languages: boolean
      doNotTrack: boolean
      pixelDepth: boolean
      canvasActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["settingsFingerprint"]>
    composites: {}
  }

  type SettingsFingerprintGetPayload<S extends boolean | null | undefined | SettingsFingerprintDefaultArgs> = $Result.GetResult<Prisma.$SettingsFingerprintPayload, S>

  type SettingsFingerprintCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SettingsFingerprintFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SettingsFingerprintCountAggregateInputType | true
    }

  export interface SettingsFingerprintDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SettingsFingerprint'], meta: { name: 'SettingsFingerprint' } }
    /**
     * Find zero or one SettingsFingerprint that matches the filter.
     * @param {SettingsFingerprintFindUniqueArgs} args - Arguments to find a SettingsFingerprint
     * @example
     * // Get one SettingsFingerprint
     * const settingsFingerprint = await prisma.settingsFingerprint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingsFingerprintFindUniqueArgs>(args: SelectSubset<T, SettingsFingerprintFindUniqueArgs<ExtArgs>>): Prisma__SettingsFingerprintClient<$Result.GetResult<Prisma.$SettingsFingerprintPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SettingsFingerprint that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SettingsFingerprintFindUniqueOrThrowArgs} args - Arguments to find a SettingsFingerprint
     * @example
     * // Get one SettingsFingerprint
     * const settingsFingerprint = await prisma.settingsFingerprint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingsFingerprintFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingsFingerprintFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingsFingerprintClient<$Result.GetResult<Prisma.$SettingsFingerprintPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SettingsFingerprint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFingerprintFindFirstArgs} args - Arguments to find a SettingsFingerprint
     * @example
     * // Get one SettingsFingerprint
     * const settingsFingerprint = await prisma.settingsFingerprint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingsFingerprintFindFirstArgs>(args?: SelectSubset<T, SettingsFingerprintFindFirstArgs<ExtArgs>>): Prisma__SettingsFingerprintClient<$Result.GetResult<Prisma.$SettingsFingerprintPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SettingsFingerprint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFingerprintFindFirstOrThrowArgs} args - Arguments to find a SettingsFingerprint
     * @example
     * // Get one SettingsFingerprint
     * const settingsFingerprint = await prisma.settingsFingerprint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingsFingerprintFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingsFingerprintFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingsFingerprintClient<$Result.GetResult<Prisma.$SettingsFingerprintPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SettingsFingerprints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFingerprintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SettingsFingerprints
     * const settingsFingerprints = await prisma.settingsFingerprint.findMany()
     * 
     * // Get first 10 SettingsFingerprints
     * const settingsFingerprints = await prisma.settingsFingerprint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingsFingerprintWithIdOnly = await prisma.settingsFingerprint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingsFingerprintFindManyArgs>(args?: SelectSubset<T, SettingsFingerprintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsFingerprintPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SettingsFingerprint.
     * @param {SettingsFingerprintCreateArgs} args - Arguments to create a SettingsFingerprint.
     * @example
     * // Create one SettingsFingerprint
     * const SettingsFingerprint = await prisma.settingsFingerprint.create({
     *   data: {
     *     // ... data to create a SettingsFingerprint
     *   }
     * })
     * 
     */
    create<T extends SettingsFingerprintCreateArgs>(args: SelectSubset<T, SettingsFingerprintCreateArgs<ExtArgs>>): Prisma__SettingsFingerprintClient<$Result.GetResult<Prisma.$SettingsFingerprintPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SettingsFingerprints.
     * @param {SettingsFingerprintCreateManyArgs} args - Arguments to create many SettingsFingerprints.
     * @example
     * // Create many SettingsFingerprints
     * const settingsFingerprint = await prisma.settingsFingerprint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingsFingerprintCreateManyArgs>(args?: SelectSubset<T, SettingsFingerprintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SettingsFingerprints and returns the data saved in the database.
     * @param {SettingsFingerprintCreateManyAndReturnArgs} args - Arguments to create many SettingsFingerprints.
     * @example
     * // Create many SettingsFingerprints
     * const settingsFingerprint = await prisma.settingsFingerprint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SettingsFingerprints and only return the `id`
     * const settingsFingerprintWithIdOnly = await prisma.settingsFingerprint.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingsFingerprintCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingsFingerprintCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsFingerprintPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SettingsFingerprint.
     * @param {SettingsFingerprintDeleteArgs} args - Arguments to delete one SettingsFingerprint.
     * @example
     * // Delete one SettingsFingerprint
     * const SettingsFingerprint = await prisma.settingsFingerprint.delete({
     *   where: {
     *     // ... filter to delete one SettingsFingerprint
     *   }
     * })
     * 
     */
    delete<T extends SettingsFingerprintDeleteArgs>(args: SelectSubset<T, SettingsFingerprintDeleteArgs<ExtArgs>>): Prisma__SettingsFingerprintClient<$Result.GetResult<Prisma.$SettingsFingerprintPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SettingsFingerprint.
     * @param {SettingsFingerprintUpdateArgs} args - Arguments to update one SettingsFingerprint.
     * @example
     * // Update one SettingsFingerprint
     * const settingsFingerprint = await prisma.settingsFingerprint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingsFingerprintUpdateArgs>(args: SelectSubset<T, SettingsFingerprintUpdateArgs<ExtArgs>>): Prisma__SettingsFingerprintClient<$Result.GetResult<Prisma.$SettingsFingerprintPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SettingsFingerprints.
     * @param {SettingsFingerprintDeleteManyArgs} args - Arguments to filter SettingsFingerprints to delete.
     * @example
     * // Delete a few SettingsFingerprints
     * const { count } = await prisma.settingsFingerprint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingsFingerprintDeleteManyArgs>(args?: SelectSubset<T, SettingsFingerprintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SettingsFingerprints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFingerprintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SettingsFingerprints
     * const settingsFingerprint = await prisma.settingsFingerprint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingsFingerprintUpdateManyArgs>(args: SelectSubset<T, SettingsFingerprintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SettingsFingerprint.
     * @param {SettingsFingerprintUpsertArgs} args - Arguments to update or create a SettingsFingerprint.
     * @example
     * // Update or create a SettingsFingerprint
     * const settingsFingerprint = await prisma.settingsFingerprint.upsert({
     *   create: {
     *     // ... data to create a SettingsFingerprint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SettingsFingerprint we want to update
     *   }
     * })
     */
    upsert<T extends SettingsFingerprintUpsertArgs>(args: SelectSubset<T, SettingsFingerprintUpsertArgs<ExtArgs>>): Prisma__SettingsFingerprintClient<$Result.GetResult<Prisma.$SettingsFingerprintPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SettingsFingerprints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFingerprintCountArgs} args - Arguments to filter SettingsFingerprints to count.
     * @example
     * // Count the number of SettingsFingerprints
     * const count = await prisma.settingsFingerprint.count({
     *   where: {
     *     // ... the filter for the SettingsFingerprints we want to count
     *   }
     * })
    **/
    count<T extends SettingsFingerprintCountArgs>(
      args?: Subset<T, SettingsFingerprintCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsFingerprintCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SettingsFingerprint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFingerprintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingsFingerprintAggregateArgs>(args: Subset<T, SettingsFingerprintAggregateArgs>): Prisma.PrismaPromise<GetSettingsFingerprintAggregateType<T>>

    /**
     * Group by SettingsFingerprint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFingerprintGroupByArgs} args - Group by arguments.
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
      T extends SettingsFingerprintGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingsFingerprintGroupByArgs['orderBy'] }
        : { orderBy?: SettingsFingerprintGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SettingsFingerprintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsFingerprintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SettingsFingerprint model
   */
  readonly fields: SettingsFingerprintFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SettingsFingerprint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingsFingerprintClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SettingsFingerprint model
   */ 
  interface SettingsFingerprintFieldRefs {
    readonly id: FieldRef<"SettingsFingerprint", 'String'>
    readonly browserName: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly browserMajorVersion: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly browserFullVersion: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly os: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly osVersion: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly device: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly userAgent: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly screenWidth: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly screenHeight: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly pixelRatio: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly colorDepth: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly orientation: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly availWidth: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly availHeight: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly innerWidth: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly innerHeight: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly deviceXDPI: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly deviceYDPI: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly isLandscape: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly isTouchDevice: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly maxTouchPoints: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly deviceMemory: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly hardwareConcurrency: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly isMobile: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly isDesktop: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly isTablet: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly isVirtualMachine: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly isOnline: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly platform: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly language: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly screenReader: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly cpu: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly isHeadless: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly batteryStatus: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly vendor: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly timezone: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly utcOffset: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly utcOffsetFormatted: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly currentTime: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly localeTime: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly isDST: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly localeDateFormat: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly ip: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly type: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly continent_code: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly continent_name: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly country_code: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly country_name: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly region_code: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly region_name: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly city: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly zip: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly latitude: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly longitude: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly location: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly connection_type: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly ip_routing_type: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly msa: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly dma: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly radius: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly plugins: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly localStorageEnabled: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly sessionStorageEnabled: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly indexedDBEnabled: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly cookiesEnabled: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly mediaDevices: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly serviceWorkerEnabled: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly languages: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly doNotTrack: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly pixelDepth: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly canvasActive: FieldRef<"SettingsFingerprint", 'Boolean'>
    readonly createdAt: FieldRef<"SettingsFingerprint", 'DateTime'>
    readonly updatedAt: FieldRef<"SettingsFingerprint", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SettingsFingerprint findUnique
   */
  export type SettingsFingerprintFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettingsFingerprint
     */
    select?: SettingsFingerprintSelect<ExtArgs> | null
    /**
     * Filter, which SettingsFingerprint to fetch.
     */
    where: SettingsFingerprintWhereUniqueInput
  }

  /**
   * SettingsFingerprint findUniqueOrThrow
   */
  export type SettingsFingerprintFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettingsFingerprint
     */
    select?: SettingsFingerprintSelect<ExtArgs> | null
    /**
     * Filter, which SettingsFingerprint to fetch.
     */
    where: SettingsFingerprintWhereUniqueInput
  }

  /**
   * SettingsFingerprint findFirst
   */
  export type SettingsFingerprintFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettingsFingerprint
     */
    select?: SettingsFingerprintSelect<ExtArgs> | null
    /**
     * Filter, which SettingsFingerprint to fetch.
     */
    where?: SettingsFingerprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SettingsFingerprints to fetch.
     */
    orderBy?: SettingsFingerprintOrderByWithRelationInput | SettingsFingerprintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SettingsFingerprints.
     */
    cursor?: SettingsFingerprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SettingsFingerprints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SettingsFingerprints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SettingsFingerprints.
     */
    distinct?: SettingsFingerprintScalarFieldEnum | SettingsFingerprintScalarFieldEnum[]
  }

  /**
   * SettingsFingerprint findFirstOrThrow
   */
  export type SettingsFingerprintFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettingsFingerprint
     */
    select?: SettingsFingerprintSelect<ExtArgs> | null
    /**
     * Filter, which SettingsFingerprint to fetch.
     */
    where?: SettingsFingerprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SettingsFingerprints to fetch.
     */
    orderBy?: SettingsFingerprintOrderByWithRelationInput | SettingsFingerprintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SettingsFingerprints.
     */
    cursor?: SettingsFingerprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SettingsFingerprints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SettingsFingerprints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SettingsFingerprints.
     */
    distinct?: SettingsFingerprintScalarFieldEnum | SettingsFingerprintScalarFieldEnum[]
  }

  /**
   * SettingsFingerprint findMany
   */
  export type SettingsFingerprintFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettingsFingerprint
     */
    select?: SettingsFingerprintSelect<ExtArgs> | null
    /**
     * Filter, which SettingsFingerprints to fetch.
     */
    where?: SettingsFingerprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SettingsFingerprints to fetch.
     */
    orderBy?: SettingsFingerprintOrderByWithRelationInput | SettingsFingerprintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SettingsFingerprints.
     */
    cursor?: SettingsFingerprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SettingsFingerprints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SettingsFingerprints.
     */
    skip?: number
    distinct?: SettingsFingerprintScalarFieldEnum | SettingsFingerprintScalarFieldEnum[]
  }

  /**
   * SettingsFingerprint create
   */
  export type SettingsFingerprintCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettingsFingerprint
     */
    select?: SettingsFingerprintSelect<ExtArgs> | null
    /**
     * The data needed to create a SettingsFingerprint.
     */
    data: XOR<SettingsFingerprintCreateInput, SettingsFingerprintUncheckedCreateInput>
  }

  /**
   * SettingsFingerprint createMany
   */
  export type SettingsFingerprintCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SettingsFingerprints.
     */
    data: SettingsFingerprintCreateManyInput | SettingsFingerprintCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SettingsFingerprint createManyAndReturn
   */
  export type SettingsFingerprintCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettingsFingerprint
     */
    select?: SettingsFingerprintSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SettingsFingerprints.
     */
    data: SettingsFingerprintCreateManyInput | SettingsFingerprintCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SettingsFingerprint update
   */
  export type SettingsFingerprintUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettingsFingerprint
     */
    select?: SettingsFingerprintSelect<ExtArgs> | null
    /**
     * The data needed to update a SettingsFingerprint.
     */
    data: XOR<SettingsFingerprintUpdateInput, SettingsFingerprintUncheckedUpdateInput>
    /**
     * Choose, which SettingsFingerprint to update.
     */
    where: SettingsFingerprintWhereUniqueInput
  }

  /**
   * SettingsFingerprint updateMany
   */
  export type SettingsFingerprintUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SettingsFingerprints.
     */
    data: XOR<SettingsFingerprintUpdateManyMutationInput, SettingsFingerprintUncheckedUpdateManyInput>
    /**
     * Filter which SettingsFingerprints to update
     */
    where?: SettingsFingerprintWhereInput
  }

  /**
   * SettingsFingerprint upsert
   */
  export type SettingsFingerprintUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettingsFingerprint
     */
    select?: SettingsFingerprintSelect<ExtArgs> | null
    /**
     * The filter to search for the SettingsFingerprint to update in case it exists.
     */
    where: SettingsFingerprintWhereUniqueInput
    /**
     * In case the SettingsFingerprint found by the `where` argument doesn't exist, create a new SettingsFingerprint with this data.
     */
    create: XOR<SettingsFingerprintCreateInput, SettingsFingerprintUncheckedCreateInput>
    /**
     * In case the SettingsFingerprint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingsFingerprintUpdateInput, SettingsFingerprintUncheckedUpdateInput>
  }

  /**
   * SettingsFingerprint delete
   */
  export type SettingsFingerprintDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettingsFingerprint
     */
    select?: SettingsFingerprintSelect<ExtArgs> | null
    /**
     * Filter which SettingsFingerprint to delete.
     */
    where: SettingsFingerprintWhereUniqueInput
  }

  /**
   * SettingsFingerprint deleteMany
   */
  export type SettingsFingerprintDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SettingsFingerprints to delete
     */
    where?: SettingsFingerprintWhereInput
  }

  /**
   * SettingsFingerprint without action
   */
  export type SettingsFingerprintDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettingsFingerprint
     */
    select?: SettingsFingerprintSelect<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenMinAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    type: $Enums.TokenType | null
    expiresIn: Date | null
    createdAt: Date | null
  }

  export type TokenMaxAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    type: $Enums.TokenType | null
    expiresIn: Date | null
    createdAt: Date | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    email: number
    token: number
    type: number
    expiresIn: number
    createdAt: number
    _all: number
  }


  export type TokenMinAggregateInputType = {
    id?: true
    email?: true
    token?: true
    type?: true
    expiresIn?: true
    createdAt?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    email?: true
    token?: true
    type?: true
    expiresIn?: true
    createdAt?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    email?: true
    token?: true
    type?: true
    expiresIn?: true
    createdAt?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: string
    email: string
    token: string
    type: $Enums.TokenType
    expiresIn: Date
    createdAt: Date
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    type?: boolean
    expiresIn?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    type?: boolean
    expiresIn?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    email?: boolean
    token?: boolean
    type?: boolean
    expiresIn?: boolean
    createdAt?: boolean
  }


  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      token: string
      type: $Enums.TokenType
      expiresIn: Date
      createdAt: Date
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
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
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Token model
   */ 
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'String'>
    readonly email: FieldRef<"Token", 'String'>
    readonly token: FieldRef<"Token", 'String'>
    readonly type: FieldRef<"Token", 'TokenType'>
    readonly expiresIn: FieldRef<"Token", 'DateTime'>
    readonly createdAt: FieldRef<"Token", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
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
    password: 'password',
    role: 'role',
    isVerified: 'isVerified',
    firstFingerprint: 'firstFingerprint',
    fingerprints: 'fingerprints',
    lastFingerprint: 'lastFingerprint',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserVerifyTokensScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserVerifyTokensScalarFieldEnum = (typeof UserVerifyTokensScalarFieldEnum)[keyof typeof UserVerifyTokensScalarFieldEnum]


  export const SettingsFingerprintScalarFieldEnum: {
    id: 'id',
    browserName: 'browserName',
    browserMajorVersion: 'browserMajorVersion',
    browserFullVersion: 'browserFullVersion',
    os: 'os',
    osVersion: 'osVersion',
    device: 'device',
    userAgent: 'userAgent',
    screenWidth: 'screenWidth',
    screenHeight: 'screenHeight',
    pixelRatio: 'pixelRatio',
    colorDepth: 'colorDepth',
    orientation: 'orientation',
    availWidth: 'availWidth',
    availHeight: 'availHeight',
    innerWidth: 'innerWidth',
    innerHeight: 'innerHeight',
    deviceXDPI: 'deviceXDPI',
    deviceYDPI: 'deviceYDPI',
    isLandscape: 'isLandscape',
    isTouchDevice: 'isTouchDevice',
    maxTouchPoints: 'maxTouchPoints',
    deviceMemory: 'deviceMemory',
    hardwareConcurrency: 'hardwareConcurrency',
    isMobile: 'isMobile',
    isDesktop: 'isDesktop',
    isTablet: 'isTablet',
    isVirtualMachine: 'isVirtualMachine',
    isOnline: 'isOnline',
    platform: 'platform',
    language: 'language',
    screenReader: 'screenReader',
    cpu: 'cpu',
    isHeadless: 'isHeadless',
    batteryStatus: 'batteryStatus',
    vendor: 'vendor',
    timezone: 'timezone',
    utcOffset: 'utcOffset',
    utcOffsetFormatted: 'utcOffsetFormatted',
    currentTime: 'currentTime',
    localeTime: 'localeTime',
    isDST: 'isDST',
    localeDateFormat: 'localeDateFormat',
    ip: 'ip',
    type: 'type',
    continent_code: 'continent_code',
    continent_name: 'continent_name',
    country_code: 'country_code',
    country_name: 'country_name',
    region_code: 'region_code',
    region_name: 'region_name',
    city: 'city',
    zip: 'zip',
    latitude: 'latitude',
    longitude: 'longitude',
    location: 'location',
    connection_type: 'connection_type',
    ip_routing_type: 'ip_routing_type',
    msa: 'msa',
    dma: 'dma',
    radius: 'radius',
    plugins: 'plugins',
    localStorageEnabled: 'localStorageEnabled',
    sessionStorageEnabled: 'sessionStorageEnabled',
    indexedDBEnabled: 'indexedDBEnabled',
    cookiesEnabled: 'cookiesEnabled',
    mediaDevices: 'mediaDevices',
    serviceWorkerEnabled: 'serviceWorkerEnabled',
    languages: 'languages',
    doNotTrack: 'doNotTrack',
    pixelDepth: 'pixelDepth',
    canvasActive: 'canvasActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SettingsFingerprintScalarFieldEnum = (typeof SettingsFingerprintScalarFieldEnum)[keyof typeof SettingsFingerprintScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    type: 'type',
    expiresIn: 'expiresIn',
    createdAt: 'createdAt'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TokenType'
   */
  export type EnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType'>
    


  /**
   * Reference to a field of type 'TokenType[]'
   */
  export type ListEnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isVerified?: BoolFilter<"User"> | boolean
    firstFingerprint?: StringNullableFilter<"User"> | string | null
    fingerprints?: StringNullableListFilter<"User">
    lastFingerprint?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    firstFingerprint?: SortOrderInput | SortOrder
    fingerprints?: SortOrder
    lastFingerprint?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isVerified?: BoolFilter<"User"> | boolean
    firstFingerprint?: StringNullableFilter<"User"> | string | null
    fingerprints?: StringNullableListFilter<"User">
    lastFingerprint?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    firstFingerprint?: SortOrderInput | SortOrder
    fingerprints?: SortOrder
    lastFingerprint?: SortOrderInput | SortOrder
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
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    firstFingerprint?: StringNullableWithAggregatesFilter<"User"> | string | null
    fingerprints?: StringNullableListFilter<"User">
    lastFingerprint?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserVerifyTokensWhereInput = {
    AND?: UserVerifyTokensWhereInput | UserVerifyTokensWhereInput[]
    OR?: UserVerifyTokensWhereInput[]
    NOT?: UserVerifyTokensWhereInput | UserVerifyTokensWhereInput[]
    id?: StringFilter<"UserVerifyTokens"> | string
    email?: StringFilter<"UserVerifyTokens"> | string
    token?: StringNullableFilter<"UserVerifyTokens"> | string | null
    createdAt?: DateTimeFilter<"UserVerifyTokens"> | Date | string
    updatedAt?: DateTimeFilter<"UserVerifyTokens"> | Date | string
  }

  export type UserVerifyTokensOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserVerifyTokensWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserVerifyTokensWhereInput | UserVerifyTokensWhereInput[]
    OR?: UserVerifyTokensWhereInput[]
    NOT?: UserVerifyTokensWhereInput | UserVerifyTokensWhereInput[]
    token?: StringNullableFilter<"UserVerifyTokens"> | string | null
    createdAt?: DateTimeFilter<"UserVerifyTokens"> | Date | string
    updatedAt?: DateTimeFilter<"UserVerifyTokens"> | Date | string
  }, "id" | "email">

  export type UserVerifyTokensOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserVerifyTokensCountOrderByAggregateInput
    _max?: UserVerifyTokensMaxOrderByAggregateInput
    _min?: UserVerifyTokensMinOrderByAggregateInput
  }

  export type UserVerifyTokensScalarWhereWithAggregatesInput = {
    AND?: UserVerifyTokensScalarWhereWithAggregatesInput | UserVerifyTokensScalarWhereWithAggregatesInput[]
    OR?: UserVerifyTokensScalarWhereWithAggregatesInput[]
    NOT?: UserVerifyTokensScalarWhereWithAggregatesInput | UserVerifyTokensScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserVerifyTokens"> | string
    email?: StringWithAggregatesFilter<"UserVerifyTokens"> | string
    token?: StringNullableWithAggregatesFilter<"UserVerifyTokens"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserVerifyTokens"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserVerifyTokens"> | Date | string
  }

  export type SettingsFingerprintWhereInput = {
    AND?: SettingsFingerprintWhereInput | SettingsFingerprintWhereInput[]
    OR?: SettingsFingerprintWhereInput[]
    NOT?: SettingsFingerprintWhereInput | SettingsFingerprintWhereInput[]
    id?: StringFilter<"SettingsFingerprint"> | string
    browserName?: BoolFilter<"SettingsFingerprint"> | boolean
    browserMajorVersion?: BoolFilter<"SettingsFingerprint"> | boolean
    browserFullVersion?: BoolFilter<"SettingsFingerprint"> | boolean
    os?: BoolFilter<"SettingsFingerprint"> | boolean
    osVersion?: BoolFilter<"SettingsFingerprint"> | boolean
    device?: BoolFilter<"SettingsFingerprint"> | boolean
    userAgent?: BoolFilter<"SettingsFingerprint"> | boolean
    screenWidth?: BoolFilter<"SettingsFingerprint"> | boolean
    screenHeight?: BoolFilter<"SettingsFingerprint"> | boolean
    pixelRatio?: BoolFilter<"SettingsFingerprint"> | boolean
    colorDepth?: BoolFilter<"SettingsFingerprint"> | boolean
    orientation?: BoolFilter<"SettingsFingerprint"> | boolean
    availWidth?: BoolFilter<"SettingsFingerprint"> | boolean
    availHeight?: BoolFilter<"SettingsFingerprint"> | boolean
    innerWidth?: BoolFilter<"SettingsFingerprint"> | boolean
    innerHeight?: BoolFilter<"SettingsFingerprint"> | boolean
    deviceXDPI?: BoolFilter<"SettingsFingerprint"> | boolean
    deviceYDPI?: BoolFilter<"SettingsFingerprint"> | boolean
    isLandscape?: BoolFilter<"SettingsFingerprint"> | boolean
    isTouchDevice?: BoolFilter<"SettingsFingerprint"> | boolean
    maxTouchPoints?: BoolFilter<"SettingsFingerprint"> | boolean
    deviceMemory?: BoolFilter<"SettingsFingerprint"> | boolean
    hardwareConcurrency?: BoolFilter<"SettingsFingerprint"> | boolean
    isMobile?: BoolFilter<"SettingsFingerprint"> | boolean
    isDesktop?: BoolFilter<"SettingsFingerprint"> | boolean
    isTablet?: BoolFilter<"SettingsFingerprint"> | boolean
    isVirtualMachine?: BoolFilter<"SettingsFingerprint"> | boolean
    isOnline?: BoolFilter<"SettingsFingerprint"> | boolean
    platform?: BoolFilter<"SettingsFingerprint"> | boolean
    language?: BoolFilter<"SettingsFingerprint"> | boolean
    screenReader?: BoolFilter<"SettingsFingerprint"> | boolean
    cpu?: BoolFilter<"SettingsFingerprint"> | boolean
    isHeadless?: BoolFilter<"SettingsFingerprint"> | boolean
    batteryStatus?: BoolFilter<"SettingsFingerprint"> | boolean
    vendor?: BoolFilter<"SettingsFingerprint"> | boolean
    timezone?: BoolFilter<"SettingsFingerprint"> | boolean
    utcOffset?: BoolFilter<"SettingsFingerprint"> | boolean
    utcOffsetFormatted?: BoolFilter<"SettingsFingerprint"> | boolean
    currentTime?: BoolFilter<"SettingsFingerprint"> | boolean
    localeTime?: BoolFilter<"SettingsFingerprint"> | boolean
    isDST?: BoolFilter<"SettingsFingerprint"> | boolean
    localeDateFormat?: BoolFilter<"SettingsFingerprint"> | boolean
    ip?: BoolFilter<"SettingsFingerprint"> | boolean
    type?: BoolFilter<"SettingsFingerprint"> | boolean
    continent_code?: BoolFilter<"SettingsFingerprint"> | boolean
    continent_name?: BoolFilter<"SettingsFingerprint"> | boolean
    country_code?: BoolFilter<"SettingsFingerprint"> | boolean
    country_name?: BoolFilter<"SettingsFingerprint"> | boolean
    region_code?: BoolFilter<"SettingsFingerprint"> | boolean
    region_name?: BoolFilter<"SettingsFingerprint"> | boolean
    city?: BoolFilter<"SettingsFingerprint"> | boolean
    zip?: BoolFilter<"SettingsFingerprint"> | boolean
    latitude?: BoolFilter<"SettingsFingerprint"> | boolean
    longitude?: BoolFilter<"SettingsFingerprint"> | boolean
    location?: BoolFilter<"SettingsFingerprint"> | boolean
    connection_type?: BoolFilter<"SettingsFingerprint"> | boolean
    ip_routing_type?: BoolFilter<"SettingsFingerprint"> | boolean
    msa?: BoolFilter<"SettingsFingerprint"> | boolean
    dma?: BoolFilter<"SettingsFingerprint"> | boolean
    radius?: BoolFilter<"SettingsFingerprint"> | boolean
    plugins?: BoolFilter<"SettingsFingerprint"> | boolean
    localStorageEnabled?: BoolFilter<"SettingsFingerprint"> | boolean
    sessionStorageEnabled?: BoolFilter<"SettingsFingerprint"> | boolean
    indexedDBEnabled?: BoolFilter<"SettingsFingerprint"> | boolean
    cookiesEnabled?: BoolFilter<"SettingsFingerprint"> | boolean
    mediaDevices?: BoolFilter<"SettingsFingerprint"> | boolean
    serviceWorkerEnabled?: BoolFilter<"SettingsFingerprint"> | boolean
    languages?: BoolFilter<"SettingsFingerprint"> | boolean
    doNotTrack?: BoolFilter<"SettingsFingerprint"> | boolean
    pixelDepth?: BoolFilter<"SettingsFingerprint"> | boolean
    canvasActive?: BoolFilter<"SettingsFingerprint"> | boolean
    createdAt?: DateTimeFilter<"SettingsFingerprint"> | Date | string
    updatedAt?: DateTimeFilter<"SettingsFingerprint"> | Date | string
  }

  export type SettingsFingerprintOrderByWithRelationInput = {
    id?: SortOrder
    browserName?: SortOrder
    browserMajorVersion?: SortOrder
    browserFullVersion?: SortOrder
    os?: SortOrder
    osVersion?: SortOrder
    device?: SortOrder
    userAgent?: SortOrder
    screenWidth?: SortOrder
    screenHeight?: SortOrder
    pixelRatio?: SortOrder
    colorDepth?: SortOrder
    orientation?: SortOrder
    availWidth?: SortOrder
    availHeight?: SortOrder
    innerWidth?: SortOrder
    innerHeight?: SortOrder
    deviceXDPI?: SortOrder
    deviceYDPI?: SortOrder
    isLandscape?: SortOrder
    isTouchDevice?: SortOrder
    maxTouchPoints?: SortOrder
    deviceMemory?: SortOrder
    hardwareConcurrency?: SortOrder
    isMobile?: SortOrder
    isDesktop?: SortOrder
    isTablet?: SortOrder
    isVirtualMachine?: SortOrder
    isOnline?: SortOrder
    platform?: SortOrder
    language?: SortOrder
    screenReader?: SortOrder
    cpu?: SortOrder
    isHeadless?: SortOrder
    batteryStatus?: SortOrder
    vendor?: SortOrder
    timezone?: SortOrder
    utcOffset?: SortOrder
    utcOffsetFormatted?: SortOrder
    currentTime?: SortOrder
    localeTime?: SortOrder
    isDST?: SortOrder
    localeDateFormat?: SortOrder
    ip?: SortOrder
    type?: SortOrder
    continent_code?: SortOrder
    continent_name?: SortOrder
    country_code?: SortOrder
    country_name?: SortOrder
    region_code?: SortOrder
    region_name?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    location?: SortOrder
    connection_type?: SortOrder
    ip_routing_type?: SortOrder
    msa?: SortOrder
    dma?: SortOrder
    radius?: SortOrder
    plugins?: SortOrder
    localStorageEnabled?: SortOrder
    sessionStorageEnabled?: SortOrder
    indexedDBEnabled?: SortOrder
    cookiesEnabled?: SortOrder
    mediaDevices?: SortOrder
    serviceWorkerEnabled?: SortOrder
    languages?: SortOrder
    doNotTrack?: SortOrder
    pixelDepth?: SortOrder
    canvasActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsFingerprintWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SettingsFingerprintWhereInput | SettingsFingerprintWhereInput[]
    OR?: SettingsFingerprintWhereInput[]
    NOT?: SettingsFingerprintWhereInput | SettingsFingerprintWhereInput[]
    browserName?: BoolFilter<"SettingsFingerprint"> | boolean
    browserMajorVersion?: BoolFilter<"SettingsFingerprint"> | boolean
    browserFullVersion?: BoolFilter<"SettingsFingerprint"> | boolean
    os?: BoolFilter<"SettingsFingerprint"> | boolean
    osVersion?: BoolFilter<"SettingsFingerprint"> | boolean
    device?: BoolFilter<"SettingsFingerprint"> | boolean
    userAgent?: BoolFilter<"SettingsFingerprint"> | boolean
    screenWidth?: BoolFilter<"SettingsFingerprint"> | boolean
    screenHeight?: BoolFilter<"SettingsFingerprint"> | boolean
    pixelRatio?: BoolFilter<"SettingsFingerprint"> | boolean
    colorDepth?: BoolFilter<"SettingsFingerprint"> | boolean
    orientation?: BoolFilter<"SettingsFingerprint"> | boolean
    availWidth?: BoolFilter<"SettingsFingerprint"> | boolean
    availHeight?: BoolFilter<"SettingsFingerprint"> | boolean
    innerWidth?: BoolFilter<"SettingsFingerprint"> | boolean
    innerHeight?: BoolFilter<"SettingsFingerprint"> | boolean
    deviceXDPI?: BoolFilter<"SettingsFingerprint"> | boolean
    deviceYDPI?: BoolFilter<"SettingsFingerprint"> | boolean
    isLandscape?: BoolFilter<"SettingsFingerprint"> | boolean
    isTouchDevice?: BoolFilter<"SettingsFingerprint"> | boolean
    maxTouchPoints?: BoolFilter<"SettingsFingerprint"> | boolean
    deviceMemory?: BoolFilter<"SettingsFingerprint"> | boolean
    hardwareConcurrency?: BoolFilter<"SettingsFingerprint"> | boolean
    isMobile?: BoolFilter<"SettingsFingerprint"> | boolean
    isDesktop?: BoolFilter<"SettingsFingerprint"> | boolean
    isTablet?: BoolFilter<"SettingsFingerprint"> | boolean
    isVirtualMachine?: BoolFilter<"SettingsFingerprint"> | boolean
    isOnline?: BoolFilter<"SettingsFingerprint"> | boolean
    platform?: BoolFilter<"SettingsFingerprint"> | boolean
    language?: BoolFilter<"SettingsFingerprint"> | boolean
    screenReader?: BoolFilter<"SettingsFingerprint"> | boolean
    cpu?: BoolFilter<"SettingsFingerprint"> | boolean
    isHeadless?: BoolFilter<"SettingsFingerprint"> | boolean
    batteryStatus?: BoolFilter<"SettingsFingerprint"> | boolean
    vendor?: BoolFilter<"SettingsFingerprint"> | boolean
    timezone?: BoolFilter<"SettingsFingerprint"> | boolean
    utcOffset?: BoolFilter<"SettingsFingerprint"> | boolean
    utcOffsetFormatted?: BoolFilter<"SettingsFingerprint"> | boolean
    currentTime?: BoolFilter<"SettingsFingerprint"> | boolean
    localeTime?: BoolFilter<"SettingsFingerprint"> | boolean
    isDST?: BoolFilter<"SettingsFingerprint"> | boolean
    localeDateFormat?: BoolFilter<"SettingsFingerprint"> | boolean
    ip?: BoolFilter<"SettingsFingerprint"> | boolean
    type?: BoolFilter<"SettingsFingerprint"> | boolean
    continent_code?: BoolFilter<"SettingsFingerprint"> | boolean
    continent_name?: BoolFilter<"SettingsFingerprint"> | boolean
    country_code?: BoolFilter<"SettingsFingerprint"> | boolean
    country_name?: BoolFilter<"SettingsFingerprint"> | boolean
    region_code?: BoolFilter<"SettingsFingerprint"> | boolean
    region_name?: BoolFilter<"SettingsFingerprint"> | boolean
    city?: BoolFilter<"SettingsFingerprint"> | boolean
    zip?: BoolFilter<"SettingsFingerprint"> | boolean
    latitude?: BoolFilter<"SettingsFingerprint"> | boolean
    longitude?: BoolFilter<"SettingsFingerprint"> | boolean
    location?: BoolFilter<"SettingsFingerprint"> | boolean
    connection_type?: BoolFilter<"SettingsFingerprint"> | boolean
    ip_routing_type?: BoolFilter<"SettingsFingerprint"> | boolean
    msa?: BoolFilter<"SettingsFingerprint"> | boolean
    dma?: BoolFilter<"SettingsFingerprint"> | boolean
    radius?: BoolFilter<"SettingsFingerprint"> | boolean
    plugins?: BoolFilter<"SettingsFingerprint"> | boolean
    localStorageEnabled?: BoolFilter<"SettingsFingerprint"> | boolean
    sessionStorageEnabled?: BoolFilter<"SettingsFingerprint"> | boolean
    indexedDBEnabled?: BoolFilter<"SettingsFingerprint"> | boolean
    cookiesEnabled?: BoolFilter<"SettingsFingerprint"> | boolean
    mediaDevices?: BoolFilter<"SettingsFingerprint"> | boolean
    serviceWorkerEnabled?: BoolFilter<"SettingsFingerprint"> | boolean
    languages?: BoolFilter<"SettingsFingerprint"> | boolean
    doNotTrack?: BoolFilter<"SettingsFingerprint"> | boolean
    pixelDepth?: BoolFilter<"SettingsFingerprint"> | boolean
    canvasActive?: BoolFilter<"SettingsFingerprint"> | boolean
    createdAt?: DateTimeFilter<"SettingsFingerprint"> | Date | string
    updatedAt?: DateTimeFilter<"SettingsFingerprint"> | Date | string
  }, "id">

  export type SettingsFingerprintOrderByWithAggregationInput = {
    id?: SortOrder
    browserName?: SortOrder
    browserMajorVersion?: SortOrder
    browserFullVersion?: SortOrder
    os?: SortOrder
    osVersion?: SortOrder
    device?: SortOrder
    userAgent?: SortOrder
    screenWidth?: SortOrder
    screenHeight?: SortOrder
    pixelRatio?: SortOrder
    colorDepth?: SortOrder
    orientation?: SortOrder
    availWidth?: SortOrder
    availHeight?: SortOrder
    innerWidth?: SortOrder
    innerHeight?: SortOrder
    deviceXDPI?: SortOrder
    deviceYDPI?: SortOrder
    isLandscape?: SortOrder
    isTouchDevice?: SortOrder
    maxTouchPoints?: SortOrder
    deviceMemory?: SortOrder
    hardwareConcurrency?: SortOrder
    isMobile?: SortOrder
    isDesktop?: SortOrder
    isTablet?: SortOrder
    isVirtualMachine?: SortOrder
    isOnline?: SortOrder
    platform?: SortOrder
    language?: SortOrder
    screenReader?: SortOrder
    cpu?: SortOrder
    isHeadless?: SortOrder
    batteryStatus?: SortOrder
    vendor?: SortOrder
    timezone?: SortOrder
    utcOffset?: SortOrder
    utcOffsetFormatted?: SortOrder
    currentTime?: SortOrder
    localeTime?: SortOrder
    isDST?: SortOrder
    localeDateFormat?: SortOrder
    ip?: SortOrder
    type?: SortOrder
    continent_code?: SortOrder
    continent_name?: SortOrder
    country_code?: SortOrder
    country_name?: SortOrder
    region_code?: SortOrder
    region_name?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    location?: SortOrder
    connection_type?: SortOrder
    ip_routing_type?: SortOrder
    msa?: SortOrder
    dma?: SortOrder
    radius?: SortOrder
    plugins?: SortOrder
    localStorageEnabled?: SortOrder
    sessionStorageEnabled?: SortOrder
    indexedDBEnabled?: SortOrder
    cookiesEnabled?: SortOrder
    mediaDevices?: SortOrder
    serviceWorkerEnabled?: SortOrder
    languages?: SortOrder
    doNotTrack?: SortOrder
    pixelDepth?: SortOrder
    canvasActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SettingsFingerprintCountOrderByAggregateInput
    _max?: SettingsFingerprintMaxOrderByAggregateInput
    _min?: SettingsFingerprintMinOrderByAggregateInput
  }

  export type SettingsFingerprintScalarWhereWithAggregatesInput = {
    AND?: SettingsFingerprintScalarWhereWithAggregatesInput | SettingsFingerprintScalarWhereWithAggregatesInput[]
    OR?: SettingsFingerprintScalarWhereWithAggregatesInput[]
    NOT?: SettingsFingerprintScalarWhereWithAggregatesInput | SettingsFingerprintScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SettingsFingerprint"> | string
    browserName?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    browserMajorVersion?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    browserFullVersion?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    os?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    osVersion?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    device?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    userAgent?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    screenWidth?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    screenHeight?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    pixelRatio?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    colorDepth?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    orientation?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    availWidth?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    availHeight?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    innerWidth?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    innerHeight?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    deviceXDPI?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    deviceYDPI?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    isLandscape?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    isTouchDevice?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    maxTouchPoints?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    deviceMemory?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    hardwareConcurrency?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    isMobile?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    isDesktop?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    isTablet?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    isVirtualMachine?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    isOnline?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    platform?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    language?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    screenReader?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    cpu?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    isHeadless?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    batteryStatus?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    vendor?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    timezone?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    utcOffset?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    utcOffsetFormatted?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    currentTime?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    localeTime?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    isDST?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    localeDateFormat?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    ip?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    type?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    continent_code?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    continent_name?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    country_code?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    country_name?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    region_code?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    region_name?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    city?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    zip?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    latitude?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    longitude?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    location?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    connection_type?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    ip_routing_type?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    msa?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    dma?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    radius?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    plugins?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    localStorageEnabled?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    sessionStorageEnabled?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    indexedDBEnabled?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    cookiesEnabled?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    mediaDevices?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    serviceWorkerEnabled?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    languages?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    doNotTrack?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    pixelDepth?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    canvasActive?: BoolWithAggregatesFilter<"SettingsFingerprint"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SettingsFingerprint"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SettingsFingerprint"> | Date | string
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: StringFilter<"Token"> | string
    email?: StringFilter<"Token"> | string
    token?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
    expiresIn?: DateTimeFilter<"Token"> | Date | string
    createdAt?: DateTimeFilter<"Token"> | Date | string
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    email?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
    expiresIn?: DateTimeFilter<"Token"> | Date | string
    createdAt?: DateTimeFilter<"Token"> | Date | string
  }, "id" | "token">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
    createdAt?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Token"> | string
    email?: StringWithAggregatesFilter<"Token"> | string
    token?: StringWithAggregatesFilter<"Token"> | string
    type?: EnumTokenTypeWithAggregatesFilter<"Token"> | $Enums.TokenType
    expiresIn?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    isVerified?: boolean
    firstFingerprint?: string | null
    fingerprints?: UserCreatefingerprintsInput | string[]
    lastFingerprint?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    isVerified?: boolean
    firstFingerprint?: string | null
    fingerprints?: UserCreatefingerprintsInput | string[]
    lastFingerprint?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    firstFingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprints?: UserUpdatefingerprintsInput | string[]
    lastFingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    firstFingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprints?: UserUpdatefingerprintsInput | string[]
    lastFingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    isVerified?: boolean
    firstFingerprint?: string | null
    fingerprints?: UserCreatefingerprintsInput | string[]
    lastFingerprint?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    firstFingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprints?: UserUpdatefingerprintsInput | string[]
    lastFingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    firstFingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprints?: UserUpdatefingerprintsInput | string[]
    lastFingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVerifyTokensCreateInput = {
    id?: string
    email: string
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserVerifyTokensUncheckedCreateInput = {
    id?: string
    email: string
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserVerifyTokensUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVerifyTokensUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVerifyTokensCreateManyInput = {
    id?: string
    email: string
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserVerifyTokensUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVerifyTokensUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsFingerprintCreateInput = {
    id?: string
    browserName?: boolean
    browserMajorVersion?: boolean
    browserFullVersion?: boolean
    os?: boolean
    osVersion?: boolean
    device?: boolean
    userAgent?: boolean
    screenWidth?: boolean
    screenHeight?: boolean
    pixelRatio?: boolean
    colorDepth?: boolean
    orientation?: boolean
    availWidth?: boolean
    availHeight?: boolean
    innerWidth?: boolean
    innerHeight?: boolean
    deviceXDPI?: boolean
    deviceYDPI?: boolean
    isLandscape?: boolean
    isTouchDevice?: boolean
    maxTouchPoints?: boolean
    deviceMemory?: boolean
    hardwareConcurrency?: boolean
    isMobile?: boolean
    isDesktop?: boolean
    isTablet?: boolean
    isVirtualMachine?: boolean
    isOnline?: boolean
    platform?: boolean
    language?: boolean
    screenReader?: boolean
    cpu?: boolean
    isHeadless?: boolean
    batteryStatus?: boolean
    vendor?: boolean
    timezone?: boolean
    utcOffset?: boolean
    utcOffsetFormatted?: boolean
    currentTime?: boolean
    localeTime?: boolean
    isDST?: boolean
    localeDateFormat?: boolean
    ip?: boolean
    type?: boolean
    continent_code?: boolean
    continent_name?: boolean
    country_code?: boolean
    country_name?: boolean
    region_code?: boolean
    region_name?: boolean
    city?: boolean
    zip?: boolean
    latitude?: boolean
    longitude?: boolean
    location?: boolean
    connection_type?: boolean
    ip_routing_type?: boolean
    msa?: boolean
    dma?: boolean
    radius?: boolean
    plugins?: boolean
    localStorageEnabled?: boolean
    sessionStorageEnabled?: boolean
    indexedDBEnabled?: boolean
    cookiesEnabled?: boolean
    mediaDevices?: boolean
    serviceWorkerEnabled?: boolean
    languages?: boolean
    doNotTrack?: boolean
    pixelDepth?: boolean
    canvasActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SettingsFingerprintUncheckedCreateInput = {
    id?: string
    browserName?: boolean
    browserMajorVersion?: boolean
    browserFullVersion?: boolean
    os?: boolean
    osVersion?: boolean
    device?: boolean
    userAgent?: boolean
    screenWidth?: boolean
    screenHeight?: boolean
    pixelRatio?: boolean
    colorDepth?: boolean
    orientation?: boolean
    availWidth?: boolean
    availHeight?: boolean
    innerWidth?: boolean
    innerHeight?: boolean
    deviceXDPI?: boolean
    deviceYDPI?: boolean
    isLandscape?: boolean
    isTouchDevice?: boolean
    maxTouchPoints?: boolean
    deviceMemory?: boolean
    hardwareConcurrency?: boolean
    isMobile?: boolean
    isDesktop?: boolean
    isTablet?: boolean
    isVirtualMachine?: boolean
    isOnline?: boolean
    platform?: boolean
    language?: boolean
    screenReader?: boolean
    cpu?: boolean
    isHeadless?: boolean
    batteryStatus?: boolean
    vendor?: boolean
    timezone?: boolean
    utcOffset?: boolean
    utcOffsetFormatted?: boolean
    currentTime?: boolean
    localeTime?: boolean
    isDST?: boolean
    localeDateFormat?: boolean
    ip?: boolean
    type?: boolean
    continent_code?: boolean
    continent_name?: boolean
    country_code?: boolean
    country_name?: boolean
    region_code?: boolean
    region_name?: boolean
    city?: boolean
    zip?: boolean
    latitude?: boolean
    longitude?: boolean
    location?: boolean
    connection_type?: boolean
    ip_routing_type?: boolean
    msa?: boolean
    dma?: boolean
    radius?: boolean
    plugins?: boolean
    localStorageEnabled?: boolean
    sessionStorageEnabled?: boolean
    indexedDBEnabled?: boolean
    cookiesEnabled?: boolean
    mediaDevices?: boolean
    serviceWorkerEnabled?: boolean
    languages?: boolean
    doNotTrack?: boolean
    pixelDepth?: boolean
    canvasActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SettingsFingerprintUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    browserName?: BoolFieldUpdateOperationsInput | boolean
    browserMajorVersion?: BoolFieldUpdateOperationsInput | boolean
    browserFullVersion?: BoolFieldUpdateOperationsInput | boolean
    os?: BoolFieldUpdateOperationsInput | boolean
    osVersion?: BoolFieldUpdateOperationsInput | boolean
    device?: BoolFieldUpdateOperationsInput | boolean
    userAgent?: BoolFieldUpdateOperationsInput | boolean
    screenWidth?: BoolFieldUpdateOperationsInput | boolean
    screenHeight?: BoolFieldUpdateOperationsInput | boolean
    pixelRatio?: BoolFieldUpdateOperationsInput | boolean
    colorDepth?: BoolFieldUpdateOperationsInput | boolean
    orientation?: BoolFieldUpdateOperationsInput | boolean
    availWidth?: BoolFieldUpdateOperationsInput | boolean
    availHeight?: BoolFieldUpdateOperationsInput | boolean
    innerWidth?: BoolFieldUpdateOperationsInput | boolean
    innerHeight?: BoolFieldUpdateOperationsInput | boolean
    deviceXDPI?: BoolFieldUpdateOperationsInput | boolean
    deviceYDPI?: BoolFieldUpdateOperationsInput | boolean
    isLandscape?: BoolFieldUpdateOperationsInput | boolean
    isTouchDevice?: BoolFieldUpdateOperationsInput | boolean
    maxTouchPoints?: BoolFieldUpdateOperationsInput | boolean
    deviceMemory?: BoolFieldUpdateOperationsInput | boolean
    hardwareConcurrency?: BoolFieldUpdateOperationsInput | boolean
    isMobile?: BoolFieldUpdateOperationsInput | boolean
    isDesktop?: BoolFieldUpdateOperationsInput | boolean
    isTablet?: BoolFieldUpdateOperationsInput | boolean
    isVirtualMachine?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    platform?: BoolFieldUpdateOperationsInput | boolean
    language?: BoolFieldUpdateOperationsInput | boolean
    screenReader?: BoolFieldUpdateOperationsInput | boolean
    cpu?: BoolFieldUpdateOperationsInput | boolean
    isHeadless?: BoolFieldUpdateOperationsInput | boolean
    batteryStatus?: BoolFieldUpdateOperationsInput | boolean
    vendor?: BoolFieldUpdateOperationsInput | boolean
    timezone?: BoolFieldUpdateOperationsInput | boolean
    utcOffset?: BoolFieldUpdateOperationsInput | boolean
    utcOffsetFormatted?: BoolFieldUpdateOperationsInput | boolean
    currentTime?: BoolFieldUpdateOperationsInput | boolean
    localeTime?: BoolFieldUpdateOperationsInput | boolean
    isDST?: BoolFieldUpdateOperationsInput | boolean
    localeDateFormat?: BoolFieldUpdateOperationsInput | boolean
    ip?: BoolFieldUpdateOperationsInput | boolean
    type?: BoolFieldUpdateOperationsInput | boolean
    continent_code?: BoolFieldUpdateOperationsInput | boolean
    continent_name?: BoolFieldUpdateOperationsInput | boolean
    country_code?: BoolFieldUpdateOperationsInput | boolean
    country_name?: BoolFieldUpdateOperationsInput | boolean
    region_code?: BoolFieldUpdateOperationsInput | boolean
    region_name?: BoolFieldUpdateOperationsInput | boolean
    city?: BoolFieldUpdateOperationsInput | boolean
    zip?: BoolFieldUpdateOperationsInput | boolean
    latitude?: BoolFieldUpdateOperationsInput | boolean
    longitude?: BoolFieldUpdateOperationsInput | boolean
    location?: BoolFieldUpdateOperationsInput | boolean
    connection_type?: BoolFieldUpdateOperationsInput | boolean
    ip_routing_type?: BoolFieldUpdateOperationsInput | boolean
    msa?: BoolFieldUpdateOperationsInput | boolean
    dma?: BoolFieldUpdateOperationsInput | boolean
    radius?: BoolFieldUpdateOperationsInput | boolean
    plugins?: BoolFieldUpdateOperationsInput | boolean
    localStorageEnabled?: BoolFieldUpdateOperationsInput | boolean
    sessionStorageEnabled?: BoolFieldUpdateOperationsInput | boolean
    indexedDBEnabled?: BoolFieldUpdateOperationsInput | boolean
    cookiesEnabled?: BoolFieldUpdateOperationsInput | boolean
    mediaDevices?: BoolFieldUpdateOperationsInput | boolean
    serviceWorkerEnabled?: BoolFieldUpdateOperationsInput | boolean
    languages?: BoolFieldUpdateOperationsInput | boolean
    doNotTrack?: BoolFieldUpdateOperationsInput | boolean
    pixelDepth?: BoolFieldUpdateOperationsInput | boolean
    canvasActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsFingerprintUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    browserName?: BoolFieldUpdateOperationsInput | boolean
    browserMajorVersion?: BoolFieldUpdateOperationsInput | boolean
    browserFullVersion?: BoolFieldUpdateOperationsInput | boolean
    os?: BoolFieldUpdateOperationsInput | boolean
    osVersion?: BoolFieldUpdateOperationsInput | boolean
    device?: BoolFieldUpdateOperationsInput | boolean
    userAgent?: BoolFieldUpdateOperationsInput | boolean
    screenWidth?: BoolFieldUpdateOperationsInput | boolean
    screenHeight?: BoolFieldUpdateOperationsInput | boolean
    pixelRatio?: BoolFieldUpdateOperationsInput | boolean
    colorDepth?: BoolFieldUpdateOperationsInput | boolean
    orientation?: BoolFieldUpdateOperationsInput | boolean
    availWidth?: BoolFieldUpdateOperationsInput | boolean
    availHeight?: BoolFieldUpdateOperationsInput | boolean
    innerWidth?: BoolFieldUpdateOperationsInput | boolean
    innerHeight?: BoolFieldUpdateOperationsInput | boolean
    deviceXDPI?: BoolFieldUpdateOperationsInput | boolean
    deviceYDPI?: BoolFieldUpdateOperationsInput | boolean
    isLandscape?: BoolFieldUpdateOperationsInput | boolean
    isTouchDevice?: BoolFieldUpdateOperationsInput | boolean
    maxTouchPoints?: BoolFieldUpdateOperationsInput | boolean
    deviceMemory?: BoolFieldUpdateOperationsInput | boolean
    hardwareConcurrency?: BoolFieldUpdateOperationsInput | boolean
    isMobile?: BoolFieldUpdateOperationsInput | boolean
    isDesktop?: BoolFieldUpdateOperationsInput | boolean
    isTablet?: BoolFieldUpdateOperationsInput | boolean
    isVirtualMachine?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    platform?: BoolFieldUpdateOperationsInput | boolean
    language?: BoolFieldUpdateOperationsInput | boolean
    screenReader?: BoolFieldUpdateOperationsInput | boolean
    cpu?: BoolFieldUpdateOperationsInput | boolean
    isHeadless?: BoolFieldUpdateOperationsInput | boolean
    batteryStatus?: BoolFieldUpdateOperationsInput | boolean
    vendor?: BoolFieldUpdateOperationsInput | boolean
    timezone?: BoolFieldUpdateOperationsInput | boolean
    utcOffset?: BoolFieldUpdateOperationsInput | boolean
    utcOffsetFormatted?: BoolFieldUpdateOperationsInput | boolean
    currentTime?: BoolFieldUpdateOperationsInput | boolean
    localeTime?: BoolFieldUpdateOperationsInput | boolean
    isDST?: BoolFieldUpdateOperationsInput | boolean
    localeDateFormat?: BoolFieldUpdateOperationsInput | boolean
    ip?: BoolFieldUpdateOperationsInput | boolean
    type?: BoolFieldUpdateOperationsInput | boolean
    continent_code?: BoolFieldUpdateOperationsInput | boolean
    continent_name?: BoolFieldUpdateOperationsInput | boolean
    country_code?: BoolFieldUpdateOperationsInput | boolean
    country_name?: BoolFieldUpdateOperationsInput | boolean
    region_code?: BoolFieldUpdateOperationsInput | boolean
    region_name?: BoolFieldUpdateOperationsInput | boolean
    city?: BoolFieldUpdateOperationsInput | boolean
    zip?: BoolFieldUpdateOperationsInput | boolean
    latitude?: BoolFieldUpdateOperationsInput | boolean
    longitude?: BoolFieldUpdateOperationsInput | boolean
    location?: BoolFieldUpdateOperationsInput | boolean
    connection_type?: BoolFieldUpdateOperationsInput | boolean
    ip_routing_type?: BoolFieldUpdateOperationsInput | boolean
    msa?: BoolFieldUpdateOperationsInput | boolean
    dma?: BoolFieldUpdateOperationsInput | boolean
    radius?: BoolFieldUpdateOperationsInput | boolean
    plugins?: BoolFieldUpdateOperationsInput | boolean
    localStorageEnabled?: BoolFieldUpdateOperationsInput | boolean
    sessionStorageEnabled?: BoolFieldUpdateOperationsInput | boolean
    indexedDBEnabled?: BoolFieldUpdateOperationsInput | boolean
    cookiesEnabled?: BoolFieldUpdateOperationsInput | boolean
    mediaDevices?: BoolFieldUpdateOperationsInput | boolean
    serviceWorkerEnabled?: BoolFieldUpdateOperationsInput | boolean
    languages?: BoolFieldUpdateOperationsInput | boolean
    doNotTrack?: BoolFieldUpdateOperationsInput | boolean
    pixelDepth?: BoolFieldUpdateOperationsInput | boolean
    canvasActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsFingerprintCreateManyInput = {
    id?: string
    browserName?: boolean
    browserMajorVersion?: boolean
    browserFullVersion?: boolean
    os?: boolean
    osVersion?: boolean
    device?: boolean
    userAgent?: boolean
    screenWidth?: boolean
    screenHeight?: boolean
    pixelRatio?: boolean
    colorDepth?: boolean
    orientation?: boolean
    availWidth?: boolean
    availHeight?: boolean
    innerWidth?: boolean
    innerHeight?: boolean
    deviceXDPI?: boolean
    deviceYDPI?: boolean
    isLandscape?: boolean
    isTouchDevice?: boolean
    maxTouchPoints?: boolean
    deviceMemory?: boolean
    hardwareConcurrency?: boolean
    isMobile?: boolean
    isDesktop?: boolean
    isTablet?: boolean
    isVirtualMachine?: boolean
    isOnline?: boolean
    platform?: boolean
    language?: boolean
    screenReader?: boolean
    cpu?: boolean
    isHeadless?: boolean
    batteryStatus?: boolean
    vendor?: boolean
    timezone?: boolean
    utcOffset?: boolean
    utcOffsetFormatted?: boolean
    currentTime?: boolean
    localeTime?: boolean
    isDST?: boolean
    localeDateFormat?: boolean
    ip?: boolean
    type?: boolean
    continent_code?: boolean
    continent_name?: boolean
    country_code?: boolean
    country_name?: boolean
    region_code?: boolean
    region_name?: boolean
    city?: boolean
    zip?: boolean
    latitude?: boolean
    longitude?: boolean
    location?: boolean
    connection_type?: boolean
    ip_routing_type?: boolean
    msa?: boolean
    dma?: boolean
    radius?: boolean
    plugins?: boolean
    localStorageEnabled?: boolean
    sessionStorageEnabled?: boolean
    indexedDBEnabled?: boolean
    cookiesEnabled?: boolean
    mediaDevices?: boolean
    serviceWorkerEnabled?: boolean
    languages?: boolean
    doNotTrack?: boolean
    pixelDepth?: boolean
    canvasActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SettingsFingerprintUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    browserName?: BoolFieldUpdateOperationsInput | boolean
    browserMajorVersion?: BoolFieldUpdateOperationsInput | boolean
    browserFullVersion?: BoolFieldUpdateOperationsInput | boolean
    os?: BoolFieldUpdateOperationsInput | boolean
    osVersion?: BoolFieldUpdateOperationsInput | boolean
    device?: BoolFieldUpdateOperationsInput | boolean
    userAgent?: BoolFieldUpdateOperationsInput | boolean
    screenWidth?: BoolFieldUpdateOperationsInput | boolean
    screenHeight?: BoolFieldUpdateOperationsInput | boolean
    pixelRatio?: BoolFieldUpdateOperationsInput | boolean
    colorDepth?: BoolFieldUpdateOperationsInput | boolean
    orientation?: BoolFieldUpdateOperationsInput | boolean
    availWidth?: BoolFieldUpdateOperationsInput | boolean
    availHeight?: BoolFieldUpdateOperationsInput | boolean
    innerWidth?: BoolFieldUpdateOperationsInput | boolean
    innerHeight?: BoolFieldUpdateOperationsInput | boolean
    deviceXDPI?: BoolFieldUpdateOperationsInput | boolean
    deviceYDPI?: BoolFieldUpdateOperationsInput | boolean
    isLandscape?: BoolFieldUpdateOperationsInput | boolean
    isTouchDevice?: BoolFieldUpdateOperationsInput | boolean
    maxTouchPoints?: BoolFieldUpdateOperationsInput | boolean
    deviceMemory?: BoolFieldUpdateOperationsInput | boolean
    hardwareConcurrency?: BoolFieldUpdateOperationsInput | boolean
    isMobile?: BoolFieldUpdateOperationsInput | boolean
    isDesktop?: BoolFieldUpdateOperationsInput | boolean
    isTablet?: BoolFieldUpdateOperationsInput | boolean
    isVirtualMachine?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    platform?: BoolFieldUpdateOperationsInput | boolean
    language?: BoolFieldUpdateOperationsInput | boolean
    screenReader?: BoolFieldUpdateOperationsInput | boolean
    cpu?: BoolFieldUpdateOperationsInput | boolean
    isHeadless?: BoolFieldUpdateOperationsInput | boolean
    batteryStatus?: BoolFieldUpdateOperationsInput | boolean
    vendor?: BoolFieldUpdateOperationsInput | boolean
    timezone?: BoolFieldUpdateOperationsInput | boolean
    utcOffset?: BoolFieldUpdateOperationsInput | boolean
    utcOffsetFormatted?: BoolFieldUpdateOperationsInput | boolean
    currentTime?: BoolFieldUpdateOperationsInput | boolean
    localeTime?: BoolFieldUpdateOperationsInput | boolean
    isDST?: BoolFieldUpdateOperationsInput | boolean
    localeDateFormat?: BoolFieldUpdateOperationsInput | boolean
    ip?: BoolFieldUpdateOperationsInput | boolean
    type?: BoolFieldUpdateOperationsInput | boolean
    continent_code?: BoolFieldUpdateOperationsInput | boolean
    continent_name?: BoolFieldUpdateOperationsInput | boolean
    country_code?: BoolFieldUpdateOperationsInput | boolean
    country_name?: BoolFieldUpdateOperationsInput | boolean
    region_code?: BoolFieldUpdateOperationsInput | boolean
    region_name?: BoolFieldUpdateOperationsInput | boolean
    city?: BoolFieldUpdateOperationsInput | boolean
    zip?: BoolFieldUpdateOperationsInput | boolean
    latitude?: BoolFieldUpdateOperationsInput | boolean
    longitude?: BoolFieldUpdateOperationsInput | boolean
    location?: BoolFieldUpdateOperationsInput | boolean
    connection_type?: BoolFieldUpdateOperationsInput | boolean
    ip_routing_type?: BoolFieldUpdateOperationsInput | boolean
    msa?: BoolFieldUpdateOperationsInput | boolean
    dma?: BoolFieldUpdateOperationsInput | boolean
    radius?: BoolFieldUpdateOperationsInput | boolean
    plugins?: BoolFieldUpdateOperationsInput | boolean
    localStorageEnabled?: BoolFieldUpdateOperationsInput | boolean
    sessionStorageEnabled?: BoolFieldUpdateOperationsInput | boolean
    indexedDBEnabled?: BoolFieldUpdateOperationsInput | boolean
    cookiesEnabled?: BoolFieldUpdateOperationsInput | boolean
    mediaDevices?: BoolFieldUpdateOperationsInput | boolean
    serviceWorkerEnabled?: BoolFieldUpdateOperationsInput | boolean
    languages?: BoolFieldUpdateOperationsInput | boolean
    doNotTrack?: BoolFieldUpdateOperationsInput | boolean
    pixelDepth?: BoolFieldUpdateOperationsInput | boolean
    canvasActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsFingerprintUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    browserName?: BoolFieldUpdateOperationsInput | boolean
    browserMajorVersion?: BoolFieldUpdateOperationsInput | boolean
    browserFullVersion?: BoolFieldUpdateOperationsInput | boolean
    os?: BoolFieldUpdateOperationsInput | boolean
    osVersion?: BoolFieldUpdateOperationsInput | boolean
    device?: BoolFieldUpdateOperationsInput | boolean
    userAgent?: BoolFieldUpdateOperationsInput | boolean
    screenWidth?: BoolFieldUpdateOperationsInput | boolean
    screenHeight?: BoolFieldUpdateOperationsInput | boolean
    pixelRatio?: BoolFieldUpdateOperationsInput | boolean
    colorDepth?: BoolFieldUpdateOperationsInput | boolean
    orientation?: BoolFieldUpdateOperationsInput | boolean
    availWidth?: BoolFieldUpdateOperationsInput | boolean
    availHeight?: BoolFieldUpdateOperationsInput | boolean
    innerWidth?: BoolFieldUpdateOperationsInput | boolean
    innerHeight?: BoolFieldUpdateOperationsInput | boolean
    deviceXDPI?: BoolFieldUpdateOperationsInput | boolean
    deviceYDPI?: BoolFieldUpdateOperationsInput | boolean
    isLandscape?: BoolFieldUpdateOperationsInput | boolean
    isTouchDevice?: BoolFieldUpdateOperationsInput | boolean
    maxTouchPoints?: BoolFieldUpdateOperationsInput | boolean
    deviceMemory?: BoolFieldUpdateOperationsInput | boolean
    hardwareConcurrency?: BoolFieldUpdateOperationsInput | boolean
    isMobile?: BoolFieldUpdateOperationsInput | boolean
    isDesktop?: BoolFieldUpdateOperationsInput | boolean
    isTablet?: BoolFieldUpdateOperationsInput | boolean
    isVirtualMachine?: BoolFieldUpdateOperationsInput | boolean
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    platform?: BoolFieldUpdateOperationsInput | boolean
    language?: BoolFieldUpdateOperationsInput | boolean
    screenReader?: BoolFieldUpdateOperationsInput | boolean
    cpu?: BoolFieldUpdateOperationsInput | boolean
    isHeadless?: BoolFieldUpdateOperationsInput | boolean
    batteryStatus?: BoolFieldUpdateOperationsInput | boolean
    vendor?: BoolFieldUpdateOperationsInput | boolean
    timezone?: BoolFieldUpdateOperationsInput | boolean
    utcOffset?: BoolFieldUpdateOperationsInput | boolean
    utcOffsetFormatted?: BoolFieldUpdateOperationsInput | boolean
    currentTime?: BoolFieldUpdateOperationsInput | boolean
    localeTime?: BoolFieldUpdateOperationsInput | boolean
    isDST?: BoolFieldUpdateOperationsInput | boolean
    localeDateFormat?: BoolFieldUpdateOperationsInput | boolean
    ip?: BoolFieldUpdateOperationsInput | boolean
    type?: BoolFieldUpdateOperationsInput | boolean
    continent_code?: BoolFieldUpdateOperationsInput | boolean
    continent_name?: BoolFieldUpdateOperationsInput | boolean
    country_code?: BoolFieldUpdateOperationsInput | boolean
    country_name?: BoolFieldUpdateOperationsInput | boolean
    region_code?: BoolFieldUpdateOperationsInput | boolean
    region_name?: BoolFieldUpdateOperationsInput | boolean
    city?: BoolFieldUpdateOperationsInput | boolean
    zip?: BoolFieldUpdateOperationsInput | boolean
    latitude?: BoolFieldUpdateOperationsInput | boolean
    longitude?: BoolFieldUpdateOperationsInput | boolean
    location?: BoolFieldUpdateOperationsInput | boolean
    connection_type?: BoolFieldUpdateOperationsInput | boolean
    ip_routing_type?: BoolFieldUpdateOperationsInput | boolean
    msa?: BoolFieldUpdateOperationsInput | boolean
    dma?: BoolFieldUpdateOperationsInput | boolean
    radius?: BoolFieldUpdateOperationsInput | boolean
    plugins?: BoolFieldUpdateOperationsInput | boolean
    localStorageEnabled?: BoolFieldUpdateOperationsInput | boolean
    sessionStorageEnabled?: BoolFieldUpdateOperationsInput | boolean
    indexedDBEnabled?: BoolFieldUpdateOperationsInput | boolean
    cookiesEnabled?: BoolFieldUpdateOperationsInput | boolean
    mediaDevices?: BoolFieldUpdateOperationsInput | boolean
    serviceWorkerEnabled?: BoolFieldUpdateOperationsInput | boolean
    languages?: BoolFieldUpdateOperationsInput | boolean
    doNotTrack?: BoolFieldUpdateOperationsInput | boolean
    pixelDepth?: BoolFieldUpdateOperationsInput | boolean
    canvasActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateInput = {
    id?: string
    email: string
    token: string
    type: $Enums.TokenType
    expiresIn: Date | string
    createdAt?: Date | string
  }

  export type TokenUncheckedCreateInput = {
    id?: string
    email: string
    token: string
    type: $Enums.TokenType
    expiresIn: Date | string
    createdAt?: Date | string
  }

  export type TokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateManyInput = {
    id?: string
    email: string
    token: string
    type: $Enums.TokenType
    expiresIn: Date | string
    createdAt?: Date | string
  }

  export type TokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    firstFingerprint?: SortOrder
    fingerprints?: SortOrder
    lastFingerprint?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    firstFingerprint?: SortOrder
    lastFingerprint?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    firstFingerprint?: SortOrder
    lastFingerprint?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserVerifyTokensCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserVerifyTokensMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserVerifyTokensMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsFingerprintCountOrderByAggregateInput = {
    id?: SortOrder
    browserName?: SortOrder
    browserMajorVersion?: SortOrder
    browserFullVersion?: SortOrder
    os?: SortOrder
    osVersion?: SortOrder
    device?: SortOrder
    userAgent?: SortOrder
    screenWidth?: SortOrder
    screenHeight?: SortOrder
    pixelRatio?: SortOrder
    colorDepth?: SortOrder
    orientation?: SortOrder
    availWidth?: SortOrder
    availHeight?: SortOrder
    innerWidth?: SortOrder
    innerHeight?: SortOrder
    deviceXDPI?: SortOrder
    deviceYDPI?: SortOrder
    isLandscape?: SortOrder
    isTouchDevice?: SortOrder
    maxTouchPoints?: SortOrder
    deviceMemory?: SortOrder
    hardwareConcurrency?: SortOrder
    isMobile?: SortOrder
    isDesktop?: SortOrder
    isTablet?: SortOrder
    isVirtualMachine?: SortOrder
    isOnline?: SortOrder
    platform?: SortOrder
    language?: SortOrder
    screenReader?: SortOrder
    cpu?: SortOrder
    isHeadless?: SortOrder
    batteryStatus?: SortOrder
    vendor?: SortOrder
    timezone?: SortOrder
    utcOffset?: SortOrder
    utcOffsetFormatted?: SortOrder
    currentTime?: SortOrder
    localeTime?: SortOrder
    isDST?: SortOrder
    localeDateFormat?: SortOrder
    ip?: SortOrder
    type?: SortOrder
    continent_code?: SortOrder
    continent_name?: SortOrder
    country_code?: SortOrder
    country_name?: SortOrder
    region_code?: SortOrder
    region_name?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    location?: SortOrder
    connection_type?: SortOrder
    ip_routing_type?: SortOrder
    msa?: SortOrder
    dma?: SortOrder
    radius?: SortOrder
    plugins?: SortOrder
    localStorageEnabled?: SortOrder
    sessionStorageEnabled?: SortOrder
    indexedDBEnabled?: SortOrder
    cookiesEnabled?: SortOrder
    mediaDevices?: SortOrder
    serviceWorkerEnabled?: SortOrder
    languages?: SortOrder
    doNotTrack?: SortOrder
    pixelDepth?: SortOrder
    canvasActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsFingerprintMaxOrderByAggregateInput = {
    id?: SortOrder
    browserName?: SortOrder
    browserMajorVersion?: SortOrder
    browserFullVersion?: SortOrder
    os?: SortOrder
    osVersion?: SortOrder
    device?: SortOrder
    userAgent?: SortOrder
    screenWidth?: SortOrder
    screenHeight?: SortOrder
    pixelRatio?: SortOrder
    colorDepth?: SortOrder
    orientation?: SortOrder
    availWidth?: SortOrder
    availHeight?: SortOrder
    innerWidth?: SortOrder
    innerHeight?: SortOrder
    deviceXDPI?: SortOrder
    deviceYDPI?: SortOrder
    isLandscape?: SortOrder
    isTouchDevice?: SortOrder
    maxTouchPoints?: SortOrder
    deviceMemory?: SortOrder
    hardwareConcurrency?: SortOrder
    isMobile?: SortOrder
    isDesktop?: SortOrder
    isTablet?: SortOrder
    isVirtualMachine?: SortOrder
    isOnline?: SortOrder
    platform?: SortOrder
    language?: SortOrder
    screenReader?: SortOrder
    cpu?: SortOrder
    isHeadless?: SortOrder
    batteryStatus?: SortOrder
    vendor?: SortOrder
    timezone?: SortOrder
    utcOffset?: SortOrder
    utcOffsetFormatted?: SortOrder
    currentTime?: SortOrder
    localeTime?: SortOrder
    isDST?: SortOrder
    localeDateFormat?: SortOrder
    ip?: SortOrder
    type?: SortOrder
    continent_code?: SortOrder
    continent_name?: SortOrder
    country_code?: SortOrder
    country_name?: SortOrder
    region_code?: SortOrder
    region_name?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    location?: SortOrder
    connection_type?: SortOrder
    ip_routing_type?: SortOrder
    msa?: SortOrder
    dma?: SortOrder
    radius?: SortOrder
    plugins?: SortOrder
    localStorageEnabled?: SortOrder
    sessionStorageEnabled?: SortOrder
    indexedDBEnabled?: SortOrder
    cookiesEnabled?: SortOrder
    mediaDevices?: SortOrder
    serviceWorkerEnabled?: SortOrder
    languages?: SortOrder
    doNotTrack?: SortOrder
    pixelDepth?: SortOrder
    canvasActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsFingerprintMinOrderByAggregateInput = {
    id?: SortOrder
    browserName?: SortOrder
    browserMajorVersion?: SortOrder
    browserFullVersion?: SortOrder
    os?: SortOrder
    osVersion?: SortOrder
    device?: SortOrder
    userAgent?: SortOrder
    screenWidth?: SortOrder
    screenHeight?: SortOrder
    pixelRatio?: SortOrder
    colorDepth?: SortOrder
    orientation?: SortOrder
    availWidth?: SortOrder
    availHeight?: SortOrder
    innerWidth?: SortOrder
    innerHeight?: SortOrder
    deviceXDPI?: SortOrder
    deviceYDPI?: SortOrder
    isLandscape?: SortOrder
    isTouchDevice?: SortOrder
    maxTouchPoints?: SortOrder
    deviceMemory?: SortOrder
    hardwareConcurrency?: SortOrder
    isMobile?: SortOrder
    isDesktop?: SortOrder
    isTablet?: SortOrder
    isVirtualMachine?: SortOrder
    isOnline?: SortOrder
    platform?: SortOrder
    language?: SortOrder
    screenReader?: SortOrder
    cpu?: SortOrder
    isHeadless?: SortOrder
    batteryStatus?: SortOrder
    vendor?: SortOrder
    timezone?: SortOrder
    utcOffset?: SortOrder
    utcOffsetFormatted?: SortOrder
    currentTime?: SortOrder
    localeTime?: SortOrder
    isDST?: SortOrder
    localeDateFormat?: SortOrder
    ip?: SortOrder
    type?: SortOrder
    continent_code?: SortOrder
    continent_name?: SortOrder
    country_code?: SortOrder
    country_name?: SortOrder
    region_code?: SortOrder
    region_name?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    location?: SortOrder
    connection_type?: SortOrder
    ip_routing_type?: SortOrder
    msa?: SortOrder
    dma?: SortOrder
    radius?: SortOrder
    plugins?: SortOrder
    localStorageEnabled?: SortOrder
    sessionStorageEnabled?: SortOrder
    indexedDBEnabled?: SortOrder
    cookiesEnabled?: SortOrder
    mediaDevices?: SortOrder
    serviceWorkerEnabled?: SortOrder
    languages?: SortOrder
    doNotTrack?: SortOrder
    pixelDepth?: SortOrder
    canvasActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }

  export type UserCreatefingerprintsInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdatefingerprintsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumTokenTypeFieldUpdateOperationsInput = {
    set?: $Enums.TokenType
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserVerifyTokensDefaultArgs instead
     */
    export type UserVerifyTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserVerifyTokensDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SettingsFingerprintDefaultArgs instead
     */
    export type SettingsFingerprintArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SettingsFingerprintDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TokenDefaultArgs instead
     */
    export type TokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TokenDefaultArgs<ExtArgs>

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