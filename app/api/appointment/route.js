import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    
    const { name, phone, date, time, city } = body;

    const text = `
✨ نوبت جدید رزرو شد

👤 نام: ${name}
📞 شماره: ${phone}
📅 تاریخ: ${date}
⏰ ساعت: ${time || '-'}
🏙️ شهر: ${city}
    `;

    // تنظیمات SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // برای جیمیل
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // ایمیل شما
        pass: process.env.EMAIL_PASS, // پسورد یا App Password
      },
    });

    // ایمیل ارسال
    await transporter.sendMail({
      from: `"رزرو نوبت" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER, // ایمیلی که میخوای پیام بره
      subject: "نوبت جدید رزرو شد",
      text: text,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error(err);
    return Response.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
