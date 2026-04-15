import { useState } from 'react'; 

export default function RegisterForm() { 
  const [form, setForm] = useState({ 
    firstName: 'Luke', 
    lastName: 'Jones', 
    email: 'lukeJones@sculpture.com', 
  }); 

  return ( 
    <> 
      <label> 
        First name: <input value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })}/> 
      </label> 

      <label> 
        Last name: <input value={form.lastName}  onChange={e => setForm({ ...form, lastName: e.target.value })} /> 
      </label> 

      <label> 
        Email: <input value={form.email} onChange={e =>  setForm({ ...form, email: e.target.value })} /> 
      </label> 

      <p> 
        {form.firstName}{' '} 
        {form.lastName}{' '} 
        ({form.email})
      </p>
       
    </> 
  ); 
} 

// NOTE: 
// e.target.value --> in the input will get that input value store in e
// value --> controls what shows in the box and keeps it synced with state
// {' '} --> make a space