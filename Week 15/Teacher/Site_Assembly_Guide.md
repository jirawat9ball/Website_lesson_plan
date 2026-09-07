# 🧭 คู่มือการประกอบร่างเว็บไซต์และการจัดการทรัพยากร (Site Assembly & Asset Management Guide)
**สัปดาห์ที่ 15 | วิชาการเขียนโปรแกรมเว็บ ม.5**

---

## 1. การจัดการไฟล์ทรัพยากร (Asset Management)
เมื่อพัฒนาเว็บไซต์ขนาดใหญ่ขึ้น การวางไฟล์ภาพทั้งหมดกองไว้ที่โฟลเดอร์นอกสุดจะทำให้โปรเจกต์รกและแก้ไขยาก

### 📁 โครงสร้างโฟลเดอร์มาตรฐาน (Standard Folder Hierarchy)
```text
my-website/
├── images/                 <-- เก็บไฟล์รูปภาพทั้งหมดที่นี่
│   ├── hero-banner.jpg
│   ├── instructor.jpg
│   ├── html5-logo.png
│   └── course-preview.jpg
├── index.html              <-- หน้าแรก (หน้าหลัก)
├── course.html             <-- หน้ารายละเอียดคอร์ส
├── instructors.html        <-- หน้าข้อมูลผู้สอน
├── contact.html            <-- หน้าฟอร์มติดต่อเรา
└── style.css               <-- สไตล์ชีทส่วนกลางของทั้งเว็บ
```

### 🎯 กฎเหล็กการเขียน Path (Relative Path Rules)
* เมื่อรูปภาพอยู่ในโฟลเดอร์ `images/` ให้เขียนระบุโฟลเดอร์นำหน้าเสมอ:
  ```html
  <!-- ถูกต้อง -->
  <img src="images/instructor.jpg" alt="ผู้สอน">

  <!-- ผิด (เบราว์เซอร์หาไฟล์ไม่พบเพราะมองหาข้างนอก) -->
  <img src="instructor.jpg" alt="ผู้สอน">
  ```
* **ข้อควรระวังเรื่องตัวพิมพ์เล็ก-ใหญ่ (Case Sensitivity):**
  บนระบบเซิร์ฟเวอร์จริง (เช่น GitHub Pages หรือ Linux Server) ชื่อไฟล์ `Profile.JPG` กับ `profile.jpg` ถือเป็นคนละไฟล์กัน แนะนำให้ตั้งชื่อไฟล์รูปภาพและโฟลเดอร์ด้วย **ตัวพิมพ์เล็กภาษาอังกฤษคั่นด้วยขีดกลาง (-)** เสมอ เช่น `teacher-avatar.png`

---

## 2. เทคนิคการตัดภาพเป็นวงกลม (Circular Avatar Technique)

### ปัญหาที่พบบ่อย
เมื่อเราใส่แค่ `border-radius: 50%` กับรูปภาพทั่วไป:
* ถ้ารูปเป็นสี่เหลี่ยมผืนผ้า (กว้างไม่เท่ากับสูง) รูปจะถูกบีบให้กลายเป็น **วงรีรูปไข่**
* ถ้ารูปต้นฉบับเบี้ยว ภาพหน้าผู้สอนจะดูผิดสัดส่วน

### สูตรสำเร็จ CSS Avatar
```css
.instructor-profile img {
  /* 1. กำหนดขนาดกว้างและสูงให้เป็นจัตุรัส 1:1 */
  width: 400px;
  height: 400px;

  /* 2. สั่งโค้งมน 50% รอบด้านเพื่อกลายเป็นวงกลม */
  border-radius: 50%;

  /* 3. สั่งให้ภาพขยายเต็มกรอบโดยรักษาสัดส่วน ไม่บิดเบี้ยว */
  object-fit: cover;

  /* 4. เพิ่มมิติแสงเงาให้ดูลอยเด่น (Optional) */
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}
```

---

## 3. การประกอบร่างเมนูนำทาง (Multi-Page Navigation)

เว็บไซต์ที่สมบูรณ์ต้องมีทางเดินเชื่อมถึงกันได้ทุกห้อง นักเรียนต้องตรวจสอบแท็ก `<nav>` ใน **ทุกไฟล์ทั้ง 4 หน้า** ดังนี้:

### ตารางตรวจสอบลิงก์ในแต่ละหน้า (Navigation Map)

| ไฟล์ที่กำลังเปิด | โค้ดของเมนูนำทาง (Navbar Link Code) |
| :--- | :--- |
| **`index.html`** | `<a href="index.html" class="active">Index</a>`<br>`<a href="course.html">Course</a>`<br>`<a href="instructors.html">Instructors</a>`<br>`<a href="contact.html">Contact Us</a>` |
| **`course.html`** | `<a href="index.html">Index</a>`<br>`<a href="course.html" class="active">Course</a>`<br>`<a href="instructors.html">Instructors</a>`<br>`<a href="contact.html">Contact Us</a>` |
| **`instructors.html`** | `<a href="index.html">Index</a>`<br>`<a href="course.html">Course</a>`<br>`<a href="instructors.html" class="active">Instructors</a>`<br>`<a href="contact.html">Contact Us</a>` |
| **`contact.html`** | `<a href="index.html">Index</a>`<br>`<a href="course.html">Course</a>`<br>`<a href="instructors.html">Instructors</a>`<br>`<a href="contact.html" class="active">Contact Us</a>` |

### CSS สำหรับทำ Active State
```css
/* สถานะปกติของปุ่มเมนู */
header nav a {
  text-decoration: none;
  color: #666;
  margin: 0 15px;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

/* เมื่อเอาเมาส์ไปชี้ หรือหน้าปัจจุบันที่กำลังเปิดอยู่ */
header nav a:hover, 
header nav a.active {
  color: #007bff;                  /* เปลี่ยนข้อความเป็นสีน้ำเงิน */
  border-bottom: 2px solid #007bff; /* ขีดเส้นใต้เน้นตำแหน่ง */
  padding-bottom: 5px;
}
```

---

## 4. แผนการตรวจสอบความสมบูรณ์ก่อนส่งงาน (Final Pre-flight Checklist)
ให้นักเรียนติ๊กเครื่องหมายถูกเพื่อตรวจสอบความพร้อม:
- [ ] มีโฟลเดอร์ `images/` และไม่มีไฟล์รูปภาพหลงเหลือกองอยู่นอกโฟลเดอร์
- [ ] ไฟล์ HTML ทั้ง 4 หน้า สามารถเปิดดูรูปภาพได้ครบทุกรูป (ไม่มีไอคอนภาพเสีย)
- [ ] ทุกหน้ามีแถบ Navbar ด้านบน และ Footer ด้านล่างหน้าตาตรงกัน
- [ ] คลิกเปลี่ยนหน้าจากเมนูแล้วเปิดได้ถูกต้อง ไม่ขึ้น Error 404
- [ ] หน้าที่เปิดอยู่มีแถบขีดเส้นใต้สีน้ำเงิน (Active State) แสดงตรงหน้า
- [ ] รูปภาพผู้สอนในหน้า `instructors.html` เป็นทรงกลมสมบูรณ์ ไม่เป็นวงรี
