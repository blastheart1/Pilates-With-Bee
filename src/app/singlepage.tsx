"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";

export default function SinglePageApp() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [bookStudioOpen, setBookStudioOpen] = useState(false);
  const [loginType, setLoginType] = useState<"member" | "instructor" | "admin">("member");
  const [selectedSection, setSelectedSection] = useState("home");

  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="flex space-x-8">
            <button 
              onClick={() => setSelectedSection("about")}
              className="text-sm tracking-widest hover:text-pink-600"
            >
              ABOUT
            </button>
            <button 
              onClick={() => setSelectedSection("meet")}
              className="text-sm tracking-widest hover:text-pink-600"
            >
              MEET BEE
            </button>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-2xl font-light tracking-widest">PWB</h1>
          </div>
          <div className="flex space-x-8">
            <button 
              onClick={() => setSelectedSection("virtual")}
              className="text-sm tracking-widest hover:text-pink-600"
            >
              VIRTUAL STUDIO
            </button>
            <button 
              onClick={() => setSelectedSection("live")}
              className="text-sm tracking-widest hover:text-pink-600"
            >
              LIVE CLASSES
            </button>
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
            <h2 className="text-6xl font-light tracking-widest">pilates</h2>
            <p className="text-xl tracking-[0.5em]">WITH BEE</p>
            <div className="mt-12">
              <button 
                onClick={() => setBookStudioOpen(true)}
                className="border-2 border-white px-12 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition-colors"
              >
                START YOUR TRIAL
              </button>
            </div>
            <p className="mt-16 tracking-[0.3em] text-sm">CONNECT · SCULPT · STRENGTHEN</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-light mb-12 tracking-widest text-center">ABOUT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80"
                alt="About"
                className="w-full h-[500px] object-cover"
              />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={subscription.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <fieldset className="border border-gray-300 rounded-md p-4">
                <legend className="font-semibold mb-2">Select Class Type</legend>
                <div className="flex space-x-6">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="service"
                      value="group-pilates"
                      checked={subscription.service === "group-pilates"}
                      onChange={handleInputChange}
                      className="mr-2"
                      required
                    />
                    Group Pilates Classes
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="service"
                      value="private-pilates"
                      checked={subscription.service === "private-pilates"}
                      onChange={handleInputChange}
                      className="mr-2"
                      required
                    />
                    Private Pilates Classes
                  </label>
                </div>
              </fieldset>
              <fieldset className="border border-gray-300 rounded-md p-4">
                <legend className="font-semibold mb-2">Nutrition & Dietetics Services</legend>
                <div className="flex flex-col space-y-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="nutritionConsultation"
                      checked={subscription.nutritionConsultation}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Consultation
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="mealPlan3Day"
                      checked={subscription.mealPlan3Day}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    3-Day Meal Plan
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="mealPlan5Day"
                      checked={subscription.mealPlan5Day}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    5-Day Meal Plan
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="mealPlan3Week"
                      checked={subscription.mealPlan3Week}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    3-Week Meal Plan
                  </label>
                </div>
              </fieldset>
              <fieldset className="border border-gray-300 rounded-md p-4">
                <legend className="font-semibold mb-2">Existing Member</legend>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="bookStudio"
                    checked={subscription.bookStudio || false}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Book a Studio
                </label>
              </fieldset>
              <Button type="submit" className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-md font-semibold">
                Subscribe / Book
              </Button>
            </form>
          </section>

          {/* Floating Book a Studio Button */}
          <Dialog open={bookStudioOpen} onOpenChange={setBookStudioOpen}>
            <DialogTrigger asChild>
              <button
                className="fixed bottom-8 right-8 bg-pink-600 hover:bg-pink-700 text-white rounded-full p-4 shadow-lg z-50"
                onClick={() => setBookStudioOpen(true)}
              >
                Book a Studio
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <h3 className="text-2xl font-bold mb-4">Book a Studio</h3>
              <Calendar mode="single" />
              <Button className="mt-4 w-full bg-pink-600 hover:bg-pink-700 text-white">Confirm Booking</Button>
            </DialogContent>
          </Dialog>

          {/* Login Modal */}
          <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
            <DialogTrigger asChild />
            <DialogContent className="max-w-md">
              <h3 className="text-2xl font-bold mb-4">Login</h3>
              <div className="mb-4 flex space-x-4">
                <button
                  className={`flex-1 py-2 rounded-md ${
                    loginType === "member" ? "bg-pink-600 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => setLoginType("member")}
                >
                  Member
                </button>
                <button
                  className={`flex-1 py-2 rounded-md ${
                    loginType === "instructor" ? "bg-pink-600 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => setLoginType("instructor")}
                >
                  Instructor
                </button>
                <button
                  className={`flex-1 py-2 rounded-md ${
                    loginType === "admin" ? "bg-pink-600 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => setLoginType("admin")}
                >
                  Admin
                </button>
              </div>
              <form>
                <Label htmlFor="login-email">Email</Label>
                <Input id="login-email" type="email" required className="mb-4" />
                <Label htmlFor="login-password">Password</Label>
                <Input id="login-password" type="password" required />
                <Button type="submit" className="mt-6 w-full bg-pink-600 hover:bg-pink-700 text-white">
                  Login
                </Button>
              </form>
            </DialogContent>
          </Dialog>

          {/* Other sections like careers, shop, etc. can remain here */}
        </main>
      )}
    </div>
  );
}
