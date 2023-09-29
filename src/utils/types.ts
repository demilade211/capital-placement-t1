export interface FirstName {
    internalUse: boolean;
    show: boolean;
  }

  interface Question {
    type: string;
    question: string;
    disqualify?: boolean;
    choices?: string[];
    other?: boolean;
    maxChoice?: number;
    additionalInformation?: string;
    maxDuration?: number;
    in?: string;
  }
  
  export interface PersonalInformation {
    firstName: FirstName;
    lastName: FirstName;
    emailId: FirstName;
    phoneNumber: FirstName;
    nationality: FirstName;
    currentResidence: FirstName;
    idNumber: FirstName;
    dateOfBirth: FirstName;
    gender: FirstName;
    personalQuestions: Question[];
  } 
  
  export interface EducationExperienceResume {
    mandatory: boolean;
    show: boolean;
  } 
  
  export interface Profile {
    education: EducationExperienceResume;
    experience: EducationExperienceResume;
    resume: EducationExperienceResume;
    profileQuestions: Question[];
  } 
  
  export interface InitialState {
    coverImage: string;
    personalInformation: PersonalInformation;
    profile: Profile;
    customisedQuestions:Question[];
  }