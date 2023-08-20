import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Cursor: any;
  Datetime: any;
  UUID: any;
};

/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
export type BooleanFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  eq?: InputMaybe<Scalars['Boolean']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Boolean']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Boolean']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Boolean']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Boolean']>;
  /** Not equal to the specified value. */
  ne?: InputMaybe<Scalars['Boolean']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Boolean']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** All input for the `changePassword` mutation. */
export type ChangePasswordInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

/** The output of our `changePassword` mutation. */
export type ChangePasswordPayload = {
  __typename?: 'ChangePasswordPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  success?: Maybe<Scalars['Boolean']>;
};

/** All input for the `confirmAccountDeletion` mutation. */
export type ConfirmAccountDeletionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  token: Scalars['String'];
};

/** The output of our `confirmAccountDeletion` mutation. */
export type ConfirmAccountDeletionPayload = {
  __typename?: 'ConfirmAccountDeletionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  success?: Maybe<Scalars['Boolean']>;
};

/** All input for the create `Permission` mutation. */
export type CreatePermissionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Permission` to be created by this mutation. */
  permission: PermissionInput;
};

/** The output of our create `Permission` mutation. */
export type CreatePermissionPayload = {
  __typename?: 'CreatePermissionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Permission` that was created by this mutation. */
  permission?: Maybe<Permission>;
  /** An edge for our `Permission`. May be used by Relay 1. */
  permissionEdge?: Maybe<PermissionsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Permission` mutation. */
export type CreatePermissionPayloadPermissionEdgeArgs = {
  orderBy?: InputMaybe<Array<PermissionsOrderBy>>;
};

/** All input for the create `Role` mutation. */
export type CreateRoleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Role` to be created by this mutation. */
  role: RoleInput;
};

/** The output of our create `Role` mutation. */
export type CreateRolePayload = {
  __typename?: 'CreateRolePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Role` that was created by this mutation. */
  role?: Maybe<Role>;
  /** An edge for our `Role`. May be used by Relay 1. */
  roleEdge?: Maybe<RolesEdge>;
};


/** The output of our create `Role` mutation. */
export type CreateRolePayloadRoleEdgeArgs = {
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};

/** All input for the create `RolePermission` mutation. */
export type CreateRolePermissionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `RolePermission` to be created by this mutation. */
  rolePermission: RolePermissionInput;
};

/** The output of our create `RolePermission` mutation. */
export type CreateRolePermissionPayload = {
  __typename?: 'CreateRolePermissionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Permission` that is related to this `RolePermission`. */
  permission?: Maybe<Permission>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Role` that is related to this `RolePermission`. */
  role?: Maybe<Role>;
  /** The `RolePermission` that was created by this mutation. */
  rolePermission?: Maybe<RolePermission>;
  /** An edge for our `RolePermission`. May be used by Relay 1. */
  rolePermissionEdge?: Maybe<RolePermissionsEdge>;
};


/** The output of our create `RolePermission` mutation. */
export type CreateRolePermissionPayloadRolePermissionEdgeArgs = {
  orderBy?: InputMaybe<Array<RolePermissionsOrderBy>>;
};

/** All input for the create `UserEmail` mutation. */
export type CreateUserEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `UserEmail` to be created by this mutation. */
  userEmail: UserEmailInput;
};

/** The output of our create `UserEmail` mutation. */
export type CreateUserEmailPayload = {
  __typename?: 'CreateUserEmailPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `UserEmail`. */
  user?: Maybe<User>;
  /** The `UserEmail` that was created by this mutation. */
  userEmail?: Maybe<UserEmail>;
  /** An edge for our `UserEmail`. May be used by Relay 1. */
  userEmailEdge?: Maybe<UserEmailsEdge>;
};


/** The output of our create `UserEmail` mutation. */
export type CreateUserEmailPayloadUserEmailEdgeArgs = {
  orderBy?: InputMaybe<Array<UserEmailsOrderBy>>;
};

/** All input for the `deletePermissionByCode` mutation. */
export type DeletePermissionByCodeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  code: Scalars['String'];
};

/** All input for the `deletePermissionByLabel` mutation. */
export type DeletePermissionByLabelInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  label: Scalars['String'];
};

/** All input for the `deletePermissionByName` mutation. */
export type DeletePermissionByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

/** All input for the `deletePermission` mutation. */
export type DeletePermissionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `Permission` mutation. */
export type DeletePermissionPayload = {
  __typename?: 'DeletePermissionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedPermissionNodeId?: Maybe<Scalars['ID']>;
  /** The `Permission` that was deleted by this mutation. */
  permission?: Maybe<Permission>;
  /** An edge for our `Permission`. May be used by Relay 1. */
  permissionEdge?: Maybe<PermissionsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Permission` mutation. */
export type DeletePermissionPayloadPermissionEdgeArgs = {
  orderBy?: InputMaybe<Array<PermissionsOrderBy>>;
};

/** All input for the `deleteRoleByName` mutation. */
export type DeleteRoleByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

/** All input for the `deleteRole` mutation. */
export type DeleteRoleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `Role` mutation. */
export type DeleteRolePayload = {
  __typename?: 'DeleteRolePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedRoleNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Role` that was deleted by this mutation. */
  role?: Maybe<Role>;
  /** An edge for our `Role`. May be used by Relay 1. */
  roleEdge?: Maybe<RolesEdge>;
};


/** The output of our delete `Role` mutation. */
export type DeleteRolePayloadRoleEdgeArgs = {
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};

/** All input for the `deleteRolePermissionByRoleIdAndPermissionId` mutation. */
export type DeleteRolePermissionByRoleIdAndPermissionIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  permissionId: Scalars['UUID'];
  roleId: Scalars['UUID'];
};

/** The output of our delete `RolePermission` mutation. */
export type DeleteRolePermissionPayload = {
  __typename?: 'DeleteRolePermissionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedRolePermissionNodeId?: Maybe<Scalars['ID']>;
  /** Reads a single `Permission` that is related to this `RolePermission`. */
  permission?: Maybe<Permission>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Role` that is related to this `RolePermission`. */
  role?: Maybe<Role>;
  /** The `RolePermission` that was deleted by this mutation. */
  rolePermission?: Maybe<RolePermission>;
  /** An edge for our `RolePermission`. May be used by Relay 1. */
  rolePermissionEdge?: Maybe<RolePermissionsEdge>;
};


/** The output of our delete `RolePermission` mutation. */
export type DeleteRolePermissionPayloadRolePermissionEdgeArgs = {
  orderBy?: InputMaybe<Array<RolePermissionsOrderBy>>;
};

/** All input for the `deleteUserAuthentication` mutation. */
export type DeleteUserAuthenticationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `UserAuthentication` mutation. */
export type DeleteUserAuthenticationPayload = {
  __typename?: 'DeleteUserAuthenticationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedUserAuthenticationNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `UserAuthentication`. */
  user?: Maybe<User>;
  /** The `UserAuthentication` that was deleted by this mutation. */
  userAuthentication?: Maybe<UserAuthentication>;
};

/** All input for the `deleteUserEmail` mutation. */
export type DeleteUserEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `UserEmail` mutation. */
export type DeleteUserEmailPayload = {
  __typename?: 'DeleteUserEmailPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedUserEmailNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `UserEmail`. */
  user?: Maybe<User>;
  /** The `UserEmail` that was deleted by this mutation. */
  userEmail?: Maybe<UserEmail>;
  /** An edge for our `UserEmail`. May be used by Relay 1. */
  userEmailEdge?: Maybe<UserEmailsEdge>;
};


/** The output of our delete `UserEmail` mutation. */
export type DeleteUserEmailPayloadUserEmailEdgeArgs = {
  orderBy?: InputMaybe<Array<UserEmailsOrderBy>>;
};

/** All input for the `forgotPassword` mutation. */
export type ForgotPasswordInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
};

/** The output of our `forgotPassword` mutation. */
export type ForgotPasswordPayload = {
  __typename?: 'ForgotPasswordPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

export type LoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type LoginPayload = {
  __typename?: 'LoginPayload';
  token?: Maybe<Scalars['String']>;
  user: User;
};

export type LogoutPayload = {
  __typename?: 'LogoutPayload';
  success?: Maybe<Scalars['Boolean']>;
};

/** All input for the `makeEmailPrimary` mutation. */
export type MakeEmailPrimaryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  emailId: Scalars['UUID'];
};

/** The output of our `makeEmailPrimary` mutation. */
export type MakeEmailPrimaryPayload = {
  __typename?: 'MakeEmailPrimaryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `UserEmail`. */
  user?: Maybe<User>;
  userEmail?: Maybe<UserEmail>;
  /** An edge for our `UserEmail`. May be used by Relay 1. */
  userEmailEdge?: Maybe<UserEmailsEdge>;
};


/** The output of our `makeEmailPrimary` mutation. */
export type MakeEmailPrimaryPayloadUserEmailEdgeArgs = {
  orderBy?: InputMaybe<Array<UserEmailsOrderBy>>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Enter your old password and a new password to change your password. */
  changePassword?: Maybe<ChangePasswordPayload>;
  /** If you're certain you want to delete your account, use `requestAccountDeletion` to request an account deletion token, and then supply the token through this mutation to complete account deletion. */
  confirmAccountDeletion?: Maybe<ConfirmAccountDeletionPayload>;
  /** Creates a single `Permission`. */
  createPermission?: Maybe<CreatePermissionPayload>;
  /** Creates a single `Role`. */
  createRole?: Maybe<CreateRolePayload>;
  /** Creates a single `RolePermission`. */
  createRolePermission?: Maybe<CreateRolePermissionPayload>;
  /** Creates a single `UserEmail`. */
  createUserEmail?: Maybe<CreateUserEmailPayload>;
  /** Deletes a single `Permission` using a unique key. */
  deletePermission?: Maybe<DeletePermissionPayload>;
  /** Deletes a single `Permission` using a unique key. */
  deletePermissionByCode?: Maybe<DeletePermissionPayload>;
  /** Deletes a single `Permission` using a unique key. */
  deletePermissionByLabel?: Maybe<DeletePermissionPayload>;
  /** Deletes a single `Permission` using a unique key. */
  deletePermissionByName?: Maybe<DeletePermissionPayload>;
  /** Deletes a single `Role` using a unique key. */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Deletes a single `Role` using a unique key. */
  deleteRoleByName?: Maybe<DeleteRolePayload>;
  /** Deletes a single `RolePermission` using a unique key. */
  deleteRolePermissionByRoleIdAndPermissionId?: Maybe<DeleteRolePermissionPayload>;
  /** Deletes a single `UserAuthentication` using a unique key. */
  deleteUserAuthentication?: Maybe<DeleteUserAuthenticationPayload>;
  /** Deletes a single `UserEmail` using a unique key. */
  deleteUserEmail?: Maybe<DeleteUserEmailPayload>;
  /** If you've forgotten your password, give us one of your email addresses and we'll send you a reset token. Note this only works if you have added an email address! */
  forgotPassword?: Maybe<ForgotPasswordPayload>;
  /** Use this mutation to log in to your account; this login uses sessions so you do not need to take further action. */
  login?: Maybe<LoginPayload>;
  /** Use this mutation to logout from your account. Don't forget to clear the client state! */
  logout?: Maybe<LogoutPayload>;
  /** Your primary email is where we'll notify of account events; other emails may be used for discovery or login. Use this when you're changing your email address. */
  makeEmailPrimary?: Maybe<MakeEmailPrimaryPayload>;
  /** Use this mutation to create an account on our system. This may only be used if you are logged out. */
  register?: Maybe<RegisterPayload>;
  /** Begin the account deletion flow by requesting the confirmation email */
  requestAccountDeletion?: Maybe<RequestAccountDeletionPayload>;
  /** If you didn't receive the verification code for this email, we can resend it. We silently cap the rate of resends on the backend, so calls to this function may not result in another email being sent if it has been called recently. */
  resendEmailVerificationCode?: Maybe<ResendEmailVerificationCodePayload>;
  /** After triggering forgotPassword, you'll be sent a reset token. Combine this with your user ID and a new password to reset your password. */
  resetPassword?: Maybe<ResetPasswordPayload>;
  /** Updates a single `Permission` using a unique key and a patch. */
  updatePermission?: Maybe<UpdatePermissionPayload>;
  /** Updates a single `Permission` using a unique key and a patch. */
  updatePermissionByCode?: Maybe<UpdatePermissionPayload>;
  /** Updates a single `Permission` using a unique key and a patch. */
  updatePermissionByLabel?: Maybe<UpdatePermissionPayload>;
  /** Updates a single `Permission` using a unique key and a patch. */
  updatePermissionByName?: Maybe<UpdatePermissionPayload>;
  /** Updates a single `Role` using a unique key and a patch. */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Updates a single `Role` using a unique key and a patch. */
  updateRoleByName?: Maybe<UpdateRolePayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserByUsername?: Maybe<UpdateUserPayload>;
  /** Once you have received a verification token for your email, you may call this mutation with that token to make your email verified. */
  verifyEmail?: Maybe<VerifyEmailPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationConfirmAccountDeletionArgs = {
  input: ConfirmAccountDeletionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePermissionArgs = {
  input: CreatePermissionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRolePermissionArgs = {
  input: CreateRolePermissionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserEmailArgs = {
  input: CreateUserEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePermissionArgs = {
  input: DeletePermissionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePermissionByCodeArgs = {
  input: DeletePermissionByCodeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePermissionByLabelArgs = {
  input: DeletePermissionByLabelInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePermissionByNameArgs = {
  input: DeletePermissionByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRoleArgs = {
  input: DeleteRoleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRoleByNameArgs = {
  input: DeleteRoleByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRolePermissionByRoleIdAndPermissionIdArgs = {
  input: DeleteRolePermissionByRoleIdAndPermissionIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserAuthenticationArgs = {
  input: DeleteUserAuthenticationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserEmailArgs = {
  input: DeleteUserEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationLoginArgs = {
  input: LoginInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationMakeEmailPrimaryArgs = {
  input: MakeEmailPrimaryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterArgs = {
  input: RegisterInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationRequestAccountDeletionArgs = {
  input: RequestAccountDeletionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationResendEmailVerificationCodeArgs = {
  input: ResendEmailVerificationCodeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePermissionArgs = {
  input: UpdatePermissionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePermissionByCodeArgs = {
  input: UpdatePermissionByCodeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePermissionByLabelArgs = {
  input: UpdatePermissionByLabelInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePermissionByNameArgs = {
  input: UpdatePermissionByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRoleArgs = {
  input: UpdateRoleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRoleByNameArgs = {
  input: UpdateRoleByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByUsernameArgs = {
  input: UpdateUserByUsernameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationVerifyEmailArgs = {
  input: VerifyEmailInput;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

export type Permission = {
  __typename?: 'Permission';
  code: Scalars['String'];
  createdAt: Scalars['Datetime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  label: Scalars['String'];
  name: Scalars['String'];
  /** Reads and enables pagination through a set of `RolePermission`. */
  rolePermissions: RolePermissionsConnection;
  /** Reads and enables pagination through a set of `Role`. */
  rolesByRolePermissionPermissionIdAndRoleId: PermissionRolesByRolePermissionPermissionIdAndRoleIdManyToManyConnection;
  updatedAt: Scalars['Datetime'];
};


export type PermissionRolePermissionsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RolePermissionCondition>;
  filter?: InputMaybe<RolePermissionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RolePermissionsOrderBy>>;
};


export type PermissionRolesByRolePermissionPermissionIdAndRoleIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RoleCondition>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};

/**
 * A condition to be used against `Permission` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type PermissionCondition = {
  /** Checks for equality with the object’s `code` field. */
  code?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `label` field. */
  label?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `Permission` object types. All fields are combined with a logical ‘and.’ */
export type PermissionFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<PermissionFilter>>;
  /** Filter by the object’s `code` field. */
  code?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `label` field. */
  label?: InputMaybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<PermissionFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<PermissionFilter>>;
  /** Filter by the object’s `rolePermissions` relation. */
  rolePermissions?: InputMaybe<PermissionToManyRolePermissionFilter>;
  /** Some related `rolePermissions` exist. */
  rolePermissionsExist?: InputMaybe<Scalars['Boolean']>;
};

/** An input for mutations affecting `Permission` */
export type PermissionInput = {
  code: Scalars['String'];
  createdAt?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  label: Scalars['String'];
  name: Scalars['String'];
  rolePermissions?: InputMaybe<RolePermissionPermissionIdFkeyInverseInput>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** The fields on `permission` to look up the row to update. */
export type PermissionOnRolePermissionForRolePermissionPermissionIdFkeyUsingPermissionsCodeKeyUpdate = {
  code: Scalars['String'];
  /** An object where the defined keys will be set on the `permission` being updated. */
  patch: UpdatePermissionOnRolePermissionForRolePermissionPermissionIdFkeyPatch;
};

/** The fields on `permission` to look up the row to update. */
export type PermissionOnRolePermissionForRolePermissionPermissionIdFkeyUsingPermissionsLabelKeyUpdate = {
  label: Scalars['String'];
  /** An object where the defined keys will be set on the `permission` being updated. */
  patch: UpdatePermissionOnRolePermissionForRolePermissionPermissionIdFkeyPatch;
};

/** The fields on `permission` to look up the row to update. */
export type PermissionOnRolePermissionForRolePermissionPermissionIdFkeyUsingPermissionsNameKeyUpdate = {
  name: Scalars['String'];
  /** An object where the defined keys will be set on the `permission` being updated. */
  patch: UpdatePermissionOnRolePermissionForRolePermissionPermissionIdFkeyPatch;
};

/** The fields on `permission` to look up the row to update. */
export type PermissionOnRolePermissionForRolePermissionPermissionIdFkeyUsingPermissionsPkeyUpdate = {
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `permission` being updated. */
  patch: UpdatePermissionOnRolePermissionForRolePermissionPermissionIdFkeyPatch;
};

/** Represents an update to a `Permission`. Fields that are set will be updated. */
export type PermissionPatch = {
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  label?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  rolePermissions?: InputMaybe<RolePermissionPermissionIdFkeyInverseInput>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** The fields on `permission` to look up the row to connect. */
export type PermissionPermissionsCodeKeyConnect = {
  code: Scalars['String'];
};

/** The fields on `permission` to look up the row to delete. */
export type PermissionPermissionsCodeKeyDelete = {
  code: Scalars['String'];
};

/** The fields on `permission` to look up the row to connect. */
export type PermissionPermissionsLabelKeyConnect = {
  label: Scalars['String'];
};

/** The fields on `permission` to look up the row to delete. */
export type PermissionPermissionsLabelKeyDelete = {
  label: Scalars['String'];
};

/** The fields on `permission` to look up the row to connect. */
export type PermissionPermissionsNameKeyConnect = {
  name: Scalars['String'];
};

/** The fields on `permission` to look up the row to delete. */
export type PermissionPermissionsNameKeyDelete = {
  name: Scalars['String'];
};

/** The fields on `permission` to look up the row to connect. */
export type PermissionPermissionsPkeyConnect = {
  id: Scalars['UUID'];
};

/** The fields on `permission` to look up the row to delete. */
export type PermissionPermissionsPkeyDelete = {
  id: Scalars['UUID'];
};

/** A connection to a list of `Role` values, with data from `RolePermission`. */
export type PermissionRolesByRolePermissionPermissionIdAndRoleIdManyToManyConnection = {
  __typename?: 'PermissionRolesByRolePermissionPermissionIdAndRoleIdManyToManyConnection';
  /** A list of edges which contains the `Role`, info from the `RolePermission`, and the cursor to aid in pagination. */
  edges: Array<PermissionRolesByRolePermissionPermissionIdAndRoleIdManyToManyEdge>;
  /** A list of `Role` objects. */
  nodes: Array<Role>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Role` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Role` edge in the connection, with data from `RolePermission`. */
export type PermissionRolesByRolePermissionPermissionIdAndRoleIdManyToManyEdge = {
  __typename?: 'PermissionRolesByRolePermissionPermissionIdAndRoleIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Role` at the end of the edge. */
  node: Role;
};

/** A filter to be used against many `RolePermission` object types. All fields are combined with a logical ‘and.’ */
export type PermissionToManyRolePermissionFilter = {
  /** Every related `RolePermission` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<RolePermissionFilter>;
  /** No related `RolePermission` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<RolePermissionFilter>;
  /** Some related `RolePermission` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<RolePermissionFilter>;
};

/** A connection to a list of `Permission` values. */
export type PermissionsConnection = {
  __typename?: 'PermissionsConnection';
  /** A list of edges which contains the `Permission` and cursor to aid in pagination. */
  edges: Array<PermissionsEdge>;
  /** A list of `Permission` objects. */
  nodes: Array<Permission>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Permission` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Permission` edge in the connection. */
export type PermissionsEdge = {
  __typename?: 'PermissionsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Permission` at the end of the edge. */
  node: Permission;
};

/** Methods to use when ordering `Permission`. */
export enum PermissionsOrderBy {
  CodeAsc = 'CODE_ASC',
  CodeDesc = 'CODE_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LabelAsc = 'LABEL_ASC',
  LabelDesc = 'LABEL_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The root query type which gives access points into the data universe. */
export type Query = {
  __typename?: 'Query';
  /** The currently logged in user (or null if not logged in). */
  currentUser?: Maybe<User>;
  permission?: Maybe<Permission>;
  permissionByCode?: Maybe<Permission>;
  permissionByLabel?: Maybe<Permission>;
  permissionByName?: Maybe<Permission>;
  /** Reads and enables pagination through a set of `Permission`. */
  permissions?: Maybe<PermissionsConnection>;
  role?: Maybe<Role>;
  roleByName?: Maybe<Role>;
  rolePermissionByRoleIdAndPermissionId?: Maybe<RolePermission>;
  /** Reads and enables pagination through a set of `RolePermission`. */
  rolePermissions?: Maybe<RolePermissionsConnection>;
  /** Reads and enables pagination through a set of `Role`. */
  roles?: Maybe<RolesConnection>;
  user?: Maybe<User>;
  userAuthentication?: Maybe<UserAuthentication>;
  userByUsername?: Maybe<User>;
  userEmail?: Maybe<UserEmail>;
  /** Reads and enables pagination through a set of `User`. */
  users?: Maybe<UsersConnection>;
};


/** The root query type which gives access points into the data universe. */
export type QueryPermissionArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPermissionByCodeArgs = {
  code: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPermissionByLabelArgs = {
  label: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPermissionByNameArgs = {
  name: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPermissionsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PermissionCondition>;
  filter?: InputMaybe<PermissionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PermissionsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryRoleArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRoleByNameArgs = {
  name: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRolePermissionByRoleIdAndPermissionIdArgs = {
  permissionId: Scalars['UUID'];
  roleId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRolePermissionsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RolePermissionCondition>;
  filter?: InputMaybe<RolePermissionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RolePermissionsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryRolesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RoleCondition>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserAuthenticationArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByUsernameArgs = {
  username: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserEmailArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<UserCondition>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

export type RegisterInput = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  roleId?: InputMaybe<Scalars['UUID']>;
  userTypeId?: InputMaybe<Scalars['UUID']>;
  username: Scalars['String'];
};

export type RegisterPayload = {
  __typename?: 'RegisterPayload';
  token?: Maybe<Scalars['String']>;
  user: User;
};

/** All input for the `requestAccountDeletion` mutation. */
export type RequestAccountDeletionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our `requestAccountDeletion` mutation. */
export type RequestAccountDeletionPayload = {
  __typename?: 'RequestAccountDeletionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  success?: Maybe<Scalars['Boolean']>;
};

/** All input for the `resendEmailVerificationCode` mutation. */
export type ResendEmailVerificationCodeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  emailId: Scalars['UUID'];
};

/** The output of our `resendEmailVerificationCode` mutation. */
export type ResendEmailVerificationCodePayload = {
  __typename?: 'ResendEmailVerificationCodePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  success?: Maybe<Scalars['Boolean']>;
};

/** All input for the `resetPassword` mutation. */
export type ResetPasswordInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  newPassword: Scalars['String'];
  resetToken: Scalars['String'];
  userId: Scalars['UUID'];
};

/** The output of our `resetPassword` mutation. */
export type ResetPasswordPayload = {
  __typename?: 'ResetPasswordPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  success?: Maybe<Scalars['Boolean']>;
};

export type Role = {
  __typename?: 'Role';
  createdAt: Scalars['Datetime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  name: Scalars['String'];
  /** Reads and enables pagination through a set of `Permission`. */
  permissionsByRolePermissionRoleIdAndPermissionId: RolePermissionsByRolePermissionRoleIdAndPermissionIdManyToManyConnection;
  /** Reads and enables pagination through a set of `RolePermission`. */
  rolePermissions: RolePermissionsConnection;
  updatedAt: Scalars['Datetime'];
  /** Reads and enables pagination through a set of `User`. */
  users: UsersConnection;
};


export type RolePermissionsByRolePermissionRoleIdAndPermissionIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PermissionCondition>;
  filter?: InputMaybe<PermissionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PermissionsOrderBy>>;
};


export type RoleRolePermissionsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RolePermissionCondition>;
  filter?: InputMaybe<RolePermissionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RolePermissionsOrderBy>>;
};


export type RoleUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<UserCondition>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** A condition to be used against `Role` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type RoleCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `Role` object types. All fields are combined with a logical ‘and.’ */
export type RoleFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<RoleFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<RoleFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<RoleFilter>>;
  /** Filter by the object’s `rolePermissions` relation. */
  rolePermissions?: InputMaybe<RoleToManyRolePermissionFilter>;
  /** Some related `rolePermissions` exist. */
  rolePermissionsExist?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the object’s `users` relation. */
  users?: InputMaybe<RoleToManyUserFilter>;
  /** Some related `users` exist. */
  usersExist?: InputMaybe<Scalars['Boolean']>;
};

/** An input for mutations affecting `Role` */
export type RoleInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  name: Scalars['String'];
  rolePermissions?: InputMaybe<RolePermissionRoleIdFkeyInverseInput>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  users?: InputMaybe<UserRoleIdFkInverseInput>;
};

/** The fields on `role` to look up the row to update. */
export type RoleOnRolePermissionForRolePermissionRoleIdFkeyUsingRolesNameKeyUpdate = {
  name: Scalars['String'];
  /** An object where the defined keys will be set on the `role` being updated. */
  patch: UpdateRoleOnRolePermissionForRolePermissionRoleIdFkeyPatch;
};

/** The fields on `role` to look up the row to update. */
export type RoleOnRolePermissionForRolePermissionRoleIdFkeyUsingRolesPkeyUpdate = {
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `role` being updated. */
  patch: UpdateRoleOnRolePermissionForRolePermissionRoleIdFkeyPatch;
};

/** The fields on `role` to look up the row to update. */
export type RoleOnUserForUserRoleIdFkUsingRolesNameKeyUpdate = {
  name: Scalars['String'];
  /** An object where the defined keys will be set on the `role` being updated. */
  patch: UpdateRoleOnUserForUserRoleIdFkPatch;
};

/** The fields on `role` to look up the row to update. */
export type RoleOnUserForUserRoleIdFkUsingRolesPkeyUpdate = {
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `role` being updated. */
  patch: UpdateRoleOnUserForUserRoleIdFkPatch;
};

/** Represents an update to a `Role`. Fields that are set will be updated. */
export type RolePatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  rolePermissions?: InputMaybe<RolePermissionRoleIdFkeyInverseInput>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  users?: InputMaybe<UserRoleIdFkInverseInput>;
};

export type RolePermission = {
  __typename?: 'RolePermission';
  /** Reads a single `Permission` that is related to this `RolePermission`. */
  permission?: Maybe<Permission>;
  permissionId?: Maybe<Scalars['UUID']>;
  /** Reads a single `Role` that is related to this `RolePermission`. */
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars['UUID']>;
};

/**
 * A condition to be used against `RolePermission` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type RolePermissionCondition = {
  /** Checks for equality with the object’s `permissionId` field. */
  permissionId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `roleId` field. */
  roleId?: InputMaybe<Scalars['UUID']>;
};

/** A filter to be used against `RolePermission` object types. All fields are combined with a logical ‘and.’ */
export type RolePermissionFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<RolePermissionFilter>>;
  /** Negates the expression. */
  not?: InputMaybe<RolePermissionFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<RolePermissionFilter>>;
  /** Filter by the object’s `permission` relation. */
  permission?: InputMaybe<PermissionFilter>;
  /** A related `permission` exists. */
  permissionExists?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the object’s `permissionId` field. */
  permissionId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `role` relation. */
  role?: InputMaybe<RoleFilter>;
  /** A related `role` exists. */
  roleExists?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the object’s `roleId` field. */
  roleId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `RolePermission` */
export type RolePermissionInput = {
  permission?: InputMaybe<RolePermissionPermissionIdFkeyInput>;
  permissionId?: InputMaybe<Scalars['UUID']>;
  role?: InputMaybe<RolePermissionRoleIdFkeyInput>;
  roleId?: InputMaybe<Scalars['UUID']>;
};

/** The fields on `rolePermission` to look up the row to update. */
export type RolePermissionOnRolePermissionForRolePermissionPermissionIdFkeyUsingUniqRolePermissionsUpdate = {
  /** An object where the defined keys will be set on the `rolePermission` being updated. */
  patch: UpdateRolePermissionOnRolePermissionForRolePermissionPermissionIdFkeyPatch;
  permissionId: Scalars['UUID'];
  roleId: Scalars['UUID'];
};

/** The fields on `rolePermission` to look up the row to update. */
export type RolePermissionOnRolePermissionForRolePermissionRoleIdFkeyUsingUniqRolePermissionsUpdate = {
  /** An object where the defined keys will be set on the `rolePermission` being updated. */
  patch: UpdateRolePermissionOnRolePermissionForRolePermissionRoleIdFkeyPatch;
  permissionId: Scalars['UUID'];
  roleId: Scalars['UUID'];
};

/** Input for the nested mutation of `permission` in the `RolePermissionInput` mutation. */
export type RolePermissionPermissionIdFkeyInput = {
  /** The primary key(s) for `permission` for the far side of the relationship. */
  connectByCode?: InputMaybe<PermissionPermissionsCodeKeyConnect>;
  /** The primary key(s) for `permission` for the far side of the relationship. */
  connectById?: InputMaybe<PermissionPermissionsPkeyConnect>;
  /** The primary key(s) for `permission` for the far side of the relationship. */
  connectByLabel?: InputMaybe<PermissionPermissionsLabelKeyConnect>;
  /** The primary key(s) for `permission` for the far side of the relationship. */
  connectByName?: InputMaybe<PermissionPermissionsNameKeyConnect>;
  /** A `PermissionInput` object that will be created and connected to this object. */
  create?: InputMaybe<RolePermissionPermissionIdFkeyPermissionsCreateInput>;
  /** The primary key(s) for `permission` for the far side of the relationship. */
  deleteByCode?: InputMaybe<PermissionPermissionsCodeKeyDelete>;
  /** The primary key(s) for `permission` for the far side of the relationship. */
  deleteById?: InputMaybe<PermissionPermissionsPkeyDelete>;
  /** The primary key(s) for `permission` for the far side of the relationship. */
  deleteByLabel?: InputMaybe<PermissionPermissionsLabelKeyDelete>;
  /** The primary key(s) for `permission` for the far side of the relationship. */
  deleteByName?: InputMaybe<PermissionPermissionsNameKeyDelete>;
  /** The primary key(s) and patch data for `permission` for the far side of the relationship. */
  updateByCode?: InputMaybe<PermissionOnRolePermissionForRolePermissionPermissionIdFkeyUsingPermissionsCodeKeyUpdate>;
  /** The primary key(s) and patch data for `permission` for the far side of the relationship. */
  updateById?: InputMaybe<PermissionOnRolePermissionForRolePermissionPermissionIdFkeyUsingPermissionsPkeyUpdate>;
  /** The primary key(s) and patch data for `permission` for the far side of the relationship. */
  updateByLabel?: InputMaybe<PermissionOnRolePermissionForRolePermissionPermissionIdFkeyUsingPermissionsLabelKeyUpdate>;
  /** The primary key(s) and patch data for `permission` for the far side of the relationship. */
  updateByName?: InputMaybe<PermissionOnRolePermissionForRolePermissionPermissionIdFkeyUsingPermissionsNameKeyUpdate>;
};

/** Input for the nested mutation of `rolePermission` in the `PermissionInput` mutation. */
export type RolePermissionPermissionIdFkeyInverseInput = {
  /** The primary key(s) for `rolePermission` for the far side of the relationship. */
  connectByRoleIdAndPermissionId?: InputMaybe<Array<RolePermissionUniqRolePermissionsConnect>>;
  /** A `RolePermissionInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<RolePermissionPermissionIdFkeyRolePermissionsCreateInput>>;
  /** The primary key(s) and patch data for `rolePermission` for the far side of the relationship. */
  updateByRoleIdAndPermissionId?: InputMaybe<Array<RolePermissionOnRolePermissionForRolePermissionPermissionIdFkeyUsingUniqRolePermissionsUpdate>>;
};

/** The `permission` to be created by this mutation. */
export type RolePermissionPermissionIdFkeyPermissionsCreateInput = {
  code: Scalars['String'];
  createdAt?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  label: Scalars['String'];
  name: Scalars['String'];
  rolePermissions?: InputMaybe<RolePermissionPermissionIdFkeyInverseInput>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** The `rolePermission` to be created by this mutation. */
export type RolePermissionPermissionIdFkeyRolePermissionsCreateInput = {
  permission?: InputMaybe<RolePermissionPermissionIdFkeyInput>;
  role?: InputMaybe<RolePermissionRoleIdFkeyInput>;
  roleId?: InputMaybe<Scalars['UUID']>;
};

/** Input for the nested mutation of `role` in the `RolePermissionInput` mutation. */
export type RolePermissionRoleIdFkeyInput = {
  /** The primary key(s) for `role` for the far side of the relationship. */
  connectById?: InputMaybe<RoleRolesPkeyConnect>;
  /** The primary key(s) for `role` for the far side of the relationship. */
  connectByName?: InputMaybe<RoleRolesNameKeyConnect>;
  /** A `RoleInput` object that will be created and connected to this object. */
  create?: InputMaybe<RolePermissionRoleIdFkeyRolesCreateInput>;
  /** The primary key(s) for `role` for the far side of the relationship. */
  deleteById?: InputMaybe<RoleRolesPkeyDelete>;
  /** The primary key(s) for `role` for the far side of the relationship. */
  deleteByName?: InputMaybe<RoleRolesNameKeyDelete>;
  /** The primary key(s) and patch data for `role` for the far side of the relationship. */
  updateById?: InputMaybe<RoleOnRolePermissionForRolePermissionRoleIdFkeyUsingRolesPkeyUpdate>;
  /** The primary key(s) and patch data for `role` for the far side of the relationship. */
  updateByName?: InputMaybe<RoleOnRolePermissionForRolePermissionRoleIdFkeyUsingRolesNameKeyUpdate>;
};

/** Input for the nested mutation of `rolePermission` in the `RoleInput` mutation. */
export type RolePermissionRoleIdFkeyInverseInput = {
  /** The primary key(s) for `rolePermission` for the far side of the relationship. */
  connectByRoleIdAndPermissionId?: InputMaybe<Array<RolePermissionUniqRolePermissionsConnect>>;
  /** A `RolePermissionInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<RolePermissionRoleIdFkeyRolePermissionsCreateInput>>;
  /** The primary key(s) and patch data for `rolePermission` for the far side of the relationship. */
  updateByRoleIdAndPermissionId?: InputMaybe<Array<RolePermissionOnRolePermissionForRolePermissionRoleIdFkeyUsingUniqRolePermissionsUpdate>>;
};

/** The `rolePermission` to be created by this mutation. */
export type RolePermissionRoleIdFkeyRolePermissionsCreateInput = {
  permission?: InputMaybe<RolePermissionPermissionIdFkeyInput>;
  permissionId?: InputMaybe<Scalars['UUID']>;
  role?: InputMaybe<RolePermissionRoleIdFkeyInput>;
};

/** The `role` to be created by this mutation. */
export type RolePermissionRoleIdFkeyRolesCreateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  name: Scalars['String'];
  rolePermissions?: InputMaybe<RolePermissionRoleIdFkeyInverseInput>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  users?: InputMaybe<UserRoleIdFkInverseInput>;
};

/** The fields on `rolePermission` to look up the row to connect. */
export type RolePermissionUniqRolePermissionsConnect = {
  permissionId: Scalars['UUID'];
  roleId: Scalars['UUID'];
};

/** A connection to a list of `Permission` values, with data from `RolePermission`. */
export type RolePermissionsByRolePermissionRoleIdAndPermissionIdManyToManyConnection = {
  __typename?: 'RolePermissionsByRolePermissionRoleIdAndPermissionIdManyToManyConnection';
  /** A list of edges which contains the `Permission`, info from the `RolePermission`, and the cursor to aid in pagination. */
  edges: Array<RolePermissionsByRolePermissionRoleIdAndPermissionIdManyToManyEdge>;
  /** A list of `Permission` objects. */
  nodes: Array<Permission>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Permission` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Permission` edge in the connection, with data from `RolePermission`. */
export type RolePermissionsByRolePermissionRoleIdAndPermissionIdManyToManyEdge = {
  __typename?: 'RolePermissionsByRolePermissionRoleIdAndPermissionIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Permission` at the end of the edge. */
  node: Permission;
};

/** A connection to a list of `RolePermission` values. */
export type RolePermissionsConnection = {
  __typename?: 'RolePermissionsConnection';
  /** A list of edges which contains the `RolePermission` and cursor to aid in pagination. */
  edges: Array<RolePermissionsEdge>;
  /** A list of `RolePermission` objects. */
  nodes: Array<RolePermission>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `RolePermission` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `RolePermission` edge in the connection. */
export type RolePermissionsEdge = {
  __typename?: 'RolePermissionsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `RolePermission` at the end of the edge. */
  node: RolePermission;
};

/** Methods to use when ordering `RolePermission`. */
export enum RolePermissionsOrderBy {
  Natural = 'NATURAL',
  PermissionIdAsc = 'PERMISSION_ID_ASC',
  PermissionIdDesc = 'PERMISSION_ID_DESC',
  RoleIdAsc = 'ROLE_ID_ASC',
  RoleIdDesc = 'ROLE_ID_DESC'
}

/** The fields on `role` to look up the row to connect. */
export type RoleRolesNameKeyConnect = {
  name: Scalars['String'];
};

/** The fields on `role` to look up the row to delete. */
export type RoleRolesNameKeyDelete = {
  name: Scalars['String'];
};

/** The fields on `role` to look up the row to connect. */
export type RoleRolesPkeyConnect = {
  id: Scalars['UUID'];
};

/** The fields on `role` to look up the row to delete. */
export type RoleRolesPkeyDelete = {
  id: Scalars['UUID'];
};

/** A filter to be used against many `RolePermission` object types. All fields are combined with a logical ‘and.’ */
export type RoleToManyRolePermissionFilter = {
  /** Every related `RolePermission` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<RolePermissionFilter>;
  /** No related `RolePermission` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<RolePermissionFilter>;
  /** Some related `RolePermission` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<RolePermissionFilter>;
};

/** A filter to be used against many `User` object types. All fields are combined with a logical ‘and.’ */
export type RoleToManyUserFilter = {
  /** Every related `User` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<UserFilter>;
  /** No related `User` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<UserFilter>;
  /** Some related `User` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<UserFilter>;
};

/** A connection to a list of `Role` values. */
export type RolesConnection = {
  __typename?: 'RolesConnection';
  /** A list of edges which contains the `Role` and cursor to aid in pagination. */
  edges: Array<RolesEdge>;
  /** A list of `Role` objects. */
  nodes: Array<Role>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Role` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Role` edge in the connection. */
export type RolesEdge = {
  __typename?: 'RolesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Role` at the end of the edge. */
  node: Role;
};

/** Methods to use when ordering `Role`. */
export enum RolesOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value. */
  eq?: InputMaybe<Scalars['String']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['String']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['String']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: InputMaybe<Scalars['String']>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['String']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value. */
  ne?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['String']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

/** A filter to be used against UUID fields. All fields are combined with a logical ‘and.’ */
export type UuidFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['UUID']>;
  /** Equal to the specified value. */
  eq?: InputMaybe<Scalars['UUID']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['UUID']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['UUID']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['UUID']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['UUID']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['UUID']>;
  /** Not equal to the specified value. */
  ne?: InputMaybe<Scalars['UUID']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['UUID']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['UUID']>>;
};

/** All input for the `updatePermissionByCode` mutation. */
export type UpdatePermissionByCodeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  code: Scalars['String'];
  /** An object where the defined keys will be set on the `Permission` being updated. */
  patch: PermissionPatch;
};

/** All input for the `updatePermissionByLabel` mutation. */
export type UpdatePermissionByLabelInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  label: Scalars['String'];
  /** An object where the defined keys will be set on the `Permission` being updated. */
  patch: PermissionPatch;
};

/** All input for the `updatePermissionByName` mutation. */
export type UpdatePermissionByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  /** An object where the defined keys will be set on the `Permission` being updated. */
  patch: PermissionPatch;
};

/** All input for the `updatePermission` mutation. */
export type UpdatePermissionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `Permission` being updated. */
  patch: PermissionPatch;
};

/** The output of our update `Permission` mutation. */
export type UpdatePermissionPayload = {
  __typename?: 'UpdatePermissionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Permission` that was updated by this mutation. */
  permission?: Maybe<Permission>;
  /** An edge for our `Permission`. May be used by Relay 1. */
  permissionEdge?: Maybe<PermissionsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Permission` mutation. */
export type UpdatePermissionPayloadPermissionEdgeArgs = {
  orderBy?: InputMaybe<Array<PermissionsOrderBy>>;
};

/** All input for the `updateRoleByName` mutation. */
export type UpdateRoleByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  /** An object where the defined keys will be set on the `Role` being updated. */
  patch: RolePatch;
};

/** All input for the `updateRole` mutation. */
export type UpdateRoleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `Role` being updated. */
  patch: RolePatch;
};

/** The output of our update `Role` mutation. */
export type UpdateRolePayload = {
  __typename?: 'UpdateRolePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Role` that was updated by this mutation. */
  role?: Maybe<Role>;
  /** An edge for our `Role`. May be used by Relay 1. */
  roleEdge?: Maybe<RolesEdge>;
};


/** The output of our update `Role` mutation. */
export type UpdateRolePayloadRoleEdgeArgs = {
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};

/** All input for the `updateUserByUsername` mutation. */
export type UpdateUserByUsernameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
  /** Public-facing username (or 'handle') of the user. */
  username: Scalars['String'];
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Unique identifier for the user. */
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Role` that is related to this `User`. */
  role?: Maybe<Role>;
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** A user who can log in to the application. */
export type User = {
  __typename?: 'User';
  /** Optional avatar URL. */
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt: Scalars['Datetime'];
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Unique identifier for the user. */
  id: Scalars['UUID'];
  /** If true, the user has elevated privileges. */
  isAdmin: Scalars['Boolean'];
  isVerified: Scalars['Boolean'];
  /** Public-facing name (or pseudonym) of the user. */
  name?: Maybe<Scalars['String']>;
  /** Reads a single `Role` that is related to this `User`. */
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars['UUID']>;
  updatedAt: Scalars['Datetime'];
  /** Reads and enables pagination through a set of `UserAuthentication`. */
  userAuthenticationsList: Array<UserAuthentication>;
  /** Reads and enables pagination through a set of `UserEmail`. */
  userEmails: UserEmailsConnection;
  /** Public-facing username (or 'handle') of the user. */
  username: Scalars['String'];
};


/** A user who can log in to the application. */
export type UserUserAuthenticationsListArgs = {
  condition?: InputMaybe<UserAuthenticationCondition>;
  filter?: InputMaybe<UserAuthenticationFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserAuthenticationsOrderBy>>;
};


/** A user who can log in to the application. */
export type UserUserEmailsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<UserEmailCondition>;
  filter?: InputMaybe<UserEmailFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserEmailsOrderBy>>;
};

/** Contains information about the login providers this user has used, so that they may disconnect them should they wish. */
export type UserAuthentication = {
  __typename?: 'UserAuthentication';
  createdAt: Scalars['Datetime'];
  id: Scalars['UUID'];
  /** A unique identifier for the user within the login service. */
  identifier: Scalars['String'];
  /** The login service used, e.g. `twitter` or `github`. */
  service: Scalars['String'];
  updatedAt: Scalars['Datetime'];
  /** Reads a single `User` that is related to this `UserAuthentication`. */
  user?: Maybe<User>;
  userId: Scalars['UUID'];
};

/**
 * A condition to be used against `UserAuthentication` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type UserAuthenticationCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `service` field. */
  service?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']>;
};

/** A filter to be used against `UserAuthentication` object types. All fields are combined with a logical ‘and.’ */
export type UserAuthenticationFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<UserAuthenticationFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<UserAuthenticationFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<UserAuthenticationFilter>>;
  /** Filter by the object’s `service` field. */
  service?: InputMaybe<StringFilter>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<UuidFilter>;
};

/** The fields on `userAuthentication` to look up the row to update. */
export type UserAuthenticationOnUserAuthenticationForUserAuthenticationsUserIdFkeyUsingUserAuthenticationsPkeyUpdate = {
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `userAuthentication` being updated. */
  patch: UpdateUserAuthenticationOnUserAuthenticationForUserAuthenticationsUserIdFkeyPatch;
};

/** The fields on `userAuthentication` to look up the row to connect. */
export type UserAuthenticationUserAuthenticationsPkeyConnect = {
  id: Scalars['UUID'];
};

/** The fields on `userAuthentication` to look up the row to delete. */
export type UserAuthenticationUserAuthenticationsPkeyDelete = {
  id: Scalars['UUID'];
};

/** Methods to use when ordering `UserAuthentication`. */
export enum UserAuthenticationsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ServiceAsc = 'SERVICE_ASC',
  ServiceDesc = 'SERVICE_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** Input for the nested mutation of `user` in the `UserAuthenticationInput` mutation. */
export type UserAuthenticationsUserIdFkeyInput = {
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectById?: InputMaybe<UserUsersPkeyConnect>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectByUsername?: InputMaybe<UserUsersUsernameKeyConnect>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateById?: InputMaybe<UserOnUserAuthenticationForUserAuthenticationsUserIdFkeyUsingUsersPkeyUpdate>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateByUsername?: InputMaybe<UserOnUserAuthenticationForUserAuthenticationsUserIdFkeyUsingUsersUsernameKeyUpdate>;
};

/** Input for the nested mutation of `userAuthentication` in the `UserInput` mutation. */
export type UserAuthenticationsUserIdFkeyInverseInput = {
  /** The primary key(s) for `userAuthentication` for the far side of the relationship. */
  connectById?: InputMaybe<Array<UserAuthenticationUserAuthenticationsPkeyConnect>>;
  /** The primary key(s) for `userAuthentication` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<UserAuthenticationUserAuthenticationsPkeyDelete>>;
  /** Flag indicating whether all other `userAuthentication` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']>;
  /** The primary key(s) and patch data for `userAuthentication` for the far side of the relationship. */
  updateById?: InputMaybe<Array<UserAuthenticationOnUserAuthenticationForUserAuthenticationsUserIdFkeyUsingUserAuthenticationsPkeyUpdate>>;
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `roleId` field. */
  roleId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `username` field. */
  username?: InputMaybe<Scalars['String']>;
};

/** Information about a user's email address. */
export type UserEmail = {
  __typename?: 'UserEmail';
  createdAt: Scalars['Datetime'];
  /** The users email address, in `a@b.c` format. */
  email: Scalars['String'];
  id: Scalars['UUID'];
  isPrimary: Scalars['Boolean'];
  /** True if the user has is_verified their email address (by clicking the link in the email we sent them, or logging in with a social login provider), false otherwise. */
  isVerified: Scalars['Boolean'];
  updatedAt: Scalars['Datetime'];
  /** Reads a single `User` that is related to this `UserEmail`. */
  user?: Maybe<User>;
  userId: Scalars['UUID'];
};

/**
 * A condition to be used against `UserEmail` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type UserEmailCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `isPrimary` field. */
  isPrimary?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']>;
};

/** A filter to be used against `UserEmail` object types. All fields are combined with a logical ‘and.’ */
export type UserEmailFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<UserEmailFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `isPrimary` field. */
  isPrimary?: InputMaybe<BooleanFilter>;
  /** Negates the expression. */
  not?: InputMaybe<UserEmailFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<UserEmailFilter>>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `UserEmail` */
export type UserEmailInput = {
  /** The users email address, in `a@b.c` format. */
  email: Scalars['String'];
  user?: InputMaybe<UserEmailsUserIdFkeyInput>;
  userId?: InputMaybe<Scalars['UUID']>;
};

/** The fields on `userEmail` to look up the row to update. */
export type UserEmailOnUserEmailForUserEmailsUserIdFkeyUsingUserEmailsPkeyUpdate = {
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `userEmail` being updated. */
  patch: UpdateUserEmailOnUserEmailForUserEmailsUserIdFkeyPatch;
};

/** The fields on `userEmail` to look up the row to connect. */
export type UserEmailUserEmailsPkeyConnect = {
  id: Scalars['UUID'];
};

/** The fields on `userEmail` to look up the row to delete. */
export type UserEmailUserEmailsPkeyDelete = {
  id: Scalars['UUID'];
};

/** A connection to a list of `UserEmail` values. */
export type UserEmailsConnection = {
  __typename?: 'UserEmailsConnection';
  /** A list of edges which contains the `UserEmail` and cursor to aid in pagination. */
  edges: Array<UserEmailsEdge>;
  /** A list of `UserEmail` objects. */
  nodes: Array<UserEmail>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `UserEmail` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `UserEmail` edge in the connection. */
export type UserEmailsEdge = {
  __typename?: 'UserEmailsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `UserEmail` at the end of the edge. */
  node: UserEmail;
};

/** Methods to use when ordering `UserEmail`. */
export enum UserEmailsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IsPrimaryAsc = 'IS_PRIMARY_ASC',
  IsPrimaryDesc = 'IS_PRIMARY_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** Input for the nested mutation of `user` in the `UserEmailInput` mutation. */
export type UserEmailsUserIdFkeyInput = {
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectById?: InputMaybe<UserUsersPkeyConnect>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectByUsername?: InputMaybe<UserUsersUsernameKeyConnect>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateById?: InputMaybe<UserOnUserEmailForUserEmailsUserIdFkeyUsingUsersPkeyUpdate>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateByUsername?: InputMaybe<UserOnUserEmailForUserEmailsUserIdFkeyUsingUsersUsernameKeyUpdate>;
};

/** Input for the nested mutation of `userEmail` in the `UserInput` mutation. */
export type UserEmailsUserIdFkeyInverseInput = {
  /** The primary key(s) for `userEmail` for the far side of the relationship. */
  connectById?: InputMaybe<Array<UserEmailUserEmailsPkeyConnect>>;
  /** The primary key(s) for `userEmail` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<UserEmailUserEmailsPkeyDelete>>;
  /** Flag indicating whether all other `userEmail` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']>;
  /** The primary key(s) and patch data for `userEmail` for the far side of the relationship. */
  updateById?: InputMaybe<Array<UserEmailOnUserEmailForUserEmailsUserIdFkeyUsingUserEmailsPkeyUpdate>>;
};

/** A filter to be used against `User` object types. All fields are combined with a logical ‘and.’ */
export type UserFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `hasPassword` field. */
  hasPassword?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<UserFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `role` relation. */
  role?: InputMaybe<RoleFilter>;
  /** A related `role` exists. */
  roleExists?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the object’s `roleId` field. */
  roleId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `userAuthentications` relation. */
  userAuthentications?: InputMaybe<UserToManyUserAuthenticationFilter>;
  /** Some related `userAuthentications` exist. */
  userAuthenticationsExist?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the object’s `userEmails` relation. */
  userEmails?: InputMaybe<UserToManyUserEmailFilter>;
  /** Some related `userEmails` exist. */
  userEmailsExist?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the object’s `username` field. */
  username?: InputMaybe<StringFilter>;
};

/** The fields on `user` to look up the row to update. */
export type UserOnUserAuthenticationForUserAuthenticationsUserIdFkeyUsingUsersPkeyUpdate = {
  /** Unique identifier for the user. */
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `user` being updated. */
  patch: UpdateUserOnUserAuthenticationForUserAuthenticationsUserIdFkeyPatch;
};

/** The fields on `user` to look up the row to update. */
export type UserOnUserAuthenticationForUserAuthenticationsUserIdFkeyUsingUsersUsernameKeyUpdate = {
  /** An object where the defined keys will be set on the `user` being updated. */
  patch: UpdateUserOnUserAuthenticationForUserAuthenticationsUserIdFkeyPatch;
  /** Public-facing username (or 'handle') of the user. */
  username: Scalars['String'];
};

/** The fields on `user` to look up the row to update. */
export type UserOnUserEmailForUserEmailsUserIdFkeyUsingUsersPkeyUpdate = {
  /** Unique identifier for the user. */
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `user` being updated. */
  patch: UpdateUserOnUserEmailForUserEmailsUserIdFkeyPatch;
};

/** The fields on `user` to look up the row to update. */
export type UserOnUserEmailForUserEmailsUserIdFkeyUsingUsersUsernameKeyUpdate = {
  /** An object where the defined keys will be set on the `user` being updated. */
  patch: UpdateUserOnUserEmailForUserEmailsUserIdFkeyPatch;
  /** Public-facing username (or 'handle') of the user. */
  username: Scalars['String'];
};

/** The fields on `user` to look up the row to update. */
export type UserOnUserForUserRoleIdFkUsingUsersPkeyUpdate = {
  /** Unique identifier for the user. */
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `user` being updated. */
  patch: UpdateUserOnUserForUserRoleIdFkPatch;
};

/** The fields on `user` to look up the row to update. */
export type UserOnUserForUserRoleIdFkUsingUsersUsernameKeyUpdate = {
  /** An object where the defined keys will be set on the `user` being updated. */
  patch: UpdateUserOnUserForUserRoleIdFkPatch;
  /** Public-facing username (or 'handle') of the user. */
  username: Scalars['String'];
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  /** Optional avatar URL. */
  avatarUrl?: InputMaybe<Scalars['String']>;
  /** Public-facing name (or pseudonym) of the user. */
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UserRoleIdFkInput>;
  roleId?: InputMaybe<Scalars['UUID']>;
  userAuthentications?: InputMaybe<UserAuthenticationsUserIdFkeyInverseInput>;
  userEmails?: InputMaybe<UserEmailsUserIdFkeyInverseInput>;
  /** Public-facing username (or 'handle') of the user. */
  username?: InputMaybe<Scalars['String']>;
};

/** Input for the nested mutation of `role` in the `UserInput` mutation. */
export type UserRoleIdFkInput = {
  /** The primary key(s) for `role` for the far side of the relationship. */
  connectById?: InputMaybe<RoleRolesPkeyConnect>;
  /** The primary key(s) for `role` for the far side of the relationship. */
  connectByName?: InputMaybe<RoleRolesNameKeyConnect>;
  /** The primary key(s) for `role` for the far side of the relationship. */
  deleteById?: InputMaybe<RoleRolesPkeyDelete>;
  /** The primary key(s) for `role` for the far side of the relationship. */
  deleteByName?: InputMaybe<RoleRolesNameKeyDelete>;
  /** The primary key(s) and patch data for `role` for the far side of the relationship. */
  updateById?: InputMaybe<RoleOnUserForUserRoleIdFkUsingRolesPkeyUpdate>;
  /** The primary key(s) and patch data for `role` for the far side of the relationship. */
  updateByName?: InputMaybe<RoleOnUserForUserRoleIdFkUsingRolesNameKeyUpdate>;
};

/** Input for the nested mutation of `user` in the `RoleInput` mutation. */
export type UserRoleIdFkInverseInput = {
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectById?: InputMaybe<Array<UserUsersPkeyConnect>>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectByUsername?: InputMaybe<Array<UserUsersUsernameKeyConnect>>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateById?: InputMaybe<Array<UserOnUserForUserRoleIdFkUsingUsersPkeyUpdate>>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateByUsername?: InputMaybe<Array<UserOnUserForUserRoleIdFkUsingUsersUsernameKeyUpdate>>;
};

/** A filter to be used against many `UserAuthentication` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyUserAuthenticationFilter = {
  /** Every related `UserAuthentication` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<UserAuthenticationFilter>;
  /** No related `UserAuthentication` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<UserAuthenticationFilter>;
  /** Some related `UserAuthentication` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<UserAuthenticationFilter>;
};

/** A filter to be used against many `UserEmail` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyUserEmailFilter = {
  /** Every related `UserEmail` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<UserEmailFilter>;
  /** No related `UserEmail` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<UserEmailFilter>;
  /** Some related `UserEmail` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<UserEmailFilter>;
};

/** The fields on `user` to look up the row to connect. */
export type UserUsersPkeyConnect = {
  /** Unique identifier for the user. */
  id: Scalars['UUID'];
};

/** The fields on `user` to look up the row to connect. */
export type UserUsersUsernameKeyConnect = {
  /** Public-facing username (or 'handle') of the user. */
  username: Scalars['String'];
};

/** A connection to a list of `User` values. */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UsersEdge>;
  /** A list of `User` objects. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `User` at the end of the edge. */
  node: User;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RoleIdAsc = 'ROLE_ID_ASC',
  RoleIdDesc = 'ROLE_ID_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC'
}

/** All input for the `verifyEmail` mutation. */
export type VerifyEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  token: Scalars['String'];
  userEmailId: Scalars['UUID'];
};

/** The output of our `verifyEmail` mutation. */
export type VerifyEmailPayload = {
  __typename?: 'VerifyEmailPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  success?: Maybe<Scalars['Boolean']>;
};

/** An object where the defined keys will be set on the `permission` being updated. */
export type UpdatePermissionOnRolePermissionForRolePermissionPermissionIdFkeyPatch = {
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  label?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  rolePermissions?: InputMaybe<RolePermissionPermissionIdFkeyInverseInput>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** An object where the defined keys will be set on the `role` being updated. */
export type UpdateRoleOnRolePermissionForRolePermissionRoleIdFkeyPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  rolePermissions?: InputMaybe<RolePermissionRoleIdFkeyInverseInput>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  users?: InputMaybe<UserRoleIdFkInverseInput>;
};

/** An object where the defined keys will be set on the `role` being updated. */
export type UpdateRoleOnUserForUserRoleIdFkPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  rolePermissions?: InputMaybe<RolePermissionRoleIdFkeyInverseInput>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  users?: InputMaybe<UserRoleIdFkInverseInput>;
};

/** An object where the defined keys will be set on the `rolePermission` being updated. */
export type UpdateRolePermissionOnRolePermissionForRolePermissionPermissionIdFkeyPatch = {
  permission?: InputMaybe<RolePermissionPermissionIdFkeyInput>;
  role?: InputMaybe<RolePermissionRoleIdFkeyInput>;
  roleId?: InputMaybe<Scalars['UUID']>;
};

/** An object where the defined keys will be set on the `rolePermission` being updated. */
export type UpdateRolePermissionOnRolePermissionForRolePermissionRoleIdFkeyPatch = {
  permission?: InputMaybe<RolePermissionPermissionIdFkeyInput>;
  permissionId?: InputMaybe<Scalars['UUID']>;
  role?: InputMaybe<RolePermissionRoleIdFkeyInput>;
};

/** An object where the defined keys will be set on the `userAuthentication` being updated. */
export type UpdateUserAuthenticationOnUserAuthenticationForUserAuthenticationsUserIdFkeyPatch = {
  user?: InputMaybe<UserAuthenticationsUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `userEmail` being updated. */
export type UpdateUserEmailOnUserEmailForUserEmailsUserIdFkeyPatch = {
  user?: InputMaybe<UserEmailsUserIdFkeyInput>;
};

/** An object where the defined keys will be set on the `user` being updated. */
export type UpdateUserOnUserAuthenticationForUserAuthenticationsUserIdFkeyPatch = {
  /** Optional avatar URL. */
  avatarUrl?: InputMaybe<Scalars['String']>;
  /** Public-facing name (or pseudonym) of the user. */
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UserRoleIdFkInput>;
  roleId?: InputMaybe<Scalars['UUID']>;
  userAuthentications?: InputMaybe<UserAuthenticationsUserIdFkeyInverseInput>;
  userEmails?: InputMaybe<UserEmailsUserIdFkeyInverseInput>;
  /** Public-facing username (or 'handle') of the user. */
  username?: InputMaybe<Scalars['String']>;
};

/** An object where the defined keys will be set on the `user` being updated. */
export type UpdateUserOnUserEmailForUserEmailsUserIdFkeyPatch = {
  /** Optional avatar URL. */
  avatarUrl?: InputMaybe<Scalars['String']>;
  /** Public-facing name (or pseudonym) of the user. */
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UserRoleIdFkInput>;
  roleId?: InputMaybe<Scalars['UUID']>;
  userAuthentications?: InputMaybe<UserAuthenticationsUserIdFkeyInverseInput>;
  userEmails?: InputMaybe<UserEmailsUserIdFkeyInverseInput>;
  /** Public-facing username (or 'handle') of the user. */
  username?: InputMaybe<Scalars['String']>;
};

/** An object where the defined keys will be set on the `user` being updated. */
export type UpdateUserOnUserForUserRoleIdFkPatch = {
  /** Optional avatar URL. */
  avatarUrl?: InputMaybe<Scalars['String']>;
  /** Public-facing name (or pseudonym) of the user. */
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UserRoleIdFkInput>;
  userAuthentications?: InputMaybe<UserAuthenticationsUserIdFkeyInverseInput>;
  userEmails?: InputMaybe<UserEmailsUserIdFkeyInverseInput>;
  /** Public-facing username (or 'handle') of the user. */
  username?: InputMaybe<Scalars['String']>;
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'LoginPayload', token?: string | null, user: { __typename?: 'User', id: any, name?: string | null, avatarUrl?: string | null } } | null };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser?: { __typename?: 'User', id: any, name?: string | null, avatarUrl?: string | null } | null };

export type Layout_UserFragment = { __typename?: 'User', id: any, name?: string | null, avatarUrl?: string | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout?: { __typename?: 'LogoutPayload', success?: boolean | null } | null };

export const Layout_UserFragmentDoc = gql`
    fragment Layout_User on User {
  id
  name
  avatarUrl
}
    `;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    token
    user {
      id
      ...Layout_User
    }
  }
}
    ${Layout_UserFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
  currentUser {
    id
    ...Layout_User
  }
}
    ${Layout_UserFragmentDoc}`;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout {
    success
  }
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;