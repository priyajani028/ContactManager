const express=require("express");
const router=express.Router();

const {getContacts, getContact, createContact, updateContact, deleteContact}=require("../controllers/contactContoller");
const validateToken = require("../middleware/validateTokenHandler");

// router.route("/").get(getContacts);
// router.route("/:id").get(getContact);
// router.route("/").post(createContact);
// router.route("/:id").put(updateContact);
// router.route("/:id").delete(deleteContact);

//Simpler Form

router.use(validateToken);
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports=router;