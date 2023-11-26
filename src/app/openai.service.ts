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