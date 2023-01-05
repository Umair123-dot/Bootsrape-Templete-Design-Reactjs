import { Field, Form, Formik } from 'formik'
import React from 'react'

const Practice = () => {
  return (
    <div className='practice-wrapper'>
    <Formik
    initialValues={{name:"",country:""}}
    onSubmit={(values)=>{
        console.log(values)

    }}
    >
        <Form>
            <label>Name</label>
            <Field type="text" name="name"  />
            <button type='submit'>submit</button>

            <Field name="country" as="select">
                <option value="Canada">Canada</option>
                <option value="Canada">England</option>
            </Field>
            
        </Form>

    
    </Formik>
       
    </div>
  )
}

export default Practice