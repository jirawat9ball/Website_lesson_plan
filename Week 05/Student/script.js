// === ไฟล์ฝึกหัดเขียนตรรกะเกมเป่ายิ้งฉุบ (Rock-Paper-Scissors) สำหรับนักเรียน (เวอร์ชันเรียนรู้ Core JS) ===

// 1. [ภารกิจ - Object] ประกาศตัวแปรเก็บสถานะคะแนนสะสมให้อยู่ใน Object ตัวเดียวกัน
// - สร้างคุณสมบัติ (Properties): playerScore เริ่มด้วย 0, computerScore เริ่มด้วย 0, winningScore เป็น 5
const gameState = {
    playerScore: 0,
    computerScore: 0,
    winningScore: 5
};

// [ภารกิจ - Array] สร้าง Array เก็บตัวเลือกของเกม 3 ทางเลือก ได้แก่ 'rock', 'paper', 'scissors'
const choices = ['rock', 'paper', 'scissors'];

// 2. ดึง Element ต่างๆ จาก HTML เพื่อนำมาควบคุมใน JS
const resetBtn = document.getElementById('reset-btn');
const playerChoiceSpan = document.getElementById('player-choice');
const computerChoiceSpan = document.getElementById('computer-choice');
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const gameResultDiv = document.getElementById('game-result');


// 3. [ภารกิจ - Arrow Function & switch-case] ฟังก์ชันช่วยแปลงชื่อตัวเลือกอังกฤษเป็น Emoji ภาษาไทย
// - เขียนแบบ Arrow Function รับพารามิเตอร์ชื่อ choice
// - ใช้ switch-case ในการเช็คค่า choice เพื่อรีเทิร์น Emoji ออกไป:
//   'rock' ➡️ '✊ ค้อน', 'paper' ➡️ '✋ กระดาษ', 'scissors' ➡️ '✌️ กรรไกร', ค่าอื่นๆ ➡️ '-'
const getChoiceEmoji = (choice) => {
    // [ภารกิจ] เขียนตรรกะ switch-case ด้านล่างนี้
    switch (choice) {
        case 'rock':
            return '✊ ค้อน';
        // case ...
        default:
            return '-';
    }
};


// 4. [ภารกิจ - Regular Function] ฟังก์ชันหลักสำหรับประมวลผลการเล่นแต่ละรอบ (Play Round)
function play(playerChoice) {
    // 4.1 สุ่มทางเลือกของคอมพิวเตอร์
    // - สุ่มตัวเลขดัชนี index 0, 1 หรือ 2 ผ่าน Math.random() และ Math.floor()
    // - นำผลลัพธ์ดัชนีไปดึงค่าตัวเลือกที่คอมพิวเตอร์สุ่มได้มาจาก Array choices
    const randomIndex = 0; // [ภารกิจ] แก้ไข 0 ให้เป็นโค้ดสุ่ม Math.floor(Math.random() * 3)
    const computerChoice = choices[randomIndex];

    // 4.2 เรียกใช้งานฟังก์ชัน getChoiceEmoji เพื่อแสดงผลตัวเลือกบนหน้าจอ
    playerChoiceSpan.innerText = getChoiceEmoji(playerChoice);
    computerChoiceSpan.innerText = getChoiceEmoji(computerChoice);
    
    // 4.3 [ภารกิจหลัก] ตรรกะเงื่อนไขเปรียบเทียบผลแพ้ชนะ (if-else if-else)
    // - เงื่อนไขที่ 1: ผู้เล่นเลือกตรงกับคอมพิวเตอร์ ➡️ แสดงผลลัพธ์รอบปัจจุบัน "เสมอ!"
    // - เงื่อนไขที่ 2: ผู้เล่นชนะ (ค้อน ชนะกรรไกร OR กระดาษ ชนะค้อน OR กรรไกร ชนะกระดาษ)
    //   ➡️ แสดงผลรอบปัจจุบัน "ชนะ!", เพิ่มคะแนนผู้เล่นขึ้น 1 คะแนนใน Object gameState, อัปเดตคะแนนที่ playerScoreSpan
    // - เงื่อนไขที่ 3: คอมพิวเตอร์ชนะ (นอกเหนือจากด้านบนทั้งหมด)
    //   ➡️ แสดงผลรอบปัจจุบัน "คอมพิวเตอร์ชนะ!", เพิ่มคะแนนคอมพิวเตอร์ขึ้น 1 คะแนนใน Object gameState, อัปเดตคะแนนที่ computerScoreSpan
    
    if (playerChoice === computerChoice) {
        // [ภารกิจ] เขียนการจัดการกรณีเสมอ (ใบ้: เปลี่ยนข้อความใน gameResultDiv และสีอักษรเป็นสีเทา)
        
    } else if (
        // [ใบ้แนวการเขียนเงื่อนไขผสม] 
        // (playerChoice === 'rock' && computerChoice === 'scissors') ||
        // (playerChoice === 'paper' && ... ) ||
        // ( ... )
        false // [ภารกิจ] เขียนเงื่อนไขผู้เล่นชนะด้านบนและเปลี่ยน false เป็นเงื่อนไขจริง
    ) {
        // [ภารกิจ] เขียนการจัดการกรณีผู้เล่นชนะ (ใบ้: เปลี่ยนข้อความ/สี, เพิ่มคะแนนใน gameState และอัปเดตสแปน)
        
    } else {
        // [ภารกิจ] เขียนการจัดการกรณีคอมพิวเตอร์ชนะ
        
    }

    // 4.4 ตรวจแต้มสะสม: ถ้าผู้เล่น หรือคอมพิวเตอร์ใน gameState มีคะแนนถึงเป้าหมาย winningScore
    // ให้สั่งรันฟังก์ชันประกาศผู้ชนะเกมและปิดระบบควบคุม (declareWinner())
    if (false) { // [ภารกิจ] เปลี่ยน false เป็นเงื่อนไขตรวจสอบคะแนนสะสมสะสมใน gameState
        declareWinner();
    }
}


// 5. [ภารกิจ - Arrow Function & for loop] ฟังก์ชันประกาศผู้ชนะเกมและปิดระบบควบคุม (End Game)
const declareWinner = () => {
    // 5.1 [for loop] วนลูปเพื่อสั่งปิดใช้งาน (disabled = true) ปุ่มทั้ง 3 ปุ่ม
    // (ใบ้: ใช้ไอดีปุ่มรูปแบบ `${choices[i]}-btn` เพื่อดึงและปิดปุ่มในแต่ละรอบของ loop)
    for (let i = 0; i < choices.length; i++) {
        // [ภารกิจ] ดึง Element ปุ่มตัวเลือกและสั่ง disabled = true
    }
    
    // 5.2 ตรวจสอบคะแนนใน gameState เพื่อเขียนสรุปผู้ชนะตัวจริงลงใน gameResultDiv
    // - ถ้าคะแนนผู้เล่นเท่ากับคะแนนเป้าหมายชนะ ➡️ สรุปผลว่าคุณชนะรางวัลใหญ่!
    // - ถ้าคอมพิวเตอร์ได้แต้มถึงก่อน ➡️ สรุปผลว่าคอมพิวเตอร์เป็นฝ่ายชนะ!
    
    // 5.3 โชว์ปุ่มเริ่มเล่นใหม่ (resetBtn.style.display = "inline-block")
};


// 6. [ภารกิจ - Arrow Function & for loop] ฟังก์ชันรีเซ็ตระบบเกมทั้งหมด (Reset Game)
const resetGame = () => {
    // 6.1 รีเซ็ตคะแนนสะสมฝั่งผู้เล่นและคอมพิวเตอร์ใน gameState กลับเป็น 0
    
    // 6.2 อัปเดตการแสดงผลคะแนนและตัวเลือกบน DOM หน้าเว็บให้เป็นค่าเริ่มต้น
    
    // 6.3 [for loop] วนลูปสั่งเปิดใช้งานปุ่มเลือกทั้ง 3 ปุ่มอีกครั้ง (disabled = false)
    for (let i = 0; i < choices.length; i++) {
        // [ภารกิจ] ดึง Element ปุ่มตัวเลือกและสั่ง disabled = false
    }
    
    // 6.4 ซ่อนปุ่มเริ่มเล่นใหม่กลับไป (resetBtn.style.display = "none")
};


// 7. [ภารกิจ - for loop] ผูก Event Listener เข้ากับปุ่มควบคุมบนหน้าเว็บโดยใช้การวนลูป
// - วนลูปตามขนาดของ Array choices
// - ในแต่ละรอบของลูป ให้ดึงปุ่มผ่านไอดี `${choices[i]}-btn`
// - ผูกเหตุการณ์คลิกปุ่ม ให้รันฟังก์ชัน play พร้อมส่งค่า choices[i] เข้าไป
// (ใบ้: btn.addEventListener('click', () => play(choices[i])); )
for (let i = 0; i < choices.length; i++) {
    // [ภารกิจ] ดึงปุ่มและทำการผูก Event Listener ที่นี่
}

// ผูก Event Listener ปุ่มรีเซ็ตธรรมดา
resetBtn.addEventListener('click', resetGame);

// 8. สั่งเปิดระบบให้ใช้งานทันที (เรียกใช้งานฟังก์ชัน resetGame() เพื่อเคลียร์ค่าเริ่มต้น)
resetGame();
