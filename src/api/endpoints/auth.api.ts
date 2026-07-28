import { APIRequestContext, APIResponse, test } from "@playwright/test";

export class Auth{
  private readonly request: APIRequestContext;

  private static readonly authPath = 'auth';
  private static readonly loginPath = Auth.authPath + '/login';
  private static readonly profilePath = Auth.authPath + '/profile';
  private static readonly refreshTokenPath = Auth.authPath + '/refresh-token';
  
  constructor(request: APIRequestContext){
    this.request = request;
  }

  async login(email: string, password: string): Promise<APIResponse> {
    return test.step(
      `POST ${Auth.loginPath}`,
      async () => {

        return this.request.post(Auth.loginPath, {
          data: {
            email: email,
            password: password
          }
        });
      });
  };


  async profile(accessToken: string): Promise<APIResponse> {
    return test.step(
      `GET ${Auth.profilePath}`,
      async () => {

        return this.request.get(Auth.profilePath, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Accept': 'application/json'
          }
        });
      });
  };


}