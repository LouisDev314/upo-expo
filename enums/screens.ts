const baseScreenPath = '/(screens)';

export const enum AppScreen {
  Login = `${baseScreenPath}/auth/login`,
  RegisterInit = `${baseScreenPath}/auth/register`,
  Otp = `${baseScreenPath}/auth/otp`,
}

// const errorScreenPath = `${baseScreenPath}/errors`;
//
// export const enum ErrorScreen {
//   NetworkError = `${errorScreenPath}/NetworkError`,
//   InternalServerError = `${errorScreenPath}/InternalServerError`,
//   Forbidden = `${errorScreenPath}/Forbidden`,
//   TimeoutError = `${errorScreenPath}/TimeoutError`,
//   BadRequest = `${errorScreenPath}/BadRequest`,
// }
