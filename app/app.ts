import { NegotiationController } from "./controllers/negotiationController";

const controller = new NegotiationController();

const form = document.querySelector(".form");
if(form){
  form.addEventListener("submit", event => {
    event.preventDefault();
    controller.add();
  });
} else{
  throw Error('Unable to initialize the application.')
}


