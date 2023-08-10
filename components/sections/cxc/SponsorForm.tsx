import ContactForm from '@/components/sections/templates/ContactForm';

import { SPONSOR_FORM_FIELDS } from '@/constants/forms';

export default function SponsorForm() {
  return (
    <ContactForm
      title='Sponsor Form'
      description='Have a question or interested in sponsoring us? Send us a message here and we will get back to you ASAP!'
      fields={SPONSOR_FORM_FIELDS}
    />
  );
}
