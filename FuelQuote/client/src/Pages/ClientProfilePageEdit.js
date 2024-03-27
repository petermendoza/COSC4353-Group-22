import ClientProfileFormEdit from '../Components/ClientProfileForm/ClientProfileFormEdit';
import {useState} from 'react';

const ClientProfilePageEdit = () => {

  const [name, setName] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [state, setState] = useState('');

  // on form save changes click handler
  const handleSave = () => {

    const newProfile = {
      name,
      address1,
      address2,
      city,
      zipcode,
      state
    };
    // Placeholder for object to be uploaded/updated to DB
    console.log(newProfile);
  };

  let registerData = {
    handleSave,
    setName,
    setAddress1,
    setAddress2,
    setCity,
    setZipcode,
    setState
  };

  return (
    <div>
      <ClientProfileFormEdit registerState={registerData}/>
    </div>
  );
};

export default ClientProfilePageEdit;