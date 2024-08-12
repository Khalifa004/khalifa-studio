
import { Bot } from "lucide-react";





import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import Counter from "./ui/counter";
import AvatarList from "./ui/avatar-list";
import TypingText from "./ui/typing-text";

const questions = [
  "What do I spend most of my time doing?",
  "What's my favorite part of web development?",
  "How do I approach UX/UI design?",
  "What inspires me in my projects?"
];

const answers = [
  "Building websites.",
  "Creating responsive layouts.",
  "Focusing on user experience.",
  "Innovative ideas and challenges."
];

const RandomQuestionCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
    }, 5000); // Change question every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const Report: React.FC<{ className?: string }> = ({ className }) => {
    return <div className={className}></div>;
  };

  // #region placeholder
  function BoldCopy({
    text = "animata",
    className,
    textClassName,
    backgroundTextClassName,
  }: {
    text: string;
    className?: string;
    textClassName?: string;
    backgroundTextClassName?: string;
  }) {
    if (!text?.length) {
      return null;
    }

    return (
      <div
        className={cn(
          "group relative flex items-center justify-center bg-background px-2 py-2 md:px-6 md:py-4",
          className
        )}
      >
        <div
          className={cn(
            "text-4xl font-black uppercase text-foreground/15 transition-all group-hover:opacity-50 md:text-8xl",
            backgroundTextClassName
          )}
        >
          {text}
        </div>
        <div
          className={cn(
            "text-md absolute font-black uppercase text-foreground transition-all group-hover:text-4xl md:text-3xl group-hover:md:text-8xl",
            textClassName
          )}
        >
          {text}
        </div>
      </div>
    );
  }

  function BentoCard({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) {
    return (
      <div className={cn("relative h-full w-full overflow-hidden rounded-2xl p-4", className)}>
        {children}
      </div>
    );
  }



  function FeatureTwo() {
    return (
      <BentoCard className="relative flex flex-col overflow-visible bg-violet-500 sm:col-span-2">
        <strong className="text-2xl font-semibold text-white">
          <Counter targetValue={6} format={(v) => +Math.ceil(v) + "+ Tech Stack"} />
        </strong>
        <div className="ml-4 mt-auto">
          <AvatarList size="sm" className="py-0" />
        </div>
      </BentoCard>
    );
  }

  function FeatureThree() {
    return (
      <BentoCard className="flex flex-col bg-orange-300 h-48 w-64">
        <Bot className="size-8 md:size-12" />
        <strong className="mt-1 inline-block text-sm">Integrated AI</strong>

        <div className="mt-auto">
          <div className="text-sm font-medium">{questions[currentIndex]}</div>
          <div className="font-semibold">
            <TypingText text={answers[currentIndex]} waitTime={2000} alwaysVisibleCount={0} />
          </div>
        </div>
      </BentoCard>
    );
  }

  function FeatureFour() {
    return (
      <BentoCard className="flex items-center gap-4 bg-lime-300 sm:col-span-2 ">
       <div className="text-2xl font-black text-lime-800">
          Bridging coding and UX/UI design with a passion for 3D modeling and development.
        </div>
        <div className="relative max-h-32 flex-shrink-0 overflow-hidden">
          <Report className="w-40 overflow-hidden border-none shadow-none hover:shadow-none" />
        </div>
      </BentoCard>
    );
  }

  function FeatureFive() {
    return (
      <BentoCard className="flex flex-col items-center justify-center bg-zinc-300 sm:col-span-2">
        <BoldCopy text="Web & UX/UI" className="bg-transparent" textClassName="text-zinc-800" />
      </BentoCard>
    );
  }

 

  // #endregion

  return (
    <div className="storybook-fix w-full">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-4 ">
    
        <FeatureTwo />
        <FeatureThree />
        <FeatureFour />
        <FeatureFive />

      </div>
    </div>
  );
};

export default RandomQuestionCard;
