import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
export const animateWithGSAP = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};

export const animateWithGSAPTimeline = (
  timline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animateProps
) => {
  timline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    rease: "power2.inOut",
  });
  timline.to(
    firstTarget,
    {
      ...animateProps,
      ease: "power2.inOut",
    },
    "<"
  );
  timline.to(
    secondTarget,
    {
      ...animateProps,
      ease: "power2.inOut",
    },
    "<"
  );
};
