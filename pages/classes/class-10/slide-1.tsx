import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import TitleSlide from "components/TitleSlide/TitleSlide";

const Class10Slide1 = () => {
    const controls = useSlideAnimationControls();
    return (
        <TitleSlide
            title={"Pilas o Stacks"}
            controls={controls}
            variants={variants}
            transition={transition}
        />
    );
};

export default Class10Slide1;
