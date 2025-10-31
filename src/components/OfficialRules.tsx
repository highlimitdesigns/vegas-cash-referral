import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const OfficialRules = () => {
  return (
    <div className="bg-secondary/30 p-8 rounded-lg border border-border">
      <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
        Official Sweepstakes Rules
      </h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 p-4 bg-card rounded-lg border-2 border-primary">
          <p className="text-lg font-semibold text-foreground">
            Einbinder Home Finder Referral Giveaway
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Sponsor: Home Finder Realty
          </p>
          <p className="text-sm text-muted-foreground">
            Broker: Damian Einbinder – NV License # [insert license number]
          </p>
          <p className="text-sm text-muted-foreground">
            Address: 9890 S. Maryland Parkway Suite 200A, Las Vegas, NV 89183
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-2">
          <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-4">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              1. No Purchase or Referral Necessary to Enter or Win
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              A purchase, referral, or payment of any kind will not increase your chances of winning.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-4">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              2. Eligibility
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-2">
              <p>
                Open to legal residents of Nevada who are 18 years of age or older at the time of entry.
              </p>
              <p>
                Void where prohibited. Employees, agents, or affiliates of the Sponsor are not eligible to participate.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-4">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              3. Promotion Period
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-2">
              <p>
                The sweepstakes begins on January 1, 2026, and ends on December 15, 2026.
              </p>
              <p>
                All entries must be received by 11:59 PM PST on December 15, 2026.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-4">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              4. How to Enter
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-3">
              <div>
                <p className="font-semibold text-foreground mb-1">Referral Entry:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>
                    Participants may receive one (1) entry by submitting a referral of a person interested in buying or selling a home in Clark County, Nevada.
                  </li>
                  <li>
                    Referrals must include legitimate contact information and be genuine leads.
                  </li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold text-foreground mb-1">Alternate Method of Entry (AMOE):</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>
                    Participants may also enter without submitting a referral by mailing a 3" × 5" postcard containing their full name, address, phone number, and email to:
                  </li>
                </ul>
                <div className="bg-secondary p-3 rounded mt-2 ml-4">
                  <p className="text-sm font-mono">
                    Home Finder Realty – AMOE Entry<br />
                    9890 S. Maryland Parkway Suite 200A<br />
                    Las Vegas, NV 89183
                  </p>
                </div>
                <p className="mt-2 ml-2">
                  Mail-in entries must be postmarked by December 15, 2026 and received by December 18, 2026.
                </p>
              </div>

              <p className="font-semibold text-foreground">
                Both entry methods carry equal weight in the drawing.
              </p>
              <p className="font-semibold text-foreground">
                Limit one (1) entry per person, regardless of entry method.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-4">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              5. Prize
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-2">
              <p>
                One (1) winner will receive a <span className="font-bold text-primary">$500 cash prize</span>.
              </p>
              <p>
                Approximate Retail Value (ARV): $500.
              </p>
              <p>
                Odds of winning depend on the total number of eligible entries received.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-card border border-border rounded-lg px-4">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              6. Winner Selection
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-2">
              <p>
                The winner will be selected at random on December 20, 2026 at Home Finder Realty, 9890 S. Maryland Parkway Suite 200A, Las Vegas, NV 89183.
              </p>
              <p>
                The winner will be notified by phone or email within five (5) business days.
              </p>
              <p>
                The winner may be required to sign an Affidavit of Eligibility and Liability/Publicity Release.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="bg-card border border-border rounded-lg px-4">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              7. General Conditions
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-2">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Entry constitutes permission for Sponsor to use the winner's name, likeness, and city of residence for promotional purposes without additional compensation, unless prohibited by law.
                </li>
                <li>
                  Sponsor reserves the right to disqualify entries that are incomplete, illegible, fraudulent, or otherwise noncompliant.
                </li>
                <li>
                  This sweepstakes is governed by Nevada law and subject to all applicable federal, state, and local laws and regulations.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="bg-card border border-border rounded-lg px-4">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              8. Disclaimers
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-2">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  This promotion is in no way sponsored, endorsed, or administered by, or associated with, any third party, including Facebook, Google, or Instagram.
                </li>
                <li>
                  All decisions of the Sponsor are final and binding.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default OfficialRules;
