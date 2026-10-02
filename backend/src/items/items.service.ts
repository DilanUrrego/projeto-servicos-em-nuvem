import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

export interface Item {
  id: number;
  name: string;
  quantity: number;
}

@Injectable()
export class ItemsService {
  private items: Item[] = [];
  private nextId = 1;

  create(createItemDto: CreateItemDto) {
    const item: Item = {
      id: this.nextId++,
      name: String(createItemDto.name),
      quantity: createItemDto.quantity,
    };
    this.items.push(item);
    return item;
  }

  findAll() {
    return this.items;
  }

  findOne(id: number) {
    return this.items.find((item) => item.id === id);
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    const item = this.findOne(id);
    if (item) Object.assign(item, updateItemDto);
    return item;
  }

  remove(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
    return {deleted: true};
  }
}
