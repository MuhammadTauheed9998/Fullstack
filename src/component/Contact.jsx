import React,{useState} from 'react'

const Contact = () => {

const [formData,setFormData]=useState({
    name:"",
    email:"",
    message:""
})

const onChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
}
const onSubmit=(e)=>{
    e.preventDefault();
console.log(formData)
}
const {name,email,message}=formData;
  return (
    <form onSubmit={onSubmit} className='d-flex justify-content-center align-items-center flex-column mt-4'>
      <div class="mb-3 w-50">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" name="name" value={name} onChange={onChange} class="form-control" id="exampleFormControlInput1" placeholder="name"/>
</div>
      <div class="mb-3 w-50">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" name="email" value={email} onChange={onChange} class="form-control" id="exampleFormControlInput1" placeholder="email"/>
</div>
<div class="mb-3 w-50">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" name="message" onChange={onChange} value={message} id="exampleFormControlTextarea1" placeholder='message' rows="3"></textarea>

</div>
<button className='btn btn-primary'>Submit</button>
    </form>
  )
}

export default Contact
