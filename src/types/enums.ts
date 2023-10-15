export enum HttpStatusCode {
    OK = 200,
    InternalServerError = 500,
    NotFound = 404,
    BadRequest = 400,
    Forbidden = 403,
    Created = 201,
    Accepted = 202,
    Unauthorized = 401,
    MethodNotAllowed = 405,
    RequestTimeout = 408,
    BadGateway = 502
}

export enum UserRoles {
    ADMIN = "admin",
    SUPER_ADMIN = 'super_admin',
    ADMIN_EDITOR = 'admin_editor',
    USER = "user",
    MERCHANT = "b2b_merchant",
    MERCHANT_EXECUTIVE = 'merchant_executive',
    HOTEL_MERCHANT = 'b2b_hotel_merchant'
  }