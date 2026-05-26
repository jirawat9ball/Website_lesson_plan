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
    
    // แสดงผลลัพธ์
    resultDiv.innerText = "ค่า BMI ของคุณคือ: " + bmi.toFixed(2);
    resultDiv.style.color = "#2c3e50";
    
    // ลองใช้ console.log() เพื่อตรวจเช็คค่า
    console.log("Weight: " + weight);
    console.log("Height: " + heightM);
    console.log("BMI: " + bmi);
}

// ผูกฟังก์ชันเข้ากับปุ่มกด
calcBtn.addEventListener('click', calculateBMI);
