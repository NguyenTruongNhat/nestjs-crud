import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/shared/services/prisma.service'

@Injectable()
export class PostsService {
  constructor(private readonly prismaService: PrismaService) {}

  getPosts() {
    return this.prismaService.post.findMany()
  }
  createPost(body: any) {
    return "nguyen truong nhatc ccc"
  }
  getPost(id: string) {
    return `Post ${id}`
  }

  updatePost(id: string, body: any) {
    return `Updated post ${id}`
  }

  deletePost(id: string) {
    return `Deleted post ${id}`
  }
}
