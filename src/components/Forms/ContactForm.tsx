import React, {useState} from 'react'
import { useForm } from 'react-hook-form'

import { Input, TextArea } from '@/components/Inputs'
import Button from '@/components/Button'
import * as S from './contact-form'

import encode from '@/utils/encode';



type Props = {
  path?: string,
  name: string,
  inputs: Array<any>, 
  submit?: boolean,
  submitText? : string,
  submitSuccessText?: string,
  submitSuccess: () => void
}

const ContactForm: React.FC<Props> = ({
  path =  "/",
  name = "contact-form",
  inputs,
  submit = true,
  submitText = "Submit",
  submitSuccessText = "Sent",
  submitSuccess
}) => {

  const [ formIsSent, setFormIsSent] = useState(false);
  const { handleSubmit, register, errors } = useForm();

  const submitForm = (values: any) => {
    fetch(values.path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode(values)
    })
    .then(() => {
      setFormIsSent(true);
      if (typeof submitSuccess === 'function') submitSuccess();
    })
    .catch(error => console.error(error))   

  }


  return (
    <S.FormWrapper>
      <form
        name={name}
        method="post"
        data-netlify="true"
        data-netlify-honeypot="test"
        onSubmit={handleSubmit(submitForm)}
      >
        <input style={{ display: "none" }} ref={register()} name="test" type="text" />
        <input type="hidden" name="form-name" ref={register()} value={name} />
        <input type="hidden" name="path" ref={register()} value={path} />

  
        {inputs && inputs.map((input) => {
          switch(input.type.toLowerCase()) {
            case 'hidden':
              return (
                <div key={input.name}>
                  <input 
                    type="hidden" 
                    name={input.name} 
                    value={input.value} 
                    ref={register()}
                  />
                </div>
              )
            case 'text':
            case 'email':
              return (
                <div className="field" key={input.name}>
                  <Input
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    pattern={input.pattern}
                    ref={register({
                      required: input.required,
                      pattern : input.pattern
                    })}
                  />
                  <span className="error">
                    {errors[input.name] && errors[input.name].message}
                  </span>
                </div>
              );
            case 'textarea':
              return (
                <div className="field" key={input.name}>
                  <TextArea
                    name={input.type}
                    placeholder={input.placeholder}
                    rows={input.rows || 5}
                    ref={register({
                      required: input.required,
                      pattern : input.pattern
                    })}
                  />
                  <span className="error">{errors[input.name] && errors[input.name].message}</span>
                </div>

              )
          }
          
        })}

        {submit && 
          <Button variant="contained" color={(formIsSent) ? "#333" : "#0085fc"} type="submit" disabled={(formIsSent) ? true : false}>
            {(formIsSent) ? submitSuccessText : submitText}
          </Button>
        }

      </form>

    </S.FormWrapper>
   
  )
}

export default ContactForm
