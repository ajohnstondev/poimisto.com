import React from 'react'
import { PageProps } from 'gatsby'

import Layout from '@/components/Layout'
import { ContactForm } from '@/components/Forms'

const Contact: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h2>Contact Us</h2>
      <br/><br/>
      <ContactForm
        name="contact-us"
        path="/contact"
        submitText="Submit me"
        inputs={[
          {
            name : "name",
            type : "text",
            placeholder : "Your name",
            required: "Required",
          },
          {
            name : "email",
            type : "email",
            placeholder : "Your email",
            required: "Required",
          },
          ,
          {
            name : "message",
            type : "textarea",
            placeholder : "Your message"
          }
        ]}
        />

    </Layout>
  )
}

export default Contact
