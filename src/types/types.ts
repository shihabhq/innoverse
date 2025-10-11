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
}
