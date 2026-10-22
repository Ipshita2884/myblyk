"use client";
import { useState } from "react";
import FaqTabs from "@/components/faqs/FaqTabs";
import FaqAccordionList from "@/components/faqs/FaqAccordionList";

const FAQ_DATA: Record<string, { question: string; answer: string }[]> = {
  "Product & Capabilities": [
    {
      question: "What are MyBlyk AI Glasses?",
      answer: "MyBlyk AI Glasses are AI-powered smart glasses being developed primarily for visually impaired and blind users. They are designed to help users access visual information and better understanding of their surroundings through voice-based interaction.",
    },
    {
      question: "What can MyBlyk AI Glasses help users do?",
      answer: "MyBlyk is being developed to support activities such as identifying objects, reading text, understanding surroundings and accessing relevant information through voice. Some capabilities have been tested at the prototype stage, while others remain under development.",
    },
    {
      question: "Can MyBlyk AI Glasses read printed text?",
      answer: "Text reading has been tested at the prototype stage. The aim is to help users access information from everyday text, such as labels, signs and documents. Performance may vary depending on text visibility, lighting, camera view and other conditions.",
    },
    {
      question: "Can MyBlyk recognize objects and describe the surroundings?",
      answer: "Object detection has been confirmed, while object recognition and real-time environment description have been tested at the prototype stage. Broader scene understanding is still being tested, so the final capability set may differ from current prototypes.",
    },
    {
      question: "Are all MyBlyk AI Glasses features available today?",
      answer: "No. MyBlyk is progressing through product development and testing. Some functions have been confirmed or prototype-tested, while features such as navigation assistance, face recognition and distance estimation remain under development. The final commercial features will be communicated as they are validated.",
    },
  ],
  "Technology & Connectivity": [
    {
      question: "How do MyBlyk AI Glasses work?",
      answer: "MyBlyk is being developed to capture visual information, process it using AI and communicate relevant information through voice. Its architecture combines visual input, sensor data, computer vision, decision-making and audio output.",
    },
    {
      question: "What is Edge AI in MyBlyk AI Glasses?",
      answer: "Edge AI means processing selected AI tasks directly on a device rather than depending entirely on a remote server. MyBlyk is being designed to use on-device intelligence for selected core safety-oriented functions, helping reduce unnecessary dependence on mobile phone' or cloud processing.",
    },
    {
      question: "Do MyBlyk AI Glasses work without the internet?",
      answer: "Selected core safety-oriented functions are intended to use on-device Edge AI, reducing the need for constant internet connectivity for those tasks. More complex or computationally intensive functions may require a connected mobile device or cloud processing. MyBlyk should not be described as completely offline.",
    },
    {
      question: "Do MyBlyk AI Glasses connect to a smartphone?",
      answer: "The current architecture is designed to connect with a mobile device through Bluetooth Low Energy (BLE) for broader system functionality. The exact pairing process, supported devices and final software requirements will be confirmed as the commercial product develops.",
    },
    {
      question: "How do MyBlyk AI Glasses communicate information to users?",
      answer: "MyBlyk is designed around voice-based output so users can receive relevant information without needing to read a screen. The current product concept uses one open-ear speaker positioned on the right-hand-side temple. Final product details will be confirmed before commercial availability.",
    },
  ],
  "Privacy, Safety & Trust": [
    {
      question: "How does MyBlyk approach privacy?",
      answer: "MyBlyk recognizes that privacy is important for AI-powered wearables. The product is being developed with consideration for where information is processed and when mobile or cloud connectivity may be needed. Specific data-handling practices should be reviewed in the published Privacy Policy and final product documentation.",
    },
    {
      question: "Are MyBlyk AI Glasses always recording?",
      answer: "The final commercial camera and recording behaviour has not been established in the information currently approved for publication. We will communicate the product's actual capture, recording and storage behaviour before commercial availability rather than make an unverified privacy promise.",
    },
    {
      question: "Is visual information processed on the glasses or in the cloud?",
      answer: "The planned architecture uses on-device processing for selected core functions, while more complex tasks may use mobile or cloud processing. The exact handling of each data type will depend on the implemented feature and will be explained in the applicable product and privacy documentation.",
    },
    {
      question: "How accurate are MyBlyk AI Glasses?",
      answer: "There is no verified overall accuracy percentage available for the complete product. Object detection has been confirmed, and selected features have been prototype-tested, but results can vary with lighting, distance, camera view, scene complexity and the task being performed. Development and testing are ongoing.",
    },
    {
      question: "Can MyBlyk replace a cane, guide dog or human assistance?",
      answer: "MyBlyk is being developed as an assistive technology companion, not as a guaranteed replacement for a cane, guide dog, trained support or a user's own judgement. Users should continue to rely on established mobility aids and appropriate safety practices, particularly in traffic and other hazardous environments.",
    },
  ],
  "Pricing, Pre-Booking & Availability": [
    {
      question: "How much does it cost to pre-book MyBlyk AI Glasses?",
      answer: "The currently listed pre-booking amount is ₹999. Please review the applicable terms on the official website before making a payment. The pre-booking amount should not be interpreted as the final product price.",
    },
    {
      question: "What is the expected price of MyBlyk AI Glasses?",
      answer: "The current website pricing direction lists an MRP of ₹29,999 and an expected launch-price range of ₹22,XXX–₹25,XXX. These are indicative website figures, not a confirmation of the final payable price. The final price and applicable terms will be announced officially.",
    },
    {
      question: "When will MyBlyk AI Glasses launch in India?",
      answer: "The current roadmap lists Beta Trial for January 2027 and Consumer Launch & Scale for April 2027. These are planned milestones, not a guarantee of a specific delivery date. Timing may change as product development, testing and launch preparation progress.",
    },
    {
      question: "Is the ₹999 pre-booking amount refundable?",
      answer: "The final pre-booking refund conditions are still being established. Please check the applicable pre-booking terms presented on the official website before paying. Do not assume that a refund is automatic or guaranteed unless the published terms explicitly provide for it.",
    },
    {
      question: "Will MyBlyk AI Glasses require a paid subscription?",
      answer: "The subscription model, pricing and included benefits have not been finalized. Any future subscription plans, optional services or free access periods will be communicated through official product information once the details are confirmed.",
    },
  ],
  "Everyday Use & Accessibility": [
    {
      question: "Who are MyBlyk AI Glasses being developed for?",
      answer: "The primary audience is visually impaired and blind users, including adults and older people who may benefit from greater access to visual information. MyBlyk is also exploring broader use cases for people who want AI-assisted environmental understanding during everyday activities.",
    },
    {
      question: "Can MyBlyk help with everyday tasks such as shopping, reading and travel?",
      answer: "MyBlyk is being developed around everyday situations where visual information matters, including reading text, understanding objects, shopping, travelling and accessing information in professional environments. The level of support depends on each feature's development and testing status.",
    },
    {
      question: "Can MyBlyk help users navigate unfamiliar places?",
      answer: "Navigation-related assistance is under development. MyBlyk aims to improve environmental awareness and help users access relevant information, but it should not be treated as a fully validated navigation system or a guarantee of safe movement.",
    },
    {
      question: "What are the Assist, Echo and Explorer Series?",
      answer: "Assist is designed around accessibility and everyday assistance for visually impaired and blind users. Echo is a planned experience for people with partial hearing loss. Explorer is intended for travelers, explorers, students and researchers who want AI-assisted environmental understanding. Their availability and capabilities differ by series.",
    },
    {
      question: "Can MyBlyk help users become more independent?",
      answer: "MyBlyk aims to support greater independence by making selected visual information easier to access and helping users understand aspects of their surroundings. It is intended to complement existing skills, mobility aids and support systems, not to promise complete independence or remove every everyday barrier.",
    },
  ],
  "Company & Partnerships": [
    {
      question: "Which company is developing MyBlyk AI Glasses?",
      answer: "MyBlyk is an assistive technology brand being developed by Trinetrum Ventures Private Limited, an India-based company working across AI, computer vision, Edge AI and assistive technology.",
    },
    {
      question: "Where is Trinetrum Ventures Private Limited based?",
      answer: "The company's registered office is in Kanth, Moradabad district, Uttar Pradesh, India. MyBlyk follows an India-first approach, with future expansion depending on product readiness and business development.",
    },
    {
      question: "Does MyBlyk work with NGOs and accessibility organizations?",
      answer: "MyBlyk welcomes relevant enquiries from NGOs, accessibility organizations, hospitals, institutions and other groups interested in assistive technology. Potential collaborations can be discussed through the Contact Us page; any specific partnership should be confirmed before it is represented as established.",
    },
    {
      question: "Can investors contact Trinetrum Ventures about MyBlyk?",
      answer: "Yes. Investors interested in learning about MyBlyk can contact Trinetrum Ventures through the official contact details. An enquiry is an opportunity to begin a conversation and does not imply that funding is currently open, guaranteed or already secured.",
    },
    {
      question: "How can I contact the MyBlyk team?",
      answer: "You can reach the team at trinetrumventures@gmail.com or call +91 85329 99824. For partnership, investor or general enquiries, visit the Contact Us page and select the relevant enquiry type.",
    },
  ],
};

export default function FaqsClient() {
  const [activeTab, setActiveTab] = useState("Product & Capabilities");

  return (
    <>
      <FaqTabs 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
      
      <FaqAccordionList faqs={FAQ_DATA[activeTab] || []} />
    </>
  );
}
