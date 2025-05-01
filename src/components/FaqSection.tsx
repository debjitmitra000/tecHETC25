import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "How can I register for TecHETC events?",
      answer: "Registration for all events can be done through our online portal. Navigate to the specific event you're interested in and click the 'Register' button. You'll need to create an account or log in to complete your registration."
    },
    {
      question: "Is there a fee to participate in the events?",
      answer: "Yes, most events have an entry fee that varies based on the competition. Details about entry fees can be found on each event's page. Some workshops and seminars are free to attend."
    },
    {
      question: "Can students from other colleges participate?",
      answer: "Absolutely! TecHETC welcomes participants from all colleges and universities. Inter-college participation is encouraged to foster a diverse competitive environment."
    },
    // {
    //   question: "What should I bring to the hackathon?",
    //   answer: "Participants should bring their own laptops, chargers, and any hardware components they might need for their projects. We provide Wi-Fi, power outlets, and basic refreshments. For specialty hardware, please check the hackathon page for available resources."
    // },
    {
      question: "What should I bring to the Tech Fest?",
      answer: "Participants should bring their own laptops, chargers, and any hardware components they might need for the events they are participating. We provide Wi-Fi, power outlets, and basic refreshments. For specialty hardware, please check the events page for required resources.",
      category: "events"
    },
    {
      question: "Are there team size restrictions for group events?",
      answer: "Yes, each event has specific team size requirements. Most events allow 2-4 members per team, but this varies by competition. Check the rules section of each event for detailed information."
    },
    // {
    //   question: "Will accommodation be provided for outstation participants?",
    //   answer: "Limited accommodation is available for outstation participants on a first-come, first-served basis. You can request accommodation during the registration process. A nominal fee may apply."
    // }
  ];
  
  const toggleFaq = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-gradient">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className={`mb-4 border-2 ${activeIndex === index ? 'border-primary' : 'border-gray-700'} rounded-lg overflow-hidden pixel-corners`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full p-4 text-left bg-surface hover:bg-surface/80 transition-colors"
              >
                <span className="font-mono font-semibold">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-4 bg-background text-gray-300">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;