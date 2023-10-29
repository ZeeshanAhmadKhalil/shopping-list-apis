import {
  PrismaService
} from '@modules/prisma/prisma.service';
import {
  Injectable
} from '@nestjs/common';
import {
  CreateItemDto
} from './dto/create-item.dto';
import {
  UpdateItemDto
} from './dto/update-item.dto';

@Injectable()
export class ItemService {

  constructor(
    private prisma:
      PrismaService,
  ) { }

  create(
    createItemDto:
      CreateItemDto
  ) {

    return this.prisma.item
      .create({
        data: {
          ...createItemDto,
        }
      })
  }

  findAll(
    page: number
  ) {

    console.log("page===>", page)

    if (page == 0)
      return this.prisma.item
        .findMany({
          orderBy: [
            {
              createdAt:
                'desc'
            }
          ],
        })
    else
      return this.prisma.item
        .findMany({
          orderBy: [
            {
              createdAt:
                'desc'
            }
          ],
          take: 10,
          skip: (page - 1) * 10
        })
  }

  findOne(id: string) {

    console.log("id===>", id)

    return this.prisma.item
      .findUnique({
        where: {
          id,
        }
      })
  }

  update(
    id: string,
    updateItemDto:
      UpdateItemDto
  ) {
    return this.prisma.item
      .update({
        where: {
          id,
        },
        data: {
          ...updateItemDto,
        }
      })
  }

  remove(id: string) {

    return this.prisma.item
      .update({
        where: {
          id,
        },
        data: {
          deletedAt: new Date()
        }
      })
  }
}
