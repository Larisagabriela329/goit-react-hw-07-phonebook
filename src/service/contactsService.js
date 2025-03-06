import axios from "axios";

axios.defaults.baseURL = "https://67c2f1741851890165adb703.mockapi.io";

// ✅ Corrected fetchContacts endpoint
const fetchContacts = async () => {
    try {
        const response = await axios.get('/contacts'); // Fix: changed '/contact' to '/contacts'
        return response.data; 
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error fetching contacts');
    }
};

// ✅ Ensure `contact` is passed correctly
const addContact = async (contact) => { 
    try {
        const response = await axios.post('/contacts', contact); 
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Contact was not added!');
    }
};

// ✅ Fix delete response to return { id: contactId }
const deleteContact = async (contactId) => { 
    try {
        await axios.delete(`/contacts/${contactId}`); // MockAPI returns {}
        return { id: contactId }; // Return an object with ID for Redux
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Contact was not deleted!');
    }
};

const contactsService = {
    fetchContacts,
    addContact,
    deleteContact
};

export default contactsService;
