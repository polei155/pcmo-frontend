import { NgModule } from "@angular/core";
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
    declarations: [ ],
    imports: [ ],
    exports: [
        NzInputModule,
        NzDropDownModule,
        NzIconModule,
        NzModalModule
    ]
})

export class SharedModule { }