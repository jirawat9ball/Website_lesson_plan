const btn = document.getElementById('btn');
const message = document.getElementById('message');

btn.addEventListener('click', () => {
    message.innerText = "ข้อความถูกเปลี่ยนแล้ว! 🎉";
    message.style.color = "#e74c3c";
});
