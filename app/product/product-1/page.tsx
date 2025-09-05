
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Schedule from "@/components/Schedule";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Product 1: The Innovator's Journey to China",
  description: "A 12-day program for students and young professionals to explore China's innovation ecosystem.",
};

const scheduleData = [
  {
    day: 1,
    title: "Arrival in Beijing",
    items: [
      { time: "PRE-DAY", title: "Welcome Dinner & Ice-Breaking" },
    ],
  },
  {
    day: 2,
    title: "Beijing: Culture & History",
    items: [
      { time: "10:00-12:00", title: "Forbidden City" },
      { time: "12:00-14:00", title: "Lunch" },
      { time: "14:00-15:00", title: "Jingshan Garden" },
      { time: "15:00-16:00", title: "Hutong Area" },
    ],
  },
  {
    day: 3,
    title: "Beijing: Business & Networking",
    items: [
      { time: "10:00-12:00", title: "Company Visit 1" },
      { time: "14:00-16:00", title: "Guest Speaker & Mingling Time" },
      { time: "18:00-21:00", title: "Dinner & Local Bar/Livehouse" },
    ],
  },
  {
    day: 4,
    title: "Beijing: Wonder of the World",
    items: [
      { time: "10:00-14:00", title: "Great Wall (Lunch on your own)" },
    ],
  },
  {
    day: 5,
    title: "Travel to Xi'an",
    items: [
      { time: "10:00-12:00", title: "Company Visit 2" },
      { time: "12:00-13:00", title: "Lunch" },
      { time: "14:00-18:00", title: "High-speed Train to Xi'an (Lunch on your own)" },
      { time: "18:00-20:00", title: "Huimin Street" },
      { time: "20:00-21:00", title: "Datang Ever-bright City" },
    ],
  },
  {
    day: 6,
    title: "Xi'an: Ancient Wonders",
    items: [
      { time: "10:00-12:00", title: "Company Visit 3" },
      { time: "12:00-13:00", title: "Lunch" },
      { time: "14:00-16:00", title: "Terracotta Warriors" },
      { time: "16:00-17:00", title: "Ancient Wall" },
      { time: "18:00-20:00", title: "Specialised Dinner" },
    ],
  },
  {
    day: 7,
    title: "Xi'an: Cultural Immersion",
    items: [
      { time: "10:00-12:00", title: "Cultural Experience: Shadow Play (Pi Ying)" },
      { time: "12:00-13:00", title: "Lunch" },
      { time: "14:00-16:00", title: "The Longest Day in ChangAn" },
      { time: "18:00-20:00", title: "Dinner & Round Table" },
      { time: "20:00-22:00", title: "Local Bar" },
    ],
  },
  {
    day: 8,
    title: "Travel to Shanghai",
    items: [
      { time: "All Day", title: "Fly to Shanghai" },
    ],
  },
  {
    day: 9,
    title: "Shanghai: Business & Modernity",
    items: [
      { time: "10:00-12:00", title: "Company Visit 4" },
      { time: "14:00-18:00", title: "City Walk & Huangpu River Cruise" },
    ],
  },
  {
    day: 10,
    title: "Shanghai: Innovation & Relaxation",
    items: [
      { time: "10:00-12:00", title: "Company Visit 5" },
      { time: "12:00-14:00", title: "Lunch" },
      { time: "15:00-17:00", title: "Cultural Experience: Chinese Massage" },
    ],
  },
  {
    day: 11,
    title: "Shanghai: Culture & Farewell",
    items: [
      { time: "10:00-12:00", title: "JingAn Temple" },
      { time: "15:00-17:00", title: "Cultural Experience: Tea Ceremony" },
      { time: "18:00-20:00", title: "Farewell Dinner" },
      { time: "20:00-22:00", title: "Late Night Clubbing" },
    ],
  },
  {
    day: 12,
    title: "Departure",
    items: [
      { time: "All Day", title: "Check-out" },
    ],
  },
];


export default function Product1Page() {
  return (
    <MaxWidthWrapper className="mt-28 sm:mt-40 pb-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 font-montserrat">
          The Innovator's Journey to China
        </h1>
        <div className="prose prose-lg max-w-none text-zinc-300 prose-p:text-zinc-300 space-y-6">
          <p>
            This 12-day program is designed for students and young professionals to explore China's innovation ecosystem. Participants will visit top-tier companies, meet with entrepreneurs, and experience the vibrant culture of China.
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-4 font-montserrat">Schedule</h2>
          <Schedule schedule={scheduleData} />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
