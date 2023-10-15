export interface IUsers {
  [key:string]:IUserDetails
}

export interface IAdminsUser{
  name:string,
  surname:string,
  email:string,
  password:string,
  tasks?:ITask[],
  adminEmail:string
}

export interface IUserDetails {
  password:string,
  isAdmin:boolean,
  organizationName?:string,
  phoneNumber?:string,
  address?:string,
  userName?:string,
  email:string,
  users:IAdminsUser[],
  tasks:ITask[],
  adminEmail?:string


}

export interface  ITask{
  title:string,
  description:string,
  status:string,
  deadline:string,
  users?:IAdminsUser[]
}

export interface IRegister{
  password:string,
  'organization-name':string,
  'phone-number':string,
  address:string,
  username:string,
  email:string

}


export  interface  ILogin{
  email:string,
  password:string

}
