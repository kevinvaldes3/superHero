import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform{

    transform(value: any , args: any) : any {
        const resultdoPost = [];
        for(const post of value){
            if (post.name.toLowerCase( ).indexOf(args) > -1) {   
                resultdoPost.push(post)                              
            };
        };
        
        
        return resultdoPost;            
        
    }
}