
import ContactForm from "@/components/ContactForm";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function ContactPage() {
  return (
    <MaxWidthWrapper className="mt-28 sm:mt-40">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contact Us
          </h1>
          <p className="mt-3 text-lg text-zinc-700">
            Have a question or want to work with us? Drop us a message.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8">
          <ContactForm />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
