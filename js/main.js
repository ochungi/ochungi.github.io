gsap.registerPlugin(ScrollTrigger);

// AOS: 한 번만 실행
AOS.init({
    duration: 700,
    once: true,
    offset: 80
});

// 헤더: 스크롤하면 배경/패딩 변경
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 10);
});

// 히어로 타이틀: 라인별로 살짝씩 올라오며 등장 (GSAP)
gsap.from(".hero__title .split", {
    y: 24,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
    stagger: 0.08,
    delay: 0.1
});

// 히어로 배경: 스크롤에 따라 천천히 이동(패럴럭스)
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


// 서비스 카드: 한 번만 실행하고 끝 (사라졌다 나타났다 방지)
gsap.from("#serviceCards .card", {
    y: 18,
    opacity: 0,
    duration: 0.7,
    ease: "power3.out",
    stagger: 0.08,
    scrollTrigger: {
        trigger: "#serviceCards",
        start: "top 80%",
        once: true,
        toggleActions: "play none none none"
    }
});

// 숫자 카운트업: 한 번만
const counters = document.querySelectorAll(".count");
counters.forEach((node) => {
    const target = Number(node.dataset.count || "0");

    ScrollTrigger.create({
        trigger: node,
        start: "top 85%",
        once: true,
        onEnter: () => animateCount(node, target, 1200)
    });
});

function animateCount(el, target, durationMs) {
    const obj = { value: 0 };
    gsap.to(obj, {
        value: target,
        duration: durationMs / 1000,
        ease: "power1.out",
        onUpdate: () => {
            const v = Math.floor(obj.value);
            el.textContent = v.toLocaleString("ko-KR");
        }
    });
}
