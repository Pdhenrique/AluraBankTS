import { Negotiation } from "../models/negotiation";
import { Negotiations } from "../models/negotiations";
import { View } from "./view";

export class NegotiationView extends View<Negotiations> {
  protected template(model: Negotiations): string {
    return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATE</th>
                        <th>AMOUNT</th>
                        <th>VALUE</th>
                    </tr>
                </thead>
                <tbody>
                    ${model
                      .list()
                      .map((negotiation) => {
                        return `
                            <tr>
                                <td>${this.format(negotiation.date)}</td>
                                <td>${negotiation.amount}</td>
                                <td>${negotiation.value}</td>
                            </tr>
                        `;
                      })
                      .join("")}
                </tbody>
            </table>
        `;
  }

  private format(date: Date): string {
    return new Intl.DateTimeFormat().format(date);
  }
}
