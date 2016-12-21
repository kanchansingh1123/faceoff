import {Pipe,PipeTransform,Injectable} from '@angular/core';


@Pipe({
  name: 'SearchPipe'
})

export class SearchPipe implements PipeTransform{
   transform(value,term) {
     if(!value ){
       return value;
     }
     else if(term == ''){
      return value;
     }
     else{
      var terml = term.toLowerCase().trim();
      let a = value.filter(item => item.name.toLowerCase().indexOf(terml) > -1);
      return a;
     }
  }

  
}
