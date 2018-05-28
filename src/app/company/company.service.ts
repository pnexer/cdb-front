import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Company} from './company.model';

@Injectable()
export class CompanyService {

    private baseUrl = 'http://localhost:8080/cdb-webservice';

    constructor(private http: HttpClient) {
    }

    getCompanies(): Observable<Company[]> {
        return this.http.get<Company[]>(`${this.baseUrl}/companies`);
    }

    getById(id: number): Observable<Company> {
        return this.http.get<Company>(`${this.baseUrl}/companies/${id}`);
    }

    addCompany(company: Company): Observable<any> {
        return this.http.post(`${this.baseUrl}/companies`, company, {responseType: 'text'});
    }

    deleteCompany(id: number): Observable<{}> {
        return this.http.delete(`${this.baseUrl}/companies/${id}`, {responseType: 'text'});
    }

    deleteCompanies(ids: number[]): void {
        ids.forEach(id => {
            this.deleteCompany(id);
        });
    }

    updateCompany(company: Company): Observable<any> {
        return this.http.patch(`${this.baseUrl}/companies`, company, {responseType: 'text'});
    }

    search(search: string): Observable<Company[]> {
      return this.http.get<Company[]>(`${this.baseUrl}/companies/${search}`);

    }
}
