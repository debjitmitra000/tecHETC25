import React, { useState, useEffect } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { EventProps } from "../components/EventCard";
import {
  Cpu,
  Zap,
  Cog,
  Building2,
  Users,
  Clock,
  Calendar,
  MapPin,
  CreditCard,
  BadgeCheck,
  FlaskConical,
  Bolt,
  Brain,
  User,
  Phone,
} from "lucide-react";
import "../app.css";

const DepartmentPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { dept } = useParams<{ dept: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate(); // Add this hook for programmatic navigation
  const eventId = searchParams.get("event");

  const [activeTab, setActiveTab] = useState<"events" | "team" | "about">(
    "events"
  );
  const [selectedEvent, setSelectedEvent] = useState<EventProps | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeModal = () => {
    navigate("/", { replace: true });
    setTimeout(() => {
      const eventsSection = document.getElementById("events");
      eventsSection?.scrollIntoView({ behavior: "smooth" });
    }, 10);
  };

  const departments = {
    cse: {
      name: "Computer Science Engineering",
      shortName: "CSE",
      color: "neon-cse",
      icon: <Cpu className="h-6 w-6" />,
      description:
        "The Computer Science department hosts coding challenges, hackathons, and software development competitions that push the boundaries of digital innovation.",
      events: [
        {
          id: "code-2-duo",
          title: "CODE – 2 – DUO", 
          department: "cse",
          departmentName: "CSE",
          description:
            "CODE-2-DUO will consist of 2 rounds, consisting of problems, testing your logic, algorithmic and problem-solving skills. The rounds are as follows: \n\n 🔵Round 1 (Prelims): 15 code snippets written in C language will be provided in Google form whose outputs are to be given by the participants. Time: 30 minutes.\n\n 🔵Round 2 (Finals): 4 problem statements ranging from easy, medium and hard levels for which a solution is to be given by the teams in C / C++ / JAVA. Time: 90 minutes.",
          minidesc:
            "Pair up and compete in this coding challenge designed for speed and logic.",
          entryFee: 0,
          teamSize: 2,
          date: "May 15",
          time: "11:00 AM",
          icon: <Cpu className="h-5 w-5 text-neon-cse" />,
          bannerImage: "/images/code-2-duo.webp",
          coordinators: [
            { name: "Dr. Mousumi Roy", contact: "7044324745" },
            { name: "Dr. Biswajit Halder", contact: "7908122152" },
            { name: "Ms. Dipanwita Saha", contact: "8240981600" },
            { name: "Mr. Chiranjeet Sarkar", contact: "8617761378" },
          ],
          rules: [
            "Teams must consist of atleast and atmost 2 members, Solo is not allowed. ",
            "This round will be hosted on HackerRank (www.hackerrank.com) as private/closed contests, of which the link will be shared right before the contest. Languages allowed: C / C++ / JAVA.",
            "Any one member must have an account in hackerRank. If you don't have one, get yourself an account at Hackerrank. DO CARRY YOUR USERNAME and PASSWORD TO THE EVENT LOCATION ON THE EVENT DAY.",
            "Round 1 will have 15 code snippets written in C language, and participants need to give outputs of the snippets within 30 minutes.",
            "In Round 1, there will be negative marking in this round. In case of tie in scores, submission time will be considered. Top 25% teams will move to next round.",
            "Round 2 will have 4 problems, ranging from easy, medium to hard difficulty for 90 minutes. All code must be written during the event. Teams must report at least 30 minutes before starting of the contest.",
            "No team member can open any tab on the browser other than the Google form or HackerRank provided by coordinators. Also, if any team is caught researching, or cheating, or communicating with other teams during the contest, involved team(s) will be disqualified.",
            ],
          eligibility: "All participants must carry a valid college ID card and present the original upon request for verification. Failure to do so will result in disqualification from participation. Each participant must be a student currently enrolled in a recognized college or university program",
          location: "CSE Labs, Main Building",
          registration: "Open until May 11",
        },
        {
          id: "user-interface-user-experience",
          title: "USER INTERFACE – USER EXPERIENCE (UI – UX)",
          department: "cse",
          departmentName: "CSE",
          description:
            "The UI–UX Design competition challenges participants to blend creativity with usability by crafting modern, user-centered digital interfaces. From wireframes to high-fidelity prototypes, contestants will apply design thinking principles, accessibility standards, and UX best practices to build seamless, intuitive experiences. This is your chance to showcase your skills in visual design, user research, and interaction flow—whether you're designing apps, websites, or systems. Think beyond aesthetics—design for real users, real needs, and real impact.",
          minidesc:
            "Design modern and user-friendly interfaces with top-notch UX principles.",
          entryFee: 0,
          teamSize: "1",
          date: "May 16",
          time: "01:00 PM",
          icon: <Cpu className="h-5 w-5 text-neon-cse" />,
          bannerImage: "/images/user-interface-user-experience.webp",
          coordinators: [
            {
              name: "Ms. Sanghamitra Das",
              contact: "8240091124",
            },
            {
              name: "Ms. Anumita Singha Roy",
              contact: "8961674224",
            },
            {
              name: "Mr. Sourav Banik",
              contact: "8001772466",
            },
          ],
          rules: [
            "It is a solo event where each participant can choose a theme from a given list and design and build a UI/UX interface.",
            "VS CODE along with NODE JS will be installed in the machines. Also, Participants will be given 10–15 minutes to install any required extensions.",
            "Use of any frontend stack is allowed – HTML/CSS/JS/React/Next.js or others",
            "Internet access is allowed and encouraged for research and resources",
            "Judging will be based on Creativity, Originality, Responsiveness, Theme Adaptation, Optimization and Time taken to complete the design.",
            ],
            eligibility: "All participants must carry a valid college ID card and present the original upon request for verification. Failure to do so will result in disqualification from participation. Each participant must be a student currently enrolled in a recognized college or university program",
          location: "Design Lab, Tech Building",
          registration: "Open until May 12",
        },
        {
          id: "battle-grounds-mobile-india",
          title: "BATTLE GROUNDS MOBILE INDIA (BGMI)",
          department: "cse",
          departmentName: "CSE",
          description:
            "Get ready for an adrenaline-pumping experience in the ultimate mobile battle royale — BATTLE GROUNDS MOBILE INDIA (BGMI) Tournament! Assemble your squad, strategize in real-time, and face off against rival teams in a high-stakes environment where only the sharpest survive. With intense gameplay, tactical combat, and fierce competition, this is your chance to dominate the battleground and prove your skills. Glory, prizes, and bragging rights await the victors!",
          minidesc: "Drop in, gear up, and battle your way to Compete in the ultimate mobile battle royale tournament.",
          entryFee: 200,
          teamSize: "3 - 4",
          date: "May 16",
          time: "01:00 PM",
          icon: <Cpu className="h-5 w-5 text-neon-cse" />,
          bannerImage: "/images/battle-grounds-mobile-india.webp",
          coordinators: [
            { name: "Mr. Shyamal Pal", contact: "9433568345" },
            { name: "Ms. Agnimita Banerjee", contact: "7584937713" },
            { name: "Ms. Rakhi Chakraborty", contact: "9748847413" },
          ],
          rules: [
            "Every Team should have atleast 3 players. No duo or solo players allowed.",
            "Players must bring their own Mobile Phones, Chargers and Headphones. WIFI will be provided but in case of any inconvinence, every Player have to use there own Mobile data.",
            "Classic mode matches, ID Pass will be given at the time mentioned after registration by the Coordinator.",
            "Points will be calculated according to the points table. If Final points came out to be same, Kill points will be considered. If Kills points also comes out to be same then Position of Last match would be considered.",
            "Fair play is mandatory. If any player from any team found using any cheats, the whole team will be eliminated.",
            "Regarding any disputes, the decision of the coordinators will be considered as final.",
            ],
          eligibility: "All participants must carry a valid college ID card and present the original upon request for verification. Failure to do so will result in disqualification from participation. Each participant must be a student currently enrolled in a recognized college or university program",
          location: "Gaming Arena, CSE Building",
          registration: "Open until May 14",
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
      events: [
        {
          id: "robo-soccer",
          title: "ROBO SOCCER",
          department: "ece",
          departmentName: "ECE",
          description:
                        "Get ready to ride the future! Robo Scooter is an exciting tech fest event where participants design and build a small robot controlled wirelessly via a mobile phone. Using Wi-Fi technology, teams will navigate the robot across a small soccer field to score goals against the opponent. \n\n 🤖Robot Specifications: \n ▶ The robot should fit inside a box of 30cm*30cm*30cm, should not exceed 1 kg and should be wirelessly controlled through a mobile. \n ▶ It is expected to use ESP32 micro-controller at the higher end.\n ▶ The robot should be self-powered with a supply not exceeding 12V (on-board power supply).\n ▶ Power supply (only DC) should be on board. Participants cannot draw power from outside during the match.",
          minidesc:
            "Program and control your bots to score goals and defeat your opponents.",
          entryFee: 0,
          teamSize: "3 - 4",
          date: "May 15",
          time: "03:00 PM",
          icon: <Zap className="h-5 w-5 text-neon-ece" />,
          bannerImage: "/images/robo-soccer.webp",
          coordinators: [
            {
              name: "Mr. Deb Kumar Sheet",
              contact: "9051754027",
            },
            { name: "Mr. Subhajit Malik", contact: "7003568335" },
            {
              name: "Mr. Biswajit Basak",
              contact: "8240264089",
            },
            { name: "Ms. Shyamali Gayen", contact: "9804844614" },
          ],
          rules: [
            "This is a knockout round (one-on-one). The fixture will be finalized on the day of the event after completion of the event registration.",
            "Each team will consist of at least 3 members and a maximum of 4 members.",
            "Only one participant will control the robot and no player can be exchanged in the middle of a match. It can be done during halftime only.",
            "Human interference (e.g. touching the robot) during the game is not allowed.",
            "No more AC/DC power supply will be provided at the site of play.",
            "If anyone is found to control any robot during any half of 2 minutes except the two current team members, he/she will not be allowed to stay in the event room and only that half of the event will be restarted again.",
            "Coordinators reserve the right to ask for an explanation of the robot. The coordinator can change the rules of the game depending on the situation.",
            "1 ball will be placed at the center location in the arena. Participants can drive, push, or hit the ball into the opponent’s goal posts.",
            "Points = number of goals. The time limit will be 2 minutes in each half. Penalty shots will be provided in case of a tie.",
            "There will be a rectangular cardboard fence indicating the playing area.",
            "Decisions of the Judges and Event Organizers shall be treated as final and binding on all and cannot be contested.",
            "There will be no manual intervention during the match.",
            "If any robot is obstructing the opponent unnecessarily for a prolonged period, it will be considered a foul and a penalty will be given.",
            "Hitting the opponent’s robot is not allowed and if it happens will be considered a foul and a penalty will be given to the opponent.",
            "Rules & Regulations may change without prior notice, by the Event organizers.",
            ],
          eligibility: "All participants must carry a valid college ID card and present the original upon request for verification. Failure to do so will result in disqualification from participation. Each participant must be a student currently enrolled in a recognized college or university program.",
          location: "ECE Robotics Lab",
          registration: "Open until May 10",
        },
        {
          id: "line-follower-robot",
          title: "LINE FOLLOWER ROBOT",
          department: "ece",
          departmentName: "ECE",
          description:
            "The Line Follower Robot is a mobile bot that can detect and follow the line drawn on the floor. Generally, the path is predefined and can be visible like a black line on a white surface with a high contrasted colour. Participants should have to complete the paths as per rules and regulations.\n\n In 1 st and 2 nd Round there will be Line Follower. Participants who will complete each round in less time will be given preference to proceed in next round. \n\n 🤖Robot Specifications: \n ▶ Each team must have Autonomous Robot. \n ▶ The width of the black line will be less than 4 cm. \n ▶ Dimensions of the Robot should be less than 28 cm * 18 cm * 5 cm ( l x b x h). \n ▶ Weight of the Robot should be less than 750 grams. \n ▶ Diameter of the wheel should be less than 7 cm. \n ▶ Thickness of the wheel should be less than 3 cm. \n ▶ The Power Supply should be 15 V (maximum). \n ▶ The participants have to ensure that room lighting, photography etc. does not affect the functioning of the sensors.",
          minidesc:
            "Build a robot that can smartly follow a line across complex paths.",
          entryFee: 0,
          teamSize: "2 - 4",
          date: "May 16",
          time: "03:00 PM",
          icon: <Zap className="h-5 w-5 text-neon-ece" />,
          bannerImage: "/images/line-follower-robot.webp",
          coordinators: [
            {
              name: "Jagadish Bhattacharyya",
              contact: "9830602422",
            },
            { name: "Subhajit Roy", contact: "7980083295" },
            { name: "Manish Kumar Singh", contact: "9007566269" },
            { name: "Bidisha Sengupta", contact: "7003047434" },
          ],
          rules: [
            "The Judges' decision shall be considered as final and indisputable.",
            "The Robot has to follow the black line on white background and complete the track in least possible time.",
            "No hand touch is preferable. For each hand touch, marks will be deducted as penalty.",
            "Maximum Four and Minimum Two Participants are allowed in a team.",
            "The organizer reserve the rights to disqualify any team indulging in any kind of misbehavior.",
            "The organizer has the right to change any of the rules at any time.",
            "All the tracks will be shown at the starting of each round.",
            "Note 1: The Robot must be stopped at the specific END point.",
            "Note 2: Hand touch and rotation of robot will not be allowed.",
            ],
          eligibility: "All participants must carry a valid college ID card and present the original upon request for verification. Failure to do so will result in disqualification from participation. Each participant must be a student currently enrolled in a recognized college or university program",
          location: "ECE Lab 2",
          registration: "Open until May 12",
        },
        {
          id: "electrotech-exploration",
          title: "ELECTROTECH EXPLORATION",
          department: "ece",
          departmentName: "ECE",
          description:
            "Electronics and Technology meet at every instance of life in present day. This event will give the candidates a chance to innovate and explore in the field of electronics and technology. \n The contest would consist of Two Rounds. Each of the round would be Elimination Round.\n\n 🌟Details: \n ▶ Round 1 (WHO AM I?): This round will consist of a set of 10 questions or clues based on Electronics field. \n ▶ Round 2 (Tech Exploration): In this round, latest technical topic based on Electronics will be given. The participants will be given a stipulated time to explore and finally have to present it.",
          minidesc:
            "Dive into exciting electronics experiments and innovations.  ",
          entryFee: 0,
          teamSize: 1,
          date: "May 16",
          time: "03:00 PM",
          icon: <Zap className="h-5 w-5 text-neon-ece" />,
          bannerImage: "/images/electrotech-exploration.webp",
          coordinators: [
            {
              name: "Mrs. Swagata Mallik",
              contact: "9433122291",
            },
            {
              name: "Mr. Swarup Samanta",
              contact: "7003557478",
            },
            { name: "Mrs. Samayita Sarkar", contact: "8327296998" },
            { name: "Mrs. Parna Satapathi", contact: "9330508890" },
          ],
          rules: [
            "Every round is time-dependent. Each round will start and end as per scheduled time. No extra time will be given.",
            "If there is any “TIE”, minimum time and maximum correct answer(s) will be considered for “TIE Breaker”. Marks obtained in the 1st Round may also be considered for “RE- TIE BREAKER”.",
            "After Round 1, Eight (8) participants (maximum) will sail through to Round 2.",
            "Judgement of event coordinators will be final.",
            "Any rule or instruction is subjected to change as per requirement.",
            ],
          eligibility: "All participants must carry a valid college ID card and present the original upon request for verification. Failure to do so will result in disqualification from participation. Each participant must be a student currently enrolled in a recognized college or university program",
          location: "ECE Innovation Lab",
          registration: "Open until May 14",
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
      events: [
        {
          id: "cadmania",
          title: "CADMANIA",
          department: "me",
          departmentName: "ME",
          description:
            "“The CAD-MANIA event is a 3D modelling and mechanical component assembly competition that uses AutoCAD software, which has been developed by the company Autodesk.” \n\nThe objective of the CADMANIA event aims to provide participants an opportunity to showcase and enhance their design abilities in order to develop innovative solutions to mechanical assembly challenges.",
          minidesc:
            "Showcase your design and drafting skills using CAD software.",
          entryFee: 150,
          teamSize: 1,
          date: "May 16",
          time: "11:00 AM",
          icon: <Cog className="h-5 w-5 text-neon-me" />,
          bannerImage: "/images/cadmania.webp",
          coordinators: [
            {
              name: "Mr. Tathagata Mallick",
              contact: "7003568228",
            },
          ],
          rules: [
            "The maximum number of participants will be 20. Maximum 10 participants will be selected for the second round.",
            "Every participant has to appear for a Preliminary Round.",
            "If the number of participant is less than or equal to 10, only a single round will be conducted.",
            "Time duration for preliminary round - 1 hr. Time duration for final round- 1 hr 30 min.",
            "Systems will be provided by Institution. Problem Statements will be given on the Spot.",
            "Evaluation will be based on the completion of job with all details & techniques within the stipulated time duration.",
            "The decision of the jury shall be final and binding.",
            ],
          eligibility: "All participants must carry a valid college ID card and present the original upon request for verification. Failure to do so will result in disqualification from participation. Each participant must be a student currently enrolled in a recognized college or university program",
          location: "ME Design Studio",
          registration: "Open until May 12",
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
      events: [
        {
          id: "bridge-the-gap",
          title: "BRIDGE THE GAP",
          department: "ce",
          departmentName: "CE",
          description:
            "Design and build model bridges to test structural strength and creativity.\n\n 🌟Details:\n Each team will be given 200 flat Popsicle sticks (ice-cream sticks) and a limited quantity of white adhesive (finical) as bridge-building material. Minimum length of the bridge is 50 cm. Bridge will be placed on an abutment with a 40 cm clear span. Load will be placed across the bridge span. Pin joints and clipping are strictly prohibited.",
          minidesc:
            "Design and build model bridges to test structural strength and creativity.",
          entryFee: 100,
          teamSize: "2 - 4",
          date: "May 16",
          time: "10:00 AM",
          icon: <Building2 className="h-5 w-5 text-neon-ce" />,
          bannerImage: "/images/bridge-the-gap.webp",
          coordinators: [
            {
              name: "Dr. Robert Hooke",
              contact: "9876543210",
            },
            {
              name: "Lucas Sinclair",
              contact: "9876543210",
            },
            {
              name: "Erica Sinclair",
              contact: "9876543210",
            },
          ],
          rules: [
            "Each group may consist of maximum four & minimum two participants.",
            "Each team will be given 200 flat Popsicle sticks (ice-cream sticks) and limited quantity of white adhesive (finical) as bridge building material. Minimum length of the bridge is 50 cm. Bridge will be placed on an abutment with 40 cm clear span.",
            "Participants can use a knife, pencil and ordinary scale to build the bridge (Scissors and clips are not allowed).",
            "Load will be placed across the bridge span.",
            "Minimum clear passage of roadway along the span should be 6 cm x 6 cm (height x width).",
            "Participants should provide enough space to insert two 8 mm diameter steel bars in the middle zone with a gapping of not more than 4 cm for loading.",
            "Participants should enroll their Group No. on their respective bridge model by the volunteers after completion of the bridge.",
            "Pin joints and clipping are strictly prohibited. Any unfair means will lead to the termination of the participating group.",
            "Final judgment will be based on the “Maximum Ratio of Collapse load of the bridge to the Final Weight of the bridge”.",
            "Violating any of the above rules will lead to a penalty.",
            "Decision of the judges will be final.",
            ],
          eligibility: "All Participants should have proper College ID card on them, and should be able to produce the same in original when asked for verification, failing which they will not be allowed to participate. Each participant should be a student pursuing some field of study in college/university.",
          location: "CE Courtyard",
          registration: "Open until May 14",
        },
        {
          id: "insta-plan",
          title: "INSTA-PLAN",
          department: "ce",
          departmentName: "CE",
          description:
            " Are you ready to put your planning skills to the test? Welcome to Insta-Plan! Teams from different parts of West Bengal will compete in a series of challenges designed to test their ability to plan and execute complex projects. These challenges will push the limits of what you thought was possible. \n Our expert judges will be watching closely, looking for the best-planned solutions and most effective execution. But only one team can come out on top and take home the grand prize. \n Think you have what it takes to win Insta-Plan? Register now and show us your skills! \n\n🌟Details: \nA Line Plan has to be prepared as per the given scale with proper orientation according to the standard norms. Judgement will be based on the most economic utilization of built-up area satisfying the standard norms of planning.",
          minidesc:
            "Create quick architectural plans under real-world constraints.",
          entryFee: 0,
          teamSize: 2,
          date: "May 17",
          time: "11:00 AM",
          icon: <Building2 className="h-5 w-5 text-neon-ce" />,
          bannerImage: "/images/insta-plan.webp",
          coordinators: [
            {
              name: "Dr. Gustave Eiffel",
              contact: "9876543210",
            },
            { name: "Robin Buckley", contact: "9876543210" },
            { name: "Joyce Byers", contact: "9876543210" },
            { name: "Murray Bauman", contact: "9876543210" },
          ],
          rules: [
            "A plot area with random dimensions, Road alignment and North direction will be given. Built up area with proper clearance have to be determined.",
            "A Line Plan has to be prepared as per the given scale with proper orientation according to the standard norms.",
            "Judgement will be based on the most economic utilization of built-up area satisfying the standard norms of planning.",
            "A-4 drawing sheet will be provided. Participants must bring the necessary drawing equipments.",
            "Only two participants are allowed in a group. Maximum duration of the event will be one hour.",
            "In case of ‘Tie’, preference will be given to the group doing early submission.",
            "Decision of the judges will be final.",
            ],
          eligibility: "All participants should have a valid College ID cards and be able to produce the same when asked for verification, failing which they will not be allowed to participate. Each player should be a student pursuing some field of study in Undergraduate courses only.",
          location: "CE Design Studio",
          registration: "Open until May 13",
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
      events: [
        {
          id: "instant-circuit-making",
          title: "INSTANT CIRCUIT MAKING",
          department: "ee",
          departmentName: "EE",
          description:
            "Quick-fire circuit building under pressure using provided components. \n\n ⭐Details: \nFormation of group: 2 students in each group. \nMaximum number of groups to be selected for competition – 10 (Screening test may be conducted if total number of registered groups exceeds 10. This may be a pen and paper test. Time = 10min)\n\nDomain:-Basic Electrical Circuit and Wiring. \n Circuits have to be chosen by lottery basis only. \n Time – 30mins",
          minidesc:
            "Quick-fire circuit building under pressure using provided components.",
          entryFee: 0,
          teamSize: 2,
          date: "May 15",
          time: "01:00 PM",
          icon: <Bolt className="h-5 w-5 text-neon-ee" />,
          bannerImage: "/images/instant-circuit-making.webp",
          coordinators: [
            {
              name: "Prof. Anikendu Maitra",
              contact: "9874305070",
            },
            // { name: "Max Mayfield", contact: "9876543210" },
            // { name: "Argyle", contact: "9876543210" },
          ],
          rules: [
          "Formation of group: 2 students in each group.",
          "Circuits have to be chosen by lottery basis only.",
          "Three groups will be declared to be champion, first runner up, second runner up respectively on the basis of proper operation of the circuit and how fast it has been made within the time limit mentioned.",
          "Tie breaker may be opted to choose champion and runner-up if two or more groups score same point.",
            "Only scientific calculators are allowed (Casio – 82MS or similar) [programmable calculator, mobile phone, iPod and any other electronic gadgets are not allowed].",
            "If in the hand of any group, the circuit burns out or any elements or equipment used by that group gets damaged that group will be disqualified immediately.",
            "Student must bring Proof of identity (college ID/college library card/certification from college authority).",
            "Decision of the judges will be final.",
            ],
          eligibility: "All participants must carry a valid college ID card and present the original upon request for verification. Failure to do so will result in disqualification from participation. Each participant must be a student currently enrolled in a recognized college or university program",
          location: "EE Lab 1",
          registration: "Open until May 12",
        },
        {
          id: "electromat",
          title: "ELECTROMAT",
          department: "ee",
          departmentName: "EE",
          description:
            "ELECTROMAT is a dynamic competition tailored for electrical engineering enthusiasts, combining the fundamentals of electromagnetism with the power of MATLAB programming. Participants will face a series of thought-provoking challenges designed to test their analytical thinking, coding skills, and understanding of real-world electrical engineering concepts.",
          minidesc:
            "Put your problem-solving skills to the test in this hands-on electromagnetism and MATLAB-based coding competition.",
          entryFee: 0,
          teamSize: "1 - 2",
          date: "May 15",
          time: "10:00 AM",
          icon: <Bolt className="h-5 w-5 text-neon-ee" />,
          bannerImage: "/images/electromat.webp",
          coordinators: [
            {
              name: "Ms. Shilpi Saha,",
              contact: "9876543210",
            },
            { name: "Dr. Suravi Thakur", contact: "9876543210" },
            { name: "Mr. Sibam Golder", contact: "9876543210" },
             {name: "Mr. Debasish Mitra", contact: "9876543210" },
              {name: "Ms. Swati De", contact: "9876543210" },
               {name: "Ms. Priyanka Ghosh", contact: "9876543210" },
          ],
          rules: [
            "Each group may have a maximum of two participants for the event.",
            "The competition features both individual and team-based challenges centered on MATLAB programming tasks relevant to electrical engineering applications.",
            "The competition will consist of two rounds: the first round will last 20 minutes, and the second round will last 30 minutes.",
            "External libraries, toolboxes provided by Math Works, or pre-written codes from the internet are not allowed.",
            "Internet access is strictly prohibited during the competition.",
            "Each submission should be clearly commented on and structured.",
            "The judgement will be made based on Accuracy, Correctness, Efficiency, Code Quality, Creativity, and submission time.",
            "Participants may be disqualified for using Smartwatches, Mobile phones, and Bluetooth devices as they are strictly prohibited during the competition, malpractice like copying codes, using prohibited resources and tampering with or disrupting the competition environment or failing to adhere to time constraints.",
            "Winners will be announced at the end of the event. Prizes will be awarded for 1 st , 2 nd , and 3 rd positions.",
            "The organizers reserve the right to modify the rules or judging criteria at any time.",
            "All decisions made by the judges and organizers are final.",
            ],
          eligibility: "All participants must carry a valid college ID card and present the original upon request for verification. Failure to do so will result in disqualification from participation. Each participant must be a student currently enrolled in a recognized college or university program",
          location: "Electromagnetic Lab",
          registration: "Open until May 15",
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
      events: [
        {
          id: "sudoku",
          title: "SUDOKU",
          department: "bsh",
          departmentName: "BSH",
          description:
            "Challenge your logical thinking in this timed number puzzle event. \n\n 🌟Details:\nContestants must complete a 9×9 Sudoku grid by filling in numbers from 1 to 9. No number should repeat within the same row, column, or 3×3 sub-grid.",
          minidesc:
            "Challenge your logical thinking in this timed number puzzle event.",
          entryFee: 10,
          teamSize: 1,
          date: "May 15",
          time: "10:00 AM",
          icon: <FlaskConical className="h-5 w-5 text-neon-bsh" />,
          bannerImage: "/images/sudoku.webp",
          coordinators: [
            { name: "Mr. Saurav Chowdhury", contact: "9331614668" },
            // {
            //   name: "Erica Sinclair",
            //   contact: "9876543210",
            // },
            // { name: "Will Byers", contact: "9876543210" },
          ],
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
          eligibility: "All participants must carry a valid college ID card and present the original upon request for verification. Failure to do so will result in disqualification from participation. Each participant must be a student currently enrolled in a recognized college or university program",
          location: "BSH Seminar Hall",
          registration: "Open until May 13",
        },
        {
          id: "hunt-for-fun",
          title: "HUNT FOR FUN",
          department: "bsh",
          departmentName: "BSH",
          description:
            "Think you have what it takes to crack mysteries and chase hidden treasures? Have you ever imagined yourself donning a detective's hat, solving puzzles and chasing clues?\n\nWell, it's time to live that dream! TECHetc 2K25 proudly presents Hunt for Fun — the ultimate adventure where treasure hunters race against time, solving riddles and uncovering secrets. \nUse your wits, follow the clues, and unlock new levels of excitement at every turn. More thrill. More madness. More treasures.\n\n Get ready — the hunt is about to begin!",
          minidesc:
            "A campus-wide treasure hunt with fun clues and exciting challenges.",
          entryFee: 60,
          teamSize: "2 - 3",
          date: "May 16",
          time: "02:00 PM",
          icon: <FlaskConical className="h-5 w-5 text-neon-bsh" />,
          bannerImage: "/images/hunt-for-fun.webp",
          coordinators: [
            {
              name: "Mr. Saurav Chowdhury",
              contact: "9331614668",
            },
            // { name: "Nancy Wheeler", contact: "9876543210" },
            // { name: "Mike Wheeler", contact: "9876543210" },
            // {
            //   name: "Dustin Henderson",
            //   contact: "9876543210",
            // },
          ],
          rules: [
            "Only team participation is allowed. Each team must have a minimum of 2 members and a maximum of 3 members.",
            "Mixed teams (with members from different colleges) are allowed, but at least one team member must be a student of HETC.",
            "The event consists of four rounds. Teams must successfully solve each round's clue to progress to the next round.",
            "10 minutes will be allotted for the 1st round. Only the top 12 teams from Round 1 will qualify for the next round. Teams failing to complete within the time limit will be eliminated.",
            "Judges and Coordinators reserve the right to modify the rules or adjust timings. Any changes will be communicated to all teams.",
            "The decision of the jury is final — no arguments or appeals will be entertained.",
            ],
          eligibility: "All participants must carry a valid college ID card and present the original upon request for verification. Failure to do so will result in disqualification from participation. Each participant must be a student currently enrolled in a recognized college or university program",
          location: "Campus-wide",
          registration: "Open until May 14",
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
      events: [
        {
          id: "quizzard",
          title: "QUIZZARD",
          department: "general",
          departmentName: "GENERAL",
          description:
            "Put your general knowledge to the test in this fast-paced quiz battle. \nThe details of each Round are as follows: \n\n 🟣Round 1: Current Affairs & G.K \n 🟣Round 2: Double Trouble (Basic Engineering) \n\n The Final Round are as follows:\n🟣Round 3: Audio & Visual Round: (Movie, Music, Puzzle, Sports, Personality,Politics).\n🟣Round 4: Guess/ Clue Round.\n🟣Round 5: Rapid Fire Round.",
          minidesc:
            "Put your general knowledge to the test in this fast-paced quiz battle.",
          entryFee: 0,
          teamSize: 2,
          date: "May 17",
          time: "02:00 PM",
          icon: <Brain className="h-5 w-5 text-neon-general" />,
          bannerImage: "/images/quizzard.webp",
          coordinators: [
            {
              name: "Manab Kumar Saha",
              contact: "9433565643",
            },
            // { name: "Nancy Wheeler", contact: "9876543210" },
            // { name: "Suzie Bingham", contact: "9876543210" },
          ],
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
          eligibility: "All participants must carry a valid college ID card and present the original upon request for verification. Failure to do so will result in disqualification from participation. Each participant must be a student currently enrolled in a recognized college or university program",
          location: "Main Seminar Hall",
          registration: "Open until May 15",
        },
        {
          id: "model-display",
          title: "MODEL DISPLAY",
          department: "general",
          departmentName: "GENERAL",
          description:
            "Showcase creative models and prototypes across engineering domains. \n\n 🌟Details:\nThe team must bring a layout of the project mentioning the project name, the aim of the project, working principles, and practical applications. Also, the project's expenditure is to be mentioned on a chart paper.",
          minidesc:
            "Showcase creative models and prototypes across engineering domains.",
          entryFee: 0,
          teamSize: 4,
          date: "May 18",
          time: "10:00 AM",
          icon: <Brain className="h-5 w-5 text-neon-general" />,
          bannerImage: "/images/model-display.webp",
          coordinators: [
            {
              name: "Dr. Stephen Hawking",
              contact: "9876543210",
            },
            {
              name: "Jonathan Byers",
              contact: "9876543210",
            },
            { name: "Robin Buckley", contact: "9876543210" },
            { name: "Karen Wheeler", contact: "9876543210" },
          ],
          rules: [
            "Dimension of the project base must not exceed (3x4) ft.",
            "The team must bring a layout of the project mentioning the project name, the aim of the project, working principles, and practical applications. Also, the project's expenditure is to be mentioned on a chart paper.",
            "At least two (2) group members should always remain present for the project demonstration during the exhibition period, i.e., 10.00 am - 5.00 pm.",
            "Virtual projects like web applications will also be allowed for the competition.",
            "Each group must carry an extension cord for Electric Connection. Otherwise, the organizing committee will be unable to provide an electrical connection to the models/ projects if required.",
            ],
          eligibility: "All Participants should have proper College ID card on them, and should be able to produce the same in original when asked for verification, failing which they will not be allowed to participate. Each participant should be a student pursuing some field of study in college/university.",
          location: "Exhibition Hall",
          registration: "Open until May 13th",
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-100"
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
                      {selectedEvent.description.split('\n').map((line, index) => (
                        <span key={index}>
                          {line}
                          <br />
                        </span>
                      ))}
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

                    {/* TEAM SIZE COMPONENT - ADD HERE */}
                    {/* Team Size Section with Cyberpunk Design */}
                    {/* Team Size Section with Cyberpunk Design */}
                    {/* Team Size Section with Cyberpunk Design */}
                    <div className="mb-6">
                      <div
                        className={`p-4 bg-background rounded-lg border-2 border-${color} relative overflow-hidden group`}
                      >
                        {/* Background elements */}
                        <div className="absolute inset-0 bg-grid-pattern bg-[length:15px_15px] opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
                        <div
                          className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${color} to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-300`}
                        ></div>

                        {/* Header with icon */}
                        <div className="flex items-center mb-3">
                          <Users className={`h-6 w-6 mr-2 text-${color}`} />
                          <h4 className="font-pixel text-lg">
                            Team Configuration
                          </h4>
                        </div>

                        {/* Team size display with animated elements */}
                        <div className="flex items-center justify-center relative py-4">
                          {/* Corner decorations */}
                          <div
                            className={`absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-${color} opacity-60`}
                          ></div>
                          <div
                            className={`absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-${color} opacity-60`}
                          ></div>
                          <div
                            className={`absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-${color} opacity-60`}
                          ></div>
                          <div
                            className={`absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-${color} opacity-60`}
                          ></div>

                          {/* Team size value with emphasis */}
                          <div className="text-center group-hover:scale-105 transition-all duration-300">
                            

                            {/* Visual representation of team size */}
                            <div className="mt-3">
                              {(() => {
                                // Extract min and max values
                                let minSize = 1;
                                let maxSize = 1;
                                const teamSizeStr = String(
                                  selectedEvent.teamSize
                                );

                                // Check if it's a range format (contains a hyphen)
                                if (teamSizeStr.includes("-")) {
                                  // Split by hyphen and clean up spaces
                                  const parts = teamSizeStr
                                    .split("-")
                                    .map((part) => parseInt(part.trim()));
                                  if (
                                    parts.length === 2 &&
                                    !isNaN(parts[0]) &&
                                    !isNaN(parts[1])
                                  ) {
                                    minSize = parts[0];
                                    maxSize = parts[1];
                                  }
                                } else if (
                                  typeof selectedEvent.teamSize === "number"
                                ) {
                                  minSize = maxSize = selectedEvent.teamSize;
                                } else if (!isNaN(parseInt(teamSizeStr))) {
                                  minSize = maxSize = parseInt(teamSizeStr);
                                }

                                // Cap visualization at 6 members
                                const minVisualCount = Math.min(minSize, 6);
                                const maxVisualCount = Math.min(maxSize, 6);

                                // Determine if we need to show both min and max
                                const showBoth = teamSizeStr.includes("-");

                                return (
                                  <div className="space-y-3">
                                    {/* Min team size visualization */}
                                    <div className="flex flex-col items-center">
                                      {showBoth ? (
                                        <span className="text-xs text-gray-400 mb-1">
                                          MINIMUM ({minSize})
                                        </span>
                                      ) : (
                                        <span className="text-xs text-gray-400 mb-1">
                                          TEAM SIZE
                                        </span>
                                      )}
                                      <div className="flex items-center justify-center space-x-1">
                                        {Array(minVisualCount)
                                          .fill(null)
                                          .map((_, i) => (
                                            <div
                                              key={i}
                                              className={`w-5 h-8 bg-${color} bg-opacity-20 border border-${color} rounded-sm flex items-center justify-center
                          ${i === 0 ? "animate-pulse" : ""}`}
                                            >
                                              <User
                                                className={`h-4 w-4 text-${color}`}
                                              />
                                            </div>
                                          ))}
                                        {minSize > 6 && (
                                          <div
                                            className={`w-5 h-8 flex items-center justify-center text-${color} border border-${color} rounded-sm`}
                                          >
                                            +{minSize - 6}
                                          </div>
                                        )}
                                      </div>
                                    </div>

                                    {/* Max team size visualization - only show if in range format */}
                                    {showBoth && (
                                      <div className="flex flex-col items-center">
                                        <span className="text-xs text-gray-400 mb-1">
                                          MAXIMUM ({maxSize})
                                        </span>
                                        <div className="flex items-center justify-center space-x-1">
                                          {Array(maxVisualCount)
                                            .fill(null)
                                            .map((_, i) => (
                                              <div
                                                key={i}
                                                className={`w-5 h-8 bg-${color} bg-opacity-20 border border-${color} rounded-sm flex items-center justify-center
                            ${i === minVisualCount ? "animate-pulse" : ""}`}
                                              >
                                                <User
                                                  className={`h-4 w-4 text-${color}`}
                                                />
                                              </div>
                                            ))}
                                          {maxSize > 6 && (
                                            <div
                                              className={`w-5 h-8 flex items-center justify-center text-${color} border border-${color} rounded-sm`}
                                            >
                                              +{maxSize - 6}
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                );
                              })()}
                            </div>
                            <div className="flex items-center justify-center">
                              {typeof selectedEvent.teamSize === "number" ||
                              !isNaN(parseInt(selectedEvent.teamSize)) ? (
                                // For numeric team sizes
                                <span
                                  className={`font-mono text-${color} text-3xl font-bold`}
                                >
                                  {selectedEvent.teamSize}
                                </span>
                              ) : (
                                // For range team sizes (like "1-2" or "3 - 4")
                                <span
                                  className={`font-mono text-${color} text-3xl font-bold`}
                                >
                                  {selectedEvent.teamSize.replace(/\s/g, "")}
                                </span>
                              )}
                              <span className="font-mono text-white ml-3">
                                {selectedEvent.teamSize === 1
                                  ? "INDIVIDUAL"
                                  : "MEMBERS"}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Scanline animation */}
                        <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <div
                            className={`absolute h-px w-full bg-${color} top-1/2 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 opacity-70`}
                          ></div>
                        </div>
                      </div>
                    </div>
                    {/* END OF TEAM SIZE COMPONENT */}

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

                    <div className="mb-6">
                      <h4
                        className={`font-mono text-lg border-b border-${color} pb-2 mb-3`}
                      >
                        ✨Eligibility✨
                      </h4>
                      <span className="text-gray-300">{selectedEvent.eligibility}</span>
                      </div>

                    <div
                      className={`mb-6 p-5 bg-background rounded-lg border-2 border-${color} relative overflow-hidden`}
                    >
                      {/* Background Grid Pattern */}
                      <div className="absolute inset-0 bg-grid-pattern bg-[length:20px_20px] opacity-5"></div>

                      {/* Header Section with Glow Effect */}
                      <div
                        className={`flex items-center mb-4 pb-3 border-b border-${color} border-opacity-50 relative`}
                      >
                        <Users className={`h-5 w-5 mr-3 text-${color}`} />
                        <h4 className="font-pixel text-lg">Coordinators</h4>
                        <div
                          className={`ml-2 h-px flex-grow bg-gradient-to-r from-${color} to-transparent opacity-70`}
                        ></div>
                      </div>

                      {/* Coordinators List with Hover Effects */}
                      <div className="space-y-3">
                        {selectedEvent.coordinators.map(
                          (coordinator, index) => (
                            <div
                              key={index}
                              className={`flex items-center p-3 bg-background border border-${color} border-opacity-30 rounded-md hover:border-opacity-100 transition-all duration-300 hover:bg-${color} hover:bg-opacity-5 group`}
                            >
                              {/* Coordinator Avatar/Icon */}
                              <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center bg-${color} bg-opacity-10 border border-${color} border-opacity-50 group-hover:border-opacity-100 mr-3`}
                              >
                                <User className={`h-5 w-5 text-${color}`} />
                              </div>

                              {/* Coordinator Details */}
                              <div className="flex-grow">
                                <div className="flex justify-between items-center">
                                  <span
                                    className={`text-white font-medium group-hover:text-${color} transition-colors duration-300`}
                                  >
                                    {coordinator.name}
                                  </span>
                                </div>
                                <div className="flex items-center mt-1">
                                  <Phone
                                    className={`h-3 w-3 mr-2 text-${color} opacity-70`}
                                  />
                                  <span className="text-gray-400 text-sm font-mono">
                                    {coordinator.contact}
                                  </span>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="mb-2 text-gray-400">
                        <span>Registration: </span>
                        <span className="font-mono">
                          {selectedEvent.registration}
                        </span>
                      </div>
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
                      <p className="text-gray-300 mb-4">{event.minidesc}</p>

                      <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                        <div className="bg-background rounded p-2">
                          <span className="block text-gray-400">Entry Fee</span>
                          <span className="font-mono text-white">
                            ₹{event.entryFee}
                          </span>
                        </div>
                        <div className="bg-background rounded p-2">
                          <span className="block text-gray-400">Team Size</span>
                          <span className="font-mono text-white">
                            {event.teamSize}{" "}
                            {event.teamSize === 1 ? "person" : "people"}
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
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default DepartmentPage;
