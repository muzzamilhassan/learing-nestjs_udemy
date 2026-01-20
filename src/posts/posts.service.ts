import { Injectable } from '@nestjs/common';
@Injectable()
export class PostsService {
  public findAll(id: string) {
    console.log('The id is:', id);
  }
}
