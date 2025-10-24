export type HomeExperience = {
  title: string;
  description: string;
  imgSrc: string;
  link: string;
};

export type HomeSpeaker = {
  image: string;
  name: string;
  description: string;
  facebookLink?: string;
  twitterLink?: string;
  linkedInLink?: string;
};

export type HomeEvent = {
  title: string;
  description: string;
  src: string;
  href: string;
};

export interface Participant {
  full_name: string;
  gender: "M" | "F";
  email: string;
  grade: string;
  phone: string;
  institution: string;
  address: string;
  t_shirt_size: string;
  guardian_contact?: string;
}

export interface Payment {
  amount: string;
  phone: string;
  method: "bkash" | "nagad";
  trx_id: string;
}

export interface TeamParticipant {
  full_name: string;
  gender: "M" | "F";
  phone: string;
  grade: string;
  institution: string;
  t_shirt_size: string;
}

export interface TeamCompetition {
  team: {
    team_name: string;
    participant: TeamParticipant[];
  };
  competition: string[];
}

export interface RegistrationData {
  participant: Participant;
  payment: Payment;
  competition?: string[];
  team_competition?: TeamCompetition;
  coupon?: Coupon;
}

interface Coupon {
  coupon_code: string;
}

export interface Participant {
  full_name: string;
  gender: "M" | "F";
  email: string;
  grade: string;
  phone: string;
  institution: string;
  address: string;
  t_shirt_size: string;
  guardian_contact?: string;
}

export interface Payment {
  amount: string;
  method: "bkash" | "nagad";
  phone: string;
  trx_id: string;
}

export interface TeamMember {
  full_name: string;
  gender: "M" | "F";
  phone: string;
  grade: string;
  institution: string;
  email: string;
  t_shirt_size: string;
}

export interface Team {
  team_name: string;
  participant: TeamMember[];
}

export interface RegistrationResponseData {
  participant: Participant;
  payment: Payment;
  segments: string[];
  competitions: string[];
  team?: Team;
}

export interface RegistrationSuccessResponse {
  data: RegistrationResponseData;
  email_queued: boolean;
  message: string;
  success: true;
}

// Error Response Types
export interface ValidationError {
  [field: string]: string[] | string | ValidationError;
}

export interface RegistrationErrorResponse {
  status: number;
  data: ValidationError;
  message: string;
}

export interface ErrorState {
  status?: number;
  data?: ValidationError;
  message: string;
}

// Request Types (for sending to backend)
