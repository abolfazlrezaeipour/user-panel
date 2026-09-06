import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Bell, Heart, ShoppingCart, UserRound, Home, Package, MapPin, Tag,
  Headphones, LogOut, Scale, Menu, Search, ChevronLeft, ChevronDown,
  Gift, WalletCards, Copy, Check, Pencil, Plus, Trash2, X, ArrowLeft,
  CreditCard, ShieldCheck, Clock3, Truck, RotateCcw, Star, Settings,
  HelpCircle, Sparkles, Eye, EyeOff, Smartphone, Mail, LockKeyhole,
  MoreVertical, CircleUserRound, Camera, Save, Minus, ExternalLink
} from "lucide-react";
import "./styles.css";

const products = [
  { id: 1, title: "هدفون سونی WH-1000XM5", price: "۳,۴۵۰,۰۰۰", old: "۳,۹۹۰,۰۰۰", badge: "٪۱۴", emoji: "🎧" },
  { id: 2, title: "گوشی سامسونگ Galaxy S25", price: "۵۸,۹۰۰,۰۰۰", old: "۶۲,۰۰۰,۰۰۰", badge: "٪۵", emoji: "📱" },
  { id: 3, title: "لپ‌تاپ ایسوس Vivobook", price: "۴۲,۰۰۰,۰۰۰", old: "۴۵,۵۰۰,۰۰۰", badge: "٪۸", emoji: "💻" },
  { id: 4, title: "کفش ورزشی Nike Air", price: "۵,۶۸۰,۰۰۰", old: "۶,۳۰۰,۰۰۰", badge: "٪۱۰", emoji: "👟" },
  { id: 5, title: "ساعت هوشمند Apple Watch", price: "۲۱,۸۰۰,۰۰۰", old: "۲۳,۵۰۰,۰۰۰", badge: "٪۷", emoji: "⌚" },
  { id: 6, title: "کیف چرمی دست‌دوز", price: "۲,۴۸۰,۰۰۰", old: "۲,۹۰۰,۰۰۰", badge: "٪۱۵", emoji: "👜" },
];

const orders = [
  { id: "#۳۶۵۷", date: "۱۴۰۵/۰۸/۲۴", amount: "۱,۲۴۵,۰۰۰ تومان", status: "تحویل شده", cls: "success", item: "🎧", title: "هدفون سونی" },
  { id: "#۳۶۵۶", date: "۱۴۰۵/۰۸/۲۲", amount: "۸۹۰,۰۰۰ تومان", status: "در حال پردازش", cls: "warning", item: "👟", title: "کفش ورزشی" },
  { id: "#۳۶۵۲", date: "۱۴۰۵/۰۸/۱۸", amount: "۵۶۰,۰۰۰ تومان", status: "لغو شده", cls: "muted", item: "👜", title: "کیف چرمی" },
];


const en = {
  "فروشگاهینو":"Shopino", "حساب کاربری":"Account", "عضو ویژه فروشگاه":"VIP member","تومان":"Toman",
  "داشبورد":"Dashboard", "سفارش‌های من":"My Orders", "علاقه‌مندی‌ها":"Favorites", "لیست مقایسه":"Compare List", "آدرس‌های من":"My Addresses", "اطلاعات حساب":"Account Information", "کدهای تخفیف":"Coupons", "پشتیبانی":"Support", "تنظیمات":"Settings", "خروج از حساب":"Log out",
  "کمکی لازم دارید؟":"Need help?", "پشتیبانی همه‌روزه از ۹ تا ۲۴":"Support every day, 9 AM–12 AM", "ارتباط با پشتیبانی":"Contact support", "جستجو در فروشگاه...":"Search the store...",
  "پنل اختصاصی شما":"Your personal dashboard", "سلام ابوالفضل رضائی پور":"Hi Abolfazl Rezaeipour", "خوشحالیم که دوباره به فروشگاه ما سر زدی. اینجا همه‌چیز در دسترس توست.":"Welcome back. Everything you need is right here.",
  "یک هدیه برای شما":"A gift for you", "۵۰۰ هزار تومان تخفیف ویژه":"500,000 Toman special discount", "امتیاز وفاداری":"Loyalty points", "سفارش ثبت‌شده":"Orders placed", "سبد خرید":"Cart", "آخرین سفارش‌ها":"Latest orders", "مشاهده همه":"View all", "اطلاعات حساب کاربری":"Account information", "ویرایش اطلاعات":"Edit information", "کیف پول من":"My wallet", "قابل استفاده برای خرید بعدی":"Available for your next purchase", "افزایش موجودی":"Add funds", "کدهای تخفیف من":"My coupons", "افزودن آدرس":"Add address", "پیش‌فرض":"Default", "محصولات مورد علاقه":"Favorite products", "پیشنهادهای مخصوص ابوالفضل":"Recommendations for Abolfazl", "بروزرسانی":"Refresh", "جشنواره ویژه اعضای باشگاه":"Special members festival", "تا ۵۰٪ تخفیف برای خرید بعدی شما":"Up to 50% off your next purchase", "تخفیف‌های اختصاصی هر هفته فعال می‌شوند.":"Exclusive discounts are activated every week.", "مشاهده پیشنهادها":"View offers",
  "سوابق و وضعیت تمام خریدهای شما را از اینجا مدیریت کنید.":"Manage your complete order history and status here.", "دانلود فاکتور":"Download invoice", "کل سفارش‌ها":"All orders", "در حال پردازش":"Processing", "تحویل شده":"Delivered", "لغو شده":"Cancelled", "مرجوعی":"Returns", "تاریخچه سفارش‌ها":"Order history", "سفارش":"Order", "تاریخ":"Date", "مبلغ":"Amount", "وضعیت":"Status", "فیلتر":"Filter", "نمایش همه سفارش‌ها":"Show all orders", "نمایش کمتر":"Show less",
  "محصولات مورد نظر خود را کنار هم قرار دهید و بهترین گزینه را انتخاب کنید.":"Compare your selected products side by side and choose the best option.", "لیست مقایسه شما خالی است":"Your compare list is empty", "از صفحه محصولات، روی گزینه «مقایسه» بزنید تا کالاها را با هم مقایسه کنید.":"From the products page, choose Compare to compare items side by side.", "مشاهده محصولات":"View products", "پاک کردن همه":"Clear all", "فقط تفاوت‌ها":"Differences only", "فعال":"Active", "نمایش جزئیات کامل":"Show full details", "نمایش خلاصه":"Show summary", "مرتب‌سازی":"Sort", "پیشنهاد برتر":"Best choice", "کمترین قیمت":"Lowest price", "مقایسه مشخصات":"Compare specifications", "ویژگی‌های مهم محصولات":"Key product features", "برند":"Brand", "دسته‌بندی":"Category", "امتیاز کاربران":"User rating", "تعداد نظرات":"Reviews", "وضعیت موجودی":"Stock status", "گارانتی":"Warranty", "عمر باتری":"Battery life", "نوع اتصال":"Connection", "حذف نویز":"Noise cancellation", "وزن":"Weight", "رنگ":"Color", "ارسال":"Shipping", "افزودن به سبد":"Add to cart", "موجود در انبار":"In stock", "تنها ۲ عدد باقی مانده":"Only 2 left", "ارسال رایگان":"Free shipping", "راهنمای انتخاب:":"Selection guide:", "حذف نویز فعال":"Active noise cancellation", "حذف نویز تطبیقی":"Adaptive noise cancellation", "هدفون بی‌سیم":"Wireless headphones", "مشکی":"Black", "سفید":"White", "نقره‌ای":"Silver", "۱۸ ماه گارانتی":"18-month warranty", "۱۲ ماه گارانتی":"12-month warranty", "۲۴ ماه گارانتی":"24-month warranty",
  "هدفون سونی WH-1000XM5":"Sony WH-1000XM5 Headphones", "گوشی سامسونگ Galaxy S25":"Samsung Galaxy S25", "لپ‌تاپ ایسوس Vivobook":"ASUS Vivobook Laptop", "کفش ورزشی Nike Air":"Nike Air Sports Shoes", "ساعت هوشمند Apple Watch":"Apple Watch", "کیف چرمی دست‌دوز":"Handmade Leather Bag", "هدفون سونی":"Sony Headphones", "کفش ورزشی":"Sports Shoes", "کیف چرمی":"Leather Bag", "هدفون Bose QuietComfort":"Bose QuietComfort Headphones", "Apple AirPods Max":"Apple AirPods Max", "JBL Tour One M2":"JBL Tour One M2",
  "کدهای اختصاصی و تخفیف‌های فعال حساب شما":"Your exclusive and active account discounts", "کد تخفیف دارید؟":"Have a discount code?", "اعمال کد":"Apply code", "تخفیف برای اولین خرید":"First purchase discount", "تخفیف ویژه تابستان":"Summer special discount", "تخفیف اعضای ویژه":"VIP member discount", "اعتبار تا ۳۰ شهریور ۱۴۰۵":"Valid until Sep 21, 2026", "۵۰۰ هزار تومان تخفیف":"500,000 Toman discount", "٪۲۰ تخفیف":"20% discount", "خرید بالای ۵ میلیون تومان":"Purchases over 5,000,000 Toman", "خرید بالای ۱۰ میلیون تومان":"Purchases over 10,000,000 Toman", "حداقل خرید: ۵,۰۰۰,۰۰۰ تومان":"Minimum purchase: 5,000,000 Toman", "حداقل خرید: ۱۰,۰۰۰,۰۰۰ تومان":"Minimum purchase: 10,000,000 Toman", "بدون محدودیت دسته‌بندی":"No category restriction", "کد تخفیف":"Discount code",
  "آدرس‌های ارسال سفارش خود را مدیریت کنید.":"Manage your delivery addresses.", "افزودن آدرس جدید":"Add new address", "آدرس پیش‌فرض":"Default address", "محل کار":"Work", "ویرایش":"Edit", "حذف":"Delete", "ویرایش آدرس":"Edit address", "عنوان آدرس":"Address title", "آدرس کامل":"Full address", "شماره تماس":"Phone number", "ذخیره آدرس":"Save address", "مثلاً منزل":"e.g. Home", "استان، شهر، خیابان، پلاک...":"Province, city, street, building number...", "عنوان و آدرس را وارد کنید":"Enter a title and address",
  "اطلاعات شخصی و امنیت حساب کاربری خود را مدیریت کنید.":"Manage your personal information and account security.", "اطلاعات شخصی":"Personal information", "نام و نام خانوادگی":"Full name", "شماره موبایل":"Mobile number", "ایمیل":"Email", "تاریخ تولد":"Date of birth", "تغییر تصویر":"Change photo", "ذخیره تغییرات":"Save changes", "امنیت حساب":"Account security", "رمز عبور":"Password", "تغییر رمز":"Change password", "تأیید دو مرحله‌ای":"Two-factor authentication", "اعلان‌های ایمیلی":"Email notifications", "آخرین تغییر: ۲ ماه پیش":"Last changed: 2 months ago", "امنیت بیشتر برای ورود به حساب":"Extra security for account login", "دریافت خبرهای سفارش و تخفیف":"Receive order and discount updates",
  "تیم پشتیبانی در تمام مراحل خرید کنار شماست.":"Our support team is here throughout your purchase.", "چطور می‌تونیم کمکتون کنیم؟":"How can we help?", "سوالات متداول":"Frequently asked questions", "ایجاد درخواست پشتیبانی":"Create support request", "سوالات متداول را ببینید یا مستقیماً با کارشناسان ما گفتگو کنید.":"View frequently asked questions or chat directly with our experts.", "چطور سفارشم را پیگیری کنم؟":"How can I track my order?", "شرایط بازگشت کالا چیست؟":"What is the return policy?", "چگونه کد تخفیف استفاده کنم؟":"How do I use a discount code?", "چه روش‌هایی برای پرداخت وجود دارد؟":"What payment methods are available?",
  "تنظیمات": "Settings", "ظاهر، اعلان‌ها، حریم خصوصی و امنیت حساب خود را مدیریت کنید.":"Manage appearance, notifications, privacy and account security.", "تنظیمات عمومی":"General settings", "زبان پنل":"Panel language", "زبان نمایش اطلاعات حساب و فروشگاه":"Language used across your account and store", "ظاهر پنل":"Panel appearance", "ظاهر مورد علاقه خود را انتخاب کنید.":"Choose your preferred appearance.", "روشن":"Light", "تیره":"Dark", "اعلان‌ها":"Notifications", "وضعیت سفارش":"Order status", "ایمیل سفارش‌ها":"Order emails", "پیشنهادها و تخفیف‌ها":"Offers and discounts", "خبرنامه فروشگاه":"Store newsletter", "حریم خصوصی":"Privacy", "شخصی‌سازی پیشنهادها":"Personalized offers", "نمایش فعالیت حساب":"Account activity visibility", "امنیت و ورود":"Security & login", "هشدار ورود جدید":"New login alerts", "خروج از همه دستگاه‌ها":"Log out all devices", "خروج از همه":"Log out all", "ذخیره تنظیمات":"Save settings", "ذخیره شد":"Saved", "حذف حساب کاربری":"Delete account", "درخواست حذف حساب":"Request account deletion", "تغییر وضعیت سفارش از طریق پیامک و اعلان":"Get order status changes by SMS and notifications", "فاکتور، پرداخت و وضعیت ارسال به ایمیل شما ارسال شود":"Send invoices, payment and shipping updates to your email", "اعلان تخفیف‌ها و کمپین‌های ویژه را دریافت کنید":"Receive discount and special campaign notifications", "پیشنهادهای هفتگی و محصولات جدید از طریق ایمیل":"Receive weekly offers and new products by email", "استفاده از سابقه خرید برای نمایش پیشنهادهای مرتبط‌تر":"Use purchase history to show more relevant offers", "فعالیت خرید شما برای کاربران دیگر نمایش داده نشود":"Do not show your purchase activity to other users", "برای ورودهای جدید یک مرحله امنیتی اضافه شود":"Add an extra security step for new logins", "در صورت ورود از دستگاه جدید به شما اطلاع می‌دهیم":"Notify you when a new device signs in", "برای حفظ امنیت، رمز عبور خود را مرتب تغییر دهید.":"Change your password regularly to keep your account secure.", "تمام نشست‌های فعال حساب شما بسته می‌شوند.":"All active account sessions will be closed.", "امنیت":"Security", "حساب شما وضعیت امنیتی خوبی دارد.":"Your account has a good security status.", "۸۵٪ ایمن":"85% secure", "تأیید ایمیل":"Email verified", "شماره موبایل":"Mobile number", "رمز عبور امن":"Secure password", "این عملیات دائمی است و اطلاعات حساب و سوابق شما را حذف می‌کند.":"This action is permanent and will delete your account data and history.",
  "تهران، خیابان ولیعصر، پلاک ۱۲۳، طبقه ۴":"Tehran, Valiasr St., No. 123, Floor 4", "تهران، میدان ونک، خیابان ملاصدرا، پلاک ۸۸":"Tehran, Vanak Sq., Molla Sadra St., No. 88", "مثلاً WELCOME50":"e.g. WELCOME50", "۰۹۱۲...":"0912..."
};

const faFromEn = Object.fromEntries(Object.entries(en).map(([fa, english]) => [english, fa]));
let translationObserver = null;

function translateText(value, language) {
  let text = value;
  const map = language === "en" ? en : faFromEn;
  const exact = map[text.trim()];
  if (exact) return text.replace(text.trim(), exact);

  if (language === "en") {
    text = text.replace(/مقایسه (\d+) محصول انتخاب‌شده برای یک تصمیم بهتر\./g, "Compare $1 selected products for a better decision.");
    text = text.replace(/(\d+) محصول/g, "$1 products");
    text = text.replace(/کد (\w+) کپی شد/g, "Code $1 copied");
    text = text.replace(/جزئیات سفارش (#[۰-۹]+)/g, "Order details $1");
    text = text.replace(/جزئیات (#[۰-۹]+)/g, "Details $1");
    text = text.replace(/شماره سفارش: /g, "Order number: ");
    text = text.replace(/(.*?) به سبد خرید اضافه شد/g, "$1 added to cart");
    text = text.replace(/ تومان/g, " Toman");
    text = text.replace(/ گرم/g, " g");
    text = text.replace(/ ساعت/g, " hours");
    text = text.replace(/ ماه گارانتی/g, "-month warranty");
    text = text.replace(/ محصول/g, " products");
    text = text.replace(/عضو از شهریور ۱۴۰۵/g, "Member since September 2026");
    text = text.replace(/\+۱۲٪ این ماه/g, "+12% this month");
    text = text.replace(/۲ سفارش در انتظار/g, "2 orders pending");
    text = text.replace(/مشاهده سبد/g, "View cart");
    text = text.replace(/۳ مورد تخفیف خورده/g, "3 discounted items");
    text = text.replace(/محصولی با این عبارت پیدا نشد\./g, "No products found for this search.");
    text = text.replace(/تا ۵۰٪ تخفیف/g, "Up to 50% off");
    text = text.replace(/محصول از لیست مقایسه حذف شد/g, "Product removed from compare list");
    text = text.replace(/لیست مقایسه پاک شد/g, "Compare list cleared");
    text = text.replace(/عملیات انجام شد/g, "Operation completed");
    text = text.replace(/لیست پیشنهادها بروزرسانی شد/g, "Recommendations updated");
    text = text.replace(/به علاقه‌مندی‌ها اضافه شد/g, "Added to favorites");
    text = text.replace(/از علاقه‌مندی‌ها حذف شد/g, "Removed from favorites");
    text = text.replace(/افزایش موجودی در نسخه نمایشی/g, "Add funds is disabled in this demo");
    text = text.replace(/برای حذف حساب ابتدا درخواست پشتیبانی ثبت کنید/g, "Please create a support request before deleting your account");
    text = text.replace(/لینک تغییر رمز(?: عبور)? ارسال شد/g, "Password change link sent");
    text = text.replace(/از سایر دستگاه‌ها خارج شدید/g, "You were logged out of other devices");
    text = text.replace(/تیکت جدید ایجاد شد/g, "New support ticket created");
    text = text.replace(/فیلتر سفارش‌ها/g, "Order filters");
    text = text.replace(/امکان دریافت فاکتور فعال شد/g, "Invoice download enabled");
    text = text.replace(/رفتن به فروشگاه/g, "Go to store");
    text = text.replace(/خروج از حساب در این نمونه غیرفعال است/g, "Log out is disabled in this demo");
  } else {
    for (const [english, fa] of Object.entries(faFromEn)) {
      if (text.includes(english)) text = text.split(english).join(fa);
    }
    text = text.replace(/Compare (\d+) selected products for a better decision\./g, "مقایسه $1 محصول انتخاب‌شده برای یک تصمیم بهتر.");
    text = text.replace(/(\d+) products/g, "$1 محصول");
    text = text.replace(/Code (\w+) copied/g, "کد $1 کپی شد");
    text = text.replace(/Order details (#[0-9۰-۹]+)/g, "جزئیات سفارش $1");
    text = text.replace(/Details (#[0-9۰-۹]+)/g, "جزئیات $1");
    text = text.replace(/Order number: /g, "شماره سفارش: ");
    text = text.replace(/(.+) added to cart/g, "$1 به سبد خرید اضافه شد");
    text = text.replace(/ Toman/g, " تومان");
    text = text.replace(/ g/g, " گرم");
    text = text.replace(/ hours/g, " ساعت");
    text = text.replace(/-month warranty/g, " ماه گارانتی");
    text = text.replace(/ products/g, " محصول");
    text = text.replace(/Member since September 2026/g, "عضو از شهریور ۱۴۰۵");
    text = text.replace(/\+12% this month/g, "+۱۲٪ این ماه");
    text = text.replace(/2 orders pending/g, "۲ سفارش در انتظار");
    text = text.replace(/View cart/g, "مشاهده سبد");
    text = text.replace(/3 discounted items/g, "۳ مورد تخفیف خورده");
    text = text.replace(/No products found for this search\./g, "محصولی با این عبارت پیدا نشد.");
    text = text.replace(/Up to 50% off/g, "تا ۵۰٪ تخفیف");
  }
  return text;
}

function translatePage(language) {
  document.documentElement.lang = language === "en" ? "en" : "fa";
  document.documentElement.dir = language === "en" ? "ltr" : "rtl";
  document.body.dir = document.documentElement.dir;

  if (translationObserver) translationObserver.disconnect();
  const apply = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.parentElement?.closest("script,style")) continue;
      nodes.push(node);
    }
    nodes.forEach(node => {
      const next = translateText(node.nodeValue, language);
      if (next !== node.nodeValue) node.nodeValue = next;
    });
    document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach(el => {
      const original = el.getAttribute("data-i18n-placeholder") || el.getAttribute("placeholder");
      if (!el.getAttribute("data-i18n-placeholder")) el.setAttribute("data-i18n-placeholder", original);
      const next = translateText(original, language);
      if (next) el.setAttribute("placeholder", next);
    });
    document.querySelectorAll("[aria-label]").forEach(el => {
      const original = el.getAttribute("data-i18n-aria") || el.getAttribute("aria-label");
      if (!el.getAttribute("data-i18n-aria")) el.setAttribute("data-i18n-aria", original);
      el.setAttribute("aria-label", translateText(original, language));
    });
  };
  apply();
  translationObserver = new MutationObserver(() => {
    translationObserver.disconnect();
    apply();
    translationObserver.observe(document.body, { childList: true, subtree: true, characterData: true });
  });
  translationObserver.observe(document.body, { childList: true, subtree: true, characterData: true });
}

const initialAddresses = [
  { id: 1, title: "آدرس پیش‌فرض", text: "تهران، خیابان ولیعصر، پلاک ۱۲۳، طبقه ۴", phone: "۰۹۱۲ ۱۲۳ ۴۵۶۷" },
  { id: 2, title: "محل کار", text: "تهران، میدان ونک، خیابان ملاصدرا، پلاک ۸۸", phone: "۰۲۱ ۸۸۷۷ ۶۶۵۵" },
];

function App() {
  const [active, setActive] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [coupon, setCoupon] = useState("");
  const [copied, setCopied] = useState("");
  const [toast, setToast] = useState("");
  const [addresses, setAddresses] = useState(initialAddresses);
  const [showAddress, setShowAddress] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [showAllOrders, setShowAllOrders] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("account-theme") || "light");
  const [language, setLanguage] = useState(() => localStorage.getItem("account-language") || "fa");

  useEffect(() => {
    translatePage(language);
    document.title = language === "en" ? "Account Dashboard | Online Store" : "حساب کاربری | فروشگاه آنلاین";
  }, [language, active]);

  const notify = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2400);
  };

  const copyCode = (code) => {
    navigator.clipboard?.writeText(code);
    setCopied(code);
    notify(`کد ${code} کپی شد`);
    setTimeout(() => setCopied(""), 1600);
  };

  const filteredProducts = useMemo(
    () => products.filter(p => p.title.includes(search.trim())),
    [search]
  );

  const nav = [
    { key: "dashboard", label: "داشبورد", icon: Home },
    { key: "orders", label: "سفارش‌های من", icon: Package },
    { key: "favorites", label: "علاقه‌مندی‌ها", icon: Heart, count: 12 },
    { key: "compare", label: "لیست مقایسه", icon: Scale },
    { key: "addresses", label: "آدرس‌های من", icon: MapPin },
    { key: "profile", label: "اطلاعات حساب", icon: UserRound },
    { key: "coupons", label: "کدهای تخفیف", icon: Tag },
    { key: "support", label: "پشتیبانی", icon: Headphones },
  ];

  const title = nav.find(x => x.key === active)?.label || "داشبورد";

  return (
    <div className={`app ${theme === "dark" ? "dark" : ""}`}>
      <header className="topbar">
        <div className="topbar-right">
          <button className="icon-btn mobile-menu" onClick={() => setSidebarOpen(true)}><Menu /></button>
          <div className="brand"><span className="brand-mark"><ShoppingCart size={21}/></span><span>فروشگاهینو</span></div>
          <div className="search">
            <Search size={19}/>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="جستجو در فروشگاه..." />
            {search && <button onClick={() => setSearch("")}><X size={16}/></button>}
          </div>
        </div>
        <div className="topbar-left">
          <button className="icon-btn badge-icon"><Bell size={21}/><i>۳</i></button>
          <button className="icon-btn"><Heart size={21}/></button>
          <button className="icon-btn cart-icon"><ShoppingCart size={21}/><i>۲</i></button>
          <div className="user-mini">
            <div className="avatar small">ا</div>
            <div><b>ابوالفضل رضائی پور</b><span>حساب کاربری</span></div>
            <ChevronDown size={15}/>
          </div>
        </div>
      </header>

      <div className="layout">
        <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <div className="sidebar-head">
            <div className="avatar">ا</div>
            <div><strong>ابوالفضل رضائی پور</strong><small>عضو ویژه فروشگاه</small></div>
            <button className="icon-btn close-mobile" onClick={() => setSidebarOpen(false)}><X /></button>
          </div>

          <div className="sidebar-label">حساب کاربری</div>
          <nav>
            {nav.map(({key,label,icon:Icon,count}) => (
              <button key={key} className={`nav-item ${active === key ? "active" : ""}`} onClick={() => {setActive(key);setSidebarOpen(false)}}>
                <Icon size={20}/><span>{label}</span>{count && <em>{count}</em>}
              </button>
            ))}
          </nav>

          <div className="sidebar-divider"/>
          <button className={`nav-item ${active === "settings" ? "active" : ""}`} onClick={() => {setActive("settings");setSidebarOpen(false)}}><Settings size={20}/><span>تنظیمات</span></button>
          <button className="nav-item logout" onClick={() => notify("خروج از حساب در این نمونه غیرفعال است")}><LogOut size={20}/><span>خروج از حساب</span></button>

          <div className="support-mini">
            <div className="support-icon"><Headphones size={22}/></div>
            <b>کمکی لازم دارید؟</b>
            <span>پشتیبانی همه‌روزه از ۹ تا ۲۴</span>
            <button onClick={() => setActive("support")}>ارتباط با پشتیبانی <ArrowLeft size={15}/></button>
          </div>
        </aside>

        {sidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)}/>}

        <main className="content">
          {active !== "dashboard" ? (
            <Page
              title={title}
              active={active}
              theme={theme}
              onThemeChange={(next) => { setTheme(next); localStorage.setItem("account-theme", next); }}
              language={language}
              onLanguageChange={(next) => { setLanguage(next); localStorage.setItem("account-language", next); }}
              addresses={addresses}
              setAddresses={setAddresses}
              showAddress={showAddress}
              setShowAddress={setShowAddress}
              editingAddress={editingAddress}
              setEditingAddress={setEditingAddress}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              notify={notify}
              copyCode={copyCode}
              copied={copied}
              showAllOrders={showAllOrders}
              setShowAllOrders={setShowAllOrders}
            />
          ) : (
            <>
              <section className="welcome-row">
                <div>
                  <span className="eyebrow"><Sparkles size={15}/> پنل اختصاصی شما</span>
                  <h1>سلام ابوالفضل رضائی پور <span>👋</span></h1>
                  <p>خوشحالیم که دوباره به فروشگاه ما سر زدی. اینجا همه‌چیز در دسترس توست.</p>
                </div>
                <div className="gift-card">
                  <div className="gift-icon"><Gift/></div>
                  <div><b>یک هدیه برای شما</b><span>۵۰۰ هزار تومان تخفیف ویژه</span></div>
                  <button onClick={() => copyCode("WELCOME50")}>{copied === "WELCOME50" ? <Check/> : <Copy/>} WELCOME50</button>
                </div>
              </section>

              <section className="stats">
                <Stat icon={<WalletCards/>} label="امتیاز وفاداری" value="۳۵۰" hint="+۱۲٪ این ماه" type="gold"/>
                <Stat icon={<Package/>} label="سفارش ثبت‌شده" value="۸" hint="۲ سفارش در انتظار" type="blue"/>
                <Stat icon={<ShoppingCart/>} label="سبد خرید" value="۵" hint="مشاهده سبد" type="green"/>
                <Stat icon={<Heart/>} label="علاقه‌مندی‌ها" value="۱۲" hint="۳ مورد تخفیف خورده" type="pink"/>
              </section>

              <section className="grid-main">
                <div className="orders card">
                  <CardHead title="آخرین سفارش‌ها" icon={<Package/>} action={<button onClick={() => setActive("orders")}>مشاهده همه <ArrowLeft size={15}/></button>}/>
                  <div className="order-list">
                    {orders.map(o => <OrderRow key={o.id} order={o} onClick={() => notify(`جزئیات سفارش ${o.id}`)}/>)}
                  </div>
                </div>

                <div className="profile-card card">
                  <CardHead title="اطلاعات حساب کاربری" icon={<UserRound/>}/>
                  <div className="profile-info">
                    <div className="avatar large">ا</div>
                    <div><h3>ابوالفضل رضائی پور</h3><span>abolfazl@example.com</span><small>عضو از شهریور ۱۴۰۵</small></div>
                  </div>
                  <button className="outline-btn full" onClick={() => setActive("profile")}><Pencil size={16}/> ویرایش اطلاعات</button>
                </div>

                <div className="wallet-card">
                  <div className="wallet-top"><span>کیف پول من</span><WalletCards size={21}/></div>
                  <strong>۲۵۰,۰۰۰ <small>تومان</small></strong>
                  <div className="wallet-bottom"><span>قابل استفاده برای خرید بعدی</span><button onClick={() => notify("افزایش موجودی در نسخه نمایشی")}>افزایش موجودی <Plus size={15}/></button></div>
                </div>

                <div className="coupons-card card">
                  <CardHead title="کدهای تخفیف من" icon={<Tag/>} action={<button onClick={() => setActive("coupons")}>مشاهده همه <ArrowLeft size={15}/></button>}/>
                  <Coupon code="WELCOME50" text="۵۰۰ هزار تومان تخفیف" condition="خرید بالای ۵ میلیون تومان" copied={copied} onCopy={copyCode}/>
                  <Coupon code="SUMMER20" text="٪۲۰ تخفیف" condition="خرید بالای ۱۰ میلیون تومان" copied={copied} onCopy={copyCode}/>
                </div>

                <div className="address-card card">
                  <CardHead title="آدرس‌های من" icon={<MapPin/>} action={<button onClick={() => {setActive("addresses");setShowAddress(true)}}><Plus size={15}/> افزودن آدرس</button>}/>
                  <div className="address-preview">
                    <div className="address-title"><span className="home-dot"><Home size={15}/></span><b>{addresses[0].title}</b><span className="default-pill">پیش‌فرض</span><button onClick={() => setActive("addresses")}><MoreVertical size={18}/></button></div>
                    <p>{addresses[0].text}</p>
                    <span className="muted">{addresses[0].phone}</span>
                  </div>
                </div>

                <div className="favorites card">
                  <CardHead title="محصولات مورد علاقه" icon={<Heart/>} action={<button onClick={() => setActive("favorites")}>مشاهده همه <ArrowLeft size={15}/></button>}/>
                  <div className="product-grid">
                    {products.slice(0,3).map(p => <ProductCard key={p.id} p={p} onLike={() => notify("از علاقه‌مندی‌ها حذف شد")}/>)}
                  </div>
                </div>
              </section>

              <section className="banner">
                <div className="banner-art">🎁</div>
                <div><span>جشنواره ویژه اعضای باشگاه</span><strong>تا ۵۰٪ تخفیف برای خرید بعدی شما</strong><small>تخفیف‌های اختصاصی هر هفته فعال می‌شوند.</small></div>
                <button onClick={() => setActive("coupons")}>مشاهده پیشنهادها <ArrowLeft size={16}/></button>
              </section>

              <section className="recommend card">
                <CardHead title="پیشنهادهای مخصوص ابوالفضل" icon={<Sparkles/>} action={<button onClick={() => notify("لیست پیشنهادها بروزرسانی شد")}>بروزرسانی <RotateCcw size={15}/></button>}/>
                <div className="product-grid recommendations">
                  {filteredProducts.map(p => <ProductCard key={p.id} p={p} onLike={() => notify("به علاقه‌مندی‌ها اضافه شد")} />)}
                </div>
                {!filteredProducts.length && <div className="empty">محصولی با این عبارت پیدا نشد.</div>}
              </section>
            </>
          )}
        </main>
      </div>

      {toast && <div className="toast"><Check size={18}/>{toast}</div>}
    </div>
  );
}

function Stat({icon,label,value,hint,type}) {
  return <div className={`stat ${type}`}><div className="stat-icon">{icon}</div><div><span>{label}</span><strong>{value}</strong><small>{hint}</small></div></div>
}
function CardHead({title,icon,action}) {
  return <div className="card-head"><h2>{icon}{title}</h2>{action}</div>
}
function OrderRow({order,onClick}) {
  return <button className="order-row" onClick={onClick}><span className="product-thumb">{order.item}</span><div className="order-details"><b>شماره سفارش: {order.id}</b><span>{order.title} • {order.date}</span></div><strong>{order.amount}</strong><span className={`status ${order.cls}`}>{order.status}</span><ChevronLeft size={18}/></button>
}
function Coupon({code,text,condition,copied,onCopy}) {
  return <div className="coupon"><div><b>{code}</b><span>{text}</span><small>{condition}</small></div><button onClick={() => onCopy(code)}>{copied===code ? <Check/> : <Copy/>}</button></div>
}
function ProductCard({p,onLike}) {
  return <div className="product-card"><div className="product-image"><span className="discount">{p.badge}</span><button onClick={onLike}><Heart size={17}/></button><span className="product-emoji">{p.emoji}</span></div><b>{p.title}</b><div className="stars"><Star size={13} fill="currentColor"/> ۴.۸ <span>(۱۲۴)</span></div><div className="price"><strong>{p.price}</strong><span>تومان</span><del>{p.old}</del></div></div>
}

function Page({title,active,theme,onThemeChange,language,onLanguageChange,addresses,setAddresses,showAddress,setShowAddress,editingAddress,setEditingAddress,showPassword,setShowPassword,notify,copyCode,copied,showAllOrders,setShowAllOrders}) {
  if (active === "orders") return <OrdersPage showAll={showAllOrders} setShowAll={setShowAllOrders} notify={notify}/>;
  if (active === "favorites") return <SimpleProducts title="علاقه‌مندی‌های من" subtitle="محصولاتی که برای خرید بعدی ذخیره کرده‌اید" notify={notify}/>;
  if (active === "compare") return <ComparePage notify={notify}/>;
  if (active === "coupons") return <CouponsPage copied={copied} copyCode={copyCode}/>;
  if (active === "addresses") return <AddressesPage addresses={addresses} setAddresses={setAddresses} showAddress={showAddress} setShowAddress={setShowAddress} editing={editingAddress} setEditing={setEditingAddress} notify={notify}/>;
  if (active === "profile") return <ProfilePage showPassword={showPassword} setShowPassword={setShowPassword} notify={notify}/>;
  if (active === "support") return <SupportPage notify={notify}/>;
  if (active === "settings") return <SettingsPage notify={notify} theme={theme} onThemeChange={onThemeChange} language={language} onLanguageChange={onLanguageChange}/>;
  return <SimpleProducts title={title} subtitle="این بخش در حال آماده‌سازی است" notify={notify}/>;
}

function PageShell({title,subtitle,children,action}) {
  return <><div className="page-title"><div><span className="eyebrow">حساب کاربری</span><h1>{title}</h1><p>{subtitle}</p></div>{action}</div>{children}</>;
}
function OrdersPage({showAll,setShowAll,notify}) {
  const list = showAll ? [...orders,...orders,...orders] : orders;
  return <PageShell title="سفارش‌های من" subtitle="سوابق و وضعیت تمام خریدهای شما را از اینجا مدیریت کنید." action={<button className="primary-btn" onClick={() => notify("امکان دریافت فاکتور فعال شد")}><CreditCard size={17}/> دانلود فاکتور</button>}>
    <div className="order-summary"><div><Package/><b>۸</b><span>کل سفارش‌ها</span></div><div><Truck/><b>۲</b><span>در حال پردازش</span></div><div><Check/><b>۵</b><span>تحویل شده</span></div><div><RotateCcw/><b>۱</b><span>مرجوعی</span></div></div>
    <div className="card full-table"><CardHead title="تاریخچه سفارش‌ها" icon={<Clock3/>} action={<button onClick={() => notify("فیلتر سفارش‌ها")}>فیلتر <ChevronDown size={15}/></button>}/><div className="desktop-table"><div className="table-head"><span>سفارش</span><span>تاریخ</span><span>مبلغ</span><span>وضعیت</span><span></span></div>{list.map((o,i)=><div className="table-row" key={i}><span><b>{o.id}</b><small>{o.title}</small></span><span>{o.date}</span><span>{o.amount}</span><span className={`status ${o.cls}`}>{o.status}</span><button onClick={()=>notify(`جزئیات ${o.id}`)}><Eye size={17}/></button></div>)}</div></div>
    <button className="load-more" onClick={() => setShowAll(!showAll)}>{showAll ? "نمایش کمتر" : "نمایش همه سفارش‌ها"} <ChevronDown size={17}/></button>
  </PageShell>
}
function SimpleProducts({title,subtitle,notify}) {
  return <PageShell title={title} subtitle={subtitle}><div className="card page-products"><div className="product-grid big">{products.map(p=><ProductCard key={p.id} p={p} onLike={()=>notify("عملیات انجام شد")}/>)}</div></div></PageShell>
}
function ComparePage({notify}) {
  const initial = [
    { id: 1, title: "هدفون سونی WH-1000XM5", emoji: "🎧", brand: "Sony", category: "هدفون بی‌سیم", price: "۳,۴۵۰,۰۰۰", old: "۳,۹۹۰,۰۰۰", rating: "۴.۸", reviews: "۱۲۴", stock: "موجود در انبار", warranty: "۱۸ ماه گارانتی", battery: "۳۰ ساعت", connection: "Bluetooth 5.2", noise: "حذف نویز فعال", weight: "۲۵۰ گرم", color: "مشکی", shipping: "ارسال رایگان", score: 96 },
    { id: 2, title: "هدفون Bose QuietComfort", emoji: "🎧", brand: "Bose", category: "هدفون بی‌سیم", price: "۴,۱۵۰,۰۰۰", old: "۴,۶۰۰,۰۰۰", rating: "۴.۷", reviews: "۹۸", stock: "موجود در انبار", warranty: "۱۲ ماه گارانتی", battery: "۲۴ ساعت", connection: "Bluetooth 5.1", noise: "حذف نویز فعال", weight: "۲۴۰ گرم", color: "سفید", shipping: "ارسال رایگان", score: 91 },
    { id: 3, title: "Apple AirPods Max", emoji: "🎧", brand: "Apple", category: "هدفون بی‌سیم", price: "۳۸,۹۰۰,۰۰۰", old: "۴۲,۰۰۰,۰۰۰", rating: "۴.۹", reviews: "۲۳۱", stock: "تنها ۲ عدد باقی مانده", warranty: "۱۸ ماه گارانتی", battery: "۲۰ ساعت", connection: "Bluetooth 5.0", noise: "حذف نویز فعال", weight: "۳۸۴ گرم", color: "نقره‌ای", shipping: "ارسال رایگان", score: 94 },
    { id: 4, title: "JBL Tour One M2", emoji: "🎧", brand: "JBL", category: "هدفون بی‌سیم", price: "۶,۸۹۰,۰۰۰", old: "۷,۴۰۰,۰۰۰", rating: "۴.۶", reviews: "۷۶", stock: "موجود در انبار", warranty: "۲۴ ماه گارانتی", battery: "۵۰ ساعت", connection: "Bluetooth 5.3", noise: "حذف نویز تطبیقی", weight: "۲۶۸ گرم", color: "مشکی", shipping: "ارسال رایگان", score: 89 },
  ];
  const [items, setItems] = useState(initial);
  const [selected, setSelected] = useState(0);
  const [onlyDiff, setOnlyDiff] = useState(false);
  const [sort, setSort] = useState("score");
  const [showAll, setShowAll] = useState(false);

  const remove = (id) => {
    setItems(prev => prev.filter(x => x.id !== id));
    notify("محصول از لیست مقایسه حذف شد");
  };
  const clear = () => { setItems([]); notify("لیست مقایسه پاک شد"); };
  const sorted = [...items].sort((a,b) => sort === "price" ? Number(a.price.replaceAll(',',''))-Number(b.price.replaceAll(',','')) : b.score-a.score);
  const specs = [
    ["برند", "brand"], ["دسته‌بندی", "category"], ["امتیاز کاربران", "rating"], ["تعداد نظرات", "reviews"], ["وضعیت موجودی", "stock"], ["گارانتی", "warranty"], ["عمر باتری", "battery"], ["نوع اتصال", "connection"], ["حذف نویز", "noise"], ["وزن", "weight"], ["رنگ", "color"], ["ارسال", "shipping"]
  ];
  if (!items.length) return <PageShell title="لیست مقایسه" subtitle="محصولات مورد نظر خود را کنار هم قرار دهید و بهترین گزینه را انتخاب کنید."><div className="compare-empty card"><div className="compare-empty-icon"><Scale/></div><h2>لیست مقایسه شما خالی است</h2><p>از صفحه محصولات، روی گزینه «مقایسه» بزنید تا کالاها را با هم مقایسه کنید.</p><button className="primary-btn" onClick={()=>notify("رفتن به فروشگاه")}>مشاهده محصولات <ArrowLeft size={16}/></button></div></PageShell>;

  return <PageShell title="لیست مقایسه" subtitle={`مقایسه ${items.length} محصول انتخاب‌شده برای یک تصمیم بهتر.`} action={<div className="compare-actions"><button className="outline-btn" onClick={()=>setOnlyDiff(!onlyDiff)}><Check size={15}/> فقط تفاوت‌ها {onlyDiff ? "فعال" : ""}</button><button className="danger-btn" onClick={clear}><Trash2 size={16}/> پاک کردن همه</button></div>}>
    <div className="compare-toolbar card"><div className="compare-count"><Scale/><div><b>{items.length} محصول</b><span>حداکثر ۴ محصول قابل مقایسه است</span></div></div><div className="compare-tools"><label>مرتب‌سازی<select value={sort} onChange={e=>setSort(e.target.value)}><option value="score">پیشنهاد برتر</option><option value="price">کمترین قیمت</option></select></label><button className={`switch ${showAll?"on":""}`} onClick={()=>setShowAll(!showAll)}><i/>{showAll?"نمایش جزئیات کامل":"نمایش خلاصه"}</button></div></div>

    <div className="compare-wrap card">
      <div className="compare-products" style={{gridTemplateColumns:`220px repeat(${sorted.length}, minmax(220px, 1fr))`}}>
        <div className="compare-corner"><b>مقایسه مشخصات</b><span>ویژگی‌های مهم محصولات</span></div>
        {sorted.map((p,i)=><div className={`compare-product ${i===selected?"winner": ""}`} key={p.id}>
          {i===selected && <span className="winner-badge"><Sparkles size={12}/> پیشنهاد برتر</span>}
          <button className="compare-remove" onClick={()=>remove(p.id)}><X size={16}/></button>
          <div className="compare-image">{p.emoji}</div>
          <b className="compare-product-title">{p.title}</b>
          <div className="compare-rating"><Star size={14} fill="currentColor"/> {p.rating} <span>({p.reviews})</span></div>
          <div className="compare-price"><strong>{p.price}</strong><span>تومان</span><del>{p.old}</del></div>
          <span className={`stock ${p.stock.includes("۲") ? "low" : ""}`}><Check size={12}/>{p.stock}</span>
          <button className="primary-btn compare-buy" onClick={()=>notify(`${p.title} به سبد خرید اضافه شد`)}><ShoppingCart size={15}/> افزودن به سبد</button>
        </div>)}
      </div>
      <div className="compare-specs">
        {specs.map(([label,key])=>{
          const vals=sorted.map(p=>p[key]);
          const different=new Set(vals).size>1;
          if(onlyDiff && !different) return null;
          return <div className={`compare-spec-row ${different?"different":""}`} key={key}>
            <div className="spec-label"><b>{label}</b>{different&&<span>متفاوت</span>}</div>
            {sorted.map(p=><div className="spec-value" key={p.id}>{key==="rating"?<><span className="rating-pill"><Star size={12} fill="currentColor"/>{p[key]}</span></>:p[key]}</div>)}
          </div>
        })}
        {showAll && <div className="compare-extra"><div className="spec-label"><b>امتیاز پیشنهاد</b></div>{sorted.map(p=><div className="spec-value score-cell" key={p.id}><div className="score-ring"><span>{p.score}</span></div><small>از ۱۰۰</small></div>)}</div>}
      </div>
    </div>
    <div className="compare-note"><ShieldCheck size={18}/><span><b>راهنمای انتخاب:</b> امتیاز پیشنهاد بر اساس قیمت، امتیاز کاربران، موجودی، گارانتی و امکانات محاسبه شده است.</span></div>
  </PageShell>;
}

function CouponsPage({copied,copyCode}) {
  return <PageShell title="کدهای تخفیف" subtitle="کدهای اختصاصی و تخفیف‌های فعال حساب شما"><div className="coupon-input card"><div><Tag/><b>کد تخفیف دارید؟</b><span>کد را وارد کنید تا اعتبار آن بررسی شود.</span></div><div className="input-action"><input placeholder="مثلاً WELCOME50"/><button>اعمال کد</button></div></div><div className="coupon-grid"><CouponLarge code="WELCOME50" amount="۵۰۰,۰۰۰ تومان" text="تخفیف برای اولین خرید" condition="حداقل خرید: ۵,۰۰۰,۰۰۰ تومان" onCopy={copyCode} copied={copied}/><CouponLarge code="SUMMER20" amount="٪۲۰" text="تخفیف ویژه تابستان" condition="حداقل خرید: ۱۰,۰۰۰,۰۰۰ تومان" onCopy={copyCode} copied={copied}/><CouponLarge code="VIP15" amount="٪۱۵" text="تخفیف اعضای ویژه" condition="بدون محدودیت دسته‌بندی" onCopy={copyCode} copied={copied}/></div></PageShell>
}
function CouponLarge({code,amount,text,condition,onCopy,copied}) {
  return <div className="coupon-large"><div className="coupon-large-top"><div className="coupon-large-icon"><Tag/></div><span>فعال</span></div><strong>{amount}</strong><b>{text}</b><small>{condition}</small><div className="coupon-code"><span>{code}</span><button onClick={()=>onCopy(code)}>{copied===code?<Check/>:<Copy/>}</button></div><div className="expiry">اعتبار تا ۳۰ شهریور ۱۴۰۵</div></div>
}
function AddressesPage({addresses,setAddresses,showAddress,setShowAddress,editing,setEditing,notify}) {
  const [form,setForm]=useState({title:"",text:"",phone:""});
  const openNew=()=>{setForm({title:"",text:"",phone:""});setEditing(null);setShowAddress(true)};
  const openEdit=(a)=>{setForm(a);setEditing(a.id);setShowAddress(true)};
  const save=()=>{if(!form.title||!form.text)return notify("عنوان و آدرس را وارد کنید");if(editing)setAddresses(addresses.map(a=>a.id===editing?{...form,id:editing}:a));else setAddresses([...addresses,{...form,id:Date.now()}]);setShowAddress(false);notify("آدرس با موفقیت ذخیره شد")};
  const remove=(id)=>{setAddresses(addresses.filter(a=>a.id!==id));notify("آدرس حذف شد")};
  return <PageShell title="آدرس‌های من" subtitle="آدرس‌های ارسال سفارش خود را مدیریت کنید." action={<button className="primary-btn" onClick={openNew}><Plus size={18}/> افزودن آدرس جدید</button>}><div className="address-grid">{addresses.map((a,i)=><div className={`address-box card ${i===0?"selected":""}`} key={a.id}><div className="address-box-top"><span className="home-dot"><MapPin size={17}/></span><b>{a.title}</b>{i===0&&<span className="default-pill">پیش‌فرض</span>}<button className="more-btn"><MoreVertical size={18}/></button></div><p>{a.text}</p><div className="address-phone"><Smartphone size={15}/>{a.phone}</div><div className="address-actions"><button onClick={()=>openEdit(a)}><Pencil size={15}/> ویرایش</button><button onClick={()=>remove(a.id)} className="danger"><Trash2 size={15}/> حذف</button></div></div>)}</div>{showAddress&&<div className="modal-wrap" onMouseDown={e=>e.target===e.currentTarget&&setShowAddress(false)}><div className="modal"><div className="modal-head"><h2>{editing?"ویرایش آدرس":"افزودن آدرس جدید"}</h2><button onClick={()=>setShowAddress(false)}><X/></button></div><label>عنوان آدرس<input value={form.title} onChange={e=>setForm({...form,title:e.target.value})} placeholder="مثلاً منزل"/></label><label>آدرس کامل<textarea value={form.text} onChange={e=>setForm({...form,text:e.target.value})} placeholder="استان، شهر، خیابان، پلاک..."/></label><label>شماره تماس<input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="۰۹۱۲..."/></label><button className="primary-btn full" onClick={save}><Save size={17}/> ذخیره آدرس</button></div></div>}</PageShell>
}
function ProfilePage({showPassword,setShowPassword,notify}) {
  const [saved,setSaved]=useState(false);
  return <PageShell title="اطلاعات حساب" subtitle="اطلاعات شخصی و امنیت حساب کاربری خود را مدیریت کنید."><div className="profile-layout"><div className="card profile-edit"><CardHead title="اطلاعات شخصی" icon={<UserRound/>}/><div className="profile-photo"><div className="avatar xl">ا</div><button><Camera size={15}/> تغییر تصویر</button></div><div className="form-grid"><label>نام و نام خانوادگی<input defaultValue="ابوالفضل رضائی پور"/></label><label>شماره موبایل<input defaultValue="۰۹۱۲ ۱۲۳ ۴۵۶۷"/></label><label>ایمیل<input defaultValue="abolfazl@example.com"/></label><label>تاریخ تولد<input defaultValue="۱۳۸۲/۰۵/۲۱"/></label></div><button className="primary-btn" onClick={()=>{setSaved(true);notify("اطلاعات حساب ذخیره شد");setTimeout(()=>setSaved(false),1800)}}>{saved?<Check/>:<Save/>} ذخیره تغییرات</button></div><div className="card security"><CardHead title="امنیت حساب" icon={<ShieldCheck/>}/><div className="security-row"><div><LockKeyhole/><div><b>رمز عبور</b><span>آخرین تغییر: ۲ ماه پیش</span></div></div><button onClick={()=>notify("لینک تغییر رمز ارسال شد")}>تغییر رمز</button></div><div className="security-row"><div><Smartphone/><div><b>تأیید دو مرحله‌ای</b><span>امنیت بیشتر برای ورود به حساب</span></div></div><button className="toggle on" onClick={()=>notify("تأیید دو مرحله‌ای فعال است")}><i/></button></div><div className="security-row"><div><Mail/><div><b>اعلان‌های ایمیلی</b><span>دریافت خبرهای سفارش و تخفیف</span></div></div><button className="toggle on"><i/></button></div></div></div></PageShell>
}
function SettingsPage({notify, theme, onThemeChange, language, onLanguageChange}) {
  const [settings, setSettings] = useState({
    orderSms: true,
    orderEmail: true,
    promotions: false,
    newsletter: true,
    twoFactor: true,
    loginAlert: true,
    showActivity: false,
    personalization: true,
  });
  const [saved, setSaved] = useState(false);

  const toggle = (key) => setSettings(s => ({...s, [key]: !s[key]}));
  const save = () => {
    setSaved(true);
    notify("تنظیمات با موفقیت ذخیره شد");
    setTimeout(() => setSaved(false), 1800);
  };

  return <PageShell title="تنظیمات" subtitle="ظاهر، اعلان‌ها، حریم خصوصی و امنیت حساب خود را مدیریت کنید.">
    <div className="settings-layout">
      <div className="settings-main">
        <div className="card settings-card">
          <CardHead title="تنظیمات عمومی" icon={<Settings/>}/>
          <div className="settings-section">
            <div className="setting-row">
              <div className="setting-icon"><GlobeIcon/></div>
              <div className="setting-copy"><b>زبان پنل</b><span>زبان نمایش اطلاعات حساب و فروشگاه</span></div>
              <select value={language} onChange={e=>{ onLanguageChange(e.target.value); notify(e.target.value === "en" ? "Panel language changed to English" : "زبان پنل به فارسی تغییر کرد"); }}><option value="fa">فارسی</option><option value="en">English</option></select>
            </div>
            <div className="setting-row">
              <div className="setting-icon"><Sparkles/></div>
              <div className="setting-copy"><b>ظاهر پنل</b><span>ظاهر مورد علاقه خود را انتخاب کنید.</span></div>
              <div className="theme-switch"><button className={theme==="light"?"selected":""} onClick={()=>onThemeChange("light")}>روشن</button><button className={theme==="dark"?"selected":""} onClick={()=>onThemeChange("dark")}>تیره</button></div>
            </div>
          </div>
        </div>

        <div className="card settings-card">
          <CardHead title="اعلان‌ها" icon={<Bell/>}/>
          <div className="settings-section">
            <SettingToggle icon={<Truck/>} title="وضعیت سفارش" desc="تغییر وضعیت سفارش از طریق پیامک و اعلان" value={settings.orderSms} onChange={()=>toggle("orderSms")}/>
            <SettingToggle icon={<Mail/>} title="ایمیل سفارش‌ها" desc="فاکتور، پرداخت و وضعیت ارسال به ایمیل شما ارسال شود" value={settings.orderEmail} onChange={()=>toggle("orderEmail")}/>
            <SettingToggle icon={<Tag/>} title="پیشنهادها و تخفیف‌ها" desc="اعلان تخفیف‌ها و کمپین‌های ویژه را دریافت کنید" value={settings.promotions} onChange={()=>toggle("promotions")}/>
            <SettingToggle icon={<Gift/>} title="خبرنامه فروشگاه" desc="پیشنهادهای هفتگی و محصولات جدید از طریق ایمیل" value={settings.newsletter} onChange={()=>toggle("newsletter")}/>
          </div>
        </div>

        <div className="card settings-card">
          <CardHead title="حریم خصوصی" icon={<ShieldCheck/>}/>
          <div className="settings-section">
            <SettingToggle icon={<Eye/>} title="شخصی‌سازی پیشنهادها" desc="استفاده از سابقه خرید برای نمایش پیشنهادهای مرتبط‌تر" value={settings.personalization} onChange={()=>toggle("personalization")}/>
            <SettingToggle icon={<EyeOff/>} title="نمایش فعالیت حساب" desc="فعالیت خرید شما برای کاربران دیگر نمایش داده نشود" value={settings.showActivity} onChange={()=>toggle("showActivity")}/>
          </div>
        </div>

        <div className="card settings-card">
          <CardHead title="امنیت و ورود" icon={<LockKeyhole/>}/>
          <div className="settings-section">
            <SettingToggle icon={<Smartphone/>} title="تأیید دو مرحله‌ای" desc="برای ورودهای جدید یک مرحله امنیتی اضافه شود" value={settings.twoFactor} onChange={()=>toggle("twoFactor")}/>
            <SettingToggle icon={<Bell/>} title="هشدار ورود جدید" desc="در صورت ورود از دستگاه جدید به شما اطلاع می‌دهیم" value={settings.loginAlert} onChange={()=>toggle("loginAlert")}/>
            <div className="setting-row action-row"><div className="setting-icon"><LockKeyhole/></div><div className="setting-copy"><b>رمز عبور</b><span>برای حفظ امنیت، رمز عبور خود را مرتب تغییر دهید.</span></div><button className="outline-btn" onClick={()=>notify("لینک تغییر رمز عبور ارسال شد")}>تغییر رمز</button></div>
            <div className="setting-row action-row"><div className="setting-icon"><LogOut/></div><div className="setting-copy"><b>خروج از همه دستگاه‌ها</b><span>تمام نشست‌های فعال حساب شما بسته می‌شوند.</span></div><button className="outline-btn" onClick={()=>notify("از سایر دستگاه‌ها خارج شدید")}>خروج از همه</button></div>
          </div>
        </div>

        <div className="settings-save"><button className="primary-btn" onClick={save}>{saved?<Check/>:<Save/>}{saved?"ذخیره شد":"ذخیره تنظیمات"}</button></div>
      </div>

      <aside className="settings-side">
        <div className="card settings-score">
          <div className="score-ring"><ShieldCheck size={28}/></div>
          <h3>امنیت حساب</h3><p>حساب شما وضعیت امنیتی خوبی دارد.</p>
          <div className="score-bar"><i/></div><b>۸۵٪ ایمن</b>
          <div className="score-items"><span><Check/> تأیید ایمیل</span><span><Check/> شماره موبایل</span><span><Check/> رمز عبور امن</span></div>
        </div>
        <div className="card danger-card"><div className="danger-head"><Trash2/><b>حذف حساب کاربری</b></div><p>این عملیات دائمی است و اطلاعات حساب و سوابق شما را حذف می‌کند.</p><button onClick={()=>notify("برای حذف حساب ابتدا درخواست پشتیبانی ثبت کنید")}>درخواست حذف حساب</button></div>
      </aside>
    </div>
  </PageShell>
}

function SettingToggle({icon,title,desc,value,onChange}) {
  return <div className="setting-row"><div className="setting-icon">{icon}</div><div className="setting-copy"><b>{title}</b><span>{desc}</span></div><button className={`toggle ${value?"on":""}`} onClick={onChange} aria-label={title}><i/></button></div>
}
function GlobeIcon(){ return <span style={{fontSize:18}}>🌐</span> }

function SupportPage({notify}) {
  return <PageShell title="پشتیبانی" subtitle="تیم پشتیبانی در تمام مراحل خرید کنار شماست."><div className="support-grid"><div className="support-hero"><div className="support-big-icon"><Headphones/></div><h2>چطور می‌تونیم کمکتون کنیم؟</h2><p>سوالات متداول را ببینید یا مستقیماً با کارشناسان ما گفتگو کنید.</p><button className="primary-btn" onClick={()=>notify("تیکت جدید ایجاد شد")}>ایجاد درخواست پشتیبانی <ArrowLeft size={16}/></button></div><div className="faq card"><CardHead title="سوالات متداول" icon={<HelpCircle/>}/>{["چطور سفارشم را پیگیری کنم؟","شرایط بازگشت کالا چیست؟","چگونه کد تخفیف استفاده کنم؟","چه روش‌هایی برای پرداخت وجود دارد؟"].map((q,i)=><button className="faq-row" key={i} onClick={()=>notify(q)}><span>{q}</span><ChevronLeft size={17}/></button>)}</div></div></PageShell>
}

createRoot(document.getElementById("root")).render(<App />);
