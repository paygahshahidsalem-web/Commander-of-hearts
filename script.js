const quiz = [
{q:"سردار شهید حاج قاسم سلیمانی در چه سالی و کجا به دنیا آمد؟", options:["۱۳۳۰ در تهران","۱۳۳۵ در روستای قنات‌ملک استان کرمان","۱۳۴۰ در مشهد","۱۳۳۵ در اصفهان"], answer:1},
{q:"خانواده سردار چه ویژگی داشتند؟", options:["فرهیخته و هنرمند","خانواده‌ای ساده، مذهبی و پرتلاش","ساده و بی‌تفاوت","ثروتمند و سیاسی"], answer:1},
{q:"سردار قبل از سپاه چه کاری می‌کرد؟", options:["دانشگاه و تدریس","کشاورزی و کارگری","سربازی","شرکت تجاری"], answer:1},
{q:"چه چیزی او را به دفاع از کشور کشاند؟", options:["سرگرمی","علم","دوستی با نیروها","انقلاب اسلامی و احساس مسئولیت دینی"], answer:3},
{q:"اولین حضور نظامی کجا بود؟", options:["سپاه پاسداران","مدرسه","ارتش","جنگ ایران و عراق به عنوان بسیجی"], answer:3},
{q:"سردار فرمانده کدام لشکر بود؟", options:["لشکر ۲۱ رمضان","لشکر ۵۷ ولیعصر","لشکر ۴۱ ثارالله کرمان","لشکر ۱۰ سیدالشهدا"], answer:2},
{q:"ویژگی بارز اخلاقی سردار چه بود؟", options:["قدرت‌طلبی","صلح‌طلبی","فروتنی و تواضع","شجاعت"], answer:2},
{q:"چرا رزمندگان او را دوست داشتند؟", options:["قدرت نظامی","احترام و همراهی با نیروها","غیرتی بودن","شهرت"], answer:1},
{q:"سردار چه نقشی در دفاع مقدس داشت؟", options:["فرماندهی و حضور در عملیات‌های مهم","رصد اطلاعات","پشتیبانی","مشاوره سیاسی"], answer:0},
{q:"فرماندهی نیروی قدس سپاه چه مسئولیتی است؟", options:["رصد داخلی","امور فرهنگی","امور اقتصادی","هدایت مأموریت‌های برون‌مرزی"], answer:3},
{q:"سردار چه نقشی در مقابله با داعش داشت؟", options:["آموزش","رصد اقتصادی","هماهنگی و مشاوره به نیروهای مقاومت","نظارت سیاسی"], answer:2},
{q:"چرا به عنوان استراتژیست شناخته می‌شد؟", options:["قدرت نظامی","به دلیل برنامه‌ریزی دقیق عملیات‌ها","شهرت جهانی","تحقیق علمی"], answer:1},
{q:"رفتار او با مردم چگونه بود؟", options:["خشن","تنها مشاور","صمیمی، ساده و محترمانه","دور از مردم"], answer:2},
{q:"چه چیزی باعث اعتماد نیروها شد؟", options:["قدرت سلاح","شایعه","صداقت و حضور میدانی","شهرت"], answer:2},
{q:"سردار چگونه در شرایط سخت تصمیم می‌گرفت؟", options:["با حدس","با تقلید","با آرامش و تحلیل دقیق","با عجله"], answer:2},
{q:"چرا الگوی جوانان است؟", options:["ترکیب شجاعت، اخلاق و ایمان","قدرت و پول","تقلید از دیگران","شهرت"], answer:0},
{q:"سردار چه تأثیری بر روحیه نیروها داشت؟", options:["ایجاد انگیزه و امید","ترس","کنترل سخت","بی‌تفاوتی"], answer:0},
{q:"نقش او در منطقه چه بود؟", options:["تحقیق نظامی","مدیریت سیاسی","کنترل اقتصادی","تقویت محور مقاومت"], answer:3},
{q:"چگونه با فرماندهان دیگر کشورها تعامل داشت؟", options:["بی‌تفاوت","فقط مشاوره","با تهدید","با احترام و همکاری"], answer:3},
{q:"چه چیزی او را متمایز می‌کرد؟", options:["قدرت خالص","اخلاق در کنار قدرت","نظارت","شهرت"], answer:1},
{q:"چگونه آموزش نیروها را انجام می‌داد؟", options:["تئوری خالص","با آموزش عملی و روحیه‌بخشی","کمکی","غیرحضوری"], answer:1},
{q:"چرا حضور میدانی مهم بود؟", options:["اعتماد و هماهنگی بهتر","قدرت شخصی","شایعه","نظارت اداری"], answer:0},
{q:"چگونه با خطر روبه‌رو می‌شد؟", options:["با شجاعت و تدبیر","با اجبار دیگران","با بی‌تفاوتی","با ترس"], answer:0},
{q:"نقش در ایجاد امنیت چه بود؟", options:["مدیریت مالی","اقتصاد","جلوگیری از گسترش ناامنی","تحقیق"], answer:2},
{q:"چرا محبوب مردم شد؟", options:["قدرت","خدمت بی‌ادعا","پول","شهرت"], answer:1},
{q:"نگاه او به قدرت چه بود؟", options:["بی‌تفاوتی","قدرت هدف بود","قدرت ابزار بود نه هدف","قدرت برای سلطه"], answer:2},
{q:"ویژگی مدیریتی او چه بود؟", options:["قدرت‌طلبی","سخت‌گیری","بی‌تفاوتی","تصمیم‌گیری دقیق و انسانی"], answer:3},
{q:"چگونه الهام‌بخش شد؟", options:["با نمایش","با عمل نه فقط با حرف","با تبلیغ","با شعار"], answer:1},
{q:"چه درسی برای جوانان دارد؟", options:["ترس","مسئولیت‌پذیری و ایمان","قدرت","شهرت"], answer:1},
{q:"مهم‌ترین پیام زندگی چیست؟", options:["قدرت","ترکیب ایمان، شجاعت و اخلاق","تقلید","شهرت"], answer:1}
];

let current=0, score=0, lives=3, timer=15, interval;

function showQuestion(){
  if(current>=quiz.length || lives<=0){
    document.getElementById("question").innerText="پایان بازی!";
    document.getElementById("score").innerText="امتیاز شما: "+score;
    document.querySelectorAll("#options button").forEach(b=>b.style.display="none");
    document.getElementById("sound-finish").play();
    return;
  }
  document.getElementById("question").innerText=quiz[current].q;
  for(let i=0;i<4;i++){
    let btn=document.getElementById("btn"+i);
    btn.innerText=quiz[current].options[i];
    btn.onclick=function(){
      clearInterval(interval);
      if(i===quiz[current].answer){
        document.getElementById("sound-correct").play();
        score+=10;
        document.getElementById("message").innerText="✅ درست است!";
      }else{
        document.getElementById("sound-wrong").play();
        lives--;
        document.getElementById("message").innerText="❌ غلط است!";
        document.getElementById("lives").innerText=lives;
      }
      current++;
      setTimeout(()=>{
        document.getElementById("message").innerText="";
        timer=15;
        startTimer();
        showQuestion();
      },700);
    }
  }
  document.getElementById("score").innerText=score;
}

function startTimer(){
  document.getElementById("timer").innerText="⏱ "+timer;
  interval=setInterval(()=>{
    timer--;
    document.getElementById("timer").innerText="⏱ "+timer;
    if(timer<=0){
      clearInterval(interval);
      lives--;
      document.getElementById("lives").innerText=lives;
      current++;
      showQuestion();
      timer=15;
      startTimer();
    }
  },1000);
}

showQuestion();
startTimer();
