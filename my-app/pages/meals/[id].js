import React from 'react'
import classes from './meals.module.scss';
import {useRouter} from 'next/router'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import BeatLoader from 'react-spinners/BeatLoader';
import Text from '../../components/text/Text';
import Image from 'next/image';
import Title from '../../components/text/Title';
import PointText from  '../../components/text/PointText';
import IngredientsTable from '../../components/mealspage/IngredientsTable';


const getSingleMeal = async ({queryKey}) => {

    const {data} = await axios.get(`/lookup.php?i=${queryKey[1]}`)
    return data?.meals?.[0];
}

function singleMealPage() {

    const router = useRouter();
    const {id} = router.query;
    const {data, isLoading, isError, error} = useQuery(['singleMeal', id], getSingleMeal)

    if(isError) {
        return(
            <Text>
                Error:{" "}
                {error.message}
            </Text>
        )
    }

    if(isLoading||!data) {
        return (<BeatLoader color="#fff"/>)
    }

    const ingredients = Object.keys(data).filter((key) => 
    key.startsWith('strIngredient')).filter((key) => key[data] !== "" && key[data] !== null)
  
    const ingredientsWithMeasures = ingredients.map((key, index) => (
      {
        index: index + 1,
        ingredient: data[key],
        measure: data[`strMeasure${index + 1}`]
      }
    ))

  return (
    <div className={classes.pageWrapper}>
      <div>
        <Image src={data.strMealThumb} height={300} width={300}>

        </Image>
      </div>
      <div className={classes.info}>
        <Title variant={"primary"}>{data.strMeal}</Title>
        <PointText className={classes.infText}>
          Category:
          {' '}
          {data.strCategory}
        </PointText>
        <PointText className={classes.infText}>
          Area:
          {' '}
          {data.strArea}
        </PointText>
        <PointText className={classes.infText}>
          Tags:
          {' '}
          {data?.strTags?.split(',').join(', ')}
        </PointText>
        <div className={classes.ingredientsTable}>
          <IngredientsTable ingredientsWithMeasures={ingredientsWithMeasures}/>
        </div>
      </div>
    </div>
  )
}

export default singleMealPage
