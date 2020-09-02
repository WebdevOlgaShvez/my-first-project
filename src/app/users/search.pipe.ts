import { UsersService } from './../users.service';
import {Pipe, PipeTransform} from '@angular/core'
import { User } from '../shared/user';


@Pipe({
    name: 'search'
})


export class SearchPipe implements PipeTransform{
transform(usersList: User[], value: string){
return usersList.filter(user => {
    return user.name.toLowerCase().includes(value.toLowerCase())
})
}
}