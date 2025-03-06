import { Injectable, signal } from "@angular/core"
import { CommonModule } from "@angular/common"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"


import type {
  Profile,
  SocialLink,
  Service,
  TimelineItem,
  Skill,
  Project,
  BlogPost,
} from "../models/portfolio.model"

@Injectable({
  providedIn: "root",
})
export class PortfolioService {
  private profile = signal<Profile>({
    name: "Ishu Gupta",
    title: "Frontend developer",
    avatar: "../../assets/images/my-avatar.png",
    email: "guptarshu999@gmail.com",
    phone: "+91 6387015492",
    birthday: "Oct 22, 2001",
    location: "Indore, India",
  })

  private socialLinks = signal<SocialLink[]>([
    { platform: "Stack Overflow", url: "https://stackoverflow.com/users/18054540/ishu-gupta", icon: "logo-stackoverflow" },
    { platform: "Github", url: "https://github.com/Ishu-Gupta-9-ISHGPT", icon: "logo-github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/ishu-gupta-395493201/", icon: "logo-linkedin" }
  ])

  private services = signal<Service[]>([
    {
      icon: "../../assets/images/icon-design.svg",
      title: "Web design",
      description: "The most modern and high-quality design made at a professional level.",
    },
    {
      icon: "../../assets/images/icon-dev.svg",
      title: "Web development",
      description: "High-quality development of sites at the professional level.",
    },
    {
      icon: "../../assets/images/icon-app.svg",
      title: "Mobile apps",
      description: "Professional development of applications for iOS and Android.",
    },
    {
      icon: "../../assets/images/icon-photo.svg",
      title: "Photography",
      description: "I make high-quality photos of any category at a professional level.",
    },
  ])

  private education: TimelineItem[] = [
    {
      title: "National Institute of Technology, Agartala",
      date: "2020 — 2024",
      description:
        "Completed Bachelor of Technology in Computer Science and Engineering, gaining strong knowledge in web development, data structures, and software engineering.",
    },
    {
      title: "Jawahar Navodaya Vidyalaya, Tikamgarh",
      date: "2017 — 2019",
      description:
        "Completed Higher Secondary Education with a specialization in Science stream, building a foundation in Mathematics and Computer Science.",
    },
    {
      title: "Jawahar Navodaya Vidyalaya, Tikamgarh",
      date: "2012 — 2017",
      description:
        "Completed Secondary Education, focusing on core subjects with excellent academic performance.",
    },    
  ]

  private experience: TimelineItem[] = [
    {
      title: "Frontend Developer",
      date: "2024 — Present",
      description:
        "Working at Digit Insurance, contributing to the development of dynamic and responsive web applications using Angular. Collaborating with cross-functional teams to implement user-friendly interfaces and seamless API integrations.",
    },    
  ]

  private skills: Skill[] = [
    { name: "Web design", percentage: 80 },
    { name: "Graphic design", percentage: 70 },
    { name: "Branding", percentage: 90 },
    { name: "WordPress", percentage: 50 },
  ]

  private projects: Project[] = [
    {
      image: "../../assets/images/project-1.jpg",
      title: "Finance",
      category: "web development",
      url: "#",
    },
    {
      image: "../../assets/images/project-2.png",
      title: "Orizon",
      category: "web development",
      url: "#",
    },
    {
      image: "../../assets/images/project-3.jpg",
      title: "Fundo",
      category: "web design",
      url: "#",
    },
    {
      image: "../../assets/images/project-4.png",
      title: "Brawlhalla",
      category: "applications",
      url: "#",
    },
    {
      image: "../../assets/images/project-5.png",
      title: "DSM.",
      category: "web design",
      url: "#",
    },
    {
      image: "../../assets/images/project-6.png",
      title: "MetaSpark",
      category: "web design",
      url: "#",
    },
    {
      image: "../../assets/images/project-7.png",
      title: "Summary",
      category: "web development",
      url: "#",
    },
    {
      image: "../../assets/images/project-8.jpg",
      title: "Task Manager",
      category: "applications",
      url: "#",
    },
    {
      image: "../../assets/images/project-9.png",
      title: "Arrival",
      category: "web development",
      url: "#",
    },
  ]

  private blogPosts: BlogPost[] = [
    {
      image: "../../assets/images/blog-1.jpg",
      category: "Design",
      date: "Fab 23, 2022",
      title: "Design conferences in 2022",
      description: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
      url: "#",
    },
    {
      image: "../../assets/images/blog-2.jpg",
      category: "Design",
      date: "Fab 23, 2022",
      title: "Best fonts every designer",
      description: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
      url: "#",
    },
    {
      image: "../../assets/images/blog-3.jpg",
      category: "Design",
      date: "Fab 23, 2022",
      title: "Design digest #80",
      description:
        "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.",
      url: "#",
    },
    {
      image: "../../assets/images/blog-4.jpg",
      category: "Design",
      date: "Fab 23, 2022",
      title: "UI interactions of the week",
      description: "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.",
      url: "#",
    },
    {
      image: "../../assets/images/blog-5.jpg",
      category: "Design",
      date: "Fab 23, 2022",
      title: "The forgotten art of spacing",
      description: "Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "#",
    },
    {
      image: "../../assets/images/blog-6.jpg",
      category: "Design",
      date: "Fab 23, 2022",
      title: "Design digest #79",
      description: "Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.",
      url: "#",
    },
  ]

  constructor(private http: HttpClient) {}

  getProfile() {
    return this.profile
  }

  getSocialLinks() {
    return this.socialLinks
  }

  getServices() {
    return this.services
  }


  getEducation(): TimelineItem[] {
    return this.education
  }

  getExperience(): TimelineItem[] {
    return this.experience
  }

  getSkills(): Skill[] {
    return this.skills
  }

  getProjects(): Project[] {
    return this.projects
  }

  getBlogPosts(): BlogPost[] {
    return this.blogPosts
  }

  getProjectCategories(): string[] {
    const categories = this.projects.map((project) => project.category)
    return ["all", ...new Set(categories)]
  }

  sendEmail(data: any): Observable<any> {
    let url = `https://formspree.io/f/xanewevw`;
    return this.http.post(url, data, {headers: { 'Content-Type' : "application/json"}});
  }
  // Add more getter methods as needed
}

