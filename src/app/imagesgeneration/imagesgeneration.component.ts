import { Component } from '@angular/core';
import { ImagesgenerationService } from '../services/imagesgeneration.service';

@Component({
  selector: 'app-imagesgeneration',
  templateUrl: './imagesgeneration.component.html',
  styleUrls: ['./imagesgeneration.component.css']
})
export class ImagesgenerationComponent {
  
    constructor(private imagesgenerationService: ImagesgenerationService) { }
  
    ngOnInit(): void {}
  
    image: string = "";
    prompt: string = "";
  
    postCompletion() {
  
      var payload = {
        prompt: this.prompt,
        size: "512x512"
      }
  
      this.imagesgenerationService.postCompletion(payload)
        .subscribe((data: any) => {
          console.log(data);
          this.image = data.data[0].url;
        }
      );
    }

}
