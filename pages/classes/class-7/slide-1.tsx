import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import TitleSlide from "components/TitleSlide/TitleSlide";

const Class7Slide1 = () => {
    const controls = useSlideAnimationControls();
    return (
        <TitleSlide
            title={
                "Listas Enlazadas Simples o Singly Linked List"
            }
            controls={controls}
            variants={variants}
            transition={transition}
        />
    );
};

export default Class7Slide1;
