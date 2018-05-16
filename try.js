

var questionset=[
            {
                ques:"HTML is what type of language ? ",
                option1:"Scripting Language",
                option2:"Markup Language",
                option3:"Programming Language",
                option4:"Network Protocol",
                answer:2

            },

           {
                ques:"HTML uses  ",
                option1:"User defined tags",
                option2:"Pre-specified tags",
                option3:"Fixed tags defined by the language",
                option4:"Tags only for linking",
                answer:2

            },
            {
              ques:"< br  / >What type of tag is this?",
              option1:" Break tag",
              option2:"Head tag",
              option3:"Horizontal line",
              option4:"Opening tag",
              answer:1
            },
            {
              ques:" what is the difference in an opening tag and a closing tag?",
              option1:"Opening tag has a / in front",
              option2:"Closing tag has a / in front",
              option3:"There is no difference",
              option4:"None of these",
              answer:"2"
            },
            {
              ques:" Which of the following is an example of an empty element?",
              option1:"< img / >",
              option2:"< img > < / img >",
              option3:" < / img>",
              option4:"None of these",
              answer:"1"
            },
            {
              ques:" What does CSS stand for?",
              option1:"Creative Style Sheets",
              option2:"Cascading Style Sheets",
              option3:"Colorful Style Sheets",
              option4:"Computer Style Sheets",
              answer:"2"
            },
            {
              ques:"From which tag descriptive list starts ?",
              option1:"< LL >",
              option2:"< DD >",
              option3:"< DL >",
              option4:"< DS >",
              answer:"3"
            },
            {
              ques:"The attribute of < form > tag",
              option1:"Method",
              option2:"Action",
              option3:"Both A & B",
              option4:"None of these",
              answer:"3"

            },
            {
              ques:"www is based on which model?",
              option1:"Local-server",
              option2:"Client-server",
              option3:"3-tier",
              option4:"None of these",
              answer:"2",
            },
            {
              ques:"Which of the following attributes of text box control allow to limit the maximum character?",
              option1:"size",
              option2:"len",
              option3:"maxlength",
              option4:"all of these",
              answer:"3",
            }

            ]
            var queslen=questionset.length;
            document.getElementById('num').innerHTML="1/" + queslen;
              var marksarray=[];
            var current=0;
            var marks=0;

            var ele = document.getElementsByName("option");
            for(var i=0;i<ele.length;i++)
            ele[i].checked = false;
            document.getElementById("q1").innerHTML=questionset[current].ques;
            document.getElementById("option1").innerHTML=questionset[current].option1;
            document.getElementById("option2").innerHTML=questionset[current].option2;
            document.getElementById("option3").innerHTML=questionset[current].option3;
            document.getElementById("option4").innerHTML=questionset[current].option4;
            document.getElementById("prev").style.display="none";
            document.getElementById('tryagain').style.display="none";
            document.getElementById("checkans").style.display="none";

            function nextques() {
                  current+=1;

                  displayques();
                }

            function displayques() {
              document.getElementById('num').innerHTML= (current+1) +"/" + queslen;

              var ele = document.getElementsByName("option");
              for(var i=0;i<ele.length;i++)
              ele[i].checked = false;


              document.getElementById("q1").innerHTML=questionset[current].ques;
              document.getElementById("option1").innerHTML=questionset[current].option1;
              document.getElementById("option2").innerHTML=questionset[current].option2;
              document.getElementById("option3").innerHTML=questionset[current].option3;
              document.getElementById("option4").innerHTML=questionset[current].option4;
              document.getElementById('tryagain').style.display="none";
              document.getElementById("checkans").style.display="none";
              check();
            }
            function check() {
              if(current!=0)
              {
                document.getElementById("prev").style.display="inline";
              }
              else {
                    document.getElementById("prev").style.display="none";
              }

              if (current!=queslen-1) {
                document.getElementById("next").style.display="inline";
              }
              else {
                    document.getElementById("next").style.display="none";
              }
            }

            function prevques() {
              current-=1;
              displayques();
                }



                function submitbutton() {
                  for (var i = 0; i < queslen ; i++) {
                    if (marksarray[i]=="correct") {
                      marks=marks+1;
                    }
                            }

                var str= " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Congratulations!!";
                  var final=marks*100/queslen;

                  var str2="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your Score Is " +final +"%";
                var len3="<br>" +"<br>"+ str.fontsize(7) +"<br>"+"<br>"  +str2.fontsize(4);

                document.getElementById('mydiv').style.display="none";
                document.getElementById('score').style.display="inline";
                document.getElementById("s").style.display="none";
                document.getElementById("score").innerHTML=len3;
                document.getElementById('tryagain').style.display="inline";
                document.getElementById("checkans").style.display="inline";
                document.getElementById('next').style.display="none";
                document.getElementById("prev").style.display="none";
                document.getElementById("questiondis").style.display="none";
                document.getElementById('submit').style.display="none";
                document.getElementById("time").style.display="none";
                document.getElementById("tabledisplay").style.display="none";
                document.getElementById("a").style.display="inline";


                }

                    function correctanswer(val ,value) {
                  if (val) {
                    if (value==questionset[current].answer) {
                      marksarray[current]="correct";
                    }
                    else {
                      marksarray[current]=value;
                    }
                  }
                }

                function again() {
                  current=0;
                  marks=0;
                  var ele = document.getElementsByName("option");
                  for(var i=0;i<ele.length;i++)
                  ele[i].checked = false;
                  marksarray[i]=0;
                document.getElementById('score').style.display="none";
                document.getElementById('mydiv').style.display="inline";
                document.getElementById('s').style.display="inline";
                displayques();
                document.getElementById('next').style.display="inline";
                document.getElementById("prev").style.display="none";
                document.getElementById('questiondis').style.display="inline";
                document.getElementById('submit').style.display="inline";
                document.getElementById('time').style.display="inline-block";
                document.getElementById('time').innerHTML =
                  30 + ":" + 00;
                startTimer();
                            }

              function finalanswer() {

                  document.getElementById("checkans").style.display="none";
                    document.getElementById("tryagain").style.display="none";
                var text="";
              for (var i = 0; i < questionset.length; i++) {

                text+=questionset[i].ques;
                text+="<br>";
                text+="YOUR ANSWER :" + "<br>";
                if (marksarray[i]=="correct") {

                  switch (questionset[i].answer) {
                    case 1:text+=questionset[i].option1;
                          break;
                    case 2:text+=questionset[i].option2;
                          break;
                    case 3:text+=questionset[i].option3;
                          break;
                    case 4:text+=questionset[i].option4;
                          break;
                    default:text=text;
                  }
                  var cr = "<strong><span style='color:#108216;font-size:30px'>Correct Answer</span></strong>";
                  text+="<br> "+ cr +"<br> "+ "<br>" +"<hr>";
                }
                else {

                  switch (marksarray[i]) {
                    case 1:text+=questionset[i].option1;
                          break;
                    case 2:text+=questionset[i].option2;
                          break;
                    case 3:text+=questionset[i].option3;
                          break;
                    case 4:text+=questionset[i].option4;
                          break;
                    default:text=text;
                  }
                  var wr="<strong><span style='color:#ff0000;font-size:30px'>Wrong Answer </span></strong>";
                  text+="<br> "+ wr + "<br> "+" <br>" +"<hr>";
                                }

              } document.getElementById("a").innerHTML=text;
              document.getElementById("submit").style.display="none";

            }


document.getElementById('time').innerHTML =
  30 + ":" + 00;
startTimer();
function startTimer() {
  var presentTime = document.getElementById('time').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}

  if (m<10) {
    document.getElementById("time").style.background="#A6FFA6";
  }
  if (m<3) {
    document.getElementById("time").style.background="#B22222";
  }
  if (m==0) {
    submitbutton();
  }
  document.getElementById('time').innerHTML =
   m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec};
  if (sec < 0) {sec = "59"};
  return sec;
}
var t=0;
function tableCreate() {
  t++;
  if (t%2==0) {
    document.getElementById("a").style.display="inline";
    document.getElementById("tabledisplay").style.display="none";
  }
  else {
    document.getElementById("a").style.display="none";
    document.getElementById("tabledisplay").style.display="inline";
  }
}
function qnum(qn) {
  current=qn-1;
  document.getElementById("a").style.display="inline";
  document.getElementById("tabledisplay").style.display="none";
    displayques();
}
