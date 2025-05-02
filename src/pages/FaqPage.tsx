import React, { useState , useEffect} from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const FaqPage: React.FC = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  
  const faqs: FaqItem[] = [
    // General
    {
      question: "What is TECHetc?",
      answer: "TECHetc is our annual technology festival that celebrates innovation across all engineering disciplines. It features competitions, challenges, tech talks, and networking opportunities for students passionate about technology.",
      category: "general"
    },
    {
      question: "When and where will TECHetc 2K25 be held?",
      answer: "TECHetc 2025 will be held on May 15-16, 2025 at the Hooghly Engineering & Technology College Campus, Vivekananda Rd, Pipulpati Post, Chinsurah, West Bengal, 712103.",
      category: "general"
    },
    {
      question: "What is this year's theme?",
      answer: "This year's theme is 'Retro Genesis: Where 8-bit Meets Innovation', celebrating the blend of nostalgic computing with cutting-edge technology across all engineering disciplines.",
      category: "general"
    },
    // Registration
    {
      question: "How can I register for TECHetc events?",
      answer: "Registration for all events can be done through our online Registration form. Navigate to the specific event you're interested in and click the 'Register' button. You'll need to povide your details to complete your registration.",
      category: "registration"
    },
    {
      question: "Is there a fee to participate in the events?",
      answer: "Yes, most events have an entry fee that varies based on the competition. Details about entry fees can be found on each event's page. Some events and competitions are free to attend.",
      category: "registration"
    },
    {
      question: "Can students from other colleges participate?",
      answer: "Absolutely! TECHetc welcomes participants from all colleges and universities. Inter-college participation is encouraged to foster a diverse competitive environment.",
      category: "registration"
    },
    {
      question: "What is the last date for registration?",
      answer: "The registration deadline for most events is May 14, 2025. However, some popular events may close registrations earlier if all slots are filled, so we recommend registering as soon as possible.",
      category: "registration"
    },
    // Event Specific
    {
      question: "What should I bring to the Tech Fest?",
      answer: "Participants should bring their own laptops, chargers, and any hardware components they might need for the events they are participating. We provide Wi-Fi, power outlets, and basic refreshments. For specialty hardware, please check the events page for required resources.",
      category: "events"
    },
    {
      question: "Are there team size restrictions for group events?",
      answer: "Yes, each event has specific team size requirements that varies by competition. Check the rules section of each event for detailed information.",
      category: "events"
    },
    {
      question: "Will materials be provided for the Circuit Design Challenge?",
      answer: "Basic electronic components will be provided for the Circuit Design Challenge. A detailed list of available components will be shared with registered participants one week before the event. Participants may bring additional components, subject to approval by the event coordinators.",
      category: "events"
    },
    // Logistics
    // {
    //   question: "Will accommodation be provided for outstation participants?",
    //   answer: "Limited accommodation is available for outstation participants on a first-come, first-served basis. You can request accommodation during the registration process. A nominal fee may apply.",
    //   category: "logistics"
    // },
    {
      question: "Is food provided during the events?",
      answer: "Yes, food and refreshments will be available throughout the event. Snacks and beverages will be available at multiple stations across the venue.",
      category: "logistics"
    },
    {
      question: "Is there parking available at the venue?",
      answer: "Yes, limited parking is available at the venue. We recommend carpooling or using public transportation if possible.",
      category: "logistics"
    }
  ];
  
  const toggleFaq = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || faq.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16"
    >
      <div className="container mx-auto px-4">
        <h1 className="section-title text-gradient-1">Frequently Asked Questions</h1>
        
        
        {filteredFaqs.length > 0 ? (
          <div className="max-w-3xl mx-auto">
            {filteredFaqs.map((faq, index) => {
              const getCategoryColor = () => {
                switch(faq.category) {
                  case 'general': return 'neon-cse';
                  case 'registration': return 'neon-ece';
                  case 'events': return 'neon-me';
                  case 'logistics': return 'neon-ce';
                  default: return 'primary';
                }
              };
              
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  key={index}
                  className={`mb-4 border-2 ${
                    activeIndex === index 
                      ? `border-${getCategoryColor()}` 
                      : 'border-gray-700'
                  } rounded-lg overflow-hidden pixel-corners`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center w-full p-4 text-left bg-surface hover:bg-surface/80 transition-colors"
                  >
                    <div className="flex items-center">
                      <span className={`inline-block w-2 h-2 rounded-full bg-${getCategoryColor()} mr-3`}></span>
                      <span className="font-mono font-semibold">{faq.question}</span>
                    </div>
                    {activeIndex === index ? (
                      <ChevronUp className={`h-5 w-5 text-${getCategoryColor()}`} />
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
                      <div className="mt-2 text-right">
                        <span className={`inline-block px-2 py-1 text-xs font-mono uppercase bg-${getCategoryColor()} bg-opacity-20 text-${getCategoryColor()} rounded-full`}>
                          {faq.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No FAQs found matching your search criteria.</p>
            <button 
              onClick={() => {setSearchTerm(''); setCategoryFilter('all');}}
              className="mt-4 btn btn-primary"
            >
              Reset Filters
            </button>
          </div>
        )}
        
        <div className="max-w-3xl mx-auto mt-16 p-6 bg-surface rounded-lg border-2 border-primary pixel-corners">
          <h2 className="font-pixel text-xl mb-4 text-center">  Still have questions?</h2>
          <p className="text-center text-gray-300 mb-6">
            If you couldn't find the answer to your question, feel free to reach out to us directly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* <a 
              href="mailto:info@techetc.edu" 
              className="btn btn-secondary text-center"
            >
              Email Us
            </a> */}
            <a 
              href="https://forms.gle/f9gcSDFbNmm1nNnz9" 
              className="btn btn-green text-center"
            >
              Contact Form
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FaqPage;