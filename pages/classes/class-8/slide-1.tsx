import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import TitleSlide from "components/TitleSlide/TitleSlide";

const Class8Slide1 = () => {
    const controls = useSlideAnimationControls();
    return (
        <TitleSlide
            title={"Listas Doblemente Enlazadas o Doubly Linked List"}
            controls={controls}
            variants={variants}
            transition={transition}
        />
    );
};

export default Class8Slide1;
