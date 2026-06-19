import React, { useState } from "react";
import Accordion from "../components/Accordion";

export default function FAQ() {
  const [faqs] = useState([
    {
      id: 1,
      question: "What is included in the workshop?",
      answer:
        "Our workshop includes comprehensive training materials, hands-on practice sessions, and certification upon completion.",
    },
    {
      id: 2,
      question: "What are the prerequisites?",
      answer:
        "Basic knowledge of the subject matter is recommended, but beginners are welcome. We provide foundational materials.",
    },
    {
      id: 3,
      question: "Is there a refund policy?",
      answer:
        "Yes, we offer a 30-day money-back guarantee if you're not satisfied with the workshop.",
    },
    {
      id: 4,
      question: "How long does the workshop last?",
      answer:
        "Our standard workshop runs for 4 weeks, with flexible scheduling options available.",
    },
  ]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
