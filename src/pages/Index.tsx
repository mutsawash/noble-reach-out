import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Briefcase, GraduationCap, Scale, HandHeart, MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import heroImage from "@/assets/hero-wheelchair-family.jpg";
import cafeImage from "@/assets/cafe-inclusion.jpg";
import streetImage from "@/assets/wheelchair-street.jpg";
import professionalImage from "@/assets/professional-woman.jpg";
import sportsImage from "@/assets/adaptive-sports.jpg";
import communityImage from "@/assets/community-work.jpg";
import childrenImage from "@/assets/children-playing.jpg";


const Index = () => {
  // Noble Foundation Website - Updated
  const initiatives = [
    {
      icon: GraduationCap,
      title: "Career & Education Support",
      description: "Tertiary education funding, career guidance, counseling, and job placement assistance."
    },
    {
      icon: Users,
      title: "Talent Nurturing",
      description: "Identifying and developing unique talents through skills training and certification support."
    },
    {
      icon: Scale,
      title: "Legal & Financial Assistance",
      description: "Legal representation for workplace disputes and emergency/pension fund support."
    },
    {
      icon: HandHeart,
      title: "Community Building",
      description: "Regular meet-ups for financial literacy, emotional regulation, and networking opportunities."
    }
  ];

  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen w-full flex bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <SidebarTrigger />
                  <img src="/lovable-uploads/b417384e-6164-4d06-abc7-0cd4839788bf.png" alt="Noble Foundation Logo" className="h-8 w-8 object-contain" />
                  <span className="text-2xl font-bold text-foreground">Noble Foundation</span>
                </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">Our Work</a>
              <a href="#membership" className="text-muted-foreground hover:text-foreground transition-colors">Membership</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </nav>
            <Button 
              className="bg-primary hover:bg-primary/90"
              onClick={() => window.open('https://wa.me/263775095949?text=Hi! I would like to get involved with Noble Foundation and learn more about how I can contribute to your mission of empowering people with disabilities.', '_blank')}
            >
              Get Involved
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                Empowering People with Disabilities
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Noble Foundation
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
                Ensuring people living with disabilities are included in the corporate world, 
                including government institutions and agencies. We nurture and empower individuals 
                with unique talents and skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => window.open('tel:+263775095949', '_self')}
                >
                  <img src="/lovable-uploads/b417384e-6164-4d06-abc7-0cd4839788bf.png" alt="Noble Foundation Logo" className="mr-2 h-5 w-5 object-contain" />
                  Support Our Mission
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Smiling woman in wheelchair with happy child, representing family support and empowerment"
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">About Noble Foundation</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Based in Harare Province with our head office at 57 Fife Avenue, Noble Foundation 
              is dedicated to creating an inclusive corporate world where people with disabilities 
              can thrive and contribute their unique talents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Our Vision</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A world where people with disabilities are fully integrated into all aspects of society, 
                particularly in the corporate sector, where their unique talents and perspectives are 
                valued and celebrated as drivers of innovation and success.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                To ensure people living with disabilities are included in the corporate world, 
                creating opportunities for meaningful employment and career advancement.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Our Values</h3>
              <ul className="text-muted-foreground mb-6 leading-relaxed space-y-2">
                <li>• <strong>Inclusion:</strong> Everyone deserves equal opportunities regardless of ability</li>
                <li>• <strong>Empowerment:</strong> Building confidence and skills for independence</li>
                <li>• <strong>Dignity:</strong> Respecting the worth and potential of every individual</li>
                <li>• <strong>Innovation:</strong> Using technology and creative solutions to break barriers</li>
                <li>• <strong>Community:</strong> Fostering connections and support networks</li>
              </ul>
              <div className="flex items-center text-muted-foreground mb-6">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                <span>57 Fife Avenue, Harare</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={professionalImage} 
                  alt="Professional woman in wheelchair in modern office environment"
                  className="rounded-lg object-cover h-32 w-full"
                />
                <img 
                  src={cafeImage} 
                  alt="Inclusive workplace showing people with disabilities working together"
                  className="rounded-lg object-cover h-32 w-full"
                />
              </div>
            </div>
            <Card className="p-6 shadow-lg border-primary/10">
              <CardHeader>
                <CardTitle className="text-primary">Our Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Primary Focus</span>
                    <Badge variant="secondary">Harare Province</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Target Audience</span>
                    <Badge variant="secondary">18+ Years</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Organization Type</span>
                    <Badge variant="secondary">Non-Profit</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="work" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Key Initiatives</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive support through various programs designed to empower 
              individuals with disabilities and create lasting positive change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <initiative.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{initiative.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    {initiative.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <img 
                  src={streetImage} 
                  alt="Person in wheelchair navigating urban environment independently"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="relative">
                <CardTitle className="flex items-center text-primary">
                  <Briefcase className="mr-2 h-5 w-5" />
                  Fundraising & Awareness
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground leading-relaxed">
                  We actively fundraise through various channels and plan to produce a reality show 
                  that showcases the daily lives of people with disabilities, raising awareness and 
                  building understanding in our communities.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <img 
                  src={sportsImage} 
                  alt="People with disabilities playing adaptive sports including football"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="relative">
                <CardTitle className="flex items-center text-primary">
                  <Users className="mr-2 h-5 w-5" />
                  Community Engagement
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground leading-relaxed">
                  Our community meet-ups feature business seminars, networking opportunities, 
                  and platforms to showcase passion projects like art, dance, and music. 
                  We also provide education on coping mechanisms and sign language.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Additional Images Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Our Community in Action</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={communityImage} 
                  alt="Community member contributing through volunteer work"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Community Impact</h4>
                  <p className="text-sm opacity-90">Making a difference together</p>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={childrenImage} 
                  alt="Children playing joyfully in the rain, representing hope and resilience"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Future Generation</h4>
                  <p className="text-sm opacity-90">Building hope for tomorrow</p>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={sportsImage} 
                  alt="Adaptive sports activities promoting inclusion and fitness"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Sports & Recreation</h4>
                  <p className="text-sm opacity-90">Breaking barriers through sports and technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Become a Member</h2>
              <p className="text-lg text-muted-foreground">
                Join our community of changemakers and help us create a more inclusive world.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Membership Benefits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Access to career and education support</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Legal and financial assistance</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Community networking opportunities</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Skills development programs</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">How to Join</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Membership is <strong className="text-primary">free</strong> and open to all interested individuals aged 18 and above, 
                    as well as institutions that align with our objectives.
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-6">
                    <p className="text-sm font-semibold text-red-800">
                      <strong>⚠️ IMPORTANT REQUIREMENT:</strong> Membership requires a certificate of disability from a competent doctor.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-primary/10 text-primary">1</Badge>
                      <span className="text-muted-foreground">Obtain application form from our offices</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-primary/10 text-primary">2</Badge>
                      <span className="text-muted-foreground">Provide certificate of disability from competent doctor</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-primary/10 text-primary">3</Badge>
                      <span className="text-muted-foreground">Submit to Executive Committee</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => window.open('https://wa.me/263775095949?text=Hi! I would like to apply for membership with Noble Foundation. Please provide me with the application form and membership details.', '_blank')}
                  >
                    Apply for Membership
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Get Involved</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Support our mission through grants, donations, and participation in our income-generating projects. 
            Together, we can create meaningful change.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <img src="/lovable-uploads/b417384e-6164-4d06-abc7-0cd4839788bf.png" alt="Noble Foundation Logo" className="h-12 w-12 mx-auto mb-4 object-contain" />
              <h3 className="text-xl font-semibold mb-2">Donate</h3>
              <p className="text-muted-foreground mb-4">Make a direct impact with your generous contribution</p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://wa.me/263775095949?text=Hi! I would like to make a donation to Noble Foundation to support your mission of empowering people with disabilities. Please let me know how I can contribute.', '_blank')}
              >
                Donate Now
              </Button>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Partner</h3>
              <p className="text-muted-foreground mb-4">Collaborate with us on income-generating projects</p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://wa.me/263775095949?text=Hi! I am interested in partnering with Noble Foundation on income-generating projects. Please share more information about partnership opportunities.', '_blank')}
              >
                <ExternalLink className="mr-1 h-3 w-3" />
                Partner
              </Button>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Volunteer</h3>
              <p className="text-muted-foreground mb-4">Share your skills and time with our community</p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://wa.me/263775095949?text=Hi! I would like to volunteer with Noble Foundation and share my skills and time with your community. Please let me know about volunteer opportunities.', '_blank')}
              >
                <ExternalLink className="mr-1 h-3 w-3" />
                Volunteer
              </Button>
            </Card>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/lovable-uploads/b417384e-6164-4d06-abc7-0cd4839788bf.png" alt="Noble Foundation Logo" className="h-6 w-6 object-contain" />
                <span className="text-xl font-bold text-foreground">Noble Foundation</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Empowering people with disabilities through inclusion, 
                support, and opportunity creation in the corporate world.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Contact Info</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>57 Fife Avenue, Harare</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>noblefoundation57@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:+263775095949" className="hover:text-primary transition-colors">
                    +263 77 509 5949
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">About Us</a>
                <a href="#work" className="block text-muted-foreground hover:text-primary transition-colors">Our Work</a>
                <a href="#membership" className="block text-muted-foreground hover:text-primary transition-colors">Membership</a>
                <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Noble Foundation. All rights reserved. Empowering lives, creating opportunities.</p>
          </div>
        </div>
      </footer>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
