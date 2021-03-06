import { Container, Row, Col } from "styled-bootstrap-grid";
import { Text, H1, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from "UI/Box/Box";
import { GlassCard, GlassCardContent } from "UI/Card/Card";
import { RoundedImage } from "UI/Image/Image";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";

const Class10Slide2 = () => {
    const controls = useSlideAnimationControls();
    return (
        <Container>
            <Row>
                <Col col={7}>
                    <Box pr={5}>
                        <motion.div
                            initial="hidden"
                            animate={controls}
                            variants={variants}
                            exit="exits"
                            custom={0}
                            transition={transition}
                        >
                            <H1 shadow>
                                Principio del último en llegar es el primero en
                                salir
                            </H1>
                        </motion.div>
                    </Box>
                    <Box pr={5}>
                        <motion.div
                            initial="hidden"
                            animate={controls}
                            variants={variants}
                            exit="exits"
                            custom={1}
                            transition={transition}
                        >
                            {/* @ts-ignore */}
                            <GlassCard mt={4} whiteStyle>
                                <p>
                                    Last In First Out (LIFO) o el último en
                                    llegar es el primero en salir se refiere a
                                    un principio en el cual siempre el último
                                    elemento que es agregado a un grupo es el
                                    primero que es eliminado/removido.
                                    <br />
                                    <br />
                                    Imagina por ejemplo una pila de ropa, en la
                                    que siempre estas agregando ropa al
                                    principio y típicamente esa también es la
                                    que sacas primero. A eso es lo que se
                                    refiere este principio.
                                    <br />
                                    <br />
                                    Dejando el ejemplo de lado ya que no aplica, con
                                    este principio no podemos buscar en el medio de la pila,
                                    para eso tendríamos que sacarla toda de una por una.

                                </p>
                            </GlassCard>
                        </motion.div>
                    </Box>
                </Col>
                <Col col={5}>
                    <Box display="flex" justifyContent="flex-end">
                        <motion.div
                            initial="hidden"
                            animate={controls}
                            variants={variants}
                            exit="exits"
                            custom={2}
                            transition={transition}
                        >
                            <RoundedImageContainer mt={6}>
                                <RoundedImage
                                    src={
                                        "/images/class-10/clothe-stack.png"
                                    }
                                    width={658}
                                    height={507}
                                />
                            </RoundedImageContainer>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};
export default Class10Slide2;
