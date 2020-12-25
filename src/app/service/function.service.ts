import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

@Injectable()
export class FunctionService {

  constructor(private http: HttpClient) {}

  private clickActionSubject = new BehaviorSubject<string>('Call Cloud Function');
  clickAction$ = this.clickActionSubject.asObservable();

  private functionCall$ = this.http.get<{ message: string }>('https://us-central1-travis-cicd.cloudfunctions.net/autocicd').pipe(
    map(output => output.message)
  );

  autocicdFunctionCall$ = this.clickAction$.pipe(
    concatMap((action: string) => {
      if (action === 'next') {
        return this.functionCall$;
      }
      return of(action);
    }),
    catchError(() => of('Error in cloud function'))
  );

  onClick(action: string): void {
    this.clickActionSubject.next(action);
  }
}
