import { ContactType, RootData } from "../models/DefaultUserData";
// Import the file
// Import the photos

import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";
import esa from "../assets/ESA.png";
import esa2 from "../assets/ESA2.png";
import ids from "../assets/ids.png";
import uni from "../assets/uni.jpg";
// @ts-ignore
import pdf from "../assets/ESA.Certificat.pdf";
import certificate from "../assets/certificate.jpg";
import skillsPhoto from "../assets/skillsDefaultPhoto2.jpeg";
import WorkspacePhoto1 from "../assets/WorkspacePhoto1.webp";
import WorkspacePhoto2 from "../assets/WorkspacePhoto2.png";
import WorkspacePhoto3 from "../assets/WorkspacePhoto3.webp";
import WorkspacePhoto4 from "../assets/WorkspacePhoto4.jpg";
import logoPath from "../assets/logoPath.png";
import logoPath2 from "../assets/logoPath2.mp4";
import profileImgPath from "../assets/profileImgPath.jpg";

import { uploadImageToStorage } from "./dataCreate";
// import { serverTimestamp } from "firebase/firestore";

// Now you can use the `imageFile` variable as a file in your code

// Define the Constant Variable with the Data

// new Date() !!!!! later
const createDataUserDefault = async (): Promise<RootData> => {
  return {
    dataUser: {
      userInfo: [
        {
          name: "Chaker",
          lastName: "Yaakoub",
          middleName: "Ayoub",
          specializations: ["Specialization 1", "Specialization 2"],
          workDomain: "Work Domain",
          about: "About John Doe",
          services: ["Service 1", "Service 2"],
          profileImgPath: await uploadImageToStorage(
            profileImgPath,
            "profileImgPath"
          ),
          profileImgPath2: "",
          logoPath: await uploadImageToStorage(logoPath, "logoPath"),
          logoPath2: await uploadImageToStorage(logoPath2, "logoPath2"),
          yearsExperience: 2010,
          clientsNumber: 100,
          themeColor: "#ff4824",
          gender: "",
          title: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],

      workspaceDescriptions: [
        {
          photo: await uploadImageToStorage(WorkspacePhoto1, "WorkspacePhoto1"),
          title: "Workspace Title 1",
          briefDescription: "Brief description of workspace 1",
          description: "Full description of workspace 1",
          youtubeLink: "https://www.youtube.com/embed/tgbNymZ7vqY",
          usefulLinks: [
            { name: "Link 1", url: "https://example.com/link1" },
            { name: "Link 2", url: "https://example.com/link2" },
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo: await uploadImageToStorage(WorkspacePhoto2, "WorkspacePhoto2"),
          title: "Workspace Title 2",
          briefDescription: "Brief description of workspace 2",
          description: "Full description of workspace 2",
          youtubeLink: "https://youtu.be/tgbNymZ7vqY",
          usefulLinks: [
            { name: "Link 1", url: "https://example.com/link1" },
            { name: "Link 2", url: "https://example.com/link2" },
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo: await uploadImageToStorage(WorkspacePhoto3, "WorkspacePhoto3"),
          title: "Workspace Title 3",
          briefDescription: "Brief description of workspace 2",
          description: "Full description of workspace 2",
          youtubeLink: "https://youtu.be/tgbNymZ7vqY?si=ICt-92tzLzdvs6Bw&t=47",
          usefulLinks: [
            { name: "Link 1", url: "https://example.com/link1" },
            { name: "Link 2", url: "https://example.com/link2" },
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo: await uploadImageToStorage(WorkspacePhoto4, "WorkspacePhoto4"),
          title: "Workspace Title 4",
          briefDescription: "Brief description of workspace 2",
          description: "Full description of workspace 2",
          youtubeLink: "https://www.youtube.com/watch?v=OxvYexFZY6w",
          usefulLinks: [
            { name: "Link 1", url: "https://example.com/link1" },
            { name: "Link 2", url: "https://example.com/link2" },
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],

      skills: [
        {
          resume: "Resume text",
          skillsPhoto: "",
          createdAt: new Date(),
          updatedAt: new Date(),
          skills: [
            {
              name: "Skill 1",
              percentage: 80,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Skill 2",
              percentage: 90,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              name: "Skill 3",
              percentage: 90,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
        },
      ],
      languages: [
        {
          language: "English",
          level: "Native / Current",
          description: "Language of daily use and academic proficiency",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          language: "English",
          level: "Elementary",
          description: "A2 Level - Basic communication and understanding",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          language: "Spanish",
          level: "Intermediate",
          description: "B1 Level - Competent in everyday interactions",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],

      // Experience
      workingPeriods: [
        {
          title: "Full-Stack Developer",
          profileHeadline:
            "Innovative Full-Stack Developer with a passion for creating dynamic web applications.",
          employmentType: "Internship",
          companyLogo: await uploadImageToStorage(esa, "companyLogo1"),
          companyName: "ESA Coding Lab",
          companyLink: "https://esacodinglab.com",
          location: "Beirut",
          locationType: "Hybrid",
          monthStartDate: 9,
          yearStartDate: 2022,
          monthEndDate: 4,
          yearEndDate: 2023,
          current: false,
          skills: ["JavaScript", "React", "Node.js", "MongoDB"],
          description:
            'Completed a five-month intensive training camp "The Full-Stack Developer" conducted by ESA Coding Lab, which includes certification in Full-Stack Development. Double-certified by reputable entities in Lebanon and abroad...',
          media: "https://example.com/certificate1.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Software Engineer",
          profileHeadline:
            "Experienced Software Engineer specialized in backend development and cloud computing.",
          employmentType: "Full-Time",
          companyLogo: await uploadImageToStorage(ids, "companyLogo2"),
          companyName: "Tech Innovators Inc.",
          companyLink: "https://techinnovators.com",
          location: "San Francisco",
          locationType: "On-site",
          monthStartDate: 6,
          yearStartDate: 2021,
          // monthEndDate: 0,
          // yearEndDate: 0,
          current: true,
          skills: ["Java", "Spring Boot", "SQL", "Docker", "Kubernetes"],
          description:
            "Working as a Software Engineer at Tech Innovators Inc., focusing on developing scalable web applications and microservices using Java and Spring Boot. Responsible for managing databases, containerization, and orchestrating deployments.",
          media: "https://example.com/project1.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      educations: [
        {
          school: "University of Beirut",
          schoolLogo: await uploadImageToStorage(uni, "schoolLogo1"),
          schoolLink: "https://universityofbeirut.edu.lb",
          location: "Beirut, Lebanon",
          degree: "Bachelor of Science",
          fieldOfStudy: "Computer Science",
          media: "https://example.com/degree-certificate1.png",
          monthStartDate: 9,
          yearStartDate: 2018,
          monthEndDate: 6,
          yearEndDate: 2022,
          current: false,
          grade: "3.8 GPA",
          activities:
            "Member of the Computer Science Club, Volunteer at Tech Outreach Program",
          description:
            "Completed a Bachelor of Science degree in Computer Science with a strong focus on software development, data structures, and algorithms. Actively participated in the Computer Science Club and contributed to various volunteer initiatives.",
          skills: [
            "Java",
            "C++",
            "Data Structures",
            "Algorithms",
            "Software Development",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          school: "MIT",
          schoolLogo: await uploadImageToStorage(uni, "schoolLogo2"),
          schoolLink: "https://mit.edu",
          location: "Cambridge, MA, USA",
          degree: "Master of Science",
          fieldOfStudy: "Artificial Intelligence",
          media: "https://example.com/degree-certificate2.png",
          monthStartDate: 9,
          yearStartDate: 2020,
          monthEndDate: 6,
          yearEndDate: 2022,
          current: false,
          grade: "4.0 GPA",
          activities: "Research Assistant in AI Lab, Member of Robotics Club",
          description:
            "Pursued a Master of Science degree in Artificial Intelligence, specializing in machine learning, neural networks, and robotics. Conducted research as an assistant in the AI Lab and participated in the Robotics Club.",
          skills: [
            "Python",
            "Machine Learning",
            "Neural Networks",
            "Robotics",
            "AI Research",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      certifications: [
        {
          name: "Certified Full-Stack Developer",
          organization: "ESA Coding Lab",
          organizationLogo: await uploadImageToStorage(
            esa,
            "organizationLogo1"
          ),
          organizationLink: "https://esacodinglab.com",
          location: "Beirut, Lebanon",
          issueMonthDate: 1,
          issueYearDate: 2023,
          expirationMonthDate: 6,
          expirationYearDate: 2023,
          credentialID: "123456789",
          credentialURL: "https://example.com/certification1",
          skills: ["JavaScript", "React", "Node.js", "MongoDB"],
          description:
            "Completed an intensive full-stack development certification program covering frontend and backend technologies, including JavaScript, React, Node.js, and MongoDB.",
          media: await uploadImageToStorage(certificate, "media1"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Machine Learning Specialization",
          organization: "Coursera",
          organizationLogo: await uploadImageToStorage(
            esa2,
            "organizationLogo2"
          ),
          organizationLink: "https://esacodinglab.com",
          location: "Beirut, Lebanon",
          issueMonthDate: 4,
          issueYearDate: 2021,
          expirationMonthDate: 6,
          expirationYearDate: 2023,
          credentialID: "987654321",
          credentialURL: "https://example.com/certification2",
          skills: [
            "Python",
            "Machine Learning",
            "Data Science",
            "Neural Networks",
          ],
          description:
            "Completed the Machine Learning Specialization on Coursera, which included courses on Python programming, machine learning algorithms, data science, and neural networks.",
          media: await uploadImageToStorage(pdf, "media2"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      news: [
        {
          photo: await uploadImageToStorage(news1, "newsPhoto1"),
          title: "Tech Conference 2024 Announced",
          briefDescription:
            "The biggest tech conference of the year has been announced, bringing together industry leaders and innovators.",
          description:
            "The annual Tech Conference 2024 is set to take place in Silicon Valley. The event will feature keynote speeches, panel discussions, and networking opportunities with some of the most influential figures in the tech industry. Attendees will have the chance to explore the latest advancements in technology, including AI, blockchain, and cybersecurity.",
          youtubeLink: "https://www.youtube.com/watch?v=OxvYexFZY6w",
          usefulLinks: [
            {
              name: "this is a big link to test if i have a link like this and i try just to add some bla bla bla  1",
              url: "https://example.com/link1",
            },
            { name: "Link 2", url: "https://example.com/link2" },
          ],

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo: await uploadImageToStorage(news2, "newsPhoto2"),
          title: "Breakthrough in Renewable Energy",
          briefDescription:
            "Scientists have developed a new method for generating renewable energy, promising a more sustainable future.",
          description:
            "A team of researchers at the National Renewable Energy Laboratory has unveiled a groundbreaking technique for harnessing solar energy more efficiently. This new method is expected to significantly reduce the cost of solar power, making it more accessible to consumers and businesses alike. The research has been published in the Journal of Renewable Energy, and the team is now working on scaling the technology for commercial use.",
          youtubeLink: "https://www.youtube.com/watch?v=OxvYexFZY6w",
          usefulLinks: [
            { name: "Link 1", url: "https://example.com/link1" },
            { name: "Link 2", url: "https://example.com/link2" },
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo: await uploadImageToStorage(news2, "newsPhoto3"),
          title: "Breakthrough in Renewable Energy",
          briefDescription:
            "Scientists have developed a new method for generating renewable energy, promising a more sustainable future.",
          description:
            "A team of researchers at the National Renewable Energy Laboratory has unveiled a groundbreaking technique for harnessing solar energy more efficiently. This new method is expected to significantly reduce the cost of solar power, making it more accessible to consumers and businesses alike. The research has been published in the Journal of Renewable Energy, and the team is now working on scaling the technology for commercial use.",
          youtubeLink: "https://www.youtube.com/watch?v=OxvYexFZY6w",
          usefulLinks: [
            { name: "Link 1", url: "https://example.com/link1" },
            { name: "Link 2", url: "https://example.com/link2" },
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      aboutUs: [
        {
          about: "About us description",
          whyMe: ["Why me 1", "Why me 2", "Why me 3"],
          // cv: await uploadImageToStorage(pdf, "cv"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      services: [
        {
          brief: "Services brief description",
          services: ["Service A", "Service B", "Service C"],
          personalizedSolutions: ["Solution 1", "Solution 2", "Solution 3"],
          contactType: ContactType.EMAIL,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      contactUs: [
        {
          location: "Location",
          telephone: "123456789",
          whatsapp: "123456789",
          tiktok: "tiktok.com",
          twitter: "twitter.com",
          facebook: "facebook.com",
          instagram: "instagram.com",
          youtube: "youtube.com",
          email: "chakeryb.pc@gmail.com",
          website: "www.example.com",
          linkedin: "www.linkedin.com",
          contactDetails:
            "Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. , Monday through Friday",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      //@ts-ignore
      messages: [{}],
    },
  };
};

export default createDataUserDefault;
