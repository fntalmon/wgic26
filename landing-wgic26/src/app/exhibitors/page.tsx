"use client";

import PageHeader from "@/components/PageHeader";
import Carousel from "@/components/Carousel";
import { useState } from "react";
import { Download, FileText, Send, Loader2, ExternalLink, Presentation, CheckCircle } from "lucide-react";

const Exhibitors = () => {
  const [downloadStep, setDownloadStep] = useState<"initial" | "form" | "success">("initial");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string>("");

  const [interestFormStep, setInterestFormStep] = useState<"initial" | "form" | "success">("initial");
  const [interestFormSubmitting, setInterestFormSubmitting] = useState(false);
  const [interestFormError, setInterestFormError] = useState<string>("");
  const [interestFormData, setInterestFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    participationType: ""
  });

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloadStep("form");
    setFormError("");
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");
    
    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string)?.trim() || "";
    const email = (formData.get("email") as string)?.trim() || "";

    // Validations
    if (!name) {
      setFormError("Please enter your full name");
      return;
    }

    if (name.length < 2) {
      setFormError("Name must be at least 2 characters");
      return;
    }

    if (!email) {
      setFormError("Please enter your email");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/exhibitor-pack", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        setDownloadStep("success");
        // Trigger the actual download
        window.open("https://drive.google.com/uc?export=download&id=1w62XZagr7RhDoR4fhyT8vfnhga0CWnHR", "_blank");
      } else {
        throw new Error("Failed to process download");
      }
    } catch (error) {
      console.error("Download error:", error);
      setFormError("Error processing your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInterestFormClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setInterestFormStep("form");
    setInterestFormError("");
  };

  const handleInterestFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    setInterestFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInterestFormError("");

    const { name, email, phone, company, participationType } = interestFormData;

    // Validations
    if (!name) {
      setInterestFormError("Please enter your full name");
      return;
    }

    if (name.length < 2) {
      setInterestFormError("Name must be at least 2 characters");
      return;
    }

    if (!email) {
      setInterestFormError("Please enter your email");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setInterestFormError("Please enter a valid email address");
      return;
    }

    if (!phone) {
      setInterestFormError("Please enter your phone number");
      return;
    }

    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 6) {
      setInterestFormError("Please enter a valid phone number");
      return;
    }

    if (!company) {
      setInterestFormError("Please enter your company name");
      return;
    }

    if (!participationType) {
      setInterestFormError("Please select a participation type");
      return;
    }

    setInterestFormSubmitting(true);

    try {
      const response = await fetch("/api/interest-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, company, participationType }),
      });

      if (response.ok) {
        setInterestFormStep("success");
        // Reset form
        setInterestFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          participationType: ""
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Interest form error:", error);
      setInterestFormError("Error submitting your form. Please try again.");
    } finally {
      setInterestFormSubmitting(false);
    }
  };

  return (
    <div>
      <PageHeader
        title="Partners & Exhibitors — Sponsorship opportunities"
        description="Showcase your participation in the green infrastructures sector and ensure visibility and exposure to an international audience at our World Green Infrastructure Congress 2026 in Barcelona and Lleida."
      />
      <section className="w-full justify-start text-xs">
        <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            {/* ... rest of the content ... */}
            <h3 className="text-xl text-white uppercase">
              Partner: Elite Global or Event
            </h3>
            <p className="text-white/80 text-justify">
              If what you want is to participate actively in the conference,
              collaborating in decision-making, contributing knowledge, and
              assuming shared responsibilities, choose one of the partner
              options, Global or Event. In these typologies you will have the
              maximum benefits of visibility and participation.
            </p>
            <p className="text-white/80 text-justify">
              The Elite Partners will contribute strategically to the
              development of the congress and its promotion and will have all
              the benefits of the Global partners plus, those that can be
              finally defined, as for example, branding on the footer of
              conference emails, standees in the ballroom/foyer area, etc. and
              those that can be considered. Your financial contribution will be
              specifically agreed with the congress organization team.
            </p>

            <h3 className="text-xl text-white uppercase">
              Sponsor: Tree or Leaf
            </h3>
            <p className="text-white/80 text-justify">
              If you are looking to maximize visibility, publicity or benefits
              for your brand or company in the green infrastructure sector,
              without the need to be involved in the management or
              decision-making of the event, your option is to be a sponsor,
              either as a Tree or as a Leaf.
            </p>

            <div className="mt-6">
              <h3 className="text-xl text-white uppercase mb-6">
                Exhibitors (limited to first 40)
              </h3>
              <p className="text-white/80 mb-4 text-justify">
                Whether you are a partner or sponsor, you have the possibility
                of showing your company or products to attendees as an
                exhibitor, in two options, as a Garden and as a Flower. Being an
                exhibitor will allow you to be physically visible during the
                congress and network with potential customers interested in your
                brand.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-white/20">
                <thead>
                  <tr className="bg-cactus/30">
                    <th
                      rowSpan={2}
                      className="border border-white/20 px-4 py-3 text-left text-white font-medium text-base"
                    >
                      Benefits
                    </th>
                    <th
                      colSpan={3}
                      className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base"
                    >
                      Partners
                    </th>
                    <th
                      colSpan={2}
                      className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base"
                    >
                      Sponsors
                    </th>
                    <th
                      colSpan={3}
                      className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base"
                    >
                      Exhibitors
                    </th>
                  </tr>

                  <tr className="bg-cactus/20">
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base">Elite</th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base">Global</th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base">Event</th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base">Tree</th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base">Leaf</th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base">Garden Big</th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base">Garden Medium</th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base">Flower</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Congress Invitations</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">15</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">10</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">4</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">2</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">1</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">2</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">2</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">1</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Gala Dinner at CCIB</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">10</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">5</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">3</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">2</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">1</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Speaking Slot</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">3</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">2</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">1</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Rooms naming</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Workshops</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">1</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base" >Roll up (brought by you) + Table + 3 Chairs</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Space</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">Island 12x6m (72sqm)</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">6x6m (36sqm)</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">3x9m (27sqm)</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">3x6m (18sqm)</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">3x3m (9sqm)</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">3x1.5m (4.5sqm)</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Visibility & Social Media</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Newsletter</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Social Media</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Logo Visibility</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Special Content</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">Ad page in Proceedings</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">List of Attendees</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">✔</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base"></td>
                  </tr>
                  <tr className="bg-cactus/10 font-bold">
                    <td className="border border-white/20 px-4 py-3 text-white text-base">Total Cost</td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center">30.000€</td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center">15.000€</td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center">10.000€</td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center">8.000€</td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center">6.000€</td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center">5.000€</td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center">3.000€</td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center">2.000€</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <h4 className="text-lg text-white uppercase mb-3">The Venue</h4>
              <p className="text-white/80 mb-4 text-justify">
                The venue where WGIC26 will be held is perfect for creating the networking atmosphere that sponsors, attendees and exhibitors expect from a global event. The International Barcelona Convention Center of Barcelona is an iconic venue located in the Barcelona district of Sant Martí, inside the 22@ of Poblenou neighbourhood.
              </p>
              <p className="text-white/80 mb-4 text-justify">
                The CCIB comprises two buildings of great architectural value: the Convention Centre and the Auditorium CCIB Forum, joined by an underground connecting walkway. With a gross surface area of 100,000 m² and a capacity for up to 15,000 attendees, both buildings stand out for their size, natural light, and the great versatility of their spaces.
              </p>
              <p className="text-white/80 mb-4 text-justify">
                The CCIB enjoys a privileged location just 500 metres from the beach, 6 km from the historic centre and 22 km from the airport, with excellent links to the most important highways and roads, and by the public transport network.
              </p>
              <Carousel
                images={[
                  "/img/1.Exterior.jpg",
                  "/img/escaleras.jpg",
                  "/img/Banquet Hall.1.jpg",
                  "/img/Exterior_15.jpg",
                  "/img/sala_polivalente.jpg",
                ]}
                alt="Venue images"
              />
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Info Pack Download Card */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col gap-6 hover:border-potus/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cactus/20 rounded-lg">
                    <Download className="text-potus" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-white uppercase m-0">Download Info Pack</h4>
                </div>

                {downloadStep === "initial" && (
                  <>
                    <p className="text-white/70 text-base m-0">
                      Get the complete guide for sponsors and exhibitors, including all technical details and pricing.
                    </p>
                    <button
                      onClick={handleDownloadClick}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-cactus hover:bg-cactus/80 text-white px-6 py-4 font-medium text-lg transition-all"
                    >
                      Download PDF
                    </button>
                  </>
                )}

                {downloadStep === "form" && (
                  <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                    <p className="text-white/70 text-base m-0 mb-2">Please provide your details to access the download.</p>
                    
                    {formError && (
                      <div className="bg-rose/20 border border-rose px-4 py-3 rounded-lg">
                        <p className="text-rose text-sm m-0">{formError}</p>
                      </div>
                    )}
                    
                    <input 
                      name="name"
                      type="text" 
                      placeholder="Full Name" 
                      className="bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white text-base focus:border-potus outline-none transition-all"
                    />
                    <input 
                      name="email"
                      type="email" 
                      placeholder="Email Address" 
                      className="bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white text-base focus:border-potus outline-none transition-all"
                    />
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-potus text-black px-6 py-4 font-bold text-lg hover:bg-potus/80 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? <Loader2 className="animate-spin" /> : "Download Now"}
                    </button>
                  </form>
                )}

                {downloadStep === "success" && (
                  <div className="flex flex-col items-center gap-4 py-4 text-center">
                    <div className="p-4 bg-potus/20 rounded-full">
                      <Send className="text-potus" size={32} />
                    </div>
                    <p className="text-white font-medium text-lg m-0">Your download has started!</p>
                    <p className="text-white/60 text-base m-0">If it didn't start automatically, <a href="https://drive.google.com/uc?export=download&id=1w62XZagr7RhDoR4fhyT8vfnhga0CWnHR" target="_blank" className="text-potus underline">click here</a>.</p>
                  </div>
                )}
              </div>

              {/* Interest Form Card */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col gap-6 hover:border-potus/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cactus/20 rounded-lg">
                    <FileText className="text-potus" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-white uppercase m-0">Express Your Interest</h4>
                </div>

                {interestFormStep === "initial" && (
                  <>
                    <p className="text-white/70 text-base m-0">
                      Interested in sponsoring or exhibiting? Share your information and preferred participation type. We'll review your details and contact you with customized options.
                    </p>
                    <button
                      onClick={handleInterestFormClick}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-cactus hover:bg-cactus/80 text-white px-6 py-4 font-medium text-lg transition-all"
                    >
                      Express Your Interest
                    </button>
                  </>
                )}

                {interestFormStep === "form" && (
                  <form onSubmit={handleInterestFormSubmit} className="flex flex-col gap-4">
                    <p className="text-white/70 text-base m-0 mb-2">Provide your contact information and let us know your interests.</p>
                    
                    {interestFormError && (
                      <div className="bg-rose/20 border border-rose px-4 py-3 rounded-lg">
                        <p className="text-rose text-sm m-0">{interestFormError}</p>
                      </div>
                    )}
                    
                    <input 
                      name="name"
                      type="text" 
                      placeholder="Full Name" 
                      value={interestFormData.name}
                      onChange={handleInterestFormChange}
                      className="bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white text-base focus:border-potus outline-none transition-all"
                    />
                    
                    <input 
                      name="email"
                      type="email" 
                      placeholder="Email Address" 
                      value={interestFormData.email}
                      onChange={handleInterestFormChange}
                      className="bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white text-base focus:border-potus outline-none transition-all"
                    />
                    
                    <input 
                      name="phone"
                      type="tel" 
                      placeholder="Phone Number" 
                      value={interestFormData.phone}
                      onChange={handleInterestFormChange}
                      className="bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white text-base focus:border-potus outline-none transition-all"
                    />
                    
                    <input 
                      name="company"
                      type="text" 
                      placeholder="Company Name" 
                      value={interestFormData.company}
                      onChange={handleInterestFormChange}
                      className="bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white text-base focus:border-potus outline-none transition-all"
                    />
                    
                    <select
                      name="participationType"
                      value={interestFormData.participationType}
                      onChange={handleInterestFormChange}
                      className="bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white text-base focus:border-potus outline-none transition-all"
                    >
                      <option value="">Select Participation Type</option>
                      <option value="Elite Partner">Elite Partner</option>
                      <option value="Global Partner">Global Partner</option>
                      <option value="Event Partner">Event Partner</option>
                      <option value="Tree Sponsor">Tree Sponsor</option>
                      <option value="Leaf Sponsor">Leaf Sponsor</option>
                      <option value="Garden Big">Garden Big Exhibitor</option>
                      <option value="Garden Medium">Garden Medium Exhibitor</option>
                      <option value="Flower">Flower Exhibitor</option>
                    </select>
                    
                    <button
                      disabled={interestFormSubmitting}
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-potus text-black px-6 py-4 font-bold text-lg hover:bg-potus/80 transition-all disabled:opacity-50"
                    >
                      {interestFormSubmitting ? <Loader2 className="animate-spin" /> : "Submit"}
                    </button>
                  </form>
                )}

                {interestFormStep === "success" && (
                  <div className="flex flex-col items-center gap-4 py-4 text-center">
                    <div className="p-4 bg-potus/20 rounded-full">
                      <CheckCircle className="text-potus" size={32} />
                    </div>
                    <p className="text-white font-medium text-lg m-0">Thank you for your interest!</p>
                    <p className="text-white/60 text-base m-0">We've received your information and will get back to you shortly with personalized opportunities.</p>
                  </div>
                )}
              </div>

              {/* PPT Presentation Download Card */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col gap-6 hover:border-potus/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cactus/20 rounded-lg">
                    <Presentation className="text-potus" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-white uppercase m-0">Download Presentation</h4>
                </div>
                
                <p className="text-white/70 text-base m-0">
                  Get a quick overview of the Congress through our presentation deck, featuring key information and highlights.
                </p>
                
                <div className="mt-auto">
                  <a 
                    href="https://docs.google.com/presentation/d/1B6fw8i0h6K50pB0JFK-yW56sIyfImmjVqHQXPo0rQx0/export/pptx
"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-cactus hover:bg-cactus/80 text-white px-6 py-4 font-medium text-lg transition-all"
                  >
                    <Presentation size={18} />
                    Download PPT
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Exhibitors;
