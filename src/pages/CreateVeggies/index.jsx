import { useState } from 'react'
import axios from 'axios'

const CreateVeggies = () => {

    const [veggieData, setVeggieData] = useState({
        name: "",
        color: "",
        readyToEat: false,
        age: 0,
        isHealthy: false
    })


    console.log(veggieData);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(veggieData);
        axios({
            method: "POST",
            url: "/server/veggies",
            data: veggieData // YOU WILL FIND THIS DATA IN ***req.body*** OF THE ROUTE
        }).then((res) => {
            console.log(res);
        })
    }
    return (
        <div>
            <h1>New Veggie page</h1>
            <form onSubmit={handleSubmit}>
                Name: <input type="text" name="name" value={veggieData.name} onChange={(e) => setVeggieData({ ...veggieData, name: e.target.value })} />
                <br />
                Color: <input type="text" name="color" value={veggieData.color} onChange={(e) => setVeggieData({ ...veggieData, color: e.target.value })} />
                <br />
                Is Ready To Eat: <input type="checkbox" name="ready" value={veggieData.ready}
                    onChange={(e) => setVeggieData({ ...veggieData, ready: !veggieData.ready })} />
                <br />
                Age: <input type="number" name="age" value={veggieData.age}
                    onChange={(e) => setVeggieData({ ...veggieData, age: +e.target.value })} />
                <br />
            
                <button>Create Veggie</button>
            </form>
        </div>)

}

export default CreateVeggies                                                           