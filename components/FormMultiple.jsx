import {userState} from 'react'

export default function FormMultiple (){

const handleChange = (event) => {



// nome do campo de entrada
const name = evnt.target.name


//valor do campo de entrada

const value = event.target.value


setInputs( (value) => ({


...values, [name]:value

})

}

}

const handleSubmit = (event) => {



    event.preventDefault()

    alert(JSON.stringify(inputs))

}

return {


    <div>

    <h3>Formulálrio</h3>
}


<form enSubmit={handleSubmit}>

<input

type="text"

name="username"
value={inputs.username || ""}

placeholder="Username"
enChange={handleChange}

/>
<input
type="number"


</form>
