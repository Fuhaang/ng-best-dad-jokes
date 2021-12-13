import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models/post.interface';

@Pipe({
  name: 'thisJoke'
})
export class ThisJokePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(items: Post[], slug: String): Post[] {
    
    return items.filter(i => i.slug != slug);
  }
}