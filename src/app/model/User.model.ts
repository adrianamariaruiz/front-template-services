
export enum RolesEnum {
  'admin',
  'user'

}

export interface UserModel {
  useName: string
  email: string
  password: string
  roles: RolesEnum
}