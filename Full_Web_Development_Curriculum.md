# 🌐 หลักสูตรวิชาการเขียนโปรแกรมเว็บ (Web Development) - ชั้นมัธยมศึกษาปีที่ 5
**ภาคเรียนที่ 1 ปีการศึกษา 2569 | โรงเรียนเพลินพัฒนา**

คู่มือหลักสูตรรวมเล่มนี้จัดทำขึ้นเป็นพิเศษเพื่อเป็น **"Source Document (แหล่งข้อมูลอ้างอิง)"** สำหรับการอัปโหลดเข้าสู่ **NotebookLM (หรือ AI Tools อื่นๆ)** เพื่อนำไปสร้างสไลด์การสอน (Slides Deck), สคริปต์พูดของครู (Teacher Script), คู่มือเตรียมสอบ, กิจกรรมในชั้นเรียน หรือ FAQ ได้ทันทีอย่างมีประสิทธิภาพสูงสุด

---

## 📅 ตารางโครงสร้างหลักสูตรภาพรวม (Weeks 1 - 17)
หลักสูตรแบ่งเป็น **คาบเดี่ยว (วันอังคาร 45 นาที - ทฤษฎีและออกแบบ)** และ **คาบคู่ (วันพฤหัสบดี 90 นาที - ปฏิบัติการโค้ดและการทดสอบ)**

| สัปดาห์ที่ | หัวข้อการเรียนรู้ | กิจกรรมวันอังคาร (ทฤษฎี/ออกแบบ 45 นาที) | กิจกรรมวันพฤหัสบดี (ปฏิบัติการ 90 นาที) | ชิ้นงาน/โปรเจกต์ (Core & Extra) |
| :---: | :--- | :--- | :--- | :--- |
| **1** | Introduction to HTML | โครงสร้างพื้นฐาน HTML, โครงสร้างหน้าเว็บ แท็ก Heading & Paragraph | ลงมือเขียนโค้ดจัดโครงสร้างหน้าเว็บแรก | **[Project] Movie Ranking**<br>• Core: จัดอันดับหนัง 3 เรื่อง<br>• Extra: ใส่รูปโปสเตอร์และทำเป็น Top 5 |
| **2** | Intermediate HTML | การใช้ Lists (ul/ol), กฎ Nesting, แท็ก Anchor และ Image | ฝึกจัดกลุ่มเนื้อหา ใส่ลิงก์ภายนอกและรูปภาพ | **[Project] Birthday Invite**<br>• Core: การ์ดวันเกิด มีรูปและกำหนดการ<br>• Extra: หน้าสูตรอาหารฝังลิงก์ Google Map |
| **3** | Multi-Page Websites | โครงสร้าง HTML Boilerplate และระบบ Computer File Paths | เชื่อมโยงหลายหน้าเว็บเข้าหากันด้วยเมนู | **[Project] Personal Wiki**<br>• Core: เว็บ 3 หน้า ลิงก์เมนูเชื่อมโยงไปมา<br>• Extra: ฝังแท็ก `<audio>` หรือ `<video>` |
| **4** | Introduction to JavaScript | แนะนำพื้นฐาน JS เปรียบเทียบกับ Arduino (ตัวแปร, การทำงาน) | เขียนฟังก์ชันดึงข้อมูล ดำเนินการ และแสดงผล | **[Project] Simple BMI Calculator**<br>• Core: โปรแกรมรับน้ำหนัก/ส่วนสูง คำนวณ BMI<br>• Extra: เขียน If-Else เทียบเกณฑ์สุขภาพ |
| **5** | Introduction to CSS | วิธีใส่ CSS (Inline, Internal, External) และ CSS Selectors | เรียนรู้การเข้าถึง Element และปรับสีเบื้องต้น | **[Project] Colour Vocab**<br>• Core: สมุดคำศัพท์สี ปรับสีตามคลาสคำศัพท์<br>• Extra: สลับ 2 ไฟล์ CSS เพื่อจำลองระบบสลับธีม |
| **6** | CSS Properties (1) | เรื่องของสี (CSS Colors) และแบบอักษร (Google Fonts) | เรียนรู้การค้นหาฟอนต์ที่ตรงใจและการตั้งค่าสี | **[Project] Typography Redesign**<br>• Core: ปรับแต่งหน้าเว็บด้วย Google Fonts<br>• Extra: ใช้ Inspect Element ปรับเว็บโรงเรียน |
| **7** | CSS Properties (2) | ทฤษฎีกล่อง (The CSS Box Model): Margin, Padding, Border | เรียนรู้การเว้นระยะและขอบเพื่อจัดระเบียบเนื้อหา | **[Project] Motivational Poster**<br>• Core: โปสเตอร์คำคมจัดกรอบสวยงาม<br>• Extra: ใช้ border-radius วาดรูปทรงด้วย CSS |
| **8** | Midterm Checkpoint | สรุปความรู้ HTML/CSS และอธิบายโจทย์ Capstone Project | ลงมือทำ Capstone และโหวตผลงานเพื่อน | **🎯 [Capstone 1] Online Resume**<br>• Core: เรซูเม่ของตัวเองแบบจัดเต็มด้วย HTML/CSS |
| **9** | Advanced Layouts | การจัดตำแหน่งตำแหน่งด้วย CSS Position (Relative, Absolute, Fixed) | ทำ Navbar ติดขอบบน และทำ Badge แจ้งเตือน | **[Project] Sticky Nav & Badges**<br>• Core: แถบเมนูติดหนึบและปุ่มแจ้งเตือนขวาบน<br>• Extra: ใส่ Hover effect เพิ่มมิติการเคลื่อนไหว |
| **10** | Flexbox | คอนเซปต์การทำงานของ Flexbox (display: flex) และการจัดเรียง | จัดแกลเลอรีรูปภาพและเล่นเกมแข่งขัน | **[Project] Photo Gallery**<br>• Core: แกลเลอรีรูปภาพจัดเรียงด้วย Flexbox<br>• Extra: เล่นเกม Flexbox Froggy แข่งขันในห้อง |
| **11** | Grid | คอนเซปต์การแบ่งเลย์เอาต์หน้าเว็บเป็นตาราง (CSS Grid) | จัดบทความแบบนิตยสาร (ซ้ายรูป-ขวาข้อความ) | **[Project] Magazine Layout**<br>• Core: หน้าเว็บบทความแบบนิตยสารมีหลายช่อง<br>• Extra: ฝึกทักษะผ่านเกม Grid Garden |
| **12** | Bootstrap (Intro) | แนะนำ CSS Framework และ Bootstrap Grid System (12 คอลัมน์) | แบ่งหน้าจอรองรับการแสดงผลทุกอุปกรณ์ | **[Project] Product Landing Page (Draft)**<br>• Core: จัดโครงสร้างหน้าเว็บขายชิ้นงานด้วย Bootstrap Grid<br>• Extra: ทดสอบย่อหน้าจอเพื่อดูการตอบสนอง |
| **13** | Bootstrap Components | การเรียกใช้งาน Navbar, Cards, Carousel และ Buttons | ประกอบส่วนประกอบสำเร็จรูปของ Bootstrap | **[Project] Product Landing Page (Complete)**<br>• Core: ใส่สไลด์รูป การ์ดสินค้า และปุ่มกดให้ครบถ้วน<br>• Extra: เขียน Custom CSS ทับเพื่อแต่งสีเพิ่ม |
| **14** | Final Project (Start) | ออกแบบโครงร่าง (Wireframe) เว็บไซต์พอร์ตโฟลิโอส่วนตัว | สมัคร GitHub และนำโปรเจกต์เดิมขึ้น GitHub Pages | **[Project] Portfolio Design & Hosting**<br>• Core: อัปโหลดชิ้นงาน Week 3 ขึ้น GitHub Pages จริง<br>• Extra: สลับกันตรวจสอบหาลิงก์พัง (Broken Links) |
| **15** | Final Project (Dev) | การใช้ Custom CSS ร่วมกับ Bootstrap เพื่อแต่งหน้าเว็บให้มีเอกลักษณ์ | พัฒนาหน้าเว็บหลักและหน้าย่อย คัดเลือกรูปภาพ | **[Final Project] Portfolio Development**<br>• ลงมือสร้างหน้าประวัติการศึกษา ทักษะ และผลงาน |
| **16** | Final Project (QA) | การเช็คความเรียบร้อย (Responsive) และหลักการใช้งาน (UX/UI) | จับคู่ทดสอบเว็บเพื่อน หาจุดบกพร่องและแก้ไขเพื่อส่งงาน | **[Final Project] QA & Final Deploy**<br>• ตรวจสอบบั๊ก ลิงก์เสีย และความสวยงามบนมือถือ |
| **17** | Final Showcase | เตรียมตัวนำเสนอ สรุปจุดเด่นของผลงานและปัญหาที่พบ | พรีเซนต์เว็บไซต์บนอินเทอร์เน็ตผ่านลิงก์ GitHub Pages | **🏆 [Showcase] พรีเซนต์พอร์ตโฟลิโอ**<br>• นำเสนอเว็บไซต์จริงต่อหน้าเพื่อนๆ และครู |

---

## 🎯 เจาะลึกรายสัปดาห์ที่มีการพัฒนาพิเศษ (Detailed Lesson Units)

### 🎬 สัปดาห์ที่ 1: Introduction to HTML (Cinema Club)
*เริ่มต้นก้าวแรกของการเป็นนักพัฒนาเว็บโดยสร้างโรงภาพยนตร์ออนไลน์ส่วนตัว (Movie Ranking)*

#### 1. ทฤษฎีและแนวคิดการสอน (Concept Map)
*   **หลักการทำงานของเว็บ**: เบราว์เซอร์ (Chrome/Safari) ทำหน้าที่อ่านไฟล์ข้อความภาษา HTML แล้วตีความแปลออกมาเป็นรูปภาพ สีสัน และตัวอักษรสวยงามที่หน้าจอ
*   **โครงสร้างภาษา HTML (กระดูกสันหลังของเว็บ)**:
    *   `<html>` คือส่วนประกอบครอบเนื้อหาเว็บทั้งหมด
    *   `<head>` เก็บข้อมูลเบื้องหลังของระบบ (เช่น ชื่อหัวเว็บ `<title>`, ภาษาที่ใช้ `<meta>`)
    *   `<body>` คือส่วนสำคัญที่สุดที่จะแสดงตัวอักษร รูปภาพ หรือตาราง ให้ผู้ใช้งานเห็นจริงๆ
*   **แท็กจัดข้อความหลัก**: Heading (`<h1>` ถึง `<h6>` ยิ่งตัวเลขมากหัวข้อยิ่งมีขนาดเล็กลง) และ Paragraph (`<p>` สำหรับข้อความทั่วไป)

#### 2. โปรเจกต์ตัวอย่างสำหรับครูสอน (Teacher Reference Code)
*   **ชื่อโปรเจกต์**: Cinema Club - จัดอันดับหนังสุดโปรด (Cinema Club: Top 3 Movies)
*   **ที่ตั้งไฟล์**: `Week 01/Teacher/`

**HTML (`index.html`):**
```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <title>Cinema Club: จัดอันดับหนังสุดโปรด</title>
</head>
<body style="background-color: #1a1a1a; color: #e5e5e5; font-family: 'Segoe UI', Tahoma, sans-serif; max-width: 800px; margin: 0 auto; padding: 40px;">

    <h1 style="color: #e50914; border-bottom: 2px solid #e50914; padding-bottom: 10px;">🍿 Cinema Club: 3 หนังดีที่คุณห้ามพลาด!</h1>
    <p style="font-size: 1.1rem; color: #aaa;">จัดอันดับภาพยนตร์ที่ดีที่สุดตลอดกาลโดยนักเขียนโปรแกรมหน้าใหม่ ม.5 โรงเรียนเพลินพัฒนา</p>
    
    <hr style="border: 0; height: 1px; background: #333; margin: 30px 0;" />

    <!-- หนังอันดับ 1 -->
    <div style="margin-bottom: 40px;">
        <h2 style="color: #f5f5f5;">🥇 อันดับ 1: Spirited Away (มิติวิญญาณมหัศจรรย์)</h2>
        <p><strong>ประเภท:</strong> แฟนตาซี / แอนิเมชัน | <strong>ความชอบ:</strong> ⭐⭐⭐⭐⭐</p>
        <img src="https://raw.githubusercontent.com/appbrewery/webdev/main/birthday-cake.gif" alt="Spirited Away Poster" width="200" style="border: 2px solid #333; border-radius: 8px; margin-bottom: 15px;" />
        <p>ภาพยนตร์แอนิเมชันคุณภาพจากสตูดิโอจิบลิ ถ่ายทอดเรื่องราวการเดินทางของเด็กหญิงจิฮิโระได้อย่างมหัศจรรย์และตราตรึงใจ</p>
        <p><a href="https://www.youtube.com" target="_blank" style="color: #e50914; text-decoration: none; font-weight: bold;">📺 ดูตัวอย่างภาพยนตร์ย้อนหลัง</a></p>
    </div>
    
    <!-- หนังอันดับย่อยอื่นๆ ในโฟลเดอร์ Week 01 -->
</body>
</html>
```

#### 3. กิจกรรมปฏิบัติ Workshop (100 นาที: 10:40 น. - 12:20 น.)
*   **0-20 นาทีแรก**: เปิดเครื่องคอมพิวเตอร์ แนะนำโปรแกรม VS Code สอนการเปิดโฟลเดอร์งานและการสร้างไฟล์ `index.html` การันตีว่านักเรียนทุกคนเปิดหน้าเว็บเปล่าๆ ในเว็บเบราว์เซอร์ได้สำเร็จ
*   **20-45 นาที**: ลงมือเขียนโครงร่างหน้าเว็บรีวิวหนังโปรดของตัวเอง 3 เรื่อง [Core Task] โดยใช้แท็ก `<h1>`, `<h3>`, `<p>` และ `<hr>`
*   **45-75 นาที**: ค้นหารูปภาพโปสเตอร์หนังโปรดมาประดับผ่านแท็ก `<img src="...">` และสร้างปุ่มลิงก์ดูตัวอย่างหนังบน Youtube ผ่าน `<a href="...">` [Extra Challenge]
*   **75-85 นาที**: นำเสนอเทคนิคด่วนเปลี่ยนโหมดพื้นหลังสีดำของเว็บ (Netflix Vibe Style) เพื่อปลุกกระแสและจูงใจในการเขียนโค้ด
*   **85-100 นาที**: กิจกรรม Mini Cinema Showcase เดินชมและแลกเปลี่ยนความเห็นกับเพื่อนข้างๆ เพื่อทดสอบลิงก์และรูปภาพ

---


### 📘 สัปดาห์ที่ 4: Introduction to JavaScript
*ปูพื้นฐานการเขียนโปรแกรมเชิงตรรกะ เชื่อมโยงความเข้าใจเดิมจากวิชาหุ่นยนต์ Arduino สู่โลกเว็บเบราว์เซอร์*

#### 1. ทฤษฎีและแนวคิดการสอน (Concept Map)
*   **เปรียบเทียบ JavaScript กับ Arduino:**
    *   **Arduino (Hardware):** มีการอ่านค่าจากเซนเซอร์ (Input เช่น Pin A0) -> คำนวณตรรกะในฟังก์ชัน -> สั่งงาน Output (เช่น สั่งไฟ LED ติด/ดับ ที่ Pin 13)
    *   **JavaScript (Software Web):** อ่านค่าจาก HTML (Input เช่น กล่องข้อความ `<input id="weight">`) -> คำนวณตรรกะในเบราว์เซอร์ด้วยฟังก์ชัน JS -> แสดงผลลัพธ์ผ่านหน้าจอ HTML (Output เช่น แก้ไขข้อความใน `<div id="result">`)
    *   **ตารางเปรียบเทียบเชิงโครงสร้าง:**
        *   **การเก็บข้อมูล:** Arduino ใช้ `int weight = 50;` | JS ใช้ `const weight = 50;` หรือ `let weight = 50;`
        *   **การเข้าถึงเป้าหมาย:** Arduino ใช้ `pinMode(13, OUTPUT);` | JS ใช้ `document.getElementById('result');`
        *   **การตรวจเช็คทางเลือก:** Arduino ใช้ `if (sensorVal > 500) { ... }` | JS ใช้ `if (bmi > 23) { ... }`

#### 2. โปรเจกต์ตัวอย่างสำหรับครูสอน (Teacher Reference Code)
*   **ชื่อโปรเจกต์:** โปรแกรมคำนวณ BMI อย่างง่าย (Simple BMI Calculator)
*   **ที่ตั้งไฟล์:** `Week 04/Teacher/`

**HTML (`index.html`):**
```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <title>Week 04: โปรแกรมคำนวณ BMI อย่างง่าย</title>
    <style>
        body { font-family: sans-serif; text-align: center; padding-top: 50px; background-color: #f7f9fc; }
        .app { background: white; max-width: 300px; margin: 0 auto; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        input { width: 80%; padding: 8px; margin-bottom: 10px; border: 1px solid #ddd; border-radius: 4px; }
        button { padding: 10px 20px; background-color: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer; }
        #result { margin-top: 20px; font-weight: bold; font-size: 1.2rem; color: #2c3e50; }
    </style>
</head>
<body>
    <div class="app">
        <h2>โปรแกรมคำนวณ BMI</h2>
        <input type="number" id="weight" placeholder="น้ำหนัก (กก.)">
        <input type="number" id="height" placeholder="ส่วนสูง (ซม.)">
        <br>
        <button id="calc-btn">คำนวณ</button>
        <div id="result"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

**JavaScript (`script.js`):**
```javascript
// ดึง Element จากหน้าเว็บ
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calcBtn = document.getElementById('calc-btn');
const resultDiv = document.getElementById('result');

// ฟังก์ชันคำนวณ BMI
function calculateBMI() {
    const weight = parseFloat(weightInput.value);
    const heightCm = parseFloat(heightInput.value);
    
    // ตรวจสอบความถูกต้องของข้อมูล
    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        resultDiv.innerText = "กรุณากรอกข้อมูลให้ถูกต้อง!";
        resultDiv.style.color = "red";
        return;
    }
    
    // แปลงส่วนสูงเป็นเมตร
    const heightM = heightCm / 100;
    
    // คำนวณ BMI = น้ำหนัก / (ส่วนสูงกำลังสอง)
    const bmi = weight / (heightM * heightM);
    
    // แสดงผลลัพธ์พร้อมทศนิยม 2 ตำแหน่ง
    resultDiv.innerText = "ค่า BMI ของคุณคือ: " + bmi.toFixed(2);
    resultDiv.style.color = "#2c3e50";
    
    // แสดงผลการตรวจสอบใน Console ของเบราว์เซอร์
    console.log("Weight: " + weight + " kg, Height: " + heightM + " m, BMI: " + bmi);
}

// ผูกฟังก์ชันเข้ากับปุ่มกด
calcBtn.addEventListener('click', calculateBMI);
```

#### 3. กิจกรรมเพิ่มเติมสำหรับห้องเรียน (Class Activities)
*   **Extra Challenge (โจทย์ท้าทาย):** ให้นักเรียนเขียนคำสั่ง `if-else` เพิ่มเติมใน `script.js` เพื่อวิเคราะห์สุขภาพเบื้องต้นตามเกณฑ์จริง:
    *   ถ้า BMI น้อยกว่า 18.5 -> แสดงผลเพิ่มเติมว่า **"น้ำหนักน้อยเกินไป (ผอม)"**
    *   ถ้า BMI อยู่ระหว่าง 18.5 ถึง 22.9 -> แสดงผลเพิ่มเติมว่า **"น้ำหนักปกติ (สุขภาพดี)"**
    *   ถ้า BMI อยู่ระหว่าง 23 ถึง 24.9 -> แสดงผลเพิ่มเติมว่า **"น้ำหนักเกิน (ท้วม)"**
    *   ถ้า BMI เท่ากับ 25 ขึ้นไป -> แสดงผลเพิ่มเติมว่า **"โรคอ้วน"**

---

### 🎨 สัปดาห์ที่ 5: Introduction to CSS (Theme Switcher)
*เน้นความสำคัญของการแยกหน้าตาเว็บไซต์ (Style) ออกจากโครงสร้างข้อมูล (HTML) โดยจำลองโปรเจกต์สลับธีม*

#### 1. ทฤษฎีและแนวคิดการสอน (Concept Map)
*   **ความเข้าใจเรื่อง CSS 3 รูปแบบ:** Inline (แทรกรวมในแท็ก HTML), Internal (อยู่ในแท็ก `<style>` ด้านบน), และ External (แยกออกไปเป็นไฟล์ `.css` ภายนอก)
*   **ความมหัศจรรย์ของ External CSS:** การสอนนักเรียนสลับหน้าตาเว็บไซต์ทั้งหน้า (สว่าง/มืด หรือ Light/Dark Theme) ได้โดยง่าย เพียงแค่เปลี่ยนชื่อลิงก์ไฟล์ CSS ในหัวเว็บจาก `<link rel="stylesheet" href="light.css">` เป็น `<link rel="stylesheet" href="dark.css">` ซึ่งนี่คือความเข้าใจเชิงโครงสร้างที่สำคัญที่สุดของการพัฒนาเว็บแบบมืออาชีพ

#### 2. โปรเจกต์ตัวอย่างสำหรับครูสอน (Teacher Reference Code)
*   **ชื่อโปรเจกต์:** สมุดคำศัพท์สีและการจำลองการเปลี่ยนธีม (Colour Vocab & Theme Switcher)
*   **ที่ตั้งไฟล์:** `Week 05/Teacher/`

**HTML (`index.html`):**
```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <title>Colour Vocab (Theme Demo)</title>
    <!-- นักเรียนหรือครูสามารถสลับไฟล์ CSS ที่นี่เพื่อจำลองการเปลี่ยนธีม -->
    <link rel="stylesheet" href="light.css">
</head>
<body>
    <div class="container">
        <h1>สมุดคำศัพท์สี (Colour Vocab)</h1>
        <p>ลองสลับธีมโดยการเปลี่ยนชื่อไฟล์ CSS ในโค้ดบรรทัดที่ 7 (สลับระหว่าง light.css และ dark.css)</p>
        
        <div class="grid">
            <div class="card red">
                <div class="swatch"></div>
                <div class="label">Red (สีแดง)</div>
            </div>
            <div class="card blue">
                <div class="swatch"></div>
                <div class="label">Blue (สีน้ำเงิน)</div>
            </div>
            <div class="card green">
                <div class="swatch"></div>
                <div class="label">Green (สีเขียว)</div>
            </div>
            <div class="card yellow">
                <div class="swatch"></div>
                <div class="label">Yellow (สีเหลือง)</div>
            </div>
            <div class="card purple">
                <div class="swatch"></div>
                <div class="label">Purple (สีม่วง)</div>
            </div>
            <div class="card orange">
                <div class="swatch"></div>
                <div class="label">Orange (สีส้ม)</div>
            </div>
        </div>
    </div>
</body>
</html>
```

**Light CSS (`light.css`):**
```css
body {
    background-color: #f5f6fa;
    color: #2f3640;
    font-family: sans-serif;
    margin: 0;
    padding: 20px;
}
.container {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}
h1 {
    color: #2f3640;
}
.grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
}
.card {
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    width: 150px;
}
.swatch {
    height: 100px;
    border-radius: 4px;
    margin-bottom: 10px;
}
.label {
    font-weight: bold;
}
/* สีที่กำหนดพิเศษ */
.red .swatch { background-color: #ff4d4d; }
...
```

**Dark CSS (`dark.css`):**
```css
body {
    background-color: #2f3640;
    color: #f5f6fa;
    font-family: sans-serif;
    margin: 0;
    padding: 20px;
}
.container {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}
h1 {
    color: #f5f6fa;
}
.grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
}
.card {
    background: #353b48;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
    width: 150px;
    color: #f5f6fa;
}
.swatch {
    height: 100px;
    border-radius: 4px;
    margin-bottom: 10px;
}
.label {
    font-weight: bold;
}
/* สีสดใสขึ้นเมื่ออยู่ในธีมมืด */
.red .swatch { background-color: #ff6b6b; }
...
```

---

### 💼 สัปดาห์ที่ 14: Final Project (Wireframe & GitHub Pages Setup)
*เริ่มต้นการทำพอร์ตโฟลิโอส่วนตัวสำหรับยื่นมหาวิทยาลัย และนำเว็บขึ้นระบบจริงเพื่อให้ชาวโลกเห็น*

#### 1. คอนเซปต์โปรเจกต์สุดท้าย (Web Portfolio Concepts)
*   **สโลแกน:** "สร้างตัวตนบนโลกออนไลน์ ให้พร้อมยื่นมหา'ลัยด้วย Code ของเราเอง"
*   **โครงสร้างหน้าเว็บที่ต้องมี (Site Map):**
    1.  **Home / Hero Section:** ส่วนหน้าแรกแนะนำตัวแบบกระชับ มีสโลแกนที่โดนใจ ภาพพอร์ตเก๋ๆ และปุ่ม Call-to-Action (ดูผลงาน)
    2.  **About Me / Resume:** เล่าเรื่องตัวเอง ประวัติการศึกษา และระดับทักษะความสามารถ (Skills) ด้วย Progress Bar
    3.  **Portfolio / Projects Grid:** ใช้การ์ด (Cards) แสดงผลงานย่อยๆ ที่เคยทำ เช่น ผลงาน Arduino, ภาพกิจกรรมพัฒนาชุมชน, หรือเกมในห้องเรียน
    4.  **Contact:** ส่วนช่องทางติดต่อ Social Media, อีเมล, เบอร์ติดต่อ และ Google Maps พิกัดโรงเรียน

#### 2. คู่มือปฏิบัติงานอัปโหลดเว็บผ่าน GitHub Pages (Teacher & Student Step-by-Step Guide)
*   **เป้าหมาย:** นำผลงานเว็บที่พัฒนาจากเครื่องคอมพิวเตอร์ออฟไลน์ของตัวเอง ขึ้นออนไลน์สู่ URL เว็บจริง

**ขั้นตอนทีละขั้น (Step-by-Step Deployment):**
1.  **การลงทะเบียนบัญชี:** ให้นักเรียนสมัครใช้งานที่ [github.com](https://github.com/)
2.  **การสร้างพื้นที่จัดเก็บโค้ด (Repository):**
    *   กดเครื่องหมาย **"+"** ขวาบน แล้วเลือก **New repository**
    *   ตั้งชื่อพื้นที่จัดเก็บ (เช่น `my-portfolio` หรือ `personal-website`)
    *   เลือกประเภทเป็น **Public** (จำเป็นเพื่อให้ผู้เข้าชมและครูเห็นเว็บได้ฟรี)
    *   กดปุ่ม **Create repository**
3.  **การอัปโหลดไฟล์เว็บขึ้นเซิร์ฟเวอร์:**
    *   คลิกเลือกลิงก์ **uploading an existing file**
    *   ทำการลากไฟล์เว็บทั้งหมดในเครื่อง ได้แก่ `index.html`, `style.css` และรูปภาพต่างๆ มาวางในกล่องเบราว์เซอร์
    *   กดปุ่ม **Commit changes** ด้านล่างเพื่อยืนยันการบันทึกไฟล์
4.  **การเปิดใช้งานตัวนำเสนอเว็บ (GitHub Pages):**
    *   ในหน้า Repository ไปที่เมนู **Settings** ด้านบนสุด
    *   เมนูด้านซ้าย เลือกคำว่า **Pages**
    *   ที่หัวข้อ **Build and deployment -> Source** ให้เลือกเป็น `Deploy from a branch`
    *   ที่หัวข้อ **Branch** เลือกจาก `None` เป็น `main` หรือ `master` และคงค่าโฟลเดอร์ไว้ที่ `/ (root)`
    *   กดปุ่ม **Save**
5.  **รับลิงก์ผลลัพธ์:** รอระบบประมวลผลประมาณ 1-2 นาที เมื่อรีเฟรชหน้าจะปรากฏแถบสีเขียวพร้อมลิงก์เว็บออนไลน์ส่วนตัวของนักเรียนทันที (เช่น `https://username.github.io/my-portfolio/`) สามารถคัดลอกส่งครูหรือแชร์ในกลุ่มไลน์ได้ทันที!

**กิจกรรมสนุกส่งท้าย (Extra Challenge Activity):**
*   **"สลับกันล่าลิงก์พัง (Broken Link Hunting)"**
    *   ให้นักเรียนจับคู่หรือแลกเปลี่ยนลิงก์ผลงานกันกับเพื่อนข้างๆ
    *   ทดลองคลิกปุ่มต่างๆ ลิงก์ย้อนหน้าย้อนหลัง เพื่อตรวจสอบดูว่ามีส่วนไหนขึ้น Error 404 (หน้าไม่พบข้อมูล)
    *   หากเกิดข้อผิดพลาด ให้นักเรียนช่วยกันเช็คความถูกต้องของการเขียนชื่อไฟล์/ชื่อ Path หรือการสะกดตัวอักษรใหญ่-เล็กในโค้ด เพื่อฝึกฝนทักษะการตรวจสอบความถูกต้อง (Debugging) แบบโปรแกรมเมอร์มืออาชีพ

---

## 🛠️ คำแนะนำและเทมเพลตสำหรับผู้สอนในการ Prompt สั่ง NotebookLM

เมื่อผู้สอนอัปโหลดเอกสารนี้เข้าไปใน **NotebookLM** แล้ว แนะนำให้ใช้วลีสั่งการ (Prompt) ต่อไปนี้เพื่ออำนวยความสะดวกในการจัดเตรียมห้องเรียนได้อย่างมีประสิทธิภาพสูงสุด:

1.  **สำหรับการสร้างสไลด์การสอน:**
    > *"จากเอกสารหลักสูตร Web Development ม.5 ช่วยร่างหัวข้อสไลด์การสอน (Slide-by-Slide Outline) สำหรับสัปดาห์ที่ 4 เรื่อง Introduction to JavaScript จำนวน 10 หน้าสไลด์ โดยขอแบบละเอียด มีช่วงการอธิบายของครู โค้ดตัวอย่างบนสไลด์ และคำถามชวนคิดในแต่ละสไลด์ด้วย"*
2.  **สำหรับการสร้างคู่มือกิจกรรมใบงานนักเรียน:**
    > *"ช่วยออกแบบใบงานกิจกรรมกลุ่ม 'สลับกันล่าลิงก์พัง (Broken Link Hunting)' ของสัปดาห์ที่ 14 โดยอิงตามแนวทางในเอกสาร เขียนเป้าหมาย กติกาการให้คะแนน และแบบบันทึกผลการหาลิงก์พังของเพื่อนให้เป็นสัดส่วนเข้าใจง่าย"*
3.  **สำหรับการสร้างสคริปต์พูดของครูสอนแล็บ:**
    > *"ฉันกำลังจะสอนสัปดาห์ที่ 5 เรื่อง CSS Theme Switcher ช่วยเขียนบทพูดของครู (Teacher Script) ในช่วง 15 นาทีแรกของการแนะนำแนวคิดสไตล์ชีทภายนอก โดยเชื่อมโยงเรื่องความง่ายของการสลับธีม สลับไฟล์ CSS ให้เข้าถึงง่ายและเกิดความสนุกสนานในห้องเรียน"*
