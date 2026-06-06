"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ViewTransition } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid grid-cols-3 gap-3">
      {photos.map((photo) => (
        <Link key={photo.id} href={`/photo/${photo.id}`}>
          <ViewTransition name={`photo-${photo.id}`}>
            <Image src={photo.src} alt={photo.title} />
          </ViewTransition>
        </Link>
      ))}
    <main className="bg-gradient-to-bfrom-[#A7ADF2] to-[#d6dcff] text-gray-800 min-h-screen" dir="rtl">

      {/* Header */}
      <header className="top-0 z-50 backdrop-blur-xl bg-white/40 shadow-lg px-6 py-4 md:px-12 flex items-center justify-between rounded-b-3xl relative">

        {/* Logo */}
        <img src="logo01.png" alt="logo" className="w-24 md:w-32" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <a href="#home" className="hover:text-blue-600 transition">خانه</a>
          <a href="#about" className="hover:text-blue-600 transition">درباره</a>
          <a href="#services" className="hover:text-blue-600 transition">خدمات</a>
          <a href="#blog" className="hover:text-blue-600 transition">مقالات</a>
          <a href="#contact" className="hover:text-blue-600 transition">تماس</a>
        </nav>

        {/* Desktop Button */}
        <a href="#appointment" className="hidden md:block">
          <button className="bg-pink-300 hover:bg-pink-400 transition px-6 py-2 rounded-2xl shadow-md">
            نوبت‌گیری
          </button>
        </a>

        {/* Hamburger موبایل */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out origin-top ${
            isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-4 text-center p-6 text-lg font-medium">
            <a href="#home" onClick={() => setIsOpen(false)}>خانه</a>
            <a href="#about" onClick={() => setIsOpen(false)}>درباره</a>
            <a href="#services" onClick={() => setIsOpen(false)}>خدمات</a>
            <a href="#blog" onClick={() => setIsOpen(false)}>مقالات</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>تماس</a>
            <a href="#appointment" onClick={() => setIsOpen(false)}>
              <button className="bg-pink-300 hover:bg-pink-400 transition px-6 py-2 rounded-2xl shadow-md w-full">
                نوبت‌گیری
              </button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/wavy-blue.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white text-right">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              دکتر المیرا سنجری
            </h1>
            <p className="text-lg md:text-xl mb-8">
              متخصص زنان، زایمان
            </p>
            <p className="text-lg md:text-xl mb-8">
                متخصص زییایی
            </p>
            <a href="#appointment">
              <button className="bg-white text-blue-700 px-8 py-3 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
                رزرو نوبت
              </button>
            </a>
          </div>

          <div className="relative group [data-entering] [data-exiting]">
            <img
            
              src="./doctor-photo3.jpeg"
              alt="doctor"
              className="rounded-[40px] shadow-2xl transition duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-[#827C9A]">
        <h3 className="text-4xl font-bold text-center mb-12">خدمات ما</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {["مراقبت بارداری","زایمان طبیعی و سزارین","درمان نازایی","چکاپ سلامت بانوان"].map((item,i)=>(
            <div key={i} className="bg-gradient-to-brfrom-pink-100 to-blue-100 p-8 rounded-3xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-300 cursor-pointer">
              <h4 className="font-bold text-lg mb-3">{item}</h4>
              <p className="text-gray-700 text-sm">ارائه خدمات تخصصی و مدرن با بهترین تجهیزات پزشکی</p>
            </div>
          ))}
        </div>
      </section>

       {/* Blog Section */}
      <section id="blog" className="p-10 bg-[#ae9af1]">
        <h3 className="text-3xl font-bold mb-6 text-center">مقالات آموزشی</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-4 rounded-2xl shadow hover:scale-105 transition">
            <h4 className="font-semibold mb-2">علائم اولیه بارداری</h4>
            <p>شناخت علائم اولیه بارداری برای آمادگی مادر.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-2xl shadow hover:scale-105 transition">
            <h4 className="font-semibold mb-2">راهکارهای حفظ سلامت بانوان</h4>
            <p>توصیه‌های ساده و عملی برای سلامت روزانه.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-2xl shadow hover:scale-105 transition">
            <h4 className="font-semibold mb-2">تفاوت زایمان طبیعی و سزارین</h4>
            <p>اطلاعات مفید برای تصمیم‌گیری آگاهانه مادران.</p>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="bg-[#bdabf1] py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6 text-center">درباره ما</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4 leading-relaxed text-justify text-xl">دکتر <strong>المیرا سنجری</strong>، متخصص زنان، زایمان و نازایی، با سال‌ها تجربهٔ بالینی و تعهدی عمیق به سلامت زنان، معتقد است پزشکی خوب فراتر از درمان علائم است؛ پزشکی، شنیدنِ نگرانی‌ها، همراهیِ قلبی و دادنِ امیدِ معنادار است.</p>
              <p className="mb-4 leading-relaxed text-justify text-xl">در مطب دکتر سنجری هر بیمار یک انسانِ کامل است — نه صرفاً یک پرونده. تیم ما با رویکردی فردمحور، برنامه‌های درمانی را مطابق نیاز و شرایط هر خانم طراحی می‌کند تا مسیر سلامت، بارداری یا بهبود، با آرامش و اطمینان طی شود.</p>
              <p className="mb-4 leading-relaxed text-justify text-xl">خدمات ما شامل مراقبت‌های پیش از بارداری، مراقبت‌های دوران بارداری، مدیریت مشکلات باروری، مشاوره‌های بهداشتی و جراحی‌های تخصصی است. آنچه مراجعین را بازمی‌گرداند، مهارتِ علمی همراه با اخلاقِ انسانی و احترامی است که در همه مراحل فراهم می‌شود.</p>
              <p className="font-medium text-xl">ماموریت ما: ساختن فضایی امن، آگاه‌کننده و همدلانه برای هر زن تا بتواند با اعتماد و آگاهی کامل دربارهٔ سلامت خود تصمیم بگیرد.</p>
            </div>

            {/* Profile Card */}
            <div className="bg-gray-50 p-6 rounded-lg shadow flex flex-col items-center gap-5">
              <img src="./doctor-photo2.jpeg" alt="دکتر المیرا سنجری" className="w-40 h-40 rounded-full object-cover shadow mb-4" />
              <h4 className="text-xl font-semibold mb-1">دکتر المیرا سنجری</h4>
              <p className="text-sm mb-3">متخصص زنان و زایمان، نازایی</p>
              <ul className="text-sm list-disc pl-5 self-start">
                <li>متخصص از دانشگاه معتبر</li>
                <li>سابقهٔ چندساله در مراقبت دوران بارداری و درمان نازایی</li>
                <li>رویکردی فردمحور و مبتنی بر شواهد</li>
              </ul>
              <a href="#appointment" className="mt-4 w-full">
                <button className="bg-blue-300 text-white px-4 py-2 rounded w-full hover:bg-blue-400">رزرو نوبت</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="py-20 bg-gradient-to-r-from-blue-200 to-pink-200 px-6">
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl">
          <h3 className="text-3xl font-bold text-center mb-8">رزرو نوبت</h3>
          <form className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="نام و نام خانوادگی" required className="p-4 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none" />
            <input type="tel" placeholder="شماره تماس" required className="p-4 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none" />
            <input type="date" required className="p-4 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none" />
            <input type="time" className="p-4 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none" />
            <select className="md:col-span-2 p-4 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none">
              <option>انتخاب شهر</option>
              <option>مغان</option>
              <option>تهران</option>
            </select>
            <button className="md:col-span-2 bg-blue-500 text-white py-4 rounded-xl hover:bg-blue-600 transition">
              ارسال درخواست
            </button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-10 bg-white">
        <h3 className="text-3xl font-bold mb-6 text-center">تماس با ما</h3>
        <div className="flex flex-col md:flex-row md:space-x-6 items-start max-w-4xl mx-auto">
          <div className="md:w-1/2 space-y-4">
            <p>📍 آدرس: شهر پارس‌آباد، خیابان پزشکان، کوچه طبیب ۱، ساختمان شریفی</p>
            <p>📞 شماره تماس: 045-3278-7700</p>
            <p>⏰ ساعت کاری: شنبه تا چهارشنبه، ۹ صبح تا ۵ عصر</p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <iframe
              className="w-full h-64 rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.123456!2d47.123456!3d39.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1234567890abcdef!2sClinic!5e0!3m2!1sen!2sir!4v1699557890123"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-300 text-white p-6 text-center">
        © 2025 طراحی و توسعه توسط Sancode
      </footer>
    </main>
  );
}
