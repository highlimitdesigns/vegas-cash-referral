import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ReferralForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    referralName: "",
    referralEmail: "",
    referralPhone: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    console.log("Referral submitted:", formData);
    toast.success("Thank you! Your entry has been received.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      referralName: "",
      referralEmail: "",
      referralPhone: "",
      notes: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg shadow-[var(--shadow-soft)] border border-border">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">Submit Your Entry</h3>
        <p className="text-muted-foreground">Fill out the form below to enter the sweepstakes</p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-sm font-medium">
            Your Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-medium">
            Your Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-sm font-medium">
            Your Phone <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="(702) 555-0123"
            className="mt-1"
          />
        </div>

        <div className="border-t border-border pt-4 mt-6">
          <h4 className="text-sm font-semibold text-foreground mb-3">Referral Information (Optional)</h4>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="referralName" className="text-sm font-medium">
                Referral Name
              </Label>
              <Input
                id="referralName"
                name="referralName"
                type="text"
                value={formData.referralName}
                onChange={handleChange}
                placeholder="Friend's name"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="referralEmail" className="text-sm font-medium">
                Referral Email
              </Label>
              <Input
                id="referralEmail"
                name="referralEmail"
                type="email"
                value={formData.referralEmail}
                onChange={handleChange}
                placeholder="friend@example.com"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="referralPhone" className="text-sm font-medium">
                Referral Phone
              </Label>
              <Input
                id="referralPhone"
                name="referralPhone"
                type="tel"
                value={formData.referralPhone}
                onChange={handleChange}
                placeholder="(702) 555-0124"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="notes" className="text-sm font-medium">
                Additional Notes
              </Label>
              <Textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any additional information about the referral..."
                className="mt-1"
                rows={3}
              />
            </div>
          </div>
        </div>
      </div>

      <Button type="submit" variant="hero" size="xl" className="w-full">
        Submit Entry
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        By submitting this form, you agree to the official sweepstakes rules
      </p>
    </form>
  );
};

export default ReferralForm;
