import React from "react";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { GlassCardContent } from "UI/Card/Card";
import ItemsSlide from "components/ItemsSlide/ItemsSlide";
import { CodeBlock, dracula } from "react-code-blocks";


const inheritanceCodeBlock = `
class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)

class Student(Person):
  def __init__(self, fname, lname):
    super().__init__(fname, lname)

x = Student("Mike", "Olsen")
x.printname()

`;

const encapsulationCodeBlock = `
class Person:
  def __init__(self, fname, lname, password):
    self.firstname = fname
    self.lastname = lname
    self._password = password

  def printname(self):
    print(self.firstname, self.lastname)

  def showPassword(self):
    print(self._password)

class Student(Person):
  def __init__(self, fname, lname):
    super().__init__(fname, lname)

x = Student("Mike", "Olsen")
x.printname()

`;

const abstractionCodeBlock = `
from abc import ABC
class Shape(ABC): #abstract class
  def calculate_area(self): #abstract methodpass

class Rectangle(Shape):
  length = 5
  breadth = 3
  
  def calculate_area(self):
    return self.length * self.breadth

class Circle(Shape):
  radius = 4
  def calculate_area(self):
    return 3.14 * self.radius * self.radius

`;

const polymorphismCodeBlock = `
class India():
     def capital(self):
       print("New Delhi")
 
     def language(self):
       print("Hindi and English")
 
class USA():
     def capital(self):
       print("Washington, D.C.")
 
     def language(self):
       print("English")
 
obj_ind = India()
obj_usa = USA()
for country in (obj_ind, obj_usa):
    country.capital()
    country.language()

`;

const items = [
    {
        title: "Herencia",
        Component: () => (
            <GlassCardContent>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={1}
                    transition={transition}
                >
                    La herencia se refiere a las relaciones y subclases entre
                    diferentes objetos que permiten a los programadores usar y
                    reutilizar una l??gica com??n, al mismo tiempo que mantienen
                    una jerarqu??a ??nica. En este proceso, los datos se limpian,
                    transforman y visualizan minimizando la redundancia del
                    c??digo para permitir un an??lisis de datos m??s completo y
                    preciso.
                </motion.p>
                <br />
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={2}
                    transition={transition}
                >
                    <CodeBlock
                        text={inheritanceCodeBlock}
                        language={"python"}
                        showLineNumbers
                        wrapLines
                        theme={dracula}
                    />
                </motion.div>
            </GlassCardContent>
        ),
    },
    {
        title: "Encapsulaci??n",
        Component: () => (
            <GlassCardContent>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={1}
                    transition={transition}
                >
                    La encapsulaci??n se refiere al proceso de yuxtaponer
                    diferentes elementos para construir una entidad ??nica. En
                    este proceso, la implementaci??n y el estado de cada objeto
                    se retienen de forma privada dentro de una clase definida,
                    de modo que otros objetos no pueden realizar cambios en la
                    clase; solo pueden declarar una lista de funciones p??blicas.
                    La encapsulaci??n o la ocultaci??n de datos mejora la
                    seguridad del c??digo y tambi??n previene la corrupci??n de
                    datos.
                </motion.p>
                <br />
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={2}
                    transition={transition}
                >
                    <CodeBlock
                        text={encapsulationCodeBlock}
                        language={"python"}
                        showLineNumbers
                        wrapLines
                        theme={dracula}
                    />
                </motion.div>
            </GlassCardContent>
        ),
    },
    {
        title: "Abstracci??n",
        Component: () => (
            <GlassCardContent>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={1}
                    transition={transition}
                >
                    La abstracci??n se define como el proceso de ocultar la
                    implementaci??n de las funcionalidades y exponer solo
                    aquellas interfaces o m??todos de acceso necesarios para
                    activar los m??todos de la clase de implementaci??n. En otras
                    palabras, los objetos solo regalan aquellas funcionalidades
                    que son relevantes para el uso de otros objetos.
                </motion.p>
                <br />
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={2}
                    transition={transition}
                >
                    <CodeBlock
                        text={abstractionCodeBlock}
                        language={"python"}
                        showLineNumbers
                        wrapLines
                        theme={dracula}
                    />
                </motion.div>
            </GlassCardContent>
        ),
    },
    {
        title: "Polimorfismo",
        Component: () => (
            <GlassCardContent>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={1}
                    transition={transition}
                >
                    Como sugiere su nombre, el polimorfismo se refiere al
                    proceso en el que los objetos pueden tomar m??s de una forma
                    dependiendo de la demanda de las circunstancias. Determina
                    el uso o significado necesario para cada ejecuci??n de ese
                    objeto, eliminando as?? la necesidad de duplicar el c??digo.
                    Los dos m??todos de polimorfismo son: sobrecarga de m??todos y
                    anulaci??n de m??todos.
                </motion.p>
                <br />
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={2}
                    transition={transition}
                >
                    <CodeBlock
                        text={polymorphismCodeBlock}
                        language={"python"}
                        showLineNumbers
                        wrapLines
                        theme={dracula}
                    />
                </motion.div>
            </GlassCardContent>
        ),
    },
];

const Class1Slide4 = () => {
    const controls = useSlideAnimationControls();
    return (
        <ItemsSlide
            title="Principios de la programaci??n orientada a objetos"
            items={items}
            controls={controls}
            transition={transition}
            variants={variants}
            whiteStyleForCards
        />
    );
};

export default Class1Slide4;
