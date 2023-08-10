
setTimeout(animation, 4000);

function animation() {
    // Nav GSAP 
    const tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.from('.profile', { y: '10%', ease: 'power1', opacity: 0, stagger: .1 });

    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.aboutAnimation', {
        y: "50px",
        opacity: 0,
        duration: 0.2,
        ease: "power3",
        stagger: 0.3,
        scrollTrigger: {
            trigger: '.aboutAnimation',
            // markers: true,
            toggleActions: "restart none none none",
            start: "top 40%",
            end: "top 20%",
        }
    });
    gsap.from('.servicesAnimation', {
        y: "50%",
        opacity: 0,
        duration: 0.2,
        ease: "power3",
        stagger: 0.3,
        scrollTrigger: {
            trigger: '.servicesAnimation',
            // markers: true,
            toggleActions: "restart none none none",
            start: "top 40%",
            end: "top 20%",
        }
    });
    gsap.from('.resumeAnimation', {
        y: "50px",
        opacity: 0,
        duration: 0.2,
        ease: "power3",
        stagger: 0.3,
        scrollTrigger: {
            trigger: '.resumeAnimation',
            // markers: true,
            toggleActions: "restart none none none",
            start: "top 40%",
            end: "top 20%",
        }
    });
    gsap.from('.clientAnimation', {
        y: "50px",
        opacity: 0,
        duration: 0.2,
        ease: "power3",
        stagger: 0.3,
        scrollTrigger: {
            trigger: '.clientAnimation',
            // markers: true,
            toggleActions: "restart none none none",
            start: "top 40%",
            end: "top 20%",
        }
    });
    gsap.from('.imgAnimation', {
        y: "50px",
        opacity: 0,
        duration: 0.2,
        ease: "power3",
        stagger: 0.15,
        scrollTrigger: {
            trigger: '.imgAnimation',
            // markers: true,
            toggleActions: "restart none none none",
            start: "top 40%",
            end: "top 20%",
        }
    });
    gsap.from('#contact', {
        y: "50%",
        opacity: 0,
        duration: 0.2,
        ease: "power3",
        stagger: 0.1,
        scrollTrigger: {
            trigger: '#contact',
            // markers: true,
            toggleActions: "restart none none none",
            start: "top 40%",
            end: "top 20%",
        }
    });
}
