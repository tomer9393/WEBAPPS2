import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
    private usersUrl = environment.usersUrl;
    private filterUrl = environment.filtersUrl;
  
    constructor(private http: HttpClient) { }
    
    filter(key: string): Observable<User[]> {
      const url = `${this.filterUrl}/users/${key}`;
      return this.http.get<User[]>(url);
    }
  
    getUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.usersUrl);
    }
  
    addUser(firstname: String, lastname: String, email: String, password: String, phone: String, isAdmin: Boolean): Observable<User> {
      return this.http.post<User>(this.usersUrl, { 
        email: email, 
        firstname: firstname, 
        lastname: lastname, 
        password: password, 
        phone: phone,
        isAdmin: isAdmin
      });
  
    }
  
    getUser(id: String): Observable<User> {
      const url = `${this.usersUrl}/${id}`;
      return this.http.get<User>(url);
    }
  
    updateUser(user: User): Observable<User> {
      const url = `${this.usersUrl}/id/${user._id}`;
      return this.http.patch<User>(url, { 
        email: user.email, 
        firstname: user.firstname, 
        lastname: user.lastname, 
        password: user.password, 
        phone: user.phone,
        isAdmin: user.isAdmin });
    }
  
    deleteUser(id: String): Observable<User> {
      const url = `${this.usersUrl}/id/${id}`;
      return this.http.delete<User>(url);
    }
}
