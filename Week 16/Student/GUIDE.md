# 🖼️ ภาพต้นแบบเว็บไซต์สำหรับการพัฒนา (UI Design Guides - Week 16)

เอกสารนี้รวบรวมภาพต้นแบบ (Mockup / Wireframe) ของทั้ง 4 หน้าจอหลักและส่วนประกอบส่วนกลาง สำหรับให้นักเรียนและคุณครูใช้เป็นเกณฑ์อ้างอิงในการเขียนโค้ดด้วย Bootstrap 5 และตรวจสอบความถูกต้อง (QA Testing)

---

## 🧭 1. แถบเมนูนำทางส่วนกลาง (Shared Navbar)
*   **ไฟล์รูปต้นแบบ:** [`guides/NavbarHeader.png`](./guides/NavbarHeader.png)
*   **องค์ประกอบสำคัญ:**
    *   เมนูเรียงตามลำดับ: `Index` | `Course` | `Instructors` | `Student Showcase 🔽` | `News & Events` | `Contact Us`
    *   ด้านขวาสุดเป็นไอคอนสัญลักษณ์ฟันเฟืองและโค้ด `⚙️</>`
    *   ในแต่ละหน้า ลิงก์ของหน้านั้นจะต้องมีสถานะ **Active** (ตัวหนังสือสีน้ำเงิน / เส้นใต้)

---

## 🏠 2. หน้าหลัก (Home Page) - `index.html`
*   **ไฟล์รูปต้นแบบ:** [`guides/Index.png`](./guides/Index.png)
*   **โครงสร้างหน้าจอ:**
    1.  **Shared Header (Navbar)**: สถานะ Active อยู่ที่ `Index`
    2.  **Hero Section**:
        *   ฝั่งซ้าย: รูปนักเรียนนั่งเขียนหนังสือยิ้มอย่างมีความสุข (`image/Landing image.png`)
        *   ฝั่งขวา: คำโปรย `a b o u t   u s`, พาดหัว `We are the top Program Learning Platform`, ปุ่ม `Buy now` (สีน้ำเงิน) และปุ่ม `Show more` (สีเข้ม)
    3.  **Promo & Banner Section**:
        *   ข้อความกึ่งกลาง: `เปลี่ยนไอเดียให้เป็นผลงาน` / `เรียนรู้จากการลงมือทำจริงก้าวสู่` / `มืออาชีพ` (ตัวหนาสีน้ำเงินสด)
        *   รูปภาพบรรยากาศห้องเรียนและการสอน (`image/slide image 1.png`)
    4.  **Course Grid Section**:
        *   หัวข้อ `Course` สีน้ำเงิน พร้อมปุ่มแคปซูล `more`
        *   การ์ดแสดง 3 คอร์ส: `VR Crusoe` ($35), `3D Crusoe` ($25), `Programming Crusoe` ($30)
    5.  **Shared Footer**: แถบสีน้ำเงินเข้ม 4 คอลัมน์ (Logo & Socials, Use cases, Explore, Resources)

---

## 📚 3. หน้ารายละเอียดคอร์สเรียน (Course Detail) - `course.html`
*   **ไฟล์รูปต้นแบบ:** [`guides/Product.png`](./guides/Product.png)
*   **โครงสร้างหน้าจอ:**
    1.  **Shared Header (Navbar)**: สถานะ Active อยู่ที่ `Course`
    2.  **Product Showcase Section**:
        *   ฝั่งซ้าย: รูปพรีวิวงานออกแบบเว็บ มีปุ่มไอคอนหัวใจ (Like/Favorite) ลอยอยู่มุมบนซ้าย (`image/Product 4.png`)
        *   ฝั่งขวา:
            *   หัวข้อ `Web Design Course`
            *   ป้ายแท็กสีเขียวอ่อน `Tag`
            *   ราคา `฿4,000 บาท`
            *   คำอธิบาย `Text`
            *   ตัวเลือก Dropdown 2 ช่อง (`Label / Value`)
            *   ปุ่มกดเต็มความกว้าง `Add to cart` (สีน้ำเงิน)
            *   กล่อง FAQ แบบพับได้ (Accordion) หัวข้อ `Title` และเนื้อหาคำตอบ
    3.  **Course Grid Section**: หัวข้อ `Course` พร้อมการ์ดคอร์ส 3 ใบ
    4.  **Shared Footer**

---

## 👨‍🏫 4. หน้าข้อมูลผู้สอน (Instructor Profile) - `instructors.html`
*   **ไฟล์รูปต้นแบบ:** [`guides/Instructors.png`](./guides/Instructors.png)
*   **โครงสร้างหน้าจอ:**
    1.  **Shared Header (Navbar)**: สถานะ Active อยู่ที่ `Instructors`
    2.  **Profile Section**:
        *   ฝั่งซ้าย: รูปถ่ายอาจารย์จิรวัฒน์แบบวงกลมขนาดใหญ่ (`image/Profile.png`)
        *   ฝั่งขวา:
            *   ชื่อ `Jirawat Tachaprechawong` ขนาดใหญ่สีน้ำเงิน
            *   คำคม: *"สอนด้วยความเข้าใจ ใส่ใจทุกรายละเอียด พร้อมปูพื้นฐานให้แน่นและต่อยอดได้ในเวลาอันสั้น"*
            *   หัวข้อ `program` แสดงไอคอนโปรแกรมเครื่องมือ 12 ชนิด จัดเรียง 2 แถวในกล่องสี่เหลี่ยมมน
            *   หัวข้อ `product` แสดงข้อความ `web game paint vdo`
    3.  **Shared Footer**

---

## 📞 5. หน้าติดต่อเรา (Contact Us) - `contact.html`
*   **ไฟล์รูปต้นแบบ:** [`guides/Contact US.png`](./guides/Contact%20US.png)
*   **โครงสร้างหน้าจอ:**
    1.  **Shared Header (Navbar)**: สถานะ Active อยู่ที่ `Contact Us`
    2.  **Form Section (พื้นหลังสีขาว)**:
        *   หัวข้อใหญ่ `Contact Us` สีน้ำเงินกึ่งกลาง
        *   ช่องกรอก `Name` และ `Email` ทรงแคปซูลมนพื้นหลังสีเทาอ่อน
        *   ช่องพิมพ์ข้อความ `Message` ทรงมน
    3.  **Info Section (พื้นหลังสีน้ำเงินสด)**:
        *   3 วงกลมไอคอนสีขาว:
            *   📍 **Address**: `75/1 คู้บอน 27 แยก 10 แขวง ท่าแร้ง เขตบางเขน กรุงเทพ`
            *   📞 **Phone**: `086 319 6839` / `081 4588457`
            *   ✉️ **Email**: `jirawat9ball@gmail.com`
    4.  **Shared Footer**

---

## 🛠️ 6. ชุดภาพไอคอนและส่วนประกอบเสริม
*   **ไอคอนโปรแกรม:** [`guides/Icon Program.png`](./guides/Icon%20Program.png)
*   **ไอคอนรายการ:** [`guides/Icon list.png`](./guides/Icon%20list.png)
