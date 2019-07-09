// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'ng2datepicker';
// }


import { Component, OnInit } from '@angular/core';
// import {IMyDpOptions} from 'mydatepicker';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IMyOptions, IMyDpOptions } from 'mydatepicker';
import * as moment from 'moment';
import { DatepickerOptions } from 'ng2-datepicker';
@Component({
  selector: 'app-root',
   templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
    ngOnInit(){}
    options: DatepickerOptions = {
       
        displayFormat: 'MMM D[,] YYYY',
   };
 //  date=moment(date).format('yyyy dd mm');
}

