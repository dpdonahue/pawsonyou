import ContactRequest from '../models/ContactRequest';

class ContactService {
  send = async (contactRequest: ContactRequest): Promise<Response> =>
    fetch('/contact.php', {
      method: 'POST',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(contactRequest)
    });
}

export default ContactService;