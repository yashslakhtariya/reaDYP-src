import { Component } from '@angular/core';
import { OpenaiService } from '../openai.service';

@Component({
  selector: 'app-glimpse',
  templateUrl: './glimpse.component.html',
  styleUrls: ['./glimpse.component.css']
})

export class GlimpseComponent {

  constructor(private openaiService: OpenaiService) { }

  book:string = '';
  outputtxt: string = '';
  generateText(data:string) {
    this.openaiService.generateText(data).then(text => {
      this.outputtxt = text + '';
    }).catch(error => {
      this.outputtxt = error;
    })
  }
}
