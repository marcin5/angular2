import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: "sortBy"})

export class SortPipe implements PipeTransform {
	
  transform(array: Array<string>, args: string, asc: boolean): Array<string> {
    array.sort((a: any, b: any) => {
	    if ( a[args] < b[args] ) {
	    	return -1;
	    }else if ( a[args] > b[args] ) {
	        return 1;
	    }else {
	    	return 0;
	    }
    });
		if (asc) {
			return array.reverse();
		}
    return array;
  }
}