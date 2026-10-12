import { Profile, ValidationError } from '../types';

export const validateProfile = (profile: Profile): ValidationError[] => {
  const errors: ValidationError[] = [];

  const trimmedFullName = profile.fullName.trim();
  if (!trimmedFullName) {
    errors.push({ field: 'fullName', message: 'Full name is required' });
  } else if (trimmedFullName.length < 2) {
    errors.push({ field: 'fullName', message: 'Full name must be at least 2 characters' });
  }

  const trimmedRegNumber = profile.registrationNumber.trim();
  if (!trimmedRegNumber) {
    errors.push({ field: 'registrationNumber', message: 'Registration number is required' });
  } else if (!/^\d{7}$/.test(trimmedRegNumber)) {
    errors.push({ field: 'registrationNumber', message: 'Registration number must be 7 digits' });
  }

  const trimmedVerification = profile.verificationCode.trim();
  if (!trimmedVerification) {
    errors.push({ field: 'verificationCode', message: 'Verification code is required' });
  } else if (!/^MOB-A2-\d{4}$/.test(trimmedVerification)) {
    errors.push({ field: 'verificationCode', message: 'Verification code must follow format MOB-A2-XXXX' });
  }

  const trimmedHeadline = profile.headline.trim();
  if (!trimmedHeadline) {
    errors.push({ field: 'headline', message: 'Headline is required' });
  } else if (trimmedHeadline.length > 50) {
    errors.push({ field: 'headline', message: 'Headline must be 50 characters or less' });
  }

  const trimmedBio = profile.biography.trim();
  if (!trimmedBio) {
    errors.push({ field: 'biography', message: 'Biography is required' });
  } else if (trimmedBio.length < 20) {
    errors.push({ field: 'biography', message: 'Biography must be at least 20 characters' });
  } else if (trimmedBio.length > 500) {
    errors.push({ field: 'biography', message: 'Biography must be 500 characters or less' });
  }

  const trimmedPrimarySkill = profile.primarySkill.trim();
  if (!trimmedPrimarySkill) {
    errors.push({ field: 'primarySkill', message: 'Primary skill is required' });
  }

  return errors;
};

export const getFieldError = (errors: ValidationError[], field: string): string | undefined => {
  return errors.find(e => e.field === field)?.message;
};