interface ContactRequest {
    contactType: string,
    name: string,
    email: string,
    phone: string,
    address: string,
    message: string,
    token: string
}

export default ContactRequest;