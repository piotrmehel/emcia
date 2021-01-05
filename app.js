const tl=gsap.timeline({defaults:{ease:'power1.out'}});
gsap.registerPlugin(ScrollTrigger);
const a=document.querySelector('.a');
const b=document.querySelector('.b');
const c=document.querySelector('.c');

tl.to('.text',{y:"0%",duration:1,stagger:0.25});
tl.to('.slider',{y:"-100%",duration:1.5,delay:0.5});
tl.to('.intro',{y:"-100%",duration:1},"-=1");

gsap.fromTo(a.children,
    {y:'+=100',opacity:0},
    {y:0,opacity:1,stagger:0.2,
    duration:1,ease:'easeInOut',
    scrollTrigger:{
        trigger:'.a',
        start:'top 65%'
    }});

gsap.fromTo(b.children,
    {y:'+=100',opacity:0},
    {y:0,opacity:1,stagger:0.2,
    duration:1,ease:'easeInOut',
    scrollTrigger:{
        trigger:'.b',
        start:'top 65%'
    }}); 

gsap.fromTo(c.children,
    {y:'+=100',opacity:0},
    {y:0,opacity:1,stagger:0.2,
    duration:1,ease:'easeInOut',
    scrollTrigger:{
        trigger:'.c',
        start:'top 90%'
    }});     
