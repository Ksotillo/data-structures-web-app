import { Container, Row, Col } from "styled-bootstrap-grid";
import { Text, H1, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from "UI/Box/Box";
import { GlassCard, GlassCardContent } from "UI/Card/Card";
import { RoundedImage } from "UI/Image/Image";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";

const Class7Slide2 = () => {
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
                                Pero antes de empezar, necesitamos definir algo
                                fundamental, los nodos ¿Qué es un Nodo?
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
                                    Un nodo es un dispositivo o punto de datos
                                    en una red más grande.
                                    <br />
                                    <br />
                                    Un nodo puede ser un par de cosas diferentes
                                    dependiendo de si la conversación es sobre
                                    informática o redes.
                                    <br />
                                    <br />
                                    En la creación de redes, un nodo es un punto
                                    de conexión, un punto de redistribución o un
                                    punto final de comunicación. En informática,
                                    los nodos son dispositivos o puntos de datos
                                    en una red grande, los dispositivos como PC,
                                    teléfono o impresora se consideran nodos.
                                    <br />
                                    <br />
                                    En general, un nodo tiene una capacidad
                                    programada o diseñada que le permite
                                    reconocer, procesar o reenviar transmisiones
                                    a otros nodos.
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
                                        "/images/class-7/small_directed_network_labeled.png"
                                    }
                                    width={538}
                                    height={520}
                                />
                            </RoundedImageContainer>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};
export default Class7Slide2;
