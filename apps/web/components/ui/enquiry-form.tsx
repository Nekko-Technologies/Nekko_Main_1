"use client";

import * as React from "react";

type ServiceOption =
  | "cloud-infrastructure"
  | "embedded-control"
  | "iot-automation"
  | "robotics"
  | "installation"
  | "maintenance"
  | "troubleshooting"
  | "technical-support"
  | "other";

export interface EnquiryFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: ServiceOption;
  problemDescription: string;
  desiredOutcome: string;
  timeline: string;
  budgetRange: string;
  attachments?: FileList | undefined;
}

interface EnquiryFormProps {
  initialData?: Partial<EnquiryFormData>;
}

export function EnquiryForm({ initialData }: EnquiryFormProps) {
  const [form, setForm] = React.useState<EnquiryFormData>({
    name: initialData?.name ?? "",
    company: initialData?.company ?? "",
    email: initialData?.email ?? "",
    phone: initialData?.phone ?? "",
    service: initialData?.service ?? "cloud-infrastructure",
    problemDescription: initialData?.problemDescription ?? "",
    desiredOutcome: initialData?.desiredOutcome ?? "",
    timeline: initialData?.timeline ?? "",
    budgetRange: initialData?.budgetRange ?? "",
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showThankYou, setShowThankYou] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
    >
  ) => {
    const target = e.target as HTMLInputElement & { files?: FileList };
    const { name, value } = target;
    setForm({
      ...form,
      [name]:
        target.files !== undefined
          ? target.files
          : name === "email"
            ? value.trim()
            : value,
    });
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.company.trim()) {
      newErrors.company = "Company is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Valid email required";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone/WhatsApp is required";
    }

    if (!form.problemDescription.trim()) {
      newErrors.problemDescription = "Problem description is required";
    }

    if (!form.desiredOutcome.trim()) {
      newErrors.desiredOutcome = "Desired outcome is required";
    }

    if (!form.timeline.trim()) {
      newErrors.timeline = "Timeline is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate submission - in production, would send to backend
    setTimeout(() => {
      setIsSubmitting(false);
      setShowThankYou(true);
    }, 1500);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto space-y-6"
      aria-labelledby="enquiry-form-title"
    >
      {showThankYou ? (
        <div className="bg-bg-subtle rounded-sm p-6 text-center">
          <p className="text-primary font-inter font-medium text-sm">
            Thank you. We will review your enquiry and get back to you soon.
          </p>
        </div>
      ) : (
        <div>
          <h2 id="enquiry-form-title" className="font-inter font-semibold text-2xl text-bg-white">
            Discuss Your Project
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-sm font-inter font-medium text-bg-white mb-2"
              >
                Name
                <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                aria-describedby="name-error"
                className="w-full rounded-sm border bg-bg-subtle text-bg-placeholder placeholder:text-bg-placeholder/60 focus-visible:border-primary focus-visible:ring-primary/20 focus-visible:outline-none py-2 px-3 text-sm transition-colors"
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-destructive">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-inter font-medium text-bg-white mb-2"
              >
                Company
                <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                required
                aria-describedby="company-error"
                className="w-full rounded-sm border bg-bg-subtle text-bg-placeholder placeholder:text-bg-placeholder/60 focus-visible:border-primary focus-visible:ring-primary/20 focus-visible:outline-none py-2 px-3 text-sm transition-colors"
              />
              {errors.company && (
                <p id="company-error" className="mt-1 text-sm text-destructive">
                  {errors.company}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-sm font-inter font-medium text-bg-white mb-2"
              >
                Email
                <span className="text-destructive">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                aria-describedby="email-error"
                className="w-full rounded-sm border bg-bg-subtle text-bg-placeholder placeholder:text-bg-placeholder/60 focus-visible:border-primary focus-visible:ring-primary/20 focus-visible:outline-none py-2 px-3 text-sm transition-colors"
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-destructive">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-inter font-medium text-bg-white mb-2"
              >
                Phone / WhatsApp
                <span className="text-destructive">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                aria-describedby="phone-error"
                className="w-full rounded-sm border bg-bg-subtle text-bg-placeholder placeholder:text-bg-placeholder/60 focus-visible:border-primary focus-visible:ring-primary/20 focus-visible:outline-none py-2 px-3 text-sm transition-colors"
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1 text-sm text-destructive">
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-sm font-inter font-medium text-bg-white mb-2"
              >
                Service Required
                <span className="text-destructive">*</span>
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                aria-describedby="service-error"
                className="w-full rounded-sm border bg-bg-subtle text-bg-placeholder placeholder:text-bg-placeholder/60 focus-visible:border-primary focus-visible:ring-primary/20 focus-visible:outline-none py-2 px-3 text-sm transition-colors"
              >
                <option value="cloud-infrastructure">Cloud Infrastructure</option>
                <option value="embedded-control">Embedded & Control</option>
                <option value="iot-automation">IoT & Automation</option>
                <option value="robotics">Robotics System Design</option>
                <option value="installation">Installation</option>
                <option value="maintenance">Maintenance</option>
                <option value="troubleshooting">Troubleshooting</option>
                <option value="technical-support">Technical Support</option>
                <option value="other">Other</option>
              </select>
              {errors.service && (
                <p id="service-error" className="mt-1 text-sm text-destructive">
                  {errors.service}
                </p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-inter font-medium text-bg-white mb-2"
              >
                Problem Description
                <span className="text-destructive">*</span>
              </label>
              <textarea
                name="problemDescription"
                value={form.problemDescription}
                onChange={handleChange}
                required
                rows={3}
                aria-describedby="problemDescription-error"
                className="w-full rounded-sm border bg-bg-subtle text-bg-placeholder placeholder:text-bg-placeholder/60 focus-visible:border-primary focus-visible:ring-primary/20 focus-visible:outline-none py-3 px-3 text-sm resize transition-colors"
              />
              {errors.problemDescription && (
                <p id="problemDescription-error" className="mt-1 text-sm text-destructive">
                  {errors.problemDescription}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-sm font-inter font-medium text-bg-white mb-2"
              >
                Desired Outcome
                <span className="text-destructive">*</span>
              </label>
              <textarea
                name="desiredOutcome"
                value={form.desiredOutcome}
                onChange={handleChange}
                required
                rows={3}
                aria-describedby="desiredOutcome-error"
                className="w-full rounded-sm border bg-bg-subtle text-bg-placeholder placeholder:text-bg-placeholder/60 focus-visible:border-primary focus-visible:ring-primary/20 focus-visible:outline-none py-3 px-3 text-sm resize transition-colors"
              />
              {errors.desiredOutcome && (
                <p id="desiredOutcome-error" className="mt-1 text-sm text-destructive">
                  {errors.desiredOutcome}
                </p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-inter font-medium text-bg-white mb-2"
              >
                Timeline
                <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                name="timeline"
                value={form.timeline}
                onChange={handleChange}
                required
                aria-describedby="timeline-error"
                className="w-full rounded-sm border bg-bg-subtle text-bg-placeholder placeholder:text-bg-placeholder/60 focus-visible:border-primary focus-visible:ring-primary/20 focus-visible:outline-none py-2 px-3 text-sm transition-colors"
              />
              {errors.timeline && (
                <p id="timeline-error" className="mt-1 text-sm text-destructive">
                  {errors.timeline}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              className="block text-sm font-inter font-medium text-bg-white mb-2"
            >
              Budget Range
              <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              name="budgetRange"
              value={form.budgetRange}
              onChange={handleChange}
              required
              aria-describedby="budgetRange-error"
              className="w-full rounded-sm border bg-bg-subtle text-bg-placeholder placeholder:text-bg-placeholder/60 focus-visible:border-primary focus-visible:ring-primary/20 focus-visible:outline-none py-2 px-3 text-sm transition-colors"
            />
            {errors.budgetRange && (
              <p id="budgetRange-error" className="mt-1 text-sm text-destructive">
                {errors.budgetRange}
              </p>
            )}
          </div>

          <div>
            <label
              className="block text-sm font-inter font-medium text-bg-white mb-2"
            >
              Attachments (PDF, images, technical documents)
              <span className="text-destructive">*</span>
            </label>
            <input
              type="file"
              name="attachments"
              accept=".pdf,.image/*,.video/*"
              onChange={(e) => setForm({ ...form, attachments: e.target.files as unknown as FileList })}
              required
              aria-describedby="attachments-error"
              className="w-full rounded-sm border bg-bg-subtle text-[var(--primary)] cursor-pointer py-2 px-3 text-sm transition-colors"
            />
            {form.attachments && form.attachments.length > 0 && (
              <p className="mt-1 text-sm text-bg-secondary">
                {Array.from(form.attachments)
                  .map((f) => f.name)
                  .slice(0, 3)
                  .join(", ")}{Array.from(form.attachments).length > 3 && ` + ${Array.from(
                    form.attachments
                  ).length - 3}`} selected
              </p>
            )}
            {errors.attachments && (
              <p id="attachments-error" className="mt-1 text-sm text-destructive">
                Attachments are required
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-sm bg-primary text-primary-foreground py-3 px-4 font-inter font-medium text-sm transition-colors hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none"
          >
            {isSubmitting ? "Sending..." : "Submit Project Enquiry"}
          </button>
        </div>
      )}
    </form>
  );
}