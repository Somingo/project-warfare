import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'app-tool-bar-input',
    templateUrl: './tool-bar-input.component.html',
    styleUrls: ['./tool-bar-input.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ToolBarInputComponent),
        multi: true
    }]
})
export class ToolBarInputComponent implements ControlValueAccessor {
    @Input()
    public type = 'text';
    @Input()
    public multiple: boolean;

    @Output()
    public change: EventEmitter<Event> = new EventEmitter(false);
    public isDisabled = false;

    constructor() {
    }

    private modelPrivate: any = null;

    public get model(): any {
        return this.modelPrivate;
    }

    public set model(v: any) {
        this.modelPrivate = v;
        this.onChangeModel(v);
    }

    public onChangeModel: any = () => null;

    public onTouched: any = () => null;

    registerOnChange(fn: any): void {
        this.onChangeModel = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    writeValue(obj: any): void {
        this.model = obj;
    }

}
