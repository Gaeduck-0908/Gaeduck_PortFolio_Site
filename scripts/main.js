const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome");
  await delay(700);
  createText("Starting the server...");
  await delay(1500);
  createText("You can run several commands:");
 
  createCode("1 or about me", "저의 대해 소개하겠습니다.");
  createCode("2 or help", "모든 명령어를 볼 수 있습니다.");
  createCode("3 or projects", "프로젝트, 블로그에 대해 볼 수 있습니다.");
  createCode("4 or social -a", "여러 Social Link 를 볼 수 있습니다.");
  createCode("5 or clear", "터미널 상태를 Clear 합니다.");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/gaeduck-0908";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value.trim();
  if(value === "all" || value === "2"){
    trueValue(value);
    
      createCode("1 or about me", "저의 대해 소개하겠습니다.");
      createCode("2 or help", "모든 명령어를 볼 수 있습니다.");
      createCode("3 or projects", "프로젝트, 블로그에 대해 볼 수 있습니다.");
      createCode("4 or social -a", "여러 Social Link 를 볼 수 있습니다.");
      createCode("5 or clear", "터미널 상태를 Clear 합니다.");
    
  }
  else if(value === "projects" || value === "3"){
    trueValue(value);
    createText("<a href='https://gaeduck-it.notion.site/KimTaeHan-s-Blog-e5b4afabf79c4789a8ea034eef8e60ba?pvs=4' target='_blank'><i class='fa fa-blog white'></i> <span class = 'blue'>KimTaeHan-s-Blog</span> : 공부 기록을 적어놓은 블로그입니다.</a>")
    createText("<a href='https://gaeduck-it.notion.site/GameSecurity_Anti_Reversing-68a1c9a073d748e2a715abacc21dcdde?pvs=4' target='_blank'><i class='fa fa-gamepad white'></i> <span class = 'blue'>GameSecurity-Research</span> : Game 보안에 대해 연구한 프로젝트입니다.</a>")
    createText("<a href='https://gaeduck-it.notion.site/Cobalt-Strike-83bdb8042cef4ceca9b28454a8f5a452?pvs=4' target='_blank'><i class='fa fa-ghost white'></i> <span class = 'blue'>Cobalt-Strike-Analyze</span> : 사이버작전사령부 소속분과 함께한 도구 분석 프로젝트입니다.</a>")
    createText("<a href='https://gaeduck-it.notion.site/CVE-Analyze-495491c30c714273a182bf691262d737?pvs=4' target='_blank'><i class='fa fa-flask white'></i> <span class = 'blue'>CVE-Analyze</span> : CVE 분석 문서입니다.</a>")
    createText("<a href='https://gaeduck-it.notion.site/619f35ba891843feb445b98a8a774da5?pvs=4' target='_blank'><i class='fa fa-book white'></i> <span class = 'blue'>GameDevelop-Guide</span> : 성일정보고등학교 게임개발 가이드 문서입니다.</a>")
  }
  else if(value === "about me" || value === "1"){
    trueValue(value);
    createText("이름 : 김태한")
    createText("(현) 경력 7개월 차 개발자로 ERP 솔루션 기업에서 통합개발팀(주임) 으로 재직중이며 <br>여러 활동을 경험하며 실력을 늘려가고 있습니다. <br>주로 <span class='blue'>Reverse Engineering</span>과 <span class='blue'>Forensic</span> 을 자주하며 <br><span class = 'blue'>Python</span> 개발과 <span class = 'blue'>Rust</span> 개발을 좋아합니다 :)")
    createText("<a href='https://gaeduck-it.notion.site/KimTaeHan-s-PortFolio-6488302a720146cf84166bbdf90bdf63?pvs=4' target='_blank'><i class='fa fa-user white'></i> <span class = 'blue'>Details</span> < 클릭시 활동,수상 경력등 상세 정보 확인이 가능합니다.</a>")
  }
  else if(value === "social -a" || value === "4"){
    trueValue(value);
    createText("<a href='https://github.com/gaeduck-0908' target='_blank'><i class='fab fa-github white'></i> <span class = 'blue'>github.com/gaeduck-0908</span></a>")
    createText("<a href='https://www.linkedin.com/in/taehan-kim-bbabb9287/' target='_blank'><i class='fab fa-linkedin-in white'></i> <span class = 'blue'>linkedin.com/in/taehan-Kim</span></a>")
    createText("<a href='https://www.instagram.com/kimtaehan_0908/' target='_blank'><i class='fab fa-instagram white'></i> <span class = 'blue'>instagram.com/kimtaehan-0908</span></a>")
  }
  else if(value === "social"){
    trueValue(value);
    createText("대신 이걸 입력해주세요. : social -a")
  }
  
  else if(value === "clear" ||  value === "5"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();
