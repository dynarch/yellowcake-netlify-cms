---
template: ContactPage
slug: contact
title: Kontakt

featuredImage: https://ucarecdn.com/1205a511-4233-4d57-b231-e8ec65178a0b/
# featuredImage: https://ucarecdn.com/e22a858a-b420-47af-99f6-ed54b6860333/
subtitle: Nehmen Sie Kontakt auf
address: 'Bielefeld, Deutschland'
phone: +49 521 963 06 366
email: example@example.com
locations:
  - lat: '52.05297'
    lng: '8.59845'
    mapLink: ''
meta:
  description: This is a meta description.
  title: Contact Page
---

## Example contact form

This form is setup to use Netlify's form handling:

- the form action is set to the current absolute url: `action: '/contact/'`
- a name attribute is sent with the form's data `'form-name': 'Contact'`
- netlify data attributes are added to the form `data-netlify data-netlify-honeypot`

Find out more in the [Netlify Docs](https://www.netlify.com/docs/form-handling/).
