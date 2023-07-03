export class NegotiationView {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${model
            .list()
            .map((negotiation) => {
            return `
                            <tr>
                                <td>${new Intl.DateTimeFormat().format(negotiation.date)}</td>
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
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
