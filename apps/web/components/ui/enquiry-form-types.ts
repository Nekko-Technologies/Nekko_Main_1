export type EnquiryFormFields = {
  name: string
  company: string
  email: string
  phone: string
  service: string
  problemDescription: string
  desiredOutcome: string
  timeline: string
  budgetRange: string
  attachments: FileList | null
}