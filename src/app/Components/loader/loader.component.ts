import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadService } from 'src/app/load.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  flag:Subject<boolean>= this._LoadService.flag;
  constructor(public _LoadService:LoadService){
 this.flag.subscribe(value=>console.log(value) )
  }
}
