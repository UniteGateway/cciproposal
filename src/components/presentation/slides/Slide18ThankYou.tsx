import { Globe, Phone, Mail, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import uniteLogo from "@/assets/unite-logo.png";

const Slide18ThankYou = () => {
  return (
    <div className="min-h-[calc(100vh-7.5rem)] relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/85 via-foreground/70 to-solar-blue/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 py-16">
        <div className="space-y-10 max-w-4xl">
          {/* Logo */}
          <div className="inline-flex items-center bg-card/20 backdrop-blur-sm border border-primary-foreground/20 rounded-xl px-6 py-3">
            <img src={uniteLogo} alt="Unite Solar" className="h-10 md:h-14 w-auto" />
          </div>

          {/* Thank You */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground">
              Thank You
            </h1>
            <p className="text-xl text-primary-foreground/80">
              For considering Unite Solar as your renewable energy partner
            </p>
          </div>

          {/* Contact Card */}
          <Card className="bg-card/95 backdrop-blur-sm border-primary-foreground/20 max-w-lg mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-secondary rounded-lg">
                  <div className="w-10 h-10 rounded-full solar-gradient flex items-center justify-center">
                    <User className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">Dr Ravi Varma</div>
                    <div className="text-sm text-muted-foreground">Director, Unite Solar</div>
                  </div>
                </div>

                <a 
                  href="tel:9667660773"
                  className="flex items-center gap-4 p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-solar-blue flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">9667660773</div>
                    <div className="text-sm text-muted-foreground">Direct Line</div>
                  </div>
                </a>

                <a 
                  href="mailto:info@unitesolar.in"
                  className="flex items-center gap-4 p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-solar-orange flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">info@unitesolar.in</div>
                    <div className="text-sm text-muted-foreground">Email</div>
                  </div>
                </a>

                <a 
                  href="https://www.unitesolar.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full solar-gradient flex items-center justify-center">
                    <Globe className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">www.unitesolar.in</div>
                    <div className="text-sm text-muted-foreground">Website</div>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Tagline */}
          <p className="text-lg text-primary-foreground/70 italic">
            "Powering India's Sustainable Future"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide18ThankYou;
