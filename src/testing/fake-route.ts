import { Params } from "@angular/router";
import { Observable } from "rxjs/Observable";

export class FakeRouteStubDirective {
    params: Observable<Params> = Observable.of({id: '2'});
}