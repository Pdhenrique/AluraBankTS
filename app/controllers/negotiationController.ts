import { DayOfWeek } from "../enums/dayOfWeek";
import { Negotiation } from "../models/negotiation";
import { Negotiations } from "../models/negotiations";
import { MessageView } from "../views/messageView";
import { NegotiationView } from "../views/negotiationView";

export class NegotiationController {
  private inputDate: HTMLInputElement;
  private inputAmount: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private negotiations = new Negotiations();
  private negotiationView = new NegotiationView("#negotiationView", true);
  private messageView = new MessageView("#messageView");



  constructor() {
    this.inputDate = document.querySelector("#date") as HTMLInputElement;
    this.inputAmount = document.querySelector("#amount")  as HTMLInputElement;
    this.inputValue = document.querySelector("#value") as HTMLInputElement;
    this.negotiationView.update(this.negotiations);
  }

  public add(): void {
    const negotiation = Negotiation.create(
      this.inputDate.value,
      this.inputAmount.value,
      this.inputValue.value
    )
    if (!this.itsBusinessDay(negotiation.date)) {
      this.messageView.update("only business day trades are accepted");
      return
    }
    this.negotiations.add(negotiation);
    this.clearForm();
    this.updateView();
  }
  private itsBusinessDay(date: Date) {
    return date.getDay() > DayOfWeek.SUNDAY 
        && date.getDay() < DayOfWeek.SATURDAY;
  }



  private clearForm(): void {
    this.inputDate.value = "";
    this.inputAmount.value = "";
    this.inputValue.value = "";

    this.inputDate.focus();
  }

  private updateView(): void {
    this.negotiationView.update(this.negotiations);
    this.messageView.update("successfully added");
  }
}
