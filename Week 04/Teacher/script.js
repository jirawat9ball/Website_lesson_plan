// ดึง Element ต่างๆ จากหน้าเว็บ HTML
const lottoInput = document.getElementById('lotto-input');
const playBtn = document.getElementById('play-btn');
const winningNumDiv = document.getElementById('winning-number');
const resultDiv = document.getElementById('result');

// ฟังก์ชันสำหรับเสี่ยงโชค/ตรวจรางวัล
function playLottery() {
    // 1. ดึงค่าจากช่องอินพุตและแปลงเป็นตัวเลขจำนวนเต็ม
    const userGuess = parseInt(lottoInput.value);
    
    // 2. ตรวจสอบความถูกต้องของข้อมูล (Validation)
    if (isNaN(userGuess) || userGuess < 0 || userGuess > 99 || lottoInput.value.trim() === "") {
        resultDiv.innerText = "กรุณากรอกตัวเลข 2 หลักให้ถูกต้อง (00-99)!";
        resultDiv.style.color = "orange";
        winningNumDiv.innerText = "--";
        return;
    }
    
    // 3. สุ่มเลขท้าย 2 ตัว (00 - 99)
    const winningNumber = Math.floor(Math.random() * 100);
    
    // 4. แปลงตัวเลขสุ่มให้เป็นข้อความ 2 หลัก (เช่น 7 -> "07") เพื่อความสวยงามในการแสดงผล
    const formattedWinningNumber = winningNumber.toString().padStart(2, '0');
    winningNumDiv.innerText = formattedWinningNumber;
    
    // 5. ตรวจสอบเงื่อนไขการถูกรางวัล (If-Else) พร้อมโจทย์ท้าทาย (Near Miss)
    if (userGuess === winningNumber) {
        resultDiv.innerText = "🎉 ยินดีด้วย! คุณถูกรางวัลเลขท้าย 2 ตัว!";
        resultDiv.style.color = "green";
    } else if (userGuess === winningNumber - 1 || userGuess === winningNumber + 1) {
        // รางวัลเฉียด (+/- 1)
        resultDiv.innerText = "เฉียดไปนิดเดียว! เกือบถูกรางวัลแล้ว!";
        resultDiv.style.color = "orange";
    } else {
        resultDiv.innerText = "เสียใจด้วย! คุณไม่ถูกรางวัลในรอบนี้";
        resultDiv.style.color = "red";
    }
    
    // แสดงผลตรวจเช็คใน Console ของเบราว์เซอร์
    console.log("เลขที่คุณซื้อ: " + lottoInput.value);
    console.log("เลขที่สุ่มได้: " + formattedWinningNumber);
}

// ผูกฟังก์ชันเข้ากับปุ่มกดตรวจรางวัล
playBtn.addEventListener('click', playLottery);
