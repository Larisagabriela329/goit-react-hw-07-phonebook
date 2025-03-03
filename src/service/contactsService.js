import axios from "axios";

axios.defaults.baseURL = "https://67c2f1741851890165adb703.mockapi.io";


const fetchContacts = async () => {
    try {
        const response = await axios.get('/contact');
        return response.data; 
    } catch (error) {
        throw new Error('Error fetching contacts');
    }
};

const addContact = async (contact) => { 
    try {
        const response = await axios.post('/contacts', contact); 
        return response.data;
    } catch (error) {
        throw new Error('Contact was not added!');
    }
};


const deleteContact = async (contactId) => { 
    try {
        const response = await axios.delete(`/contacts/${contactId}`); 
        return response.data;
    } catch (error) {
        throw new Error('Contact was not deleted!');
    }
};

const contactsService = {
    fetchContacts,
    addContact,
    deleteContact
}

export default contactsService;
