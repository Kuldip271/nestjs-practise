import {Get,Controller} from '@nestjs/common'

@Controller('albums')
export class albumsController{
        @Get('/photo')
        getPhoto(){
            return {
                photo  : "banana"
            }
        }
}