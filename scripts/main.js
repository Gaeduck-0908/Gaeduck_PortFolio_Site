
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
 
  createCode("about me", "저의 대해 소개하겠습니다.");
  createCode("all", "모든 명령어를 볼 수 있습니다.");
  createCode("projects", "프로젝트, 블로그에 대해 볼 수 있습니다.");
  createCode("social -a", "여러 Social Link 를 볼 수 있습니다.");
  createCode("clear", "터미널 상태를 Clear 합니다.");

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
  if(value === "all"){
    trueValue(value);
    
    createCode("about me", "저의 대해 소개하겠습니다.");
    createCode("all", "모든 명령어를 볼 수 있습니다.");
    createCode("projects", "프로젝트, 블로그에 대해 볼 수 있습니다.");
    createCode("social -a", "여러 Social Link 를 볼 수 있습니다.");
    createCode("clear", "터미널 상태를 Clear 합니다.");
    
  }
  else if(value === "projects"){
    trueValue(value);
    createText("<a href='https://gaeduck-it.notion.site/KimTaeHan-s-Blog-e5b4afabf79c4789a8ea034eef8e60ba?pvs=4' target='_blank'><i class='fa fa-blog white'></i> KimTaeHan-s-Blog</a>")
    createText("<a href='https://gaeduck-it.notion.site/GameSecurity_Anti_Reversing-68a1c9a073d748e2a715abacc21dcdde?pvs=4' target='_blank'><i class='fa fa-blog white'></i> GameSecurity Anti Reversing</a>")
    createText("<a href='https://gaeduck-it.notion.site/CVE-2022-30190-e54a5542fe2f4c60b0349b2c5cb48175?pvs=4' target='_blank'><i class='fa fa-blog white'></i> CVE-2022-30190 Analyze</a>")
  }
  else if(value === "about me"){
    trueValue(value);
    createText("이름 : 김태한")
    createText("(현) 경력 6개월 차 개발자로 ERP 솔루션 기업에서 통합개발팀(주임) 으로 재직중이며 <br>여러 활동을 경험하며 실력을 늘려가고 있습니다. <br>주로 <span class='blue'>Reverse Engineering</span>과 <span class='blue'>Forensic</span> 을 자주하며 <br><span class = 'blue'>Python</span> 개발과 <span class = 'blue'>Rust</span> 개발을 좋아합니다 :)")
  }
  else if(value === "social -a"){
    trueValue(value);
    createText("<a href='https://github.com/gaeduck-0908' target='_blank'><i class='fab fa-github white'></i> github.com/gaeduck-0908</a>")
    createText("<a href='https://www.linkedin.com/in/taehan-kim-bbabb9287/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/taehan-Kim</a>")
    createText("<a href='https://www.instagram.com/kimtaehan_0908/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/kimtaehan-0908</a>")
  }
  else if(value === "social"){
    trueValue(value);
    createText("대신 이걸 입력해주세요. : social -a")
  }
  
  else if(value === "clear"){
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