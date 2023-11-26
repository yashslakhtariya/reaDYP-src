import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  private openai: OpenAIApi;
  configuration = new Configuration({
    apiKey: "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",
    organization: 'org-Gj4poG4czUd9dVOpEgi0nb2q'
  });

  constructor() {
    this.openai = new OpenAIApi(this.configuration);
    this.configuration.baseOptions.headers = {
      Authorization: "Bearer " + "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"
    };
  }

  generateText(prompt: string): Promise<string | undefined> {
    return this.openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Generate a short summary/overview, reading reasons of the book ${prompt}`,
      max_tokens: 256
    }).then(response => {
      return response.data.choices[0].text;
    }).catch(error => {
      return 'Something went wrong';
    });
  }
}