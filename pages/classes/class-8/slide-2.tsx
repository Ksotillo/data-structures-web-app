import { Container, Row, Col } from "styled-bootstrap-grid";
import { Text, H1, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from "UI/Box/Box";
import { GlassCard, GlassCardContent } from "UI/Card/Card";
import { RoundedImage } from "UI/Image/Image";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";

const Class8Slide2 = () => {
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
                                ¿Qué son las Listas Doblemente Enlazadas?
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
                                    Una lista doblemente enlazada, al igual que
                                    las listas enlazadas simples, es una
                                    estructura de datos que consiste en una
                                    serie de nodos conectados.
                                    <br />
                                    <br />
                                    Aquí, cada uno de estos nodos lleva consigo
                                    cierto tipo de datos, una dirección que
                                    apunta al siguiente Nodo y una dirección que
                                    apunta al Nodo anterior.
                                    <br />
                                    <br />
                                    Al igual que las listas enlazadas tenemos un
                                    nodo por dónde podemos empezar el cual
                                    llamamos <i>cabeza (HEAD)</i>y un nodo que
                                    identificamos como el último de nuestra
                                    lista llamado cola o TAIL, que igualmente
                                    apunto a <i>NULL</i>
                                    <br />
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
                                        "/images/class-8/doubly_linked_list.png"
                                    }
                                    width={638}
                                    height={367}
                                />
                            </RoundedImageContainer>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};
export default Class8Slide2;
