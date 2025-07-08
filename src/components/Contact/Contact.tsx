import { Container } from "./styles";
import emailIconUrl from "../../assets/email-icon.svg";
import phoneIconUrl from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project??? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:andrika00748@gmail.com">
            <img src={emailIconUrl} alt="Email" />
          </a>
          <a href="mailto:andrika00748@gmail.com">Hello@andrika00748</a>
        </div>
        <div>
          <a href="https://api.whatsapp.com/send/?phone=%2B6285669812501&text=Hello+Yusuf">
            <img src={phoneIconUrl} alt="Phone No" />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=%2B6285669812501&text=Hello+Yusuf">(+62) 85669812501</a>
        </div>
      </div>
      <Form />
    </Container>
  );
}
