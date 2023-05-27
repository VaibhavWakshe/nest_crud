/* eslint-disable prettier/prettier */

import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";




@Controller("book")
export class BookController{

   

    constructor(private bookService: BookService){}



    // Add book
    @Post('/add')
    addbook(): string{
        return this.bookService.addbook();
    }


    // Delete book
    @Delete('/delete')
    deletebook(): string{
        return this.bookService.deletebook();
    }


    // Update book
    @Put('/update')
    updatebook(): string{
        return this.bookService.updatebook();
    }


    // Find all book
    @Get('/findbook')
    findbook(): string{
        return this.bookService.findbook();
    }
}