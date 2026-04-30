function showForm(userType) {
    // إخفاء منطقة الاختيار (تأكد من كتابة الاسم الصحيح)
    document.getElementById('selectionArea').classList.add('hidden');
    
    // إظهار منطقة النموذج
    const formContainer = document.getElementById('formArea');
    formContainer.classList.remove('hidden');
    
    // تغيير النص (تأكد من استخدام displayRole)
    document.getElementById('displayRole').innerText = 'Join as a ' + userType;
}

function goBack() {
    // إخفاء النموذج وإظهار الاختيارات
    document.getElementById('idform').classList.add('hidden');
    document.getElementById('selectionArea').classList.remove('hidden');
}