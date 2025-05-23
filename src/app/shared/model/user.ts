export interface Ilogin {
    email : string,
    password : string
}

export interface Isignup {
    email : string,
    password : string,
    userRole : 'buyer'|'admin'|'superAdmin'
}