# 🎴 สไลด์การสอนประจำสัปดาห์ที่ 16: Shared Components และหลักการทำงานของ Bootstrap
**วิชาการเขียนโปรแกรมเว็บ (Web Programming) | ชั้นมัธยมศึกษาปีที่ 5**
*(เอกสารพร้อมนำเข้า NotebookLM เพื่อ Generate สไลด์นำเสนอหรือสคริปต์การสอนอัตโนมัติ ตามกรอบ 11-Slide Standard Model)*

---

### Slide 1: หน้าปกหัวข้อบทเรียน (Title Slide)
* **หัวข้อ:** สัปดาห์ที่ 16: Shared Components และหลักการทำงานของ Bootstrap
* **สโลแกน:** "เขียนครั้งเดียว ใช้ได้ทุกหน้า: เข้าใจ Bootstrap และสร้าง Header/Footer ที่ดูแลง่าย!"
* **ระดับชั้น:** มัธยมศึกษาปีที่ 5 | คาบทฤษฎี (45 นาที) & คาบปฏิบัติการ (90 นาที)
* **บรรยากาศ/ธีม:** Component Lab — ห้องทดลองชิ้นส่วนเว็บ โทนสีน้ำเงินสดใส (#0066ff) ตัดกับสีขาว สื่อถึงการประกอบหน้าเว็บจากชิ้นส่วนที่นำกลับมาใช้ซ้ำได้

---

### Slide 2: เป้าหมายผลงานท้ายคาบ (Target Project & Live Demo)
* **เป้าหมายคาบนี้:**
  1. **แพลตฟอร์ม 4 หน้าสมบูรณ์แบบ:** เว็บไซต์ Learning Platform ครบทั้ง 4 หน้า (`index.html`, `course.html`, `instructors.html`, `contact.html`) ที่สร้างด้วย Bootstrap 5
  2. **Shared Header & Footer:** ใช้คอมโพเนนต์ `<site-header>` และ `<site-footer>` จาก `components.js` ทำให้แก้เมนูจุดเดียว มีผลทันทีทุกหน้า
  3. **เข้าใจหลักการทำงานของ Bootstrap:** เรียกใช้ CDN, ประกอบคลาสสำเร็จรูป, ใช้ Grid 12 คอลัมน์ และ Responsive Utilities
  4. **ผ่านการตรวจ QA:** ตรวจว่า Component แสดงผลครบ ลิงก์ทำงานถูกต้อง และหน้าเว็บไม่ล้นเมื่อจำลองจอมือถือ
* **Demo ให้ดูสด:** ครูเปิดหน้า [preview_components.html](file:///c:/Users/user/Downloads/1_Course_Materials/Web/Website%20lesson%20plan/Week%2016/Teacher/preview_components.html) ทดลองเปลี่ยนธีมสี เปลี่ยนหน้า Active และย่อ Preview เป็นขนาดมือถือ

---

### Slide 3: ปูพื้นฐานความเข้าใจด้วยการเปรียบเทียบ (Theory & Analogy)
* **1. การแชร์ Header & Footer (Shared Components):**
  * *เปรียบเทียบ:* เหมือน "เสาไฟส่องสว่างมาตรฐานและป้ายบอกทางของหมู่บ้านจัดสรร"
  * เราไม่หล่อเสาไฟใหม่หน้าบ้านทุกหลัง แต่เราทำแบบพิมพ์เขียวอันเดียว (`components.js`) แล้วสั่งให้ทุกบ้านติดตั้ง (`<site-header>`) ถ้าวันหน้าต้องการเปลี่ยนหลอดไฟ เราเปลี่ยนที่ต้นฉบับเพียงจุดเดียว ทุกบ้านสว่างพร้อมกันทันที
* **2. Bootstrap:**
  * *เปรียบเทียบ:* เหมือนกล่องตัวต่อที่มีชิ้นส่วนมาตรฐาน เช่น `.container`, `.row`, `.col-md-6`, `.btn` และ `.card`
  * เราเลือกและประกอบคลาสที่มีอยู่แล้ว แทนการเขียน CSS ทุกอย่างใหม่เอง แต่ยังเขียน CSS ของเราเพื่อปรับเอกลักษณ์เฉพาะของเว็บไซต์ได้
* **3. QA:**
  * *เปรียบเทียบ:* เหมือนการตรวจงานก่อนส่งมอบ ต้องเช็คทั้งหน้าตา การคลิกเมนู และการจัดวางบนหน้าจอหลายขนาด

---

### Slide 4: สรุปคำสั่งและไวยากรณ์สำคัญ (Syntax & Cheat Sheet)
* **1. การเรียกใช้ Shared Components ใน HTML:**
  ```html
  <!-- วางใต้แท็ก <body> -->
  <site-header active="index.html"></site-header>

  <!-- เนื้อหาของหน้า... -->

  <!-- วางก่อนปิดแท็ก </body> -->
  <site-footer></site-footer>
  <script src="components.js"></script>
  ```
* **2. การลงทะเบียน Custom Web Components ใน JavaScript (`components.js`):**
  ```javascript
  // สั่งให้เบราว์เซอร์จดทะเบียนแท็กใหม่คู่กับ Class แม่แบบ
  customElements.define('site-header', SiteHeader);
  customElements.define('site-footer', SiteFooter);
  ```
  *(หมายเหตุ: ชื่อแท็กต้องมีขีดกลาง `-` เสมอ เช่น `site-header`)*
* **3. หลักการ Bootstrap Grid 12 คอลัมน์:**
  ```html
  <div class="container">
    <div class="row g-4">
      <div class="col-12 col-md-6">เนื้อหาซ้าย</div>
      <div class="col-12 col-md-6">เนื้อหาขวา</div>
    </div>
  </div>
  ```
  * `col-12` ทำให้เต็มแถวบนมือถือ และ `col-md-6` แบ่งเป็น 2 คอลัมน์เมื่อจอกว้างขึ้น
* **3. Bootstrap Utilities และ Responsive Image:**
  ```css
  img {
    max-width: 100%;
    height: auto;   /* ป้องกันภาพตกขอบจอ และรักษาสัดส่วน */
  }
  ```
  * ตัวอย่าง Utilities: `d-flex`, `justify-content-center`, `align-items-center`, `gap-3`, `mt-4`, `text-center`
* **4. ตรวจสอบสถานะลิงก์ในแต่ละหน้า (Navigation Link Checklist):**
  * `index.html` ➡️ `active="index.html"`
  * `course.html` ➡️ `active="course.html"`
  * `instructors.html` ➡️ `active="instructors.html"`
  * `contact.html` ➡️ `active="contact.html"`

---

### Slide 5: แผนผังกิจกรรมและเวลาปฏิบัติการ (Workshop Timeline 100 นาที)
* **ช่วงที่ 1 (0-15 นาที | 10:40 - 10:55 น.):** ทำความเข้าใจว่า Bootstrap ใช้ CDN และคลาสสำเร็จรูปช่วยสร้างหน้าเว็บอย่างไร
* **ช่วงที่ 2 (15-35 นาที | 10:55 - 11:15 น.):** ทดลอง Grid 12 คอลัมน์, Breakpoints และ Responsive Utilities
* **ช่วงที่ 3 (35-55 นาที | 11:15 - 11:35 น.):** แกะการทำงานของ `components.js`, Custom Elements และ `connectedCallback()`
* **ช่วงที่ 4 (55-80 นาที | 11:35 - 12:00 น.):** แก้ TODO ใน Navbar และตรวจว่า Shared Header/Footer ทำงานครบทุกหน้า
* **ช่วงที่ 5 (80-100 นาที | 12:00 - 12:20 น.):** QA Pair Review: ทดสอบลิงก์ Component, Hamburger Menu และหน้าจอมือถือ

---

### Slide 6: ก้าวแรกการตั้งค่าระบบ (Step 1: Setup & QA Checklist)
1. เปิดโฟลเดอร์ `Week 16/Student/` ใน VS Code
2. เปิดไฟล์ `preview_components.html` บนเบราว์เซอร์ เพื่อดูหน้าตาของ Navbar และ Footer
3. **รายการเช็คความพร้อมของ Component และ Bootstrap:**
  * [ ] ทุกหน้าลิงก์ Bootstrap CSS, Bootstrap Icons และ `components.js` ครบถ้วน
  * [ ] `<site-header>` และ `<site-footer>` แสดงผลจากไฟล์กลางโดยไม่ต้องคัดลอก HTML ซ้ำ
  * [ ] คลาส Grid และ Utilities ทำให้เนื้อหาปรับตามขนาดหน้าจอได้
   * [ ] ลิงก์ Navbar ทั้ง 4 หน้าคลิกไปหากันได้ครบทุกหน้า ไม่มีหน้า 404
   * [ ] รูปภาพทุกรูปโหลดขึ้นครบถ้วน (ดึงจาก Unsplash CDN หรือโฟลเดอร์ `image/`)
   * [ ] กดปุ่ม `F12` แล้วเลือกโหมดมือถือ (Mobile View) ข้อความและภาพต้องไม่ล้นจอ

---

### Slide 7: ปฏิบัติการภารกิจหลัก (Core Mission: Bootstrap & Shared Components)
* **ขั้นตอนที่ 1: โหลด Bootstrap:** ตรวจสอบ `<link>` ของ Bootstrap CSS และ `<script>` ของ Bootstrap Bundle JS ในทุกหน้า
* **ขั้นตอนที่ 2: วาง Component:** ใส่ `<site-header>` และ `<site-footer>` ในตำแหน่งที่ถูกต้อง แล้วเรียกใช้ `components.js`
* **ขั้นตอนที่ 3: แก้ลิงก์และจดทะเบียนใน `components.js`:** 
  * เปลี่ยน `href="#"` เป็น `index.html`, `course.html`, `instructors.html` และ `contact.html`
  * เติมคำสั่ง `customElements.define('site-header', SiteHeader);` และ `customElements.define('site-footer', SiteFooter);` ที่ท้ายไฟล์ เพื่อให้ Component ปรากฏบนหน้าจอ
* **ขั้นตอนที่ 4: ทดลองหลักการ Bootstrap:** ปรับ `container`, `row`, `col-md-*`, `d-flex`, `gap-*` และ `text-*` แล้วสังเกตผลทันทีในเบราว์เซอร์

---

### Slide 8: ปลดล็อกความท้าทายพิเศษ (Extra Challenge Details)
* **สำหรับนักเรียนที่ทำภารกิจหลักเสร็จก่อนเพื่อน:**
  1. **Theme Switcher:** เปลี่ยนค่า `--brand-blue` ใน `style.css` แล้วดูว่า Navbar และ Footer ที่สร้างจาก Component เปลี่ยนสีตามกันหรือไม่
  2. **เพิ่ม Attribute:** ทดลองใส่ `active="course.html"` หรือ `active="contact.html"` ให้ `<site-header>` แล้วสังเกตเมนู Active
  3. **สร้าง Component เพิ่ม:** ออกแบบ `<site-banner>` หรือ `<course-card>` ให้ใช้ซ้ำได้มากกว่า 1 หน้า

---

### Slide 9: จุดระวังและเทคนิคป้องกันบั๊ก (Pro-Tips & Bug Prevention)
* **บั๊กที่ 1: Component ไม่แสดงผล:** ตรวจว่าพิมพ์ `customElements.define(...)` ที่ท้ายไฟล์ `components.js` ครบหรือไม่, สะกดชื่อแท็กตรงกันหรือไม่ (`<site-header>`), ตรวจว่าแท็ก `<script src="components.js"></script>` อยู่ท้ายไฟล์ HTML หรือไม่
* **บั๊กที่ 2: Hamburger Menu กดไม่ได้:** ตรวจว่าโหลด Bootstrap Bundle JS และค่า `data-bs-target` ตรงกับ `id` ของเมนู
* **บั๊กที่ 3: Layout ล้นหรือไม่เรียงตามต้องการ:** ตรวจโครงสร้าง `.container > .row > .col-*` และใช้ `col-12 col-md-6` สำหรับการปรับตามจอ
* **บั๊กที่ 4: เมนู Active ผิดหน้า:** ตรวจค่า `active` และชื่อไฟล์ใน `isActive()` ให้ตรงกับ `href`

---

### Slide 10: กิจกรรมแลกเปลี่ยนเรียนรู้ (Peer Review & Showcase)
* **กิจกรรม: "เพื่อนตรวจเพื่อน (Component QA Pair Swap)"**
  * ให้นักเรียนจับคู่กับเพื่อนข้างๆ แล้วเปิด `preview_components.html` ของแต่ละคน
  * **โจทย์ทดสอบ 3 ด่าน:**
    1. แก้ลิงก์ใน `components.js` จุดเดียวแล้วทุกหน้ามีเมนูเหมือนกันหรือไม่?
    2. เมนู Hamburger ของ Bootstrap กดเปิด-ปิดได้สมบูรณ์หรือไม่?
    3. เมื่อเปลี่ยนขนาด Preview เป็นมือถือ Grid, รูปภาพ และข้อความไม่ล้นจอหรือไม่?
  * ถ้าเพื่อนเจอจุดติดขัด ให้ช่วยเพื่อนบอกจุดแก้และให้กำลังใจกัน!

---

### Slide 11: คำถามชวนคิดท้ายคาบ (Reflection Quiz)
1. **คำถามข้อที่ 1:** ทำไมการแชร์ Header และ Footer ผ่านไฟล์ `components.js` จึงดีกว่าการคัดลอกโค้ด Navbar ไปวางไว้ในทุกๆ ไฟล์ HTML?
   * *แนวคำตอบ:* ทำให้เป็น Single Source of Truth แก้ไขเมนูหรือลิงก์เพียงจุดเดียวมีผลอัปเดตทุกหน้าทันที ประหยัดเวลาและลดความผิดพลาด (หลักการ DRY)
2. **คำถามข้อที่ 2:** การทดสอบเว็บด้วยฟังก์ชัน "Device Toggle Toolbar" มีความสำคัญอย่างไรก่อนส่งมอบงานจริง?
   * *แนวคำตอบ:* ช่วยจำลองหน้าจอมือถือและแท็บเล็ตขนาดต่างๆ เพื่อให้มั่นใจว่าปุ่มกดไม่ตกขอบ ภาพไม่บวม และผู้ใช้สมาร์ตโฟนได้รับประสบการณ์การใช้งานที่ดีเยี่ยม
3. **คำถามข้อที่ 3:** เพราะเหตุใด `col-12 col-md-6` จึงช่วยให้หน้าเว็บรองรับทั้งมือถือและคอมพิวเตอร์?
  * *แนวคำตอบ:* `col-12` ทำให้เนื้อหาเต็มแถวบนจอเล็ก ส่วน `col-md-6` แบ่งเป็น 2 คอลัมน์ตั้งแต่ breakpoint ขนาดกลางขึ้นไป

---
*เอกสารนี้จัดทำขึ้นโดยยึดโครงสร้างและข้อกำหนดจาก [Slide_Sequencing_Skill.md](../../Slide_Sequencing_Skill.md)*
