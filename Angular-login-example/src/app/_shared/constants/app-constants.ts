import { environment } from 'src/environments/environment';

export class AppStorage {
    public static USER_KEY = 'user';
}

export class ApiEndpointURL {

    public static LOGIN_URL = `${environment.baseUrl}login`;
    public static USER = `${environment.baseUrl}users`;
 }
 