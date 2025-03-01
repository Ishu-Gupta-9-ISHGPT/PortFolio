export interface Profile {
    name: string
    title: string
    avatar: string
    email: string
    phone: string
    birthday: string
    location: string
  }
  
  export interface SocialLink {
    platform: string
    url: string
    icon: string
  }
  
  export interface Service {
    icon: string
    title: string
    description: string
  }
  
  export interface Testimonial {
    avatar: string
    name: string
    text: string
    date: string
  }
  
  export interface Client {
    logo: string
    name: string
    url: string
  }
  
  export interface TimelineItem {
    title: string
    date: string
    description: string
  }
  
  export interface Skill {
    name: string
    percentage: number
  }
  
  export interface Project {
    image: string
    title: string
    category: string
    url: string
  }
  
  export interface BlogPost {
    image: string
    category: string
    date: string
    title: string
    description: string
    url: string
  }
  
  