export type UserRoleType = 'USER' | 'ADMIN';

export type UserCredentialsType = {
  username: string,
  password: string,
  file: string,
}

export type AuthMetadata = {
  role: UserRoleType,
  loginTime: number,
  expiryTime: number,
  shardId: string,
  parallelIndex: number
}