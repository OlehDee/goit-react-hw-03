
import css from "./ContactList.module.css";
import Contact from "../Contacts/Contact";

export default function ContactList({ contact, onDelete }) {
  return (
    <ul className={css.list}>
      {contact.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}