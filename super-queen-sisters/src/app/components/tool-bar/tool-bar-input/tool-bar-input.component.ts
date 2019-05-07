import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

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
  @Input('type')
  public type: string = 'text';
  @Input('multiple')
  public multiple: boolean;

  @Output('onChange')
  public onChange: EventEmitter<Event> = new EventEmitter(false);

  private _model: any = null;
  public get model():any {
    return this._model;
  }
  public set model(v:any){
    this._model = v;
    this.onChangeModel(v);
  }
  public onChangeModel: any = () => null;
  public onTouched: any = () => null;
  public isDisabled: boolean = false;

  constructor() {
  }

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
