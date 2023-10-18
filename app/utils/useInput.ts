import { useState, useEffect, ChangeEvent } from "react"

export const useInput = (initialValue: string, validationType: string) => {
    const [value, setValue] = useState(initialValue);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('')
    const [isDirty, setDirty] = useState(false);

    const onChange = (e:ChangeEvent<HTMLInputElement>): void  => {
      setValue(e.target.value);
    };

    const onBlur = (e:ChangeEvent<HTMLInputElement>): void  => {
      setDirty(true);
    };

    useEffect(() => {
      switch (validationType) {
        case "email":
          const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          !re.test(value) && isDirty
            ? setEmailError('invalid email format')
            : setEmailError('');
          break;
        case "password":
          value.length < 6 && isDirty
            ? setPasswordError("minimum password length 6 characters")
            : setPasswordError('');
          break;
      }
    }, [value, isDirty]);

    return {
      value,
      onChange,
      emailError,
      onBlur,
      passwordError,
      isDirty,
      setValue,
      setDirty
    };
  };

  



