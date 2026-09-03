"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Search,
  User,
  ShoppingCart,
  Menu,
  X,
  Leaf,
  Award,
  Star,
  Truck,
  Sprout,
  ChevronRight,
  ArrowRight,
  Heart,
  Sun,
  Droplets,
  Shield,
  Package,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  CheckCircle,
  Quote
} from "lucide-react"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartCount] = useState(2)
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false)
  const [newsletterSuccess, setNewsletterSuccess] = useState(false)
  const [newsletterError, setNewsletterError] = useState("")

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setNewsletterSubmitting(true)
    setNewsletterError("")

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSTRUCTOR_API}/v1/forms/${process.env.NEXT_PUBLIC_PROJECT_ID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: newsletterEmail, type: "newsletter" })
        }
      )
      if (response.ok) {
        setNewsletterSuccess(true)
      } else {
        setNewsletterError("Error al suscribirse. Intenta de nuevo.")
      }
    } catch {
      setNewsletterError("Error al suscribirse. Intenta de nuevo.")
    } finally {
      setNewsletterSubmitting(false)
    }
  }

  const featuredPlants = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      price: "$59.00",
      image: "/images/product-1.png",
      badge: "Best Seller",
      badgeColor: "bg-amber-100 text-amber-800"
    },
    {
      id: 2,
      name: "Snake Plant Laurentii",
      price: "$49.00",
      image: "/images/product-2.png",
      badge: "Low Light",
      badgeColor: "bg-blue-100 text-blue-800"
    },
    {
      id: 3,
      name: "Fiddle Leaf Fig",
      price: "$79.00",
      image: "/images/product-3.png",
      badge: "Easy Care",
      badgeColor: "bg-green-100 text-green-800"
    },
    {
      id: 4,
      name: "Pothos Golden",
      price: "$29.00",
      image: "/images/product-1.png",
      badge: "Trending",
      badgeColor: "bg-purple-100 text-purple-800"
    },
    {
      id: 5,
      name: "Peace Lily",
      price: "$39.00",
      image: "/images/product-2.png",
      badge: "Air Purifying",
      badgeColor: "bg-teal-100 text-teal-800"
    }
  ]

  const testimonials = [
    {
      name: "María García",
      role: "Plant Parent",
      content: "Mis plantas llegaron en perfecto estado. El servicio de atención es excepcional y las instrucciones de cuidado son muy útiles.",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      role: "Interior Designer",
      content: "La calidad de las plantas es increíble. Uso PlantHub para todos mis proyectos de diseño de interiores.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      role: "First Time Buyer",
      content: "Nunca había tenido plantas antes, pero gracias a las guías de cuidado ahora tengo una selva en casa.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F9F7F4" }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#1B5E3F" }}>
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif text-xl" style={{ color: "#2D3B36" }}>Project 1788412935117</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#products" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: "#2D3B36" }}>
                Shop Plants
              </Link>
              <Link href="#care" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: "#2D3B36" }}>
                Plant Care
              </Link>
              <Link href="#accessories" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: "#2D3B36" }}>
                Accessories
              </Link>
              <Link href="#about" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: "#2D3B36" }}>
                About Us
              </Link>
              <Link href="#blog" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: "#2D3B36" }}>
                Plant Blog
              </Link>
            </div>

            {/* Right Icons */}
            <div className="hidden md:flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Search className="w-5 h-5" style={{ color: "#2D3B36" }} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <User className="w-5 h-5" style={{ color: "#2D3B36" }} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <ShoppingCart className="w-5 h-5" style={{ color: "#2D3B36" }} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 text-xs text-white rounded-full flex items-center justify-center" style={{ backgroundColor: "#1B5E3F" }}>
                    {cartCount}
                  </span>
                )}
              </button>
              <Button
                className="rounded-full px-6 text-white"
                style={{ backgroundColor: "#1B5E3F" }}
              >
                Plant Finder
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" style={{ color: "#2D3B36" }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: "#2D3B36" }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            mobileMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="px-4 py-4 bg-white border-t space-y-3">
            <Link href="#products" className="block py-2 text-sm font-medium" style={{ color: "#2D3B36" }}>
              Shop Plants
            </Link>
            <Link href="#care" className="block py-2 text-sm font-medium" style={{ color: "#2D3B36" }}>
              Plant Care
            </Link>
            <Link href="#accessories" className="block py-2 text-sm font-medium" style={{ color: "#2D3B36" }}>
              Accessories
            </Link>
            <Link href="#about" className="block py-2 text-sm font-medium" style={{ color: "#2D3B36" }}>
              About Us
            </Link>
            <Link href="#blog" className="block py-2 text-sm font-medium" style={{ color: "#2D3B36" }}>
              Plant Blog
            </Link>
            <Button className="w-full rounded-full text-white mt-4" style={{ backgroundColor: "#1B5E3F" }}>
              Plant Finder
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.png"
            alt="Beautiful indoor plants"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-white/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6" style={{ color: "#2D3B36" }}>
              Bring Life Home
            </h1>
            <p className="text-lg md:text-xl mb-8" style={{ color: "#6B8E7F" }}>
              Beautiful plants. Expert care. Thoughtful service.
              <br />
              Everything you need to create a space that grows.
            </p>
            <Button
              size="lg"
              className="rounded-full px-10 py-6 text-white text-lg"
              style={{ backgroundColor: "#1B5E3F" }}
              asChild
            >
              <Link href="#products">Shop All Plants</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-white py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#F9F7F4" }}>
                <Sprout className="w-6 h-6" style={{ color: "#1B5E3F" }} />
              </div>
              <div>
                <p className="text-2xl font-bold" style={{ color: "#2D3B36" }}>10,000+</p>
                <p className="text-sm" style={{ color: "#6B8E7F" }}>Happy Plant Parents</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#F9F7F4" }}>
                <Leaf className="w-6 h-6" style={{ color: "#1B5E3F" }} />
              </div>
              <div>
                <p className="text-2xl font-bold" style={{ color: "#2D3B36" }}>500+</p>
                <p className="text-sm" style={{ color: "#6B8E7F" }}>Curated Plants</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#F9F7F4" }}>
                <Award className="w-6 h-6" style={{ color: "#1B5E3F" }} />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <p className="text-2xl font-bold" style={{ color: "#2D3B36" }}>4.9</p>
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                </div>
                <p className="text-sm" style={{ color: "#6B8E7F" }}>Customer Rating</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#F9F7F4" }}>
                <Truck className="w-6 h-6" style={{ color: "#1B5E3F" }} />
              </div>
              <div>
                <p className="text-2xl font-bold" style={{ color: "#2D3B36" }}>Fast & Safe</p>
                <p className="text-sm" style={{ color: "#6B8E7F" }}>Nationwide Delivery</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#F9F7F4" }}>
                <Heart className="w-6 h-6" style={{ color: "#1B5E3F" }} />
              </div>
              <div>
                <p className="text-2xl font-bold" style={{ color: "#2D3B36" }}>Sustainably</p>
                <p className="text-sm" style={{ color: "#6B8E7F" }}>Grown & Sourced</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Plants */}
      <section id="products" className="py-16 md:py-24" style={{ backgroundColor: "#F9F7F4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-serif text-3xl md:text-4xl" style={{ color: "#2D3B36" }}>
              Featured Plants
            </h2>
            <Link
              href="#all-plants"
              className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
              style={{ color: "#1B5E3F" }}
            >
              View all plants
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {featuredPlants.map((plant) => (
              <Card
                key={plant.id}
                className="group bg-white rounded-2xl overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={plant.image}
                    alt={plant.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className={`absolute top-3 left-3 ${plant.badgeColor} border-0 text-xs font-medium`}>
                    {plant.badge}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-sm mb-1" style={{ color: "#2D3B36" }}>
                    {plant.name}
                  </h3>
                  <p className="font-semibold" style={{ color: "#1B5E3F" }}>
                    {plant.price}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bento */}
      <section id="about" className="py-16 md:py-24" style={{ backgroundColor: "#F9F7F4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-6">
            {/* Left Text Section */}
            <div className="md:col-span-3 flex flex-col justify-center">
              <div className="mb-4">
                <Sprout className="w-8 h-8" style={{ color: "#1B5E3F" }} />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl mb-4" style={{ color: "#2D3B36" }}>
                Rooted in
                <br />
                Quality & Care
              </h2>
              <p className="mb-6" style={{ color: "#6B8E7F" }}>
                From our greenhouse to your home, we make plant parenthood simple, joyful, and rewarding.
              </p>
              <Link
                href="#learn-more"
                className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: "#1B5E3F" }}
              >
                Learn more about us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Feature Cards */}
            <div className="md:col-span-9 grid grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-white rounded-2xl overflow-hidden border-0 shadow-sm">
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src="/images/feature.png"
                    alt="Expertly Curated"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: "#F9F7F4" }}>
                    <Leaf className="w-5 h-5" style={{ color: "#1B5E3F" }} />
                  </div>
                  <h3 className="font-semibold mb-2" style={{ color: "#2D3B36" }}>Expertly Curated</h3>
                  <p className="text-sm" style={{ color: "#6B8E7F" }}>
                    Handpicked plants for every space and skill level.
                  </p>
                </div>
              </Card>

              <Card className="bg-white rounded-2xl overflow-hidden border-0 shadow-sm">
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src="/images/product-1.png"
                    alt="Plant Care Support"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: "#F9F7F4" }}>
                    <Sun className="w-5 h-5" style={{ color: "#1B5E3F" }} />
                  </div>
                  <h3 className="font-semibold mb-2" style={{ color: "#2D3B36" }}>Plant Care Support</h3>
                  <p className="text-sm" style={{ color: "#6B8E7F" }}>
                    Guides, tips, and real people here to help your plants thrive.
                  </p>
                </div>
              </Card>

              <Card className="bg-white rounded-2xl overflow-hidden border-0 shadow-sm">
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src="/images/product-2.png"
                    alt="Safe Delivery"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: "#F9F7F4" }}>
                    <Package className="w-5 h-5" style={{ color: "#1B5E3F" }} />
                  </div>
                  <h3 className="font-semibold mb-2" style={{ color: "#2D3B36" }}>Safe & Reliable Delivery</h3>
                  <p className="text-sm" style={{ color: "#6B8E7F" }}>
                    Carefully packed and delivered fresh to your door.
                  </p>
                </div>
              </Card>

              <Card className="bg-white rounded-2xl overflow-hidden border-0 shadow-sm">
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src="/images/product-3.png"
                    alt="Sustainability"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: "#F9F7F4" }}>
                    <Heart className="w-5 h-5" style={{ color: "#1B5E3F" }} />
                  </div>
                  <h3 className="font-semibold mb-2" style={{ color: "#2D3B36" }}>Sustainably Promise</h3>
                  <p className="text-sm" style={{ color: "#6B8E7F" }}>
                    We are committed to people and the planet.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="all-plants" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-4" style={{ color: "#2D3B36" }}>
              Shop by Category
            </h2>
            <p style={{ color: "#6B8E7F" }}>
              Find the perfect plant for your space and lifestyle
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["All Plants", "Pet Safe", "Low Light", "Easy Care", "Air Purifying", "Large Plants"].map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "outline"}
                className="rounded-full"
                style={index === 0 ? { backgroundColor: "#1B5E3F" } : { borderColor: "#1B5E3F", color: "#1B5E3F" }}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...featuredPlants, ...featuredPlants.slice(0, 3)].map((plant, index) => (
              <Card
                key={`${plant.id}-${index}`}
                className="group bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={plant.image}
                    alt={plant.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className={`absolute top-3 left-3 ${plant.badgeColor} border-0 text-xs font-medium`}>
                    {plant.badge}
                  </Badge>
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                    <Heart className="w-4 h-4" style={{ color: "#2D3B36" }} />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1" style={{ color: "#2D3B36" }}>
                    {plant.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Sun className="w-4 h-4" style={{ color: "#6B8E7F" }} />
                    <Droplets className="w-4 h-4" style={{ color: "#6B8E7F" }} />
                  </div>
                  <p className="font-semibold" style={{ color: "#1B5E3F" }}>
                    {plant.price}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8"
              style={{ borderColor: "#1B5E3F", color: "#1B5E3F" }}
            >
              Load More Plants
            </Button>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section id="care" className="py-16 md:py-24" style={{ backgroundColor: "#F9F7F4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-4" style={{ color: "#2D3B36" }}>
              How It Works
            </h2>
            <p style={{ color: "#6B8E7F" }}>
              Getting your perfect plant is simple
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Browse & Choose", description: "Explore our curated collection and find plants that match your space and lifestyle.", icon: Search },
              { step: "02", title: "We Pack with Care", description: "Each plant is carefully packaged to ensure it arrives healthy and happy.", icon: Package },
              { step: "03", title: "Fast Delivery", description: "Your plants are delivered right to your door, nationwide.", icon: Truck },
              { step: "04", title: "Watch it Thrive", description: "Use our care guides and support to help your plants flourish.", icon: Sprout }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "#1B5E3F" }}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-semibold mb-2" style={{ color: "#6B8E7F" }}>{item.step}</p>
                <h3 className="font-semibold text-lg mb-2" style={{ color: "#2D3B36" }}>{item.title}</h3>
                <p className="text-sm" style={{ color: "#6B8E7F" }}>{item.description}</p>
                {index < 3 && (
                  <ChevronRight className="hidden md:block w-6 h-6 absolute top-1/2 -right-4 transform -translate-y-1/2" style={{ color: "#6B8E7F" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-4" style={{ color: "#2D3B36" }}>
              What Plant Parents Say
            </h2>
            <p style={{ color: "#6B8E7F" }}>
              Join thousands of happy customers growing with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 rounded-2xl border-0 shadow-sm" style={{ backgroundColor: "#F9F7F4" }}>
                <Quote className="w-8 h-8 mb-4" style={{ color: "#1B5E3F" }} />
                <p className="mb-6" style={{ color: "#2D3B36" }}>
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold" style={{ color: "#2D3B36" }}>{testimonial.name}</p>
                  <p className="text-sm" style={{ color: "#6B8E7F" }}>{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#F9F7F4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-4" style={{ color: "#2D3B36" }}>
              Plant Subscription Plans
            </h2>
            <p style={{ color: "#6B8E7F" }}>
              Get fresh plants delivered monthly
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Starter", price: "Starting from $25/mo", features: ["1 small plant monthly", "Care instructions", "Email support"], popular: false },
              { name: "Grower", price: "Starting from $49/mo", features: ["2 plants monthly", "Care kit included", "Priority support", "Free shipping"], popular: true },
              { name: "Collector", price: "Starting from $99/mo", features: ["4 plants monthly", "Rare varieties", "Dedicated care expert", "Free shipping", "Early access"], popular: false }
            ].map((plan, index) => (
              <Card
                key={index}
                className={`p-6 rounded-2xl border-2 ${plan.popular ? "border-2" : "border-0"}`}
                style={{
                  borderColor: plan.popular ? "#1B5E3F" : "transparent",
                  backgroundColor: "white"
                }}
              >
                {plan.popular && (
                  <Badge className="mb-4 text-white" style={{ backgroundColor: "#1B5E3F" }}>
                    Most Popular
                  </Badge>
                )}
                <h3 className="font-serif text-2xl mb-2" style={{ color: "#2D3B36" }}>{plan.name}</h3>
                <p className="text-lg font-semibold mb-6" style={{ color: "#1B5E3F" }}>{plan.price}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm" style={{ color: "#6B8E7F" }}>
                      <CheckCircle className="w-4 h-4" style={{ color: "#1B5E3F" }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full rounded-full text-white"
                  variant={plan.popular ? "default" : "outline"}
                  style={plan.popular ? { backgroundColor: "#1B5E3F" } : { borderColor: "#1B5E3F", color: "#1B5E3F" }}
                >
                  Subscribe Now
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Full */}
      <section className="py-16 md:py-24 text-white" style={{ backgroundColor: "#1B5E3F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-5xl mb-6">
              Ready to Start Your Plant Journey?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join over 10,000 happy plant parents and transform your space with nature.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="rounded-full px-8 bg-white hover:bg-gray-100"
                style={{ color: "#1B5E3F" }}
                asChild
              >
                <Link href="#products">Shop Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="#care">Plant Care Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Strip */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl mb-2" style={{ color: "#2D3B36" }}>
                Stay Rooted
              </h3>
              <p style={{ color: "#6B8E7F" }}>
                Subscribe for plant tips, exclusive offers, and new arrivals.
              </p>
            </div>
            {newsletterSuccess ? (
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span>Thanks for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-3 w-full md:w-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="rounded-full px-6 min-w-[280px]"
                />
                <Button
                  type="submit"
                  disabled={newsletterSubmitting}
                  className="rounded-full px-6 text-white"
                  style={{ backgroundColor: "#1B5E3F" }}
                >
                  {newsletterSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            )}
            {newsletterError && <p className="text-red-500 text-sm">{newsletterError}</p>}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#2D3B36" }} className="text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#1B5E3F" }}>
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="font-serif text-xl">PlantHub</span>
              </div>
              <p className="text-sm opacity-70 mb-4">
                Bringing nature into homes since 2020. We are passionate about plants and helping you grow.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li><Link href="#products" className="hover:opacity-100 transition-opacity">All Plants</Link></li>
                <li><Link href="#products" className="hover:opacity-100 transition-opacity">Pet Safe Plants</Link></li>
                <li><Link href="#products" className="hover:opacity-100 transition-opacity">Low Light Plants</Link></li>
                <li><Link href="#accessories" className="hover:opacity-100 transition-opacity">Accessories</Link></li>
                <li><Link href="#accessories" className="hover:opacity-100 transition-opacity">Planters & Pots</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li><Link href="#care" className="hover:opacity-100 transition-opacity">Plant Care Guide</Link></li>
                <li><Link href="#blog" className="hover:opacity-100 transition-opacity">Blog</Link></li>
                <li><Link href="#faq" className="hover:opacity-100 transition-opacity">FAQ</Link></li>
                <li><Link href="#shipping" className="hover:opacity-100 transition-opacity">Shipping Info</Link></li>
                <li><Link href="#returns" className="hover:opacity-100 transition-opacity">Returns Policy</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm opacity-70">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:hello@planthub.com" className="hover:opacity-100 transition-opacity">
                    hello@planthub.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>Available 9AM to 6PM</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span>Nationwide Delivery</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm opacity-70">
              © 2024 PlantHub. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm opacity-70">
              <Link href="#privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
              <Link href="#terms" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
              <Link href="#cookies" className="hover:opacity-100 transition-opacity">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}