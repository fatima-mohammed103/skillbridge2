

  function openMenu() {
    document.getElementById("sideMenu").classList.add("active");
    document.getElementById("overlay").classList.add("active");
  }

  function closeMenu() {
    document.getElementById("sideMenu").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");

  }
/////footer


document.querySelectorAll('.column h4').forEach(header => {
            header.addEventListener('click', () => {
                if (window.innerWidth <= 600) {
                    const parent = header.parentElement;
                    // غلق القوائم الأخرى
                    document.querySelectorAll('.column').forEach(col => {
                        if (col !== parent) col.classList.remove('active');
                    });
                    // فتح/غلق الحالية
                    parent.classList.toggle('active');
                }
            });
        });

        // دوال الشات
        function toggleChat() {
            const chat = document.getElementById('chatContainer');
            chat.style.display = (chat.style.display === 'flex') ? 'none' : 'flex';
        }

        function sendMessage() {
            const input = document.getElementById('userInput');
            const chatMessages = document.getElementById('chatMessages');
            if (input.value.trim() !== "") {
                const msg = document.createElement('div');
                msg.className = 'message user';
                msg.innerText = input.value;
                chatMessages.appendChild(msg);
                input.value = "";
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
        }



/////////////////////////////////

function toggleLanguage() {
    const html = document.documentElement;
    const isEn = html.getAttribute('lang') === 'en';
    
    if (isEn) {
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        updateContent('ar');
    } else {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        updateContent('en');
    }
}

function updateContent(lang) {
    const data = {
        'en': {
            'find': 'Find Freelancer',
            'team': 'Team Page',
            'dash': 'Dashboard',
            'more': 'More ▾',
            'signup': 'Sign Up',
            'login': 'Log In',
            'langBtn': 'AR',
            'langToggle': 'Language: English'
        },
        'ar': {
            'find': 'ابحث عن مستقل',
            'team': 'صفحة الفريق',
            'dash': 'لوحة التحكم',
            'more': 'المزيد ▾',
            'signup': 'إنشاء حساب',
            'login': 'دخول',
            'langBtn': 'EN',
            'langToggle': 'اللغة: العربية'
        }
    };

    // تحديث النصوص
    document.getElementById('link-find').innerText = data[lang].find;
    document.getElementById('link-team').innerText = data[lang].team;
    document.getElementById('link-dash').innerText = data[lang].dash;
    document.getElementById('link-more').innerText = data[lang].more;
    
    // أزرار الحساب
    document.querySelector('.nav-signup-btn').innerText = data[lang].signup;
    document.querySelector('.side-signup').innerText = data[lang].signup;
    document.querySelector('.side-login').innerText = data[lang].login;

    // أزرار اللغة
    document.querySelector('.lang-btn-desktop').innerText = data[lang].langBtn;
    document.querySelector('.txt-lang-toggle').innerText = data[lang].langToggle;
    
    // إغلاق القائمة بعد التحويل
    closeMenu();
}
















/////////////////////////////////////////


  function showImg(event){
        event.preventDefault();
        document.getElementById("IMG_2").style.display="none";
        document.getElementById("IMG").style.display="block";
        document.getElementById("IMG").scrollIntoView({
          behavior: "smooth"
        });
    }
    function showImg_2(event){
        event.preventDefault();
        document.getElementById("IMG").style.display="none";
        document.getElementById("IMG_2").style.display="block";
        document.getElementById("IMG_2").scrollIntoView({
          behavior: "smooth"
        });
    }


    function whenClick(){
        var cBorder=document.querySelectorAll(".Border");
        cBorder.forEach(function(item) {
            item.style.height="54px";
            item.style.display="flex";
            item.style.padding="0 15px";
            item.style.alignItems="center";

            var icon=item.querySelector("i");
            if(icon){
                icon.style.display="none";
            }
            
            var AllText=item.querySelectorAll("p,span,h4");
            AllText.forEach(function(pTag){
            pTag.style.fontSize="15px";
            pTag.style.marginTop="10px";});
        });
        
    }











    




    // /////////////////
    // script.js

function toggleChat() {
    const chatContainer = document.getElementById('chatContainer');
    chatContainer.style.display = (chatContainer.style.display === 'flex') ? 'none' : 'flex';
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const messageText = input.value.trim();
    
    if (messageText === "") return;

    // إضافة رسالة المستخدم
    addMessage(messageText, 'user');
    input.value = "";

    // محاكاة تفكير الـ AI
    setTimeout(() => {
        const botResponse = getBotResponse(messageText);
        addMessage(botResponse, 'bot');
    }, 6000); // 0.6 ثانية للرد
}

function addMessage(text, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.innerText = text;
    chatMessages.appendChild(messageDiv);
    
    // سكرول لأسفل تلقائياً
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// منطق الردود (يمكنك تطويره ليرتبط بـ API مثل OpenAI لاحقاً)
function getBotResponse(input) {
    const msg = input.toLowerCase();
    
    if (msg.includes("job") || msg.includes("work")) {
        return "At SkillBridge, we have many opportunities for fresh graduates. Check the 'Find Work' section!";
    } else if (msg.includes("hire") || msg.includes("business")) {
        return "Looking for talent? You can post a project and professional graduates will apply soon.";
    } else if (msg.includes("hello") || msg.includes("hi")) {
        return "Hi there! How can I assist you with SkillBridge today?";
    } else {
        return "That's interesting! Can you tell me more so I can help you better?";
    }
}

// السماح بإرسال الرسالة عند الضغط على Enter
document.getElementById('userInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});


/////////////////////////////////////

const developers = [
    { id: 1, name: "eslam", skill: "Frontend", password: "12345", target: "cliunt.html" },
    { id: 2, name: "khaled", skill: "Backend", password: "12345", target: "profile.html" }
];

function login(event) {
    event.preventDefault();
    

    let uservalue = document.querySelector("#username").value.trim(); // trim لإزالة المسافات الزائدة
    let passvalue = document.querySelector("#password").value.trim();

    let foundUser = developers.find(dev => dev.name === uservalue && dev.password === passvalue);

    if (foundUser) {
        
        localStorage.setItem("name", foundUser.name);
        localStorage.setItem("skill", foundUser.skill);
        
    
        window.location.href = foundUser.target; 
    } else {
        console.log("بيانات خاطئة!");
        alert("اسم المستخدم أو كلمة المرور غير صحيحة");
    }
}



// /////

    function showForm(role) {
        // تغيير النص في العنوان بناءً على الاختيار
        document.getElementById('displayRole').innerText = "Join as " + role;
        toggleView();
    }

    function toggleView() {
        const selection = document.getElementById('selectionArea');
        const form = document.getElementById('formArea');

        // تبديل الكلاس المخفي
        selection.classList.toggle('hidden');
        form.classList.toggle('hidden');
    }

    // منع الفورم من عمل Refresh للصفحة عند الإرسال (للتجربة)
    document.getElementById('signupForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Form Submitted Successfully!');
    });

////////sign up


 


