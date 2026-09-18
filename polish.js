(() => {
 const isDetail=location.pathname.includes('/projects/');
 const base=isDetail?'../assets/':'assets/';
 const logo=(file,alt,extra='')=>`<img class="brand-logo ${extra}" src="${base+file}-logo.svg?v=5" alt="${alt}" width="40" height="40">`;
 const rows=document.querySelectorAll('.tool-row b');
 if(rows.length){
  rows[0].innerHTML=logo('excel','')+'<span>Excel</span>';
  rows[1].innerHTML=logo('powerpoint','')+'<span>PowerPoint</span>';
  rows[2].innerHTML=logo('python','','brand-wide')+'<span>Python</span>';
  rows[3].innerHTML=logo('ibm','','brand-wide')+'<span>IBM ILOG<br>CPLEX</span>';
  rows[4].innerHTML='<span class="erp-label" aria-hidden="true">ERP</span><span>ERP</span>';
  rows[5].innerHTML='<span class="dual-brand">'+logo('hancom','한글')+logo('word','Word')+'</span><span>한글 · Word</span>';
 }
 if(location.pathname.endsWith('/winchguard.html')){
  const heading=[...document.querySelectorAll('h2')].find(h=>h.textContent==='인식에서 정지 신호까지');
  const steps=[
   ['01','사람 인식','YOLO-Pose 골격 관절 인식','pose-screen','실제 골격 인식 화면','카메라 영상에서 사람의 관절과 자세를 인식합니다.'],
   ['02','위험 판단','물리 기반 TTE 산출','tte-screen','시험용 TTE 설정 화면','거리와 접근속도로 끼임까지 남은 시간을 계산합니다.'],
   ['03','정지 신호','릴레이 차단 신호','relay-screen','시험용 릴레이 제어 화면','위험 판단을 제어부에 전달해 릴레이 차단 신호로 연결합니다.']
  ];
  heading.nextElementSibling.outerHTML=`<div class="process-steps" aria-label="인식에서 정지 신호까지의 세 단계">${steps.map(([n,title,sub,file,cap,text])=>`<article class="process-step"><div class="step-number">${n}</div><h3>${title}</h3><p class="step-subtitle">${sub}</p><button class="process-screen ${file}" type="button" data-media="${base+file}.svg" data-caption="${cap}" aria-label="${cap} 확대 보기"><img src="${base+file}.svg" alt="${cap}" loading="lazy"><span aria-hidden="true">↗</span></button><p class="step-description">${text}</p><small>${cap}</small></article>`).join('')}</div><p class="process-source">첨부 발표자료의 시험 화면 · 화면에 표시된 설정값은 해당 시험 당시 기준입니다.</p>`;
  const block=document.querySelector('.validation-block');
  block.querySelector('h2').after(block.querySelector('.test-video'));
 }
 document.querySelectorAll('a[href*=".html"]').forEach(a=>{const u=new URL(a.href);if(u.origin===location.origin){u.searchParams.set('media','5');a.href=u.href;}});
})();
