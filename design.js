/* Consistent outline symbols, decorative wherever a text label is present. */
const iconPaths={
 users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m20 0v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/><circle cx="9" cy="7" r="4"/>',
 network:'<rect x="9" y="2" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/><path d="M12 8v4M5 16v-4h14v4"/>',
 shield:'<path d="M12 3 3 7v5c0 5 9 10 9 10s9-5 9-10V7l-9-4Z"/><path d="m8 12 3 3 5-6"/>',
 mail:'<rect x="2" y="4" width="20" height="16" rx="3"/><path d="m2 6 10 7L22 6"/>',
 arrow:'<path d="M7 17 17 7M7 7h10v10"/>',
 award:'<circle cx="12" cy="8" r="6"/><path d="m8 13-2 9 6-3 6 3-2-9"/>',
 chart:'<path d="M4 19V5m0 14h17M9 15v-4m5 4V7m5 8v-6"/>',
 table:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 9v12M3 15h18"/>',
 presentation:'<path d="M3 3h18M4 3v13h16V3M12 16v5m-4 0 4-5 4 5M8 11l3-3 3 2 3-4"/>',
 code:'<path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18"/>',
 layers:'<path d="m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5"/>',
 file:'<path d="M14 2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9l-7-7Zm0 0v7h7M7 13h10M7 17h7"/>',
 scan:'<path d="M4 8V4h4m8 0h4v4m0 8v4h-4m-8 0H4v-4M2 12h20"/>',
 graduation:'<path d="m2 9 10-5 10 5-10 5L2 9Zm4 2v6c4 3 8 3 12 0v-6m4-2v8"/>',
 globe:'<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>'};
function icon(name){return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${iconPaths[name]||iconPaths.layers}</svg>`}
function allocation(){return `<figure class="diagram" style="margin:0"><svg viewBox="0 0 340 140" role="img" aria-label="작업 난이도와 숙련도를 연결하는 배정 기준 개념도"><g fill="none" stroke="#abc0df" stroke-width="2"><path d="M104 40C174 40 168 101 236 101"/><path d="M104 101C174 101 168 40 236 40"/></g><g fill="#fff"><rect x="5" y="17" width="105" height="47" rx="13"/><rect x="5" y="78" width="105" height="47" rx="13"/><rect x="230" y="17" width="105" height="47" rx="13"/><rect x="230" y="78" width="105" height="47" rx="13"/></g><g fill="#464f5e" text-anchor="middle"><text x="57" y="45">고난도 작업</text><text x="57" y="106">일반 작업</text><text x="282" y="45">경험 보완</text><text x="282" y="106">숙련 인력</text></g><circle cx="170" cy="71" r="19" fill="#0071e3"/><path d="m162 71 6 6 10-12" fill="none" stroke="white" stroke-width="2.5"/></svg><figcaption>난이도·숙련도를 고려한 배정 기준 개념도</figcaption></figure>`}
function logistics(){return `<figure class="diagram" style="margin:0"><svg viewBox="0 0 340 160" role="img" aria-label="물류센터 네 곳과 수요지를 연결한 개념도"><g fill="none" stroke="#a5b6ca" stroke-width="1.5"><path d="M45 35 112 66 190 35 272 72M30 116l82-50 68 66 92-60 47 57M112 66l15 79M190 35l-10 97M45 35 30 116M190 35l96-15"/></g><g fill="#a8b8c9"><circle cx="45" cy="35" r="6"/><circle cx="30" cy="116" r="6"/><circle cx="127" cy="145" r="6"/><circle cx="286" cy="20" r="6"/><circle cx="319" cy="129" r="6"/></g><g fill="#0071e3" stroke="#fff" stroke-width="5"><circle cx="112" cy="66" r="15"/><circle cx="190" cy="35" r="15"/><circle cx="180" cy="132" r="15"/><circle cx="272" cy="72" r="15"/></g><g fill="white" font-size="10" text-anchor="middle"><text x="112" y="70">1</text><text x="190" y="39">2</text><text x="180" y="136">3</text><text x="272" y="76">4</text></g></svg><figcaption>센터·수요지 연결 개념도 · 실제 위치 및 경로와 무관</figcaption></figure>`}
function safety(){return `<div class="diagram"><div class="scan-steps" role="img" aria-label="사람 인식, 위험 판단, 정지 신호 전달 순서"><div class="scan-step">${icon('scan')}<span>사람 인식</span></div><span class="scan-arrow" aria-hidden="true">→</span><div class="scan-step">${icon('code')}<span>위험 판단</span></div><span class="scan-arrow" aria-hidden="true">→</span><div class="scan-step">${icon('shield')}<span>정지 신호</span></div></div><div class="scan-line" aria-hidden="true"></div></div>`}
const art={airforce:allocation,logistics,winchguard:safety};
const home=document.querySelector('.hero-grid');
if(home){
 document.querySelectorAll('#about h2 br').forEach(br=>br.replaceWith(document.createTextNode(' ')));
 document.querySelectorAll('.facts dd br').forEach(br=>br.replaceWith(document.createTextNode(' · ')));
 document.querySelector('nav').insertAdjacentHTML('beforeend','<a class="nav-contact" href="mailto:khojin1017@gmail.com">연락하기</a>');
 home.innerHTML=`<div class="hero-copy"><div class="eyebrow">김호진 · 생산관리 포트폴리오</div><h1>현장을 이해하고,<br><em>더 나은 흐름을 만듭니다.</em></h1><p class="intro">인력 배치부터 물류 최적화, AI 안전장치까지.<br>데이터로 분석하고, 현장에서 답을 찾습니다.</p><div class="buttons"><a class="button primary" href="#projects">프로젝트 살펴보기 ${icon('arrow')}</a><a class="button" href="#about">김호진 알아보기</a></div><p class="hero-meta">국립창원대학교 산업시스템공학과 · 학사 졸업예정</p></div><div class="hero-showcase"><a class="glance-card" href="projects/airforce.html"><span class="glance-label">OPERATIONS</span><h2>사람과 작업의 연결.</h2>${allocation()}<div class="glance-bottom"><span>정비 인력 배치 개선</span>${icon('arrow')}</div></a><a class="glance-card" href="projects/logistics.html"><span class="glance-label">OPTIMIZATION</span><h2>복잡함 속의 최적안.</h2>${logistics()}<div class="glance-bottom"><span>물류센터 입지·경로 설계</span>${icon('arrow')}</div></a><a class="glance-card" href="projects/winchguard.html"><span class="glance-label">SAFETY</span><h2>안전을 먼저 생각하다.</h2>${safety()}<div class="glance-bottom"><span>WinchGuard</span>${icon('arrow')}</div></a></div><div class="award-ribbon">${icon('award')}<span>2026 해양수산창업콘테스트 <strong>최우수상 · 해양수산부 장관상</strong></span><a href="projects/winchguard.html" aria-label="WinchGuard 수상 프로젝트 보기">${icon('arrow')}</a></div>`;
 document.querySelectorAll('.project').forEach((el,i)=>{const slug=['airforce','logistics','winchguard'][i];el.dataset.project=slug;const box=el.querySelector('.project-art');box.querySelector('.art-flow,.mini-metric')?.remove();box.insertAdjacentHTML('beforeend',art[slug]());el.querySelector('.text-link').innerHTML='상세 보기 '+icon('arrow');});
 document.querySelectorAll('.skill').forEach((el,i)=>el.insertAdjacentHTML('afterbegin',`<div class="icon-tile">${icon(['users','network','chart'][i])}</div>`));
 document.querySelectorAll('.support').forEach((el,i)=>el.insertAdjacentHTML('afterbegin',icon(['file','chart','globe','table'][i])));
 document.querySelectorAll('.tool-row b').forEach((el,i)=>el.insertAdjacentHTML('afterbegin',icon(['table','presentation','code','network','layers','file'][i])));
 document.querySelectorAll('.cert-list li').forEach((el,i)=>{el.innerHTML=icon(i===4?'globe':'award')+'<div>'+el.innerHTML+'</div>';});
 document.querySelectorAll('.activity-list h3').forEach((el,i)=>el.insertAdjacentHTML('afterbegin',icon(['graduation','layers','globe','users'][i])));
 document.querySelectorAll('.facts dt').forEach((el,i)=>el.insertAdjacentHTML('afterbegin',icon(['graduation','layers','users','shield'][i])));
 document.querySelector('.profile-intro .text-link').insertAdjacentHTML('afterbegin',icon('mail'));
 document.querySelector('.closing .wrap').insertAdjacentHTML('afterbegin',`<div class="closing-icon">${icon('mail')}</div>`);
 document.querySelector('.closing .button').innerHTML='이메일 보내기 '+icon('arrow');
}else{
 const slug=location.pathname.split('/').pop().replace('.html','');
 if(art[slug])document.querySelector('.detail-wrap').insertAdjacentHTML('afterbegin',`<div class="case-visual ${slug==='winchguard'?'operation':''}">${art[slug]()}${slug==='winchguard'?'<p style="color:#c1cfe1">WinchGuard의 인식·판단·신호 전달 구조</p>':''}</div>`);
}
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
 const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');observer.unobserve(e.target);}}),{threshold:.06});
 document.querySelectorAll('.project,.skill,.support').forEach(el=>{el.classList.add('reveal-ready');observer.observe(el);});
}
