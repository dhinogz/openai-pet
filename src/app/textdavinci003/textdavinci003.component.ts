import { Component } from '@angular/core';
import { Textdavinci003Service } from '../textdavinci003.service';

@Component({
  selector: 'app-textdavinci003',
  templateUrl: './textdavinci003.component.html',
  styleUrls: ['./textdavinci003.component.css']
})
export class Textdavinci003Component {

  constructor(private textdavinci003Service: Textdavinci003Service) { }

  ngOnInit(): void {}

  result: string = "";
  pet: string = "";

  postCompletion() {
    let prompt = `Suggest three names for an animal that is a superhero. Animal: Cat
    Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline Animal: Dog
    Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
    Animal: ${this.pet}
    Names:`;

    var payload = {
      prompt: prompt,
      temperature: 0.6,
      model: "text-davinci-003",
    }

    this.textdavinci003Service.postCompletion(payload)
      .subscribe((data: any) => {
        console.log(data);
        this.result = data.choices[0].text;
      }
    );
  }
}