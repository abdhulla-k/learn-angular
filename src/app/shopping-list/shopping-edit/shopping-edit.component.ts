import { 
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  EventEmitter,
  Output 
} from '@angular/core';
import { Incredient } from 'src/app/shared/incredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild( 'nameInput' ) nameInputRef: ElementRef;
  @ViewChild( 'amountInput' ) amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Incredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Incredient( ingName, ingAmount );
    this.ingredientAdded.emit( newIngredient );
  }

}