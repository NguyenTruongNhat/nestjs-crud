import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'

import { PostsService } from './posts.service'

@Controller('posts')
export class PostsController {

constructor(private readonly postService : PostsService){}


  @Get()
  getPosts() {
    return this.postService.getPosts()
  }

 
}
