import React from 'react';
import {
  HeroContainer,
  HeroBg,
  ImgBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroLine
} from './CapitalHeroElements';
import capitalBg from '../../images/Capital Background.jpg'
import ParticlesSection from "../Particle"

const CapitalHeroSection = ({t})=>{
  return(
      <HeroContainer>
        <ParticlesSection></ParticlesSection>
        <HeroBg> 
          <ImgBg src={capitalBg} alt="capital background"></ImgBg>
        </HeroBg>
        <HeroContent>
            <HeroH1>{t("capitalTitle")}</HeroH1>
            <HeroLine/>
            <HeroP>{t("capitalSubTitle")}</HeroP>
        </HeroContent>
      </HeroContainer>
    )
}


// function useWindowSize() {
//   // Initialize state with undefined width/height so server and client renders match
//   // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
//   const [windowSize, setWindowSize] = useState({
//     width: undefined,
//     height: undefined,
//   });

//   useEffect(() => {
//     // Handler to call on window resize
//     function handleResize() {
//       // Set window width/height to state
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     }
    
//     // Add event listener
//     window.addEventListener("resize", handleResize);
    
//     // Call handler right away so state gets updated with initial window size
//     handleResize();
    
//     // Remove event listener on cleanup
//     return () => window.removeEventListener("resize", handleResize);
//   }, []); // Empty array ensures that effect is only run on mount

//   return windowSize;
// }

export default CapitalHeroSection