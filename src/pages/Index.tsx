import { Button } from "@/components/ui/button";
import ReferralForm from "@/components/ReferralForm";
import OfficialRules from "@/components/OfficialRules";
import vegasHero from "@/assets/vegas-hero.jpg";

const Index = () => {
  const scrollToForm = () => {
    document.getElementById("referral-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">
              Home Finder Realty
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${vegasHero})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block text-6xl mb-4 animate-pulse">
              💰
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-foreground leading-tight">
              Refer & Win Cash!
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Know someone looking to buy or sell real estate in Las Vegas?
            </p>
            
            <p className="text-2xl md:text-3xl font-bold text-primary">
              Refer your friends and family today for your chance to win a CASH prize!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button variant="hero" size="xl" onClick={scrollToForm}>
                Enter Now
              </Button>
            </div>

            <div className="bg-card/90 backdrop-blur-sm border-2 border-primary rounded-lg p-6 max-w-2xl mx-auto mt-8 shadow-[var(--shadow-strong)]">
              <p className="text-lg font-bold text-primary mb-2">
                🎉 $500 CASH PRIZE
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">No Purchase Necessary.</span> Open to Nevada residents 18+. See official rules below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
              How It Works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-card rounded-lg border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-strong)] transition-all duration-300">
                <div className="text-5xl mb-4">1️⃣</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Fill Out the Form</h3>
                <p className="text-muted-foreground">
                  Submit your information and optionally include a referral of someone interested in buying or selling in Las Vegas
                </p>
              </div>

              <div className="text-center p-6 bg-card rounded-lg border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-strong)] transition-all duration-300">
                <div className="text-5xl mb-4">2️⃣</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Get Entered</h3>
                <p className="text-muted-foreground">
                  Each submission equals one entry into our sweepstakes drawing scheduled for December 20, 2026
                </p>
              </div>

              <div className="text-center p-6 bg-card rounded-lg border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-strong)] transition-all duration-300">
                <div className="text-5xl mb-4">3️⃣</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Win Cash!</h3>
                <p className="text-muted-foreground">
                  One lucky winner will receive $500 cash. Winner will be notified by phone or email
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-block bg-secondary border border-border rounded-lg p-6 max-w-2xl">
                <p className="text-sm text-muted-foreground">
                  <span className="font-bold text-foreground block mb-2">Alternative Entry Method Available</span>
                  No referral required! You can also enter by mailing a postcard to our office. See official rules for details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="referral-form" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <ReferralForm />
          </div>
        </div>
      </section>

      {/* Official Rules */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <OfficialRules />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="text-2xl font-bold">Home Finder Realty</div>
            <p className="text-background/80">
              9890 S. Maryland Parkway Suite 200A<br />
              Las Vegas, NV 89183
            </p>
            <p className="text-background/80">
              Broker: Damian Einbinder – NV License # [insert license number]
            </p>
            <div className="pt-4 border-t border-background/20">
              <p className="text-sm text-background/60">
                © 2026 Home Finder Realty. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
