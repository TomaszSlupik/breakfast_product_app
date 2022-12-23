import React, { useState } from 'react'
import './Breakfast.scss'
import Meal from '../data/db.json'
import Addbreakfast from '../Addbreakfast/Addbreakfast'
import DeleteIcon from '@mui/icons-material/Delete';


export default function Breakfast() {

    const [meal, setMeal] = useState(Meal)
    

    const deleteItem = (id) => {
        console.log(id)
        const newArr = [...meal]
        const allItem = newArr.filter (el => el.id !== id)
        setMeal(allItem)
    }

    const style = {
        bin: {
            color: '#584427', cursor: 'pointer'
        }
    }


  return (
    <div>   
        <Addbreakfast meal={meal} setMeal={setMeal}/>
        <div className="breakfast">
            <div className="breakfast__box">
            <div className="breakfast__box-paper">
                  <div className="listproductbreakfast">
                        <div className="listproductbreakfast__header">Twoje śniadania</div>
                        <div className="listproductbreakfast__table">
                        <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Data</th>
                                    <th scope="col">Posiłek</th>
                                    <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
         
                                    {
                                        meal.map ((el, index) => {
                                            return (
                                                <tr key={index}>
                                                <th scope="row">{el.id}</th>
                                                <td>{el.data}</td>
                                                <td>{el.name}</td>
                                                <td className='listproductbreakfast__table-bindelete'>
                                                    <DeleteIcon
                                                    style={style.bin}
                                                    onClick={() => deleteItem(el.id)}/>
                                                </td>
                                                </tr>   
                                            )
                                        })
                                    }
                              
                                </tbody>
                                </table>
                        </div>
                  </div>
            </div>
                <img className="breakfast__box-img" src={process.env.PUBLIC_URL + '/img/coffee.jpg'} alt="śniadanie z kawą" />
            </div>
        </div>
    </div>
  )
}
