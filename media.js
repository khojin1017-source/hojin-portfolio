(() => {
 const detail=location.pathname.includes('/projects/');
 const base=detail?'../assets/':'assets/';
 const figure=(file,title,caption='',kind='',ext='svg')=>`<figure class="evidence ${kind}"><button class="media-open" type="button" data-media="${base+file}.${ext}" data-caption="${title}" aria-label="${title} 확대 보기"><img src="${base+file}.${ext}" alt="${title}" loading="lazy" decoding="async"><span class="zoom-mark" aria-hidden="true">↗</span></button><figcaption><strong>${title}</strong>${caption?`<span>${caption}</span>`:''}</figcaption></figure>`;
 const award=(file,title,date)=>figure(file,title,date,'certificate');
 const afterHeading=(title,html)=>{const h=[...document.querySelectorAll('.detail-wrap h2')].find(h=>h.textContent===title);if(h){let next=h.nextElementSibling;while(next&&next.tagName!=='H2'&&!next.classList.contains('buttons'))next=next.nextElementSibling;if(next)next.insertAdjacentHTML('beforebegin',html);else h.parentElement.insertAdjacentHTML('beforeend',html);}};
 if(!detail){
  const card=document.querySelector('[data-project="winchguard"] .project-art');
  card.classList.add('photo-art');
  card.innerHTML=`<img src="${base}winchguard-award.svg" alt="2026 해양수산 창업콘테스트 장관상 수상 현장" loading="lazy"><div class="photo-label"><span>03 / SAFETY & VISION AI</span><h3>WinchGuard</h3><p>아이디어를 현실로, 팀과 함께.</p></div>`;
  const support=document.querySelectorAll('.support');
  support[1].insertAdjacentHTML('beforeend','<p class="evidence-meta">LG Aimers 7기 수료 · 2025.08.25</p>');
  support[2].insertAdjacentHTML('beforeend',figure('bigdata-19','위성영상으로 읽은 산불 피해','2025 경상남도 빅데이터 분석 공모전 · 발표자료')+`<details class="evidence-disclosure"><summary>분석 결과와 수상 기록 보기</summary>${figure('bigdata-21','피해 특성에 따른 복구 우선순위','발표자료의 분석 결과')}${award('award-bigdata','경상남도 빅데이터 분석 공모전 우수상','2025.07.25 · 경남연구원장상')}</details>`);
  const list=document.querySelector('.cert-list');
  ['2024.08 · 한국생산성본부','2024.08 · 한국생산성본부','2025.09.05 · 한국데이터산업진흥원',null,'2025.08.13 응시 · 2027.08.12까지 유효'].forEach((label,i)=>{if(label)list.children[i].querySelector('small').textContent=label;});
  document.querySelector('#credentials .wrap').insertAdjacentHTML('beforeend',`<div class="award-collection"><div class="collection-heading"><div><span class="num">RECOGNITION</span><h3>도전의 과정을 남긴 기록.</h3></div><p>수상 내역을 펼쳐 자세히 볼 수 있습니다.</p></div><details class="evidence-disclosure"><summary>수상 기록 살펴보기 <span>6개 대회</span></summary><div class="award-grid">${award('award-ksie-0','한국산업경영시스템학회 장려상','2026.05.29 · 대학생 프로젝트 경진대회')}${award('award-capstone','경남 공동 캡스톤디자인 최우수상','2025.12.23 · TRIA(MIN)')}${award('award-logistics','스마트물류 문제해결 최우수상','2025.11.21 · 창원특례시장상')}${award('award-fixlink','물류 신사업 아이디어 장려상','2025.11.21 · Team FixLink')}${award('award-bigdata','경남 빅데이터 분석 우수상','2025.07.25 · 경남연구원장상')}${award('award-video','전공탐색 영상 콘텐츠 장려상','2025.07.22 · 국립창원대학교')}</div></details></div>`);
 }
 if(location.pathname.endsWith('/winchguard.html')){
  const hero=document.querySelector('.case-visual');
  hero.outerHTML=figure('winchguard-award','아이디어에서, 장관상까지.','2026.09.15 · 해양수산 창업콘테스트 아이디어 학생부 최우수상','feature-photo');
  afterHeading('인식에서 정지 신호까지',figure('winchguard-device','WinchGuard 장치 설계 이미지','제품 설계 시안','device-render','png'));
  afterHeading('시제품 검증 결과',`<figure class="evidence test-video"><iframe src="https://www.youtube-nocookie.com/embed/qO3_mbJgy8o" title="WinchGuard 시제품 시험 영상" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><figcaption id="test-video-caption"><strong>통제된 시험 환경에서 검증한 결과</strong><span>시제품 시험 영상 · 시험 조건과 측정 범위는 아래 설명 참조</span><a href="https://youtu.be/qO3_mbJgy8o" target="_blank" rel="noopener noreferrer">YouTube에서 영상 보기 ↗</a></figcaption></figure>`);
  const validationHeading=[...document.querySelectorAll('.detail-wrap h2')].find(h=>h.textContent==='시제품 검증 결과');
  const validation=document.createElement('div');validation.className='validation-block';validationHeading.before(validation);let part=validationHeading;
  do{const next=part.nextElementSibling;validation.append(part);part=next;}while(part&&part.tagName!=='H2');
  afterHeading('수상',figure('winchguard-stage','오션엣지의 결선 수상 현장','아이디어 학생부 최우수상 · 해양수산부 장관상','event-photo'));
 }
 if(location.pathname.endsWith('/logistics.html')){
  const buttons=document.querySelector('.detail-wrap > .buttons');
  buttons.insertAdjacentHTML('beforebegin',`<div class="research-extension"><span class="num">2026 / RESEARCH PRESENTATION</span><h2>학회 발표로 이어진 공급망 설계 연구</h2><p>2026년 한국산업경영시스템학회 대학생 프로젝트 경진대회에서는 「수학적 최적화(LRP) 기반 방산 MRO 사업을 위한 공급망 설계 방법론」을 발표하고 장려상을 수상했습니다.</p><p class="evidence-meta">아래 자료는 2026년 학회 발표의 별도 수치실험입니다. 앞서 소개한 2025년 프로젝트의 센터·차량 수 및 계산 시간과 구분됩니다.</p>${figure('ksie-9','국내 물류센터와 지원 경로의 수치실험','2026 학회 발표자료 · 실제 방산 운영 실적이 아닌 모델 실험 결과')}<details class="evidence-disclosure"><summary>모형과 수상 기록 보기</summary>${figure('ksie-4','공급과 회수를 함께 고려한 LRP-PD','2026 학회 발표자료')}${award('award-ksie-0','한국산업경영시스템학회 장려상','2026.05.29')}</details></div>`);
  afterHeading('수상 및 후속 경험',award('award-logistics','스마트물류 문제해결 경진대회 최우수상','2025.11.21 · 창원특례시장상'));
  if(!document.querySelector('img[src*="award-logistics"]'))document.querySelector('.research-extension').insertAdjacentHTML('beforebegin',`<details class="evidence-disclosure"><summary>2025 프로젝트 수상 기록 보기</summary>${award('award-logistics','스마트물류 문제해결 경진대회 최우수상','2025.11.21 · 창원특례시장상')}</details>`);
 }
 document.querySelectorAll('a[href*=".html"]').forEach(a=>{const u=new URL(a.href);if(u.origin===location.origin){u.searchParams.set('media','4');a.href=u.href;}});
 const dialog=document.createElement('dialog');
 dialog.className='media-dialog';dialog.setAttribute('aria-labelledby','media-caption');
 dialog.innerHTML='<div class="viewer-bar"><p id="media-caption"></p><button type="button" class="viewer-close" aria-label="이미지 확대 닫기">닫기 <span aria-hidden="true">×</span></button></div><div class="viewer-image"><img alt=""></div>';
 document.body.append(dialog);
 let opener;
 document.addEventListener('click',e=>{const b=e.target.closest('[data-media]');if(!b)return;opener=b;dialog.querySelector('img').src=b.dataset.media;dialog.querySelector('img').alt=b.dataset.caption;dialog.querySelector('#media-caption').textContent=b.dataset.caption;dialog.showModal();document.body.classList.add('viewer-active');dialog.querySelector('button').focus();});
 dialog.querySelector('button').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
 dialog.addEventListener('close',()=>{document.body.classList.remove('viewer-active');opener?.focus();});
})();
