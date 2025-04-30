import React, { useState, useEffect } from "react";
import { useRegistration } from "../contexts/RegistrationContext";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { EventProps } from "../components/EventCard";
import {
  Cpu,
  Zap,
  Cog,
  Building2,
  Users,
  Trophy,
  Clock,
  Calendar,
  MapPin,
  CreditCard,
  BadgeCheck,
  FlaskConical,
  Bolt,
  Brain,
} from "lucide-react";
import "../app.css";

const DepartmentPage: React.FC = () => {
  const { dept } = useParams<{ dept: string }>();
  const { openModal, setSelectedEvents } = useRegistration();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate(); // Add this hook for programmatic navigation
  const eventId = searchParams.get("event");

  const [activeTab, setActiveTab] = useState<"events" | "team" | "about">(
    "events"
  );
  const [selectedEvent, setSelectedEvent] = useState<EventProps | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeModal = () => {
    navigate("/events", { replace: true });
  };

  const departments = {
    cse: {
      name: "Computer Science Engineering",
      shortName: "CSE",
      color: "neon-cse",
      icon: <Cpu className="h-6 w-6" />,
      description:
        "The Computer Science department hosts coding challenges, hackathons, and software development competitions that push the boundaries of digital innovation.",
      coordinator: "Dr. Alan Turing",
      studentCoordinator: "Jane Hopper",
      events: [
        {
          id: "code-2-duo",
          title: "CODE – 2 – DUO",
          department: "cse",
          departmentName: "CSE",
          description:
            "CODE-2-DUO will consist of 2 rounds, consisting of problems, testing your logic, algorithmic and problem-solving skills. The rounds are as follows: \n\n Round 1 (Prelims): 15 code snippets written in C language will be provided in Google form whose outputs are to be given by the participants. Time: 30 minutes.\n\n Round 2 (Finals): 4 problem statements ranging from easy, medium and hard levels for which a solution is to be given by the teams in C / C++ / JAVA. Time: 2 hours (120 minutes).",
          entryFee: 150,
          prize: 5000,
          date: "Nov 15",
          time: "11:00 AM",
          icon: <Cpu className="h-5 w-5 text-neon-cse" />,
          bannerImage: "/images/code-2-duo.webp",
          rules: [
            "Teams must consist of atleast and atmost 2 members, Solo is not allowed. ",
            "This round will be hosted on HackerRank (www.hackerrank.com) as private/closed contests, of which the link will be shared right before the contest. Languages allowed: C / C++ / JAVA.",
            "Any one member must have an account in hackerRank. If you don’t have one, get yourself an account at Hackerrank. DO CARRY YOUR USERNAME and PASSWORD TO THE EVENT LOCATION ON THE EVENT DAY.",
            "Round 1 will have 15 code snippets written in C language, and participants need to give outputs of the snippets within 30 minutes.",
            "In Round 1, there will be negative marking in this round. In case of tie in scores, submission time will be considered. Top 25% teams will move to next round.",
            "Round 2 will have 4 problems, ranging from easy, medium to hard difficulty for 2 hours. All code must be written during the event. Teams must report at least 30 minutes before starting of the contest.",
            "No team member can open any tab on the browser other than the Google form or HackerRank provided by coordinators. Also, if any team is caught researching, or cheating, or communicating with other teams during the contest, involved team(s) will be disqualified.",
          ],
          location: "CSE Labs, Main Building",
          registration: "Open until Nov 10",
        },
        {
          id: "user-interface-user-experience",
          title: "USER INTERFACE – USER EXPERIENCE (UI – UX)",
          department: "cse",
          departmentName: "CSE",
          description:
            "Design modern and user-friendly interfaces with top-notch UX principles.",
          entryFee: 200,
          prize: 5000,
          date: "Nov 16",
          time: "01:00 PM",
          icon: <Cpu className="h-5 w-5 text-neon-cse" />,
          bannerImage: "/images/user-interface-user-experience.webp",
          rules: [
            "It is a solo event where each participant can choose a theme from a given list and design and build a UI/UX interface.",
            "VS CODE along with NODE JS will be installed in the machines. Also, Participants will be given 10–15 minutes to install any required extensions.",
            "Use of any frontend stack is allowed – HTML/CSS/JS/React/Next.js or others",
            "Internet access is allowed and encouraged for research and resources",
            "Judging will be based on Creativity, Originality, Responsiveness, Theme Adaptation, Optimization and Time taken to complete the design.",
          ],
          location: "Design Lab, Tech Building",
          registration: "Open until Nov 12",
        },
        {
          id: "battle-grounds-mobile-india",
          title: "BATTLE GROUNDS MOBILE INDIA (BGMI)",
          department: "cse",
          departmentName: "CSE",
          description:
            "Compete in the ultimate mobile battle royale tournament.",
          entryFee: 100,
          prize: 3000,
          date: "Nov 17",
          time: "01:00 PM",
          icon: <Cpu className="h-5 w-5 text-neon-cse" />,
          bannerImage: "/images/battle-grounds-mobile-india.webp",
          rules: [
            "Every Team should have atleast 3 players. No duo or solo players allowed.",
            "Players must bring their own Mobile Phones, Chargers and Headphones. WIFI will be provided but in case of any inconvinence, every Player have to use there own Mobile data.",
            "Classic mode matches, ID Pass will be given at the time mentioned after registration by the Coordinator.",
            "Points will be calculated according to the points table. If Final points came out to be same, Kill points will be considered. If Kills points also comes out to be same then Position of Last match would be considered.",
            "Fair play is mandatory. If any player from any team found using any cheats, the whole team will be eliminated.",
            "Regarding any disputes, the decision of the coordinators will be considered as final.",
          ],
          location: "Gaming Arena, CSE Building",
          registration: "Open until Nov 14",
        },
      ],
      teamMembers: [
        {
          name: "Jane Hopper",
          role: "Student Coordinator",
          avatar:
            "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Mike Wheeler",
          role: "Technical Lead",
          avatar:
            "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Lucas Sinclair",
          role: "Event Manager",
          avatar:
            "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Max Mayfield",
          role: "Design Head",
          avatar:
            "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
    },
    ece: {
      name: "Electronics & Communication Engineering",
      shortName: "ECE",
      color: "neon-ece",
      icon: <Zap className="h-6 w-6" />,
      description:
        "The Electronics department specializes in circuit design, IoT innovations, and electronic systems that bridge the gap between hardware and software.",
      coordinator: "Dr. Nikola Tesla",
      studentCoordinator: "Will Byers",
      events: [
        {
          id: "robo-soccer",
          title: "ROBO SOCCER",
          department: "ece",
          departmentName: "ECE",
          description:
            "Program and control your bots to score goals and defeat your opponents.",
          entryFee: 200,
          prize: 6000,
          date: "Nov 15",
          time: "03:00 PM",
          icon: <Zap className="h-5 w-5 text-neon-ece" />,
          bannerImage: "/images/robo-soccer.webp",
          rules: [
            "Teams of 2-4 members",
            "Bot weight limit: 3kg",
            "Bot must fit within 30x30x30cm box",
            "Matches last 5 minutes",
            "Standard robot soccer rules apply",
          ],
          location: "ECE Robotics Lab",
          registration: "Open until Nov 10",
        },
        {
          id: "line-follower-robot",
          title: "LINE FOLLOWER ROBOT",
          department: "ece",
          departmentName: "ECE",
          description:
            "Build a robot that can smartly follow a line across complex paths.",
          entryFee: 150,
          prize: 4000,
          date: "Nov 16",
          time: "03:00 PM",
          icon: <Zap className="h-5 w-5 text-neon-ece" />,
          bannerImage: "/images/line-follower-robot.webp",
          rules: [
            "Teams of 2-3 members",
            "Robot must be autonomous",
            "Time trial format",
            "Path includes curves and intersections",
            "Best time wins",
          ],
          location: "ECE Lab 2",
          registration: "Open until Nov 12",
        },
        {
          id: "electrotech-exploration",
          title: "ELECTROTECH EXPLORATION",
          department: "ece",
          departmentName: "ECE",
          description:
            "Dive into exciting electronics experiments and innovations.",
          entryFee: 150,
          prize: 5000,
          date: "Nov 17",
          time: "03:00 PM",
          icon: <Zap className="h-5 w-5 text-neon-ece" />,
          bannerImage: "/images/electrotech-exploration.webp",
          rules: [
            "Teams of 2-3 members",
            "Create innovative electronic solutions",
            "Limited components provided",
            "Project must serve a practical purpose",
            "Judging based on innovation and functionality",
          ],
          location: "ECE Innovation Lab",
          registration: "Open until Nov 14",
        },
      ],
      teamMembers: [
        {
          name: "Will Byers",
          role: "Student Coordinator",
          avatar:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Dustin Henderson",
          role: "Technical Expert",
          avatar:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Suzie Bingham",
          role: "Event Coordinator",
          avatar:
            "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Eddie Munson",
          role: "Equipment Manager",
          avatar:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
    },
    me: {
      name: "Mechanical Engineering",
      shortName: "ME",
      color: "neon-me",
      icon: <Cog className="h-6 w-6" />,
      description:
        "The Mechanical department focuses on robotics, CAD design, and physical engineering challenges that test structural integrity and mechanical precision.",
      coordinator: "Dr. Isaac Newton",
      studentCoordinator: "Steve Harrington",
      events: [
        {
          id: "cadmania",
          title: "CADMANIA",
          department: "me",
          departmentName: "ME",
          description:
            "Showcase your design and drafting skills using CAD software.",
          entryFee: 150,
          prize: 4500,
          date: "Nov 16",
          time: "11:00 AM",
          icon: <Cog className="h-5 w-5 text-neon-me" />,
          bannerImage: "/images/cadmania.webp",
          rules: [
            "Individual participation",
            "4-hour time limit",
            "Use provided CAD software",
            "Model must meet given specifications",
            "Judging based on accuracy, efficiency, and innovation",
          ],
          location: "ME Design Studio",
          registration: "Open until Nov 12",
        },
      ],
      teamMembers: [
        {
          name: "Steve Harrington",
          role: "Student Coordinator",
          avatar:
            "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Nancy Wheeler",
          role: "Design Specialist",
          avatar:
            "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Jonathan Byers",
          role: "Technical Support",
          avatar:
            "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Robin Buckley",
          role: "Event Manager",
          avatar:
            "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
    },
    ce: {
      name: "Civil Engineering",
      shortName: "CE",
      color: "neon-ce",
      icon: <Building2 className="h-6 w-6" />,
      description:
        "The Civil department challenges focus on structural design, earthquake resistance, and sustainable construction techniques for the modern world.",
      coordinator: "Dr. Robert Hooke",
      studentCoordinator: "Lucas Sinclair",
      events: [
        {
          id: "bridge-the-gap",
          title: "BRIDGE THE GAP",
          department: "ce",
          departmentName: "CE",
          description:
            "Design and build model bridges to test structural strength and creativity.",
          entryFee: 150,
          prize: 4000,
          date: "Nov 16",
          time: "10:00 AM",
          icon: <Building2 className="h-5 w-5 text-neon-ce" />,
          bannerImage: "/images/bridge-the-gap.webp",
          rules: [
            "Teams of 2-3 members",
            "Bridge must be built only with provided materials",
            "Maximum dimensions: 60cm length, 15cm width, 20cm height",
            "Bridge must support minimum weight specified",
            "Judging based on strength-to-weight ratio and aesthetics",
          ],
          location: "CE Courtyard",
          registration: "Open until Nov 14",
        },
        {
          id: "insta-plan",
          title: "INSTA-PLAN",
          department: "ce",
          departmentName: "CE",
          description:
            "Create quick architectural plans under real-world constraints.",
          entryFee: 150,
          prize: 4500,
          date: "Nov 17",
          time: "11:00 AM",
          icon: <Building2 className="h-5 w-5 text-neon-ce" />,
          bannerImage: "/images/insta-plan.webp",
          rules: [
            "Teams of 2-3 members",
            "Plans must be created within time limit",
            "Use provided software or manual drafting",
            "Design must meet given requirements",
            "Judging based on creativity, functionality, and adherence to constraints",
          ],
          location: "CE Design Studio",
          registration: "Open until Nov 15",
        },
      ],
      teamMembers: [
        {
          name: "Lucas Sinclair",
          role: "Student Coordinator",
          avatar:
            "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Erica Sinclair",
          role: "Technical Head",
          avatar:
            "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Argyle",
          role: "Logistics Manager",
          avatar:
            "https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Murray Bauman",
          role: "Equipment Manager",
          avatar:
            "https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
    },
    ee: {
      name: "Electrical Engineering",
      shortName: "EE",
      color: "neon-ee",
      icon: <Bolt className="h-6 w-6" />,
      description:
        "The Electrical Engineering department focuses on power systems, electrical machines, and innovative solutions in energy management and control systems.",
      coordinator: "Dr. Michael Faraday",
      studentCoordinator: "Max Mayfield",
      events: [
        {
          id: "instant-circuit-making",
          title: "INSTANT CIRCUIT MAKING",
          department: "ee",
          departmentName: "EE",
          description:
            "Quick-fire circuit building under pressure using provided components.",
          entryFee: 100,
          prize: 3000,
          date: "Nov 15",
          time: "01:00 PM",
          icon: <Bolt className="h-5 w-5 text-neon-ee" />,
          bannerImage: "/images/instant-circuit-making.webp",
          rules: [
            "Teams of 2 members",
            "Use only provided components",
            "Circuit must be assembled within specified time",
            "Circuit must perform the specified function",
            "Judging based on speed, efficiency, and functionality",
          ],
          location: "EE Lab 1",
          registration: "Open until Nov 12",
        },
        {
          id: "electromat",
          title: "ELECTROMAT",
          department: "ee",
          departmentName: "EE",
          description:
            "Solve electromagnetism-based challenges in this electrifying competition.",
          entryFee: 100,
          prize: 3500,
          date: "Nov 17",
          time: "10:00 AM",
          icon: <Bolt className="h-5 w-5 text-neon-ee" />,
          bannerImage: "/images/electromat.webp",
          rules: [
            "Individual or teams of 2",
            "Multiple rounds with electromagnetic challenges",
            "Both theoretical and practical components",
            "Time limits for each challenge",
            "Highest combined score wins",
          ],
          location: "Electromagnetic Lab",
          registration: "Open until Nov 15",
        },
      ],
      teamMembers: [
        {
          name: "Max Mayfield",
          role: "Student Coordinator",
          avatar:
            "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Eddie Munson",
          role: "Technical Lead",
          avatar:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Robin Buckley",
          role: "Event Manager",
          avatar:
            "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Steve Harrington",
          role: "Equipment Manager",
          avatar:
            "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
    },
    bsh: {
      name: "Basic Science & Humanities",
      shortName: "BSH",
      color: "neon-bsh",
      icon: <FlaskConical className="h-6 w-6" />,
      description:
        "The Basic Science department serves as the foundation of engineering education, nurturing analytical thinking and scientific principles across physics, chemistry, and mathematics.",
      coordinator: "Dr. Marie Curie",
      studentCoordinator: "Erica Sinclair",
      events: [
        {
          id: "sudoku",
          title: "SUDOKU",
          department: "bsh",
          departmentName: "BSH",
          description:
            "Challenge your logical thinking in this timed number puzzle event. Contestants must complete a 9×9 Sudoku grid by filling in numbers from 1 to 9. No number should repeat within the same row, column, or 3×3 sub-grid.",
          entryFee: 10,
          prize: 2000,
          date: "Nov 15",
          time: "10:00 AM",
          icon: <FlaskConical className="h-5 w-5 text-neon-bsh" />,
          bannerImage: "/images/sudoku.webp",
          rules: [
            "Contestants are not permitted to alter any numbers already provided in the grid.",
            "Each contestant will have a maximum of 15 minutes to solve the Sudoku puzzle.",
            "Only one winner will be declared for this event. The organizers will award the first position only.",
            "The winner will be the first contestant to submit a completely correct solution.",
            "If two or more contestants solve the puzzle correctly at the same time, a tie-breaker Sudoku puzzle will be given. The maximum time allotted for the tie-breaker will be 5 minutes.",
            "If no contestant completes the puzzle correctly within the given time: Scores will be calculated as '+1' point for each correct entry, '–1' point for each incorrect entry. The contestant with the highest positive score will be declared the winner.",
            "If there is still a tie, the tie-breaker rule (as above) will apply.",
            "Any participant engaging in disruptive or disorderly behavior will be immediately disqualified.",
            "In case of any conflict or dispute, the decision of the evaluators will be final and binding.",
          ],
          location: "BSH Seminar Hall",
          registration: "Open until Nov 13",
        },
        {
          id: "hunt-for-fun",
          title: "HUNT FOR FUN",
          department: "bsh",
          departmentName: "BSH",
          description:
            "Think you have what it takes to crack mysteries and chase hidden treasures? Have you ever imagined yourself donning a detective’s hat, solving puzzles and chasing clues?\n\nWell, it's time to live that dream! TECHetc 2K25 proudly presents Hunt for Fun — the ultimate adventure where treasure hunters race against time, solving riddles and uncovering secrets. \nUse your wits, follow the clues, and unlock new levels of excitement at every turn. More thrill. More madness. More treasures.\n\n Get ready — the hunt is about to begin!",
          entryFee: 60,
          prize: 2500,
          date: "Nov 16",
          time: "02:00 PM",
          icon: <FlaskConical className="h-5 w-5 text-neon-bsh" />,
          bannerImage: "/images/hunt-for-fun.webp",
          rules: [
            "Only team participation is allowed. Each team must have a minimum of 2 members and a maximum of 3 members.",
            "Mixed teams (with members from different colleges) are allowed, but at least one team member must be a student of HETC.",
            "The event consists of four rounds. Teams must successfully solve each round’s clue to progress to the next round.",
            "10 minutes will be allotted for the 1st round. Only the top 12 teams from Round 1 will qualify for the next round. Teams failing to complete within the time limit will be eliminated.",
            "Judges and Coordinators reserve the right to modify the rules or adjust timings. Any changes will be communicated to all teams.",
            "The decision of the jury is final — no arguments or appeals will be entertained.",
          ],
          location: "Campus-wide",
          registration: "Open until Nov 14",
        },
      ],
      teamMembers: [
        {
          name: "Erica Sinclair",
          role: "Student Coordinator",
          avatar:
            "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Dustin Henderson",
          role: "Technical Support",
          avatar:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Suzie Bingham",
          role: "Event Manager",
          avatar:
            "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Mike Wheeler",
          role: "Logistics Coordinator",
          avatar:
            "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
    },
    general: {
      name: "General Events",
      shortName: "GENERAL",
      color: "neon-general",
      icon: <Brain className="h-6 w-6" />,
      description:
        "General events are open to all disciplines and focus on cross-domain challenges that promote teamwork, creativity, and well-rounded skills.",
      coordinator: "Dr. Albert Einstein",
      studentCoordinator: "Nancy Wheeler",
      events: [
        {
          id: "quizzard",
          title: "QUIZZARD",
          department: "general",
          departmentName: "GENERAL",
          description:
            "Put your general knowledge to the test in this fast-paced quiz battle. \nThe details of each Round are as follows: \n\n Round 1: Current Affairs & G.K \n Round 2: Double Trouble (Basic Engineering) \n\n The Final Round are as follows:\nRound 3: Audio & Visual Round: (Movie, Music, Puzzle, Sports, Personality,Politics).\nRound 4: Guess/ Clue Round.\nRound 5: Rapid Fire Round.",
          entryFee: 50,
          prize: 2000,
          date: "Nov 17",
          time: "02:00 PM",
          icon: <Brain className="h-5 w-5 text-neon-general" />,
          bannerImage: "/images/quizzard.webp",
          rules: [
            "The competition carries prizes and certificates for 1st, 2nd & 3rd place holders only.",
            "Participants should form a group of two students only.",
            "Each round has its own special rules which will be announced on the spot.",
            "Details of Quiz Question category: G.K & Current Affairs, Basic Engineering, Mix Bag (Music, Movie, Sports, Personality, Puzzle and Politics), books & Author, Life Style & Food Habit, Mythology, social media and Women Empowerment.",
            "If more than eight teams register, all of them need to appear for a written screening test, which includes Multiple Choice Questions (MCQ).",
            "Best eight qualifying teams (in terms of marks) will take part in the final quiz contest.",
            "In case of a conflict regarding a question, decision of the jury panel will be final.",
            "In case of tie between two or more teams, further provision of tie breaker will be proclaimed for next round.",
            "No use of electronic devices. Any type of false move/ adopting unfair means by any member or members of any team will lead to disqualification of the whole team immediately.",
            "Decision of the quizmaster is final. In case of unavoidable circumstances, rules may be changed.",
          ],
          location: "Main Seminar Hall",
          registration: "Open until Nov 15",
        },
        {
          id: "model-display",
          title: "MODEL DISPLAY",
          department: "general",
          departmentName: "GENERAL",
          description:
            "Showcase creative models and prototypes across engineering domains.",
          entryFee: 100,
          prize: 4000,
          date: "Nov 18",
          time: "10:00 AM",
          icon: <Brain className="h-5 w-5 text-neon-general" />,
          bannerImage: "/images/model-display.webp",
          rules: [
            "Teams of 1-4 members",
            "Models must be original work",
            "Submit project documentation",
            "Live demonstration required",
            "Judging based on innovation, practicality, and presentation",
          ],
          location: "Exhibition Hall",
          registration: "Open until Nov 16",
        },
      ],
      teamMembers: [
        {
          name: "Nancy Wheeler",
          role: "Student Coordinator",
          avatar:
            "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Jonathan Byers",
          role: "Event Manager",
          avatar:
            "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Robin Buckley",
          role: "Technical Support",
          avatar:
            "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Argyle",
          role: "Logistics Coordinator",
          avatar:
            "https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
    },
  };

  // Find department and event
  const departmentInfo = dept && departments[dept as keyof typeof departments];

  useEffect(() => {
    if (departmentInfo && eventId) {
      const event = departmentInfo.events.find((e) => e.id === eventId);
      if (event) {
        setSelectedEvent(event);
      }
    }
  }, []);
  // }, [dept, eventId, departmentInfo]);

  // Add this effect to detect scrolling within the modal
  useEffect(() => {
    if (selectedEvent) {
      const modalContent = document.querySelector(".modal-content");
      if (modalContent) {
        const handleScroll = () => {
          setIsScrolled(modalContent.scrollTop > 10);
        };
        modalContent.addEventListener("scroll", handleScroll);
        return () => modalContent.removeEventListener("scroll", handleScroll);
      }
    }
  }, [selectedEvent]);

  if (!departmentInfo) {
    return (
      <div className="pt-24 pb-16 text-center">
        <h2 className="section-title">Department Not Found</h2>
        <p>The requested department does not exist.</p>
      </div>
    );
  }

  const color = departmentInfo.color;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16"
    >
      <div className="container my-32 mx-auto px-4">
        {/* Department Header */}
        <div
          className={`mb-10 p-6 bg-surface border-2 border-${color} rounded-lg pixel-corners relative overflow-hidden`}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern bg-[length:20px_20px] opacity-5"></div>

          <div className="relative z-50 flex flex-col md:flex-row items-center gap-6">
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center bg-${color} bg-opacity-20 border-2 border-${color}`}
            >
              {React.cloneElement(departmentInfo.icon as React.ReactElement, {
                className: `h-10 w-10 text-${color}`,
              })}
            </div>

            <div className="text-center md:text-left">
              <h1
                className={`font-pixel text-3xl md:text-4xl text-${color} mb-2`}
              >
                {departmentInfo.name}
              </h1>
              <p className="text-gray-300 max-w-2xl">
                {departmentInfo.description}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-10">
          <div
            className={`inline-flex border-2 border-${color} rounded-lg overflow-hidden`}
          >
            <button
              onClick={() => setActiveTab("events")}
              className={`px-6 py-3 font-mono ${
                activeTab === "events"
                  ? `bg-${color} text-white`
                  : `text-${color} hover:bg-${color} hover:bg-opacity-20`
              }`}
            >
              EVENTS
            </button>
            <button
              onClick={() => setActiveTab("team")}
              className={`px-6 py-3 font-mono ${
                activeTab === "team"
                  ? `bg-${color} text-white`
                  : `text-${color} hover:bg-${color} hover:bg-opacity-20`
              }`}
            >
              TEAM
            </button>
            <button
              onClick={() => setActiveTab("about")}
              className={`px-6 py-3 font-mono ${
                activeTab === "about"
                  ? `bg-${color} text-white`
                  : `text-${color} hover:bg-${color} hover:bg-opacity-20`
              }`}
            >
              ABOUT
            </button>
          </div>
        </div>

        {/* Event Detail Modal */}
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
            onClick={() => setSelectedEvent(null)}
          >
            <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center">
              <div className="flex items-center justify-center h-full p-4 pt-16 pb-16">
                <div
                  className={`modal-content bg-surface border-2 border-${color} rounded-lg pixel-corners max-w-3xl w-full max-h-[80vh] overflow-y-auto`}
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
                >
                  <div
                    className={`p-4 ${
                      isScrolled ? `bg-${color}` : `bg-${color} bg-opacity-20`
                    } 
                     flex justify-between items-center sticky top-0 z-10 transition-colors duration-200`}
                  >
                    <h3
                      className={`font-pixel text-xl ${
                        isScrolled ? "text-white" : `text-${color}`
                      }`}
                    >
                      {selectedEvent.title}
                    </h3>
                    <button
                      onClick={closeModal}
                      className="p-1 rounded-full hover:bg-black hover:bg-opacity-20"
                      aria-label="Close modal"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Cyberpunk banner with enhanced animation */}
                  {selectedEvent.bannerImage && (
                    <div className="w-full h-48 relative overflow-hidden group">
                      {/* Banner Image */}
                      <img
                        src={selectedEvent.bannerImage}
                        alt="Event Banner"
                        className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.07] group-hover:brightness-125"
                      />

                      {/* Color Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r from-${color} to-transparent opacity-0 group-hover:opacity-40 mix-blend-screen transition-opacity duration-500 pointer-events-none`}
                      ></div>

                      {/* Grid Overlay */}
                      <div className="absolute inset-0 bg-grid-pattern bg-[length:20px_20px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>

                      {/* Scanning Line */}
                      <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div
                          className={`absolute h-full w-1 bg-${color} blur-sm left-0 group-hover:left-full transition-all ease-in-out duration-[1500ms] opacity-80`}
                        ></div>
                      </div>

                      {/* Digital Frame with Neon Corners */}
                      <div
                        className={`absolute inset-0 border border-${color} opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-500 pointer-events-none animate-neon-border`}
                      >
                        {/* Corners */}
                        <div
                          className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-${color} transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 delay-100`}
                        ></div>
                        <div
                          className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-${color} transform translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 delay-200`}
                        ></div>
                        <div
                          className={`absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-${color} transform -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 delay-300`}
                        ></div>
                        <div
                          className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-${color} transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 delay-400`}
                        ></div>
                      </div>

                      {/* Horizontal Scan Lines */}
                      <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div
                          className={`absolute h-px w-full bg-${color} top-1/4 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 delay-200 opacity-70`}
                        ></div>
                        <div
                          className={`absolute h-px w-full bg-${color} top-2/4 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700 delay-300 opacity-70`}
                        ></div>
                        <div
                          className={`absolute h-px w-full bg-${color} top-3/4 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 delay-400 opacity-70`}
                        ></div>
                      </div>

                      {/* Glitch Flash */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:animate-glitch-flash"></div>
                      </div>

                      {/* Diagonal Scan Lines */}
                      <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
                        <div
                          className={`absolute w-1/2 h-px bg-${color} rotate-45 -left-full -top-12 group-hover:left-full group-hover:top-full transition-all duration-1500 delay-300`}
                        ></div>
                        <div
                          className={`absolute w-1/2 h-px bg-${color} rotate-45 -left-full -top-24 group-hover:left-full group-hover:top-full transition-all duration-1500 delay-600`}
                        ></div>
                        <div
                          className={`absolute w-1/2 h-px bg-${color} rotate-45 -left-full -top-36 group-hover:left-full group-hover:top-full transition-all duration-1500 delay-900`}
                        ></div>
                      </div>

                      {/* Edge Glow Pulse */}
                      <div
                        className={`absolute inset-0 border-2 border-${color} opacity-0 group-hover:opacity-20 blur-sm scale-105 group-hover:scale-100 transition-all duration-500 pointer-events-none group-hover:animate-pulse-glow`}
                      ></div>
                    </div>
                  )}

                  {/* Rest of the modal content remains the same */}
                  <div className="p-6">
                    <p className="text-gray-300 mb-6">
                      {selectedEvent.description}
                    </p>

                    {/* Event details sections */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div
                        className={`flex items-center p-3 bg-background rounded border border-${color}`}
                      >
                        <Calendar className={`h-5 w-5 mr-2 text-${color}`} />
                        <div>
                          <span className="text-gray-400 text-sm block">
                            Date
                          </span>
                          <span className="font-mono">
                            {selectedEvent.date}
                          </span>
                        </div>
                      </div>

                      <div
                        className={`flex items-center p-3 bg-background rounded border border-${color}`}
                      >
                        <Clock className={`h-5 w-5 mr-2 text-${color}`} />
                        <div>
                          <span className="text-gray-400 text-sm block">
                            Time
                          </span>
                          <span className="font-mono">
                            {selectedEvent.time}
                          </span>
                        </div>
                      </div>

                      <div
                        className={`flex items-center p-3 bg-background rounded border border-${color}`}
                      >
                        <MapPin className={`h-5 w-5 mr-2 text-${color}`} />
                        <div>
                          <span className="text-gray-400 text-sm block">
                            Location
                          </span>
                          <span className="font-mono">
                            {selectedEvent.location}
                          </span>
                        </div>
                      </div>

                      <div
                        className={`flex items-center p-3 bg-background rounded border border-${color}`}
                      >
                        <CreditCard className={`h-5 w-5 mr-2 text-${color}`} />
                        <div>
                          <span className="text-gray-400 text-sm block">
                            Entry Fee
                          </span>
                          <span className="font-mono">
                            ₹{selectedEvent.entryFee}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`mb-6 p-4 bg-background rounded border border-${color}`}
                    >
                      <div className="flex items-center mb-3">
                        <Trophy className={`h-5 w-5 mr-2 text-${color}`} />
                        <h4 className="font-mono text-lg">Prize Pool</h4>
                      </div>
                      <div className={`text-2xl font-pixel text-${color}`}>
                        ₹{selectedEvent.prize}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4
                        className={`font-mono text-lg border-b border-${color} pb-2 mb-3`}
                      >
                        Rules & Guidelines
                      </h4>
                      <ul className="space-y-2">
                        {selectedEvent.rules.map((rule, index) => (
                          <li key={index} className="flex items-start">
                            <BadgeCheck
                              className={`h-5 w-5 mr-2 text-${color} mt-0.5 flex-shrink-0`}
                            />
                            <span className="text-gray-300">{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-center">
                      <div className="mb-2 text-gray-400">
                        <span>Registration: </span>
                        <span className="font-mono">
                          {selectedEvent.registration}
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedEvents([selectedEvent.id]);
                          openModal();
                        }}
                        className={`btn border-${color} text-${color} hover:bg-${color} hover:bg-opacity-20`}
                      >
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Content Tabs */}
        <div>
          {/* Events Tab */}
          {activeTab === "events" && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {departmentInfo.events.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-surface border-2 border-${color} rounded-lg overflow-hidden pixel-corners hover:scale-102 transition-all duration-300 shadow-${color} hover:shadow-lg`}
                  >
                    <div
                      className={`p-4 bg-${color} bg-opacity-10 flex items-center justify-between`}
                    >
                      <div className="flex items-center">
                        <span className="mr-2">{event.icon}</span>
                        <h3 className={`font-pixel text-lg text-${color}`}>
                          {event.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-4">
                      <p className="text-gray-300 mb-4">{event.description}</p>

                      <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                        <div className="bg-background rounded p-2">
                          <span className="block text-gray-400">Entry Fee</span>
                          <span className="font-mono text-white">
                            ₹{event.entryFee}
                          </span>
                        </div>
                        <div className="bg-background rounded p-2">
                          <span className="block text-gray-400">Prize</span>
                          <span className="font-mono text-white">
                            ₹{event.prize}
                          </span>
                        </div>
                        <div className="bg-background rounded p-2">
                          <span className="block text-gray-400">Date</span>
                          <span className="font-mono text-white">
                            {event.date}
                          </span>
                        </div>
                        <div className="bg-background rounded p-2">
                          <span className="block text-gray-400">Time</span>
                          <span className="font-mono text-white">
                            {event.time}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedEvent(event)}
                        className={`flex items-center justify-center w-full py-2 border border-${color} text-${color} hover:bg-${color} hover:bg-opacity-20 transition-all rounded font-mono`}
                      >
                        View Details
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Team Tab */}
          {activeTab === "team" && (
            <div>
              <div
                className={`p-6 mb-8 bg-surface border border-${color} rounded-lg pixel-corners`}
              >
                <h2 className={`font-pixel text-xl text-${color} mb-4`}>
                  Faculty & Coordinators
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center bg-background p-4 rounded-lg">
                    <div
                      className={`w-12 h-12 rounded-full bg-${color} bg-opacity-20 flex items-center justify-center mr-4`}
                    >
                      <Users className={`h-6 w-6 text-${color}`} />
                    </div>
                    <div>
                      <div className="font-mono text-lg">
                        {departmentInfo.coordinator}
                      </div>
                      <div className="text-gray-400">Faculty Coordinator</div>
                    </div>
                  </div>
                  <div className="flex items-center bg-background p-4 rounded-lg">
                    <div
                      className={`w-12 h-12 rounded-full bg-${color} bg-opacity-20 flex items-center justify-center mr-4`}
                    >
                      <Users className={`h-6 w-6 text-${color}`} />
                    </div>
                    <div>
                      <div className="font-mono text-lg">
                        {departmentInfo.studentCoordinator}
                      </div>
                      <div className="text-gray-400">Student Coordinator</div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className={`font-pixel text-xl text-${color} mb-6`}>
                Team Members
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {departmentInfo.teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-surface border border-${color} rounded-lg pixel-corners overflow-hidden`}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-mono text-lg">{member.name}</h3>
                      <p className={`text-${color} text-sm`}>{member.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* About Tab */}
          {activeTab === "about" && (
            <div className="max-w-4xl mx-auto">
              <div
                className={`bg-surface p-6 border border-${color} rounded-lg pixel-corners mb-8`}
              >
                <h2 className={`font-pixel text-xl text-${color} mb-4`}>
                  About {departmentInfo.shortName} Department
                </h2>
                <p className="text-gray-300 mb-4">
                  {departmentInfo.description} Our department is committed to
                  fostering innovation and technical excellence through hands-on
                  competitions and collaborative events.
                </p>
                <p className="text-gray-300">
                  The {departmentInfo.name} department at TecHETC features a
                  series of challenging events designed to test students'
                  technical knowledge, creativity, and problem-solving
                  abilities. Our competitions are judged by faculty experts and
                  industry professionals.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                  className={`bg-surface p-6 border border-${color} rounded-lg pixel-corners`}
                >
                  <h3 className={`font-pixel text-lg text-${color} mb-4`}>
                    Participation Guidelines
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span
                        className={`inline-block w-2 h-2 rounded-full bg-${color} mt-2 mr-3`}
                      ></span>
                      <span>Registration is mandatory for all events</span>
                    </li>
                    <li className="flex items-start">
                      <span
                        className={`inline-block w-2 h-2 rounded-full bg-${color} mt-2 mr-3`}
                      ></span>
                      <span>Participants must carry valid ID proof</span>
                    </li>
                    <li className="flex items-start">
                      <span
                        className={`inline-block w-2 h-2 rounded-full bg-${color} mt-2 mr-3`}
                      ></span>
                      <span>Teams must adhere to the specified team size</span>
                    </li>
                    <li className="flex items-start">
                      <span
                        className={`inline-block w-2 h-2 rounded-full bg-${color} mt-2 mr-3`}
                      ></span>
                      <span>Event-specific rules must be followed</span>
                    </li>
                    <li className="flex items-start">
                      <span
                        className={`inline-block w-2 h-2 rounded-full bg-${color} mt-2 mr-3`}
                      ></span>
                      <span>Judges' decisions are final</span>
                    </li>
                  </ul>
                </div>

                <div
                  className={`bg-surface p-6 border border-${color} rounded-lg pixel-corners`}
                >
                  <h3 className={`font-pixel text-lg text-${color} mb-4`}>
                    Contact Information
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className={`mr-3 text-${color}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </span>
                      <span>
                        {departmentInfo.shortName.toLowerCase()}@techetc.edu
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-3 text-${color}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </span>
                      <span>+91 9876543210</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-3 text-${color}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </span>
                      <span>
                        {departmentInfo.shortName} Department, Engineering
                        College Campus, Tech Avenue
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default DepartmentPage;
