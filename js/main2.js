// main2.js (FULL)
gsap.registerPlugin(ScrollTrigger);

/* -----------------------------
   AOS: 아래로/위로 스크롤 모두에서 정상 동작 + 반복 재생
   - wrapper(container)에는 AOS를 안 걸어서 충돌 제거
----------------------------- */
AOS.init({
    duration: 700,
    once: false,
    mirror: true,
    offset: 80
});

// 이미지/폰트 로드로 레이아웃 변할 수 있으니 한번 더 보정
window.addEventListener("load", () => {
    AOS.refreshHard();
    ScrollTrigger.refresh();
});

// ScrollTrigger가 refresh될 때 AOS도 재계산
ScrollTrigger.addEventListener("refresh", () => AOS.refresh());

/* -----------------------------
   앵커 클릭(부드러운 이동) 후 AOS 판정 씹힘 방지
----------------------------- */
document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", () => {
        setTimeout(() => {
            AOS.refreshHard();
        }, 500);
    });
});

/* -----------------------------
   Header: 스크롤하면 배경/패딩 변경
----------------------------- */
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 10);
});

/* -----------------------------
   1) 히어로 타이틀: 초기 로드 시 등장 (GSAP)
----------------------------- */
gsap.from(".hero__title .split", {
    y: 24,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
    stagger: 0.08,
    delay: 0.1
});

/* -----------------------------
   2) 히어로 배경: 패럴럭스
----------------------------- */
gsap.to(".hero__bg", {
    yPercent: 10,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
    }
});

/* -----------------------------
   3) 인트로 비주얼: 레이어 패럴럭스
----------------------------- */
gsap.to("#parallaxFrame .layer--1", {
    y: 18,
    ease: "none",
    scrollTrigger: { trigger: "#parallaxFrame", start: "top 80%", end: "bottom 20%", scrub: 1 }
});
gsap.to("#parallaxFrame .layer--2", {
    y: 34,
    ease: "none",
    scrollTrigger: { trigger: "#parallaxFrame", start: "top 80%", end: "bottom 20%", scrub: 1 }
});
gsap.to("#parallaxFrame .layer--3", {
    y: 52,
    ease: "none",
    scrollTrigger: { trigger: "#parallaxFrame", start: "top 80%", end: "bottom 20%", scrub: 1 }
});

/* -----------------------------
   4) intro 텍스트 reveal: 왔다갔다할 때마다 play/reverse
   - (AOS가 아니라 GSAP로 처리)
----------------------------- */
gsap.utils.toArray(".reveal").forEach((el) => {
    gsap.fromTo(
        el,
        { y: 18, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play reverse play reverse"
            }
        }
    );
});

/* -----------------------------
   5) 서비스 카드: GSAP 스태거 (AOS와 중복 제거)
----------------------------- */
const serviceCardsEl = document.querySelector("#serviceCards");
if (serviceCardsEl) {
    const cardsTl = gsap.timeline({ paused: true });

    cardsTl.from("#serviceCards .card", {
        y: 18,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08
    });

    ScrollTrigger.create({
        trigger: "#serviceCards",
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => cardsTl.play(0),
        onLeave: () => cardsTl.reverse(),
        onEnterBack: () => cardsTl.play(0),
        onLeaveBack: () => cardsTl.reverse()
    });
}

/* -----------------------------
   6) 숫자 카운트업: 왔다갔다할 때마다 다시 카운트
----------------------------- */
const counters = document.querySelectorAll(".count");

counters.forEach((node) => {
    const target = Number(node.dataset.count || "0");

    ScrollTrigger.create({
        trigger: node,
        start: "top 85%",
        end: "bottom 15%",
        onEnter: () => animateCount(node, target, 1200),
        onEnterBack: () => animateCount(node, target, 1200),
        onLeave: () => (node.textContent = "0"),
        onLeaveBack: () => (node.textContent = "0")
    });
});

function animateCount(el, target, durationMs) {
    const obj = { value: 0 };
    gsap.to(obj, {
        value: target,
        duration: durationMs / 1000,
        ease: "power1.out",
        onUpdate: () => {
            el.textContent = Math.floor(obj.value).toLocaleString("ko-KR");
        }
    });
}
