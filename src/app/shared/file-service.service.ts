import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CONFIG} from "./config.model";

@Injectable({
  providedIn: 'root'
})
export class FileServiceService {
  constructor(private http: HttpClient) {}

  getFile(fileId: string): Observable<Blob> {
    return this.http.get(`${CONFIG.api}/dashboard/getFile/${fileId}`, { responseType: 'blob' });
  }
}
