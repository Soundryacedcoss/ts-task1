import React from 'react'
type studentProps = {
    name: string,
    age: number,
    qualified: true,
    gender: string
}
export const Student = (props: studentProps) => {

    return (
        <div>
            <h3>  {props.name} is {props.age} year old and {props.qualified ? "qualified" : "not qualified"} and gender is  {props.gender}</h3>
        </div>
    )
}
