
//@desc Get all contacts
//@route Get /api/contacts
//@access public
const getContact = (req,res) => {
    res.status(200).json({ message: "Get all contacts"});
};

//@desc create new contact
//@route post /api/contacts
//@access public
const createContact = (req,res) => {
    res.status(201).json({ message: "Create Contact"});
}



module.exports = {getContact,createContact};