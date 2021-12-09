import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
    (item, value) => {
      setValues({
        ...values,
        [item]: value,
      });
    },
  ];
};
export { useForm };
