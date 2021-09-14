import { useState } from 'react';

// T is fields shape
interface FormData<T> {
  initialValues: T;
  // validators: T;
  onSubmit: () => void;
}

export function useForm<T>({ initialValues, onSubmit }: FormData<T>) {
  const [values, setValues] = useState(initialValues);

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    const { value } = event.target;

    setValues(() => ({
      ...values,
      [fieldName]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit();
  }

  return {
    values,
    handleSubmit,
    handleChange,
  };
}
