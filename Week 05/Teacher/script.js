// === โค้ดเกมเป่ายิ้งฉุบ (Rock-Paper-Scissors) สำหรับผู้สอน (เวอร์ชันอัปเกรดพื้นฐาน Core JS) ===

// 1. [Object] ประกาศตัวแปรเก็บสถานะคะแนนสะสม (State Variables inside an Object)
const gameState = {
    playerScore: 0,
    computerScore: 0,
    winningScore: 5 // กำหนดเป้าหมายคะแนนสูงสุดเพื่อจบเกม
};

// [Array] เก็บตัวเลือกทั้งหมดของเกม
const choices = ['rock', 'paper', 'scissors'];

// 2. ดึง Element ต่างๆ จากหน้าเว็บ HTML (สำหรับส่วนที่ใช้งานทั่วไป)
const resetBtn = document.getElementById('reset-btn');
const playerChoiceSpan = document.getElementById('player-choice');
const computerChoiceSpan = document.getElementById('computer-choice');
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const gameResultDiv = document.getElementById('game-result');

// 3. [Arrow Function & switch-case] ฟังก์ชันย่อยสำหรับแปลงตัวเลือกอังกฤษเป็น Emoji ภาษาไทย
const getChoiceEmoji = (choice) => {
    switch (choice) {
        case 'rock':
            return '✊ ค้อน';
        case 'paper':
            return '✋ กระดาษ';
        case 'scissors':
            return '✌️ กรรไกร';
        default:
            return '-';
    }
};

// 4. [Regular Function] ฟังก์ชันหลักประมวลผลการเล่นแต่ละรอบ (Play Round)
function play(playerChoice) {
    // 4.1 สุ่มทางเลือกของคอมพิวเตอร์ (ดึงจาก Array choices)
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];

    // 4.2 เรียกใช้งาน Arrow Function ร่วมกับ switch-case เพื่อแสดงภาพตัวเลือก
    playerChoiceSpan.innerText = getChoiceEmoji(playerChoice);
    computerChoiceSpan.innerText = getChoiceEmoji(computerChoice);

    // 4.3 ตรรกะเงื่อนไขเปรียบเทียบผลแพ้ชนะ (if-else if-else)
    if (playerChoice === computerChoice) {
        gameResultDiv.innerText = "🤝 รอบนี้: เสมอกัน!";
        gameResultDiv.style.color = "#7f8c8d"; // สีเทา
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        gameResultDiv.innerText = "🎉 รอบนี้: คุณชนะ!";
        gameResultDiv.style.color = "#2ed573"; // สีเขียว
        gameState.playerScore++;
        playerScoreSpan.innerText = gameState.playerScore;
    } else {
        gameResultDiv.innerText = "💻 รอบนี้: คอมพิวเตอร์ชนะ!";
        gameResultDiv.style.color = "#ff4757"; // สีแดง
        gameState.computerScore++;
        computerScoreSpan.innerText = gameState.computerScore;
    }

    // 4.4 ตรวจสอบเป้าหมายแต้มสูงสุด
    if (gameState.playerScore === gameState.winningScore || gameState.computerScore === gameState.winningScore) {
        declareWinner();
    }
}

// 5. [Arrow Function & for loop] ฟังก์ชันประกาศผู้ชนะเกมและปิดระบบควบคุม (End Game)
const declareWinner = () => {
    // [for loop] บล็อกปุ่มตัวเลือกทั้งหมดเพื่อยุติเกมไม่ให้รันต่อ
    for (let i = 0; i < choices.length; i++) {
        const btn = document.getElementById(`${choices[i]}-btn`);
        btn.disabled = true;
    }

    // แสดงข้อความสรุปชัยชนะสุดท้าย
    if (gameState.playerScore === gameState.winningScore) {
        gameResultDiv.innerText = "🏆 ชนะเลิศ! คุณเอาชนะคอมพิวเตอร์ได้สำเร็จ!";
        gameResultDiv.style.color = "#ffa500"; // สีส้มทอง
    } else {
        gameResultDiv.innerText = "💀 พ่ายแพ้! คอมพิวเตอร์ชนะโปรเจกต์นี้!";
        gameResultDiv.style.color = "#7f8c8d"; // สีเทาเข้ม
    }

    // แสดงปุ่มเริ่มเล่นใหม่
    resetBtn.style.display = "inline-block";
};

// 6. [Arrow Function & for loop] ฟังก์ชันรีเซ็ตระบบเกมทั้งหมด (Reset Game)
const resetGame = () => {
    // รีเซ็ตค่าคะแนนสะสมใน Object
    gameState.playerScore = 0;
    gameState.computerScore = 0;
    
    // รีเซ็ตการแสดงผลคะแนนและทางเลือก
    playerScoreSpan.innerText = "0";
    computerScoreSpan.innerText = "0";
    playerChoiceSpan.innerText = "-";
    computerChoiceSpan.innerText = "-";
    
    gameResultDiv.innerText = "เลือก ค้อน, กระดาษ หรือ กรรไกร เพื่อเริ่มเล่น!";
    gameResultDiv.style.color = "#fff";

    // [for loop] เปิดการทำงานของปุ่มเลือกทั้งหมด
    for (let i = 0; i < choices.length; i++) {
        const btn = document.getElementById(`${choices[i]}-btn`);
        btn.disabled = false;
    }
    
    // ซ่อนปุ่มรีเซ็ต
    resetBtn.style.display = "none";
};

// 7. [for loop] ผูกเหตุการณ์คลิกปุ่มตัวเลือกทั้งหมดโดยใช้ Loop (ไม่ต้องเขียนโค้ดซ้ำซ้อน)
for (let i = 0; i < choices.length; i++) {
    const btn = document.getElementById(`${choices[i]}-btn`);
    btn.addEventListener('click', () => play(choices[i]));
}

// ผูกเหตุการณ์ปุ่มรีเซ็ต
resetBtn.addEventListener('click', resetGame);

// เรียกใช้ฟังก์ชันเพื่อเคลียร์หน้าจอเริ่มต้น
resetGame();

// 💡 [ตัวอย่างเสริม] ความแตกต่างกับ while loop
// while loop จะทำงานซ้ำๆ ไปเรื่อยๆ ตราบใดที่เงื่อนไขยังคงเป็นจริง (นิยมใช้กรณีไม่ทราบรอบที่แน่นอน)
// เช่น สุ่มดัชนีใหม่ไปเรื่อยๆ จนกว่าจะไม่ซ้ำกับดัชนีของรอบที่แล้ว:
/*
let lastIndex = 0;
let newIndex = Math.floor(Math.random() * 3);
while (newIndex === lastIndex) {
    newIndex = Math.floor(Math.random() * 3); // วนสุ่มซ้ำถ้าได้ตัวเดิม
}
*/
