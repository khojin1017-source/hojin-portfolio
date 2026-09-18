(() => {
 const card=[...document.querySelectorAll('.support')].find(el=>el.querySelector('h3')?.textContent==='AppSheet 운행일지 시제품');
 if(!card)return;
 card.classList.add('appsheet-card');card.id='appsheet';
 card.insertAdjacentHTML('beforeend',`<div class="appsheet-gallery" aria-label="AppSheet 운행일지 시제품 화면 예시">
 <figure class="appsheet-desktop"><button type="button" data-media="assets/appsheet-dashboard.png" data-caption="운행일지 대시보드 · 화면 예시" aria-label="운행일지 대시보드 확대 보기"><img src="assets/appsheet-dashboard.png" alt="차량별 운행 기록과 주행거리 추이를 보여주는 대시보드 화면 예시" width="1125" height="883" loading="lazy" decoding="async"><span aria-hidden="true">↗</span></button><figcaption>운행 현황을 한눈에.</figcaption></figure>
 <figure class="appsheet-phone"><button type="button" data-media="assets/appsheet-mobile.png" data-caption="모바일 운행일지 · 화면 예시" aria-label="모바일 운행일지 확대 보기"><img src="assets/appsheet-mobile.png" alt="출발지·도착지·주행거리를 입력하는 모바일 운행일지 화면 예시" width="435" height="893" loading="lazy" decoding="async"><span aria-hidden="true">↗</span></button><figcaption>현장에서 바로 기록.</figcaption></figure>
 </div><p class="appsheet-caption">시제품 화면 예시 · 화면 속 데이터는 예시입니다.</p>`);
})();