import { Pipe, PipeTransform } from "@angular/core";
import { Phone } from "../interfaces";

@Pipe({
    name: 'phoneFilter'
})
export class PhoneFilterPipe implements PipeTransform {
    transform(phones: Phone[], searchList: String): Phone[] {
        if(!phones || ! searchList) {
            return phones;
        }
        return phones.filter(phones => phones.name.toLowerCase().indexOf(searchList.toLowerCase()) !== -1);

    }

}
