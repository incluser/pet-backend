import { LlmService } from './llm.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('llm')
export class LlmController {
  public constructor(private readonly llmService: LlmService) {}

  @Post('talk')
  public async talk(@Body('prompt') prompt: string) {
    return await this.llmService.talk(prompt);
  }
}
