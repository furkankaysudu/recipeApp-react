import React from 'react'
import { FormStyle } from './Styled'

const Form = () => {
  return (
    <div>
        <FormStyle>
        <form >
            <input type="text" placeholder='food'/>
            <button>search</button>
            <select name="recipeNames" id="recipeNames">
                <option value="breakfast">BREAKFAST</option>
                <option value="dinner">DİNNER</option>
            </select>
        </form>
        </FormStyle>
    </div>
  )
}

export default Form