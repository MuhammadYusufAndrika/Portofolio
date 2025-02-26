import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project??? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:muhammadyusufandrika@amikom.ac.id"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:muhammadyusufandrika@amikom.ac.id">Hello@Yusufandrika.com</a>
        </div>
        <div>
        <a href="https://api.whatsapp.com/send/?phone=%2B6285669812501&text=Hello+Yusuf"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="https://api.whatsapp.com/send/?phone=%2B6285669812501&text=Hello+Yusuf">(+62) 85669812501</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}