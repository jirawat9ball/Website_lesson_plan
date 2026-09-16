# 🚀 สัปดาห์ที่ 16: การทดสอบคุณภาพและนำเว็บขึ้นระบบจริง (QA & Web Hosting)
**วิชาการเขียนโปรแกรมเว็บ ม.5 | โฟลเดอร์ปฏิบัติการของนักเรียน (Student)**

---

## 🎯 ภารกิจปฏิบัติการประจำสัปดาห์ (Workshop Steps)

ในสัปดาห์นี้ นักเรียนจะได้สวมบทบาทเป็น **Web Developer & QA Tester** ประกอบเว็บไซต์ 4 หน้าเข้าด้วยกันผ่านระบบ Shared Components และนำขึ้นสู่ระบบ Cloud บนโลกออนไลน์จริง!

---

### 🧩 ภาคที่ 1: ขั้นตอนการเขียนโค้ดตามลำดับ (สเต็ปที่ 1 - 5)

#### 🔹 สเต็ปที่ 1: เรียกใช้ Shared Header และ Footer ใน HTML ทั้ง 4 หน้า
เปิดไฟล์ `index.html`, `course.html`, `instructors.html`, `contact.html`:
* ค้นหาคอมเมนต์ `<!-- สเต็ปที่ 1.1 -->` ใต้ `<body>` แล้วใส่แท็ก:
  ```html
  <site-header></site-header>
  ```
* ค้นหาคอมเมนต์ `<!-- สเต็ปที่ 1.2 -->` เหนือแท็ก `<script>` ท้ายไฟล์ แล้วใส่แท็ก:
  ```html
  <site-footer></site-footer>
  ```

#### 🔹 สเต็ปที่ 2: เชื่อมลิงก์ปุ่มในหน้าแรก `index.html`
เปิดไฟล์ `index.html` เพื่อเชื่อมปุ่มนำทางไปยังหน้าคอร์ส:
* `สเต็ปที่ 2.1:` ที่ปุ่ม **Buy now** ให้แก้เป็น `href="course.html"`
* `สเต็ปที่ 2.2:` ที่ปุ่ม **more** ให้แก้เป็น `href="course.html"`

#### 🔹 สเต็ปที่ 3: เติมลิงก์นำทางใน `components.js`
เปิดไฟล์ `components.js` เพื่อเชื่อมเมนูด้านบน (Navbar):
* `สเต็ปที่ 3.1:` แก้เมนู Index ➡️ `href="index.html"`
* `สเต็ปที่ 3.2:` แก้เมนู Course ➡️ `href="course.html"`
* `สเต็ปที่ 3.3:` แก้เมนู Instructors ➡️ `href="instructors.html"`
* `สเต็ปที่ 3.4:` แก้เมนู Contact Us ➡️ `href="contact.html"`
> 💡 **ข้อสังเกต:** เมื่อแก้ที่ `components.js` เพียงที่เดียว เมนูนำทางใน **ทุกหน้าจะเชื่อมถึงกันทั้งหมดทันที!**

#### 🔹 สเต็ปที่ 4: กำหนดถังสีกลางใน `style.css`
เปิดไฟล์ `style.css` แล้วเติมตัวแปรสีในบล็อก `:root`:
```css
:root {
  /* สเต็ปที่ 4: กำหนดตัวแปรธีมสีประจำเว็บไซต์ */
  --bs-primary: #0066ff;
  --bs-primary-rgb: 0, 102, 255;
  --brand-blue: #0066ff;
  --brand-dark: #1e293b;
  --brand-muted: #64748b;
  --brand-light: #f8fafc;
}
```

#### 🔹 สเต็ปที่ 5: กำหนดสไตล์ Hover และ Active ใน `style.css`
เปิดไฟล์ `style.css` ค้นหาคอมเมนต์ `สเต็ปที่ 5` แล้วเติมสไตล์ของเมนูนำทาง:
```css
/* สเต็ปที่ 5: กำหนดสไตล์เมื่อ hover และสถานะหน้าปัจจุบัน (active) ของเมนู Navbar */
.navbar .nav-link:hover,
.navbar .nav-link.active {
  color: var(--brand-blue) !important;
  font-weight: 600;
}
```

---

### 🔍 ภาคที่ 2: ด่านตรวจสอบคุณภาพ (QA & Device Testing)
1. **Broken Links Check:** เปิดไฟล์ `index.html` บนเบราว์เซอร์ แล้วทดสอบคลิกเมนูทุกปุ่ม ว่าสามารถกดสลับไปหน้าอื่นและกดกลับมาหน้าเดิมได้ 100% หรือไม่ (ไม่มี Error 404)
2. **Mobile Device Test:** กดปุ่ม `F12` เพื่อเปิด Developer Tools แล้วคลิกรูปไอคอน **Device Toggle (มือถือ/แท็บเล็ต)** มุมซ้ายบน:
   * ตรวจสอบว่ารูปภาพไม่ล้นจอ
   * ตรวจสอบว่าเมนูด้านบนยุบเป็นปุ่ม Hamburger และกดเปิด-ปิดได้สมบูรณ์

---

### 🌐 ภาคที่ 3: ปล่อยเว็บขึ้นระบบจริง (Deploy to GitHub Pages)
1. เข้าสู่ระบบ [github.com](https://github.com) แล้วสร้าง **New Repository** (ตั้งชื่อ เช่น `learning-platform` และเลือกเป็น **Public**)
2. คลิก **uploading an existing file** แล้วลากไฟล์งานทั้งหมดในโฟลเดอร์นี้ขึ้น GitHub
3. กดปุ่มสีเขียว **Commit changes**
4. ไปที่เมนู **Settings** ➡️ **Pages** (แถบซ้ายมือ)
5. ตรงหัวข้อ **Branch** ให้เปลี่ยนจาก `None` เป็น `main` แล้วกด **Save**
6. รอประมาณ 1-3 นาที จะปรากฏลิงก์จริง เช่น:
   ```text
   https://<username>.github.io/learning-platform/
   ```
7. นำ URL ไปส่งงานในระบบ หรือส่งให้เพื่อนข้างๆ เปิดทดสอบบนสมาร์ตโฟนจริง!
