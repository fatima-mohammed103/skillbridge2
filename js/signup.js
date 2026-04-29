
    function showForm(userType) {
        // إخفاء صفحة الاختيار
        document.getElementById('selectionContainer').classList.add('hidden');
        
        // إظهار صفحة الفورم
        const formContainer = document.getElementById('formContainer');
        formContainer.classList.remove('hidden');
        
        // تغيير العنوان بناءً على الاختيار
        document.getElementById('formTitle').innerText = 'Join as a ' + userType;
    }

    function goBack() {
        // العودة للصفحة السابقة
        document.getElementById('formContainer').classList.add('hidden');
        document.getElementById('selectionContainer').classList.remove('hidden');
    }
