import React from "react";
import Button from "../Button";
import { useFormik} from "formik";
import * as Yup from "yup";
const SubscribeButtion = () => {
  //formit libarary use for form handling and accessing data
  //Yup Libarary use for validation
  //for Required ,Min,Max,Email Etc and that is error message
  const formInitialValues = {
    email: "",
  };
  const validation = useFormik({
    initialValues: formInitialValues,
    //add Yub Library for validation
    validationSchema: Yup.object({
      email: Yup.string()
        .trim()
        .email("Enter a correct email Address")
        .min(6)
        .max(256)
        .required("please Enter your Email Address")
    }),
    onSubmit: (values) => {
      console.log(values);
      console.log(values.email);
    },
  });
  // const {handleSubmit,handleChange,values} = useFormik({
  //   initialValues: formInitialValues,
  //   onSubmit:(values)=>{
  //     console.log(values);
  //     console.log(values.email);
  //   }
  // });
  return (
    <div>
      <div className="form-input">
        <form onSubmit={validation.handleSubmit}>
          <Button
            className="btn btn-large"
            type="submit"
            title="Subscrible Now"
          />
          {/* isLoading={loading} */}
          <span className="icon">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </span>
          <input
            type="text"
            name="email"
            onChange={validation.handleChange}
            placeholder="Enter email address"
            value={validation.values.email}
          />
         
           
        </form>
       
      </div>
      <span className="form-input-error">{validation.errors.email}</span>
    </div>
  );
};

export default SubscribeButtion;
