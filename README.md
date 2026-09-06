# پنل کاربری فروشگاه آنلاین \| Shopino User Dashboard

یک پنل کاربری حرفه‌ای، مدرن و کاملاً واکنش‌گرا برای فروشگاه‌های آنلاین که با
**React + Vite** ساخته شده است. این پروژه با تمرکز روی تجربه کاربری،
طراحی RTL برای فارسی، حالت تاریک، پشتیبانی فارسی/انگلیسی و مدیریت بخش‌های
اصلی حساب مشتری طراحی شده است.

> مناسب برای استفاده به عنوان UI Template، نمونه پروژه Portfolio، پایه
> توسعه فروشگاه آنلاین و داشبورد مشتری.

------------------------------------------------------------------------

## Preview

رابط کاربری پروژه شامل داشبورد حساب کاربری، سفارش‌ها، علاقه‌مندی‌ها، مقایسه
محصولات، آدرس‌ها، کیف پول، کدهای تخفیف، پشتیبانی، پروفایل و تنظیمات است.

------------------------------------------------------------------------

## Features

### داشبورد

-   نمای کلی حساب کاربری
-   کارت‌های آماری
-   تعداد سفارش‌ها
-   تعداد محصولات سبد خرید
-   تعداد علاقه‌مندی‌ها
-   امتیاز وفاداری
-   کیف پول
-   سفارش‌های اخیر
-   اطلاعات حساب
-   محصولات پیشنهادی

### مدیریت سفارش‌ها

-   نمایش سفارش‌های ثبت‌شده
-   شماره سفارش
-   تاریخ سفارش
-   مبلغ سفارش
-   وضعیت سفارش
-   نمایش سفارش‌های بیشتر
-   وضعیت‌های مختلف مانند تحویل‌شده، در حال پردازش و لغوشده

### علاقه‌مندی‌ها

-   نمایش محصولات مورد علاقه
-   قیمت و مشخصات محصول
-   وضعیت موجودی
-   افزودن محصول به سبد خرید
-   مدیریت لیست علاقه‌مندی‌ها

### مقایسه محصولات

-   مقایسه چند محصول در کنار یکدیگر
-   نمایش قیمت و قیمت قبلی
-   امتیاز و تعداد نظرات
-   وضعیت موجودی
-   برند
-   دسته‌بندی
-   گارانتی
-   مشخصات فنی
-   وزن
-   رنگ
-   نوع اتصال
-   ویژگی‌های محصول
-   امکان حذف محصول از مقایسه
-   پاک‌کردن لیست مقایسه
-   نمایش تفاوت‌ها
-   مرتب‌سازی محصولات
-   انتخاب محصول پیشنهادی

### آدرس‌ها

-   نمایش آدرس‌های ذخیره‌شده
-   افزودن آدرس جدید
-   ویرایش آدرس
-   حذف آدرس
-   تعیین آدرس پیش‌فرض
-   فرم Modal برای مدیریت آدرس

### کیف پول

-   نمایش موجودی
-   افزودن موجودی
-   نمایش اعتبار قابل استفاده برای خرید

### کدهای تخفیف

-   نمایش کد تخفیف
-   توضیحات تخفیف
-   تاریخ اعتبار
-   کپی کردن کد
-   نمایش پیام موفقیت پس از کپی

### پروفایل

-   اطلاعات شخصی
-   ایمیل
-   شماره موبایل
-   تاریخ عضویت
-   تغییر رمز عبور
-   تنظیمات امنیتی حساب

### پشتیبانی

-   سوالات متداول
-   اطلاعات پشتیبانی
-   تعاملات و پیام‌های اطلاع‌رسانی

### تنظیمات

-   زبان پنل
-   حالت روشن و تاریک
-   اعلان وضعیت سفارش
-   ایمیل سفارش‌ها
-   پیشنهادها و تخفیف‌ها
-   خبرنامه
-   شخصی‌سازی پیشنهادها
-   حریم خصوصی
-   هشدار ورود جدید
-   امنیت حساب
-   تغییر رمز عبور
-   خروج از همه دستگاه‌ها
-   درخواست حذف حساب
-   ذخیره تنظیمات

------------------------------------------------------------------------

## Internationalization

پروژه از دو زبان پشتیبانی می‌کند:

-   فارسی
-   English

با تغییر زبان:

-   متن‌های رابط کاربری تغییر می‌کنند.
-   جهت صفحه از `RTL` به `LTR` تغییر می‌کند.
-   عنوان صفحه تغییر می‌کند.
-   Placeholderها و متن‌های کوچک رابط کاربری نیز ترجمه می‌شوند.
-   انتخاب زبان در `localStorage` ذخیره می‌شود.
-   زبان انتخاب‌شده بعد از Refresh حفظ می‌شود.

> ساختار پروژه طوری آماده شده که می‌توان در آینده زبان‌های بیشتری نیز به
> آن اضافه کرد.

------------------------------------------------------------------------

## Dark Mode

حالت تاریک از بخش تنظیمات قابل فعال‌سازی است و روی بخش‌های مختلف رابط
کاربری اعمال می‌شود:

-   Header
-   Sidebar
-   Dashboard
-   Orders
-   Favorites
-   Compare
-   Addresses
-   Profile
-   Coupons
-   Support
-   Settings
-   Cards
-   Tables
-   Forms
-   Modalها
-   Toastها

انتخاب Theme در `localStorage` ذخیره می‌شود و پس از Refresh نیز باقی
می‌ماند.

------------------------------------------------------------------------

## Responsive Design

طراحی پروژه برای اندازه‌های مختلف صفحه آماده شده است:

-   Desktop
-   Laptop
-   Tablet
-   Mobile

Sidebar و ساختار صفحه در نمایشگرهای کوچک به شکل مناسب تغییر می‌کند تا
تجربه کاربری حفظ شود.

------------------------------------------------------------------------

## Tech Stack

  Technology         Usage
  ------------------ -----------------------
  React 18           ساخت رابط کاربری
  Vite               توسعه و Build
  JavaScript / JSX   منطق و UI
  CSS3               طراحی و Responsive
  Lucide React       آیکون‌ها
  LocalStorage       نگهداری تنظیمات کاربر

------------------------------------------------------------------------

## Project Structure

``` text
abolfazl-user-dashboard/
├── index.html
├── package.json
├── README.md
└── src/
    ├── main.jsx
    └── styles.css
```

### فایل `main.jsx`

شامل:

-   App
-   Navigation
-   Dashboard
-   Orders
-   Favorites
-   Compare
-   Coupons
-   Addresses
-   Profile
-   Support
-   Settings
-   State management
-   Theme management
-   Language management
-   Toast notifications

### فایل `styles.css`

شامل:

-   Layout
-   Header
-   Sidebar
-   Cards
-   Forms
-   Tables
-   Modals
-   Responsive styles
-   RTL/LTR
-   Dark mode
-   Buttons
-   Status badges

------------------------------------------------------------------------

## Installation

ابتدا Repository را Clone کنید:

``` bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
```

سپس Dependencies را نصب کنید:

``` bash
npm install
```

------------------------------------------------------------------------

## Run Development Server

``` bash
npm run dev
```

پس از اجرا، Vite آدرس محیط توسعه را در Terminal نمایش می‌دهد.

------------------------------------------------------------------------

## Production Build

برای ساخت نسخه Production:

``` bash
npm run build
```

برای مشاهده نسخه Build شده:

``` bash
npm run preview
```

------------------------------------------------------------------------

## Available Scripts

``` bash
npm run dev
npm run build
npm run preview
```

------------------------------------------------------------------------

## State Management

این نسخه برای مدیریت State از React Hooks استفاده می‌کند و برای Stateهای
اصلی مانند موارد زیر آماده شده است:

-   Active page
-   Theme
-   Language
-   Addresses
-   Orders
-   Favorites
-   Compare list
-   Modal state
-   Toast state
-   Settings

برای پروژه‌های واقعی می‌توان در مرحله بعد State Management را به ابزارهایی
مانند Zustand یا Redux Toolkit منتقل کرد.

------------------------------------------------------------------------

## Data

این نسخه یک **Frontend Demo** است و اطلاعات محصولات، سفارش‌ها، آدرس‌ها و
حساب کاربری به صورت Mock Data در پروژه قرار گرفته‌اند.

برای تبدیل پروژه به یک فروشگاه واقعی می‌توان Backend و API را به آن متصل
کرد.

نمونه مسیرهای پیشنهادی API:

``` text
GET    /api/user
GET    /api/orders
GET    /api/products
GET    /api/favorites
GET    /api/compare
GET    /api/addresses
POST   /api/addresses
PUT    /api/addresses/:id
DELETE /api/addresses/:id
GET    /api/coupons
GET    /api/wallet
PUT    /api/settings
```

------------------------------------------------------------------------

## LocalStorage

تنظیمات مهم رابط کاربری در LocalStorage ذخیره می‌شوند.

نمونه کلیدها:

``` text
account-theme
account-language
```

به همین دلیل Theme و Language بعد از Refresh حفظ می‌شوند.

------------------------------------------------------------------------

## Customization

برای تغییر مشخصات پروژه می‌توانید موارد زیر را ویرایش کنید:

### نام فروشگاه

در `src/main.jsx` متن برند فروشگاه را تغییر دهید.

### اطلاعات کاربر

نام، ایمیل و سایر اطلاعات نمونه در داده‌های Mock قرار دارند.

### محصولات

لیست محصولات را در ابتدای `main.jsx` تغییر دهید.

### سفارش‌ها

داده‌های سفارش‌ها در بخش Mock Data قرار گرفته‌اند.

### رنگ‌بندی

متغیرها و کلاس‌های CSS در `styles.css` قابل تغییر هستند.

------------------------------------------------------------------------

## UI Design

ویژگی‌های طراحی:

-   Minimal
-   Modern
-   Clean
-   Premium
-   RTL Friendly
-   Mobile First
-   Card Based UI
-   Soft Borders
-   Rounded Components
-   Responsive Layout
-   Dark Mode
-   Persian Typography

ساختار بصری برای فروشگاه‌های ایرانی طراحی شده و از نمایش اعداد، قیمت‌ها و
متن‌های فارسی پشتیبانی می‌کند.

------------------------------------------------------------------------

## Security Note

این پروژه یک Frontend Demo است و نباید بدون Backend امن برای مدیریت
اطلاعات واقعی کاربران استفاده شود.

در نسخه Production پیشنهاد می‌شود موارد زیر در Backend پیاده‌سازی شوند:

-   Authentication
-   Authorization
-   Session Management
-   Password Hashing
-   CSRF Protection
-   Rate Limiting
-   Input Validation
-   Secure API
-   Token Management

------------------------------------------------------------------------

## Roadmap

قابلیت‌های پیشنهادی برای نسخه‌های آینده:

-   [ ] اتصال به Backend واقعی
-   [ ] Authentication کامل
-   [ ] ثبت‌نام و ورود
-   [ ] OTP Login
-   [ ] اتصال به درگاه پرداخت
-   [ ] مدیریت واقعی سبد خرید
-   [ ] سیستم امتیازدهی
-   [ ] نظرات کاربران
-   [ ] فیلتر و جستجوی پیشرفته
-   [ ] Infinite Scroll
-   [ ] سیستم Notification واقعی
-   [ ] PWA
-   [ ] چندزبانه کامل با i18n
-   [ ] اتصال به REST API یا GraphQL
-   [ ] مدیریت State با Zustand
-   [ ] Unit Test
-   [ ] E2E Test


------------------------------------------------------------------------

## Keywords

``` text
React Ecommerce Dashboard
React User Dashboard
React Customer Panel
Persian Ecommerce UI
RTL Dashboard
Persian User Panel
Ecommerce Account Dashboard
React Vite Dashboard
Modern Ecommerce UI
Dark Mode Dashboard
Responsive React Dashboard
Persian RTL UI
Customer Account Panel
Online Store Dashboard
```

------------------------------------------------------------------------

## Contributing

برای مشارکت در پروژه:

1.  Repository را Fork کنید.
2.  یک Branch جدید ایجاد کنید.
3.  تغییرات خود را اعمال کنید.
4.  Commit ایجاد کنید.
5.  Pull Request ارسال کنید.

نمونه:

``` bash
git checkout -b feature/new-feature
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature
```

------------------------------------------------------------------------

## Commit Convention

پیشنهاد می‌شود از Conventional Commits استفاده شود:

``` text
feat: add compare products
fix: fix language switching
style: improve dashboard UI
refactor: improve settings state
docs: update README
chore: update dependencies
```

------------------------------------------------------------------------

## License

این پروژه را می‌توانید با توجه به نیاز پروژه شخصی یا تجاری خود توسعه
دهید.

در صورت استفاده عمومی یا تجاری، پیشنهاد می‌شود یک فایل `LICENSE` مناسب
مانند MIT به Repository اضافه کنید.

------------------------------------------------------------------------

## Author

**Abolfazl Rezaeipour**

Frontend / UI Project

------------------------------------------------------------------------

## Project Status

``` text
Frontend Demo
React + Vite
RTL / LTR
Light / Dark
Responsive
Mock Data
```

------------------------------------------------------------------------

## Tags

#React #Vite #JavaScript #Ecommerce #Dashboard #UserDashboard
#CustomerDashboard #RTL #Persian #Responsive #DarkMode #Frontend #UIUX
#LucideReact #i18n #Localization #OnlineStore #Shopping #WebDesign
