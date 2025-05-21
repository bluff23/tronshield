import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is my wallet data stored?",
      answer:
        "No, your wallet data is never stored. We analyze it in memory and immediately discard it after generating your security report. Your privacy is our top priority.",
    },
    {
      question: "How is the security score calculated?",
      answer:
        "Our security score is based on multiple factors including transaction patterns, smart contract interactions, historical activity, and known risk factors. We analyze these data points to provide a comprehensive security assessment.",
    },
    {
      question: "Can I verify another wallet?",
      answer:
        "Yes, you can verify any public TRON wallet address. Simply enter the address in the verification form and get instant results.",
    },
    {
      question: "Is this a full security audit?",
      answer:
        "No, this is a real-time security scoring tool designed to highlight potential risks and security concerns. While comprehensive, it's not a substitute for a full professional security audit.",
    },
    {
      question: "How often should I verify my wallet?",
      answer:
        "We recommend verifying your wallet after any significant transactions or at least once a month to ensure ongoing security.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our wallet security
            verification process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
