import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import TitleSlide from "components/TitleSlide/TitleSlide";

const Class5Slide1 = () => {
    const controls = useSlideAnimationControls();
    return (
        <TitleSlide
            title={"Introducción a las Estructuras de Datos"}
            controls={controls}
            variants={variants}
            transition={transition}
        />
    );
};

export default Class5Slide1;
