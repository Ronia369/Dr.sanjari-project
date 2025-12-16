"use client";


export default function Home() {
  return (
    <main className="bg-[#A7ADF2] text-gray-800 min-h-screen">
      {/* هدر */}
      <header className="sticky top-0 z-50 bg-blue-300/60 rounded-3xl drop-shadow-2xl text-black p-6 flex justify-between items-center mx-12">
        <h1 className="text-2xl font-bold">مطب دکتر المیرا سنجری</h1>
        <nav className="space-x-8 text-xl">
          <a href="#home" className="hover:underline transition-normal"> خانه</a>
          <a href="#about" className="hover:underline"> درباره من</a>
          <a href="#services" className="hover:underline"> خدمات</a>
          <a href="#blog" className="hover:underline"> مقالات</a>
          <a href="#appointment" className="hover:underline ml-3">  نوبت‌گیری</a>
          <a href="#contact" className="hover:underline"> تماس </a>
        </nav>
        <a href="#appointment"><button className="bg-pink-200 text-gray-800 px-4 py-2  hover:bg-pink-300 border-2 rounded-2xl border-red-600 border-dashed cursor-pointer">
          نوبت‌گیری
        </button></a>
      </header>

      {/* Hero Section */}

      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden mt-0">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/wavy-blue.mp4" type="video/mp4" />
        </video>
        <section id="home" className="flex flex-col md:flex-row items-center justify-between p-10 bg-white">
        <div className="md:w-1/2">
         <h2 className="text-5xl font-bold mb-4 relative z-10 px-6 text-black">دکتر المیرا سنجری</h2>
          <p className="mb-6 relative z-10 px-6 text-gray-900 text-lg">
            متخصص زنان، زایمان و نازایی. مراقبت کامل از سلامت بانوان در تمام مراحل زندگی.
          </p>
          <a href="#appointment"><button className="inline-block relative z-10 bg-blue-300 text-white px-6 py-3 hover:bg-blue-400 border-2 rounded-2xl border-black border-dashed cursor-pointer">
            نوبت‌گیری
          </button></a>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 relative">
        <div>
        <img
          src="./image.png"
          alt=""
          className="
            absolute inset-0
            w-full h-full
            object-cover
            z-0
            rounded-[60px]
            opacity-0 in-hover:opacity-80
            transition-transform duration-700 ease-in-out
            border-3 border-dashed border-black
          "
      />
          <img
            src="./doctor-photo.jpg"
            alt="دکتر المیرا سنجری"
            className="relative opacity-100 z-10 px-6 rounded-[60px] hover:translate-y-20 hover:translate-x-70 transition-transform duration-700 ease-in-out border-dashed border-black border-3 hover:border-dotted"
          />
        </div>
        </div>
      </section>

      </section>
      {/* <section id="home" className="flex flex-col md:flex-row items-center justify-between p-10 bg-white">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">دکتر المیرا سنجری</h2>
          <p className="mb-6">
            متخصص زنان، زایمان و نازایی. مراقبت کامل از سلامت بانوان در تمام مراحل زندگی.
          </p>
          <a href="#appointment"><button className="bg-blue-300 text-white px-6 py-3 rounded hover:bg-blue-400">
            نوبت‌گیری
          </button></a>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src="./doctor-photo.jpg"
            alt="دکتر المیرا سنجری"
            className="rounded-4xl shadow-2xl"
          />
        </div>
      </section> */}

      {/* Services Section */}
      <section id="services" className="p-10 bg-[#b3c2f3] duration-100">
        <h3 className="text-3xl font-bold mb-6 text-center">خدمات ما</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-pink-100 p-6 rounded-lg shadow hover:scale-105 transition">
            <h4 className="font-semibold mb-2 ">مراقبت بارداری</h4>
            <p>چکاپ کامل و مراقبت‌های دوران بارداری برای سلامت مادر و جنین.</p>
          </div>
          <div className="bg-pink-100 p-6 rounded-lg shadow hover:scale-105 transition">
            <h4 className="font-semibold mb-2 ">زایمان طبیعی و سزارین</h4>
            <p>تجربه امن و حرفه‌ای برای زایمان مادران عزیز.</p>
          </div>
          <div className="bg-pink-100 p-6 rounded-lg shadow hover:scale-105 transition">
            <h4 className="font-semibold mb-2">درمان نازایی</h4>
            <p>راهکارهای تخصصی و علمی برای درمان مشکلات باروری.</p>
          </div>
          <div className="bg-pink-100 p-6 rounded-lg shadow hover:scale-105 transition">
            <h4 className="font-semibold mb-2">چکاپ سلامت بانوان</h4>
            <p>پایش دوره‌ای و مشاوره سلامت برای زنان در هر سن.</p>
          </div>
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

      {/* About us*/}
      <section id="about" className="bg-[#bdabf1] py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6 text-center">درباره ما</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* متن */}
            <div>
              <p className="mb-4 leading-relaxed text-justify text-xl">دکتر <strong>المیرا سنجری</strong>، متخصص زنان، زایمان و نازایی، با سال‌ها تجربهٔ بالینی و تعهدی عمیق به سلامت زنان، معتقد است پزشکی خوب فراتر از درمان علائم است؛ پزشکی، شنیدنِ نگرانی‌ها، همراهیِ قلبی و دادنِ امیدِ معنادار است.</p>

              <p className="mb-4 leading-relaxed text-justify text-xl">در مطب دکتر سنجری هر بیمار یک انسانِ کامل است — نه صرفاً یک پرونده. تیم ما با رویکردی فردمحور، برنامه‌های درمانی را مطابق نیاز و شرایط هر خانم طراحی می‌کند تا مسیر سلامت، بارداری یا بهبود، با آرامش و اطمینان طی شود.</p>

              <p className="mb-4 leading-relaxed text-justify text-xl">خدمات ما شامل مراقبت‌های پیش از بارداری، مراقبت‌های دوران بارداری، مدیریت مشکلات باروری، مشاوره‌های بهداشتی و جراحی‌های تخصصی است. آنچه مراجعین را بازمی‌گرداند، مهارتِ علمی همراه با اخلاقِ انسانی و احترامی است که در همه مراحل فراهم می‌شود.</p>

              <p className="font-medium text-xl">ماموریت ما: ساختن فضایی امن، آگاه‌کننده و همدلانه برای هر زن تا بتواند با اعتماد و آگاهی کامل دربارهٔ سلامت خود تصمیم بگیرد.</p>
            </div>

            {/* کارت پروفایل کوچک */}
            <div className="bg-gray-50 p-6 rounded-lg shadow flex flex-col items-center gap-5">
              <img src="./doctor-photo.jpg" alt="دکتر المیرا سنجری" className="w-40 h-40 rounded-full object-cover shadow mb-4" />
              <h4 className="text-xl font-semibold mb-1">دکتر المیرا سنجری</h4>
              <p className="text-sm mb-3">متخصص زنان و زایمان، نازایی</p>
              <ul className="text-sm list-disc pl-5 self-start">
                <li>متخصص از دانشگاه معتبر</li>
                <li>سابقهٔ چندساله در مراقبت دوران بارداری و درمان نازایی</li>
                <li>رویکردی فردمحور و مبتنی بر شواهد</li>
              </ul>
              <a href="#appointment" className="mt-4 w-full"><button className="bg-blue-300 text-white px-4 py-2 rounded w-full hover:bg-blue-400">رزرو نوبت</button></a>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
<form
  id="appointment"
  onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; // Type-safe
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const date = (form.elements.namedItem("date") as HTMLInputElement).value;
    const time = (form.elements.namedItem("time") as HTMLInputElement).value || '';
    const city = (form.elements.namedItem("city") as HTMLSelectElement).value;

    const res = await fetch('/api/appointment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, date, time, city })
    });

    const data = await res.json();
    if (data.ok) {
      alert(`نوبت شما با موفقیت ثبت شد ✓`);
      form.reset();
    } else {
      alert('خطا در ثبت نوبت، لطفاً دوباره تلاش کنید.');
    }
  }}
  className="bg-white p-6 rounded shadow space-y-4"
>
  <input name="name" type="text" placeholder="نام و نام خانوادگی" required className="w-full p-3 border rounded" />
  <input name="phone" type="tel" placeholder="شماره تماس" required className="w-full p-3 border rounded" />
  <input name="date" type="date" required className="w-full p-3 border rounded" />
  <input name="time" type="time" className="w-full p-3 border rounded" />

  <select name="city" required className="w-full p-3 border rounded">
    <option value="">انتخاب شهر</option>
    <option value="مغان">مغان</option>
    <option value="تهران">تهران</option>
  </select>

  <button type="submit" className="bg-blue-300 text-white px-6 py-3 rounded w-full hover:bg-blue-400">ارسال درخواست</button>
</form>



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
