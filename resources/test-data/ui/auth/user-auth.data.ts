import { UserCredentialsType, UserRoleType } from "../../../../config/auth.config";
import { env} from "../../../../config/environment.config";

export function getAuthCredentials(userType: UserRoleType): UserCredentialsType{
  if(userType === 'ADMIN'){
    return { username: env.ADMIN_USERNAME, password: env.ADMIN_PASSWORD, file: 'admin.json'};
  }
  return { username: env.USER_USERNAME, password: env.USER_PASSWORD, file: 'user.json'};
}
