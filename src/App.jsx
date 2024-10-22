
import { useState } from 'react'
import Banner from './components/Banner'
import Header from './components/Header'
import Progress from './components/Progress'
import Recipes from './components/Recipes'

function App() {
  const [recipeItem, setRecipeItem] = useState([])
  const [prepareing, setPrepareing] = useState([])

  //calclate time and calories
  const [totalTime, setTotalTime] =useState(0)
  const [calories, setCalories] =useState(0)
  const countTotal = (time, calori) => {
    setTotalTime(totalTime + Number(time))
    setCalories(calories + Number(calori))
  }

  const handleDelete = id => {
    const deletedRecipe = recipeItem.find(recipe => recipe.id === id);
    const updateRecipe = recipeItem.filter(recipe => recipe.id !== id)
    setRecipeItem(updateRecipe);
    setPrepareing([...prepareing, deletedRecipe])
  }
  const hadelRecipeItem = (recipe) => {
    const isExist = recipeItem.find(pre => pre.id === recipe.id)
    if(!isExist){
      setRecipeItem([...recipeItem, recipe])
    }
    else{
      alert('already added')
    }
  }

  return (
    <>
    <Header/>
    <Banner/>
    <div className='flex flex-col md:flex-row mx-3 md:mx-20 mt-4 md:mt-10 gap-6'>
      <Recipes hadelRecipeItem={hadelRecipeItem}/>
      <Progress recipeItem={recipeItem} handleDelete={handleDelete} prepareing={prepareing} countTotal={countTotal} totalTime={totalTime}  calories={calories}/>
    </div>
    </>
  )
}

export default App
