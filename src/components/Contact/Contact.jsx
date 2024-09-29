import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { IoPersonOutline, IoPhonePortraitOutline } from "react-icons/io5";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.contactContainer}>
      <ul>
        <li className={css.contactItem}>
          <IoPersonOutline /> {contact.name}
        </li>
        <li className={css.contactItem}>
          <IoPhonePortraitOutline /> {contact.number}
        </li>
      </ul>
      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
