import { Component } from '@angular/core';
import { ModerationsService } from '../services/moderations.service';
@Component({
  selector: 'app-moderations',
  templateUrl: './moderations.component.html',
  styleUrls: ['./moderations.component.css']
})
export class ModerationsComponent {

  constructor(private moderationsService: ModerationsService) { }

  ngOnInit(): void {}

  result: string = "";
  input: string = "";

  postCompletion() {
      
      var payload = {
        input: this.input,
      }
  
      this.moderationsService.postCompletion(payload)
        .subscribe((data: any) => {
          console.log(data);
          this.result = data.results[0].categories;
        }
      );
    }

}
