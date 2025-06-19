"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";
import Heading from "@/components/Heading";
import { IFeatures } from "@/interfaces";
import Image from "next/image";
import { Button } from "@/components/ui";
import { useState } from "react";

const questions: IFeatures[] = [
  {
    title: "How we can download App?",
    itm: "(183+ asked)",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus amet quidem accusantium autem quam praesentium omnis aperiam? Quis a nam eos modi facilis, consectetur, temporibus nulla earum id tenetur totam!",
  },
  {
    title: "How do I scan and add products to my cart?",
    itm: "(130+ asked)",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus amet quidem accusantium autem quam praesentium omnis aperiam? Quis a nam eos modi facilis, consectetur, temporibus nulla earum id tenetur totam!",
  },
  {
    title: "How does the system enhance the shopping experience?",
    itm: "(100+ asked)",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus amet quidem accusantium autem quam praesentium omnis aperiam? Quis a nam eos modi facilis, consectetur, temporibus nulla earum id tenetur totam!",
  },
  {
    title: "What technologies power this system?",
    itm: "(87+ asked)",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus amet quidem accusantium autem quam praesentium omnis aperiam? Quis a nam eos modi facilis, consectetur, temporibus nulla earum id tenetur totam!",
  },
  {
    title: "Can I track product availability before visiting a store?",
    itm: "(80+ asked)",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus amet quidem accusantium autem quam praesentium omnis aperiam? Quis a nam eos modi facilis, consectetur, temporibus nulla earum id tenetur totam!",
  },
  {
    title: "Can I get personalized recommendations?",
    itm: "(50+ asked)",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus amet quidem accusantium autem quam praesentium omnis aperiam? Quis a nam eos modi facilis, consectetur, temporibus nulla earum id tenetur totam!",
  },
  {
    title: "What should I do if the smart cart or app isn’t working?",
    itm: "(45+ asked)",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus amet quidem accusantium autem quam praesentium omnis aperiam? Quis a nam eos modi facilis, consectetur, temporibus nulla earum id tenetur totam!",
  },
];

export default function Questions() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="space-y-5 mx-auto px-4 py-20 lg:w-[70%] xl:w-[60%] text-center duration-300">
      <Heading
        label="Frequently Asked Questions"
        desc="Quick answers to questions you may have. Can't find what you're looking for? Check out our full documentation"
      />
      <Accordion type="single" collapsible>
        {(showAll ? questions : questions.slice(0, 5)).map(
          (question, index) => (
            <AccordionItem value={`${index}`} key={index}>
              <AccordionTrigger className="font-medium text-black text-sm md:text-xl">
                <div className="flex justify-start items-center space-x-2 md:space-x-4">
                  <Image
                    src={"/images/question.svg"}
                    alt="smart"
                    width={30}
                    height={30}
                    className="w-6 md:w-[30px] h-6 md:h-[30px]"
                  />
                  <p>{question.title}</p>
                </div>
                <span className="ml-7 md:ml-0 text-medGray">
                  {question.itm}
                </span>
              </AccordionTrigger>
              <AccordionContent className="border-medGray mx-auto border-t w-[90%] font-medium text-medGray text-sm text-start md:text-base">
                {question.desc}
              </AccordionContent>
            </AccordionItem>
          )
        )}
      </Accordion>

      <Button
        onClick={() => setShowAll((prev) => !prev)}
        size={"lg"}
        className="hover:border-primaryRed bg-transparent mx-auto border border-black rounded-lg w-full lg:w-3/5 font-semibold text-base text-black hover:text-primaryRed duration-300"
      >
        {!showAll ? "Show All" : "Show Less"}
      </Button>
    </section>
  );
}
