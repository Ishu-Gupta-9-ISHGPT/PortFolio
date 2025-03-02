import { Injectable, signal } from "@angular/core"
import { IonIconComponent } from "../components/ion-icon/ion-icon.component"
import type {
  Profile,
  SocialLink,
  Service,
  Testimonial,
  Client,
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
    { platform: "Stack Overflow", url: "#", icon: "logo-stackoverflow" },
    { platform: "Github", url: "#", icon: "logo-github" },
    { platform: "LinkedIn", url: "#", icon: "logo-linkedin" }
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

  private testimonials = signal<Testimonial[]>([
    {
      avatar: "../../assets/images/avatar-1.png",
      name: "Daniel lewis",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client.",
    },
    {
      avatar: "../../assets/images/avatar-2.png",
      name: "Jessica miller",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
    },
    {
      avatar: "../../assets/images/avatar-3.png",
      name: "Emily evans",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
    },
    {
      avatar: "../../assets/images/avatar-4.png",
      name: "Henry william",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
    },
  ])

  private clients: Client[] = [
    { logo: "../../assets/images/logo-1-color.png", name: "Client 1", url: "#" },
    { logo: "../../assets/images/logo-2-color.png", name: "Client 2", url: "#" },
    { logo: "../../assets/images/logo-3-color.png", name: "Client 3", url: "#" },
    { logo: "../../assets/images/logo-4-color.png", name: "Client 4", url: "#" },
    { logo: "../../assets/images/logo-5-color.png", name: "Client 5", url: "#" },
    { logo: "../../assets/images/logo-6-color.png", name: "Client 6", url: "#" },
  ]

  private education: TimelineItem[] = [
    {
      title: "University school of the arts",
      date: "2007 — 2008",
      description:
        "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
    },
    {
      title: "New york academy of art",
      date: "2006 — 2007",
      description:
        "Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..",
    },
    {
      title: "High school of art and design",
      date: "2002 — 2004",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.",
    },
  ]

  private experience: TimelineItem[] = [
    {
      title: "Creative director",
      date: "2015 — Present",
      description:
        "Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.",
    },
    {
      title: "Art director",
      date: "2013 — 2015",
      description:
        "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
    },
    {
      title: "Web designer",
      date: "2010 — 2013",
      description:
        "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
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

  constructor() {}

  getProfile() {
    return this.profile
  }

  getSocialLinks() {
    return this.socialLinks
  }

  getServices() {
    return this.services
  }

  getTestimonials() {
    return this.testimonials
  }

  getClients(): Client[] {
    return this.clients
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

  // Add more getter methods as needed
}

