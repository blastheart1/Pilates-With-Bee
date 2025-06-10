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
import { Calendar } from "@/components/ui/calendar";

export default function SinglePageApp() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [bookStudioOpen, setBookStudioOpen] = useState(false);
  const [meetBeeOpen, setMeetBeeOpen] = useState(false);
  const [loginType, setLoginType] = useState<"member" | "instructor" | "admin">(
    "member",
  );
  const [selectedSection, setSelectedSection] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [enrollOpen, setEnrollOpen] = useState(false);

  React.useEffect(() => {
    const modalOpen = loginOpen || bookStudioOpen || meetBeeOpen || enrollOpen;
    if (modalOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px"; // prevent layout shift due to scrollbar
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }, [loginOpen, bookStudioOpen, meetBeeOpen, enrollOpen]);
  const [navSolid, setNavSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setNavSolid(true);
      } else {
        setNavSolid(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="relative z-10 px-16 py-10">
          <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
            <div className="flex space-x-12">
              <button
                onClick={() => setSelectedSection("about")}
                className="text-sm tracking-[0.3em] hover:opacity-70 transition-opacity uppercase text-white"
              >
                About
              </button>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-sm tracking-[0.3em] hover:opacity-70 transition-opacity uppercase text-white">
                    Meet Bee
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl bg-white p-10 rounded-lg relative overflow-auto max-h-[90vh]">
                  <DialogClose className="absolute right-6 top-6 text-3xl opacity-70 hover:opacity-100 transition-opacity">
                    ×
                  </DialogClose>
                  <DialogTitle className="text-4xl font-semibold text-center uppercase tracking-widest mb-6">
                    Meet Bee
                  </DialogTitle>
                  <DialogDescription asChild>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-900 font-light">
                      <div>
                        Bee is a Certified BASI Pilates Instructor and a board
                        certified Nutritionist Dietitian (RND) with a passion
                        for mindful movement and sustainable wellness. Her
                        unique approach blends the strength and precision of
                        Pilates with the science of nutrition to help you
                        achieve lasting results from the inside out.
                      </div>
                      <div>
                        By combining movement and proper nourishment, Bee
                        empowers you to feel stronger, more energized, and fully
                        supported in your wellness journey. Whether you're
                        looking to improve posture, build core strength, or make
                        healthier lifestyle choices, Bee is here to guide you
                        with clarity, care, and a whole lot of good energy.
                      </div>
                    </div>
                  </DialogDescription>
                </DialogContent>
              </Dialog>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <h1 className="text-2xl font-light tracking-[0.3em] text-white">
                BEE'S PILATES
              </h1>
            </div>
            <div className="flex space-x-12">
              <button
                onClick={() => setSelectedSection("virtual")}
                className="text-sm tracking-[0.3em] hover:opacity-70 transition-opacity uppercase text-white"
              >
                Virtual Studio
              </button>
              <button
                onClick={() => setSelectedSection("live")}
                className="text-sm tracking-[0.3em] hover:opacity-70 transition-opacity uppercase text-white"
              >
                Live Classes
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
              <Dialog>
                <DialogTrigger asChild>
                  <button className="border border-white px-20 py-4 text-sm tracking-[0.3em] hover:bg-white hover:text-black transition-colors uppercase font-light">
                    Enroll Now
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-lg bg-white p-8 rounded-lg relative overflow-auto max-h-[90vh]">
                  <DialogClose className="absolute right-6 top-6 text-3xl opacity-70 hover:opacity-100 transition-opacity">
                    ×
                  </DialogClose>
                  <DialogTitle className="text-3xl font-semibold text-center uppercase tracking-widest mb-6">
                    Enroll Now
                  </DialogTitle>
                  <DialogDescription asChild>
                    <div className="space-y-6">
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          // Handle form submission
                        }}
                        className="space-y-6 text-gray-900"
                      >
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="fullName">Full Name</Label>
                            <Input id="fullName" name="fullName" required />
                          </div>
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
                            <Input type="tel" id="phone" name="phone" />
                          </div>
                          <div>
                            <Label htmlFor="goals">
                              What are your fitness goals?
                            </Label>
                            <textarea
                              id="goals"
                              name="goals"
                              rows={3}
                              className="w-full min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                          </div>
                          <div>
                            <Label htmlFor="health">
                              Any health conditions or injuries we should know
                              about?
                            </Label>
                            <textarea
                              id="health"
                              name="health"
                              rows={3}
                              className="w-full min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                          </div>
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-black text-white hover:bg-pink-600"
                        >
                          Submit
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

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-light mb-12 tracking-widest text-center">
            ABOUT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80"
                alt="About"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg leading-relaxed mb-8">
                Welcome to Bee's Pilates Studio, where we blend traditional
                Pilates principles with modern wellness practices. Our approach
                focuses on building strength, flexibility, and mindful movement.
              </p>
              <button
                onClick={() => setLoginOpen(true)}
                className="border-2 border-black px-8 py-2 text-sm tracking-widest hover:bg-black hover:text-white transition-colors self-start"
              >
                JOIN NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Studio Section */}
      <section id="virtual" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-light mb-12 tracking-widest text-center">
            VIRTUAL STUDIO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-light mb-4">LIVE STREAM</h3>
              <p className="mb-6">
                Join our live virtual classes from anywhere in the world.
              </p>
              <button className="border-2 border-black px-6 py-2 text-sm tracking-widest hover:bg-black hover:text-white transition-colors">
                BOOK NOW
              </button>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-light mb-4">ON DEMAND</h3>
              <p className="mb-6">
                Access our library of recorded classes anytime.
              </p>
              <button className="border-2 border-black px-6 py-2 text-sm tracking-widest hover:bg-black hover:text-white transition-colors">
                START NOW
              </button>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-light mb-4">PRIVATE</h3>
              <p className="mb-6">
                One-on-one virtual sessions tailored to your needs.
              </p>
              <button className="border-2 border-black px-6 py-2 text-sm tracking-widest hover:bg-black hover:text-white transition-colors">
                ENQUIRE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Classes Section */}
      <section id="live" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-light mb-12 tracking-widest text-center">
            LIVE CLASSES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center">
              <p className="text-lg leading-relaxed mb-8">
                Experience the energy of in-person classes at our studio. Join
                our community and transform your practice with expert guidance.
              </p>
              <button
                onClick={() => setBookStudioOpen(true)}
                className="border-2 border-black px-8 py-2 text-sm tracking-widest hover:bg-black hover:text-white transition-colors self-start"
              >
                VIEW SCHEDULE
              </button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80"
                alt="Live Classes"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Floating Book Button */}
      <button
        className="fixed bottom-8 right-8 bg-black text-white px-6 py-3 text-sm tracking-widest z-50 hover:bg-pink-600 transition-colors"
        onClick={() => {
          if (isLoggedIn) {
            setBookStudioOpen(true);
          } else {
            setLoginOpen(true);
          }
        }}
      >
        BOOK A CLASS
      </button>

      {/* Login Modal */}
      <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
        <DialogContent className="max-w-md bg-white p-8">
          <h3 className="text-2xl font-light tracking-widest mb-8 text-center">
            LOGIN
          </h3>
          <div className="mb-6 flex space-x-4">
            {["member", "instructor", "admin"].map((type) => (
              <button
                key={type}
                className={`flex-1 py-2 text-sm tracking-widest ${
                  loginType === type ? "bg-black text-white" : "bg-gray-100"
                }`}
                onClick={() => setLoginType(type as typeof loginType)}
              >
                {type.toUpperCase()}
              </button>
            ))}
          </div>
          <form className="space-y-4">
            <div>
              <Label htmlFor="login-email" className="text-sm tracking-widest">
                EMAIL
              </Label>
              <Input id="login-email" type="email" required className="mt-1" />
            </div>
            <div>
              <Label
                htmlFor="login-password"
                className="text-sm tracking-widest"
              >
                PASSWORD
              </Label>
              <Input
                id="login-password"
                type="password"
                required
                className="mt-1"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-black hover:bg-pink-600 text-white mt-6"
            >
              LOGIN
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Booking Modal */}
      <Dialog open={bookStudioOpen} onOpenChange={setBookStudioOpen}>
        <DialogContent className="max-w-lg bg-white p-8 relative">
          <button
            onClick={() => setBookStudioOpen(false)}
            className="absolute right-6 top-6 text-2xl hover:opacity-70 transition-opacity z-50"
          >
            ×
          </button>
          <DialogTitle className="text-2xl font-light tracking-widest mb-8 text-center">
            BOOK A CLASS
          </DialogTitle>
          <div className="mt-4">
            <Calendar mode="single" className="mb-6" />
            <Button className="w-full bg-black hover:bg-pink-600 text-white">
              CONFIRM BOOKING
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
