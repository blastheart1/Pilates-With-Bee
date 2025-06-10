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
import { Calendar } from "@/components/ui/calendar";
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
  Star,
  Calendar as CalendarIcon,
  CreditCard,
  Package,
  BookOpen,
  TrendingUp,
  Gift,
  Play,
  Image as ImageIcon,
  MessageSquare,
  Search,
  Filter,
  ArrowRight,
  CheckCircle,
  Timer,
  Target,
  UserPlus,
  CalendarDays,
  X,
  Plus,
  Minus,
  Building,
  Shield,
  GraduationCap,
  Certificate,
  MapPinIcon,
} from "lucide-react";

export default function SinglePageApp() {
  const [enrollOpen, setEnrollOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Pilates Mat",
      price: 89,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1518309312833-5fe1de3ba001?auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      name: "Resistance Bands Set",
      price: 45,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80",
    },
  ]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedMembership, setSelectedMembership] = useState("");
  const [newsletter, setNewsletter] = useState("");
  const [showFloatingButtons, setShowFloatingButtons] = useState(false);

  // Check if hero buttons are out of view and show floating buttons
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "meet-bee", "testimonials", "faqs", "contact"];
      const scrollPosition = window.scrollY + 100;

      // Show floating buttons when scrolled past hero section (1000px is approximately where hero ends)
      setShowFloatingButtons(window.scrollY > 800);

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when modal is open
  React.useEffect(() => {
    const modalOpen = enrollOpen || bookingOpen || cartOpen;
    if (modalOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }, [enrollOpen, bookingOpen, cartOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const updateCartQuantity = (id: number, change: number) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const membershipPlans = [
    {
      name: "Basic",
      price: "$99",
      period: "/month",
      classes: "4 Classes",
      features: [
        "Group Classes",
        "Basic Nutrition Guide",
        "Equipment Included",
        "Community Access",
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "$179",
      period: "/month",
      classes: "8 Classes + Nutrition",
      features: [
        "Group Classes",
        "1 Private Session",
        "Nutrition Consultation",
        "Meal Planning",
        "Priority Booking",
      ],
      popular: true,
    },
    {
      name: "Unlimited",
      price: "$249",
      period: "/month",
      classes: "Unlimited",
      features: [
        "Unlimited Group Classes",
        "2 Private Sessions",
        "Monthly Nutrition Check-in",
        "Personalized Meal Plans",
        "VIP Support",
      ],
      popular: false,
    },
  ];

  const products = [
    {
      id: 3,
      name: "Premium Pilates Mat",
      price: 89,
      image:
        "https://images.unsplash.com/photo-1518309312833-5fe1de3ba001?auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      name: "Resistance Bands Set",
      price: 45,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80",
    },
    {
      id: 5,
      name: "Pilates Ball",
      price: 35,
      image:
        "https://images.unsplash.com/photo-1566133485067-2e65b0c42615?auto=format&fit=crop&q=80",
    },
    {
      id: 6,
      name: "Foam Roller",
      price: 55,
      image:
        "https://images.unsplash.com/photo-1544966503-7cc36a8d5c82?auto=format&fit=crop&q=80",
    },
  ];

  const addToCart = (product: (typeof products)[0]) => {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.id === product.id);
      if (existingItem) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...items, { ...product, quantity: 1 }];
      }
    });
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Bee transformed my approach to fitness. Her combination of Pilates and nutrition guidance helped me achieve results I never thought possible.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80",
      achievement: "Lost 25lbs & gained core strength",
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "As a former athlete dealing with back issues, Bee's expertise in both movement and nutrition has been life-changing.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      achievement: "Eliminated chronic back pain",
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "The holistic approach here is unmatched. I'm stronger, more flexible, and have a completely new relationship with food.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      achievement: "Improved posture & energy levels",
    },
  ];

  const instagramPosts = [
    {
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80",
      caption:
        "Morning flow to start the day right ✨ #pilates #mindfulmovement",
      likes: 342,
      comments: 28,
    },
    {
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80",
      caption:
        "Core strength isn't just about abs - it's about stability, posture, and confidence 💪",
      likes: 567,
      comments: 45,
    },
    {
      image:
        "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80",
      caption:
        "Nutrition tip: Start your day with intention and nourishment 🥗 #wellness",
      likes: 289,
      comments: 19,
    },
    {
      image:
        "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80",
      caption:
        "Behind the scenes of our group class prep ✨ #pilatesinstructor",
      likes: 412,
      comments: 33,
    },
    {
      image:
        "https://images.unsplash.com/photo-1506629905228-b50909eae2e1?auto=format&fit=crop&q=80",
      caption:
        "Sunday self-care session 🧘‍♀️ How are you nourishing your body today?",
      likes: 634,
      comments: 52,
    },
    {
      image:
        "https://images.unsplash.com/photo-1544966503-7cc36a8d5c82?auto=format&fit=crop&q=80",
      caption: "Recovery is just as important as the workout 💆‍♀️ #selfcare",
      likes: 378,
      comments: 24,
    },
  ];

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
    {
      question: "Do you offer online classes?",
      answer:
        "Yes! We provide virtual sessions for those who prefer to practice from home. All you need is a mat and some space to move.",
    },
  ];

  const blogPosts = [
    {
      title: "5 Essential Pilates Exercises for Beginners",
      excerpt:
        "Start your Pilates journey with these foundational movements that build core strength and improve posture.",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80",
      date: "March 15, 2024",
      readTime: "5 min read",
    },
    {
      title: "Nutrition Myths Debunked: What Really Works",
      excerpt:
        "Separating fact from fiction in the world of nutrition and wellness.",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80",
      date: "March 12, 2024",
      readTime: "7 min read",
    },
    {
      title: "Mind-Body Connection: The Science Behind Pilates",
      excerpt:
        "Understanding how Pilates creates lasting changes in both physical and mental well-being.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80",
      date: "March 10, 2024",
      readTime: "6 min read",
    },
  ];

  const availableSlots = [
    {
      time: "9:00 AM",
      instructor: "Bee",
      location: "Studio A",
      available: true,
    },
    {
      time: "11:00 AM",
      instructor: "Sarah",
      location: "Studio B",
      available: true,
    },
    {
      time: "1:00 PM",
      instructor: "Bee",
      location: "Studio A",
      available: false,
    },
    {
      time: "3:00 PM",
      instructor: "Mike",
      location: "Studio C",
      available: true,
    },
    {
      time: "5:00 PM",
      instructor: "Bee",
      location: "Studio A",
      available: true,
    },
    {
      time: "7:00 PM",
      instructor: "Sarah",
      location: "Studio B",
      available: true,
    },
  ];

  const studioLocations = [
    {
      name: "Downtown Studio",
      address:
        "123 Wellness Street, Mind & Body District, Healthy City, HC 12345",
      phone: "+1 (555) 123-4567",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80",
      amenities: [
        "Private Showers",
        "Changing Rooms",
        "Equipment Storage",
        "Reception Area",
      ],
    },
    {
      name: "Uptown Studio",
      address: "456 Serenity Ave, Wellness Quarter, Healthy City, HC 12346",
      phone: "+1 (555) 123-4568",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80",
      amenities: [
        "Outdoor Terrace",
        "Juice Bar",
        "Meditation Room",
        "Parking Available",
      ],
    },
  ];

  const certifications = [
    {
      name: "BASI Pilates",
      logo: "https://images.unsplash.com/photo-1565264894740-ca0c3a01e2a3?auto=format&fit=crop&q=80",
    },
    {
      name: "Registered Nutritionist Dietitian",
      logo: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80",
    },
    {
      name: "Continuing Education Alliance",
      logo: "https://images.unsplash.com/photo-1554475901-3905ba725ae8?auto=format&fit=crop&q=80",
    },
    {
      name: "Yoga Alliance",
      logo: "https://images.unsplash.com/photo-1544966503-7cc36a8d5c82?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Restructured Navigation - 3 Sections */}
      <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
        <div className="relative z-10 px-16 py-8">
          <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
            {/* Left Section */}
            <div className="flex items-center space-x-16">
              <button
                onClick={() => scrollToSection("meet-bee")}
                className={`text-base font-medium tracking-[0.15em] hover:opacity-70 transition-all uppercase text-white relative ${
                  activeSection === "meet-bee"
                    ? "after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-pink-600"
                    : ""
                }`}
              >
                Meet Bee
              </button>

              <button
                onClick={() => scrollToSection("testimonials")}
                className={`text-base font-medium tracking-[0.15em] hover:opacity-70 transition-all uppercase text-white relative ${
                  activeSection === "testimonials"
                    ? "after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-pink-600"
                    : ""
                }`}
              >
                Testimonials
              </button>
            </div>

            {/* Center Section - PWB */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <button
                onClick={() => scrollToSection("home")}
                className="text-4xl font-light tracking-[0.3em] text-white hover:text-pink-400 transition-colors"
              >
                PWB
              </button>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("faqs")}
                className={`text-lg font-semibold tracking-[0.2em] hover:opacity-70 transition-all uppercase text-white relative ${
                  activeSection === "faqs"
                    ? "after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-pink-600"
                    : ""
                }`}
              >
                FAQs
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className={`text-lg font-semibold tracking-[0.2em] hover:opacity-70 transition-all uppercase text-white relative ${
                  activeSection === "contact"
                    ? "after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-pink-600"
                    : ""
                }`}
              >
                Contact
              </button>

              <div className="w-px h-6 bg-white/30 mx-4"></div>

              {/* Social Media Icons */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com/the_hapi_bee/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition-colors"
              >
                <Music size={18} />
              </a>
              <button
                onClick={() => setCartOpen(true)}
                className="relative text-white hover:text-pink-400 transition-colors"
              >
                <ShoppingCart size={18} />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Action Buttons - Show when hero buttons are out of view */}
      <div
        className={`fixed bottom-8 right-8 z-50 flex flex-col space-y-4 transition-all duration-500 ${
          showFloatingButtons
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setEnrollOpen(true)}
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2 transition-colors"
        >
          <UserPlus size={16} />
          <span className="font-medium">Enroll Now</span>
        </button>
        <button
          onClick={() => setBookingOpen(true)}
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2 transition-colors"
        >
          <CalendarDays size={16} />
          <span className="font-medium">Book Class</span>
        </button>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-40 z-10" />
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
            <div className="mt-20 flex space-x-6">
              <button
                onClick={() => setEnrollOpen(true)}
                className="border border-white px-20 py-4 text-sm tracking-[0.3em] hover:bg-white hover:text-black transition-colors uppercase font-light"
              >
                Enroll Now
              </button>
              <button
                onClick={() => setBookingOpen(true)}
                className="bg-pink-600 hover:bg-pink-700 text-white px-20 py-4 text-sm tracking-[0.3em] transition-colors uppercase font-light"
              >
                Book Class
              </button>
            </div>
            <p className="mt-32 tracking-[0.3em] text-sm uppercase font-light">
              MOVE · NOURISH · TRANSFORM
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Enroll Now Modal for New Users */}
      <Dialog open={enrollOpen} onOpenChange={setEnrollOpen}>
        <DialogContent className="max-w-4xl bg-white rounded-xl relative max-h-[95vh] overflow-hidden">
          <DialogClose className="absolute right-6 top-6 text-2xl opacity-70 hover:opacity-100 transition-opacity z-50 bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">
            <X size={16} />
          </DialogClose>

          <div className="overflow-auto max-h-[90vh] p-8">
            <DialogTitle className="text-4xl font-light text-center uppercase tracking-widest mb-4 text-gray-800">
              Welcome to PWB
            </DialogTitle>
            <DialogDescription asChild>
              <div className="text-center mb-8">
                <p className="text-lg text-gray-600">
                  Begin your wellness journey with our comprehensive
                  pre-assessment
                </p>
              </div>
            </DialogDescription>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Thank you for enrolling! We'll contact you within 24 hours to schedule your complimentary consultation.",
                );
                setEnrollOpen(false);
              }}
              className="space-y-8 text-gray-900"
            >
              {/* Personal Information */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <Users className="mr-2 text-pink-600" size={20} />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="font-medium">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="font-medium">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-medium">
                      Email Address *
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Goals & Expectations */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <Target className="mr-2 text-pink-600" size={20} />
                  Goals & Expectations
                </h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="goals" className="font-medium">
                      Primary Fitness Goals *
                    </Label>
                    <Textarea
                      id="goals"
                      name="goals"
                      rows={3}
                      placeholder="What do you hope to achieve? (e.g., improve flexibility, build core strength, reduce stress, lose weight, recover from injury, etc.)"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              <div className="text-center pt-4">
                <Button
                  type="submit"
                  className="w-full md:w-auto bg-pink-600 hover:bg-pink-700 text-white text-lg py-4 px-12 rounded-lg font-medium"
                >
                  Complete Pre-Assessment & Schedule Consultation
                </Button>
                <p className="text-sm text-gray-600 mt-3">
                  We'll review your information and contact you within 24 hours
                  to schedule your complimentary consultation
                </p>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>

      {/* Enhanced Book Now Modal for Existing Users */}
      <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
        <DialogContent className="max-w-5xl bg-white rounded-xl relative max-h-[95vh] overflow-hidden">
          <DialogClose className="absolute right-6 top-6 text-2xl opacity-70 hover:opacity-100 transition-opacity z-50 bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">
            <X size={16} />
          </DialogClose>

          <div className="overflow-auto max-h-[90vh] p-8">
            <DialogTitle className="text-4xl font-light text-center uppercase tracking-widest mb-4 text-gray-800">
              Book Your Class
            </DialogTitle>
            <DialogDescription asChild>
              <div className="text-center mb-8">
                <p className="text-lg text-gray-600">
                  Select your preferred date, time, and instructor
                </p>
              </div>
            </DialogDescription>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Calendar Section */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <CalendarIcon className="mr-2 text-pink-600" size={20} />
                  Select Date
                </h3>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border w-full"
                  disabled={(date) => date < new Date()}
                />
              </div>

              {/* Time Slots & Details */}
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-4 flex items-center">
                    <Clock className="mr-2 text-pink-600" size={20} />
                    Available Time Slots
                  </h3>
                  {selectedDate ? (
                    <div className="space-y-3">
                      {availableSlots.map((slot, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            slot.available
                              ? "border-gray-200 hover:border-pink-600 hover:bg-pink-50"
                              : "border-gray-100 bg-gray-100 cursor-not-allowed opacity-50"
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-medium text-lg">
                                {slot.time}
                              </div>
                              <div className="text-sm text-gray-600">
                                with {slot.instructor}
                              </div>
                              <div className="text-sm text-gray-500">
                                {slot.location}
                              </div>
                            </div>
                            <div className="text-right">
                              {slot.available ? (
                                <span className="text-green-600 font-medium">
                                  Available
                                </span>
                              ) : (
                                <span className="text-red-500 font-medium">
                                  Booked
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-8">
                      Please select a date to view available time slots
                    </p>
                  )}
                </div>

                <Button
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white text-lg py-4 rounded-lg font-medium"
                  disabled={!selectedDate}
                  onClick={() => {
                    alert("Class booked successfully!");
                    setBookingOpen(false);
                  }}
                >
                  Confirm Booking
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Working Cart Modal */}
      <Dialog open={cartOpen} onOpenChange={setCartOpen}>
        <DialogContent className="max-w-2xl bg-white rounded-xl relative max-h-[95vh] overflow-hidden">
          <DialogClose className="absolute right-6 top-6 text-2xl opacity-70 hover:opacity-100 transition-opacity z-50 bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">
            <X size={16} />
          </DialogClose>

          <div className="overflow-auto max-h-[90vh] p-8">
            <DialogTitle className="text-3xl font-light text-center uppercase tracking-widest mb-6 text-gray-800">
              Shopping Cart
            </DialogTitle>

            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart
                  className="mx-auto mb-4 text-gray-400"
                  size={48}
                />
                <p className="text-gray-600">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 border-b border-gray-200 pb-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateCartQuantity(item.id, -1)}
                        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateCartQuantity(item.id, 1)}
                        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center text-xl font-medium">
                    <span>Total:</span>
                    <span>${cartTotal}</span>
                  </div>
                </div>

                <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white text-lg py-4 rounded-lg font-medium">
                  Proceed to Checkout
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Membership Plans Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 tracking-widest uppercase">
              Membership Plans
            </h2>
            <p className="text-lg text-gray-600">
              Choose the perfect plan for your wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-lg shadow-lg p-8 ${plan.popular ? "ring-2 ring-pink-600 transform scale-105" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-pink-600 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-light uppercase tracking-wider mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-light mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.classes}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="text-pink-600 mr-3" size={16} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.popular ? "bg-pink-600 hover:bg-pink-700" : "bg-black hover:bg-gray-800"} text-white`}
                  onClick={() => {
                    setSelectedMembership(plan.name);
                    setEnrollOpen(true);
                  }}
                >
                  Choose Plan
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Bee Section */}
      <section id="meet-bee" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-light mb-16 tracking-widest text-center uppercase">
            Meet Bee
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
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
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="mx-auto mb-2 text-pink-600" size={24} />
                  <div className="font-semibold">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Heart className="mx-auto mb-2 text-pink-600" size={24} />
                  <div className="font-semibold">8 Years</div>
                  <div className="text-sm text-gray-600">Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Instagram Feed Section */}
          <div className="border-t border-gray-200 pt-16">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Instagram className="text-pink-600" size={28} />
                <h3 className="text-3xl font-light uppercase tracking-wider">
                  Follow the Journey
                </h3>
              </div>
              <p className="text-gray-600">
                Get daily inspiration and wellness tips on Instagram
              </p>
              <a
                href="https://instagram.com/the_hapi_bee/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-pink-600 hover:text-pink-700 font-medium"
              >
                @the_hapi_bee
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {instagramPosts.map((post, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer aspect-square"
                >
                  <img
                    src={post.image}
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all rounded-lg flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-center">
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="flex items-center">
                          <Heart size={16} className="mr-1" />
                          {post.likes}
                        </span>
                        <span className="flex items-center">
                          <MessageSquare size={16} className="mr-1" />
                          {post.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Studio Locations Section */}
      <section id="locations" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 tracking-widest uppercase">
              Studio Locations
            </h2>
            <p className="text-lg text-gray-600">
              Find the studio nearest to you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studioLocations.map((location, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-4 flex items-center">
                    <Building className="mr-2 text-pink-600" size={20} />
                    {location.name}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <MapPinIcon className="text-gray-500 mt-1" size={16} />
                      <p className="text-gray-600 text-sm">
                        {location.address}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="text-gray-500" size={16} />
                      <p className="text-gray-600 text-sm">{location.phone}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Amenities:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {location.amenities.map((amenity, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle
                            className="text-pink-600 mr-1"
                            size={12}
                          />
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-pink-600 hover:bg-pink-700 text-white">
                    View on Map
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Affiliations Section */}
      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 tracking-widest uppercase">
              Certifications & Affiliations
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by leading wellness organizations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 rounded-lg p-6 mb-4 group-hover:bg-gray-100 transition-colors">
                  <img
                    src={cert.logo}
                    alt={cert.name}
                    className="w-full h-20 object-contain mx-auto"
                  />
                </div>
                <h3 className="font-medium text-sm text-gray-800">
                  {cert.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-green-50 text-green-800 px-4 py-2 rounded-full">
              <Shield className="text-green-600" size={16} />
              <span className="text-sm font-medium">
                All instructors are certified and insured
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 tracking-widest uppercase">
              Wellness Shop
            </h2>
            <p className="text-lg text-gray-600">
              Premium equipment to support your practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                    <ShoppingCart
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      size={24}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-medium mb-2">{product.name}</h3>
                  <p className="text-2xl font-light text-pink-600 mb-4">
                    ${product.price}
                  </p>
                  <Button
                    className="w-full bg-black hover:bg-pink-600 text-white"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 tracking-widest uppercase">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Real transformations from our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-8 text-center"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-current"
                      size={16}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <h4 className="font-medium">{testimonial.name}</h4>
                <p className="text-sm text-pink-600 font-medium">
                  {testimonial.achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 tracking-widest uppercase">
              Wellness Insights
            </h2>
            <p className="text-lg text-gray-600">
              Expert tips and guidance for your wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <CalendarIcon size={14} className="mr-2" />
                    {post.date}
                    <span className="mx-2">•</span>
                    <Timer size={14} className="mr-2" />
                    {post.readTime}
                  </div>
                  <h3 className="text-xl font-medium mb-3 group-hover:text-pink-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-pink-600 font-medium group-hover:text-pink-700">
                    Read More <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-light mb-4 uppercase tracking-wider">
            Stay Connected
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Get weekly wellness tips, nutrition insights, and exclusive offers
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={newsletter}
              onChange={(e) => setNewsletter(e.target.value)}
              className="flex-1 bg-white text-gray-900"
              required
            />
            <Button
              type="submit"
              className="bg-black hover:bg-gray-800 text-white px-8"
            >
              Subscribe
            </Button>
          </form>
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
                    href="https://instagram.com/the_hapi_bee/"
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
    </div>
  );
}
