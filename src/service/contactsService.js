import axios from "axios";

axios.defaults.baseURL = "https://67c2f1741851890165adb703.mockapi.io";

async function fetchContacts() {
    const response = await axios.get('/contacts'); 
    return response.data;
}

async function addContact(contact) {
    const response = await axios.post('/contacts', contact); 
    return response.data;
}

async function deleteContact(contactId) {
    const response = await axios.delete(`/contacts/${contactId}`); 
    return response.data;
}

const contactsService = {
    fetchContacts,
    addContact,
    deleteContact
}

export default contactsService;
