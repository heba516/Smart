import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Heading from "./Heading";
import { IFeatures } from "@/interfaces";
import Image from "next/image";
import { Button } from "./ui";

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
  return (
    <section className="lg:w-[70%] xl:w-[60%] px-4 mx-auto py-20 lg:py-0 text-center space-y-5">
      <Heading
        label="Frequently Asked Questions"
        desc="Quick answers to questions you may have. Can't find what you're looking for? Check out our full documentation"
      />
      <Accordion type="single" collapsible>
        {questions.map((question, index) => (
          <AccordionItem value={`${index}`} key={index}>
            <AccordionTrigger className="text-black text-sm md:text-xl font-medium">
              <div className="flex items-center justify-start space-x-2 md:space-x-4">
                <Image
                  src={"/images/question.svg"}
                  alt="smart"
                  width={30}
                  height={30}
                  className="w-6 h-6 md:w-[30px] md:h-[30px]"
                />
                <p>{question.title}</p>
              </div>
              <span className="text-medGray ml-7 md:ml-0">{question.itm}</span>
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base font-medium text-medGray">
              {question.desc}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <Button
        size={"lg"}
        className="w-full lg:w-3/5 mx-auto bg-transparent text-black border border-black rounded-lg text-base font-semibold"
      >
        Show All
      </Button>
    </section>
  );
}
