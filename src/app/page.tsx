"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Facebook,
  Instagram,
  Music,
  ShoppingCart,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Award,
  Heart,
} from "lucide-react";

export default function SinglePageApp() {
  const [enrollOpen, setEnrollOpen] = useState(false);
  const [cartItems, setCartItems] = useState(3);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (enrollOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }, [enrollOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const faqData = [
    {
      question: "What should I bring to my first class?",
      answer:
        "Just bring yourself! We provide all equipment including mats, props, and water. Wear comfortable workout attire that allows you to move freely.",
    },
    {
      question: "Do I need prior Pilates experience?",
      answer:
        "Not at all! Our classes cater to all levels, from complete beginners to advanced practitioners. Bee will provide modifications and progressions as needed.",
    },
    {
      question: "What's included in the nutrition consultation?",
      answer:
        "Our nutrition consultation includes a comprehensive assessment of your current eating habits, personalized meal planning, supplement recommendations, and ongoing support for sustainable lifestyle changes.",
    },
    {
      question: "Can I book private sessions?",
      answer:
        "Yes! We offer one-on-one Pilates sessions and private nutrition consultations. These can be scheduled through our booking system or by contacting us directly.",
    },
    {
      question: "What safety protocols do you follow?",
      answer:
        "We maintain the highest safety standards with regular equipment sanitization, proper ventilation, and adherence to all health guidelines. Class sizes are kept small for personalized attention.",
    },
  ];

  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="relative z-10 px-16 py-10">
          <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
            {/* Left Navigation */}
            <div className="flex space-x-12">
              <button
                onClick={() => scrollToSection("meet-bee")}
                className="text-sm tracking-[0.3em] hover:opacity-70 transition-opacity uppercase text-white"
              >
                Meet Bee
              </button>
            </div>

            {/* Center Logo */}
            <div className="flex items-center space-x-12">
              <button
                onClick={() => scrollToSection("faqs")}
                className="text-sm tracking-[0.3em] hover:opacity-70 transition-opacity uppercase text-white"
              >
                FAQs
              </button>
              <div className="text-2xl font-light tracking-[0.3em] text-white">
                PWB
              </div>
            </div>

            {/* Right Navigation - Social Media & Cart */}
            <div className="flex items-center space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:opacity-70 transition-opacity"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:opacity-70 transition-opacity"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:opacity-70 transition-opacity"
              >
                <Music size={20} />
              </a>
              <button className="relative text-white hover:opacity-70 transition-opacity">
                <ShoppingCart size={20} />
                {cartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-30 z-10" />
          <img
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 flex flex-col justify-center items-center h-full text-white">
          <div className="text-center space-y-6">
            <h2 className="text-[120px] font-extralight tracking-[0.2em] uppercase">
              pilates
            </h2>
            <p className="text-2xl font-light tracking-[0.5em] mt-6">
              WITH BEE
            </p>
            <div className="mt-20">
              <Dialog open={enrollOpen} onOpenChange={setEnrollOpen}>
                <DialogTrigger asChild>
                  <button className="border border-white px-20 py-4 text-sm tracking-[0.3em] hover:bg-white hover:text-black transition-colors uppercase font-light">
                    Enroll Now
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl bg-white p-8 rounded-lg relative overflow-auto max-h-[90vh] backdrop-blur-sm">
                  {/* Background blur overlay */}
                  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm -z-10" />

                  <DialogClose className="absolute right-6 top-6 text-3xl opacity-70 hover:opacity-100 transition-opacity">
                    ×
                  </DialogClose>
                  <DialogTitle className="text-3xl font-semibold text-center uppercase tracking-widest mb-6">
                    Join Our Wellness Journey
                  </DialogTitle>
                  <DialogDescription asChild>
                    <div className="space-y-6">
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          // Handle form submission
                          alert(
                            "Thank you for enrolling! We'll contact you within 24 hours to schedule your assessment.",
                          );
                          setEnrollOpen(false);
                        }}
                        className="space-y-6 text-gray-900"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" name="firstName" required />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" name="lastName" required />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              type="email"
                              id="email"
                              name="email"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              type="tel"
                              id="phone"
                              name="phone"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="age">Age</Label>
                            <Input
                              type="number"
                              id="age"
                              name="age"
                              min="16"
                              max="100"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="experience">
                              Pilates Experience
                            </Label>
                            <select
                              id="experience"
                              name="experience"
                              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                              required
                            >
                              <option value="">Select your level</option>
                              <option value="beginner">
                                Complete Beginner
                              </option>
                              <option value="some">Some Experience</option>
                              <option value="intermediate">Intermediate</option>
                              <option value="advanced">Advanced</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="goals">
                            Fitness Goals & Expectations
                          </Label>
                          <Textarea
                            id="goals"
                            name="goals"
                            rows={3}
                            placeholder="What do you hope to achieve through Pilates? (e.g., improve flexibility, build core strength, recover from injury, etc.)"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="health">
                            Health Conditions & Injuries
                          </Label>
                          <Textarea
                            id="health"
                            name="health"
                            rows={3}
                            placeholder="Please list any current or past injuries, health conditions, or physical limitations we should be aware of."
                          />
                        </div>

                        <div>
                          <Label htmlFor="availability">
                            Preferred Class Times
                          </Label>
                          <select
                            id="availability"
                            name="availability"
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                            required
                          >
                            <option value="">Select preferred time</option>
                            <option value="morning">
                              Morning (6AM - 10AM)
                            </option>
                            <option value="midday">Midday (10AM - 2PM)</option>
                            <option value="afternoon">
                              Afternoon (2PM - 6PM)
                            </option>
                            <option value="evening">Evening (6PM - 8PM)</option>
                            <option value="flexible">I'm flexible</option>
                          </select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label>Class Type Interest</Label>
                            <div className="space-y-2 mt-2">
                              <label className="flex items-center">
                                <input
                                  type="checkbox"
                                  name="classType"
                                  value="group"
                                  className="mr-2"
                                />
                                Group Classes
                              </label>
                              <label className="flex items-center">
                                <input
                                  type="checkbox"
                                  name="classType"
                                  value="private"
                                  className="mr-2"
                                />
                                Private Sessions
                              </label>
                              <label className="flex items-center">
                                <input
                                  type="checkbox"
                                  name="classType"
                                  value="nutrition"
                                  className="mr-2"
                                />
                                Nutrition Consultation
                              </label>
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="referral">
                              How did you hear about us?
                            </Label>
                            <select
                              id="referral"
                              name="referral"
                              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                            >
                              <option value="">Select source</option>
                              <option value="social">Social Media</option>
                              <option value="friend">Friend/Family</option>
                              <option value="google">Google Search</option>
                              <option value="walkby">
                                Walked by the studio
                              </option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-black text-white hover:bg-pink-600 text-lg py-3"
                        >
                          Complete Pre-Assessment
                        </Button>
                      </form>
                    </div>
                  </DialogDescription>
                </DialogContent>
              </Dialog>
            </div>
            <p className="mt-32 tracking-[0.3em] text-sm uppercase font-light">
              MOVE · NOURISH · TRANSFORM
            </p>
          </div>
        </div>
      </section>

      {/* Meet Bee Section */}
      <section id="meet-bee" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-light mb-16 tracking-widest text-center uppercase">
            Meet Bee
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&q=80"
                alt="Bee - Certified Pilates Instructor"
                className="w-full h-[600px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-8">
                <Award className="text-pink-600" size={32} />
                <h3 className="text-2xl font-light uppercase tracking-wider">
                  Certified Professional
                </h3>
              </div>

              <p className="text-lg leading-relaxed text-gray-700">
                Bee is a Certified BASI Pilates Instructor and a board certified
                Nutritionist Dietitian (RND) with a passion for mindful movement
                and sustainable wellness. Her unique approach blends the
                strength and precision of Pilates with the science of nutrition
                to help you achieve lasting results from the inside out.
              </p>

              <p className="text-lg leading-relaxed text-gray-700">
                By combining movement and proper nourishment, Bee empowers you
                to feel stronger, more energized, and fully supported in your
                wellness journey. Whether you're looking to improve posture,
                build core strength, or make healthier lifestyle choices, Bee is
                here to guide you with clarity, care, and a whole lot of good
                energy.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Users className="mx-auto mb-2 text-pink-600" size={24} />
                  <div className="font-semibold">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Heart className="mx-auto mb-2 text-pink-600" size={24} />
                  <div className="font-semibold">8 Years</div>
                  <div className="text-sm text-gray-600">Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-light mb-16 tracking-widest text-center uppercase">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`transform transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                    size={20}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-24 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-light mb-16 tracking-widest text-center uppercase">
            Contact Us
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light mb-8 uppercase tracking-wider">
                  Get in Touch
                </h3>
                <p className="text-lg leading-relaxed text-gray-300 mb-8">
                  Ready to start your wellness journey? We'd love to hear from
                  you. Reach out to schedule your consultation or ask any
                  questions about our services.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="text-pink-600" size={24} />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-gray-300">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="text-pink-600" size={24} />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-gray-300">hello@pwbpilates.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="text-pink-600" size={24} />
                  <div>
                    <div className="font-medium">Studio Location</div>
                    <div className="text-gray-300">
                      123 Wellness Street
                      <br />
                      Mind & Body District
                      <br />
                      Healthy City, HC 12345
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Clock className="text-pink-600" size={24} />
                  <div>
                    <div className="font-medium">Studio Hours</div>
                    <div className="text-gray-300">
                      Mon - Fri: 6:00 AM - 8:00 PM
                      <br />
                      Saturday: 7:00 AM - 6:00 PM
                      <br />
                      Sunday: 8:00 AM - 4:00 PM
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    className="text-pink-600 hover:text-pink-400 transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="https://instagram.com"
                    className="text-pink-600 hover:text-pink-400 transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://tiktok.com"
                    className="text-pink-600 hover:text-pink-400 transition-colors"
                  >
                    <Music size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-light mb-6 uppercase tracking-wider">
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contactFirstName" className="text-gray-300">
                      First Name
                    </Label>
                    <Input
                      id="contactFirstName"
                      name="firstName"
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactLastName" className="text-gray-300">
                      Last Name
                    </Label>
                    <Input
                      id="contactLastName"
                      name="lastName"
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="contactEmail" className="text-gray-300">
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    id="contactEmail"
                    name="email"
                    className="bg-gray-700 border-gray-600 text-white"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="contactSubject" className="text-gray-300">
                    Subject
                  </Label>
                  <Input
                    id="contactSubject"
                    name="subject"
                    className="bg-gray-700 border-gray-600 text-white"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="contactMessage" className="text-gray-300">
                    Message
                  </Label>
                  <Textarea
                    id="contactMessage"
                    name="message"
                    rows={5}
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="Tell us about your wellness goals or any questions you have..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Cart/Book Button */}
      <button
        className="fixed bottom-8 right-8 bg-black text-white px-6 py-3 text-sm tracking-widest z-50 hover:bg-pink-600 transition-colors rounded-full shadow-lg"
        onClick={() => scrollToSection("contact")}
      >
        BOOK A CLASS
      </button>
    </div>
  );
}
