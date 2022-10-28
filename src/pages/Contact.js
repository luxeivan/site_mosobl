import React, { useEffect, useState } from "react";
import { addressServer } from "../config";

export default function Contact() {
  const [contact, setContact] = useState({});
  
  useEffect(() => {
    fetch(`${addressServer}/api/contact`)
      .then((response) => {
        return response.json();
      })
      .then((data) => setContact(data.data))
      .catch((err) => {
        console.log(err)
        setContact({})
      }
      );
  }, []);
  
  return (
    <div className="page-content">
      <h1 className="inner-post__title">{contact&&contact.attributes && contact.attributes.title}</h1>
      <p>{contact&&contact.attributes && contact.attributes.content}</p>
      <a href="moetp.ru">Портал</a>
    </div>
  );
}
