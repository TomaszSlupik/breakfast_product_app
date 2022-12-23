import React, { useState } from 'react'
import './Addbreakfast.scss'
import {TextField } from '@mui/material'
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function Addbreakfast({meal, setMeal}) {

    const [dataAdd, setDataAdd] = useState(['22-12-2022'])
    const [mealAdd, setMealAdd] = useState([])
    const [value, setValue] = useState(dayjs('2022-12-22T21:11:54'));
    const [uid, setUid] = useState(5)

    const theme = createTheme({
        palette: {
            primary: {
                main: '#584427'
            }
        },
    });

    const style = {
        field: {marinLeft: '0.2em', marginRight: '0.2em'}
    }

    const handleChange = (newValue) => {
        setValue(newValue);
        setDataAdd(`${newValue.$D}-${newValue.$M}-${newValue.$y}`)
      };

    const secondAdd = (e) => {
        setMealAdd(e.target.value)
    }


    const addMeal = (e) => {
        e.preventDefault()
        setUid(uid + 1)
        const newMeal = {
            data: dataAdd, 
            name: mealAdd,
            id: uid
        }

        const allmeal = [...meal, newMeal]

        setMeal(allmeal)
    }

  return (
    <div>
        <div className="addbreakfast">
            <div className="addbreakfast__header">Dodaj śniadanie</div>
            <div className="addbreakfast__boxAdd">
            <ThemeProvider theme={theme}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileDatePicker
                style={style.field}
                label="Data posiłku"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
                />
                </LocalizationProvider>
            <TextField 
            onChange={secondAdd}
            style={style.field} id="outlined-basic" label="Posiłek" variant="outlined" />
            <Button variant="contained"
            onClick={addMeal}
            >Dodaj</Button>
            </ThemeProvider>
            </div>
        </div>
    </div>
  )
}
