import { useEffect, useState } from "react";

export const SelectedContact = ({selectedContactId}) => {

    const userURL = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
    const [contact,setContact] = useState({});
    const [address,setAddress] = useState({});

    useEffect(()=>{
        async function fetchContact(){

            try{
                const response = await fetch(userURL);
                const result = await response.json();
                const { address } = result;
                console.log(address);
                setContact(result);
                setAddress(address);
            } catch (error) {
                console.log(error);
            }
        }
        fetchContact();
    },[])
    
    return (
        <section>
            <h3>{contact.name} {contact.phone}</h3>
            <p>{address.street} {address.suite}</p>
            <p>{address.city} {address.zipcode}</p>
        </section>
    )
};