import { Component } from '@angular/core';
import { AbsenceModel} from './absence.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  absents : Array<AbsenceModel> = new Array<AbsenceModel>();
  today = new Date();
  currentRound() : string {
    return 'Benjamin'
  }
}
