import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Subject } from 'rxjs';
import { catchError, map, mergeMap, startWith } from 'rxjs/operators';

@Injectable()
export class FunctionService {

  constructor(private http: HttpClient) {}

  private clickActionSubject = new Subject<string>();
  clickAction$ = this.clickActionSubject.asObservable();

  autocicdFunctionCall$ = this.clickAction$.pipe(
    startWith({ message: 'Call Cloud Function' }),
    mergeMap((action: string) => {
      if (action === 'next') {
        return this.http.get<{ message: string }>('https://us-central1-travis-cicd.cloudfunctions.net/autocicd').pipe(
          map(output => output.message)
        );
      }
      return of('Call cloud function');
    }),
    catchError(() => of('Error in cloud function'))
  );

  onClick(action: string): void {
    this.clickActionSubject.next(action);
  }
}
