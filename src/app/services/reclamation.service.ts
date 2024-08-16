import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders    } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reclamation } from '../models/reclamation';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class reclamationService {

  private baseURL = "http://localhost:8086/Reclamation/"

  constructor(private http : HttpClient) { }

  addReclamation(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.baseURL}addRec`, formData);
  }

  updateReclamationImage(id: number, recImage: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('recImage', recImage);

    return this.http.post<any>(`${this.baseURL}/updateImage/${id}`, formData);
  }

  getAllReclamations(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(`${this.baseURL}allRecs`, { observe: 'response' }).pipe(
      tap(resp => {
        console.log(resp.headers); // Log headers to the console
      }),
      map(resp => resp.body as Reclamation[]) // Extract the body from the response
    );
  }
  deleteReclamation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/deleteRec/${id}`);
  }

}