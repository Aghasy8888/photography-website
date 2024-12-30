export const handleChange = (e, setFormValues) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  export const processError = (err, errors) => {
    if (err.path) {
      const key = err.path;
      errors[key] = err.message;
    }
  }