import ContactUsHeader from '@/components/shared/ContactUsHeader';
import ContactUsForm from '@/components/shared/ContactUsForm';
import ContactUsAddress from '@/components/shared/ContactUsAddress';

const ContactUs = () => {
  return (
    <main className="overflow-x-hidden">
      <ContactUsHeader />
      <ContactUsForm />
      <ContactUsAddress />
    </main>
  );
};

export default ContactUs;
