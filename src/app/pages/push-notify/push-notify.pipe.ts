import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'push-notify'
})
export class PushNotifyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}