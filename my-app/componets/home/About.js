import classes from './About.module.scss';
import React from 'react';
import Title from '../text/Title';
import Text from '../text/Text';

function About() {
  return (
    <div className={classes.about}>
        <Title>What is Nayi Recipes</Title>
        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur est 
            animi odio rem accusamus beatae tempora modi, quos incidunt dolorum ut ipsam 
            aliquam tenetur error facere fuga assumenda fugit impedit!
            <br/>
            <br/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod fugit animi quisquam 
            rem. Voluptates placeat cumque corrupti vero veniam? Obcaecati quaerat id maxime quam 
            laudantium aliquid repudiandae quos molestiae provident.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eius maxime nostrum 
            reprehenderit, deserunt commodi quis aut voluptatum! Eius, necessitatibus quo vel 
            quam harum exercitationem fugit delectus fugiat optio aperiam?
            </Text>
    </div>
  )
}

export default About